# Synopsis – Bachelorprojekt, Økonomi & IT

**Titel:**
AI-automatisering i rekrutterings- og bemandingsprocessen: Et pragmatisk casestudie af spildtidsreduktion hos Support Solutions ApS

**Forfattere:** Benjamin & Luka
**Uddannelse:** Bachelor i Økonomi & IT
**Casevirksomhed:** Support Solutions ApS (SS)

---

## 1. Indledning (den omvendte trekant)

### Makro: Branchen og tendensen

Digitalisering og kunstig intelligens transformerer i stigende grad måden, virksomheder rekrutterer og allokerer ressourcer på. Ifølge McKinsey (2023) vurderer 75 % af virksomheder, at AI vil ændre deres talentprocesser fundamentalt inden for fem år. Særligt inden for videns- og konsulentbranchen, hvor den rette match mellem konsulent og opgave er direkte knyttet til omsætning og kundetilfredshed, er potentialet for AI-baseret effektivisering betydeligt.

### Meso: IT-konsulenthuse og matchudfordringen

For mindre og mellemstore IT-konsulenthuse er bemandingsprocessen ofte kendetegnet ved manuelle, erfaringsbaserede beslutninger. Konsulenter matches til opgaver baseret på personligt kendskab, uformelle vurderinger og ad hoc-processer. Denne praksis er sårbar over for skalering, videnstab ved personaleomsætning og skaber spildtid i form af langsomme matchforløb, mismatch og manuelle gentagelsesopgaver.

### Mikro: Support Solutions og SoluTalent

Support Solutions ApS er et dansk IT-konsulenthus, der har adresseret denne udfordring ved at udvikle SoluTalent – en AI-drevet talentplatform, som automatiserer matching af freelancekonsulenter til projektopgaver. Platformen omfatter bl.a. en seksstegs AI-matchingpipeline (prefiltering, lokation, gate, AI-scoring, ranking, persistering), automatisk CV-parsing, kompetenceekstraktion via embeddings og et KPI-dashboard med metrikker som Precision@5, Override Rate og gennemsnitlig beslutningstid.

### Problemidentifikation (tragten snævrer)

Selvom SoluTalent repræsenterer en konkret digitaliseringsløsning, mangler der en systematisk analyse af, *hvor* i den samlede rekrutterings- og bemandingsproces spildtiden faktisk opstår, i hvilket omfang AI-automatiseringen adresserer denne spildtid, og hvilke organisatoriske forudsætninger der skal være opfyldt for at realisere potentialet. Denne undersøgelse udfylder det hul.

---

## 2. Problemformulering (XYZ-princippet)

> **Hvordan kan AI-baseret automatisering påvirke spildtid i rekrutterings- og bemandingsprocessen hos Support Solutions ApS?**

| | Indhold |
|---|---|
| **X – Hvad undersøges** | Spildtid i rekrutterings- og bemandingsprocessen og AI-automatiseringens påvirkning heraf |
| **Y – Hvordan undersøges det** | Gennem et pragmatisk, eksplorativt casestudie med artefaktanalyse (SoluTalent-platformen), semistrukturerede interviews og proceskortlægning |
| **Z – Hvorfor undersøges det** | For at forstå hvordan et mindre IT-konsulenthus konkret kan anvende AI til at reducere processpild og styrke ressourceudnyttelsen – og hvilke betingelser det kræver |

### Underspørgsmål

1. **As-is:** Hvor i den nuværende rekrutterings- og bemandingsproces opstår spildtid, og hvad er de primære årsager?
2. **Løsningsrum:** Hvilke dele af processen adresseres af AI-automatisering i SoluTalent, og hvilke kræver fortsat menneskelig vurdering?
3. **Evaluering:** Hvilke fordele og begrænsninger vurderes der at være ved AI-automatiseringen i forhold til spildtidsreduktion?
4. **Forudsætninger:** Hvilke organisatoriske, teknologiske og kompetencemæssige forudsætninger skal være til stede for at realisere potentialet?

---

## 3. Afgrænsning

- **Proces:** Fra opgaveidentifikation til konsulentallokering (match). Onboarding, løbende HR, lønhåndtering og ekstern sourcing via tredjepartsplatforme behandles ikke.
- **Case og tid:** Udelukkende Support Solutions ApS og SoluTalent-platformen i perioden 2025–2026. Fund diskuteres i forhold til teori med henblik på analytisk generaliserbarhed (Yin, 2018), men der generaliseres ikke statistisk til branchen.
- **Teknisk:** AI og automatisering analyseres fra et forretnings- og organisationsperspektiv. Den bagvedliggende tekniske implementering (GPT-modeller, embeddingalgoritmer, Supabase-arkitektur) beskrives kontekstuelt, men selve ML-udviklingsprocessen er ikke genstand for analyse.
- **Etik/data:** Projektet behandler ikke personhenførbare data direkte. GDPR-compliance og algoritmisk bias diskuteres som kontekstuel ramme, ikke som selvstændigt forskningsfokus. Der foreligger samtykke fra virksomheden til brug af platformen som empiri.

---

## 4. Videnskabsteoretisk position: Pragmatisme

Projektet anlægger en **pragmatisk** videnskabsteoretisk position (Saunders et al., 2019; Creswell & Creswell, 2018):

| Dimension | Pragmatisk position i dette projekt |
|---|---|
| **Ontologi** | Virkeligheden er kompleks og flertydig; vi fokuserer på det, der har praktisk konsekvens for problemstillingen |
| **Epistemologi** | Viden vurderes på sin anvendelighed; vi kombinerer datakilder efter hvad der bedst besvarer spørgsmålet |
| **Slutningsform** | Abduktiv – vekslen mellem teori og empiri; vi starter med observeret praksis, inddrager teori til analyse og vender tilbage med nuancerede fund |
| **Metodevalg** | Metodepluralisme: den pragmatiske position legitimerer brug af både kvalitative (interviews) og artefaktbaserede (platformanalyse) tilgange i samme studie |

**Begrundelse:** Pragmatismen er valgt, fordi problemformuleringen er handlingsorienteret ("hvordan kan…påvirke") og fordi empirien har en naturlig dualitet: vi har både *menneskers oplevelser* (interviews med direktører og partnere) og et *konkret digitalt artefakt* (SoluTalent med kode, datamodeller og KPI'er). Pragmatismen giver os frihed til at bruge begge dele uden at tvinge empirien ind i en ren positivistisk eller fortolkende ramme.

---

## 5. Teoretisk ramme

| Teori/framework | Rolle i analysen | Kobling til underspørgsmål |
|---|---|---|
| **Lean / Waste-teori (Womack & Jones)** | Definerer og kategoriserer spildtid (de 7/8 spildtyper tilpasset vidensarbejde: ventetid, overprocessering, dobbeltarbejde, fejl/rework, uudnyttet talent) | USP 1: Kortlægning af spildtid |
| **TOE-frameworket (Tornatzky & Fleischer)** | Analyse af teknologiske, organisatoriske og miljømæssige forudsætninger for AI-adoption | USP 4: Forudsætninger |
| **Procesoptimering / as-is → to-be (Davenport)** | Strukturerer analysen af nuværende vs. AI-understøttet workflow | USP 1 + USP 2 |
| **Decision Support Systems (Keen & Scott Morton / Turban et al.)** | Ramme for at forstå AI-matching som beslutningsstøtte snarere end beslutningserstatning | USP 2 + USP 3 |

---

## 6. Metode og empiridesign

### Forskningsdesign

Eksplorativt **single-case studie** (Yin, 2018) med **indlejret analyseenhed** (embedded unit): SoluTalent-platformen som teknologisk artefakt inden for casevirksomheden Support Solutions ApS.

### Empirikilder (tre ben)

| Kilde | Hvad | Hvordan | Kobling |
|---|---|---|---|
| **1. Semistrukturerede interviews (4–6 stk.)** | Direktører, partnere, projektledere hos SS | Interviewguide baseret på operationaliserede begreber (spildtid-indikatorer, beslutningspraksis, oplevede barrierer) | USP 1, 3, 4 |
| **2. Artefaktanalyse: SoluTalent-platformen** | Kodebase, AI-matchingpipeline, datamodeller, KPI-dashboard, workflow-states | Systematisk gennemgang af platformens procesunderstøttelse, mapping af automatiserede vs. manuelle trin, analyse af KPI-strukturen | USP 2, 3 |
| **3. Dokumentanalyse** | Procesbeskrivelser, matchdata-strukturer, analytics-log (anonymiseret) | Sekundær validering af interviewudsagn | USP 1, 2 |

### Operationalisering af "spildtid"

| Indikator | Definition | Datakilde |
|---|---|---|
| **Time-to-match** | Dage fra opgave oprettet til konsulent allokeret | Artefakt (projekt-states) + interview |
| **Antal manuelle procestrin** | Trin der kræver menneskelig handling i workflowet | Artefakt (workflow-mapping) |
| **Ventetid mellem trin** | Tid opgaver ligger stille mellem statusskift | Artefakt (timestamps i datamodel) + interview |
| **Mismatch-rate** | Andel matches der overrules, afvises eller re-allokeres | Artefakt (match_analytics: rejection_reason, override_rate) + interview |

### Analysestrategi

1. **Tematisk kodning** (Braun & Clarke, 2006) af interviewdata med foruddefinerede temaer fra Lean-waste-kategorier + emergente temaer.
2. **Proceskortlægning** af as-is (før/uden AI) og to-be (med SoluTalent) baseret på artefaktanalyse og interviews.
3. **Krydsanalyse:** Interview-fund sammenholdes med artefaktets faktiske funktionalitet – oplever ledelsen de fordele, som platformen teknisk muliggør?
4. **TOE-analyse:** Fund struktureres i teknologiske, organisatoriske og miljømæssige forudsætninger.

### Validitet og troværdighed

| Kvalitetskriterium | Håndtering |
|---|---|
| **Triangulering** | Tre empirikilder (interview + artefakt + dokumenter) krydstjekker fund |
| **Informant-validering** | Nøglecitater og procesdiagrammer præsenteres for informanter |
| **Transparent interviewguide** | Vedlægges som bilag, baseret på operationaliserede begreber |
| **Bias-refleksion** | Begge forfattere har været praktikanter i SS og har udviklet SoluTalent → eksplicit positioneringsdiskussion i metodeafsnit. Risikoen håndteres ved at inkludere informanter vi ikke arbejdede direkte med, og ved at lade artefaktet "tale for sig selv" som supplerende datakilde |
| **Kædebevis (chain of evidence)** | Fra problemformulering → operationalisering → interviewguide → data → fund → konklusion |

---

## 7. Foreløbig disposition

| Kapitel | Indhold | Ca. sider |
|---|---|---|
| **1. Indledning** | Omvendt trekant: branche → udfordring → case → problemformulering + afgrænsning | 5–7 |
| **2. Metode** | Pragmatisme, casestudie-design, empirikilder, operationalisering, validitet, bias-refleksion, etik/GDPR | 8–10 |
| **3. Teori** | Lean/waste, procesoptimering (Davenport), TOE, DSS – med eksplicit kobling til analysens struktur | 8–10 |
| **4. Empiri og analyse** | |
| 4.1 As-is: Spildtid i nuværende proces | Proceskortlægning + interviewfund om flaskehalse og årsager | 8–10 |
| 4.2 SoluTalents rolle: Automatiserede vs. manuelle trin | Artefaktanalyse af pipeline, KPI-struktur, workflow-mapping | 8–10 |
| 4.3 Fordele og begrænsninger | Evaluering ud fra indikatorer + informantoplevelser | 6–8 |
| 4.4 Organisatoriske forudsætninger | TOE-struktureret analyse af barrierer og enablers | 5–7 |
| **5. Diskussion** | Sammenfatning af fund, kritisk refleksion, begrænsninger ved studiet, teoretisk bidrag | 5–7 |
| **6. Konklusion** | Svar på problemformulering + underspørgsmål, perspektivering | 3–4 |
| | **Total** | **~56–63 sider** |

---

## 8. Foreløbig tidsplan

| Uge | Aktivitet |
|---|---|
| 1–2 | Endelig problemformulering, litteratursøgning, interviewguide-design |
| 3–4 | Gennemførelse af interviews (4–6 stk.), transskribering |
| 4–5 | Artefaktanalyse: systematisk gennemgang af SoluTalent (workflow, pipeline, KPI'er) |
| 5–7 | Kodning og analyse af empiri, proceskortlægning (as-is / to-be) |
| 7–9 | Skriveperiode: teori, metode, analyse, diskussion |
| 9–10 | Informant-validering, revision, korrektur |
| 10–11 | Færdiggørelse, formatering, aflevering |

---

## 9. Foreløbig litteraturliste

- Braun, V. & Clarke, V. (2006). Using thematic analysis in psychology. *Qualitative Research in Psychology*, 3(2), 77–101.
- Creswell, J. W. & Creswell, J. D. (2018). *Research Design: Qualitative, Quantitative, and Mixed Methods Approaches* (5th ed.). Sage.
- Davenport, T. H. (1993). *Process Innovation: Reengineering Work through Information Technology*. Harvard Business School Press.
- Keen, P. G. W. & Scott Morton, M. S. (1978). *Decision Support Systems: An Organizational Perspective*. Addison-Wesley.
- McKinsey Global Institute (2023). *The State of AI in 2023: Generative AI's Breakout Year*.
- Saunders, M., Lewis, P. & Thornhill, A. (2019). *Research Methods for Business Students* (8th ed.). Pearson.
- Tornatzky, L. G. & Fleischer, M. (1990). *The Processes of Technological Innovation*. Lexington Books.
- Turban, E., Sharda, R. & Delen, D. (2014). *Decision Support and Business Intelligence Systems* (10th ed.). Pearson.
- Womack, J. P. & Jones, D. T. (2003). *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press.
- Yin, R. K. (2018). *Case Study Research and Applications: Design and Methods* (6th ed.). Sage.
