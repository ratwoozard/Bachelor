# Figur-reference: Synopsis og rapport

> Kobling mellem figurer i `Solutalent CODE CONTEXT/figures/` og bachelor-synopsis/rapport.
> Eksamenskrav (Theory of Science 2024E): **punkt 6 = Overview (diagram) of your research structure** – skal leveres som egen figur.

---

## 1. Figurer der findes (CODE CONTEXT)

| Figur | Sti | Formål i rapporten |
|-------|-----|---------------------|
| **Process As-Is** | `figures/process_as_is.mmd` → `figures/export/process_as_is.png` (eller .svg) | Nuværende flow *uden* AI. **NB:** CODE CONTEXT-versionen viser bud→admin→kontrakt→fakturering. For bachelor-scope (*staging_imported* → *matched*) kan samme stil bruges; evt. lav en **bemandings-**variant der kun viser trin 1–8 fra CASE_KNOWLEDGE. |
| **Process To-Be** | `figures/process_to_be.mmd` → `figures/export/process_to_be.png` | Flow *med* AI-beslutningsstøtte. Samme bemærkning: platform-flow er bredere end jeres scope; bemandingsdelen (AI-matching, match review) er direkte brugbar. |
| **Konceptuelt framework** | `figures/framework.mmd` → `figures/export/framework.png` | Inputs → AI/DSS → Beslutningsproces (human-in-the-loop) → Outcomes. **Brug:** Teori/analyse – kobling til DSS og evalueringsmål (time-to-match, godkendelsesrate m.m.). |
| **AI-pipeline** | `figures/ai_pipeline.mmd` → `figures/export/ai_pipeline.png` | AI-matchningspipeline (semantisk + regelbaseret scoring). **Brug:** Artefaktbeskrivelse / metode (hvad I analyserer). |
| **C4 Context** | `figures/c4_context.mmd` → `figures/export/c4_context.png` | Systemkontekst (aktører, eksterne services). **Brug:** Kort arkitektur-overblik i artefaktbeskrivelse. |
| **C4 Container / Component** | `figures/c4_*.mmd` → export | Runtime-containere og logiske moduler. Valgfri for bachelor hvis I holder arkitekturbeskrivelsen kort. |
| **ER-diagram** | `figures/er_diagram.puml`, `er_full.puml` → export | Datamodel. **Brug:** Understøtte operationalisering (match_analytics, timestamps, statusfelter). |

Caption-tekster og evidens: se `Solutalent CODE CONTEXT/FIGURE_CAPTIONS.md` og `FIGURLISTE.md`.

---

## 2. Research structure-diagram (eksamenskrav – skal tilføjes)

**Theory of Science 2024E** kræver som **punkt 6** i synopsis: *"Overview (diagram) of your research structure"*.

Det er **ikke** det samme som framework (inputs→outcomes) eller as-is/to-be. Det er en figur der viser **jeres forskningsdesign** i én kæde, fx:

- **Research philosophy** → Pragmatisme  
- **Research approach** → Abduktion, eksplorativ  
- **Research design** → Single-case, embedded unit (bemandingsworkflowet *staging_imported* → *matched*)  
- **Data collection** → Semistrukturerede interviews, artefaktanalyse SoluTalent, dokumentanalyse  
- **Analysis** → Tematisk kodning, proceskortlægning as-is/to-be, TOE-strukturering, triangulering  
- **Discussion / Conclusion** → Svar på PF og underspørgsmål  

**Anbefaling:** Opret en ny fil fx `Solutalent CODE CONTEXT/figures/research_structure.mmd` (eller i Bachelor-mappen) med et flowchart i stil med B&O-opgavens Figur 3.1, og eksportér til PNG/SVG. Vedlæg den i synopsis som bilag og referér til den under metodik (punkt 5).

---

## 3. Synopsis – hvor figurerne nævnes

I **Bachelor_Synopsis.md** (og Research_Design-versionen) kan I under **Metode** eller **Disposition** tilføje en kort sætning:

- *"Procesdiagrammer (as-is / to-be) for bemandingsworkflowet findes i Solutalent CODE CONTEXT (process_as_is.mmd, process_to_be.mmd); rapporten bruger disse eller en scope-tilpasset variant (staging_imported → matched). Konceptuelt framework og AI-pipeline anvendes som figurer i teori hhv. artefaktbeskrivelse (jf. FIGURE_CAPTIONS.md). Research structure-diagram (overblik over forskningsdesign) vedlægges som bilag til synopsis (eksamenskrav)."*

Når research_structure-figuren er lavet, er det nok at skrive: *"Figur X (bilag) viser overblik over forskningsstrukturen."*

---

## 4. Scope-forskel: CODE CONTEXT vs. bachelor

| | CODE CONTEXT (figurer) | Bachelor (CASE_KNOWLEDGE) |
|--|------------------------|----------------------------|
| **Proces** | Bud → Admin → Kontrakt → Tid → Fakturering | *staging_imported* → … → *matched* (trin 1–8) |
| **Fokus** | Hele platform-flow | Kun bemandingsworkflow (opgave til match) |

De eksisterende process diagrams kan bruges som **stilreference**; for rapportens analyse af spildtid er det mest præcist at have (eller kort beskrive) et **bemandings-** as-is/to-be der kun viser trin 1–8 og markerer flaskehalse (curation, match review, notifikation). I kan evt. kopiere `process_as_is.mmd` til en `process_bemanding_as_is.mmd` og tilpasse trinene til CASE_KNOWLEDGE.
