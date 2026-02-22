# Evidence Log – SoluTalent Bachelor Project

> **Purpose:** Every factual claim used in the thesis must trace to a verifiable source.  
> Sources are either **repo paths** (code, config, migration) or **literature references** (see `REFERENCES.bib`).  
> Last verified: 2026-02-09

---

## 1. Codebase Statistics

| # | Claim | Value | Source (repo path / command) |
|---|-------|-------|------------------------------|
| 1.1 | React components in `src/components/` | 172 | `(Get-ChildItem -Path 'src\components' -Recurse -Filter '*.tsx').Count` |
| 1.2 | Page components in `src/pages/` | 65 | `(Get-ChildItem -Path 'src\pages' -Recurse -Filter '*.tsx').Count` |
| 1.3 | Supabase Edge Functions | 41 | `(Get-ChildItem -Path 'supabase\functions' -Directory).Count` |
| 1.4 | Database migration files | 249 | `(Get-ChildItem -Path 'supabase\migrations' -Recurse -Filter '*.sql').Count` |
| 1.5 | `useFeatureFlag` hook files | 4 | `grep -r 'useFeatureFlag' src/hooks/ --files-with-matches` → `src/hooks/useFeatureFlags.tsx` (exports 4 hooks) |
| 1.6 | `useQuery` calls in hooks | 22 | `Select-String -Path 'src\hooks\*.ts*' -Pattern 'useQuery' | Measure-Object` |
| 1.7 | `useMutation` calls in hooks | 41 | `Select-String -Path 'src\hooks\*.ts*' -Pattern 'useMutation' | Measure-Object` |
| 1.8 | Documentation files (`.md`) in `docs/` | 132 | `(Get-ChildItem -Path 'docs' -Recurse -Filter '*.md').Count` |
| 1.9 | Lazy-loaded routes in `App.tsx` | 56 | `grep 'lazy(' src/App.tsx | count` → `src/App.tsx` |
| 1.10 | `CREATE POLICY` statements (RLS) | 585 | `Select-String … -Pattern 'CREATE POLICY' | Measure-Object` across all `supabase/migrations/` |
| 1.11 | Architecture Decision Records (ADRs) | 12 | `docs/ARCHITECTURE_DECISIONS.md` (ADR-001 through ADR-012) |
| 1.12 | Manual code-split chunks | 14 | `vite.config.ts:134-159` (vendor, router, supabase, ui-core, ui-forms, ui-navigation, ui-layout, ui-feedback, charts, three, pdf, leaflet, security, query) |

---

## 2. Technology Stack

| # | Claim | Source |
|---|-------|--------|
| 2.1 | React 18 + TypeScript + Tailwind CSS + shadcn/ui | `package.json` → `"react": "^18.3.1"`, `"typescript": "^5.5.3"`, `"tailwindcss": "^3.4.11"`, `"@radix-ui/*"` dependencies |
| 2.2 | Supabase (PostgreSQL, Auth, Edge Functions, Realtime, Storage) | `src/integrations/supabase/client.ts`, `supabase/functions/`, `supabase/migrations/` |
| 2.3 | OpenAI API integration | `supabase/functions/ai-match/index.ts:6` (`OPENAI_API_KEY`), `supabase/functions/generate-embeddings/index.ts`, `supabase/functions/parse-cv/index.ts`, `supabase/functions/parse-cv-vision/index.ts` |
| 2.4 | Vite as build tool | `vite.config.ts`, `package.json` → `"vite": "^5.4.2"` |
| 2.5 | TanStack React Query for server state | `package.json` → `"@tanstack/react-query": "^5.56.2"`, hooks in `src/hooks/` |
| 2.6 | React Hook Form + Zod validation | `package.json` → `"react-hook-form"`, `"zod"`, `"@hookform/resolvers"` |
| 2.7 | E-conomic API integration | `supabase/functions/economic-*/`, `docs/ARCHITECTURE_DECISIONS.md` ADR-006 |
| 2.8 | Netlify for frontend hosting | `netlify.toml` (project root), `docs/ARCHITECTURE_DECISIONS.md` |

---

## 3. AI Matching Algorithm

### 3.1 Embedding Model

| # | Claim | Source (exact code line) |
|---|-------|--------------------------|
| 3.1.1 | Embedding model: `text-embedding-3-small` | `supabase/functions/generate-embeddings/index.ts:151` → `model: 'text-embedding-3-small'` |
| 3.1.2 | pgvector for cosine similarity | `supabase/migrations/archive/2025-Q1/20250203000000_create_ai_matching_schema.sql` (vector extension + `<=>` operator) |
| 3.1.3 | GPT-4o-mini for AI explanation generation | `supabase/functions/ai-match/index.ts:523` → `model: 'gpt-4o-mini'` |

### 3.2 Default Weights (Hybrid Scoring)

| # | Claim | Value | Source |
|---|-------|-------|--------|
| 3.2.1 | Semantic weight (embedding similarity) | 0.40 | `supabase/functions/ai-match/index.ts:80` |
| 3.2.2 | Rule-based weight (aggregate) | 0.60 | `supabase/functions/ai-match/index.ts:81` |
| 3.2.3 | Skills weight | 0.25 | `supabase/functions/ai-match/index.ts:82` |
| 3.2.4 | Experience weight | 0.15 | `supabase/functions/ai-match/index.ts:83` |
| 3.2.5 | Category weight | 0.10 | `supabase/functions/ai-match/index.ts:84` |
| 3.2.6 | Location weight | 0.05 | `supabase/functions/ai-match/index.ts:85` |
| 3.2.7 | Seniority weight | 0.05 | `supabase/functions/ai-match/index.ts:86` |
| 3.2.8 | Category-specific weights via DB function | `supabase/functions/ai-match/index.ts:650-666` → `get_matching_weights_for_category` RPC |

### 3.3 Proficiency Multipliers

| # | Level | Multiplier | Source |
|---|-------|------------|--------|
| 3.3.1 | expert | 1.0 | `supabase/functions/ai-match/index.ts:91` |
| 3.3.2 | advanced | 0.8 | `supabase/functions/ai-match/index.ts:92` |
| 3.3.3 | intermediate | 0.6 | `supabase/functions/ai-match/index.ts:93` |
| 3.3.4 | beginner | 0.4 | `supabase/functions/ai-match/index.ts:94` |

### 3.4 Recency Multipliers

| # | Condition | Multiplier | Source |
|---|-----------|------------|--------|
| 3.4.1 | ≤ 6 months ago | 1.0 | `supabase/functions/ai-match/index.ts:108` |
| 3.4.2 | ≤ 24 months ago | 0.85 | `supabase/functions/ai-match/index.ts:109` |
| 3.4.3 | ≤ 60 months ago | 0.6 | `supabase/functions/ai-match/index.ts:110` |
| 3.4.4 | > 60 months ago | 0.4 | `supabase/functions/ai-match/index.ts:111` |
| 3.4.5 | Unknown (null date) | 0.7 | `supabase/functions/ai-match/index.ts:102` |

### 3.5 Score Composition

| # | Claim | Source |
|---|-------|--------|
| 3.5.1 | `overall_score = (semantic × semantic_weight) + (rule_based × rule_based_weight)` | `supabase/functions/ai-match/index.ts` (composite scoring logic) |
| 3.5.2 | Score breakdown stored per-match in `match_requests` table | `supabase/functions/ai-match/index.ts:859-864` → upsert to `match_requests` |
| 3.5.3 | Weights stored for transparency | `supabase/functions/ai-match/index.ts:847-856` → `weightsUsed` object |

---

## 4. CV Parsing

| # | Claim | Source |
|---|-------|--------|
| 4.1 | Text-based CV parsing uses `gpt-4o-mini` | `supabase/functions/parse-cv/index.ts:212` → `model: 'gpt-4o-mini'` |
| 4.2 | Vision-based CV parsing uses `gpt-4o` | `supabase/functions/parse-cv-vision/index.ts:252` → `model: 'gpt-4o'` |
| 4.3 | Text parser: `max_tokens: 2000`, `temperature: 0.3` | `supabase/functions/parse-cv/index.ts:214-215` |
| 4.4 | Vision parser: `max_tokens: 4000`, `temperature: 0.3` | `supabase/functions/parse-cv-vision/index.ts:257-258` |

---

## 5. GDPR Compliance

| # | Claim | Source |
|---|-------|--------|
| 5.1 | Soft-delete account deletion function (`request_account_deletion`) | `supabase/migrations/archive/2025-Q1/20250120000000_gdpr_account_deletion.sql:6-46` |
| 5.2 | 30-day grace period via `deletion_scheduled_at` column | `supabase/migrations/archive/2025-Q1/20250127000001_gdpr_account_deletion_enhancement.sql:30` → `now() + INTERVAL '30 days'` |
| 5.3 | Admin permanent deletion function (`admin_permanent_delete_account`) | `supabase/migrations/archive/2025-Q1/20250120000000_gdpr_account_deletion.sql:53-98` |
| 5.4 | Data export UI component | `src/components/settings/DataPrivacySection.tsx` |
| 5.5 | Audit log entries for deletion requests | `20250120000000_gdpr_account_deletion.sql:25-42` → insert into `security_audit_log` |
| 5.6 | PII-protecting views (exclude sensitive data from public access) | `supabase/migrations/archive/2025-Q4/20251209220000_fix_freelancer_data_exposure.sql` |

---

## 6. Security

| # | Claim | Source |
|---|-------|--------|
| 6.1 | Row Level Security (RLS) enabled – 585 policy definitions across migrations | All `supabase/migrations/` files (verified via grep count) |
| 6.2 | SECURITY DEFINER with fixed `search_path` pattern | `supabase/migrations/20260106200001_fix_function_search_paths.sql`, `docs/ARCHITECTURE_DECISIONS.md` ADR-012 |
| 6.3 | Contact info detection in messages (platform bypass prevention) | `src/lib/contactInfoDetector.ts` → detects 10 contact types (email, phone, linkedin, twitter, telegram, whatsapp, skype, discord, website, generic_contact) |
| 6.4 | CORS whitelist on Edge Functions | `supabase/functions/ai-match/index.ts:11-18` → `allowedOrigins` array |
| 6.5 | Security audit documented | `docs/SECURITY_AUDIT_DEC2025.md` |
| 6.6 | Safari cookie storage fallback (ADR-003) | `src/integrations/supabase/client.ts`, `docs/ARCHITECTURE_DECISIONS.md` ADR-003 |

---

## 7. Architecture Decisions (ADRs)

| ADR | Title | Source |
|-----|-------|--------|
| ADR-001 | User Roles via `user_roles` Table | `docs/ARCHITECTURE_DECISIONS.md` |
| ADR-002 | React Query for Server State | `docs/ARCHITECTURE_DECISIONS.md` |
| ADR-003 | Safari Cookie Storage Fallback | `docs/ARCHITECTURE_DECISIONS.md`, `src/integrations/supabase/client.ts` |
| ADR-004 | Jobs & Projects Unification | `docs/ARCHITECTURE_DECISIONS.md`, `supabase/migrations/archive/2025-Q4/20251209200000_unify_jobs_and_projects.sql` |
| ADR-005 | Admin-Mediated Bidding | `docs/ARCHITECTURE_DECISIONS.md`, `docs/flows/FLOW_BIDDING.md` |
| ADR-006 | E-conomic for Invoicing | `docs/ARCHITECTURE_DECISIONS.md`, `supabase/functions/economic-*` |
| ADR-007 | Contact Info Detection | `docs/ARCHITECTURE_DECISIONS.md`, `src/lib/contactInfoDetector.ts` |
| ADR-008 | Dual-Signature Contract Flow | `docs/ARCHITECTURE_DECISIONS.md`, `docs/flows/FLOW_CONTRACT_SIGNING.md` |
| ADR-009 | OpenAI for AI Features | `docs/ARCHITECTURE_DECISIONS.md`, `supabase/functions/ai-match/index.ts`, `supabase/functions/parse-cv/index.ts` |
| ADR-010 | Feature Flags | `docs/ARCHITECTURE_DECISIONS.md`, `src/hooks/useFeatureFlags.tsx` |
| ADR-011 | Code Splitting | `docs/ARCHITECTURE_DECISIONS.md`, `vite.config.ts:134-159` |
| ADR-012 | Security Definer with Fixed Search Path | `docs/ARCHITECTURE_DECISIONS.md`, `supabase/migrations/20260106200001_fix_function_search_paths.sql` |

---

## 8. Business Flows

| # | Claim | Source |
|---|-------|--------|
| 8.1 | Bidding flow: freelancer → bid → admin review → accept/reject/counter → contract | `docs/flows/FLOW_BIDDING.md` |
| 8.2 | Contract signing: draft → admin signs → freelancer signs → active | `docs/flows/FLOW_CONTRACT_SIGNING.md` |
| 8.3 | Contract generation Edge Function | `supabase/functions/generate-contract-from-bid/index.ts` |
| 8.4 | Bid statuses: pending, under_review, accepted, rejected, countered, withdrawn | `docs/flows/FLOW_BIDDING.md`, `supabase/migrations/archive/2025-Q4/20251209100000_create_project_bids_schema.sql` |

---

## 9. Frontend Architecture

| # | Claim | Source |
|---|-------|--------|
| 9.1 | 56 lazy-loaded route components | `src/App.tsx` (grep `lazy(` → 56 matches) |
| 9.2 | 14 manual chunk definitions for code splitting | `vite.config.ts:134-159` |
| 9.3 | AuthContext for auth state management | `src/contexts/AuthContext.tsx` |
| 9.4 | shadcn/ui component library (Radix UI primitives) | `src/components/ui/` directory, `package.json` → `@radix-ui/*` dependencies |
| 9.5 | Feature flag system | `src/hooks/useFeatureFlags.tsx`, `supabase/migrations/archive/2025-Q4/20251216000001_add_feature_flags.sql` |

---

## 10. System Assessment (from existing analysis)

| # | Claim | Source |
|---|-------|--------|
| 10.1 | Strengths: Frontend architecture, Security foundation, Business logic, Unit tests | `docs/system-assessment.md` |
| 10.2 | Risks: Auth race conditions, Dual role management, Edge function lack protections | `docs/system-assessment.md` |
| 10.3 | High complexity areas: Auth state machine, Bidding transitions, E-conomic integration, AI pipeline | `docs/system-assessment.md` |
| 10.4 | Failure points: Contract-to-payment under load, Auth edge cases, E-conomic API instability, Admin bottleneck | `docs/system-assessment.md` |

---

## 11. Module Interactions

| # | Claim | Source |
|---|-------|--------|
| 11.1 | High-level architecture: Frontend → Supabase → External Services | `docs/MODULE_INTERACTIONS.md` |
| 11.2 | Authentication flow documented | `docs/MODULE_INTERACTIONS.md` § Authentication Flow |
| 11.3 | Bidding system data flow | `docs/MODULE_INTERACTIONS.md` § Bidding System Data Flow |
| 11.4 | AI matching data flow | `docs/MODULE_INTERACTIONS.md` § AI Matching Data Flow |
| 11.5 | Real-time messaging data flow | `docs/MODULE_INTERACTIONS.md` § Real-time Messaging Data Flow |
| 11.6 | E-conomic sync data flow | `docs/MODULE_INTERACTIONS.md` § E-conomic Sync Data Flow |
| 11.7 | Module communication matrix | `docs/MODULE_INTERACTIONS.md` § Module Communication Matrix |

---

## 12. Database Schema

| # | Claim | Source |
|---|-------|--------|
| 12.1 | Core tables: `freelancers`, `freelancer_skills`, `jobs`, `match_requests` | `docs/DATABASE_SCHEMA.md` |
| 12.2 | Enum types with validation triggers | `docs/DATABASE_SCHEMA.md` → Enum Values section |
| 12.3 | Foreign key relationships | `docs/DATABASE_SCHEMA.md` → Relationships section |
| 12.4 | `profiles`, `user_roles`, `contracts`, `project_bids`, `time_entries`, `invoices` | Various migration files in `supabase/migrations/` |

---

## 13. External Integration Points

| # | Claim | Source |
|---|-------|--------|
| 13.1 | OpenAI API (embeddings, chat completions, vision) | `supabase/functions/generate-embeddings/`, `supabase/functions/ai-match/`, `supabase/functions/parse-cv/`, `supabase/functions/parse-cv-vision/` |
| 13.2 | E-conomic API (invoicing, customers, projects, time entries) | `supabase/functions/economic-create-invoice/`, `economic-create-customer/`, `economic-sync-time-entries/` etc. |
| 13.3 | Supabase Auth (email/password, OAuth) | `src/contexts/AuthContext.tsx`, `supabase/migrations/archive/2025-Q4/20251224000001_fix_handle_new_user_add_user_roles.sql` |
| 13.4 | Supabase Realtime (messaging) | `docs/MODULE_INTERACTIONS.md` § Real-time Messaging, `src/components/messaging/` |
| 13.5 | Supabase Storage (CVs, avatars, certificates, contracts) | `supabase/migrations/archive/2025-Q1/20250131000002_add_certificates_storage.sql`, `20260108_contract_pdf_storage_bucket.sql` |

---

## Appendix: Verification Commands

All statistics were gathered on **2026-02-09** from the repository at `C:\Users\Christian\Documents\GitHub\solutalent-7f727c67`.

```powershell
# Components count
(Get-ChildItem -Path 'src\components' -Recurse -Filter '*.tsx').Count  # → 172

# Pages count
(Get-ChildItem -Path 'src\pages' -Recurse -Filter '*.tsx').Count  # → 65

# Edge Functions count
(Get-ChildItem -Path 'supabase\functions' -Directory).Count  # → 41

# Migration files count
(Get-ChildItem -Path 'supabase\migrations' -Recurse -Filter '*.sql').Count  # → 249

# CREATE POLICY statements
Select-String -Path "supabase\migrations\*.sql","supabase\migrations\archive\*\*.sql" -Pattern "CREATE POLICY" | Measure-Object  # → 585

# useQuery in hooks
Select-String -Path 'src\hooks\*.ts*' -Pattern 'useQuery' | Measure-Object  # → 22

# useMutation in hooks
Select-String -Path 'src\hooks\*.ts*' -Pattern 'useMutation' | Measure-Object  # → 41

# Lazy routes
Select-String -Path 'src\App.tsx' -Pattern 'lazy\(' | Measure-Object  # → 56

# Documentation files
(Get-ChildItem -Path 'docs' -Recurse -Filter '*.md').Count  # → 132
```

