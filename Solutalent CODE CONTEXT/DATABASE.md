# Database-oversigt — centrale tabeller (repo-deriveret)

> **Formål**: Kortlægge de vigtigste tabeller og relationer udledt fra
> Supabase-migrationer. ER-diagram: `docs/bachelor/figures/er_diagram.puml`.

---

## Centrale domæner og tabeller

### Brugere og roller
- **profiles** — brugerprofil knyttet til `auth.users`  
  Kilde: `supabase/migrations/archive/2025-Q3/20250828113832_3ce210e8-a040-4cfa-a992-7d04de513074.sql`
- **user_roles** — separate roller pr. bruger  
  Kilde: `supabase/migrations/archive/2025-Q4/20251006093512_9ba31437-e480-4696-9ab0-59cce11120dd.sql`
- **user_sessions** — session-logning  
  Kilde: `supabase/migrations/archive/2025-Q3/20250828113832_3ce210e8-a040-4cfa-a992-7d04de513074.sql`

### Freelancere og kompetencer
- **freelancers** — profil for freelancer  
  Kilde: `supabase/migrations/archive/2025-Q3/20250828112219_4b10bd65-166a-4e86-807f-8a972f697fc9.sql`
- **freelancer_skills** — kompetencer (many-to-one)  
  Kilde: samme migration som ovenfor

### Jobs og projekter
- **jobs** — jobopslag  
  Kilde: `supabase/migrations/archive/2025-Q3/20250820114041_3c991133-f34d-447d-9edb-98b1577f54a3.sql`
- **projects** — projektdata (intern brief)  
  Kilde: `supabase/migrations/archive/2025-Q1/20250125000000_create_project_data_schema.sql`
- **project_skills** — projekt–skill junction  
  Kilde: samme migration som ovenfor
- **skills** — skills lookup  
  Kilde: samme migration som ovenfor

### Bids og kontrakter
- **bids** — freelancer-bid på jobs  
  Kilde: `supabase/migrations/archive/2025-Q1/20250131000021_create_bids_schema.sql`
- **project_bids** — admin-medieret bids på projects  
  Kilde: `supabase/migrations/archive/2025-Q4/20251209100000_create_project_bids_schema.sql`
- **contracts** — kontrakter for projekter  
  Kilde: `supabase/migrations/archive/2025-Q1/20250131000022_create_contracts_schema.sql`
- **contract_versions** — versionshistorik  
  Kilde: samme migration som ovenfor
- **contract_signatures** — signatur-logs  
  Kilde: samme migration som ovenfor

### Tidsregistrering og E-conomic-integration
- **time_entries** — tidsregistrering pr. projekt  
  Kilde: `supabase/migrations/archive/2025-Q4/20251201150723_create_time_entries_if_missing.sql`
- **economic_sync_log** — audit-log for E-conomic sync  
  Kilde: `supabase/migrations/archive/2025-Q4/20251126093142_create_economic_sync_log.sql`
- **platform_ecom_integration** — OAuth-tokens for E-conomic API  
  Kilde: `supabase/migrations/archive/2025-Q4/20251201155342_add_platform_ecom_integration.sql`

> **Fjernet**: `payment_accounts` og `withdrawals` er slettet fra databasen.  
> Migration: `20251209000000_remove_withdrawals_and_payment_accounts.sql`  
> Begrundelse: *"payments are not handled through the platform"*

### AI-matching
- **match_requests** — match-forespørgsler  
  Kilde: `supabase/migrations/archive/2025-Q1/20250203000000_create_ai_matching_schema.sql`
- **match_results** — detaljeret match-score  
  Kilde: samme migration som ovenfor
- **job_embeddings** — embeddings for jobs  
  Kilde: samme migration som ovenfor
- **freelancer_embeddings** — embeddings for freelancers  
  Kilde: samme migration som ovenfor

---

## Relationer (uddrag)

- `profiles.user_id` → `auth.users.id`  
  Kilde: `20250828113832_3ce210e8-a040-4cfa-a992-7d04de513074.sql`
- `user_roles.user_id` → `auth.users.id`  
  Kilde: `20251006093512_9ba31437-e480-4696-9ab0-59cce11120dd.sql`
- `freelancer_skills.freelancer_id` → `freelancers.id`  
  Kilde: `20250828112219_4b10bd65-166a-4e86-807f-8a972f697fc9.sql`
- `bids.job_id` → `jobs.id`, `bids.freelancer_id` → `freelancers.id`  
  Kilde: `20250131000021_create_bids_schema.sql`
- `project_bids.project_id` → `projects.id`, `project_bids.freelancer_id` → `freelancers.id`  
  Kilde: `20251209100000_create_project_bids_schema.sql`
- `contracts.project_id` → `projects.id`, `contracts.freelancer_id` → `freelancers.id`  
  Kilde: `20250131000022_create_contracts_schema.sql`
- `match_requests.freelancer_id` → `freelancers.id`, `match_requests.job_id` → `jobs.id`  
  Kilde: `20250203000000_create_ai_matching_schema.sql`

---

## ER-diagram

PlantUML fil: `docs/bachelor/figures/er_diagram.puml`  
Diagrammet viser den “light” model af centrale tabeller og relationer.

