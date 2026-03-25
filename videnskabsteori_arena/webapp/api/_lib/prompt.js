function buildSystemPrompt() {
    return [
        'Du er en akademisk assistent der skriver synopsis-udkast på dansk.',
        'Målet er høj faglig kvalitet, tydelig struktur og kritisk refleksion.',
        'Svar KUN med gyldig JSON (ingen markdown-kodeblok).',
        'JSON skal have nøglerne:',
        'problemField, theory, method, analysis, critique, conclusion, sourceNotes.',
        'sourceNotes skal være en array af korte punkter.',
        'Hvis kildedækning er svag, markér det tydeligt i sourceNotes og undgå overdrevne faktapåstande.'
    ].join(' ');
}

function buildUserPrompt(input, topChunks, coverageScore) {
    const retrievalContext = topChunks.length
        ? topChunks
            .map((chunk, index) => {
                const shortText = String(chunk.text || '').slice(0, 1200);
                return `[KILDE ${index + 1}] ${chunk.path}\n${shortText}`;
            })
            .join('\n\n')
        : 'Ingen repo-kilder matchede tydeligt emnet.';

    return [
        `Emne: ${input.topic}`,
        `Målniveau: ${input.gradeTarget}`,
        `Længde: ${input.lengthTarget}`,
        `Tone: ${input.tone}`,
        `Kritiske modargumenter: ${input.includeCounterarguments ? 'ja' : 'nej'}`,
        `Estimeret repo-dækning: ${(coverageScore * 100).toFixed(0)}%`,
        '',
        'Skriv et synopsis-udkast i disse sektioner:',
        '1) Problemfelt',
        '2) Teori',
        '3) Metode',
        '4) Analyse',
        '5) Kritik og begrænsninger',
        '6) Konklusion',
        '',
        'Regler:',
        '- Vær kritisk og akademisk.',
        '- Undgå at opfinde konkrete data.',
        '- Markér hvad der er generisk viden versus repo-understøttet viden.',
        '- Hvis emnet er uden for kildedækning: lever stadig et brugbart udkast, men tydeliggør usikkerhed.',
        '',
        'Repo-kontekst (RAG):',
        retrievalContext
    ].join('\n');
}

module.exports = {
    buildSystemPrompt,
    buildUserPrompt
};
