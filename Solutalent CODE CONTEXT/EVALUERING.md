# Evalueringsdesign (to niveauer)

> **Formål**: Skitsere en evalueringsstrategi for SoluTalent med to niveauer:
> (1) artefakt-evaluering baseret på kode og dokumentation, og
> (2) brugs-/effekt-evaluering baseret på logging og evt. brugertest.

---

## Niveau 1 — Artefakt-evaluering

Evalueringen tager udgangspunkt i DSR og statisk analyse af artefaktet
[@Hevner2004; @Venable2016]. Fokus ligger på **hvad der er implementeret**.

### 1.1 Kriterier

| Kriterie | Operationalisering | Evidens |
|---|---|---|
| **Funktionalitet** | Kerneflows findes i kode og dokumentation (matching, bidding, kontrakt, fakturering) | `docs/flows/`, `docs/MODULE_INTERACTIONS.md`, edge functions |
| **Sikkerhed** | RLS, adgangskontrol, GDPR-tiltag er implementeret | `docs/SECURITY_AUDIT_DEC2025.md`, migrations |
| **Vedligeholdbarhed** | Arkitekturvalg og kodeorganisering dokumenteret | `docs/ARCHITECTURE_DECISIONS.md`, `src/` struktur |
| **Traceability** | Claim → evidence muligt for centrale påstande | `docs/bachelor/EVIDENCE_LOG.md` |

### 1.2 Metode

- **Statisk kodeanalyse**: gennemgang af migrations, edge functions og flows.
- **Dokumentanalyse**: ADR’er, system-assessment, sikkerhedsaudit.
- **Traceability**: alle centrale påstande linkes til konkrete filstier.

> **TODO (primær empiri)**: Hvis I har adgang til drift/production, kan artefakt-
> evalueringen udvides med performance-målinger og fejllogs.

---

## Niveau 2 — Brugs-/effekt-evaluering (valgfrit)

Hvis der etableres logging og/eller brugertest, kan vi måle **effekt** og
**brugskvalitet** af AI-matchning og admin-processer. Dette niveau er kun muligt,
hvis vi får adgang til drift/brugere og kan indsamle data etisk forsvarligt.

### 2.1 Centrale målinger (eksempler)

| Måling | Definition | Datakilder | Status |
|---|---|---|---|
| **Time-to-match** | Tid fra job/project oprettelse → match godkendt | events + timestamps | ³ |
| **High-score rate** | Andel af matches over valgt score-threshold | match_results.overall_score | ✅ |
| **Bid→Contract conversion** | Andel af accepterede bids der ender i kontrakt | bids + contracts | ✅ |
| **Admin override rate** | Andel af AI-højscore kandidater der fravælges | AI-score + admin beslutning | ³ |
| **Kontrakt→Faktura lead time** | Tid fra kontrakt aktiv → E-conomic sync | contracts + time_entries + economic_sync_log | ³ |

> **Legend**: ✅ = Kan måles med eksisterende data · ³ = Kræver logging-implementering
>
> **TODO (primær empiri)**: Konkrete målinger kræver logdata og samtykke. Se `METRICS_FEASIBILITY.md` for gap-analyse.

### 2.2 Bruger-/effektevaluering (mulige metoder)

- **A/B-test** (AI-support vs ingen AI-support)  
- **Usability-test** med admin-brugere  
- **Loganalyse** af beslutningsforløb  

> **TODO (primær empiri)**: Specificér metodevalg ud fra adgang til brugere/data.

---

## Samlet vurdering

Artefakt-evalueringen kan gennemføres udelukkende på kode og dokumentation.
Brugs-/effekt-evalueringen kræver etablering af logging og/eller brugertest.
Den konkrete måleplan findes i `docs/bachelor/LOGGING_SPEC.md`.
