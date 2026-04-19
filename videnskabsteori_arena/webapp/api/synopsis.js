const { buildSystemPrompt, buildUserPrompt } = require('./_lib/prompt');
const { loadIndex, retrieveTopChunks, estimateCoverage } = require('./_lib/retriever');

const MAX_TOPIC_LENGTH = 500;
const REQUEST_TIMEOUT_MS = 25000;
const OPENROUTER_MAX_RETRIES = 2;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const RATE_LIMIT_BUCKETS = new Map();

function sendJson(res, status, payload) {
    res.status(status).json(payload);
}

function makeRequestId() {
    return `syn_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function logInfo(event, fields = {}) {
    console.log(JSON.stringify({ level: 'info', event, ...fields }));
}

function logError(event, fields = {}) {
    console.error(JSON.stringify({ level: 'error', event, ...fields }));
}

function getClientIp(req) {
    const forward = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
    if (forward) return forward;
    return String(req.socket?.remoteAddress || 'unknown');
}

function checkRateLimit(clientIp) {
    const now = Date.now();
    const bucket = RATE_LIMIT_BUCKETS.get(clientIp);
    if (!bucket || bucket.resetAt <= now) {
        RATE_LIMIT_BUCKETS.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
    }

    if (bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
        return { allowed: false, remaining: 0, retryAfterMs: bucket.resetAt - now };
    }

    bucket.count += 1;
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - bucket.count };
}

function verifyAccessToken(req) {
    const expected = String(process.env.SYNOPSIS_BOT_ACCESS_TOKEN || '').trim();
    if (!expected) return { ok: true };
    const actual = String(req.headers['x-bot-token'] || '').trim();
    return { ok: actual && actual === expected };
}

function validateInput(body) {
    const topic = String(body?.topic || '').trim();
    const gradeTarget = String(body?.gradeTarget || '12');
    const lengthTarget = String(body?.lengthTarget || 'medium');
    const tone = String(body?.tone || 'academic');
    const includeCounterarguments = Boolean(body?.includeCounterarguments);

    if (!topic) {
        return { error: 'Emne mangler.' };
    }
    if (topic.length > MAX_TOPIC_LENGTH) {
        return { error: `Emne er for langt. Maks ${MAX_TOPIC_LENGTH} tegn.` };
    }
    if (!['12', '7', '02'].includes(gradeTarget)) {
        return { error: 'Ugyldigt niveau.' };
    }
    if (!['short', 'medium', 'long'].includes(lengthTarget)) {
        return { error: 'Ugyldig længde.' };
    }
    if (!['academic', 'critical', 'practical'].includes(tone)) {
        return { error: 'Ugyldig tone.' };
    }

    return {
        value: {
            topic,
            gradeTarget,
            lengthTarget,
            tone,
            includeCounterarguments
        }
    };
}

function parseModelJson(content) {
    if (!content) return null;

    const normalized = String(content)
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();

    try {
        return JSON.parse(normalized);
    } catch {
        // Fall back to extracting first JSON object from text.
    }

    const first = normalized.indexOf('{');
    const last = normalized.lastIndexOf('}');
    if (first === -1 || last === -1 || first >= last) return null;

    try {
        return JSON.parse(normalized.slice(first, last + 1));
    } catch {
        return null;
    }
}

function valueToText(value, fallback = 'Ingen tekst genereret.') {
    if (typeof value === 'string') {
        const trimmed = value.trim();
        return trimmed || fallback;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }
    if (Array.isArray(value)) {
        const joined = value
            .map((entry) => valueToText(entry, ''))
            .filter(Boolean)
            .join('\n');
        return joined || fallback;
    }
    if (value && typeof value === 'object') {
        try {
            return JSON.stringify(value, null, 2);
        } catch {
            return fallback;
        }
    }
    return fallback;
}

function ensureShape(parsed) {
    const fallbackText = 'Ingen tekst genereret.';
    return {
        problemField: valueToText(parsed?.problemField, fallbackText),
        theory: valueToText(parsed?.theory, fallbackText),
        method: valueToText(parsed?.method, fallbackText),
        analysis: valueToText(parsed?.analysis, fallbackText),
        critique: valueToText(parsed?.critique, fallbackText),
        conclusion: valueToText(parsed?.conclusion, fallbackText),
        sourceNotes: Array.isArray(parsed?.sourceNotes)
            ? parsed.sourceNotes.map((note) => valueToText(note, '')).filter(Boolean)
            : ['Kildemarkering ikke leveret af modellen.']
    };
}

function shorten(text, max = 900) {
    const clean = String(text || '').replace(/\s+/g, ' ').trim();
    if (clean.length <= max) return clean;
    return `${clean.slice(0, max - 3)}...`;
}

function buildFallbackSynopsis(input, topChunks, coverageScore) {
    const combined = topChunks.map((chunk) => chunk.text || '').join('\n\n');
    const baseText = shorten(combined, 3000);
    const lowCoverage = coverageScore < 0.25;

    const problemField = lowCoverage
        ? `Emnet "${input.topic}" ligger delvist uden for repoets direkte kildedækning. Problemfeltet bør derfor afgrænses eksplicit med tydelig skelnen mellem generelle antagelser og dokumenterbare forhold i casen.`
        : `Problemfeltet omhandler "${input.topic}" med fokus på sammenhæng mellem organisatorisk kontekst, metodevalg og dokumenterbar effekt.`;

    const theory = lowCoverage
        ? 'Teoriafsnittet bør primært bygge på generiske akademiske rammer og kun bruge repo-materiale som støtte, hvor der er reel overlap.'
        : `Teoriafsnittet bør forankres i de rammer der fremgår af repoet (fx metode- og analysegreb), og operationaliseres direkte mod problemfeltet. Kildespor: ${topChunks.map((c) => c.path).slice(0, 3).join(', ') || 'ingen direkte match'}.`;

    const method = `Metodisk anbefales en pragmatisk tilgang med tydelig kobling mellem problemformulering, datagrundlag og analysekriterier. Beskriv både valg, fravalg og kvalitetssikring (validitet/credibility).`;

    const analysis = lowCoverage
        ? `Analyseafsnittet bør eksplicit markere usikkerhed: hvilke pointer bygger på repo-kilder, og hvilke er generiske faglige antagelser. Foreløbig tekstgrundlag: ${baseText || 'Intet tekstgrundlag fundet i indeks.'}`
        : `Analyseafsnittet kan syntetisere de mest relevante repo-uddrag og diskutere implikationer kritisk. Foreløbig tekstgrundlag: ${baseText || 'Intet tekstgrundlag fundet i indeks.'}`;

    const critique = 'Kritiske svagheder bør omfatte: begrænset datadækning, mulig bias i kilderne, risiko for overfortolkning samt generaliserbarhed. Angiv også hvad der kræver yderligere empiri.';

    const conclusion = lowCoverage
        ? 'Konklusionen bør være foreløbig: lever et brugbart synopsisudkast, men understreg at flere eksterne kilder/empiri er nødvendige for et stærkt 12-tals niveau.'
        : 'Konklusionen bør samle fund, metodekonsekvenser og praktiske implikationer i en stram argumentationskæde med tydelige begrænsninger.';

    return {
        problemField,
        theory,
        method,
        analysis,
        critique,
        conclusion,
        sourceNotes: [
            'FALLBACK_MODE: Ingen OpenRouter-key på serveren; svar er genereret uden LLM-kald.',
            `Repo-dækning estimeret til ${Math.round(coverageScore * 100)}%.`,
            'Brug output som udkast og kvalitetssikr med kilder før aflevering.'
        ]
    };
}

async function callOpenRouter(input, topChunks, coverageScore, apiKey) {
    const model = String(process.env.OPENROUTER_MODEL || '').trim() || 'openrouter/auto';
    let lastError = null;

    for (let attempt = 0; attempt <= OPENROUTER_MAX_RETRIES; attempt++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': process.env.OPENROUTER_HTTP_REFERER || 'http://localhost',
                    'X-OpenRouter-Title': 'Synopsis Bot'
                },
                body: JSON.stringify({
                    model,
                    temperature: 0.2,
                    messages: [
                        { role: 'system', content: buildSystemPrompt() },
                        { role: 'user', content: buildUserPrompt(input, topChunks, coverageScore) }
                    ]
                }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (!response.ok) {
                const text = await response.text();
                if (response.status === 401) {
                    throw new Error('OpenRouter 401: ugyldig/manglende API key. Tjek OPENROUTER_API_KEY i Vercel Environment Variables.');
                }
                if (response.status >= 500 && attempt < OPENROUTER_MAX_RETRIES) {
                    await new Promise((resolve) => setTimeout(resolve, 400 * (attempt + 1)));
                    continue;
                }
                throw new Error(`OpenRouter fejl (${response.status}): ${text.slice(0, 200)}`);
            }

            const data = await response.json();
            return data?.choices?.[0]?.message?.content || '';
        } catch (error) {
            clearTimeout(timeoutId);
            lastError = error;
            if (error && error.name === 'AbortError') {
                lastError = new Error(`OpenRouter timeout efter ${REQUEST_TIMEOUT_MS}ms`);
            }
            if (attempt < OPENROUTER_MAX_RETRIES) {
                await new Promise((resolve) => setTimeout(resolve, 400 * (attempt + 1)));
                continue;
            }
            break;
        }
    }
    throw lastError || new Error('OpenRouter ukendt fejl');
}

module.exports = async function handler(req, res) {
    const requestId = makeRequestId();

    if (req.method !== 'POST') {
        return sendJson(res, 405, { error: 'Kun POST er tilladt.', requestId });
    }

    const clientIp = getClientIp(req);
    const auth = verifyAccessToken(req);
    if (!auth.ok) {
        return sendJson(res, 401, { error: 'Ugyldig adgangstoken.', requestId });
    }

    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
        return sendJson(res, 429, {
            error: 'For mange forespørgsler. Prøv igen om lidt.',
            requestId,
            retryAfterMs: rateLimit.retryAfterMs
        });
    }

    const parsedInput = validateInput(req.body);
    if (parsedInput.error) {
        return sendJson(res, 400, { error: parsedInput.error, requestId });
    }

    try {
        const startedAt = Date.now();
        const input = parsedInput.value;
        const indexData = loadIndex();
        const topChunks = retrieveTopChunks(input.topic, indexData, 5);
        const coverageScore = estimateCoverage(topChunks);
        const apiKey = String(process.env.OPENROUTER_API_KEY || '').trim();
        const hasApiKey = Boolean(apiKey && !apiKey.startsWith('indsæt_'));

        let synopsis;
        let coverageMode;

        if (hasApiKey) {
            try {
                const rawContent = await callOpenRouter(input, topChunks, coverageScore, apiKey);
                const parsedModel = parseModelJson(rawContent);
                if (!parsedModel) {
                    throw new Error('Kunne ikke parse JSON fra modeloutput.');
                }
                synopsis = ensureShape(parsedModel);
                coverageMode = coverageScore < 0.25 ? 'generic_with_low_repo_support' : 'repo_grounded';
            } catch (openRouterError) {
                synopsis = buildFallbackSynopsis(input, topChunks, coverageScore);
                synopsis.sourceNotes.push(`OpenRouter fallback grundet fejl: ${String(openRouterError.message || openRouterError)}`);
                coverageMode = 'fallback_after_openrouter_error';
            }
        } else {
            synopsis = buildFallbackSynopsis(input, topChunks, coverageScore);
            coverageMode = 'fallback_without_openrouter_key';
        }
        const citations = topChunks.map((chunk) => ({
            path: chunk.path,
            score: Number(chunk.normalizedScore || 0)
        }));

        logInfo('synopsis_request_success', {
            requestId,
            clientIp,
            coverageMode,
            coverageScore,
            citations: citations.length,
            latencyMs: Date.now() - startedAt,
            model: String(process.env.OPENROUTER_MODEL || '').trim() || 'openrouter/auto',
            usedFallback: coverageMode.indexOf('fallback') !== -1
        });

        return sendJson(res, 200, {
            synopsis,
            coverageScore,
            coverageMode,
            citations,
            sourceNotes: synopsis.sourceNotes,
            indexBuiltAt: indexData.builtAt || null,
            requestId
        });
    } catch (error) {
        logError('synopsis_request_failure', {
            requestId,
            clientIp,
            error: String(error?.message || error || 'Uventet serverfejl')
        });
        return sendJson(res, 500, {
            error: error?.message || 'Uventet serverfejl.',
            requestId
        });
    }
};
