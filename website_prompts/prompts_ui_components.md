# Prompts til UI og komponenter (Person A)

Brug disse prompts **efter** at have indlæst MASTER_CONTEXT_PROMPT og kontekstfilerne. Output-format (HTML, React, Astro) skal matche det I har angivet i DESIGN_AND_TONE under "Teknisk stack".

---

## 1. Hero-sektion

Generer en Hero-sektion til forsiden med:
- Titel: "AI-automatisering i bemandingsprocessen" (evt. fuld titel fra PROJECT_CONTEXT).
- Undertitel: 1–2 sætninger der rammer projektets kerne (SoluTalent, spildtid, Support Solutions).
- Evt. CTA-knap: "Læs rapporten" eller "Se metode og resultater" (link kan være placeholder #rapport eller #analyse).

Brug semantisk markup (fx `<header>`, `<h1>`) og tilgængelige farver/typografi. Output som [HTML/CSS eller React/Astro – som angivet i DESIGN_AND_TONE].

---

## 2. Proces 8-trins sektion

Generer en sektion der viser de 8 trin i bemandingsprocessen (PROJECT_CONTEXT: tabel "Bemandingsprocessen – 8 trin"). For hvert trin: vis nummer, navn, type (Auto/Manuelt), og om det er flaskehals (Ja/Nej). Brug placeholders til kort beskrivelsestekst per trin (teksten kan udfyldes fra prompts_content.md #3). Design: fx kort/grid så det er læsbart på både mobil og desktop. Markér visuelt de tre flaskehalse (4, 6, 7).

---

## 3. KPI-cards sektion

Generer en sektion med 4–6 KPI-kort. Hvert kort: KPI-navn (Precision@5, Override Rate, MRR, Gns. beslutningstid, Approval Rate), placeholder for tal (fx "[DATA]" eller "—"), og plads til kort forklaringstekst (kan indsættes fra prompts_content.md #7). Labels og definitioner fra PROJECT_CONTEXT. Layout: grid af kort, responsivt.

---

## 4. Figur-galleri komponent

Generer en komponent (eller statisk sektion) til figur-galleri: for hver figur i FIGURE_AND_ASSETS (mindst process_as_is, ai_pipeline, framework) vis thumbnail eller direkte billede, caption under figuren, og evt. link til rapportens figurliste eller PDF. Brug figur-id og filstier fra FIGURE_AND_ASSETS (fx process_as_is.svg). Captions kan indsættes fra prompts_content.md #5 eller FIGURE_AND_ASSETS "Korte captions".

---

## 5. Footer

Generer en footer med: forfattere (Benjamin & Luka), uddannelse (Bachelor i Økonomi & IT), institution (KEA – Københavns Erhvervsakademi), år (2026), evt. link til rapport (placeholder # eller path til report/REPORT.md / PDF). Simpel, læsbar styling.

---

## 6. Navigation

Generer en navigationskomponent (navbar eller sidebar) med links til: Forside, Om projektet, Metode, Teori, Analyse/Resultater, Konklusion, Figurer/Bilag. Konsistent med CONTENT_MAP. Mobilvenlig (evt. hamburger-menu). Semantisk: `<nav>`, anker-links.

---

## 7. Teori-kort (4 teorier)

Generer 4 kort eller blokke (én per teori): Lean, Davenport, DSS, TOE. Hvert kort: teori-navn, 2–3 sætninger beskrivelse (indhold kan fra prompts_content.md #4), evt. "Læs mere"-link til rapportens teori-kapitel. Layout: grid eller accordion. Brug DESIGN_AND_TONE for tone.

---

*Output skal matche den valgte tech stack i DESIGN_AND_TONE og være tilgængelige (semantik, kontrast).*
