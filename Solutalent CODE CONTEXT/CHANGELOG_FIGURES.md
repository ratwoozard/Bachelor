# Changelog — Figurpakke

> **Formål**: Dokumenterer alle ændringer i figurkildefiler og tilhørende dokumentation.

---

## v2.0 — 2026-02-09: Komplet redesign og konsistensgennemgang

### Overordnede ændringer

| Kategori | Beskrivelse |
|---|---|
| **Design system** | Indført ensartet farvekode, notation og legend-standard på tværs af alle 9 figurer |
| **Terminologi** | Harmoniseret alle labels til dansk med konsekvent ordvalg (se CONSISTENCY_CHECKLIST §1) |
| **Evidens** | Styrke-vurdering (✅/⚠️/❌) tilføjet for alle claims i APPENDIX_FIGURE_EVIDENCE.md |
| **Captions** | Struktureret 4-linje format: (i) hvad, (ii) hvorfor, (iii) type, (iv) målinger |

### F1 — AI-matchningspipeline (`ai_pipeline.mmd`)

| Ændring | Begrundelse |
|---|---|
| Tilføjet nummererede subgraphs (①②③) | Klar visuel progression: Input → AI → Beslutning |
| Admin-gennemgang har nu udgående pile (Godkendt/Afvist) | Var tidligere dead-end node — nu viser komplet flow |
| Fjernet filstier fra labels | Akademisk formidling — stier hører til i Appendix A |
| Embeddings modtager fra BÅDE CV-parsing og Job | Korrekt dataflow (begge inputs genererer embeddings) |
| Tilføjet eksplicit "Persistér"-label på pil til DB | Tydeliggør at resultater gemmes FØR admin ser dem |

### F2 — Konceptuelt framework (`framework.mmd`)

| Ændring | Begrundelse |
|---|---|
| Outcomes markeret med ¹ (LOGGING_SPEC) og ² (repo-evidens) | Sporbar kobling til måleplan |
| Fjernet "Admin workload" og "Re-match rate" fra outcomes | Ikke defineret i LOGGING_SPEC — undgår uunderbyggede claims |
| Forenklet governance-pile (kun til AI og Decision, ikke Outcomes) | Reducerer visuel støj uden tab af information |
| Tilføjet "Bud & forhandling" som separat beslutningstrin | Matcher As-Is/To-Be process (F6/F7) |

### F3 — C4 Context (`c4_context.mmd`)

| Ændring | Begrundelse |
|---|---|
| Aktører bruger stadium-form `(["..."])` med emoji-ikoner | Visuelt adskilt fra system-bokse |
| "Company" → "Virksomhed" | Konsekvent dansk terminologi |
| "OAuth Provider (Google)" → "Google OAuth" | Mere præcist og kortere |
| Interaktionslabels på dansk | Konsistens med øvrige figurer |

### F4 — C4 Container (`c4_container.mmd`)

| Ændring | Begrundelse |
|---|---|
| DB bruger cylinder-form `[("...")]` | Konsekvent datastore-notation |
| "40+ functions" → "40+ funktioner" | Dansk |
| Forenklet edge-labels | Kortere, mere læsbare |

### F5 — C4 Component (`c4_component.mmd`)

| Ændring | Begrundelse |
|---|---|
| Fjernet tom `Title`-subgraph | Var visuelt støj |
| Edge Function-grupper omdøbt til danske labels | "Contracts" → "Kontrakter", "Communication" → "Kommunikation" |
| Fjernet "Integrations" modul (google-analytics, oauth-token) | Ikke central for rapportens argumentation; reducerer støj |
| Tilføjet "249 migrationer · 585 RLS-policies" i DB-label | Kvantitativ evidens direkte i figuren |

### F6 — Process As-Is (`process_as_is.mmd`)

| Ændring | Begrundelse |
|---|---|
| Forhandling-pil peger TILBAGE til Admin gennemgang | Korrekt loop (forhandling fører til ny gennemgang) |
| "browser job" → "søger job" | Dansk |
| "indsender bud" → "afgiver bud" | Konsistent med F7 |
| Admin gennemgang bruger diamond-form | Konsekvent beslutningspunkt-notation |

### F7 — Process To-Be (`process_to_be.mmd`)

| Ændring | Begrundelse |
|---|---|
| AI-trin i subgraph "AI-beslutningsstøtte" | Visuelt grupperet, matcher F1 |
| Tilføjet eksplicit datastore (Match-resultater) mellem AI og Admin | Viser at persistering sker FØR admin-gennemgang — konsistent med F1 |
| Forhandling-pil peger TILBAGE til Admin gennemgang | Konsistent med F6 |
| Note-boks: "AI leverer kun beslutningsstøtte" | Eksplicit human-in-the-loop markering |

### F8 — ER Light (`er_diagram.puml`)

| Ændring | Begrundelse |
|---|---|
| Tilføjet `time_entries` tabel | Nødvendig for komplet bud-til-fakturering flow (manglede i v1) |
| Tilføjet `weights_used : jsonb` i match_results | Dokumenterer transparens/sporbarhed (jf. ai-match:848-856) |
| Tilføjet skinparam for konsekvent styling | Professionelt udseende |
| Sektionsopdeling med kommentarer | Lettere at vedligeholde |

### F9 — ER Full (`er_full.puml`)

| Ændring | Begrundelse |
|---|---|
| Rettet titel fra "light" til "Komplet datamodel (appendix)" | Var forkert i v1 |
| Tilføjet `weights_used`, `proficiency`, `years_of_experience` felter | Konsistens med ER Light |
| Tilføjet `embedding : vector(1536)` i embedding-tabeller | Dokumenterer pgvector-brug |

### Dokumentation

| Fil | Ændring |
|---|---|
| `FIGURE_CAPTIONS.md` | Komplet omskrivning med 4-linje struktur (hvad/hvorfor/type/målinger) |
| `APPENDIX_FIGURE_EVIDENCE.md` | Styrke-vurdering (✅/⚠️/❌) tilføjet for alle claims |
| `CONSISTENCY_CHECKLIST.md` | Ny fil — tjekliste for fremtidige ændringer |
| `CHANGELOG_FIGURES.md` | Ny fil — denne changelog |

---

## v1.0 — 2026-02-09: Initial figurpakke

Første version af alle figurer oprettet baseret på repo-analyse.

---

*Sidst opdateret: 2026-02-09*

