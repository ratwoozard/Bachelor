const fs = require('node:fs');
const path = require('node:path');

const STOP_WORDS = new Set([
    'og', 'i', 'på', 'af', 'for', 'med', 'til', 'en', 'et', 'det', 'de', 'der',
    'som', 'er', 'at', 'om', 'den', 'har', 'fra', 'ved', 'kan', 'skal', 'man',
    'the', 'and', 'to', 'of', 'in', 'a', 'is', 'that', 'with', 'as', 'be', 'or'
]);

function loadIndex() {
    const candidates = [
        // Preferred: relative to this file (api/_lib -> webapp/data).
        path.resolve(__dirname, '..', '..', 'data', 'rag-index.json'),
        // Fallback: when cwd is webapp.
        path.resolve(process.cwd(), 'data', 'rag-index.json'),
        // Fallback: when cwd is repo root.
        path.resolve(process.cwd(), 'videnskabsteori_arena', 'webapp', 'data', 'rag-index.json')
    ];

    for (const indexPath of candidates) {
        if (!fs.existsSync(indexPath)) continue;
        try {
            const raw = fs.readFileSync(indexPath, 'utf8');
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed.chunks)) {
                return { chunks: [], docs: [], builtAt: parsed.builtAt || null };
            }
            return parsed;
        } catch {
            // Try next candidate.
        }
    }

    return { chunks: [], docs: [], builtAt: null };
}

function normalizeText(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function tokenize(value) {
    return normalizeText(value)
        .split(' ')
        .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function scoreChunk(queryTokens, chunk, idfByToken, averageDocLength) {
    if (!queryTokens.length || !chunk || !chunk.tokenFreq) return 0;
    const k1 = 1.5;
    const b = 0.75;
    const tokenFreq = chunk.tokenFreq;
    const docLength = Object.values(tokenFreq).reduce((sum, n) => sum + n, 0) || 1;

    let bm25Score = 0;
    queryTokens.forEach((token) => {
        const tf = tokenFreq[token] || 0;
        if (!tf) return;
        const idf = idfByToken[token] || 0;
        const denominator = tf + k1 * (1 - b + b * (docLength / (averageDocLength || 1)));
        bm25Score += idf * ((tf * (k1 + 1)) / denominator);
    });

    // Prioritize chunks from curated authoritative files when available.
    const priorityBoost = Number(chunk.docPriority || 1);
    return bm25Score * priorityBoost;
}

function buildIdfMap(chunks) {
    const tokenDocumentFrequency = {};
    chunks.forEach((chunk) => {
        const uniqueTokens = new Set(Object.keys(chunk.tokenFreq || {}));
        uniqueTokens.forEach((token) => {
            tokenDocumentFrequency[token] = (tokenDocumentFrequency[token] || 0) + 1;
        });
    });

    const totalDocs = chunks.length || 1;
    const idfByToken = {};
    Object.keys(tokenDocumentFrequency).forEach((token) => {
        const df = tokenDocumentFrequency[token];
        // Smoothed BM25 IDF.
        idfByToken[token] = Math.log(1 + ((totalDocs - df + 0.5) / (df + 0.5)));
    });
    return idfByToken;
}

function retrieveTopChunks(query, indexData, topK = 5) {
    const chunks = Array.isArray(indexData?.chunks) ? indexData.chunks : [];
    const queryTokens = tokenize(query);
    if (!queryTokens.length || !chunks.length) return [];

    const idfByToken = buildIdfMap(chunks);
    const averageDocLength = chunks.reduce((sum, chunk) => {
        const length = Object.values(chunk.tokenFreq || {}).reduce((acc, n) => acc + n, 0);
        return sum + (length || 1);
    }, 0) / chunks.length;
    const minScoreThreshold = Number(process.env.RAG_MIN_SCORE_THRESHOLD || 0.15);

    const scored = chunks
        .map((chunk) => ({
            ...chunk,
            score: scoreChunk(queryTokens, chunk, idfByToken, averageDocLength)
        }))
        .filter((entry) => entry.score > minScoreThreshold)
        .sort((a, b) => b.score - a.score)
        .slice(0, topK);

    const maxScore = scored[0]?.score || 1;
    return scored.map((entry) => ({
        ...entry,
        normalizedScore: entry.score / maxScore
    }));
}

function estimateCoverage(topChunks) {
    if (!topChunks.length) return 0;
    const normalizedAverage = topChunks.reduce((sum, chunk) => sum + chunk.normalizedScore, 0) / topChunks.length;
    const sourceDiversity = Math.min(1, new Set(topChunks.map((chunk) => chunk.path)).size / 3);
    // Combined metric: relevance + diversity for more realistic grounding.
    const weighted = normalizedAverage * 0.75 + sourceDiversity * 0.25;
    return Math.max(0, Math.min(1, weighted));
}

module.exports = {
    loadIndex,
    retrieveTopChunks,
    estimateCoverage
};
