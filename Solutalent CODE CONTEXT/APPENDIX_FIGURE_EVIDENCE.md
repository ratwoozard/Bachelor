# Appendix A — Figur-evidens: Claim → Repo-kilde

> **Formål**: Sporbar mapping fra hvert visuelt element i repo-afledte figurer til konkret kildekode.  
> **Styrke-vurdering**: ✅ Stærk (direkte kode/linje) · ⚠️ Delvis (dokumentation, ikke kode) · ❌ Mangler (needs evidence)  
> **Stier**: Relative til projekt-roden.

---

## F1 — AI-matchningspipeline

| # | Visuelt element | Claim | Repo-evidens | Styrke |
|---|---|---|---|---|
| 1 | CV-data (input) | CV-data indgår via parsing | `supabase/functions/parse-cv/index.ts` | ✅ |
| 2 | | Vision-baseret parsing | `supabase/functions/parse-cv-vision/index.ts` | ✅ |
| 3 | Job-/projektdata (input) | Jobs indgår via upload | `supabase/functions/upload-job/index.ts` | ✅ |
| 4 | CV Parsing | Tekst-parsing med GPT-4o-mini | `supabase/functions/parse-cv/index.ts:212` | ✅ |
| 5 | | Vision-parsing med GPT-4o | `supabase/functions/parse-cv-vision/index.ts:252` | ✅ |
| 6 | Embedding-generering | OpenAI `text-embedding-3-small` | `supabase/functions/generate-embeddings/index.ts:151` | ✅ |
| 7 | Semantisk similarity | pgvector cosine distance | `supabase/functions/ai-match/index.ts` (similarity query) | ✅ |
| 8 | | pgvector extension | `supabase/migrations/archive/2025-Q1/20250203000000_create_ai_matching_schema.sql` | ✅ |
| 9 | Regelbaseret scoring | Proficiency-multiplikatorer | `supabase/functions/ai-match/index.ts:89-95` | ✅ |
| 10 | | Recency-multiplikatorer | `supabase/functions/ai-match/index.ts:98-112` | ✅ |
| 11 | Samlet score (vægtet sum) | DEFAULT_WEIGHTS (semantic 0.40, rule 0.60) | `supabase/functions/ai-match/index.ts:79-87` | ✅ |
| 12 | | Dynamiske kategori-vægte | `supabase/functions/ai-match/index.ts:653-665` | ✅ |
| 13 | Forklaring (GPT) | GPT-4o-mini genererer forklaring | `supabase/functions/ai-match/index.ts:523` | ✅ |
| 14 | match_requests (DB) | Upsert med status:'pending' | `supabase/functions/ai-match/index.ts:861-873` | ✅ |
| 15 | match_results (DB) | INSERT med score-breakdown | `supabase/functions/ai-match/index.ts:905-920` | ✅ |
| 16 | | Tabel-definition (match_requests) | `20250203000000_create_ai_matching_schema.sql:13-25` | ✅ |
| 17 | | Tabel-definition (match_results) | `20250203000000_create_ai_matching_schema.sql:39-55` | ✅ |
| 18 | | Status-constraint: pending/reviewed/approved/rejected/expired | `20250203000000_create_ai_matching_schema.sql:19` | ✅ |
| 19 | Admin gennemgang | `update_match_request_status()` RPC | `20250203000000_create_ai_matching_schema.sql:481-501` | ✅ |
| 20 | | Admin kalder RPC fra MatchDashboard | `src/pages/admin/MatchDashboard.tsx:138-141` | ✅ |
| 21 | | Rejection reasons for ML feedback | `src/pages/admin/MatchDashboard.tsx:37-45` | ✅ |
| 22 | | Ingen auto-approve logik i kode | `supabase/functions/ai-match/index.ts` (hele filen) | ✅ |
| 23 | weights_used | Returneres i API-response, IKKE persisteret i match_results | `ai-match/index.ts:953` (response JSON) | ⚠️ |
| 24 | | Separat `match_analytics`-tabel HAR weights_used | `20260107110000_phase4_enhanced_analytics.sql:14-17` | ⚠️ |

**Samlet**: 20/24 ✅ stærk, 4/24 ⚠️ delvis. Rettet: weights_used er IKKE i match_results-tabellen.

**Reality Lock (2026-02-09)**: Verificeret at match_request oprettes med `status: 'pending'` og at admin ændrer status via RPC. Figuren viser nu to separate datastores (match_requests + match_results) med korrekte status-labels.

---

## F2 — Konceptuelt framework

**Note**: Konceptuel figur (egen tilvirkning). Elementer afspejler repo-implementeringen:

| # | Element | Repo-evidens | Styrke |
|---|---|---|---|
| 1 | Freelancer-profiler (input) | `supabase/migrations/` (freelancers, freelancer_skills tabeller) | ✅ |
| 2 | Job-/projektdata (input) | `supabase/migrations/` (jobs, projects tabeller) | ✅ |
| 3 | Historik (input) | `supabase/migrations/` (bids, contracts tabeller) | ✅ |
| 4 | Semantisk matching (AI/DSS) | `supabase/functions/ai-match/index.ts`, `generate-embeddings/index.ts` | ✅ |
| 5 | Regelbaseret scoring (AI/DSS) | `supabase/functions/ai-match/index.ts:79-112` | ✅ |
| 6 | Match-forklaring (AI/DSS) | `supabase/functions/ai-match/index.ts:523` | ✅ |
| 7 | Admin gennemgang (beslutning) | `docs/flows/FLOW_BIDDING.md` | ⚠️ |
| 8 | Bud & forhandling (beslutning) | `docs/ARCHITECTURE_DECISIONS.md` (ADR-005) | ⚠️ |
| 9 | Dual-signature kontrakt (beslutning) | `docs/flows/FLOW_CONTRACT_SIGNING.md`, ADR-008 | ⚠️ |
| 10 | Time-to-match (outcome) | Defineret i `docs/bachelor/LOGGING_SPEC.md` §4 | ⚠️ |
| 11 | Time-to-contract (outcome) | Defineret i `docs/bachelor/LOGGING_SPEC.md` §4 | ⚠️ |
| 12 | Match-score fordeling (outcome) | Kan afledes fra `match_results.overall_score` | ⚠️ |
| 13 | Godkendelsesrate (outcome) | Defineret i `docs/bachelor/LOGGING_SPEC.md` §4 | ⚠️ |
| 14 | Audit-hændelser (compliance) | `src/pages/admin/AuditLogsPage.tsx` | ✅ |
| 15 | RLS policy-dækning (compliance) | `docs/SECURITY_AUDIT_DEC2025.md` (585 policies) | ✅ |
| 16 | Platform-regler (governance) | `docs/ARCHITECTURE_DECISIONS.md` (ADR-001: User Roles) | ⚠️ |
| 17 | Transparens / logning (governance) | `supabase/functions/ai-match/index.ts:848-856` (weightsUsed) | ✅ |
| 18 | Ansvarlig AI (governance) | PII-ekskludering: `20250203000000_create_ai_matching_schema.sql:114` | ✅ |

**Samlet**: 10/18 ✅, 8/18 ⚠️. Outcomes er definerede men kræver logdata for faktisk måling (se LOGGING_SPEC).

**Litteraturgrundlag**: Hevner et al. (2004), Peffers et al. (2007), Arnott & Pervan (2014), Power & Sharda (2007), Jobin et al. (2019), Veale & Brass (2019).

---

## F3 — C4 Context Diagram

| # | Element | Claim | Repo-evidens | Styrke |
|---|---|---|---|---|
| 1 | SoluTalent Platform | Central system-boks | Hele repo (monorepo-struktur) | ✅ |
| 2 | Freelancer (aktør) | Freelancer-rolle | ADR-001, `supabase/migrations/` (user_roles) | ✅ |
| 3 | Admin (aktør) | Admin-rolle (Support Solutions) | ADR-001, `supabase/migrations/` (user_roles) | ✅ |
| 4 | Virksomhed (aktør) | Virksomhedsrolle | ADR-001, `supabase/migrations/` (user_roles) | ✅ |
| 5 | OpenAI API | AI-funktioner (embeddings + chat) | `supabase/functions/generate-embeddings/index.ts:151` | ✅ |
| 6 | | | `supabase/functions/ai-match/index.ts:523` | ✅ |
| 7 | E-conomic API | Fakturering/bogføring | `supabase/functions/economic/index.ts` | ✅ |
| 8 | | | ADR-006 | ⚠️ |
| 9 | Google OAuth | Autentificering | `supabase/functions/google-analytics/index.ts` | ✅ |
| 10 | Resend | E-mail-notifikationer | `supabase/functions/send-form-email/index.ts` | ✅ |

**Samlet**: 9/10 ✅, 1/10 ⚠️.

---

## F4 — C4 Container Diagram

| # | Container | Claim | Repo-evidens | Styrke |
|---|---|---|---|---|
| 1 | React SPA | Vite + TypeScript | `package.json` (scripts: vite; deps: react, typescript) | ✅ |
| 2 | | Netlify CDN | TODO (needs evidence): Ingen Netlify-config i repo | ❌ |
| 3 | Supabase Auth | JWT + session | `package.json` (@supabase/supabase-js), `src/integrations/supabase/client.ts` | ✅ |
| 4 | PostgreSQL | RLS-beskyttet | `supabase/config.toml`, `docs/SECURITY_AUDIT_DEC2025.md` | ✅ |
| 5 | Realtime | WebSocket | `supabase/config.toml` (realtime config) | ✅ |
| 6 | Edge Functions | Deno runtime, 40+ funktioner | `supabase/functions/` (40 mapper), `supabase/functions/deno.json` | ✅ |
| 7 | Supabase JS SDK | Frontend-til-Auth kommunikation | `src/integrations/supabase/client.ts` | ✅ |
| 8 | PostgREST | Frontend-til-DB kommunikation | Supabase default (implicit) | ⚠️ |
| 9 | WebSocket | Realtime subscriptions | `src/hooks/` (subscription-hooks) | ⚠️ |
| 10 | HTTPS | Frontend-til-Edge kommunikation | Supabase default (implicit) | ⚠️ |

**Samlet**: 6/10 ✅, 3/10 ⚠️, 1/10 ❌ (Netlify-deployment mangler direkte evidens i repo).

---

## F5 — C4 Component Diagram

| # | Komponent | Claim | Repo-evidens | Styrke |
|---|---|---|---|---|
| 1 | Pages | Route-komponenter | `src/pages/` (~65 filer, verificeret via find-count) | ✅ |
| 2 | Components | UI-byggeklodser | `src/components/` (~172 filer, verificeret via find-count) | ✅ |
| 3 | Hooks | State & React Query | `src/hooks/` (22 useQuery, 41 useMutation — grep-count) | ✅ |
| 4 | Services | Forretningslogik | `src/services/` | ✅ |
| 5 | Supabase Client | API-wrapper | `src/integrations/supabase/client.ts` | ✅ |
| 6 | AI & Matching (EF) | ai-match, embeddings, parse-cv | `supabase/functions/ai-match/`, `generate-embeddings/`, `parse-cv/`, `parse-cv-vision/` | ✅ |
| 7 | Kontrakter (EF) | generate-contract-from-bid | `supabase/functions/generate-contract-from-bid/index.ts` | ✅ |
| 8 | E-conomic (EF) | economic, sync-time-to-ecom | `supabase/functions/economic/`, `sync-time-to-ecom/` | ✅ |
| 9 | Kommunikation (EF) | send-form-email, notifications | `supabase/functions/send-form-email/`, `notifications/` | ✅ |
| 10 | 249 migrationer | Migrations-count | `supabase/migrations/` (find-count: 249 .sql) | ✅ |
| 11 | 585 RLS-policies | Policy-count | `docs/SECURITY_AUDIT_DEC2025.md` | ⚠️ |

**Samlet**: 10/11 ✅, 1/11 ⚠️ (RLS-count fra audit-doc, ikke direkte talt i SQL).

---

## F6 — Process As-Is

| # | Procestrin | Claim | Repo-evidens | Styrke |
|---|---|---|---|---|
| 1 | Freelancer søger job | Entry point | `src/pages/FreelancerProjectsPage.tsx` | ✅ |
| 2 | Afgiver bud | Bid submission | `docs/flows/FLOW_BIDDING.md` | ⚠️ |
| 3 | Admin gennemgang (erfaringsbaseret) | Manuel matching | `docs/flows/FLOW_BIDDING.md`, `src/pages/admin/AdminProjectBidsPage.tsx` | ⚠️ |
| 4 | Forhandling | Modforslag-flow | `docs/flows/FLOW_BIDDING.md` (statuses: pending, counter_offer) | ⚠️ |
| 5 | Kontrakt genereres | Contract generation | `supabase/functions/generate-contract-from-bid/index.ts` | ✅ |
| 6 | Dual-signature | Admin + Freelancer signering | `docs/flows/FLOW_CONTRACT_SIGNING.md`, ADR-008 | ⚠️ |
| 7 | Kontrakt aktiv | Status → active | `docs/flows/FLOW_CONTRACT_SIGNING.md` | ⚠️ |
| 8 | Tidsregistrering | Time tracking | `supabase/migrations/` (time_entries), `src/pages/TimeTrackingPage.tsx` | ✅ |
| 9 | Fakturering via E-conomic | Invoicing | `supabase/functions/sync-time-to-ecom/index.ts` | ✅ |

**Samlet**: 4/9 ✅, 5/9 ⚠️ (flow-trin dokumenteret i flow-docs, ikke direkte i kode som state machine).

---

## F7 — Process To-Be

| # | Procestrin | Claim | Repo-evidens | Styrke |
|---|---|---|---|---|
| 1–2 | Freelancer søger job + afgiver bud | Uændret fra As-Is | Se F6 #1–2 | Se F6 |
| 3 | AI-matching trigges on-demand | `supabase.functions.invoke('ai-match', {body: {freelancer_id, job_id}})` | `src/services/matchFitScore.ts:79-85` | ✅ |
| 4 | | request_type: 'automatic' \| 'on_demand' \| 'admin' | `supabase/functions/ai-match/index.ts:36` | ✅ |
| 5 | AI-match er IKKE automatisk ved bud | Ingen bid-trigger i koden; match_request kræver explicit invoke | `ai-match/index.ts` (hele filen) | ✅ |
| 6 | Semantisk + regelbaseret matching | Hybrid scoring med DEFAULT_WEIGHTS | `ai-match/index.ts:79-87` | ✅ |
| 7 | Score + forklaring genereres | GPT-4o-mini forklaring | `ai-match/index.ts:523` | ✅ |
| 8 | Persistering med status: pending | `match_requests.upsert({status: 'pending'})` + `match_results.insert()` | `ai-match/index.ts:861-873, :905-920` | ✅ |
| 9 | Admin gennemgang med AI-anbefaling | `update_match_request_status()` RPC fra MatchDashboard | `src/pages/admin/MatchDashboard.tsx:138-141` | ✅ |
| 10 | Rejection reasons logges | REJECTION_REASONS array for ML feedback | `src/pages/admin/MatchDashboard.tsx:37-45` | ✅ |
| 11 | Freelancer-side bruger rule-based (ikke AI) | `useCalculateMatchFitScore` (ikke `useCalculateAIMatchFitScore`) | `src/pages/FreelancerOpportunitiesPage.tsx:37,87` | ✅ |
| 12–15 | Forhandling → Fakturering | Uændret fra As-Is | Se F6 #4–9 | Se F6 |

**Samlet**: 9/11 ✅ (nye trin), 0 ⚠️. Resten uændret fra F6.

**Reality Lock (2026-02-09)**: Rettet fra "Bid triggers AI" til "Bid kan trigge AI (on-demand)". Stiplet pil i figuren afspejler nu at koblingen er indirekte. Tilføjet evidens for at freelancer-side bruger rule-based fallback.

---

## F8 — ER-diagram (Light)

| # | Tabel | Formål | Begrundelse for inklusion | Repo-evidens | Styrke |
|---|---|---|---|---|---|
| 1 | auth.users | Supabase Auth | FK-target for profiles, match_requests.reviewed_by | Supabase-managed (implicit) | ⚠️ |
| 2 | profiles | Brugerprofil + rolle | RBAC/RLS — binder auth til app_role | `supabase/migrations/` (profiles-tabeller) | ✅ |
| 3 | freelancers | Freelancer-data | Kerneentitet — input til AI-matching | `supabase/migrations/`, `docs/DATABASE_SCHEMA.md` | ✅ |
| 4 | freelancer_skills | Kompetencer | Direkte input til regelbaseret scoring | `supabase/migrations/`, `docs/DATABASE_SCHEMA.md` | ✅ |
| 5 | jobs | Jobopslag | Kerneentitet — den anden side af matching | `supabase/migrations/`, `docs/DATABASE_SCHEMA.md` | ✅ |
| 6 | match_requests | AI match-forespørgsler | Status-workflow (pending→approved/rejected) | `20250203000000_create_ai_matching_schema.sql:13-25` | ✅ |
| 7 | match_results | AI match-output | Score-breakdown + reasons + skill_gaps | `20250203000000_create_ai_matching_schema.sql:39-55` | ✅ |
| 8 | bids | Freelancer-bud | Bidding-flow — kobler freelancer til job | `supabase/migrations/` (bids-tabeller) | ✅ |
| 9 | contracts | Kontrakter | Kontrakt-flow — dual-signature | `supabase/migrations/` (contracts-tabeller) | ✅ |
| 10 | time_entries | Tidsregistrering | Timer → E-conomic fakturering | `supabase/migrations/` (time_entries-tabeller) | ✅ |

**Samlet**: 9/10 ✅, 1/10 ⚠️ (auth.users er Supabase-managed, ikke i vores migrations).

**Reality Lock (2026-02-09)**: Fjernet `weights_used : jsonb` fra match_results (eksisterer IKKE i tabellen — kun i API-response). Tilføjet faktiske kolonner: `match_reasons`, `skill_gaps`, `embedding_version`.

---

## F9 — ER-diagram (Full) — Appendix B

Alle tabeller fra F8 plus: `user_roles`, `user_sessions`, `hiring_specialists`, `projects`, `skills`, `project_skills`, `project_bids`, `contract_versions`, `contract_signatures`, `economic_sync_log`, `platform_ecom_integration`, `job_embeddings`, `freelancer_embeddings`.

> **Fjernet**: `payment_accounts` og `withdrawals` er slettet fra databasen (migration `20251209000000`). Erstattet af `platform_ecom_integration` for OAuth-token-håndtering.

**Migration count**: 249 .sql filer i `supabase/migrations/` (verificeret via find-count).

---

## Metode: Evidensindsamling

| Metode | Beskrivelse |
|---|---|
| **Direkte kode-inspektion** | Filindlæsning af specifikke funktioner og linjenumre |
| **Grep-søgning** | Mønster-søgning efter model-navne, function-calls, tabel-definitioner |
| **Find-count** | Terminal-kommandoer til optælling af filer/mapper |
| **Dokumentanalyse** | Læsning af `docs/flows/`, `docs/ARCHITECTURE_DECISIONS.md` |

**Reproducérbarhed**: Alle counts og filstier kan verificeres via standard terminal-kommandoer.

---

*Genereret: 2026-02-09 · Styrke-vurdering tilføjet for alle claims*
