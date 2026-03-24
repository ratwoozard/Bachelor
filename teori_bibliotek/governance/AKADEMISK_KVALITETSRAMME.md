# Akademisk Kvalitetsramme (teori_bibliotek)

Formaal: Sikre at alle kontekstfiler er censor-robuste, kildekorrekte og metodisk kongruente.

## Acceptance criteria (Definition of Done)

1. Begrebet er forankret i korrekt tier (1/2/3).
2. Tier 1-kilde er eksplicit ved metode/videnskabsteori.
3. Begrebet er koblet til case-scope (`staging_imported -> matched`) hvor relevant.
4. Evidenskrav er specificeret (hvilken datatype understoetter hvilken paastand).
5. Anti-vaghed-felt er udfyldt:
   - maa paastaa direkte
   - kraever ekstra empiri
   - undgaa-formuleringer
6. Min. 3 typiske censorspoergsmaal med svarlinjer er med.
7. Mindst 1 tydelig begraensning er angivet.
8. Kilder er angivet med forfatter + aar; ingen opfundne referencer.
9. Kuada bruges ikke som primaer ontologi/epistemologi-kilde i denne ramme.
10. Terminologi matcher eksisterende vidensbase (`pragmatisme`, `metodepluralisme`, `indlejret case`, `analytisk generaliserbarhed`).

## Review-checkliste pr. fil

- Er paastandstype matchet med korrekt evidenstype?
- Er eventuelle kausalitetsord tonet ned til "paavirker/kan paavirke" hvor noedvendigt?
- Er der tydelig forskel paa analytisk og statistisk generalisering?
- Er bias-risiko naevnt hvor den er relevant?
- Er der krydslinks til eksisterende kernefiler i `docs/`?

## Governance-flow

1. Begreb identificeres via `TAXONOMI.md`.
2. Udkast skrives efter `BEGREBS_SKABELON.md`.
3. Kildekontrol mod Tier-hierarki.
4. Faglig review med checkliste.
5. Krydslinks opdateres i `docs/`.
6. Dato/version opdateres.

## Eskaleringsregel

Hvis en paastand ikke kan forankres i Tier 1-3 eller domaenekilder i repoet, markeres den som:
- "Kraever kildeverifikation foer brug i rapport/forsvar".

Sidst opdateret: 2026-03-23
