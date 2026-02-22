# Consistency Checklist — Figurpakke

> **Formål**: Tjekliste til kvalitetssikring af alle figurer ved fremtidige ændringer.  
> **Brug**: Gennemgå listen efter enhver ændring i `.mmd`/`.puml`-filer.

---

## 1. Terminologi (skal være ens på tværs af alle figurer)

| Begreb | Korrekt label | Bruges i |
|---|---|---|
| Freelancer | "Freelancer" | F1, F3, F6, F7, F8 |
| Admin | "Admin" (evt. med *Support Solutions* i parentes) | F1, F3, F6, F7 |
| Virksomhed | "Virksomhed" | F3 |
| Job/projekt | "Job-/projektdata" (input) eller "jobs" (tabel) | F1, F2, F3, F8 |
| Bud | "Bud" / "afgiver bud" | F6, F7 |
| Match-resultat | "Match-resultater" (DB) / "match_results" (tabel) | F1, F7, F8 |
| Kontrakt | "Kontrakt" | F6, F7, F8 |
| AI-beslutningsstøtte | "AI-beslutningsstøtte" (IKKE "AI-matching-modul") | F1, F2, F7 |
| Admin gennemgang | "Admin gennemgang" (IKKE "Admin review") | F1, F6, F7 |
| Human-in-the-loop | "Menneskelig beslutning" (i legend) | F1, F2, F7 |
| Dual-signature | "Dual-signature" (Admin + Freelancer) | F6, F7 |
| Tidsregistrering | "Tidsregistrering" | F6, F7 |
| Fakturering | "Fakturering via E-conomic" | F6, F7 |
| AI-trigger | "On-demand" (IKKE automatisk) | F1, F7 |

**Regel**: Alle labels er på dansk. Tekniske navne (tabelnavne, API-navne) er på engelsk i kursiv.

---

## 2. Farvekoder (design system)

| Farve | Hex (fill) | Semantik | Bruges i |
|---|---|---|---|
| Blå (lys) | `#e3f2fd` | Data input / system | F1, F3, F4, F5, F6, F7 |
| Grøn (lys) | `#e8f5e9` | AI-behandling / frontend | F1, F2, F4, F5, F7 |
| Orange (lys) | `#fff3e0` | Menneskelig beslutning / aktører | F1, F2, F3, F6, F7 |
| Lilla (lys) | `#f3e5f5` | Outcomes / fakturering | F2, F6, F7 |
| Rød (lys) | `#fce4ec` | Datastore (DB) | F1, F7 |
| Gul (lys) | `#fff9c4` | Beslutningspunkt (diamond) | F1 |
| Grå (lys) | `#f5f5f5` | Ekstern service / governance | F2, F3, F4, F5 |
| Hvid | `#ffffff` | Start-/slutpunkter | F6, F7 |

**Regel**: Stroke-farve er altid en mørk variant af fill-farven. Stroke-width: 2px standard, 3px for primære beslutningspunkter.

---

## 3. Notation (Mermaid)

| Element | Mermaid-syntaks | Semantik |
|---|---|---|
| Rektangel | `["Label"]` | Procestrin / komponent |
| Cylinder | `[("Label")]` | Datastore (database) |
| Diamond | `{"Label"}` | Menneskelig beslutning |
| Stadium | `(["Label"])` | Start-/slutpunkt |
| Subgraph | `subgraph Name["Label"]` | Logisk gruppering |
| Solid pil | `-->` | Dataflow / sekvens |
| Stiplet pil | `-.->` | Beslutningsstøtte / constraint / intern |

**Regel**: Alle figurer bruger `flowchart TB` (top-bottom) for processer, `flowchart LR` (left-right) for frameworks og kontekstdiagrammer.

---

## 4. Legend

Alle figurer har en legend-subgraph med:
- Tomme symboler der matcher figurens notation
- Tekst i format: "◻ [Semantik]" eller "── [Flowtype]"
- Style: `fill:#fafafa,stroke:#bdbdbd,stroke-dasharray: 3`

---

## 5. Konsistens-checks (kør ved ændringer)

### 5a. Tværgående konsistens

- [ ] **F1 ↔ F7**: AI-pipeline og Process To-Be viser *samme* AI-trin i *samme* rækkefølge
- [ ] **F1 ↔ F2**: AI-pipeline-trin matcher "AI/DSS"-boksen i framework
- [ ] **F2 ↔ F7**: Outcomes i framework kan alle spores til procestrin i To-Be
- [ ] **F6 ↔ F7**: As-Is og To-Be har *identiske* trin efter "Admin gennemgang" (kontrakt → fakturering)
- [ ] **F7 ↔ LOGGING_SPEC**: Alle målbare outcomes i F7 har korresponderende events i LOGGING_SPEC
- [ ] **F3 ↔ F4**: Alle eksterne services i C4 Context genfindes i C4 Container
- [ ] **F4 ↔ F5**: Alle containers i C4 Container genfindes som moduler i C4 Component
- [ ] **F8 ↔ F1**: Alle datastores i AI-pipeline har korresponderende tabeller i ER-diagram
- [ ] **F8 ↔ F9**: Alle tabeller i ER Light er en delmængde af ER Full

### 5b. Intern konsistens (pr. figur)

- [ ] Alle bokse har en label (ingen tomme)
- [ ] Alle pile har retning (ingen løse ender)
- [ ] Diamond-bokse har mindst 2 udgående pile (Ja/Nej eller Godkendt/Afvist)
- [ ] Subgraphs har nummererede titler (①, ②, ③...)
- [ ] Legend matcher figurens faktiske notation

### 5c. Akademisk kvalitet

- [ ] Ingen filstier inde i figurerne (kun i Appendix A)
- [ ] Maks 10–14 bokse på primary path
- [ ] Titel/kommentar i toppen af hver .mmd/.puml fil
- [ ] Caption i FIGURE_CAPTIONS.md har alle 4 linjer (hvad, hvorfor, type, målinger)
- [ ] Evidens i APPENDIX_FIGURE_EVIDENCE.md har styrke-vurdering

---

## 6. Workflow ved ændringer

1. Rediger `.mmd`/`.puml` kildefil
2. Kør `npm run export:figures` for at generere SVG+PNG
3. Gennemgå denne checklist (§5a + §5b + §5c)
4. Opdater FIGURE_CAPTIONS.md hvis caption er påvirket
5. Opdater APPENDIX_FIGURE_EVIDENCE.md hvis claims er ændret
6. Tilføj entry i CHANGELOG_FIGURES.md

---

*Oprettet: 2026-02-09*

