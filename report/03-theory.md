# 3. Teoretisk ramme

Dette kapitel præsenterer projektets fire centrale teorier og forklarer, hvordan de anvendes i analysen. Hver teori introduceres kort, operationaliseres til projektets kontekst og kobles eksplicit til underspørgsmål.

---

## 3.1 Lean Waste – Spildtid i vidensarbejde

### Teoretisk fundament

**Lean** som filosofi blev udviklet af Toyota (Womack & Jones, 2003) til optimering af produktionsprocesser gennem systematisk eliminering af spild (waste). De syv oprindelige spildtyper er: overproduktion, ventetid, transport, overprocessering, lager, bevægelse og fejl/rework. En ottende type – uudnyttet talent – tilføjes ofte i moderne Lean-litteratur.

Selvom Lean oprindeligt blev udviklet til produktion, er principperne i stigende grad anvendt på **vidensarbejde** (Staats & Upton, 2011). I vidensprocesser manifesterer spildtid sig anderledes end i fysisk produktion: "Lager" er ophobning af ubehandlede opgaver, "transport" er unødvendig videreformidling af information, og "overprocessering" er manuel håndtering af noget, der kunne automatiseres.

### Tilpasning til bemandingsprocessen

I bemandingsprocessen hos Support Solutions operationaliseres de syv spildtyper som følger:

| # | Spildtype | Originalt (produktion) | I bemandingskontext | SoluTalent-eksempel |
|---|-----------|------------------------|---------------------|---------------------|
| **1** | **Ventetid** | Venter på maskine/materialer | Opgaver/matches venter i kø på manuel behandling | Jobs i staging; pending matches venter på admin-review |
| **2** | **Overprocessering** | Mere bearbejdning end nødvendigt | Manuel behandling af noget der kunne auto-håndteres | Manuel curation af jobs med høj enrichment_confidence (≥75) |
| **3** | **Fejl/Rework** | Defekter → reparation | Forkerte matches der skal laves om eller afvises | Rejection reasons: mismatch, skill_level, location_mismatch |
| **4** | **Uudnyttet talent** | Medarbejdere bruges forkert | Admin bruger tid på lavværdi-godkendelser i stedet for strategisk matching | Projektleder reviewer høj-confidence jobs manuelt |
| **5** | **Transport** | Unødvendig flytning af materialer | Unødvendig videreformidling af information | Manuel trigger af freelancer-notifikationer (trin 7) |
| **6** | **Lager (Inventory)** | Ophobning af produkter | Akkumulering af ubehandlede items i kø | Voksende staging-kø eller match-kø |
| **7** | **Overproduktion** | Producerer mere end behov | System genererer output der aldrig bruges | AI-matches der genereres men aldrig reviewes |

### Anvendelse i analysen

**Lean waste-kategorier bruges som analytisk ramme i USP 1** til at:
1. **Klassificere** identificerede flaskehalse (trin 4, 6, 7)
2. **Prioritere** spildtyper efter impact
3. **Sammenligne** med teori: Er spildmønstrene de samme i vidensarbejde som i produktion?

**Eksempel på anvendelse:**
> "Tid i match-review-kø (trin 6) kategoriseres som Lean waste type 1: ventetid. Ifølge Womack & Jones (2003) er ventetid det mest synlige spild i flowprocesser, da det direkte forlænger lead time. I SoluTalent manifesterer denne ventetid sig som [INDSÆT TAL] timers gennemsnitlig forsinkelse fra match genereret til admin-beslutning."

---

## 3.2 Procesoptimering: As-is → To-be (Davenport)

### Teoretisk fundament

Thomas H. Davenport (1993) introducerede **Process Innovation** som ramme for at redesigne forretningsprocesser ved hjælp af informationsteknologi. Kernen i Davenports tilgang er:

1. **As-is analyse**: Dokumentér nuværende proces i detaljer
2. **To-be design**: Design forbedret proces med IT som enabler
3. **Gap-analyse**: Identificér hvad der forhindrer transformation
4. **Implementering**: Gennemfør ændringer

Davenports arbejde adskiller sig fra Business Process Reengineering (BPR) ved at være mindre radikal: Processen kan forbedres inkrementelt, ikke nødvendigvis genopfindes fra bunden.

### Tilpasning til SoluTalent-casen

I dette projekt er:

- **As-is**: Processen *med* SoluTalents nuværende automatisering + manuelle trin (det vi kortlægger i analyse 4.1 og 4.2)
- **To-be**: Processen med *yderligere* automatisering baseret på fund og TOE-forudsætninger (diskuteres i 4.4 og kapitel 5)
- **Gap**: Hvad forhindrer bevægelsen fra as-is til to-be? → analyseres med TOE

**Vigtig observation:** De fleste studerende skal *forestille sig* to-be. I dette projekt kan vi pege på konkrete auto-approval gates, KPI-tærskler og automation-muligheder, der allerede er *delvist* implementeret men ikke fuldt aktiveret. Dette giver en mere nuanceret gap-analyse.

### Davenports fire niveauer af procesinnovation

| Niveau | Beskrivelse | SoluTalent-eksempel |
|--------|-------------|---------------------|
| **Automation** | Eliminér manuel indsats | AI enrichment (trin 2), Auto-approval gate (trin 3) |
| **Rationalisering** | Eliminér unødvendige trin | Spring curation over for høj-confidence jobs |
| **Redesign** | Omdesign proces med IT som enabler | AI-matching erstatter manuel søgning |
| **Transformation** | Radikal omskabelse af proces | N/A – SoluTalent er inkrementel, ikke radikal |

SoluTalent opererer primært på **niveau 1-3**: Automation af enrichment, rationalisering gennem auto-approval og redesign af matching med AI. Der er ikke tale om radikal transformation (niveau 4), da grundprocessen (job → match → bud → kontrakt) forbliver intakt.

### Anvendelse i analysen

**Davenports framework bruges i USP 2 og 4** til at:
1. **Strukturere** proceskortlægningen (as-is med trin 1-8)
2. **Identificere** hvor IT allerede har ændret processen (automation, rationalisering)
3. **Diskutere** potentielle to-be-scenarier baseret på TOE-forudsætninger

**Eksempel på anvendelse:**
> "Trin 3 (auto-approval gate) repræsenterer Davenports rationaliseringsniveau: Processtedet elimineres for jobs, der opfylder kvalitetskriterier (enrichment_confidence ≥75, ingen kontaktinfo). Dette reducerer spildtype 4 (uudnyttet talent) ved at frigive admin-tid til mere komplekse vurderinger."

---

## 3.3 Decision Support Systems og Human-in-the-Loop

### Teoretisk fundament

**Decision Support Systems (DSS)** er IT-systemer, der understøtter – ikke erstatter – menneskelige beslutninger i komplekse situationer (Keen & Scott Morton, 1978; Turban et al., 2014). DSS kombinerer:
- **Data** (strukturerede og ustrukturerede)
- **Modeller** (analytiske værktøjer, algoritmer)
- **Brugergrænseflade** (præsentation af resultater)

Kernen i DSS-filosofien er, at beslutninger i komplekse, værdimæssigt ladede eller uforudsigelige domæner **kræver menneskelig dømmekraft**. IT leverer information og analyser, men mennesket træffer den endelige beslutning.

### Human-in-the-Loop (HITL)

Moderne AI-litteratur bruger begrebet **human-in-the-loop** (Dellermann et al., 2019; Shneiderman, 2020) til at beskrive systemer, hvor:
1. AI genererer forslag eller scorer muligheder
2. Mennesket gennemgår, vurderer og træffer beslutning
3. Feedback fra menneskelige beslutninger kan forbedre AI-modellen

**Hybrid intelligence** (Dellermann et al., 2019) refererer til synergi mellem menneskelig og maskinel intelligens – AI håndterer skala og konsistens, mennesket håndterer kontekst og værdivurderinger.

### Automatiseringsniveauer (Parasuraman et al., 2000)

Parasuraman et al. (2000) beskriver ti automatiseringsniveauer fra "ingen automation" til "fuld automation". SoluTalents AI-matching placerer sig på **niveau 5-6**:

- **Niveau 5**: System foreslår handling, men menneske træffer beslutning
- **Niveau 6**: System vælger handling, men menneske kan overrule

Dette adskiller SoluTalent fra fuldt automatiserede systemer (niveau 9-10), hvor AI beslutter uden menneskelig godkendelse.

### Tilpasning til SoluTalent

SoluTalents match-pipeline fungerer som et klassisk DSS:

| DSS-komponent | SoluTalent-implementering |
|---------------|---------------------------|
| **Data** | Freelancer-profiler, job-krav, historiske matches |
| **Model** | Hybrid scoring: 40% semantisk (embeddings) + 60% regelbaseret (skills, erfaring, kategori, lokation) |
| **Output** | Match-scores (0-100), forklaringer (GPT-genereret), skill gaps |
| **Beslutningstager** | Admin på /admin/matching |

**Vigtigt:** AI træffer *ikke* beslutning om allokering. AI genererer forslag, admin godkender/afviser.

### Anvendelse i analysen

**DSS/HITL bruges i USP 2 og 3** til at:
1. **Forklare** hvorfor SoluTalent er designet med manuel review (niveau 5-6, ikke niveau 9-10)
2. **Analysere** hvornår human-in-the-loop giver merværdi vs. er unødvendigt spild
3. **Diskutere** trade-offs mellem automatisering (effektivitet) og menneskelig kontrol (kvalitet, tillid)

**Eksempel på anvendelse:**
> "Override rate (andel af høj-score matches der afvises) indikerer, hvor ofte admin vælger anderledes end AI. En høj override rate kan betyde enten (a) AI-modellen er upræcis, eller (b) admin vurderer kontekstuelle faktorer, som AI ikke fanger (DSS-logik: menneskelig dømmekraft komplementerer AI). En lav override rate kan betyde enten (a) AI er præcis, eller (b) admin blindt følger AI uden kritisk vurdering (risiko: automation bias)."

---

## 3.4 TOE-frameworket – Forudsætninger for teknologiadoption

### Teoretisk fundament

**Technology-Organization-Environment (TOE)** frameworket (Tornatzky & Fleischer, 1990) forklarer, hvilke faktorer der påvirker virksomheders adoption og implementering af teknologisk innovation. Frameworket identificerer tre kontekster:

1. **Technological context**: Karakteristika ved teknologien (kompleksitet, kompatibilitet, relative fordele)
2. **Organizational context**: Virksomhedens struktur, ressourcer, kultur og ledelsesopbakning
3. **Environmental context**: Eksterne faktorer (marked, konkurrence, regulering)

TOE er ofte anvendt til at forklare, hvorfor nogle virksomheder adopterer ny teknologi succesfuldt, mens andre fejler – selv når teknologien er den samme.

### Tilpasning til SoluTalent

I dette projekt bruges TOE ikke til at forklare *hvorfor SoluTalent blev adopteret*, men til at analysere, **hvilke forudsætninger der skal være opfyldt for at reducere de resterende manuelle trin** (USP 4).

| TOE-dimension | Spørgsmål i SoluTalent-kontekst | Eksempler på fund |
|---------------|--------------------------------|-------------------|
| **Technology** | Er AI-matchingen præcis nok til at stole på? Er datakvaliteten tilstrækkelig? Er systemet stabilt? | Precision@5, override rate, enrichment_confidence-fordeling, fejlrate |
| **Organization** | Har teamet kompetencer til at bruge/vedligeholde systemet? Er der ledelsesopbakning? Er kulturen klar til ændring? Ressourcer? | Tillid til AI, ændringsvillighed, antal admin-medarbejdere, træningsbehov |
| **Environment** | Markedspres for hastighed? Konkurrence? Regulering (GDPR, EU AI Act)? Kundekrav? | Hastighed som konkurrenceparameter, compliance-krav, kundeforventninger til kvalitet |

### TOE som barriere- og enabler-analyse

TOE kan bruges både til at identificere:
- **Barrierer**: Hvad forhindrer yderligere automatisering? (fx lav tillid til AI = organizational barrier)
- **Enablers**: Hvad muliggør yderligere automatisering? (fx høj Precision@5 = technological enabler)

### Anvendelse i analysen

**TOE bruges i USP 4** til at:
1. **Strukturere** fund om forudsætninger og barrierer i tre kategorier
2. **Diskutere** hvordan T, O og E interagerer (fx høj teknologisk præcision nytter ikke, hvis organisatorisk tillid mangler)
3. **Anbefale** konkrete tiltag baseret på identificerede gaps

**Eksempel på anvendelse:**
> "Interviewfund viser, at partnere er bekymrede for at auto-godkende matches, selv når AI-scoren er høj (≥80). Dette identificeres som en **organizational barrier** i TOE-rammen: tillid til systemet er endnu ikke etableret. En **technological enabler** kunne være højere Precision@5 (>90%), men dette alene løser ikke den organisatoriske barriere. Der kræves desuden ændringsprocesser (kommunikation af systemets præcision, gradvis udrulning med overvågning) for at bygge tillid."

---

## 3.5 Teoriernes samspil – Analytisk syntese

De fire teorier komplementerer hinanden og skaber tilsammen en helhedsorienteret ramme for analyse:

```
USP 1: Hvor opstår spildtid?
  → LEAN WASTE klassificerer hvad der er spild
  → DAVENPORT strukturerer as-is processen
            ↓
USP 2: Hvad automatiserer SoluTalent?
  → DAVENPORT strukturerer as-is vs. automation-muligheder
  → DSS forklarer hvorfor AI er beslutningsstøtte (ikke beslutning)
            ↓
USP 3: Hvilke effekter og trade-offs?
  → DSS forklarer human-in-the-loop: hvornår giver det merværdi?
  → LEAN måler spildreduktion (tid i kø, rework)
            ↓
USP 4: Hvilke forudsætninger kræves?
  → TOE strukturerer barrierer/enablers i T, O, E
  → DSS forklarer tillid som forudsætning for automation
            ↓
DISKUSSION & KONKLUSION
  → Alle fire teorier samles: "Lean identificerede spildtid X (USP1),
     som AI adresserer via DSS (USP2), men organisatoriske forudsætninger
     (TOE, USP4) begrænser yderligere automatisering (USP3)."
```

### Konceptuel model

Nedenstående figur sammenfatter teorirelationers anvendelse i projektet:

```
[INPUT]                [PROCES]               [HUMAN-IN-THE-LOOP]    [OUTPUT]
Jobs/Freelancere  →  AI-matching (DSS)    →  Admin-review (DSS)  →  Matches
                      │                        │
                      │                        │
                 [SPILDTID]              [FORUDSÆTNINGER]
                 Lean waste               TOE-faktorer
                 As-is/to-be              (T, O, E)
                 (Davenport)
```

---

## 3.6 Sammenfatning: Teoretisk positionering

| Teori | Kilde | Anvendes til | USP |
|-------|-------|--------------|-----|
| **Lean Waste** | Womack & Jones (2003), Staats & Upton (2011) | Kategorisering af spildtid i vidensarbejde | 1 |
| **Procesoptimering** | Davenport (1993) | As-is → to-be struktur, procesdesign med IT | 1, 2 |
| **DSS / HITL** | Keen & Scott Morton (1978), Turban et al. (2014), Dellermann et al. (2019), Parasuraman et al. (2000) | Forklaring af AI som beslutningsstøtte, automatiseringsniveau, hybrid intelligence | 2, 3 |
| **TOE** | Tornatzky & Fleischer (1990) | Strukturering af forudsætninger for yderligere automatisering | 4 |

Tilsammen skaber disse teorier en ramme, der:
1. Identificerer spildtid (Lean)
2. Kortlægger hvordan AI påvirker processen (Davenport + DSS)
3. Forklarer hvorfor human-in-the-loop bevares (DSS)
4. Analyserer forudsætninger for yderligere automatisering (TOE)
