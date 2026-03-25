const { buildSystemPrompt, buildUserPrompt } = require('./_lib/prompt');
const { loadIndex, retrieveTopChunks, estimateCoverage } = require('./_lib/retriever');

const MAX_TOPIC_LENGTH = 500;

function sendJson(res, status, payload) {
    res.status(status).json(payload);
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
    try {
        return JSON.parse(content);
    } catch {
        // Fall back to extracting first JSON object from text.
    }

    const first = content.indexOf('{');
    const last = content.lastIndexOf('}');
    if (first === -1 || last === -1 || first >= last) return null;

    try {
        return JSON.parse(content.slice(first, last + 1));
    } catch {
        return null;
    }
}

function ensureShape(parsed) {
    const fallbackText = 'Ingen tekst genereret.';
    return {
        problemField: String(parsed?.problemField || fallbackText),
        theory: String(parsed?.theory || fallbackText),
        method: String(parsed?.method || fallbackText),
        analysis: String(parsed?.analysis || fallbackText),
        critique: String(parsed?.critique || fallbackText),
        conclusion: String(parsed?.conclusion || fallbackText),
        sourceNotes: Array.isArray(parsed?.sourceNotes)
            ? parsed.sourceNotes.map((note) => String(note))
            : ['Kildemarkering ikke leveret af modellen.']
    };
}

async function callOpenRouter(input, topChunks, coverageScore) {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        throw new Error('OPENROUTER_API_KEY mangler på serveren.');
    }

    const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': process.env.OPENROUTER_HTTP_REFERER || 'http://localhost',
            'X-Title': 'Synopsis Bot'
        },
        body: JSON.stringify({
            model,
            temperature: 0.3,
            messages: [
                { role: 'system', content: buildSystemPrompt() },
                { role: 'user', content: buildUserPrompt(input, topChunks, coverageScore) }
            ]
        })
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`OpenRouter fejl (${response.status}): ${text.slice(0, 300)}`);
    }

    const data = await response.json();
    return data?.choices?.[0]?.message?.content || '';
}

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return sendJson(res, 405, { error: 'Kun POST er tilladt.' });
    }

    const parsedInput = validateInput(req.body);
    if (parsedInput.error) {
        return sendJson(res, 400, { error: parsedInput.error });
    }

    try {
        const input = parsedInput.value;
        const indexData = loadIndex();
        const topChunks = retrieveTopChunks(input.topic, indexData, 5);
        const coverageScore = estimateCoverage(topChunks);
        const coverageMode = coverageScore < 0.25 ? 'generic_with_low_repo_support' : 'repo_grounded';

        const rawContent = await callOpenRouter(input, topChunks, coverageScore);
        const parsedModel = parseModelJson(rawContent);
        if (!parsedModel) {
            throw new Error('Kunne ikke parse JSON fra modeloutput.');
        }

        const synopsis = ensureShape(parsedModel);
        const citations = topChunks.map((chunk) => ({
            path: chunk.path,
            score: Number(chunk.normalizedScore || 0)
        }));

        return sendJson(res, 200, {
            synopsis,
            coverageScore,
            coverageMode,
            citations,
            sourceNotes: synopsis.sourceNotes,
            indexBuiltAt: indexData.builtAt || null
        });
    } catch (error) {
        return sendJson(res, 500, {
            error: error.message || 'Uventet serverfejl.'
        });
    }
};
