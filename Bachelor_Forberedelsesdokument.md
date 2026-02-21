# Forberedelsesdokument – Bachelor Økonomi & IT
## AI-automatiseret matching og spildtid i bemandingsprocessen hos Support Solutions ApS

> **Formål med dette dokument:** At give jer et samlet overblik over alt I har, alt I skal, og alt I skal skrive – så I kan gå direkte fra dette dokument til at skrive synopsen og derefter selve opgaven.

---

# DEL 1: PROJEKTETS FUNDAMENT

## 1.1 Problemformulering (endelig version)

> **Hvordan påvirker AI-automatiseret matching spildtid i bemandingsprocessen fra opgaveidentifikation til konsulentallokering hos Support Solutions ApS – og i hvilket omfang kan de resterende manuelle procestrin reduceres eller elimineres gennem yderligere automatisering?**

### XYZ-struktur

| | Indhold |
|---|---|
| **X – Hvad** | Spildtid i bemandingsprocessen (curation → matching → allokering) og AI-matchingens påvirkning heraf |
| **Y – Hvordan** | Pragmatisk casestudie: artefaktanalyse af SoluTalent + semistrukturerede interviews med SS-ledelse + platformdata |
| **Z – Hvorfor** | For at skabe forståelse for, hvordan et mindre IT-konsulenthus konkret reducerer processpild via AI – og hvad der kræves organisatorisk |

### Underspørgsmål

| # | Underspørgsmål | Label | Primær empiri | Primær teori |
|---|---|---|---|---|
| 1 | Hvilke manuelle procestrin i bemandingsworkflowet – fra jobcuration over matchreview til konsulentnotifikation – udgør de primære flaskehalse, og hvad er årsagerne? | **As-is / Spildtid** | Artefakt (workflow-states) + interviews | Lean waste + Davenport |
| 2 | I hvilket omfang adresserer SoluTalents automatiserede matchingpipeline de identificerede spildpunkter, målt på indikatorer som time-to-match, beslutningshastighed og matchpræcision? | **AI-matchingens effekt** | Artefakt (KPI-dashboard, match_analytics) + interviews | DSS + Davenport |
| 3 | Hvilke procestrin kræver fortsat menneskelig vurdering, og hvad er de faglige, organisatoriske og kvalitetsmæssige begrundelser herfor? | **Grænsen for automatisering** | Interviews + artefakt (manuelle trin) | DSS (menneske-i-loopet) |
| 4 | Hvilke organisatoriske og teknologiske forudsætninger skal være til stede for at realisere yderligere automatisering af de resterende manuelle trin? | **Forudsætninger** | Interviews + artefakt (auto-approval gates, tærskelværdier) | TOE-frameworket |

### Afgrænsning

- **Procesfokus:** Fra opgave modtaget (`staging_imported`) til konsulent allokeret (`matched`). Hvad der sker før (jobsourcing/scraping) og efter (kontraktsignering, tidsregistrering, fakturering) behandles ikke.
- **Platform:** SoluTalent som eneste artefakt. Andre rekrutteringsplatforme inddrages ikke.
- **Teknisk dybde:** Matchingpipelinen beskrives funktionelt (hvad gør hvert trin for processen), ikke teknisk (GPT-promptdesign, embeddingmodeller, Supabase-arkitektur).
- **Etik/data:** Algoritmisk bias og GDPR diskuteres kontekstuelt med inddragelse af `bias_detection_logs`. Fuld bias-audit ligger uden for scope.
- **Generaliserbarhed:** Single-case med analytisk generaliserbarhed (Yin, 2018). Ikke statistisk.

---

## 1.2 Indledning – Den omvendte trekant (5 lag)

Brug dette som skabelon når I skriver indledningen. Hvert lag besvarer det foregåendes "og hvad så?":

### Lag 1 – Makro: Branchen
Konkurrencen om kvalificerede IT-konsulenter er intensiveret i Skandinavien, og virksomheders evne til hurtigt at allokere den rette konsulent til den rette opgave er blevet en afgørende konkurrenceparameter. AI og automatisering anvendes i stigende grad til at accelerere denne proces (McKinsey, 2023).

*→ Læserens spørgsmål: "Men hvad med konsulenthuse specifikt?"*

### Lag 2 – Meso: Matchproblemet
For IT-konsulenthuse er selve matchingen – koblingen mellem en konkret projektopgave og en tilgængelig konsulent med de rette kompetencer – det mest tidskritiske led. Et langsomt eller upræcist match koster direkte: konsulenter står uden opgaver (tabt omsætning), kunder venter (tabt kundetilfredshed), og projektledere bruger tid på manuelt at gennemsøge kandidater (processpild).

*→ "Har nogen gjort noget ved det?"*

### Lag 3 – Mikro: SS og SoluTalent
Support Solutions ApS har adresseret denne udfordring ved at udvikle SoluTalent – en AI-drevet talentplatform med en automatiseret seksstegs matchingpipeline, der scorer og rangerer konsulenter mod opgaver. Platformen har automatiseret flere led i processen, men flowet indeholder fortsat manuelle trin: administrativ curation af importerede opgaver, menneskelig godkendelse af AI-genererede matches og manuel udløsning af notifikationer til konsulenter.

*→ "Virker det? Hvor sidder problemet stadig?"*

### Lag 4 – Gabet
Selvom platformen er i drift, mangler der en systematisk analyse af, *hvor* i processen spildtiden reelt opstår, i *hvilket omfang* AI-matchingen reducerer den, og *hvad der skal til* for at automatisere de resterende manuelle flaskehalse. Uden denne analyse risikerer virksomheden at optimere de forkerte trin.

*→ "Hvad vil I så undersøge?"*

### Lag 5 – Problemformuleringen
*(Indsæt problemformulering + underspørgsmål her)*

---

# DEL 2: DET I HAR AT ARBEJDE MED (EMPIRI-OVERBLIK)

## 2.1 Bemandingsprocessen – det faktiske workflow

Trukket direkte fra kodebasen. Brug dette som grundlag for jeres as-is proceskortlægning:

```
┌─────────────────────────────────────────────────────────────────────┐
│  TRIN 1: JOB IMPORT                                     AUTOMATISK │
│  Scraper/webhook → projects.status = 'staging_imported'            │
│  Kilde: jobs-webhook/index.ts                                      │
└──────────────────────────────┬──────────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  TRIN 2: AI ENRICHMENT                                  AUTOMATISK │
│  ai-enrich-job → skills, work_mode, location, oversættelse        │
│  enrichment_status: pending → completed                            │
│  Outputter: enrichment_confidence (0-100)                          │
└──────────────────────────────┬──────────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  TRIN 3: AUTO-APPROVAL GATE                             AUTOMATISK │
│  Betingelser:                                                      │
│    • enrichment_confidence >= 75                                   │
│    • has_contact_info = false                                      │
│    • description_length >= 50                                      │
│    • title_length >= 5                                             │
│    • Trusted source                                                │
│  BESTÅET → status = 'bidding_open' (springer trin 4 over)         │
│  IKKE BESTÅET → forbliver i staging (→ trin 4)                    │
└────────────┬─────────────────────────────┬──────────────────────────┘
     BESTÅET ▼                    IKKE BESTÅET ▼
┌─────────────────┐    ┌──────────────────────────────────────────────┐
│ Direkte til      │    │  TRIN 4: MANUEL CURATION            MANUELT │
│ trin 5           │    │  Admin godkender/afviser på /admin/curation  │
│                  │    │  ★ FLASKEHALS: Jobs venter i kø             │
│                  │    │  Blokeringsårsager:                          │
│                  │    │    • low_confidence (<75%)                   │
│                  │    │    • contact_info (har kontaktdata)          │
│                  │    │    • short_description (<50 tegn)            │
│                  │    │  → status = 'bidding_open' eller             │
│                  │    │    'rejected_admin'                          │
└────────┬────────┘    └──────────────────────┬───────────────────────┘
         ▼                                     ▼
┌─────────────────────────────────────────────────────────────────────┐
│  TRIN 5: AI MATCHING                                    AUTOMATISK │
│  Trigger: Cron-job for bidding_open projekter (seneste 7 dage)    │
│  Pipeline (6 stages):                                              │
│    1. PREFILTER – Semantisk søgning + skill-overlap → ~50 kand.   │
│    2. LOCATION – Lokationskompatibilitet                           │
│    3. GATE – Domæne-baserede filtre                                │
│    4. AI SCORING – GPT-4o-mini evaluering (fallback: regelbaseret)│
│    5. RANKING – Score >= 55, top 20                                │
│    6. PERSIST – Gem i match_requests + match_results               │
│  Output: match_requests med status = 'pending'                     │
└──────────────────────────────┬──────────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  TRIN 6: MATCH REVIEW                                      MANUELT │
│  Admin godkender/afviser matches på /admin/matching                │
│  ★ FLASKEHALS: Pending matches venter på admin                    │
│  Ved afvisning: rejection_reason PÅKRÆVET                          │
│  Måles: review_duration_seconds, decision_timestamp                │
│  → match_requests.status = 'approved' / 'rejected'                │
│  → match_analytics record oprettet                                 │
└──────────────────────────────┬──────────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  TRIN 7: NOTIFIKATION TIL FREELANCER                       MANUELT │
│  Admin klikker "Trigger Match Notifications" → n8n webhook         │
│  ★ FLASKEHALS: Afhænger af hvornår admin klikker                  │
│  Freelancer ser match på /freelancer/opportunities                 │
└──────────────────────────────┬──────────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  TRIN 8: BUD OG ALLOKERING                                 MANUELT │
│  Freelancer afgiver bud → admin/klient vurderer                    │
│  → status = 'matched'                                              │
│  (Herfra: kontraktsignering → in_progress → UDEN FOR SCOPE)       │
└─────────────────────────────────────────────────────────────────────┘
```

### Opsummering: Manuelle vs. automatiserede trin

| Trin | Type | Spildtidsrisiko |
|---|---|---|
| 1. Job import | Automatisk | Lav (scraper-kadence) |
| 2. AI enrichment | Automatisk | Lav (sekunder) |
| 3. Auto-approval gate | Automatisk | Ingen (instant) |
| **4. Manuel curation** | **Manuelt** | **Høj – jobs venter i kø** |
| 5. AI matching | Automatisk | Lav (cron-kadence) |
| **6. Match review** | **Manuelt** | **Høj – pending matches venter** |
| **7. Notifikation** | **Manuelt** | **Medium – afhænger af admin** |
| **8. Bud/allokering** | **Manuelt** | **Medium – forhandlingstid** |

**Konklusion for jeres analyse:** 4 ud af 8 trin er manuelle. Tre af dem (trin 4, 6, 7) er jeres primære analyseobjekter for spildtid.

---

## 2.2 Evidence Map – Hvad I kan trække fra platformen

### A. KPI'er (allerede implementeret i dashboardet)

| KPI | Formel | Kilde i kodebasen | Akademisk anvendelse |
|---|---|---|---|
| **Precision@5** | Andel af top-5 matches der godkendes | `MatchKPICards.tsx:64-96` | Matchkvalitet – svarer på USP 2 |
| **Override Rate** | Andel af høj-score matches (≥80) der afvises | `MatchKPICards.tsx:98-106` | Tillid til AI – svarer på USP 3 |
| **MRR (Mean Reciprocal Rank)** | Gennemsnitlig reciprok rang for første godkendte match | `MatchKPICards.tsx:108-131` | Rangerings-præcision – svarer på USP 2 |
| **Gns. beslutningstid** | `decision_timestamp - match_requests.created_at` | `MatchKPICards.tsx:132-151` | Direkte spildtidsmål – svarer på USP 1+2 |
| **Approval Rate** | Andel matches godkendt (approved/hired) | `MatchKPICards.tsx:154-160` | Overall matchkvalitet – svarer på USP 2 |

### B. Rejection Reasons (struktureret kvalitativ data)

Værdier fra `MatchDashboard.tsx:37-45`:

| Kode | Label | Lean-waste-kategori |
|---|---|---|
| `missing_domain_experience` | Manglende domæneerfaring | Fejl/mismatch |
| `rate_too_high` | For høj timepris | Overprocessering (forkert kandidat) |
| `profile_quality` | Profilkvalitet | Fejl/rework |
| `location_mismatch` | Lokation passer ikke | Fejl/mismatch |
| `skill_level_too_low` | Kompetenceniveau for lavt | Fejl/mismatch |
| `skill_outdated` | Forældede kompetencer | Fejl/mismatch |
| `other` | Andet (fritekst) | Varierer |

**Sådan bruger I det:** Lav en frekvensfordeling over rejection reasons. Koblet til Lean-waste-kategorier har I en *empirisk funderet* spildtidsanalyse.

### C. Bias Detection

Tabel: `bias_detection_logs` (migration: `20260107110000_phase4_enhanced_analytics.sql:172-218`)

| Felt | Hvad det giver jer |
|---|---|
| `metrics` (JSONB) | Fordelinger på lokation, senioritet, kategori |
| `statistical_tests` (JSONB) | Chi-square tests pr. dimension |
| `alerts` (JSONB) | Fx `approval_rate_disparity` |
| `is_compliant` (BOOLEAN) | EU AI Act compliance-flag |

**Akademisk:** Giver jer mulighed for en empirisk (ikke kun teoretisk) etik-diskussion.

### D. Tidsstempler til spildtidsberegning

| Hvad I kan måle | Felter | Beregning |
|---|---|---|
| **Tid i staging-kø** | `projects.created_at` → tidspunkt for godkendelse | Tid i `staging_imported` |
| **Match-til-beslutning** | `match_requests.created_at` → `match_analytics.decision_timestamp` | Ventetid i match-kø |
| **Review-varighed** | `match_analytics.review_duration_seconds` | Faktisk tid brugt på review |
| **Auto-approval rate** | `projects.auto_approved` flag | Andel der springer curation over |

---

## 2.3 Interview-empiri: Hvem I har adgang til

| Informant | Rolle | Fokus i interview | Kobling til USP |
|---|---|---|---|
| **Direktør(er)** | Strategisk beslutning | Forretningsmæssig motivation, organisatoriske barrierer, fremtidsvision | USP 3, 4 |
| **Partnere** | Operationel ledelse | Daglig brug af platformen, oplevede flaskehalse, tillid til AI-matches | USP 1, 2, 3 |
| **Projektledere** | Matchbeslutning | Konkret beslutningspraksis, hvornår de overruler AI, hvad de mangler | USP 1, 2, 3 |
| **(evt.) Konsulenter** | Modtager af match | Oplevelse af matchkvalitet, hastighed, kommunikation | USP 2, 3 |

### Interview-temaer (til interviewguide)

**Tema 1: Nuværende praksis og spildtid (USP 1)**
- "Beskriv processen fra I modtager en opgave til en konsulent er allokeret."
- "Hvor oplever du, at ting venter eller tager unødvendigt lang tid?"
- "Hvad sker der når et match ikke passer – hvor tit sker det?"

**Tema 2: AI-matchingens effekt (USP 2)**
- "Hvordan har AI-matchingen ændret den daglige proces?"
- "Hvor tit bruger du AI-forslagene direkte vs. finder selv?"
- "Kan du give et eksempel på et godt match og et dårligt match fra systemet?"

**Tema 3: Grænsen for automatisering (USP 3)**
- "Hvilke beslutninger ville du *ikke* overlade til AI? Hvorfor?"
- "Hvad kan du vurdere, som systemet ikke kan fange?"
- "Hvad mister man, hvis man automatiserer match-godkendelsen fuldt?"

**Tema 4: Forudsætninger (USP 4)**
- "Hvad mangler der teknologisk for at automatisere mere?"
- "Hvad er den største organisatoriske barriere?"
- "Hvad skulle ændres i kompetencer eller kultur for at det virker?"

---

# DEL 3: AKADEMISK RAMME

## 3.1 Videnskabsteori: Pragmatisme

| Dimension | Position | Konsekvens for jeres projekt |
|---|---|---|
| **Ontologi** | Virkeligheden er flertydig; vi fokuserer på det praktisk relevante | I behøver ikke tage stilling til "hvad er virkelighed" – I fokuserer på "hvad virker" |
| **Epistemologi** | Viden vurderes på anvendelighed | Legitimerer at I kombinerer kode-analyse med interviews |
| **Slutningsform** | Abduktiv (vekslen teori ↔ empiri) | I starter med observeret praksis, bringer teori ind, vender tilbage med nuancerede fund |
| **Metode** | Metodepluralisme | I bruger det, der bedst besvarer spørgsmålet – ikke bundet af ren kvali/kvanti |

**Standardformulering I kan bruge:**
> "Projektet anlægger en pragmatisk videnskabsteoretisk position (Saunders et al., 2019), idet problemformuleringen er handlingsorienteret og empirien har en naturlig dualitet: menneskers oplevelser (interviews) og et konkret digitalt artefakt (SoluTalent). Pragmatismen legitimerer metodepluralisme og abduktiv slutningsform, hvor vi veksler mellem teori og empiri."

## 3.2 Teoriramme – Fire teorier, fire roller

### Teori 1: Lean Waste (Womack & Jones, 2003)

**Rolle:** Kategoriserer spildtid i processen (USP 1).

De 7 spildtyper tilpasset vidensarbejde:

| Lean-kategori | Betydning i jeres kontekst | Eksempel fra SoluTalent |
|---|---|---|
| **Ventetid (Waiting)** | Opgaver/matches ligger stille i kø | Jobs i staging-kø; pending matches |
| **Overprocessering** | Mere arbejde end nødvendigt | Manuel curation af opgaver der kunne auto-godkendes |
| **Fejl/Rework** | Forkerte matches der skal laves om | Rejection reasons: mismatch, skill_level_too_low |
| **Uudnyttet talent** | Medarbejdere bruges til lavværdi-opgaver | Admin bruger tid på godkendelser AI kunne klare |
| **Transport** | Unødvendig flytning af information | Manuel videreformidling af matchresultater |
| **Overproduktion** | Producerer mere end efterspurgt | AI genererer matches der aldrig reviewes |
| **Lager (Inventory)** | Ophobning af ubehandlede enheder | Akkumulering i staging- og match-kø |

### Teori 2: Procesoptimering – As-is/To-be (Davenport, 1993)

**Rolle:** Strukturerer analysen af nuværende vs. AI-understøttet workflow (USP 1 + 2).

**Sådan bruger I den:**
- As-is = processen *uden* SoluTalents automatisering (beskrevet via interviews om "hvordan det var før")
- To-be = processen *med* SoluTalent (beskrevet via artefaktanalyse)
- Gap-analyse: Hvor er der stadig manuelt spild i to-be?

### Teori 3: TOE-frameworket (Tornatzky & Fleischer, 1990)

**Rolle:** Strukturerer forudsætningsanalysen (USP 4).

| Dimension | Spørgsmål i jeres kontekst |
|---|---|
| **Technology** | Er AI-matchingen præcis nok? Er datakvaliteten tilstrækkelig? Hvad mangler teknisk? |
| **Organization** | Har teamet kompetencerne? Er der ledelsesopbakning? Modstand mod forandring? |
| **Environment** | Markedspres? Kundekrav? Regulering (GDPR, EU AI Act)? |

### Teori 4: Decision Support Systems (Keen & Scott Morton, 1978; Turban et al., 2014)

**Rolle:** Ramme for at forstå AI-matching som *beslutningsstøtte*, ikke beslutningserstatning (USP 2 + 3).

**Nøglebegreb:** Menneske-i-loopet (human-in-the-loop). AI genererer forslag; mennesket godkender. Jeres match review-trin (trin 6) er præcis dette mønster. DSS-teorien giver jer sprog til at diskutere *hvorfor* det er designet sådan, og *hvornår* det giver mening at fjerne mennesket.

---

## 3.3 Metodedesign

### Forskningsdesign
Eksplorativt **single-case studie** (Yin, 2018) med **indlejret analyseenhed** (embedded unit): SoluTalent som teknologisk artefakt inden for Support Solutions ApS.

### Tre empiriben

| Ben | Hvad | Hvordan | Output |
|---|---|---|---|
| **1. Semistrukturerede interviews** (4-6 stk.) | Direktører, partnere, projektledere | Interviewguide baseret på temaer ovenfor | Transskriptioner → tematisk kodning |
| **2. Artefaktanalyse** | SoluTalent: workflow-states, AI-pipeline, KPI-dashboard, datamodeller | Systematisk gennemgang af kode og funktionalitet | Proceskort, funktionel mapping |
| **3. Platformdata** (anonymiseret) | match_analytics, rejection_reasons, KPI'er, auto-approval rates | Aggregerede tal, frekvensfordelinger | Kvantitative indikatorer |

### Analysestrategi

| Skridt | Metode | Input | Output |
|---|---|---|---|
| **1** | Proceskortlægning (as-is/to-be) | Artefakt + interviews | Procesdiagram med manuelle/auto trin markeret |
| **2** | Tematisk kodning (Braun & Clarke) | Interviewdata | Temaer kategoriseret efter Lean-waste-typer |
| **3** | KPI-analyse | Platformdata | Aggregerede indikatorer (gns. beslutningstid, rejection-fordeling, override rate) |
| **4** | Krydsanalyse | Alle tre kilder | Bekræfter/nuancerer fund: "Ledelsen oplever X; data viser Y; koden muliggør Z" |
| **5** | TOE-analyse | Interview-temaer om barrierer | Struktureret i Technology/Organization/Environment |

### Triangulering: Jeres stærkeste kort

```
INTERVIEW: "Curation-køen er en flaskehals, vi bruger for lang tid"
     ↕  bekræftes af
ARTEFAKT: staging_imported → draft_admin kræver manuel handling
     ↕  kvantificeres af
PLATFORMDATA: gennemsnitlig tid i staging = X timer/dage
     ↕  kontekstualiseres af
OBSERVATION: "Under vores praktik så vi jobs ligge i kø i dagevis"
```

Fire uafhængige kilder der peger i samme retning = meget stærkt fund.
Fire kilder der *modsiger* hinanden = diskussionsmateriale (endnu bedre for karakteren).

### Validitet og bias

| Kvalitetskriterium | Håndtering |
|---|---|
| **Triangulering** | Fire empirikilder krydstjekker hvert fund |
| **Informant-validering** | Procesdiagrammer og nøglecitater verificeres af informanter |
| **Bias-refleksion** | I er tidligere praktikanter OG udviklere → eksplicit positioneringsdiskussion i metodeafsnit |
| **Kædebevis** | Problemformulering → operationalisering → interviewguide → data → fund → konklusion |
| **Transparent interviewguide** | Vedlægges som bilag |

**Standardformulering til bias-afsnittet:**
> "Begge forfattere har gennemført praktikophold hos Support Solutions ApS og har bidraget til udviklingen af SoluTalent. Denne dobbeltrolle giver privilegeret adgang til empiri, men indebærer risiko for bekræftelsesbias. Vi håndterer dette ved (1) at lade artefaktanalysen fungere som uafhængig datakilde der ikke afhænger af subjektiv fortolkning, (2) at inkludere informanter vi ikke arbejdede direkte med, (3) aktivt at søge efter fund der *modsiger* vores forventninger, og (4) at anvende data der viser AI-systemets begrænsninger (rejection reasons, override rate) på lige fod med dets styrker."

---

# DEL 4: OPERATIONALISERING

## 4.1 Spildtidsindikatorer – hvad I måler og hvordan

| Indikator | Definition | Datakilde | Kodebase-reference | USP |
|---|---|---|---|---|
| **Time-to-match** | Tid fra projekt oprettet til status = 'matched' | `projects.created_at` → status-ændring | `types.ts` (projects table) | 1, 2 |
| **Tid i curation-kø** | Tid i `staging_imported` / `draft_admin` før godkendelse | `projects.created_at` → approve-timestamp | `useAdminStagingProjects.ts` | 1 |
| **Match-til-beslutning** | Tid fra match genereret til admin beslutter | `match_requests.created_at` → `match_analytics.decision_timestamp` | `MatchKPICards.tsx:132-151` | 1, 2 |
| **Review-varighed** | Tid admin faktisk bruger på review | `match_analytics.review_duration_seconds` | `types.ts:2022` | 1 |
| **Rejection rate** | Andel AI-matches afvist af admin | `match_analytics.outcome = 'rejected'` | `MatchKPICards.tsx:154-160` | 2, 3 |
| **Override rate** | Andel høj-score matches (≥80) afvist | Høj-score rejected / total høj-score | `MatchKPICards.tsx:98-106` | 3 |
| **Auto-approval rate** | Andel opgaver der springer curation over | `projects.auto_approved = true` | `20260210000000_add_auto_curation.sql` | 1, 2 |
| **Rejection reasons** | Strukturerede årsager til afvisning | `match_analytics.rejection_reason` | `MatchDashboard.tsx:37-45` | 2, 3 |
| **Precision@5** | Andel af top-5 matches godkendt | approved-i-top-5 / total-top-5 | `MatchKPICards.tsx:64-96` | 2 |

---

# DEL 5: DISPOSITION OG SIDEBUDGET

| Kapitel | Indhold | Sider | Nøgle-leverance |
|---|---|---|---|
| **1. Indledning** | Omvendt trekant (5 lag), PF, underspørgsmål, afgrænsning | 5-7 | Klar tragtstruktur der ender i PF |
| **2. Metode** | Pragmatisme, casestudie, empirikilder, operationalisering, validitet, bias, etik | 8-10 | Overbevisende metodevalg + ærlig bias-refleksion |
| **3. Teori** | Lean waste, Davenport, TOE, DSS – eksplicit koblet til USP'er | 8-10 | Teori som analyseredskab, ikke pensum-genfortælling |
| **4. Empiri og analyse** | | | |
| 4.1 As-is: Spildtid | Proceskortlægning + interviewfund + platformdata om køer | 8-10 | Procesdiagram + Lean-kategorisering |
| 4.2 AI-matchingens effekt | Artefaktanalyse af pipeline + KPI-data + interviews om ændret praksis | 8-10 | Pipeline-mapping + KPI-tabel + informantvurderinger |
| 4.3 Grænsen for automatisering | Interview om menneske-vs-maskine + override/rejection data | 6-8 | DSS-analyse: hvornår giver human-in-the-loop mening |
| 4.4 Forudsætninger | TOE-struktureret analyse af barrierer/enablers fra interviews | 5-7 | T/O/E-tabel med fund |
| **5. Diskussion** | Sammenfatning, kritisk refleksion, begrænsninger, teoretisk bidrag | 5-7 | Nuanceret: "AI løser X men skaber Y under forudsætning Z" |
| **6. Konklusion** | Svar på PF + hvert USP, perspektivering | 3-4 | Tydeligt svar + ærlig perspektivering |
| | **Total** | **~56-63** | |

---

# DEL 6: RISICI OG FORHOLDSREGLER

| Risiko | Konsekvens | Modtræk |
|---|---|---|
| **"Det ligner en produktpræsentation"** | Lav karakter på kritisk refleksion | Vis begrænsninger lige så tydeligt som styrker. Brug override rate og rejection reasons som bevis på hvad AI *ikke* kan |
| **"I er biased"** | Tvivl om validitet | Eksplicit positioneringsafsnit + triangulering + data der viser fejl |
| **"Hvor er teorien?"** | Ligner konsulentrapport | Brug Lean-kategorier aktivt i analysen, ikke kun i teorikapitlet. Hver gang I nævner spildtid, referér til waste-type |
| **GDPR** | Etisk problem | Kun aggregerede, anonymiserede data. Ingen individuelle matches, navne eller kundedata |
| **For lidt data** | Kan ikke kvantificere påstande | Supplér med kvalitative vurderinger: "Informant X vurderer at ventetiden er reduceret med ca. Y%" |
| **Manglende "før"-data** | Kan ikke lave ægte før/efter | Brug as-is (hypotetisk manuel) vs. to-be (med SoluTalent) + interviews om "hvordan var det før platformen" |

---

# DEL 7: TJEKLISTE FØR I SKRIVER SYNOPSEN

- [ ] Problemformulering godkendt af vejleder (vis den opdaterede version)
- [ ] 4-6 informanter identificeret og kontaktet
- [ ] Samtykke fra SS til brug af platform som empiri
- [ ] Interviewguide udarbejdet baseret på temaer i afsnit 2.3
- [ ] Adgang til anonymiserede platformdata bekræftet
- [ ] Litteratur anskaffet: Yin (2018), Saunders et al. (2019), Womack & Jones (2003), Davenport (1993), Tornatzky & Fleischer (1990)
- [ ] Screenshots af KPI-dashboard forberedt (anonymiseret)
- [ ] Procesdiagram (as-is workflow fra afsnit 2.1) tegnet i ren version
- [ ] Videnskabsteoretisk position (pragmatisme) gennemlæst og forstået
- [ ] Bias-refleksion formuleret

---

# DEL 8: LITTERATURLISTE

- Braun, V. & Clarke, V. (2006). Using thematic analysis in psychology. *Qualitative Research in Psychology*, 3(2), 77-101.
- Creswell, J. W. & Creswell, J. D. (2018). *Research Design: Qualitative, Quantitative, and Mixed Methods Approaches* (5th ed.). Sage.
- Davenport, T. H. (1993). *Process Innovation: Reengineering Work through Information Technology*. Harvard Business School Press.
- Keen, P. G. W. & Scott Morton, M. S. (1978). *Decision Support Systems: An Organizational Perspective*. Addison-Wesley.
- McKinsey Global Institute (2023). *The State of AI in 2023: Generative AI's Breakout Year*.
- Saunders, M., Lewis, P. & Thornhill, A. (2019). *Research Methods for Business Students* (8th ed.). Pearson.
- Tornatzky, L. G. & Fleischer, M. (1990). *The Processes of Technological Innovation*. Lexington Books.
- Turban, E., Sharda, R. & Delen, D. (2014). *Decision Support and Business Intelligence Systems* (10th ed.). Pearson.
- Womack, J. P. & Jones, D. T. (2003). *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press.
- Yin, R. K. (2018). *Case Study Research and Applications: Design and Methods* (6th ed.). Sage.
