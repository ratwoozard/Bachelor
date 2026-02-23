# Case Knowledge Base – SoluTalent & Support Solutions ApS

## 1. Virksomheden: Support Solutions ApS

- **Type:** Dansk IT-konsulenthus
- **Marked:** Skandinavien (primært Danmark)
- **Kerneydelse:** Allokering af freelance IT-konsulenter til projektopgaver hos kunder
- **Størrelse:** SMV (mindre/mellemstor virksomhed)
- **Konkurrenceparameter:** Hastighed og præcision i matching af konsulent → opgave

## 2. Platformen: SoluTalent

**Stack:** React 19, TypeScript, Vite, Supabase (PostgreSQL, Auth, Realtime, Edge Functions), OpenAI

**Hvad den gør:** B2B talentmarkedsplads for det skandinaviske marked. Forbinder virksomheder med vettede freelancekonsulenter via AI-matching, budgivning, kontrakthåndtering, tidsregistrering og fakturering *(kontrakt/tidsregistrering/fakturering er uden for projektets scope—se trin 8)*.

### Hovedfunktioner

| Område | Funktioner |
|---|---|
| **Offentligt** | Freelancer-katalog, jobopslag, projektbeskrivelser, ansøgningsformular |
| **Admin** | Dashboard, statistik, curation, matching, matchmaker, bud-håndtering, kontrakter*, tidsregistrering*, kreditnotaer*, integrationer, audit logs (*= uden for scope) |
| **Freelancer** | Dashboard, muligheder/matches, bud, kontrakter, tidslog, betalinger, beskeder, statistik |
| **AI** | Matching-pipeline, job-enrichment, CV-parsing, kompetenceekstraktion, embeddings |

## 3. Bemandingsprocessen – 8 trin (det fulde workflow)

### Trin 1: Job Import (AUTOMATISK)
- **Trigger:** Web scraper (n8n) eller webhook
- **Output:** `projects.status = 'staging_imported'`
- **Spildtidsrisiko:** Lav (afhænger af scraper-kadence)

### Trin 2: AI Enrichment (AUTOMATISK)
- **Edge Function:** `ai-enrich-job`
- **Gør:** Udtrækker skills, work_mode, lokation, erfaringsniveau, oversætter til nordiske sprog
- **Output:** `enrichment_status = 'completed'`, `enrichment_confidence` (0-100)
- **Spildtidsrisiko:** Lav (sekunder)

### Trin 3: Auto-Approval Gate (AUTOMATISK)
- **Betingelser for automatisk godkendelse:**
  - `enrichment_confidence >= 75`
  - `has_contact_info = false` (ingen kontaktdata i beskrivelse)
  - `description_length >= 50`
  - `title_length >= 5`
  - Trusted source (hvidliste)
- **BESTÅET:** Status → `bidding_open` direkte (springer trin 4 over)
- **IKKE BESTÅET:** Forbliver i staging → manuelt trin 4
- **Kilde:** `20260210000000_add_auto_curation.sql`

### Trin 4: Manuel Curation (MANUELT) ★ FLASKEHALS
- **Hvem:** Admin på `/admin/curation`
- **Gør:** Godkender eller afviser staged opgaver
- **Blokeringsårsager:**
  - `low_confidence` – enrichment_confidence < 75%
  - `contact_info` – har kontaktoplysninger
  - `short_description` – beskrivelse < 50 tegn
- **Spildtidsrisiko:** HØJ – jobs venter i kø til admin handler
- **Kilde:** `useAdminStagingProjects.ts`, `AdminCurationPage.tsx`

### Trin 5: AI Matching (AUTOMATISK)
- **Trigger:** Cron-job for `bidding_open` projekter (seneste 7 dage)
- **Edge Function:** `ai-match`
- **6-stegs pipeline:**
  1. **PREFILTER** – Semantisk søgning (embeddings) + skill-overlap → ~50 kandidater
  2. **LOCATION** – Lokationskompatibilitet
  3. **GATE** – Domæne-baserede filtre
  4. **AI SCORING** – GPT-4o-mini evaluering (fallback: regelbaseret scoring)
  5. **RANKING** – Score >= 55, sorteret faldende, top 20
  6. **PERSIST** – Gem i `match_requests` + `match_results`
- **Output:** `match_requests` med `status = 'pending'`
- **Spildtidsrisiko:** Lav (cron-kadence)
- **Kilde:** `supabase/functions/ai-match/index.ts`

### Trin 6: Match Review (MANUELT) ★ FLASKEHALS
- **Hvem:** Admin på `/admin/matching` (MatchDashboard)
- **Gør:** Godkender eller afviser AI-genererede matches
- **Ved afvisning:** `rejection_reason` er PÅKRÆVET
- **Måles:** `review_duration_seconds`, `decision_timestamp`
- **Output:** `match_requests.status = 'approved'/'rejected'`, `match_analytics` record
- **Spildtidsrisiko:** HØJ – pending matches venter på admin
- **Kilde:** `MatchDashboard.tsx`

### Trin 7: Notifikation til Freelancer (MANUELT) ★ FLASKEHALS
- **Hvem:** Admin klikker "Trigger Match Notifications"
- **Trigger:** n8n webhook
- **Output:** Freelancer ser match på `/freelancer/opportunities`
- **Spildtidsrisiko:** MEDIUM – afhænger af hvornår admin klikker
- **Kilde:** `TriggerMatchNotificationsButton`

### Trin 8: Bud og Allokering (MANUELT)
- **Freelancer:** Afgiver bud via `BidSubmissionForm`
- **Admin/klient:** Vurderer og accepterer
- **Bud-status flow:** `submitted` → `pending_negotiation` → `pending_freelancer_response` → `presented_to_client` → `accepted`/`rejected`
- **Output:** `projects.status = 'matched'`
- **Spildtidsrisiko:** MEDIUM – forhandlingstid
- **Herefter (UDEN FOR SCOPE):** Kontrakt → signering → tidsregistrering → fakturering

### Opsummering

| Trin | Type | Flaskehals |
|---|---|---|
| 1. Job import | Auto | Nej |
| 2. AI enrichment | Auto | Nej |
| 3. Auto-approval gate | Auto | Nej |
| **4. Manuel curation** | **Manuelt** | **Ja – kø** |
| 5. AI matching | Auto | Nej |
| **6. Match review** | **Manuelt** | **Ja – kø** |
| **7. Notifikation** | **Manuelt** | **Ja – admin-afhængig** |
| 8. Bud/allokering | Manuelt | Delvist |

**Analysefokus:** Trin 4, 6 og 7 er de primære spildpunkter.

## 4. Datamodel – Nøgletabeller

### match_analytics (KPI-data)

| Felt | Type | Formål |
|---|---|---|
| `admin_id` | UUID | Hvilken admin der besluttede |
| `decision_timestamp` | TIMESTAMPTZ | Hvornår beslutningen blev taget |
| `review_duration_seconds` | INTEGER | Tid brugt på review |
| `outcome` | TEXT | `approved`, `rejected`, `hired` |
| `rejection_reason` | TEXT | Struktureret årsag |
| `rejection_reason_other` | TEXT | Fritekst for "other" |
| `feedback_score` | INTEGER | Admin-feedback |
| `match_request_id` | UUID | FK til match |
| `model_version` | TEXT | AI-model version |
| `critical_skills_check` | JSONB | Skills-evaluering |
| `weights_used` | JSONB | Scoringsvægte |

### Rejection Reasons (strukturerede værdier)

| Kode | Label |
|---|---|
| `missing_domain_experience` | Manglende domæneerfaring |
| `rate_too_high` | For høj timepris |
| `profile_quality` | Profilkvalitet |
| `location_mismatch` | Lokation passer ikke |
| `skill_level_too_low` | Kompetenceniveau for lavt |
| `skill_outdated` | Forældede kompetencer |
| `other` | Andet (fritekst) |

### bias_detection_logs

| Felt | Formål |
|---|---|
| `detection_date` | Hvornår analysen kørte |
| `sample_size` | Stikprøvestørrelse |
| `metrics` (JSONB) | Fordelinger: lokation, senioritet, kategori |
| `statistical_tests` (JSONB) | Chi-square tests pr. dimension |
| `alerts` (JSONB) | Fx `approval_rate_disparity` |
| `is_compliant` (BOOLEAN) | EU AI Act compliance |

## 5. KPI-dashboard (implementerede metrikker)

| KPI | Formel | Kilde |
|---|---|---|
| **Precision@5** | Andel af top-5 matches (efter score) der godkendes | `MatchKPICards.tsx:64-96` |
| **Override Rate** | Andel af matches med score ≥ 80 der afvises af admin | `MatchKPICards.tsx:98-106` |
| **MRR** | Mean Reciprocal Rank – gns. reciprok rang for første godkendte | `MatchKPICards.tsx:108-131` |
| **Gns. beslutningstid** | `decision_timestamp - match_requests.created_at` (ekskl. >7 dage) | `MatchKPICards.tsx:132-151` |
| **Approval Rate** | Andel matches med outcome = approved/hired | `MatchKPICards.tsx:154-160` |
| **Top rejection reasons** | Frekvensfordeling af rejection_reason | `MatchKPICards.tsx:163-210` |

**Tidsperiode:** Seneste 30 dage.

## 6. Spildtidsindikatorer (operationalisering)

| Indikator | Definition | Datakilde | Underspørgsmål |
|---|---|---|---|
| **Time-to-match** | Tid fra projekt oprettet til status = matched | `projects.created_at` → status-ændring | 1, 2 |
| **Tid i curation-kø** | Tid i staging_imported/draft_admin | `projects.created_at` → godkendelse | 1 |
| **Match-til-beslutning** | Tid fra match genereret til admin beslutter | `match_requests.created_at` → `decision_timestamp` | 1, 2 |
| **Review-varighed** | Tid admin faktisk bruger på review | `review_duration_seconds` | 1 |
| **Rejection rate** | Andel AI-matches afvist | outcome = rejected / total | 2, 3 |
| **Override rate** | Andel høj-score matches afvist | Høj-score rejected / total høj-score | 3 |
| **Auto-approval rate** | Andel opgaver der springer curation over | auto_approved = true / total | 1, 2 |
| **Precision@5** | Andel top-5 matches godkendt | Se KPI-formel | 2 |

## 7. Administrationens flaskehalse (Action Items)

RPC: `get_action_items_summary()` returnerer:

| Metrik | Kilde | Lean-kategori |
|---|---|---|
| `pending_verifications` | verification_requests, status=pending | Ventetid |
| `urgent_tickets` | support_tickets, priority=urgent | Kritisk arbejde |
| `waiting_on_admin_tickets` | support_tickets, status=waiting_on_admin | Admin-flaskehals |
| `stale_contracts` | contracts, pending_signature > 48h | Ventetid |
| `pending_applications` | applications, status=pending | Applikationskø |

## 8. Informanter

| Rolle | Interviewfokus | Kobling til USP |
|---|---|---|
| **Direktør(er)** | Strategi, organisatoriske barrierer, fremtidsvision | USP 3, 4 |
| **Partnere** | Daglig brug, oplevede flaskehalse, tillid til AI | USP 1, 2, 3 |
| **Projektledere** | Beslutningspraksis, override-adfærd, mangler | USP 1, 2, 3 |
| **Konsulenter** | Matchoplevelse, hastighed, kommunikation | USP 2, 3 |

---

**Se også (kontekst på tværs):**
- `AKADEMISK_RAMME.md` (videnskabsteori, metode, teori)
- `KVALITET_OG_SKRIVEGUIDE.md` (akademisk skrivning, kapitelstruktur)
- `UDDANNELSE_OG_PENSUM.md` (kildeprioritering Tier 1/2, pensumregler)
- `docs/PENSUM_VIDENSBASE.md` (dyb epistemologi, metodologi, klassikere)
- `Undervisningsmateriale og guides/README.md` (supplerende materiale)
