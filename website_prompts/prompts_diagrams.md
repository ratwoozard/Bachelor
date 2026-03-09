# Prompts til diagrammer

Brug disse prompts **efter** MASTER_CONTEXT_PROMPT og kontekstfilerne (@ PROJECT_CONTEXT, DESIGN_AND_TONE, FIGURE_AND_ASSETS). Reference også CASE_KNOWLEDGE.md for detaljer om 8 trin og AI-pipeline.

**Output:** Mermaid-kode (`.mmd` eller indlejret i markdown), som I kan vise på hjemmesiden med [Mermaid.js](https://mermaid.js.org/) eller eksportere til SVG/PNG. Alle fakta skal matche PROJECT_CONTEXT og CASE_KNOWLEDGE.

---

## 1. Bemandingsprocessen – 8-trins flowchart (as-is)

Generer et **Mermaid flowchart** (flowchart LR eller TB) der viser SoluTalents bemandingsproces fra job import til allokering.

**Krav:**
- Præcis **8 noder** i rækkefølge: (1) Job Import, (2) AI Enrichment, (3) Auto-Approval Gate, (4) Manuel Curation, (5) AI Matching, (6) Match Review, (7) Notifikation til Freelancer, (8) Bud og Allokering.
- For hvert trin: brug det eksakte navn fra PROJECT_CONTEXT tabel "Bemandingsprocessen – 8 trin".
- **Visuelt skel** mellem automatiske og manuelle trin: fx brug forskellige nodetyper eller stiplede kanter for manuelle. Trin 4, 6 og 7 skal tydeligt markeres som **flaskehalse** (fx med en note eller anden styling i Mermaid: `classDef bottleneck fill:#f96` og `class T4,T6,T7 bottleneck` eller subgraph).
- Pile mellem trin (-->). Ingen ekstra trin; scope er staging_imported → matched (trin 8 slutter med "matched", herefter er kontrakt/fakturering uden for scope).
- Labels på dansk. Kort og læsbare node-tekster (evt. "1. Job Import (Auto)" og "4. Manuel Curation (Flaskehals)").

Lever output som ren Mermaid-kode (```mermaid ... ```) så det kan indsættes i hjemmeside eller fil. Tjek at syntaksen er gyldig (ingen mellemrum i node-id'er hvor det ikke er tilladt, brug citationstegn ved specialtegn).

---

## 2. AI-matchingpipeline – 6 stages

Generer et **Mermaid flowchart** der viser SoluTalents AI-matchingpipeline (indeni trin 5 i bemandingsprocessen).

**Krav:**
- Præcis **6 noder** i rækkefølge: (1) PREFILTER, (2) LOCATION, (3) GATE, (4) AI SCORING, (5) RANKING, (6) PERSIST.
- Kort beskrivelse per stage (som subtekst eller i node-label):
  - PREFILTER: Semantisk søgning + skill-overlap → ~50 kandidater
  - LOCATION: Lokationskompatibilitet (remote/on-site)
  - GATE: Domæne-baserede filtre
  - AI SCORING: GPT-4o-mini (fallback: regelbaseret)
  - RANKING: Score ≥55, top 20
  - PERSIST: Gem i match_requests + match_results
- Input-node før PREFILTER (fx "Job + Freelancer-profiler") og output-node efter PERSIST (fx "Ranked matches (pending review)").
- Pile mellem alle trin. Labels på dansk eller engelsk (pipeline-navnene kan være på engelsk som i koden).
- Ingen ekstra stages – kun disse 6.

Lever output som ren Mermaid-kode. Kan bruges på Analyse/teori-siden eller i et modal ved klik på "AI Matching" i 8-trins diagrammet.

---

## 3. Konceptuelt framework (input → DSS → human → outcomes)

Generer et **Mermaid flowchart** der viser den konceptuelle model: data-inputs → AI/DSS-beslutningsstøtte → menneskelig beslutning (human-in-the-loop) → outcomes.

**Krav:**
- Noder ca.: Input (jobs, freelancer-profiler) → AI/DSS (matching, scoring) → Human review (admin godkender/afviser) → Outcomes (matches, KPI'er).
- Én tydelig boks eller sti for "human-in-the-loop" så det fremgår at AI understøtter, men ikke erstatter, beslutningen.
- Evt. tværgående constraint: "Governance / transparens" eller "Spildtidsmål".
- Labels på dansk. Enkel og læsbar – til teori- eller indledningssektion.

Lever output som ren Mermaid-kode.

---

## 4. (Valgfri) Teoretisk syntese – fire teorier

Generer et **Mermaid diagram** (fx flowchart eller mindmap) der viser hvordan projektets fire teorier hænger sammen:
- **Lean/Waste** → kategoriserer spildtid (USP 1)
- **Davenport (as-is/to-be)** → strukturerer proces (USP 1+2)
- **DSS / Human-in-the-loop** → forklarer AI som støtte (USP 2+3)
- **TOE** → forudsætninger for yderligere automatisering (USP 4)

**Krav:**
- Fire teorier som noder med kort label. Evt. pile til "Analysen" eller "Problemformulering" som centrum.
- Ingen ekstra teorier. Labels på dansk.

Lever output som ren Mermaid-kode. Kan bruges på Teori-siden.

---

## Sådan bruger I diagrammerne på hjemmesiden

1. **Mermaid.js i browser:** Inkludér Mermaid-biblioteket og et `<pre class="mermaid">`-element med koden; Mermaid renderer til SVG.
2. **Statisk SVG:** Kør Mermaid CLI (`mmdc`) eller online editor for at eksportere til SVG/PNG og brug filen som billede.
3. **Samme kode, flere steder:** Gem Mermaid-koden i en fil (fx `diagrams/process_8_steps.mmd`) og genbrug den på forsiden, Analyse-siden og evt. i det interaktive 8-trins komponent.

---

*Data til alle diagrammer findes i PROJECT_CONTEXT.md og CASE_KNOWLEDGE.md. Afvig ikke fra de 8 trin eller de 6 pipeline-stages.*
