# Prompts til "smart" features

Disse prompts er til mere avancerede eller interaktive elementer på hjemmesiden. Brug MASTER_CONTEXT_PROMPT + kontekstfilerne først. Data til 8 trin og KPI'er kommer fra PROJECT_CONTEXT og CASE_KNOWLEDGE.

---

## 1. Interaktivt 8-trins diagram

Lav en interaktiv [HTML+JS / eller React – som i DESIGN_AND_TONE] komponent til de 8 procestrin. Brugeren kan klikke på et trin og se detaljer: (a) automatisk eller manuelt, (b) flaskehals ja/nej, (c) kort beskrivelse af hvad der sker (trigger, output, spildtidsrisiko). Data skal matche tabellen "Bemandingsprocessen – 8 trin" i PROJECT_CONTEXT og CASE_KNOWLEDGE (trin 1–8 med trigger, output, flaskehals). Visuelt: markér trin 4, 6, 7 som flaskehalse (fx anden farve eller ikon). Ingen backend – alt data kan være inline eller i en lille JS/JSON-struktur.

---

## 2. KPI-dashboard-lignende visning

Lav en sektion der viser KPI'erne som et lille "dashboard": Precision@5, Override Rate, MRR, Gns. beslutningstid, Approval Rate. Brug placeholder-tal eller [DATA] og korte forklaringstekster (fx "Precision@5: andel top-5 matches der godkendes"). Format: kort med tal + label + tooltip eller undertekst. Definitioner fra PROJECT_CONTEXT. Kan være statisk (ingen live data). Design: ren og læsbar, matche DESIGN_AND_TONE.

---

## 3. Teori-navigator

Lav en komponent der giver kort oversigt over de fire teorier (Lean, Davenport, DSS, TOE). For hver teori: navn, 1–2 sætninger, evt. "Læs mere"-link til report/03-theory.md eller anchor. Kan være accordion, tabs eller kort i grid. Indhold fra prompts_content.md #4 eller PROJECT_CONTEXT/CONTENT_MAP.

---

## 4. Filtrerbar figur-galleri

Lav et galleri over figurer fra FIGURE_AND_ASSETS med mulighed for at filtrere på type: Proces (process_as_is, ai_pipeline, process_to_be), Arkitektur (c4_context, c4_container, c4_component), Datamodel (er_diagram, er_full), Konceptuel (framework). Hver figur: billede (SVG/PNG), caption, evt. kapitelreference. Filter: knapper eller dropdown. Data kan være hardcodet fra FIGURE_AND_ASSETS. Ingen backend.

---

## 5. Mini checkliste / selvtjek (rapporten)

Lav en lille sektion "Har rapporten …?" med en simpel checkliste: (1) De fire teorier (Lean, Davenport, DSS, TOE), (2) De fire underspørgsmål besvaret, (3) Bias-refleksion (praktikant/medudvikler), (4) Scope: staging_imported → matched. Kan være accordion eller liste med checkmarks. Formål: hjælpe læseren (eller jer) med at huske rapportens kernekrav. Ikke som erstatning for selve rapporten.

---

*Alle features skal kunne køre statisk (ingen krav om backend eller API) medmindre I eksplicit tilføjer det. Brug PROJECT_CONTEXT for alle fakta.*
