# Akademisk Ramme – Videnskabsteori, Metode og Teori

## DEL A: VIDENSKABSTEORI

### A.1 De fire hovedpositioner (overblik)

| Position | Ontologi (hvad er virkelighed?) | Epistemologi (hvad er viden?) | Typisk metode | Typisk slutningsform |
|---|---|---|---|---|
| **Positivisme** | Én objektiv virkelighed der kan måles | Viden er objektiv, generaliserbar, lovmæssig | Kvantitativ, eksperimenter, statistik | Deduktiv (teori → hypotese → test) |
| **Fortolkende / Hermeneutik** | Virkeligheden er socialt konstrueret | Viden er kontekstuel og fortolkningsbaseret | Kvalitativ, interviews, observation | Induktiv (data → mønstre → teori) |
| **Kritisk realisme** | Virkelighed i lag: det faktiske, det aktualiserede, det empiriske | Viden er fejlbar men vi kan nærme os dybereliggende strukturer | Mixed, retroduktion | Retroduktiv (hvilke mekanismer forklarer det vi ser?) |
| **Pragmatisme** ★ | Virkelighed er kompleks; vi fokuserer på det praktisk relevante | Viden vurderes på sin anvendelighed | Det der bedst besvarer spørgsmålet | Abduktiv (vekslen teori ↔ empiri) |

★ = Jeres valgte position

**Note:** For dybere forståelse af epistemologi-varianter (klassisk positivisme, logisk positivisme, empirisme, rationalisme, kritisk rationalisme, interpretivisme, moderne hermeneutik) med beslutningskriterier og case-eksempler, se `docs/PENSUM_VIDENSBASE.md`, sektion 10.2.

### A.2 Pragmatisme i dybden

**Hovedtanke:** Forskningsspørgsmålet driver metodevalget. Ontologiske og epistemologiske debatter er sekundære i forhold til "hvad virker for at besvare dette spørgsmål?"

**Nøgletænkere:** John Dewey, Charles Sanders Peirce, William James. I jeres 7. semesterkontekst bruges Kuada (2012) til korte begrebsdefinitioner og metode/kvalitetsramme, Holm (2023) og Saunders et al. (2023) til anvendt videnskabsteori, og Rossman & Wilson (1984) til pragmatismestrategi og kombination af kvalitative/kvantitative logikker.

**Fire dimensioner i jeres projekt:**

| Dimension | Pragmatisk position | Konsekvens for projektet |
|---|---|---|
| **Ontologi** | Ontologisk skal I kort definere begrebet og vise, at PF rummer baade observerbare procesforhold og fortolkede organisatoriske praksisser | I har brug for baade at kunne maale (KPI-plan efter go-live) og forstaa (interviews). Selve strategiargumentet for pragmatisme baeres dog af problemformuleringen og Rossman & Wilson - ikke af Kuada alene. |
| **Epistemologi** | Epistemologisk skal I vise, hvordan forskellige evidensformer legitimeres i relation til PF | Jeres fund skal vaere nyttige for SS og fagligt interessante, men epistemologi maa ikke reduceres til den korte frase om "anvendelighed". Knyt i stedet evidenssynet til casen og metodevalget. |
| **Slutningsform** | Abduktiv: vekslen mellem teori og empiri | I starter med at observere processen (empiri), bringer Lean/TOE ind (teori), og vender tilbage med nuancerede fund. Ikke ren deduktion (hypotesetest) eller ren induktion (grounded theory) |
| **Metode** | Metodepluralisme / sekventiel kombination af kvalitative og kvantitative logikker | Legitimerer at I bruger interviews + artefaktanalyse + platformdata i samme studie. I synopsis kan dette beskrives som en pragmatisk strategi, hvor Rossman & Wilson forklarer kombinationen af perspektiver, mens metodetriangulering forankres i sekventielt udforskende design. |

**Hvorfor pragmatisme passer til dette projekt:**
1. Problemformuleringen er handlingsorienteret ("Hvordan påvirker...") – ikke teoretisk abstrakt
2. Empirien har naturlig dualitet: menneskers oplevelser (interviews) + teknisk artefakt (kode/data)
3. Formålet er anvendelsesorienteret: at hjælpe SS med at forstå deres proces
4. I ønsker ikke at bevise en universel lov, men at skabe kontekstuel forståelse

**Typisk fejl studerende laver:**
- Skriver "vi har valgt pragmatisme fordi det er det bredeste" → Det er ikke en begrundelse. Forklar *hvorfor* det passer til *jeres* PF.
- Blander pragmatisme med "vi gør lidt af hvert" → Pragmatisme er ikke metodisk dovenskab, det er en bevidst position der siger at spørgsmålet driver metoden.
- Glemmer abduktionen → Vis eksplicit i analysen at I veksler mellem empiri og teori.

**Standardformulering:**
> "Projektet anlaegger en pragmatisk videnskabsteoretisk position med forankring i 7. semesters metodepensum (Holm, 2023; Kuada, 2012), suppleret af Saunders et al. (2023). Denne position er valgt, fordi problemformuleringen er handlingsorienteret og empirien har en naturlig dualitet: menneskers oplevelser (interviews med beslutningstagere) og et konkret digitalt artefakt (SoluTalent-platformen med kode og datamodeller). KPI indgaar i denne fase som maaleplan efter go-live, ikke som eksisterende driftresultater. Pragmatismen legitimerer en metodepluralistisk tilgang med abduktiv slutningsform, hvor vi iterativt veksler mellem teoretiske begreber (Lean waste, TOE) og empiriske fund fra case og artefakt."

### A.3 Slutningsformer: Induktion, Deduktion og Abduktion

**Hurtig oversigt:**
| Slutningsform | Retning | Jeres brug |
|---|---|---|
| **Deduktion** | Teori → empiri (test) | Når I tester Lean-teoriens forudsigelser i SS |
| **Induktion** | Empiri → teori (opdage mønstre) | Når I koder interviews og finder gentagne temaer (fx "tillid" nævnes af alle) |
| **Abduktion** ★ | Empiri ↔ teori (bedste forklaring) | Jeres hovedmetode: iterativ vekslen mellem observation og teori |

★ = Jeres primære slutningsform (pragmatisme)

#### Abduktion i praksis (jeres case)

```
OBSERVATION (empiri):
  "Matches venter i gennemsnit X timer på admin-godkendelse"
       ↓
TEORI (Lean):
  "Dette er 'ventetid' – en af de 7 spildkategorier"
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
   automatisering: øget tillid til AI-scoringen, fx via
   højere Precision@5-tærskel."
```

**Forskel fra induktion:** Induktion ville stoppe ved "tillid nævnes ofte → tillid er vigtigt". Abduktion går videre: "Hvorfor er tillid vigtigt? → Teori (TOE/DSS) forklarer at organisatorisk modenhed og beslutningsstøttesystemer kræver tillid → dette er den bedste forklaring."

**Note:** For dyb forklaring af de tre slutningsformer med beslutningsalgoritme og kilder (Peirce, Popper), se `docs/PENSUM_VIDENSBASE.md`, sektion 10.3.

### A.4 Hvornår I IKKE skal bruge pragmatisme

Pragmatisme er *forkert* valg hvis:
- I vil teste en specifik hypotese (→ brug positivisme/deduktion)
- I vil forstå dybe meningsstrukturer (→ brug hermeneutik)
- I vil afdække skjulte magtstrukturer (→ brug kritisk realisme)
- Jeres PF er "Hvorfor oplever X at..." (→ fortolkende)

Jeres PF er "Hvordan påvirker..." med fokus på praktisk forståelse → pragmatisme passer.

---

## DEL B: METODE

### B.1 Casestudie (Holm, 2023; Kuada, 2012; Saunders, 2023)

**Note:** Case-studie-metoden forankres i 7. semesters pensum (Holm, 2023; Kuada, 2012; Saunders, 2023). Yin (2018) er **ikke** pensum jf. `UDDANNELSE_OG_PENSUM.md` og bruges derfor ikke som metodekilde.

**Type:** Eksplorativt **indlejret single-case studie** (Holm, 2023; Kuada, 2012)

#### Holistisk vs. indlejret casestudie (Holm, 2023)
- **Holistisk:** Vælges når man ønsker at forstå organisationen som helhed, frem for specifikke afdelinger
- **Indlejret:** Vælges når man afgraenser casen til en organisatorisk delmaengde, fx en afdeling eller et team, inden for organisationen (jeres valg)

#### Jeres case-design

| Element | I jeres projekt | Kilde/begrundelse |
|---|---|---|
| **Casen (helhed)** | Support Solutions ApS | Organisatorisk kontekst (SMV, dansk IT-marked) |
| **Indlejret organisatorisk afgrænsning** | Den del af organisationen, der arbejder med matching/bemanding | Vejlederlinjen er, at embedded-design begrundes organisatorisk - ikke via workflow-states |
| **Analytisk fokus 1** | SoluTalent-platformen som teknologisk artefakt | Konkret system der understøtter processen |
| **Analytisk fokus 2** | Bemandingsprocessen fra modtaget opgave til klientindstillet konsulent | Den afgrænsede del af værdikæden I analyserer |
| **Analyseniveau** | Proces- og systemniveau inden for den organisatoriske delmaengde | Scope matcher PF/USP |
| **Kontekst** | Dansk IT-konsulentmarked, SMV-vilkår, konkurrence på hastighed | Påvirker hvilke løsninger der er mulige |

#### Nøglekomponenter i case-design (tilpasset Holm/Kuada/Saunders)
1. **Forskningsspørgsmål** → Jeres PF ("hvordan påvirker..."-spørgsmål passer til casestudie)
2. **Underspørgsmål** → Giver retning for dataindsamling og analyse
3. **Analysefokus** → Bemandingsprocessen + SoluTalent-artefakt inden for en organisatorisk afgraenset case
4. **Datakilder** → Interviews, artefaktanalyse, KPI-maaleplan/loggingkrav (metodetriangulering i pre-go-live fase)
5. **Analytisk strategi** → Tematisk kodning + proceskortlægning + teoretisk ramme (Lean, TOE, DSS)
6. **Fortolkningskriterier** → Lean-kategorier (spildtyper), TOE-dimensioner, DSS-principper

#### Analytisk generaliserbarhed (Holm, 2023; Kuada, 2012)
Case-studier generaliserer **analytisk til teori**, ikke statistisk til population (Holm, 2023). Dette betyder:
- ✗ "Dette gælder for alle konsulenthuse" (statistisk generalisering – kræver repræsentativ stikprøve)
- ✓ "Vores fund understøtter TOE-frameworkets forudsigelse om organisatoriske barrierer ved AI-adoption" (analytisk generalisering til teori)
- ✓ "Lean-kategorien 'overprocessering' manifesterer sig i vidensarbejde som manuel curation af high-confidence jobs" (teoretisk udvidelse)

**Styrke:** Analytisk generaliserbarhed tillader dybdegående forståelse af komplekse fænomener i deres naturlige kontekst—noget survey/eksperiment ikke kan levere (Kuada, 2012; Saunders et al., 2023, kap. 5).

**Kontekstafhængighed:** "Kontekst bestemmer" betyder at jeres fund er gyldige for *denne kontekst* (SS, SoluTalent, dansk marked, 2026). Andre organisationer i andre kontekster kan have andre mønstre—men de teoretiske indsigter (fx om tillidsbarrierer ved AI) kan overføres analytisk (Holm, 2023).

### B.2 Semistrukturerede interviews

**Antal:** 4-6 informanter
**Udvælgelse:** Purposive sampling – I vælger informanter der har forskellige roller i processen
**Varighed:** 30-60 min per interview
**Dokumentation:** Lydoptagelse + transskription (med samtykke)

**Interviewguide-struktur:**
1. Introduktion (formål, anonymitet, samtykke)
2. Baggrund (rolle, erfaring, daglig involvering i processen)
3. Tema 1: Nuværende praksis og spildtid (USP 1)
4. Tema 2: AI-matchingens effekt (USP 2)
5. Tema 3: Grænsen for automatisering (USP 3)
6. Tema 4: Forudsætninger og barrierer (USP 4)
7. Afrunding (noget vi ikke har spurgt om? tilføjelser?)

**Spørgsmålstyper:**
- Åbne spørgsmål: "Beskriv processen fra..." (ikke "Synes du AI er godt?")
- Opfølgende: "Kan du give et eksempel?" "Hvad mener du med...?"
- Kontrasterende: "Hvordan var det før SoluTalent?" "Hvad hvis AI'en tog fejl?"

### B.3 Artefaktanalyse

**Hvad:** Systematisk gennemgang af SoluTalent-platformen som digitalt artefakt
**Ikke:** Code review eller teknisk evaluering
**Men:** Funktionel analyse af hvad platformen gør i processen

| Analysedimension | Hvad I kigger på |
|---|---|
| **Workflow-states** | Status-enums og transitions (staging → bidding → matched) |
| **Manuelle vs. automatiserede trin** | Hvilke trin kræver admin-klik? Hvilke kører automatisk? |
| **AI-pipeline** | Hvad gør hvert af de 6 stages? Hvad filtreres fra? |
| **Auto-approval gates** | Betingelser for at springe curation over |
| **KPI-struktur** | Hvad skal maales efter go-live? Precision@5, override rate, beslutningstid |
| **Rejection reasons** | Strukturerede årsager til afvisning af matches |

### B.4 Tematisk analyse (Braun & Clarke, 2006)

**6 faser:**
1. Bliv fortrolig med data (læs transskriptioner gentagne gange)
2. Generér initielle koder (fx "ventetid i kø", "tillid til AI", "manglende kompetencer")
3. Søg efter temaer (gruppér koder under Lean-kategorier + emergente temaer)
4. Gennemgå temaer (tjek mod data – holder de?)
5. Definér og navngiv temaer
6. Producér rapport

**I jeres projekt:** Brug Lean-waste-kategorier som *foruddefinerede* (deduktive) temaer, men vær åben for *emergente* (induktive) temaer der opstår fra data. Det er abduktion i praksis.

### B.5 Validitet og troværdighed

| Kriterium (Lincoln & Guba) | Handling |
|---|---|
| **Troværdighed (credibility)** | Triangulering (interview + artefakt + data), informantvalidering (krav, fordi deltagerne skal have mulighed for at bekræfte, at forskernes tolkning repræsenterer dem korrekt i den givne kontekst), langvarigt engagement (praktikperiode) |
| **Overførbarhed (transferability)** | Tyk beskrivelse af kontekst så læser selv kan vurdere overførbarhed |
| **Pålidelighed (dependability)** | Transparent interviewguide, kodningsstrategi og kædebevis |
| **Bekræftbarhed (confirmability)** | Bias-refleksion, brug af data der viser systemets fejl/begrænsninger |

---

## DEL C: TEORETISK RAMME

### C.1 Lean Waste (Womack & Jones, 2003)

**Oprindelse:** Toyota Production System. Tilpasset vidensarbejde af bl.a. Staats & Upton (2011).

**De 7 spildtyper tilpasset bemandingsprocessen:**

| # | Spildtype | Originalt (produktion) | I jeres kontekst (bemanding) | Eksempel fra SoluTalent |
|---|---|---|---|---|
| 1 | **Ventetid** | Venter på maskine/materialer | Opgaver/matches venter i kø | Jobs i staging; pending matches |
| 2 | **Overprocessering** | Mere bearbejdning end nødvendigt | Manuel behandling af noget der kunne auto-håndteres | Manuel curation af high-confidence jobs |
| 3 | **Fejl/Rework** | Defekter → reparation | Forkerte matches der skal laves om | Rejection reasons: mismatch, skill_level |
| 4 | **Uudnyttet talent** | Medarbejdere bruges forkert | Admin bruger tid på lavværdi-godkendelser | Projektleder reviewer matches manuelt |
| 5 | **Transport** | Unødvendig flytning | Unødvendig videreformidling af information | Manuel trigger af notifikationer |
| 6 | **Overproduktion** | Producerer mere end behov | System genererer matches der aldrig ses | AI matches der ikke reviewes |
| 7 | **Lager (Inventory)** | Ophobning | Akkumulering af ubehandlede items | Voksende staging-kø eller match-kø |

**Sådan bruger I det:** Lean er jeres *kategoriseringsværktøj* i USP 1. Når I finder flaskehalse i interviews eller data, klassificerer I dem efter waste-type. Det giver struktur og akademisk forankring.

### C.2 Procesoptimering: As-is / To-be (Davenport, 1993)

**Kerneidé:** Forstå nuværende proces (as-is), design forbedret proces (to-be), analysér gabet.

**I jeres projekt:**
- **As-is:** Processen *med* SoluTalents nuværende automatisering + manuelle trin (det I kortlægger)
- **To-be:** Processen med *yderligere* automatisering (jeres anbefalinger baseret på fund)
- **Gap:** Hvad forhindrer bevægelsen fra as-is til to-be? (→ USP 4, analyseret med TOE)

**OBS:** I har en fordel. De fleste studerende må forestille sig to-be. I kan pege på konkrete auto-approval gates, KPI-tærskler og automation-muligheder der allerede er delvist implementeret.

### C.3 TOE-frameworket (Tornatzky & Fleischer, 1990)

**Formål:** Forklarer hvilke faktorer der påvirker adoption og implementering af teknologisk innovation.

**Tre dimensioner:**

| Dimension | Spørgsmål i jeres kontekst | Eksempler på fund |
|---|---|---|
| **Technology** | Er AI-matchingen praecis nok til at stole paa? Er datakvaliteten tilstraekkelig? | KPI-maaleplan: Precision@5, override rate, enrichment confidence |
| **Organization** | Har teamet kompetencer? Ledelsesopbakning? Kultur? Ressourcer? | Tillid til AI, ændringsvillighed, antal admin-medarbejdere |
| **Environment** | Markedspres? Konkurrence? Regulering? Kundekrav? | Hastighed som konkurrenceparameter, GDPR, EU AI Act |

**Sådan bruger I det:** TOE er jeres *struktureringsværktøj* i USP 4. Interviewfund om barrierer og forudsætninger sorteres i T, O og E.

### C.4 Decision Support Systems (Keen & Scott Morton, 1978; Turban et al., 2014)

**Kerneidé:** IT-systemer der *understøtter* menneskelige beslutninger, ikke erstatter dem.

**Nøglebegreb: Human-in-the-loop**
- AI genererer forslag (match_requests med scores)
- Mennesket godkender/afviser (match review med rejection_reason)
- Feedback kan paavirke systemet (match_analytics er designet som del af laeringsmekanismen efter go-live)

**I jeres projekt:** SoluTalents match-pipeline er et klassisk DSS. Spørgsmålet (USP 3) er: *hvornår giver human-in-the-loop mening, og hvornår er det unødvendigt spild?*

**DSS-typologie (Turban):**
| Type | Beskrivelse | SoluTalent-eksempel |
|---|---|---|
| **Data-drevet** | Analyse af store datasæt | Embeddings-baseret semantisk søgning |
| **Model-drevet** | Beregningsmodeller | Scoring-pipeline med vægtede dimensioner |
| **Vidensbaseret** | Ekspertsystem/AI | GPT-4o-mini evaluering af match-fit |

### C.5 Hvordan teorierne samarbejder

```
USP 1 (Spildtid)          → LEAN WASTE klassificerer hvad der er spild
                                    ↓
USP 2 (AI-matchingens     → DAVENPORT strukturerer as-is vs. to-be
       effekt)                  + DSS forklarer matchingen som beslutningsstøtte
                                    ↓
USP 3 (Grænsen for        → DSS (human-in-the-loop): hvornår giver
       automatisering)       menneskelig vurdering merværdi?
                                    ↓
USP 4 (Forudsætninger)    → TOE strukturerer barrierer/enablers
                                    ↓
DISKUSSION                 → Alle fire teorier samles: "Lean identificerede
                             spildtid X (USP1), som AI adresserer via DSS
                             (USP2), men organisatoriske forudsætninger
                             (TOE, USP4) begrænser automatiseringen
                             (USP3)."
```

---

## DEL D: NØGLEBEGREBER OG DEFINITIONER

Brug disse definitioner konsistent gennem hele opgaven:

| Begreb | Definition i dette projekt | Kilde |
|---|---|---|
| **Spildtid (waste)** | Procestrin eller ventetid der ikke direkte skaber værdi for slutresultatet (konsulent allokeret til opgave) | Womack & Jones (2003), tilpasset |
| **Bemandingsproces** | Processen fra opgaveidentifikation til konsulentallokering (trin 1-8 i SoluTalent) | Projektets egen definition |
| **AI-matching** | Automatiseret kobling af konsulentprofiler med projektopgaver via SoluTalents seksstegs pipeline | Projektets egen definition |
| **Flaskehals** | Procestrin hvor kapacitet er lavere end efterspørgsel, hvilket skaber ophobning | Lean-terminologi |
| **Human-in-the-loop** | Designprincip hvor AI genererer forslag og menneske træffer endelig beslutning | Turban et al. (2014) |
| **Analytisk generaliserbarhed** | Generalisering fra case til teori (ikke fra sample til population) | Holm (2023); Kuada (2012) |
| **Artefaktanalyse** | Systematisk analyse af et teknologisk artefakt (software) som empirisk kilde | Projektets metode |

---

**Se også (kontekst på tværs):**
- `CASE_KNOWLEDGE.md` (workflow, scope, datamodel)
- `KVALITET_OG_SKRIVEGUIDE.md` (akademisk skrivning, kapitelstruktur)
- `UDDANNELSE_OG_PENSUM.md` (kildeprioritering Tier 1/2, pensumregler)
- `docs/PENSUM_VIDENSBASE.md` (dyb epistemologi, metodologi, klassikere, mixed methods)
- `Undervisningsmateriale og guides/README.md` (supplerende materiale)
