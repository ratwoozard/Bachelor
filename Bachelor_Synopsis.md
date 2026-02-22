# Synopsis – Bachelorprojekt, Økonomi & IT

**Titel:**
AI-automatisering i bemandingsprocessen: Et pragmatisk casestudie af spildtidsreduktion hos Support Solutions ApS

**Forfattere:** Benjamin & Luka
**Uddannelse:** Bachelor i Økonomi & IT
**Casevirksomhed:** Support Solutions ApS (SS)
**Vejleder:** [Vejledernavn]
**Uddannelsesinstitution:** KEA – Københavns Erhvervsakademi
**Dato:** Februar 2026

**Vejledergodkendelse:** Deadline for anmodning til vejleder 16. februar 2026 kl. 10.00.

---

## 1. Indledning (den omvendte trekant)

### Makro: Branchen og tendensen

Digitalisering og kunstig intelligens transformerer i stigende grad måden, virksomheder allokerer ressourcer på. Særligt inden for videns- og konsulentbranchen, hvor den rette match mellem konsulent og opgave er direkte knyttet til omsætning og kundetilfredshed, er potentialet for AI-baseret effektivisering betydeligt.

### Meso: IT-konsulenthuse og matchudfordringen

For mindre og mellemstore IT-konsulenthuse er bemandingsprocessen ofte kendetegnet ved manuelle, erfaringsbaserede beslutninger. Konsulenter matches til opgaver baseret på personligt kendskab, uformelle vurderinger og ad hoc-processer. Denne praksis er sårbar over for skalering, videnstab ved personaleomsætning og skaber spildtid i form af langsomme matchforløb, mismatch og manuelle gentagelsesopgaver.

### Mikro: Support Solutions og SoluTalent

Support Solutions ApS er et dansk IT-konsulenthus, der har adresseret denne udfordring ved at udvikle SoluTalent – en AI-drevet talentplatform, som automatiserer matching af freelancekonsulenter til projektopgaver. Platformen omfatter bl.a. en seksstegs AI-matchingpipeline (prefiltering, lokation, gate, AI-scoring, ranking, persistering), automatisk CV-parsing, kompetenceekstraktion via embeddings og et KPI-dashboard med metrikker som Precision@5, Override Rate og gennemsnitlig beslutningstid.

### Problemidentifikation (tragten snævrer)

Selvom SoluTalent repræsenterer en konkret digitaliseringsløsning, mangler der en systematisk analyse af, *hvor* i bemandingsprocessen spildtiden faktisk opstår, i hvilket omfang AI-automatiseringen adresserer den, og hvilke organisatoriske forudsætninger der skal være opfyldt for at realisere potentialet. Denne undersøgelse udfylder det hul.

---

## 2. Problemformulering (XYZ-princippet)

> **Hvordan påvirker AI-baseret automatisering spildtid i bemandingsprocessen fra opgaveidentifikation til konsulentallokering hos Support Solutions ApS – og i hvilket omfang kan de resterende manuelle procestrin reduceres eller yderligere automatiseres?**

| | Indhold |
|---|---|
| **X – Hvad undersøges** | Spildtid i bemandingsprocessen og AI-automatiseringens påvirkning heraf; muligheder for at reducere eller yderligere automatisere resterende manuelle trin |
| **Y – Hvordan undersøges det** | Gennem et pragmatisk, eksplorativt casestudie med artefaktanalyse (SoluTalent-platformen), semistrukturerede interviews og proceskortlægning |
| **Z – Hvorfor undersøges det** | For at forstå hvordan et mindre IT-konsulenthus konkret kan anvende AI til at reducere processpild og styrke ressourceudnyttelsen – og hvilke betingelser det kræver |

### Underspørgsmål

1. **As-is:** Hvor opstår spildtid i as-is-processen, og hvad er årsagerne?
2. **Struktur/arbejdsdeling:** Hvilke procestrin automatiserer SoluTalent, og hvilke forbliver manuelle – og hvorfor?
3. **Effekt og trade-offs:** Hvilke indikatorer ses i spildtidsmål (fx beslutningstid, time-to-match, override rate, rejection reasons) – og hvilke trade-offs opstår?
4. **Forudsætninger:** Hvilke TOE-forudsætninger kræves for at reducere de resterende manuelle trin?

---

## 3. Afgrænsning

- **Proces:** Processen analyseres fra *staging_imported* til *matched* i SoluTalent (2025–2026). Jobsourcing/ekstern rekruttering, onboarding, kontrakt, løn/fakturering er out of scope.
- **Case og tid:** Udelukkende Support Solutions ApS og SoluTalent-platformen. Fund diskuteres i forhold til teori med henblik på analytisk generaliserbarhed (Holm, 2023; Kuada, 2012), men der generaliseres ikke statistisk til branchen.
- **Teknisk:** AI og automatisering analyseres fra et forretnings- og organisationsperspektiv. Den bagvedliggende tekniske implementering (GPT-modeller, embeddingalgoritmer, Supabase-arkitektur) beskrives kontekstuelt, men selve ML-udviklingsprocessen er ikke genstand for analyse.
- **Etik/data:** Projektet analyserer ikke personhenførbare data på individniveau i rapporten; data anvendes aggregeret/anonymiseret, og GDPR/bias behandles som kontekstuel ramme. Der foreligger samtykke fra virksomheden til brug af platformen som empiri.

---

## 4. Videnskabsteoretisk position: Pragmatisme

Projektet anlægger en **pragmatisk** videnskabsteoretisk position med forankring i 7. semesters metodepensum (Holm, 2023; Kuada, 2012), suppleret af Saunders (2023):

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
| **Lean / Waste-teori (Womack & Jones)** | Definerer og kategoriserer spildtid (de 7/8 spildtyper tilpasset vidensarbejde: ventetid, overprocessering, dobbeltarbejde, fejl/rework, uudnyttet talent). (Anvendes som analytiske kategorier til mapping af spild i vidensarbejde.) | USP 1: Kortlægning af spildtid |
| **TOE-frameworket (Tornatzky & Fleischer)** | Analyse af teknologiske, organisatoriske og miljømæssige forudsætninger for AI-adoption | USP 4: Forudsætninger |
| **Procesoptimering / as-is → to-be (Davenport)** | Strukturerer analysen af nuværende vs. AI-understøttet workflow | USP 1 + USP 2 |
| **Decision Support Systems (Keen & Scott Morton / Turban et al.)** | Ramme for at forstå AI-matching som beslutningsstøtte snarere end beslutningserstatning | USP 2 + USP 3 |

---

## 6. Metode og empiridesign

### Forskningsdesign

Eksplorativt **single-case studie** med **indlejret analyseenhed** (embedded unit), metodisk forankret i Holm (2023), Kuada (2012) og Saunders (2023): SoluTalent-platformen som teknologisk artefakt inden for casevirksomheden Support Solutions ApS. *Embedded unit:* bemandingsworkflowet i SoluTalent (*staging_imported* → *matched*) som delproces i SS' ressourceallokering.

### Empirikilder (tre ben)

| Kilde | Hvad | Hvordan | Kobling |
|---|---|---|---|
| **1. Semistrukturerede interviews (4–6 stk.)** | Direktører, partnere, projektledere hos SS | Interviewguide baseret på operationaliserede begreber (spildtid-indikatorer, beslutningspraksis, oplevede barrierer) | USP 1, 3, 4 |
| **2. Artefaktanalyse: SoluTalent-platformen** | Kodebase, AI-matchingpipeline, datamodeller, KPI-dashboard, workflow-states | Systematisk gennemgang af platformens procesunderstøttelse, mapping af automatiserede vs. manuelle trin, analyse af KPI-strukturen | USP 2, 3 |
| **3. Dokumentanalyse** | Procesbeskrivelser, matchdata-strukturer, analytics-log (anonymiseret) | Sekundær validering af interviewudsagn | USP 1, 2 |

### Operationalisering af "spildtid" (Lean-kategorier + målelogik)

| Indikator | Definition / målelogik | Datakilde |
|---|---|---|
| **Ventetid** | Tid mellem status-skift (queue time mellem trin) | Artefakt (timestamps i datamodel) + interview |
| **Rework/fejl** | Override rate + rejection_reason-kategorier | Artefakt (match_analytics) |
| **Overprocessering** | Antal berøringer pr. job/match (manuelle touchpoints) | Artefakt (workflow-mapping) |
| **Time-to-match** | Fra opgave oprettet til konsulent allokeret | Artefakt (projekt-states) + interview |
| **Mismatch-rate** | Andel matches der overrules, afvises eller re-allokeres | Artefakt (match_analytics: rejection_reason, override_rate) + interview |

For hver indikator verificeres datatilgængelighed (timestamps/fields) i SoluTalents datamodel; hvor data ikke findes, suppleres med interview og dokumentation.

### Analysestrategi

1. **Tematisk kodning** (Kuada, 2012; Saunders, 2023) af interviewdata med foruddefinerede temaer fra Lean-waste-kategorier + emergente temaer.
2. **Proceskortlægning** af as-is (før/uden AI) og to-be (med SoluTalent) baseret på artefaktanalyse og interviews.
3. **Krydsanalyse:** Interview-fund sammenholdes med artefaktets faktiske funktionalitet – oplever ledelsen de fordele, som platformen teknisk muliggør?
4. **TOE-analyse:** Fund struktureres i teknologiske, organisatoriske og miljømæssige forudsætninger.

### Validitet og troværdighed

| Kvalitetskriterium | Håndtering |
|---|---|
| **Triangulering** | Tre empirikilder (interview + artefakt + dokumenter) krydstjekker fund |
| **Informant-validering** | Nøglecitater og procesdiagrammer præsenteres for informanter |
| **Transparent interviewguide** | Vedlægges som bilag, baseret på operationaliserede begreber |
| **Bias-refleksion** | Begge forfattere har været praktikanter i SS og har udviklet SoluTalent → eksplicit positioneringsdiskussion i metodeafsnit. Modtræk: (1) Negativ-case analyse: opsøg cases hvor AI fejler (høje overrides, bestemte rejection reasons). (2) Kilde-triangulering med konflikt: når interview siger "AI sparer tid", skal platformdata understøtte det – ellers forklares afvigelsen. (3) Informantspredning: mindst én informant der ikke er tæt på SoluTalent i daglig drift (reduktion af halo-effekt). |
| **Kædebevis (chain of evidence)** | Fra problemformulering → operationalisering → interviewguide → data → fund → konklusion |

### Figurer og diagrammer

Procesdiagrammer (as-is / to-be) for bemandingsworkflowet og konceptuelt framework (inputs → AI/DSS → beslutning → outcomes) findes i `Solutalent CODE CONTEXT/figures/` (process_as_is.mmd, process_to_be.mmd, framework.mmd; eksport som PNG/SVG i `figures/export/`). Rapportens analyse bruger disse eller en scope-tilpasset variant (*staging_imported* → *matched*). AI-pipeline og C4-kontekst anvendes i artefaktbeskrivelsen (jf. FIGURE_CAPTIONS.md i CODE CONTEXT). **Research structure-diagram vedlægges som Bilag A (jf. eksamenskrav).** Overblik over forskningsstrukturen er beskrevet i FIGUR_REFERENCE_SYNOPSIS.md; Mermaid-kildefil: `Solutalent CODE CONTEXT/figures/research_structure.mmd`.

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
| 4.3 Målbar effekt og trade-offs | Evaluering ud fra spildtidsindikatorer (KPI) + informantoplevelser + trade-offs | 6–8 |
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
| 5–7 | Kodning og analyse af empiri, proceskortlægning (as-is / to-be), udtræk/validering af match_analytics (override, rejection reasons, decision time) |
| 7–9 | Skriveperiode: teori, metode, analyse, diskussion |
| 9–10 | Informant-validering, revision, korrektur |
| 10–11 | Færdiggørelse, formatering, aflevering |

---

## 9. Foreløbig litteraturliste

*Metode og videnskabsteori (7. semesters kernepensum):*
- Holm, A. B. (2023). *Videnskab i virkeligheden – En grundbog i videnskabsteori* (3. udg.). Samfundslitteratur.
- Kuada, J. (2012). *Research Methodology: A Project Guide for University Students* (1st ed.). Samfundslitteratur.
- Saunders, M. N. K., Lewis, P. & Thornhill, A. (2023). *Research Methods for Business Students* (9th ed.). Pearson.

*Projektspecifik teori (domæne):*
- Davenport, T. H. (1993). *Process Innovation: Reengineering Work through Information Technology*. Harvard Business School Press.
- Keen, P. G. W. & Scott Morton, M. S. (1978). *Decision Support Systems: An Organizational Perspective*. Addison-Wesley.
- Tornatzky, L. G. & Fleischer, M. (1990). *The Processes of Technological Innovation*. Lexington Books.
- Turban, E., Sharda, R. & Delen, D. (2014). *Decision Support and Business Intelligence Systems* (10th ed.). Pearson.
- Womack, J. P. & Jones, D. T. (2003). *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press.
