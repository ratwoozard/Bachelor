const test = require('node:test');
const assert = require('node:assert/strict');

const handler = require('../api/synopsis');
const originalAccessToken = process.env.SYNOPSIS_BOT_ACCESS_TOKEN;
process.env.SYNOPSIS_BOT_ACCESS_TOKEN = '';

function makeRes() {
    return {
        statusCode: 200,
        body: null,
        status(code) {
            this.statusCode = code;
            return this;
        },
        json(payload) {
            this.body = payload;
            return this;
        }
    };
}

test('rejects non-POST method', async () => {
    const req = {
        method: 'GET',
        headers: {},
        socket: {}
    };
    const res = makeRes();
    await handler(req, res);

    assert.equal(res.statusCode, 405);
    assert.ok(res.body.error);
});

test('validates empty topic', async () => {
    const req = {
        method: 'POST',
        headers: {},
        socket: {},
        body: {
            topic: ''
        }
    };
    const res = makeRes();
    await handler(req, res);

    assert.equal(res.statusCode, 400);
    assert.match(res.body.error, /Emne mangler/i);
});

test('returns fallback synopsis without api key', async () => {
    const before = process.env.OPENROUTER_API_KEY;
    process.env.OPENROUTER_API_KEY = '';

    const req = {
        method: 'POST',
        headers: { 'x-forwarded-for': '127.0.0.1' },
        socket: {},
        body: {
            topic: 'AI i rekruttering',
            gradeTarget: '12',
            lengthTarget: 'short',
            tone: 'academic',
            includeCounterarguments: true
        }
    };
    const res = makeRes();
    await handler(req, res);

    assert.equal(res.statusCode, 200);
    assert.equal(typeof res.body.synopsis.problemField, 'string');
    assert.ok(res.body.coverageMode);

    process.env.OPENROUTER_API_KEY = before;
});

test.after(() => {
    process.env.SYNOPSIS_BOT_ACCESS_TOKEN = originalAccessToken;
});
