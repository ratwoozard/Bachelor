# Projektkontekst – SoluTalent bachelor-case

Brug denne fil som kontekst til AI når I genererer indhold eller kode til hjemmesiden. Alle fakta skal være konsistente med case og rapport.

---

## Virksomhed og platform

- **Casevirksomhed:** Support Solutions ApS (SS) – dansk IT-konsulenthus, SMV, marked Skandinavien (primært Danmark). Kerneydelse: allokering af freelance IT-konsulenter til projektopgaver. Konkurrenceparameter: hastighed og præcision i matching.
- **Platform:** SoluTalent – B2B talentmarkedsplads. Stack: React 19, TypeScript, Vite, Supabase, OpenAI. Forbinder virksomheder med vettede freelancekonsulenter via AI-matching, budgivning, kontrakthåndtering, tidsregistrering og fakturering. *Projektets scope: kun fra staging_imported til matched (kontrakt/tidsregistrering/fakturering er uden for scope).*

---

## Problemformulering (PF)

> **Hvordan påvirker AI-baseret automatisering spildtid i bemandingsprocessen fra opgaveidentifikation til konsulentallokering hos Support Solutions ApS – og i hvilket omfang kan de resterende manuelle procestrin reduceres eller yderligere automatiseres?**

**Underspørgsmål (USP):**
1. **As-is:** Hvor opstår spildtid i as-is-processen, og hvad er årsagerne?
2. **Struktur/arbejdsdeling:** Hvilke procestrin automatiserer SoluTalent, og hvilke forbliver manuelle – og hvorfor?
3. **Effekt og trade-offs:** Hvilke indikatorer ses i spildtidsmål (beslutningstid, time-to-match, override rate, rejection reasons) – og hvilke trade-offs opstår?
4. **Forudsætninger:** Hvilke TOE-forudsætninger kræves for at reducere de resterende manuelle trin?

---

## Afgrænsning

- **Proces:** Kun *staging_imported* → *matched*. Jobsourcing, kontrakt, løn/fakturering = uden for scope.
- **Case:** Kun Support Solutions ApS og SoluTalent. Analytisk generaliserbarhed (Holm, Kuada), ikke statistisk.
- **Teknisk:** Forretnings- og organisationsperspektiv; ML-udvikling er ikke genstand for analyse.

---

## Bemandingsprocessen – 8 trin (workflow)

| Trin | Navn | Type | Flaskehals |
|------|-----|------|------------|
| 1 | Job Import | Auto | Nej |
| 2 | AI Enrichment | Auto | Nej |
| 3 | Auto-Approval Gate | Auto | Nej |
| **4** | **Manuel Curation** | **Manuelt** | **Ja – kø** |
| 5 | AI Matching | Auto | Nej |
| **6** | **Match Review** | **Manuelt** | **Ja – kø** |
| **7** | **Notifikation til Freelancer** | **Manuelt** | **Ja – admin-afhængig** |
| 8 | Bud og Allokering | Manuelt | Delvist |

**Primære spildpunkter:** Trin 4, 6 og 7.

---

## KPI-navne og definitioner (30-dages periode)

| KPI | Kort forklaring |
|-----|------------------|
| **Precision@5** | Andel af top-5 matches (efter score) der godkendes |
| **Override Rate** | Andel af matches med score ≥ 80 der afvises af admin |
| **MRR** | Mean Reciprocal Rank – gns. reciprok rang for første godkendte |
| **Gns. beslutningstid** | Tid fra match oprettet til admin beslutter (ekskl. >7 dage) |
| **Approval Rate** | Andel matches med outcome = approved/hired |
| **Top rejection reasons** | Frekvensfordeling af rejection_reason (fx missing_domain_experience, rate_too_high, profile_quality, location_mismatch, skill_level_too_low, skill_outdated, other) |

---

## Nøgleord (SEO / meta)

AI-automatisering, spildtid, Lean, beslutningsstøttesystemer, human-in-the-loop, TOE-framework, bemandingsproces, pragmatisme, SoluTalent, Support Solutions, KEA, bachelor

---

## Forfattere og formalia

- **Forfattere:** Benjamin & Luka
- **Uddannelse:** Bachelor i Økonomi & IT
- **Institution:** KEA – Københavns Erhvervsakademi
- **Dato:** Februar 2026

---

*Kilde: CASE_KNOWLEDGE.md, Bachelor_Synopsis.md, report/REPORT.md*
