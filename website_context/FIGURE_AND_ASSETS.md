# Figurer og assets – Stier og formål

Brug denne fil når I beder AI om at inkludere figurer på hjemmesiden. Alle eksporterede figurer ligger i **Solutalent CODE CONTEXT/figures/export/** (relativt fra repo-rod: `Solutalent CODE CONTEXT/figures/export/`). Både SVG og PNG findes; til web anbefales SVG.

---

## Proces og analyse (rapportens kernefigurer)

| Figur-id | Fil (SVG/PNG) | Kapitel | Caption / formål |
|----------|----------------|---------|-------------------|
| process_as_is | process_as_is.svg | 4.1 | Bemandingsprocessen i SoluTalent (as-is) – 8 trin fra job import til allokering. Trin 4, 6, 7 markeret som manuelle flaskehalse. |
| ai_pipeline | ai_pipeline.svg | 4.2 | SoluTalents AI-matchingpipeline – 6 stages: PREFILTER, LOCATION, GATE, AI SCORING, RANKING, PERSIST. Hybrid scoring (semantik + regelbaseret). |
| process_to_be | process_to_be.svg | (to-be) | Fremtidigt flow med AI-beslutningsstøtte (reference). |
| framework | framework.svg | 3 / 4 | Konceptuel model: input → AI/DSS → menneskelig beslutning → outcomes. |

---

## Arkitektur (C4)

| Figur-id | Fil (SVG/PNG) | Formål |
|----------|----------------|--------|
| c4_context | c4_context.svg | Systemkontekst: SoluTalent, brugerroller (Freelancer, Admin, Virksomhed), eksterne services (OpenAI, E-conomic, Google OAuth, Resend). |
| c4_container | c4_container.svg | Runtime-containere: React SPA, Supabase Auth, PostgreSQL, Realtime, Edge Functions. |
| c4_component | c4_component.svg | Logiske moduler (frontend-lag, edge functions). |

---

## Datamodel

| Figur-id | Fil (SVG/PNG) | Formål |
|----------|----------------|--------|
| er_diagram | er_diagram.svg | Forenklet ER med centrale tabeller. |
| er_full | er_full.svg | Komplet ER med alle relationer. |

---

## Korte captions til galleri (copy-paste)

- **process_as_is:** "Figur 4.1: Bemandingsprocessen (as-is) – 8 trin. Flaskehalse: trin 4 (manuel curation), 6 (match review), 7 (notifikation)."
- **ai_pipeline:** "Figur 4.2: AI-matchingpipeline – 6 stages fra prefilter til persistering. Hybrid scoring (40% semantik, 60% regelbaseret)."
- **framework:** "Konceptuel framework: input → DSS → human-in-the-loop → outcomes."
- **c4_context:** "C4 Systemkontekst: SoluTalent og eksterne systemer."
- **c4_container:** "C4 Containere: React SPA, Supabase-tjenester."
- **er_diagram:** "Forenklet datamodel (ER)."

---

## Placering i repo

- **Eksportmappe:** `Solutalent CODE CONTEXT/figures/export/`
- **Rapport figurliste og captions:** `report/appendices/figurliste.md`
- **Detaljerede captions (CODE CONTEXT):** `Solutalent CODE CONTEXT/FIGURE_CAPTIONS.md`

---

*Når I bygger hjemmesiden, brug figur-id (fx process_as_is) og filnavn (process_as_is.svg) – stien til export-mappen afhænger af hvor hjemmesidens assets mappe peger (fx `../Solutalent CODE CONTEXT/figures/export/` eller kopierede filer).*
