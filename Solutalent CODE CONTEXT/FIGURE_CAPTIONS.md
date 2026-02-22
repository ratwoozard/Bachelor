# Figure Captions — Bachelorrapport

> Struktureret caption-format: (i) Hvad, (ii) Hvorfor relevant, (iii) Type, (iv) Målinger/operationalisering.

---

## F1 — AI-matchningspipeline

**(i) Hvad:** Dataflowdiagram over AI-matchningspipen fra CV-/job-input gennem parsing, embedding-generering, semantisk og regelbaseret scoring til persistering af match-resultater og admin-gennemgang.

**(ii) Hvorfor relevant:** Figuren dokumenterer den centrale tekniske komponent i artefaktet og viser eksplicit, at AI-systemet kun leverer beslutningsstøtte (score + forklaring), mens admin træffer den endelige beslutning (human-in-the-loop). Dette er afgørende for rapportens argumentation om ansvarlig AI.

**(iii) Type:** Repo-afledt. Alle pipeline-trin er verificeret mod kildefiler (se Appendix A, F1).

**(iv) Målinger:** Match-score og forklaringer persisteres i `match_results`-tabellen. Metrics som *high-score rate* og *admin override rate* kan afledes herfra (jf. LOGGING_SPEC §4).

---

## F2 — Konceptuelt framework

**(i) Hvad:** Konceptuel model der kobler data-inputs, AI/DSS-beslutningsstøtte, menneskelig beslutningsproces og målbare outcomes, med governance og transparens som tværgående constraints.

**(ii) Hvorfor relevant:** Frameworket udgør den analytiske linse for evaluering af artefaktet og binder teori (DSR, DSS-litteratur, Responsible AI) sammen med den konkrete implementering. Det definerer de outcome-dimensioner, som evalueringen måler mod.

**(iii) Type:** Konceptuel figur (egen tilvirkning). Baseret på Hevner et al. (2004), Arnott & Pervan (2014), Jobin et al. (2019).

**(iv) Målinger:** Outcomes er operationaliseret med konkrete metrics: *time-to-match*, *time-to-contract* (effektivitet), *match-score fordeling*, *godkendelsesrate* (kvalitet), *audit-hændelser logget*, *RLS policy-dækning* (compliance). Alle markeret med ¹ = defineret i LOGGING_SPEC, ² = verificeret via repo-evidens.

---

## F3 — C4 Context: Systemkontekst

**(i) Hvad:** C4-kontekstdiagram (niveau 1) der viser SoluTalent-platformen, tre brugerroller (Freelancer, Admin, Virksomhed) og fire eksterne services (OpenAI, E-conomic, Google OAuth, Resend). E-conomic bruges til fakturering — platformen håndterer *ikke* udbetalinger/payouts.

**(ii) Hvorfor relevant:** Giver censor et 30-sekunders overblik over systemets aktører og afhængigheder — nødvendigt som indledning til arkitekturbeskrivelsen.

**(iii) Type:** Repo-afledt. Aktører verificeret via ADR-001 (User Roles), eksterne services via edge function-implementeringer (se Appendix A, F3).

**(iv) Målinger:** Ikke direkte. Kontekstdiagrammet definerer scope for evaluering.

---

## F4 — C4 Container: Runtime-containere

**(i) Hvad:** C4-containerdiagram (niveau 2) der viser deployable units: React SPA, Supabase Auth, PostgreSQL, Realtime, Edge Functions, samt kommunikationsprotokoller (Supabase JS SDK, PostgREST, WebSocket, HTTPS).

**(ii) Hvorfor relevant:** Dokumenterer den tekniske arkitektur på et niveau, der forklarer *hvordan* systemet er bygget — centralt for evaluering af vedligeholdbarhed og integrationskvalitet.

**(iii) Type:** Repo-afledt. Containers verificeret via `package.json`, `supabase/config.toml`, og `supabase/functions/` (se Appendix A, F4).

**(iv) Målinger:** Ikke direkte. Containerdiagrammet er grundlag for vurdering af arkitekturkvalitet.

---

## F5 — C4 Component: Logiske moduler

**(i) Hvad:** C4-komponentdiagram (niveau 3, light) der viser logiske moduler i frontend-lag (Pages → Components → Hooks → Services → Supabase Client) og Edge Functions-lag (AI & Matching, Kontrakter, E-conomic, Kommunikation).

**(ii) Hvorfor relevant:** Viser kodens interne organisering og lagdeling — afgørende for evaluering af vedligeholdbarhed og kodestruktur.

**(iii) Type:** Repo-afledt. Moduler verificeret via mappestruktur i `src/` og `supabase/functions/` (se Appendix A, F5).

**(iv) Målinger:** Kvantitative mål inkluderet i figuren: 249 migrationer, 585 RLS-policies (verificeret via repo-counts).

---

## F6 — Process As-Is: Nuværende flow

**(i) Hvad:** Procesdiagram over det nuværende bud-til-fakturering flow *uden* AI-støtte: Freelancer afgiver bud → Admin gennemgang (erfaringsbaseret) → Forhandling → Kontrakt → Dual-signature → Tidsregistrering → Fakturering via E-conomic. Bemærk: Platformen håndterer ikke udbetalinger — `payment_accounts` og `withdrawals` er fjernet (migration `20251209`).

**(ii) Hvorfor relevant:** Etablerer baseline for sammenligning med To-Be flow (F7). Viser at matchning aktuelt er en rent manuel, erfaringsbaseret proces — hvilket motiverer AI-beslutningsstøtte.

**(iii) Type:** Repo-afledt. Flow verificeret via `docs/flows/FLOW_BIDDING.md` og `FLOW_CONTRACT_SIGNING.md` (se Appendix A, F6).

**(iv) Målinger:** As-Is baseline for *time-to-match* og *time-to-contract* (jf. LOGGING_SPEC §4). TODO (primær empiri): Kræver logdata for faktiske målinger.

---

## F7 — Process To-Be: Flow med AI-støtte

**(i) Hvad:** Procesdiagram over det fremtidige flow *med* AI-beslutningsstøtte: Bud → AI-matching (on-demand, semantisk + regelbaseret + forklaring) → Persistering → Admin gennemgang med AI-anbefaling → Kontrakt → Fakturering. AI-matching trigges on-demand, ikke automatisk ved bud.

**(ii) Hvorfor relevant:** Viser *præcis* hvor i processen AI-beslutningsstøtte indsættes, og at admin forbliver det endelige beslutningspunkt. Figuren er central for argumentationen om human-in-the-loop og ansvarlig AI. Konsistent med F1 (AI-pipeline).

**(iii) Type:** Repo-afledt. AI-matching verificeret via `supabase/functions/ai-match/index.ts`, admin-review via `docs/flows/FLOW_BIDDING.md` (se Appendix A, F7).

**(iv) Målinger:** Forventede forbedringer i *time-to-match* og *godkendelsesrate* (jf. LOGGING_SPEC §4, EVALUERING §2.1). TODO (primær empiri): Effektmåling kræver logdata og/eller A/B-test.

---

## F8 — ER-diagram (Light): Centrale tabeller

**(i) Hvad:** Forenklet ER-diagram med 10 centrale entiteter: `auth.users`, `profiles`, `freelancers`, `freelancer_skills`, `jobs`, `match_requests`, `match_results`, `bids`, `contracts`, `time_entries`. Bemærk: `payment_accounts` og `withdrawals` er fjernet fra databasen (migration `20251209`).

**(ii) Hvorfor relevant:** Giver et hurtigt overblik over datamodellen med fokus på de to kerneflows: AI-matching (jobs → match_requests → match_results) og bidding (jobs → bids → contracts). Komplet ER-diagram i Appendix B (F9).

**(iii) Type:** Repo-afledt. Tabeller verificeret via `supabase/migrations/` (se Appendix A, F8).

**(iv) Målinger:** Datamodellen er grundlag for de events og felter defineret i LOGGING_SPEC (§2–3).

---

## F9 — ER-diagram (Full): Alle tabeller — Appendix B

**(i) Hvad:** Komplet ER-diagram med alle centrale database-tabeller inklusiv authentication, embeddings, contract versioning, time entries og economic sync. `payment_accounts` og `withdrawals` er fjernet — erstattet af `platform_ecom_integration` for OAuth-token-håndtering.

**(ii) Hvorfor relevant:** Komplet dokumentation af datamodellen for reference. Inkluderet som appendix for at undgå informationsoverload i brødteksten.

**(iii) Type:** Repo-afledt. Baseret på 249 .sql migrationer i `supabase/migrations/`.

**(iv) Målinger:** Ikke direkte. Danner grundlag for F8 (light version).

---

*Genereret: 2026-02-09 · Opdateret med struktureret 4-linje caption-format*
