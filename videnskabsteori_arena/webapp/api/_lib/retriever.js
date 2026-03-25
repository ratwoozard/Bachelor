const fs = require('node:fs');
const path = require('node:path');

const STOP_WORDS = new Set([
    'og', 'i', 'på', 'af', 'for', 'med', 'til', 'en', 'et', 'det', 'de', 'der',
    'som', 'er', 'at', 'om', 'den', 'har', 'fra', 'ved', 'kan', 'skal', 'man',
    'the', 'and', 'to', 'of', 'in', 'a', 'is', 'that', 'with', 'as', 'be', 'or'
]);

function loadIndex() {
    const indexPath = path.resolve(process.cwd(), 'data', 'rag-index.json');
    if (!fs.existsSync(indexPath)) {
        return { chunks: [], docs: [], builtAt: null };
    }

    try {
        const raw = fs.readFileSync(indexPath, 'utf8');
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.chunks)) {
            return { chunks: [], docs: [], builtAt: parsed.builtAt || null };
        }
        return parsed;
    } catch {
        return { chunks: [], docs: [], builtAt: null };
    }
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

function scoreChunk(queryTokens, chunk) {
    if (!queryTokens.length || !chunk || !chunk.tokenFreq) return 0;
    let score = 0;
    queryTokens.forEach((token) => {
        const tf = chunk.tokenFreq[token] || 0;
        if (tf) {
            score += tf;
        }
    });
    return score;
}

function retrieveTopChunks(query, indexData, topK = 5) {
    const chunks = Array.isArray(indexData?.chunks) ? indexData.chunks : [];
    const queryTokens = tokenize(query);
    if (!queryTokens.length || !chunks.length) return [];

    const scored = chunks
        .map((chunk) => ({
            ...chunk,
            score: scoreChunk(queryTokens, chunk)
        }))
        .filter((entry) => entry.score > 0)
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
    const scoreAvg = topChunks.reduce((sum, chunk) => sum + chunk.normalizedScore, 0) / topChunks.length;
    return Math.max(0, Math.min(1, scoreAvg));
}

module.exports = {
    loadIndex,
    retrieveTopChunks,
    estimateCoverage
};
