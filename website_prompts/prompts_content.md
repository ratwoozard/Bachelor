# Prompts til indhold og copy (Person B)

Brug disse prompts **efter** at have indlæst MASTER_CONTEXT_PROMPT og kontekstfilerne (@ PROJECT_CONTEXT, DESIGN_AND_TONE, CONTENT_MAP, FIGURE_AND_ASSETS). Alle prompts forudsætter at AI kender case, tone og indholdsplan.

---

## 1. Meta description til forsiden

Generer en meta description til forsiden (max 155 tegn, dansk) til brug i `<meta name="description" content="...">`. Inkludér nøgleord fra PROJECT_CONTEXT (AI-automatisering, spildtid, SoluTalent, bemandingsproces, KEA) uden at fylde med buzzwords. Tone: akademisk-men-tilgængelig.

---

## 2. Kort "Om projektet"-tekst til forsiden

Generer 3–4 sætninger til forsidens "Om projektet"-sektion. Byg på abstract og CONTENT_MAP (Forside). Indhold: hvad projektet undersøger (AI og spildtid hos Support Solutions/SoluTalent), hvordan (pragmatisk casestudie, artefakt + interviews), og hvad hovedbudskabet er (flaskehalse 4, 6, 7; trade-off effektivitet vs. kontrol). Brug tone fra DESIGN_AND_TONE.

---

## 3. Undertekster til de 8 procestrin (interaktivt diagram)

Generer for hvert af de 8 trin i bemandingsprocessen (PROJECT_CONTEXT: Job Import, AI Enrichment, Auto-Approval Gate, Manuel Curation, AI Matching, Match Review, Notifikation til Freelancer, Bud og Allokering) en kort undertekst (1–2 sætninger) til brug i et interaktivt diagram. Angiv for hvert trin: (a) om det er automatisk eller manuelt, (b) om det er flaskehals (ja/nej), (c) hvad der sker i trinnet. Brug præcist de flaskehalse der står i PROJECT_CONTEXT (trin 4, 6, 7).

---

## 4. Teori-sektion: 2–3 sætninger per teori

Generer til teori-siden 2–3 sætninger til hver af de fire teorier:
- **Lean / Waste (Womack & Jones):** spildtid i vidensarbejde, kategorier, rolle i analysen (USP 1).
- **Procesoptimering (Davenport):** as-is → to-be, rolle (USP 1+2).
- **DSS / Human-in-the-loop (Turban m.fl.):** AI som beslutningsstøtte, rolle (USP 2+3).
- **TOE (Tornatzky & Fleischer):** T, O, E forudsætninger, rolle (USP 4).

Tone: DESIGN_AND_TONE. Fagtermer første gang med kort forklaring.

---

## 5. Captions til figurer (galleri)

Generer korte, læsbare captions til figurerne i FIGURE_AND_ASSETS (process_as_is, ai_pipeline, framework, c4_context, c4_container, er_diagram). Hver caption: max 1–2 sætninger, forklar hvad figuren viser og hvorfor den er relevant for projektet. Brug ikke tekniske filnavne i selve caption-teksten.

---

## 6. Underspørgsmål som brødtekst (Om projektet-siden)

Omsæt de fire underspørgsmål fra PROJECT_CONTEXT til korte, læsbare punkter med evt. 1 sætning forklaring hver, til brug på "Om projektet"-siden under problemformuleringen. Bevar præcision (as-is, struktur/arbejdsdeling, effekt/trade-offs, forudsætninger).

---

## 7. KPI-forklaringer (til KPI-kort på Analyse-siden)

Til hver KPI (Precision@5, Override Rate, MRR, Gns. beslutningstid, Approval Rate) generer en kort forklaring (1–2 sætninger) som brugeren kan læse på hover eller under kortet. Brug definitionerne fra PROJECT_CONTEXT. Formulér så en censor forstår hvad metrikken måler og hvorfor den er relevant for spildtid.

---

*Alle output skal være på dansk og konsistente med PROJECT_CONTEXT og DESIGN_AND_TONE.*
