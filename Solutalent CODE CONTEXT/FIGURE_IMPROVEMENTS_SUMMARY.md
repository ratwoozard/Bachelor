# Figure Improvements — Executive Summary

> **Status**: ✅ Alle figurer forbedret og eksporteret  
> **Dato**: 9. februar 2026  
> **Formål**: "Censor-sikre" figurer til bachelorrapport (Økonomi & IT)

---

## 🎯 Hovedformål

Transform repo-heavy diagrams into academic-quality figures that:
1. ✅ Separate presentation from evidence (no file paths in diagrams)
2. ✅ Include clear legends explaining colors/symbols
3. ✅ Make human-in-the-loop explicit (AI = decision support, NOT automation)
4. ✅ Provide concrete, measurable outcomes (operationalized metrics)
5. ✅ Are easily readable by external examiners (censor-safe)

---

## 📊 Figuroversigt (9 figurer)

| # | Figur | Type | Status | Eksporteret |
|---|-------|------|--------|-------------|
| F1 | **AI-matchningspipeline** | Repo-afledt | ✅ Forbedret | ✅ SVG + PNG |
| F2 | **Konceptuelt framework** | Konceptuel | ✅ Forbedret | ✅ SVG + PNG |
| F3 | **C4 Context** | Repo-afledt | ✅ Forbedret | ✅ SVG + PNG |
| F4 | **C4 Container** | Repo-afledt | ✅ Forbedret | ✅ SVG + PNG |
| F5 | **C4 Component** | Repo-afledt | ✅ Forbedret | ✅ SVG + PNG |
| F6 | **Process As-Is** | Repo-afledt | ✅ Forbedret | ✅ SVG + PNG |
| F7 | **Process To-Be** | Repo-afledt | ✅ Forbedret | ✅ SVG + PNG |
| F8 | **ER-diagram (Light)** | Repo-afledt | ✅ Ny version | ✅ SVG + PNG |
| F9 | **ER-diagram (Full)** | Repo-afledt | ✅ Til appendix | ✅ SVG + PNG |

**Total**: 9 figurer × 2 formater = **18 billedfiler**

---

## 🔧 Nøgleforbedringer

### 1. Skilt Formidling fra Evidens

**Før**:
```mermaid
CV["CV input\n`supabase/functions/parse-cv/index.ts`\n`supabase/functions/parse-cv-vision/index.ts`"]
```

**Efter**:
```mermaid
CV["CV Input"]
```

**Evidens** flyttet til `APPENDIX_FIGURE_EVIDENCE.md`:
- CV Input → `supabase/functions/parse-cv/index.ts`, `parse-cv-vision/index.ts`

**Impact**: Figurerne er nu læsbare uden repo-kendskab, mens evidens forbliver sporbar via appendix.

---

### 2. Legends på Alle Figurer

**Tilføjet til**:
- ✅ AI-pipeline: Forklarer farver (input=blå, process=grøn, decision=gul, DB=rød)
- ✅ Framework: Forklarer flow-typer (solid=main, dotted=governance)
- ✅ C4 Context/Container/Component: Forklarer notation (person, system, external, call vs. validation)
- ✅ Process As-Is/To-Be: Forklarer trin-typer (entry, step, decision, sequential flow)
- ✅ ER-diagram: PlantUML legend med primary/foreign key notation

**Impact**: Censor kan forstå diagrammer selvstændigt uden external documentation.

---

### 3. Human-in-the-Loop Ekspliciteret

**AI-pipeline (F1)**:
```mermaid
AdminReview{"Admin Review<br/>& Approval<br/>(Decision Support)"}
ResultsDB -.-> AdminReview
```

- ✅ Admin Review som **decision point** (diamond)
- ✅ AI leverer kun **decision support** (dotted arrow)
- ✅ Persistens **før** godkendelse (ResultsDB → AdminReview)

**Process To-Be (F7)**:
```mermaid
AIMatch -.->|"Score + forklaring<br/>(Decision support)"| AdminReview
Note1["AI leverer kun<br/>beslutningsstøtte<br/>(IKKE automatisk godkendelse)"]
```

- ✅ Eksplicit annotation: "AI leverer kun beslutningsstøtte"
- ✅ Admin Review som **decision point** (diamond, 3px stroke)
- ✅ Konsistent med AI-pipeline

**Impact**: 
- **KRITISK** for etik/compliance afsnit: Censor ser at AI ikke træffer beslutninger automatisk
- Ingen risiko for at blive fortolket som "sort boks" eller "automatiseret diskrimination"

---

### 4. Konkrete, Målbare Outcomes

**Framework (F2) — Før**:
```
O1["Effektivitet\n(tidsforbrug, flow)"]
```

**Framework (F2) — Efter**:
```
O1["<b>Effektivitet</b><br/>• Time-to-match<br/>• Time-to-contract<br/>• Admin workload"]
O2["<b>Kvalitet</b><br/>• Match-score distribution<br/>• Approval rate<br/>• Re-match rate"]
O3["<b>Compliance</b><br/>• Audit events logged<br/>• RLS policy coverage<br/>• GDPR compliance"]
```

**Impact**: 
- Outcomes er nu **operationaliserede** (kan måles)
- Direkte link til `LOGGING_SPEC.md` og `EVALUERING.md`
- Censor kan se hvordan artefakt-kvalitet evalueres

---

### 5. ER-diagram Light vs. Full

**Før**: 1 diagram med 30+ tabeller (overvældende)

**Efter**:
- **F8 (Light)**: 10 centrale tabeller til brødtekst
  - Focus: AI-matching flow + bidding flow
  - Læsbar på 20 sek
- **F9 (Full)**: Alle 30+ tabeller til Appendix B
  - Komplet dokumentation for reference

**Impact**: Censor får quick overview (Light) + deep dive option (Full).

---

### 6. C4 Component: Tydeliggjort Scope

**Før**: "C4-lignende komponentdiagram (repo-deriveret, "light")"

**Efter**: 
```
subgraph Title["C4 Component View: Logical Modules in Frontend + Edge Functions"]
```

**Impact**: 
- Afklarer at det er **logical modules**, ikke deployment containers
- Forklarer scope: Frontend lag + Edge Functions domæner
- Undgår forvirring om C4-niveau (komponenter ≠ klasser/funktioner)

---

## 📁 Filstruktur (Efter Forbedringer)

```
docs/bachelor/
├── figures/
│   ├── original/                    # Backup af originale filer
│   │   ├── ai_pipeline.mmd
│   │   ├── c4_context.mmd
│   │   ├── ... (alle originaler)
│   │
│   ├── ai_pipeline.mmd              # Forbedret version
│   ├── framework.mmd                # Forbedret version
│   ├── c4_context.mmd               # Forbedret version
│   ├── c4_container.mmd             # Forbedret version
│   ├── c4_component.mmd             # Forbedret version
│   ├── process_as_is.mmd            # Forbedret version
│   ├── process_to_be.mmd            # Forbedret version
│   ├── er_diagram.puml              # Light ER (10 tabeller)
│   ├── er_full.puml                 # Full ER (30+ tabeller)
│   │
│   └── export/                      # Eksporterede billedfiler
│       ├── ai_pipeline.svg / .png
│       ├── framework.svg / .png
│       ├── c4_context.svg / .png
│       ├── c4_container.svg / .png
│       ├── c4_component.svg / .png
│       ├── process_as_is.svg / .png
│       ├── process_to_be.svg / .png
│       ├── er_diagram.svg / .png    # Light
│       ├── er_full.svg / .png       # Full
│       └── README.md
│
├── FIGURE_CAPTIONS.md               # Akademiske captions (2-4 linjer)
├── APPENDIX_FIGURE_EVIDENCE.md      # Claim→evidence mappings
├── FIGURE_IMPROVEMENTS_CHANGELOG.md # Detaljeret changelog
└── FIGURE_IMPROVEMENTS_SUMMARY.md   # Dette dokument
```

---

## ✅ Kvalitetssikring

### Konsistenskontrol: AI-pipeline vs. Process To-Be

| Kriterium | AI-pipeline | Process To-Be | ✓ |
|---|---|---|---|
| Human-in-the-loop markeret? | AdminReview (diamond) | AdminReview (diamond) | ✅ |
| AI som decision support? | Dotted arrow | Dotted arrow + annotation | ✅ |
| Persistens før godkendelse? | ResultsDB → AdminReview | AIMatch → AdminReview | ✅ |
| Eksplicit "ikke auto-approve"? | AdminReview boks | Annotation | ✅ |

**Konklusion**: ✅ Ingen modsigelser.

---

### Læsbarhedstjek

| Element | Før | Efter | Status |
|---|---|---|---|
| Filstier i bokse | Ja (rodet) | Nej (rene labels) | ✅ Meget bedre |
| Legend | Nej | Ja (alle) | ✅ Meget bedre |
| Human-in-the-loop | Delvist | Eksplicit (diamond + annotation) | ✅ Meget bedre |
| Målbare outcomes | Nej (vage) | Ja (konkrete) | ✅ Meget bedre |
| ER overskuelighed | Nej (30+ tabeller) | Ja (10 tabeller Light) | ✅ Meget bedre |

---

## 📖 Dokumentation

| Dokument | Formål | Status |
|---|---|---|
| `FIGURE_CAPTIONS.md` | Captions (2-4 linjer) til alle figurer | ✅ Komplet |
| `APPENDIX_FIGURE_EVIDENCE.md` | Claim→evidence for repo-afledte figurer | ✅ Komplet |
| `FIGURE_IMPROVEMENTS_CHANGELOG.md` | Detaljeret log af alle ændringer | ✅ Komplet |
| `FIGURE_IMPROVEMENTS_SUMMARY.md` | Executive summary (dette dokument) | ✅ Komplet |
| `figures/export/README.md` | Brugsguide til eksporterede filer | ✅ Komplet |

---

## 🚀 Næste Skridt for Rapport

1. ✅ **Figurer klar** → Indsæt i rapport
2. ⏳ **Captions** → Kopiér fra `FIGURE_CAPTIONS.md`
3. ⏳ **Appendix A** → Indsæt `APPENDIX_FIGURE_EVIDENCE.md`
4. ⏳ **Appendix B** → Indsæt `er_full.svg` (full ER-diagram)
5. ⏳ **References** → Tilføj "Se Appendix A" i brødtekst hvor relevant
6. ⏳ **Konsistenstjek** → Verificér at tekst matcher figurer
7. ⏳ **Print-preview** → Tjek at alle figurer er læsbare

---

## 🎓 Censor-Sikkerhed: Checkliste

| Kriterie | Status | Evidens |
|---|---|---|
| ✅ Ingen opfundne data i figurer | ✅ | Alle claims har repo-evidens i Appendix A |
| ✅ Tydelig skel mellem AI og human | ✅ | AdminReview (diamond) + annotation |
| ✅ Legends forklarer notation | ✅ | Alle figurer har legend |
| ✅ Målbare outcomes (operationalisering) | ✅ | Framework viser konkrete metrics |
| ✅ ER-diagram overskuelig | ✅ | Light (10 tabeller) + Full (appendix) |
| ✅ Konsistens på tværs af figurer | ✅ | AI-pipeline = Process To-Be |
| ✅ Akademisk formatering | ✅ | Rene labels, captions, appendix |
| ✅ Sporbarhed til kodebase | ✅ | Appendix A har claim→path→lineno |

**Samlet vurdering**: ✅ **Figurer er censor-sikre og akademisk præsentable.**

---

## 🔄 Reproducérbarhed

**Backup af originaler**:
```bash
ls docs/bachelor/figures/original/
# → ai_pipeline.mmd, c4_context.mmd, ..., er_diagram.puml
```

**Re-eksport af figurer**:
```bash
npm run export:figures  # Mermaid automatisk
java -jar plantuml.jar -tsvg docs/bachelor/figures/er_diagram.puml -o export
java -jar plantuml.jar -tpng docs/bachelor/figures/er_diagram.puml -o export
# (samme for er_full.puml)
```

**Restore originaler** (hvis nødvendigt):
```bash
cp docs/bachelor/figures/original/*.mmd docs/bachelor/figures/
cp docs/bachelor/figures/original/*.puml docs/bachelor/figures/
```

---

## 📊 Samlet Resultat

- ✅ **9 figurer** forbedret (7 Mermaid + 2 PlantUML)
- ✅ **18 billedfiler** eksporteret (SVG + PNG)
- ✅ **4 dokumentationsfiler** oprettet (captions, evidence, changelog, summary)
- ✅ **Konsistens** sikret (AI-pipeline = Process To-Be)
- ✅ **Censor-sikkerhed** verificeret (se checkliste)

**Status**: 🎉 **Klar til indsættelse i bachelorrapport!**

---

*Genereret: 2026-02-09*  
*Alle forbedringer dokumenteret og verificeret*

