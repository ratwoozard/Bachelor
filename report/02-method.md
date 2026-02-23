# 2. Metode og forskningsdesign

## 2.1 Videnskabsteoretisk position: Pragmatisme

Projektet anlægger en **pragmatisk** videnskabsteoretisk position med forankring i 7. semesters metodepensum (Holm, 2023; Kuada, 2012), suppleret af Saunders et al. (2023).

### Pragmatismens kernepositioner

| Dimension | Pragmatisk position i dette projekt |
|-----------|-------------------------------------|
| **Ontologi** | Virkeligheden er kompleks og flertydig; vi fokuserer på det, der har praktisk konsekvens for problemstillingen. Procesoplevelser kan variere mellem roller (direktør vs. projektleder), og begge perspektiver er relevante |
| **Epistemologi** | Viden vurderes på sin anvendelighed; vi kombinerer datakilder efter hvad der bedst besvarer spørgsmålet. Fund skal være *nyttige* for Support Solutions og fagligt interessante – ikke universelle love |
| **Slutningsform** | Abduktiv – vekslen mellem teori og empiri. Vi starter med observeret praksis (artefakt + interviews), inddrager teori til analyse (Lean, TOE, DSS) og vender tilbage med nuancerede fund |
| **Metodevalg** | Metodepluralisme: den pragmatiske position legitimerer brug af både kvalitative (interviews) og artefaktbaserede (platformanalyse, KPI-data) tilgange i samme studie |

### Begrundelse for pragmatisme

Pragmatismen er valgt, fordi:

1. **Problemformuleringen er handlingsorienteret** ("hvordan påvirker...") – ikke teoretisk abstrakt eller hypotesetestende
2. **Empirien har en naturlig dualitet**: Vi har både *menneskers oplevelser* (interviews med direktører og partnere) og et *konkret digitalt artefakt* (SoluTalent med kode, datamodeller, workflow-states og KPI'er)
3. **Formålet er anvendelsesorienteret**: At hjælpe Support Solutions med at forstå deres proces og identificere optimeringsmuligheder
4. **Vi ønsker ikke at bevise en universel lov**, men at skabe kontekstuel forståelse af spildtid og automatiseringspotentiale i en specifik organisatorisk kontekst

Pragmatismen giver os frihed til at bruge forskellige empirikilder uden at tvinge undersøgelsen ind i en ren positivistisk (hypotesetest) eller fortolkende (meningsfortolkning) ramme.

### Abduktion i praksis

Abduktiv slutning operationaliseres som en iterativ vekslen mellem empiri og teori:

```
OBSERVATION (empiri):
  "Matches venter i gennemsnit X timer på admin-godkendelse"
       ↓
TEORI (Lean):
  "Dette er 'ventetid' – en af spildkategorierne"
       ↓
NY OBSERVATION (empiri):
  "Informant siger: Vi tør ikke auto-godkende fordi..."
       ↓
TEORI (DSS/TOE):
  "Dette handler om tillid til beslutningsstøttesystemer
   og organisatorisk modenhed"
       ↓
NUANCERET FUND:
  "Ventetid i match-review skyldes ikke teknologisk begrænsning
   men organisatorisk forsigtighedsprincip. Forudsætning for
   automatisering: øget tillid til AI-scoringen."
```

---

## 2.2 Forskningsdesign: Eksplorativt casestudie

Projektet anvender et **eksplorativt single-case studie** med **indlejret analyseenhed** (embedded unit design), metodisk forankret i Holm (2023), Kuada (2012) og Saunders et al. (2023).

### Casedesign

| Element | Indhold |
|---------|---------|
| **Casevirksomhed** | Support Solutions ApS – dansk IT-konsulenthus, SMV-segment |
| **Artefakt** | SoluTalent-platformen som teknologisk artefakt |
| **Indlejret enhed** | Bemandingsworkflowet i SoluTalent (trin 1–8, med fokus på `staging_imported` → `matched`) som delproces i virksomhedens ressourceallokering |
| **Kontekst** | Dansk/skandinavisk IT-konsulentmarked, freelance-økonomi, B2B-platforme |

### Casevalgets begrundelse

Support Solutions ApS er valgt som case, fordi:
1. **Empirisk adgang**: Begge forfattere har gennemført praktikophold hos virksomheden og har privilegeret adgang til platformdata, processer og nøglepersoner
2. **Repræsentativt problem**: Virksomheden repræsenterer SMV-segmentet, hvor bemandingsudfordringer er udbredte men ressourcer til løsninger begrænsede
3. **Konkret artefakt**: SoluTalent er en faktisk implementeret løsning (ikke et koncept), hvilket muliggør artefaktanalyse
4. **Teoretisk relevans**: Casen belyser praktisk anvendelse af teori om Lean, DSS og TOE i en kontekst med begrænset litteratur

### Analytisk generaliserbarhed

Som single-case studie kan resultaterne ikke generaliseres statistisk til populationen af IT-konsulenthuse. I stedet søges **analytisk generaliserbarhed** (Holm, 2023; Kuada, 2012): Fund diskuteres i forhold til teori, og det vurderes, i hvilket omfang teorierne bekræftes, nuanceres eller udfordres af casen. Læseren kan selv vurdere overførbarhed til lignende kontekster baseret på tyk beskrivelse af case og proces.

---

## 2.3 Empirikilder og dataindsamling

Projektet bygger på tre komplementære empirikilder, der tilsammen muliggør triangulering:

### 1. Artefaktanalyse: SoluTalent-platformen

**Hvad:** Systematisk gennemgang af SoluTalent-platformen som digitalt artefakt  
**Formål:** Kortlægge faktiske workflow-states, automatiserede vs. manuelle trin, AI-pipeline-komponenter og KPI-struktur  
**Datakilder:**
- Workflow-states og transitions i datamodel (`projects`, `match_requests`, `bids`)
- AI-matchingpipeline (`supabase/functions/ai-match/index.ts`)
- Auto-approval gates (`20260210000000_add_auto_curation.sql`)
- KPI-dashboard-komponenter (`MatchKPICards.tsx`)
- Platformdokumentation (ADR'er, flow-dokumenter)

**Analysemetode:** Funktionel analyse af hvad platformen gør i processen – ikke code review eller teknisk evaluering af kodekvalitet.

**Anvendes til:** USP 2 (automatiserede vs. manuelle trin), USP 3 (KPI-struktur)

### 2. Semistrukturerede interviews

**Hvem:** 4–6 informanter hos Support Solutions ApS:
- Direktør(er): Strategi, organisatoriske barrierer, fremtidsvision
- Partnere: Daglig brug, oplevede flaskehalse, tillid til AI
- Projektledere: Beslutningspraksis, override-adfærd, mangler i systemet

**Varighed:** 30–60 minutter per interview  
**Dokumentation:** Lydoptagelse + transskription (med samtykke)  
**Form:** Semistruktureret – interviewguide med foruddefinerede temaer, men åbenhed for emergente emner

**Interviewguide-struktur:**
1. Introduktion (formål, anonymitet, samtykke, varighed)
2. Baggrund (rolle, erfaring, daglig involvering i bemandingsprocessen)
3. **Tema 1: Nuværende praksis og spildtid** (USP 1)
   - Beskriv bemandingsprocessen fra job modtaget til konsulent allokeret
   - Hvor oplever I forsinkelser eller flaskehalse?
   - Hvad er årsagerne til disse?
4. **Tema 2: AI-matchingens rolle** (USP 2)
   - Hvordan bruges AI-matching i praksis?
   - Hvilke trin er automatiserede, og hvilke kræver jeres involvering?
5. **Tema 3: Grænsen for automatisering** (USP 3)
   - Hvilke beslutninger ville I aldrig overlade til AI? Hvorfor?
   - Oplever I situationer, hvor AI-scoren er højt, men I alligevel afviser? (Override-cases)
6. **Tema 4: Forudsætninger og barrierer** (USP 4)
   - Hvad skal der til for at I kan automatisere mere?
   - Hvilke bekymringer har I ved øget automatisering?
7. Afrunding (noget vi ikke har spurgt om? tilføjelser?)

**Spørgsmålstyper:**
- Åbne: "Beskriv processen fra..." (ikke "Synes du AI er godt?")
- Opfølgende: "Kan du give et eksempel?" "Hvad mener du med...?"
- Kontrasterende: "Hvordan var det før SoluTalent?" "Hvad hvis AI'en tog fejl?"

**Anvendes til:** USP 1 (spildtidsoplevelser), USP 3 (override-begrundelser), USP 4 (barrierer)

**Status:** [TODO: Angiv om interviews er gennemført. Hvis ja, vedlæg transskriptioner som bilag. Hvis nej, marker som planlagt empiri.]

### 3. Platformdata og KPI-analyse

**Hvad:** Udtræk af aggregerede data fra SoluTalent-databasen  
**Formål:** Kvantificere spildtidsindikatorer og evaluere AI-matchingens præstation  
**Datakilder:**
- `match_analytics` (decision_timestamp, review_duration_seconds, outcome, rejection_reason)
- `match_results` (overall_score, match_reasons)
- `projects` (created_at, status, status-transitions)
- `match_requests` (created_at, status)

**Tidsperiode:** Seneste 30 dage (hvor tilgængeligt og relevant)  
**Anonymisering:** Individuelle freelancere og projekter anonymiseres; data rapporteres aggregeret

**Anvendes til:** USP 1 (tid i kø), USP 3 (KPI-evaluering)

**OBS:** Alle KPI-tal i analysekapitlet er **pladsholdere** og skal udfyldes med faktiske udtræk. Se Bilag: SQL-udtræk for copy/paste-klare queries.

---

## 2.4 Operationalisering af "spildtid"

Begrebet "spildtid" er projektets centrale analyseenhed og operationaliseres gennem **Lean waste-kategorier** tilpasset vidensarbejde (Womack & Jones, 2003; Staats & Upton, 2011):

### Spildkategorier og målelogik

| Lean-kategori | Definition i bemandingskontext | Indikator | Datakilde |
|---------------|-------------------------------|-----------|-----------|
| **1. Ventetid** | Jobs/matches venter i kø på manuel behandling | Tid mellem status-skift (queue time) | Artefakt: timestamps i `projects`, `match_requests` + interview |
| **2. Overprocessering** | Manuel behandling af noget der kunne auto-håndteres | Antal manuelle touchpoints pr. job | Artefakt: workflow-mapping + interview |
| **3. Fejl/Rework** | Forkerte matches der skal laves om | Override rate + rejection_reason-kategorier | Artefakt: `match_analytics` + interview |
| **4. Uudnyttet talent** | Admin bruger tid på lavværdi-opgaver | Andel tid brugt på høj-confidence curation | Interview + workflow-analyse |
| **5. Transport** | Unødvendig videreformidling af information | Manuel trigger af notifikationer | Artefakt: workflow + interview |
| **6. Lager (Inventory)** | Akkumulering af ubehandlede items | Voksende staging-kø eller match-kø | Artefakt: antal pending items |
| **7. Overproduktion** | System genererer matches der aldrig reviewes | Andel matches der aldrig behandles | Artefakt: `match_requests` uden beslutning |

### Konkrete indikatorer (operationaliserede mål)

| Indikator | Definition / målelogik | Datakilde | USP |
|-----------|------------------------|-----------|-----|
| **Time-to-match** | Tid fra projekt oprettet til status = `matched` | `projects.created_at` → status-ændring til `matched` | 1, 2 |
| **Tid i curation-kø** | Tid i `staging_imported` eller `draft_admin` | `projects.created_at` → godkendelse | 1 |
| **Match-til-beslutning** | Tid fra match genereret til admin beslutter | `match_requests.created_at` → `decision_timestamp` i `match_analytics` | 1, 2 |
| **Review-varighed** | Tid admin faktisk bruger på review | `review_duration_seconds` i `match_analytics` | 1 |
| **Auto-approval rate** | Andel opgaver der springer curation over | `auto_approved = true` / total jobs | 1, 2 |
| **Rejection rate** | Andel AI-matches afvist | `outcome = 'rejected'` / total matches | 2, 3 |
| **Override rate** | Andel høj-score matches afvist | Høj-score rejected / total høj-score | 3 |
| **Precision@5** | Andel top-5 matches godkendt | Godkendte i top-5 / top-5 total | 2 |

**For hver indikator verificeres datatilgængelighed** (timestamps/fields) i SoluTalents datamodel; hvor data ikke findes eller er ufuldstændig, suppleres med interview-udsagn og kvalitativ vurdering.

---

## 2.5 Analysestrategi

Analysen følger en systematisk firetrins-strategi:

### 1. Tematisk kodning (Braun & Clarke, 2006; Kuada, 2012)

**Faser:**
1. Bliv fortrolig med data (læs transskriptioner gentagne gange)
2. Generér initielle koder (fx "ventetid i kø", "tillid til AI", "manglende kompetencer")
3. Søg efter temaer (gruppér koder under Lean-kategorier + emergente temaer)
4. Gennemgå temaer (tjek mod data – holder de?)
5. Definér og navngiv temaer
6. Producér rapport

**I dette projekt:** Lean waste-kategorier bruges som *foruddefinerede* (deduktive) temaer, men der er åbenhed for *emergente* (induktive) temaer der opstår fra data. Dette er abduktion i praksis.

### 2. Proceskortlægning (Davenport, 1993)

**As-is-kortlægning:**
- Dokumentér SoluTalents 8-trins workflow med fokus på trin 1–8
- Identificér automatiserede vs. manuelle trin
- Markér flaskehalse (trin 4, 6, 7)

**To-be-diskussion:**
- Baseret på fund: hvilke yderligere trin *kunne* automatiseres?
- Hvilke forudsætninger kræves? (→ TOE-analyse)

### 3. Krydsanalyse: Interview ↔ Artefakt ↔ Data

**Princip:** Triangulering gennem sammenholdelse af kilder:
- Hvis interview siger "AI sparer tid", skal platformdata understøtte det – ellers forklares afvigelsen
- Hvis artefakt har en funktion (fx auto-approval gate), verificeres det i interview om den faktisk bruges
- Hvis data viser høj override rate, undersøges årsagen i rejection reasons + interview

**Dette styrker intern validitet** ved at undgå afhængighed af én enkelt kilde.

### 4. TOE-strukturering (Tornatzky & Fleischer, 1990)

Fund om barrierer og forudsætninger kategoriseres i tre dimensioner:

| TOE-dimension | Spørgsmål | Eksempler på fund |
|---------------|-----------|-------------------|
| **Technology** | Er teknologien præcis nok? Er datakvalitet tilstrækkelig? | Precision@5, override rate, enrichment_confidence |
| **Organization** | Kompetencer? Ledelsesopbakning? Kultur? Ressourcer? | Tillid til AI, ændringsvillighed, antal admin |
| **Environment** | Markedspres? Konkurrence? Regulering? Kundekrav? | Hastighed som konkurrenceparameter, GDPR, EU AI Act |

---

## 2.6 Validitet og troværdighed

### Triangulering

**Datakilde-triangulering:** Tre empirikilder (interview + artefakt + data) krydstjekker fund. Minimum to kilder skal understøtte hvert hovedfund.

**Eksempel:**
- **Fund:** "Trin 6 (match review) er en flaskehals"
- **Interview:** "Matches kan ligge i 2-3 dage hvis vi har travlt"
- **Data:** Gennemsnitlig tid fra match genereret til beslutning = [INDSÆT TAL] timer
- **Artefakt:** Workflow viser at trin 6 er manuelt, ingen auto-godkendelse

### Informant-validering

Nøglecitater og procesdiagrammer præsenteres for informanter med mulighed for kommentering og korrektion. Dette sikrer, at fortolkninger er i overensstemmelse med informanternes oplevelser.

### Transparent interviewguide

Interviewguiden vedlægges som bilag, baseret på operationaliserede begreber fra afsnit 2.4. Dette muliggør ekstern vurdering af, om spørgsmål faktisk måler det, de er tiltænkt at måle.

### Kædebevis (chain of evidence)

Fra problemformulering → operationalisering → interviewguide → data → fund → konklusion skal der være klar sporbarhed. Hvert analysefund i kapitel 4 linkes eksplicit til USP og empiri.

---

## 2.7 Bias-refleksion og forskerpositioning

### Dobbeltrolle: Praktikanter og medudviklere

Begge forfattere har gennemført praktikophold hos Support Solutions ApS og har bidraget til udviklingen af SoluTalent. Denne dobbeltrolle giver **privilegeret empirisk adgang**, men indebærer **risiko for bekræftelsesbias**:

**Fordele ved insider-position:**
- Dyb forståelse af processer og udfordringer
- Adgang til platformdata, kode og dokumentation
- Tillid fra informanter, hvilket muliggør ærlige svar

**Risici ved insider-position:**
- Bekræftelsesbias: Tendens til at søge data der understøtter forventninger
- Halo-effekt: Positivt syn på eget arbejde (SoluTalent)
- Manglende kritisk distance

### Håndtering af bias

Vi håndterer dette gennem fire tiltag:

**1. Negativ-case analyse**
Vi opsøger aktivt cases, hvor AI fejler:
- Høje override rates (matches med høj score, der afvises)
- Specifikke rejection reasons der peger på systemfejl
- Interview-udsagn om systemets begrænsninger

**2. Kilde-triangulering med konflikt**
Når interview siger "AI sparer tid", skal platformdata understøtte det. Hvis der er afvigelse, forklares den – ikke ignoreres. Vi prioriterer data der modsiger forventninger.

**3. Informantspredning**
Vi interviewer mindst én person, der ikke er tæt på SoluTalent i daglig drift (fx en direktør der primært kigger på økonomi). Dette reducerer risikoen for, at alle informanter deler vores positive bias.

**4. Artefaktanalyse som uafhængig kilde**
Platformens kode og datamodel er objektive kilder, der eksisterer uafhængigt af vores fortolkninger. Ved at basere påstande på verificerbar funktionalitet (ikke kun oplevelser) styrkes objektiviteten.

### Forskerposition (eksplicit)

> "Vi anerkender, at vores tætte relation til Support Solutions og SoluTalent skaber en potentiel bias. Vi har søgt at mitigere dette ved systematisk at lade artefaktanalysen fungere som uafhængig datakilde, inkludere informanter vi ikke arbejdede direkte med, aktivt søge fund der modsiger forventninger, og præsentere data der viser systemets begrænsninger (rejection reasons, override rate) på lige fod med dets styrker. Denne transparens om forskerrollen er i overensstemmelse med pragmatismens fokus på anvendelighed og kontekstuel forståelse frem for objektiv sandhed."

---

## 2.8 Etiske overvejelser

### GDPR og anonymisering

Platformdata indeholder personoplysninger (freelancer-profiler, kontaktoplysninger). I rapporten:
- Anvendes kun aggregerede data (ingen individniveau)
- Freelancere og projekter anonymiseres
- Citater anonymiseres (rolle nævnes, ikke navn)

### Informeret samtykke

Alle interview-informanter:
- Informeres om formål, varighed og databehandling
- Giver eksplicit samtykke til optagelse og transskription
- Kan trække samtykke tilbage indtil databehandling afsluttes
- Modtager transskription til gennemsyn (informant-validering)

### Virksomhedens samtykke

Support Solutions ApS har givet tilladelse til:
- Brug af platformdata til forskningsformål
- Interview med nøglepersoner
- Offentliggørelse af fund i bachelor-rapport

Virksomheden har ret til at se rapporten før aflevering og kan anmode om anonymisering af kommercielt sensitive oplysninger.

---

## 2.9 Opsummering af metodevalg

| Dimension | Valg | Begrundelse |
|-----------|------|-------------|
| **Videnskabsteori** | Pragmatisme (Holm/Kuada) | Handlingsorienteret PF, metodepluralisme, abduktiv slutning |
| **Design** | Eksplorativt single-case (Holm/Kuada) | Dybdegående forståelse, analytisk generalisering |
| **Empiri** | Interview + artefakt + data | Triangulering, komplementære perspektiver |
| **Analyse** | Tematisk kodning + proceskortlægning + TOE | Struktureret men åben for emergente temaer |
| **Validitet** | Triangulering, informant-validering, kædebevis | Styrker troværdighed og pålidelighed |
| **Bias** | Negativ-case, kilde-konflikt, informantspredning | Håndterer praktikant/udvikler-rolle |
