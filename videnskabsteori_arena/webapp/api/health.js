const { loadIndex } = require('./_lib/retriever');

module.exports = async function healthHandler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ ok: false, error: 'Kun GET er tilladt.' });
    }

    const indexData = loadIndex();
    const hasApiKey = Boolean(String(process.env.OPENROUTER_API_KEY || '').trim());
    const model = String(process.env.OPENROUTER_MODEL || '').trim() || 'openrouter/auto';
    const tokenProtected = Boolean(String(process.env.SYNOPSIS_BOT_ACCESS_TOKEN || '').trim());

    return res.status(200).json({
        ok: true,
        service: 'synopsis-bot',
        timestamp: new Date().toISOString(),
        model,
        hasOpenRouterKey: hasApiKey,
        tokenProtectionEnabled: tokenProtected,
        ragIndex: {
            builtAt: indexData.builtAt || null,
            documentCount: Number(indexData.documentCount || 0),
            chunkCount: Array.isArray(indexData.chunks) ? indexData.chunks.length : 0
        }
    });
};
