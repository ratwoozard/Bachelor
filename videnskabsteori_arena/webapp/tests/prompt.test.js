const test = require('node:test');
const assert = require('node:assert/strict');

const { buildSystemPrompt, buildUserPrompt } = require('../api/_lib/prompt');

test('buildSystemPrompt contains strict JSON instruction', () => {
    const prompt = buildSystemPrompt();
    assert.match(prompt, /Svar KUN med gyldig JSON/i);
    assert.match(prompt, /kausalpåstand/i);
});

test('buildUserPrompt includes grade and length requirements', () => {
    const prompt = buildUserPrompt(
        {
            topic: 'Test emne',
            gradeTarget: '12',
            lengthTarget: 'long',
            tone: 'critical',
            includeCounterarguments: true
        },
        [{ path: 'docs/X.md', text: 'Eksempeltekst' }],
        0.7
    );

    assert.match(prompt, /Målniveau: 12/);
    assert.match(prompt, /Længde: long/);
    assert.match(prompt, /Repo-kontekst/);
});
