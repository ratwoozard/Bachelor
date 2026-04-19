const test = require('node:test');
const assert = require('node:assert/strict');

const { retrieveTopChunks, estimateCoverage } = require('../api/_lib/retriever');

test('retrieveTopChunks ranks higher-priority matching chunk first', () => {
    const indexData = {
        chunks: [
            {
                path: 'docs/A.md',
                tokenFreq: { ai: 3, matching: 2, metode: 1 },
                docPriority: 1.35
            },
            {
                path: 'docs/B.md',
                tokenFreq: { ai: 3, matching: 2, metode: 1 },
                docPriority: 1
            }
        ]
    };

    const top = retrieveTopChunks('AI matching metode', indexData, 2);
    assert.equal(top.length, 2);
    assert.equal(top[0].path, 'docs/A.md');
    assert.ok(top[0].normalizedScore >= top[1].normalizedScore);
});

test('estimateCoverage returns value in range', () => {
    const coverage = estimateCoverage([
        { path: 'docs/one.md', normalizedScore: 1 },
        { path: 'docs/two.md', normalizedScore: 0.5 }
    ]);
    assert.ok(coverage >= 0 && coverage <= 1);
});
