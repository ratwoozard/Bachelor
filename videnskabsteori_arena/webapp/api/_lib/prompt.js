function buildSystemPrompt() {
    return [
        'Du er en akademisk assistent der skriver synopsis-udkast på dansk.',
        'Målet er høj faglig kvalitet, tydelig struktur og kritisk refleksion.',
        'Svar KUN med gyldig JSON (ingen markdown-kodeblok).',
        'JSON skal have nøglerne:',
        'problemField, theory, method, analysis, critique, conclusion, sourceNotes.',
        'sourceNotes skal være en array af korte punkter.',
        'Alle værdier skal være rene tekststrenge (ikke objekter/arrays) undtagen sourceNotes.',
        'Undgå [object Object] eller nested JSON i sektionerne.',
        'Hvis kildedækning er svag, markér det tydeligt i sourceNotes og undgå overdrevne faktapåstande.',
        'Påstande uden direkte kildeunderstøttelse skal markeres som antagelser.',
        'Undgå kausalpåstande uden evidens.'
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
        '- Hver sektion skal være 80-180 ord ved short, 120-260 ord ved medium, 180-360 ord ved long.',
        '- Inkludér mindst 3 evidenshuller i critique-sektionen.',
        '- sourceNotes skal indeholde 4-6 korte punkter med kilde-/usikkerhedsmarkering.',
        `- Prioritér niveau ${input.gradeTarget}: 12 = høj stringens/kritik, 7 = balanceret, 02 = grundlæggende.`,
        '',
        'Repo-kontekst (RAG):',
        retrievalContext
    ].join('\n');
}

module.exports = {
    buildSystemPrompt,
    buildUserPrompt
};
