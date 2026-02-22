# Reality Lock — Figurverifikation mod kildekode

> **Dato**: 2026-02-09  
> **Formål**: Systematisk kontrol af at alle figurer afspejler *faktisk* kodeadfærd, ikke antagelser.  
> **Metode**: Direkte inspektion af relevante kildefiler med linjenumre.

---

## 1. AI-pipeline (F1): Persistering og pre-approval status

### Verificerede fakta

| # | Påstand i figur | Faktisk kode | Fil:linje | Status |
|---|---|---|---|---|
| 1 | Match-request oprettes med `status: 'pending'` | `status: 'pending'` i upsert | `supabase/functions/ai-match/index.ts:866` | ✅ |
| 2 | Match-request kan have status `blocked` (hard filter) | `status: 'blocked'` for kritiske mangler | `supabase/functions/ai-match/index.ts:739` | ✅ |
| 3 | Match-results INSERT med score-breakdown | `.from('match_results').insert({...})` | `supabase/functions/ai-match/index.ts:907-920` | ✅ |
| 4 | `weights_used` persisteres i match_results | **FORKERT** — `weights_used` er KUN i API-response JSON | `ai-match/index.ts:953` (response, IKKE insert) | ❌ **RETTET** |
| 5 | Admin ændrer status via RPC | `update_match_request_status(p_match_request_id, p_status)` | `20250203000000_create_ai_matching_schema.sql:481-501` | ✅ |
| 6 | Mulige status-værdier | `'pending', 'reviewed', 'sent_to_hiring_manager', 'approved', 'rejected', 'expired'` | `20250203000000_create_ai_matching_schema.sql:19` | ✅ |
| 7 | `reviewed_at` og `reviewed_by` sættes ved approval | `SET reviewed_at = now(), reviewed_by = auth.uid()` | `20250203000000_create_ai_matching_schema.sql:495-498` | ✅ |

### Rettelser foretaget i `ai_pipeline.mmd`

- **Tilføjet**: To separate datastores: `match_requests` (med `status: pending`) og `match_results` (score + breakdown)
- **Tilføjet**: Eksplicit "Upsert (status: pending)" label på pil til match_requests
- **Tilføjet**: "Insert" label på pil til match_results
- **Ændret**: Approve-boks viser nu "status: approved" og Reject viser "status: rejected"
- **Tilføjet**: Reality Lock kommentar i filhovedet med linjenumre

### Rettelser foretaget i `er_diagram.puml` + `er_full.puml`

- **Fjernet**: `weights_used : jsonb` fra match_results (eksisterer IKKE i tabellen)
- **Tilføjet**: `match_reasons : jsonb`, `skill_gaps : jsonb`, `embedding_version : text` (faktiske kolonner jf. migration:49-52)

---

## 2. Process To-Be (F7): Hvad trigger AI-matching?

### Verificerede fakta

| # | Påstand i figur (FØR) | Faktisk kode | Fil:linje | Status |
|---|---|---|---|---|
| 1 | "Bid → AI-matching" (direkte trigger) | **FORKERT** — AI-match kaldes on-demand via `supabase.functions.invoke('ai-match', {body: {freelancer_id, job_id}})` | `src/services/matchFitScore.ts:79-85` | ❌ **RETTET** |
| 2 | request_type kan være `'automatic' \| 'on_demand' \| 'admin'` | Interface definition | `ai-match/index.ts:36` | ✅ |
| 3 | Freelancer-side bruger AI-match | **NEJ** — `FreelancerOpportunitiesPage.tsx` bruger `useCalculateMatchFitScore` (rule-based fallback) | `src/pages/FreelancerOpportunitiesPage.tsx:37,87` | ⚠️ |
| 4 | Admin-side bruger AI-match | **JA** — `MatchDashboard.tsx` kalder `update_match_request_status` RPC | `src/pages/admin/MatchDashboard.tsx:138-141` | ✅ |
| 5 | TriggerMatchNotificationsButton sender notifikationer baseret på matches | Kalder `trigger-match-notifications` edge function | `src/components/admin/TriggerMatchNotificationsButton.tsx:44` | ✅ |

### Rettelser foretaget i `process_to_be.mmd`

- **Ændret**: `Bid --> AISupport` (solid pil) → `Bid -.->|"Kan trigge AI-match"| AISupport` (stiplet pil med "Kan trigge")
- **Tilføjet**: "(on-demand / admin-initieret)" i AI-subgraph titel
- **Tilføjet**: "status: pending" label på ResultsDB
- **Ændret**: Note-boks fra "AI leverer kun beslutningsstøtte" → "AI-matching trigges on-demand eller af admin — IKKE automatisk ved bud"
- **Tilføjet**: Reality Lock kommentar i filhovedet

### Ny evidens til APPENDIX_FIGURE_EVIDENCE

| Claim | Repo-evidens | Styrke |
|---|---|---|
| AI-match er on-demand, ikke bid-triggered | `src/services/matchFitScore.ts:79` (explicit invoke med freelancer_id + job_id) | ✅ |
| request_type: 'automatic' \| 'on_demand' \| 'admin' | `supabase/functions/ai-match/index.ts:36` | ✅ |
| Freelancer-side bruger IKKE AI-match i produktion | `src/pages/FreelancerOpportunitiesPage.tsx:37` (useCalculateMatchFitScore = rule-based) | ✅ |
| Admin reviewer match_requests via RPC | `src/pages/admin/MatchDashboard.tsx:138` (update_match_request_status) | ✅ |
| Rejection reasons logges for ML feedback | `src/pages/admin/MatchDashboard.tsx:37-45` (REJECTION_REASONS array) | ✅ |

---

## 3. ER Light (F8): Begrundelse for hver tabel

| Tabel | Indgår i flow? | Begrundelse | Beholdes? |
|---|---|---|---|
| `auth.users` | Ja — basis for alle brugere | Supabase Auth-identitet. FK-target for profiles, match_requests.reviewed_by | ✅ Beholdes |
| `profiles` | Ja — roller og adgang | Binder auth.users til app_role. Nødvendig for RBAC/RLS | ✅ Beholdes |
| `freelancers` | Ja — kerneentitet | Input til AI-matching (profil, kategori, seniority) | ✅ Beholdes |
| `freelancer_skills` | Ja — input til matching | Kompetencer med proficiency/years — direkte input til regelbaseret scoring | ✅ Beholdes |
| `jobs` | Ja — kerneentitet | Jobopslag — den anden side af matching | ✅ Beholdes |
| `match_requests` | Ja — AI-matching flow | Tracking af match-forespørgsler med status-workflow (pending→approved/rejected) | ✅ Beholdes |
| `match_results` | Ja — AI-matching output | Detaljeret score-breakdown, reasons, skill_gaps | ✅ Beholdes |
| `bids` | Ja — bidding flow | Freelancer-bud med status og rate | ✅ Beholdes |
| `contracts` | Ja — kontrakt flow | Kontrakter med dual-signature status | ✅ Beholdes |
| `time_entries` | Ja — payment flow | Tidsregistrering → fakturering via E-conomic | ✅ Beholdes |

**Konklusion**: Alle 10 tabeller er direkte involveret i de analyserede flows (AI-matching + bidding-til-fakturering). Ingen tabeller fjernes.

### Rettelse i ER Light

- **Fjernet**: `weights_used : jsonb` fra match_results (eksisterer ikke i tabellen)
- **Tilføjet**: `match_reasons : jsonb`, `skill_gaps : jsonb`, `embedding_version : text` (faktiske kolonner)

---

## 4. Framework Outcomes (F2): Mapping til LOGGING_SPEC

| Outcome | LOGGING_SPEC event/field | Kan måles i dag? | Status i figur |
|---|---|---|---|
| **Time-to-match** | `match_admin_reviewed.occurred_at - job_created.occurred_at` (LOGGING_SPEC §4) | **Nej** — kræver logging-implementering. `match_requests` har `created_at` og `reviewed_at`, men `job_created` event logges ikke | ¹ ³ |
| **Time-to-contract** | `contract_created.occurred_at - job_created.occurred_at` (LOGGING_SPEC §4) | **Nej** — kræver logging-implementering | ¹ ³ |
| **Match-score fordeling** | `match_results.overall_score` (eksisterende tabel) | **Ja** — kan afledes direkte fra `match_results`-tabellen via SQL | ² |
| **Godkendelsesrate** | `count(approved) / count(pending)` via `match_requests.status` (LOGGING_SPEC §4) | **Delvis** — data eksisterer i `match_requests.status`, men dedikeret event-logging mangler | ¹ ³ |
| **Audit-hændelser logget** | Ikke specificeret præcist i LOGGING_SPEC | **Delvis** — `AuditLogsPage.tsx` eksisterer, men event-definition mangler | ¹ ³ |
| **RLS policy-dækning** | 585 policies (SECURITY_AUDIT_DEC2025.md) | **Ja** — verificeret via sikkerhedsaudit | ² |

### Rettelser foretaget i `framework.mmd`

- **Tilføjet**: ³-markering (= "Kræver logging-implementering") for outcomes der ikke kan måles i dag
- **Ændret**: Match-score fordeling fra ¹ til ² (kan afledes fra eksisterende data)
- **Tilføjet**: Note3 i legend: "³ Kræver logging-implementering"
- **Ændret**: Note2 i legend: "² Kan afledes fra eksisterende data" (mere præcist end "verificeret via repo-evidens")

---

## 5. Yderligere fund (bonus)

| # | Fund | Konsekvens | Alvorlighed |
|---|---|---|---|
| A | `weights_used` returneres i API-response (linje 953) men gemmes IKKE i DB | ER-diagram viste en kolonne der ikke eksisterer. Transparens-claim er svagere end antaget. | 🔴 Høj — rettet |
| B | `match_analytics` (separat tabel, migration `20260107110000`) HAR `weights_used` | Transparens-data KAN persisteres, men i en anden tabel end `match_results` | ⚠️ Info |
| C | Freelancer-side bruger rule-based fallback, ikke AI-match | process_to_be antydede at AI-match var integreret i brugerflowet — det er kun admin-side | 🔴 Høj — rettet |
| D | `TriggerMatchNotificationsButton` kalder en separat edge function (`trigger-match-notifications`) | Match-notifikationer er et separat system fra AI-match scoring | ⚠️ Info |
| E | REJECTION_REASONS (linje 37-45 i MatchDashboard) logges for ML feedback loop | Styrker claim om transparens og feedback | ✅ Positiv |

---

## 6. Opsummering af rettelser

| Fil | Rettelse | Begrundelse |
|---|---|---|
| `ai_pipeline.mmd` | To separate datastores + korrekte status-labels + reality lock kommentar | match_requests og match_results er separate tabeller med forskellige formål |
| `process_to_be.mmd` | Stiplet pil fra Bid til AI + "on-demand" label + ny note | AI-match trigges IKKE af bids — det er on-demand/admin-initieret |
| `er_diagram.puml` | Fjernet `weights_used`, tilføjet faktiske kolonner | Kolonnen eksisterer ikke i match_results-tabellen |
| `er_full.puml` | Samme rettelse som er_diagram.puml | Konsistens |
| `framework.mmd` | Tilføjet ³-markering for outcomes der kræver logging-implementering | Ærlig om hvad der kan måles i dag vs. fremtidigt |

---

## 7. Åbne spørgsmål (til afklaring)

1. **Skal `match_analytics.weights_used` nævnes i ER-diagrammet?** — Tabellen `match_analytics` eksisterer (migration `20260107110000`), men er ikke inkluderet i ER Light. Overvej om den hører til i full ER.
2. **Hvem trigger AI-match i praksis?** — Koden viser at det er on-demand, men der er ingen automatisk trigger ved job-oprettelse eller bid-submission. Er dette tilsigtet design eller en manglende feature?
3. **Skal `trigger-match-notifications` edge function inkluderes i AI-pipeline?** — Den er relateret men separat fra scoring-logikken.

---

## 8. Opdatering 2026-02-09 (runde 2)

### Nye fund

| Fund | Evidens | Konsekvens |
|---|---|---|
| `payment_accounts` og `withdrawals` er **FJERNET** | `20251209000000_remove_withdrawals_and_payment_accounts.sql` — "payments are not handled through the platform" | Fjernet fra `er_full.puml`, opdateret DATABASE.md |
| E-conomic integration er **STADIG AKTIV** | Edge functions: `economic/`, `sync-time-to-ecom/`, `sync-ecom-projects/`, `ecom-auth-callback/` eksisterer | Ingen ændring i C4/process-diagrammer |
| `economic_sync_log` eksisterer stadig | Oprettet `20251126093142`, aldrig droppet | Beholdt i er_full.puml |
| `platform_ecom_integration` eksisterer | Oprettet `20251201155342` | Tilføjet i er_full.puml |
| **Visma** findes **IKKE** i kodebasen | `grep -ri visma` returnerer 0 resultater | Ingen Visma-relaterede ændringer |
| `time_entries` eksisterer stadig | Oprettet `20251126093140`, aldrig droppet | Beholdt i begge ER-diagrammer |
| AI-match trigger er on-demand (bekræftet igen) | `src/services/matchFitScore.ts:79` — explicit `invoke('ai-match')` | Ingen ændring (allerede rettet i runde 1) |
| Freelancer-side bruger rule-based (bekræftet igen) | `FreelancerOpportunitiesPage.tsx:37` — `useCalculateMatchFitScore` | Ingen ændring |

### Ændrede filer (runde 2)

| Fil | Rettelse |
|---|---|
| `er_full.puml` | Fjernet `payment_accounts` + `withdrawals`, tilføjet `platform_ecom_integration` |
| `er_diagram.puml` | Sektion-header "PAYMENT" → "TIDSREGISTRERING" |
| `DATABASE.md` | Fjernet payment_accounts/withdrawals, tilføjet note om fjernelse |
| `PROCESSER.md` | Opdateret To-be beskrivelse med on-demand trigger |
| `INTRO.md` | "betaling" → "fakturering" |
| `LOGGING_SPEC.md` | "Payment" → "Tidsregistrering og fakturering" |
| `FIGURE_CAPTIONS.md` | Tilføjet noter om fjernede tabeller og on-demand trigger |
| `APPENDIX_FIGURE_EVIDENCE.md` | Opdateret F8, F9 evidens |
| `CONSISTENCY_CHECKLIST.md` | Tilføjet AI-trigger terminologi-regel |

---

*Genereret: 2026-02-09 · Runde 1 + 2 baseret på direkte kodeinspektion med linjenumre*

