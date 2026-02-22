# Logging-specifikation (måleplan)

> **Formål**: Definere hvilke events og felter der skal logges for at kunne
> måle time-to-match, high-score rate og andre centrale effektmål.
> **Bemærk**: Dette er en plan — logging kræver implementering i kode og
> etisk/gdpr-mæssig afklaring.

---

## 1. Event-oversigt

| Event | Beskrivelse | Hvor trigges | Formål |
|---|---|---|---|
| `job_created` | Job/project oprettet | Job import / admin opretter | Startpunkt for time-to-match |
| `match_generated` | Match beregnet | AI-match pipeline | Underlag for high-score rate |
| `match_admin_reviewed` | Admin vurderer match | Admin workflow | Override-rate |
| `bid_submitted` | Freelancer indsender bid | Bid flow | Bid→Contract conversion |
| `bid_accepted` | Admin accepterer bid | Admin flow | Kontrakt trigger |
| `contract_created` | Kontrakt genereret | Edge function | Lead time |
| `contract_signed_admin` | Admin signerer | Contract flow | Process-metric |
| `contract_signed_freelancer` | Freelancer signerer | Contract flow | Process-metric |
| `contract_activated` | Kontrakt aktiv | Status → active | Start for delivery/payment |
| `time_entry_approved` | Time entry godkendt | Admin flow | Payment lead time |
| `economic_sync_success` | Sync til E-conomic | Edge function | Endepunkt for fakturering |

---

## 2. Fælles felter (alle events)

- `event_id` (UUID)
- `event_name`
- `occurred_at` (UTC timestamp)
- `actor_role` (freelancer/admin/system)
- `actor_user_id` (auth.users.id)
- `correlation_id` (samler flow på tværs af events)

---

## 3. Domænespecifikke felter

### Job / Project
- `job_id` / `project_id`
- `job_source` (manual/import)
- `service_category`

### Match
- `match_request_id`
- `match_result_id`
- `overall_score`
- `semantic_score`
- `rule_based_score`
- `weights_used` (JSON) — NB: returneres i API-response, persisteres i `match_analytics` (ikke `match_results`)

### Bid
- `bid_id`
- `rate_type` (hourly/fixed)
- `proposed_rate`
- `status`

### Contract
- `contract_id`
- `contract_status`
- `signed_by_admin_at`
- `signed_by_freelancer_at`

### Tidsregistrering og fakturering
- `time_entry_id`
- `economic_sync_id`
- `sync_status`

---

## 4. Måleplan (afledte metrics)

| Metric | Formel | Krævede events |
|---|---|---|
| **Time-to-match** | `match_admin_reviewed.occurred_at - job_created.occurred_at` | job_created, match_admin_reviewed |
| **High-score rate** | `count(match_generated with overall_score ≥ X) / count(match_generated)` | match_generated |
| **Admin override rate** | `count(match_generated with high score but rejected) / count(high score)` | match_generated, match_admin_reviewed |
| **Bid→Contract conversion** | `count(contract_created) / count(bid_submitted)` | bid_submitted, contract_created |
| **Contract→Faktura lead time** | `economic_sync_success.occurred_at - contract_activated.occurred_at` | contract_activated, economic_sync_success |

---

## 5. Datakilder i repo (for implementering)

Mulige steder at instrumentere logging:
- **Edge functions**: `supabase/functions/*/index.ts`
- **DB triggers**: migrations i `supabase/migrations/`
- **Frontend events**: `src/pages/`, `src/hooks/`

> **TODO (primær empiri)**: Afklar GDPR og samtykke før logging af brugerdata.

