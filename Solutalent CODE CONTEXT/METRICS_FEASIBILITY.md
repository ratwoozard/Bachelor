# Metrics Feasibility Analysis

> **Formål**: Vurdere hvilke metrics der kan måles nu vs. kræver implementering.  
> **Kilde**: `LOGGING_SPEC.md`, `supabase/migrations/`, `supabase/functions/`

---

## Feasibility-tabel

| # | Metric | Definition | Kan måles nu? | Datakilde | Gap | Minimal change |
|---|---|---|---|---|---|---|
| 1 | **Time-to-match** | Tid fra job oprettet → match godkendt | **PARTIAL** | `jobs.created_at`, `match_requests.reviewed_at` | Ingen explicit `job_created` event; `reviewed_at` kun sat ved godkendelse | Tilføj `reviewed_at` update trigger |
| 2 | **High-score rate** | Andel matches med score ≥ threshold | **YES** | `match_results.overall_score` | Ingen threshold defineret | Definer threshold (fx 70) |
| 3 | **Admin override rate** | Andel høj-score kandidater afvist | **PARTIAL** | `match_results.overall_score`, `match_requests.status` | Ingen kobling mellem score og rejection reason | Tilføj `pre_decision_score` felt |
| 4 | **Bid→Contract conversion** | Andel bids → kontrakt | **YES** | `bids.id`, `contracts.id` via foreign key | Ingen direkte FK; kræver join via job_id | Query: `contracts JOIN bids ON contract.job_id = bid.job_id` |
| 5 | **Contract→Faktura lead time** | Tid fra kontrakt aktiv → E-conomic sync | **PARTIAL** | `contracts.status`, `economic_sync_log.created_at` | Ingen explicit `contract_activated` timestamp | Tilføj `activated_at` kolonne |
| 6 | **Match-score fordeling** | Histogram af overall_score | **YES** | `match_results.overall_score` | — | Standard SQL aggregation |
| 7 | **Godkendelsesrate** | Andel match_requests med status=approved | **YES** | `match_requests.status` | — | `WHERE status = 'approved'` |
| 8 | **Time-to-contract** | Tid fra job → kontrakt signeret | **PARTIAL** | `jobs.created_at`, `contracts.created_at` | Ingen explicit "signeret" timestamp | Tilføj `signed_at` kolonne |
| 9 | **AI-match trigger count** | Antal AI-match kald pr. dag | **NO** | Ingen logging | Ingen event-log | Tilføj `ai_match_invoked` event til edge function |
| 10 | **Rejection reasons distribution** | Fordeling af afvisningsårsager | **PARTIAL** | `src/pages/admin/MatchDashboard.tsx:37-45` (REJECTION_REASONS array) | Reasons vises i UI, men gemmes IKKE i DB | Tilføj `rejection_reason` kolonne til `match_requests` |
| 11 | **Semantic vs rule-based score ratio** | Sammenligning af scoring-komponenter | **YES** | `match_results.semantic_similarity_score`, `skills_match_score` etc. | — | Query fra match_results |
| 12 | **Time entry approval rate** | Andel godkendte timer | **PARTIAL** | `time_entries.status` | Status-enum ikke verificeret | Verificer at 'approved' status eksisterer |
| 13 | **E-conomic sync success rate** | Andel vellykkede syncs | **YES** | `economic_sync_log.status` | — | `WHERE status = 'success'` |
| 14 | **Weights transparency** | Andel matches med weights logget | **PARTIAL** | `match_analytics.weights_used` | `match_analytics` tabel eksisterer, men population ukendt | Verificer at weights logges til `match_analytics` |
| 15 | **User session duration** | Gennemsnitlig session-tid | **NO** | Ingen frontend analytics | Ingen session-tracking | Tilføj frontend event-tracking |

---

## Opsummering

| Status | Antal | Metrics |
|---|---|---|
| **YES** (kan måles nu) | 6 | #2, #4, #6, #7, #11, #13 |
| **PARTIAL** (kræver minor fix) | 7 | #1, #3, #5, #8, #10, #12, #14 |
| **NO** (kræver implementation) | 2 | #9, #15 |

---

## Datakilder (verificeret)

| Tabel | Eksisterer | Migration | Relevante kolonner |
|---|---|---|---|
| `match_requests` | ✅ | `20250203000000` | `status`, `reviewed_at`, `reviewed_by`, `created_at` |
| `match_results` | ✅ | `20250203000000` | `overall_score`, `semantic_similarity_score`, `skills_match_score`, `match_reasons` |
| `match_analytics` | ✅ | `20260107110000` | `weights_used`, `performance_metrics` |
| `jobs` | ✅ | `20250820114041` | `created_at`, `status`, `category` |
| `bids` | ✅ | `20250131000021` | `status`, `created_at`, `job_id`, `freelancer_id` |
| `contracts` | ✅ | `20250131000022` | `status`, `created_at`, `freelancer_id` |
| `time_entries` | ✅ | `20251126093140` | `status`, `hours`, `freelancer_id`, `project_id` |
| `economic_sync_log` | ✅ | `20251126093142` | `status`, `sync_type`, `entity_id`, `created_at` |

---

## Anbefalinger

### Quick wins (kan måles med eksisterende data)
1. Match-score fordeling → simpel histogram-query
2. Godkendelsesrate → `COUNT(*) WHERE status = 'approved'`
3. E-conomic sync success rate → allerede logget

### Kræver minor schema-ændringer
1. `match_requests.rejection_reason` → capture admin rationale
2. `contracts.activated_at` → explicit timestamp
3. `jobs.matched_at` → time-to-match endpoint

### Kræver implementation
1. AI-match invocation logging i edge function
2. Frontend session tracking (kræver consent)

---

## TODO (needs evidence)

| Metric | Manglende evidens |
|---|---|
| RLS policy count (585) | Ikke direkte talt fra migrations — kun fra SECURITY_AUDIT |
| AI-match usage patterns | Ingen invocation logs |
| User acceptance of AI recommendations | Ingen brugerundersøgelse |

---

*Genereret: 2026-02-09*

