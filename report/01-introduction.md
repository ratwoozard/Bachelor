# 1. Indledning

## 1.1 Problemfelt – Den omvendte trekant

### Makro: Digitalisering og AI i rekrutteringsbranchen

Digitalisering og kunstig intelligens transformerer i stigende grad måden, virksomheder allokerer ressourcer på. I videns- og konsulentbranchen, hvor den rette match mellem konsulent og opgave er direkte knyttet til omsætning og kundetilfredshed, er potentialet for AI-baseret effektivisering betydeligt. Automatisering af rutineopgaver, intelligent matching og datadrevet beslutningsstøtte repræsenterer konkrete muligheder for at reducere processpild og øge ressourceudnyttelsen.

### Meso: IT-konsulenthuse og matchudfordringen

For mindre og mellemstore IT-konsulenthuse er bemandingsprocessen ofte kendetegnet ved manuelle, erfaringsbaserede beslutninger. Konsulenter matches til opgaver baseret på personligt kendskab, uformelle vurderinger og ad hoc-processer. Denne praksis er sårbar over for skalering, videnstab ved personaleomsætning og skaber spildtid i form af langsomme matchforløb, mismatch og manuelle gentagelsesopgaver.

Selvom større virksomheder har kapacitet til at investere i omfattende HR-systemer, mangler SMV-segmentet ofte ressourcer til sådanne løsninger. Det skaber en udfordring: hvordan kan mindre konsulenthuse realisere fordelene ved AI-automatisering uden at skulle gennemføre kostbare implementeringer?

### Mikro: Support Solutions ApS og SoluTalent

Support Solutions ApS er et dansk IT-konsulenthus, der har adresseret denne udfordring ved at udvikle SoluTalent – en AI-drevet talentplatform, som automatiserer dele af processen for matching af freelancekonsulenter til projektopgaver. Platformen omfatter en række funktioner:

- **AI-matchingpipeline** med prefiltering, lokationsvurdering, regelbaseret scoring, AI-evaluering, ranking og persistering
- **Automatisk CV-parsing** med kompetenceekstraktion via embeddings
- **Workflow-automatisering** med auto-approval gates baseret på datakvalitet og tillid
- **KPI-dashboard** med metrikker som Precision@5, Override Rate og gennemsnitlig beslutningstid

Platformen opererer på et sæt workflow-states fra jobimport til konsulentallokering, hvor både automatiske og manuelle trin indgår.

### Problemidentifikation – Tragten snævrer

Selvom SoluTalent repræsenterer en konkret digitaliseringsløsning, mangler der en systematisk analyse af, *hvor* i bemandingsprocessen spildtiden faktisk opstår, i hvilket omfang AI-automatiseringen adresserer den, og hvilke organisatoriske forudsætninger der skal være opfyldt for at realisere potentialet.

Eksisterende litteratur om Lean i vidensarbejde (Womack & Jones, 2003; Staats & Upton, 2011) tilbyder værktøjer til at kategorisere spildtid, men ofte i generisk form uden konkret kobling til AI-baseret beslutningsstøtte. DSS-litteraturen (Keen & Scott Morton, 1978; Turban et al., 2014) beskriver, hvordan IT-systemer kan understøtte beslutninger, men adresserer sjældent spørgsmålet om *hvor grænsen går* mellem nyttig automatisering og nødvendig menneskelig vurdering i en specifik processammenhæng.

TOE-frameworket (Tornatzky & Fleischer, 1990) anvendes hyppigt til at forklare teknologiadoption generelt, men mindre ofte til at belyse, hvilke konkrete forudsætninger der skal være opfyldt for at reducere *resterende* manuelle procestrin i en delvist automatiseret workflow.

Dette projekt udfylder dette hul ved at kombinere en konkret artefaktanalyse (SoluTalent-platformen) med en systematisk kortlægning af spildtid i bemandingsprocessen, evaluering af AI-matchingens effekt og en TOE-baseret analyse af forudsætninger for yderligere automatisering.

---

## 1.2 Problemformulering

> **Hvordan påvirker AI-baseret automatisering spildtid i bemandingsprocessen fra opgaveidentifikation til konsulentallokering hos Support Solutions ApS – og i hvilket omfang kan de resterende manuelle procestrin reduceres eller yderligere automatiseres?**

### XYZ-princippet

| Komponent | Indhold |
|-----------|---------|
| **X – Hvad undersøges** | Spildtid i bemandingsprocessen og AI-automatiseringens påvirkning heraf; muligheder for at reducere eller yderligere automatisere resterende manuelle trin |
| **Y – Hvordan undersøges det** | Gennem et pragmatisk, eksplorativt casestudie med artefaktanalyse (SoluTalent-platformen), semistrukturerede interviews og proceskortlægning |
| **Z – Hvorfor undersøges det** | For at forstå hvordan et mindre IT-konsulenthus konkret kan anvende AI til at reducere processpild og styrke ressourceudnyttelsen – og hvilke betingelser det kræver |

### Underspørgsmål

Problemformuleringen operationaliseres gennem fire underspørgsmål:

1. **As-is: Hvor opstår spildtid i nuværende proces, og hvad er årsagerne?**
   - Kortlægning af SoluTalent-arbejdsgangen med fokus på de tre primære flaskehalse: manuel curation (trin 4), match review (trin 6) og notifikationstrigger (trin 7)
   - Lean-kategorisering af identificeret spildtid

2. **Struktur/arbejdsdeling: Hvilke procestrin automatiserer SoluTalent, og hvilke forbliver manuelle – og hvorfor?**
   - Systematisk mapping af auto-approval gates, AI-pipeline og manuelle beslutningspunkter
   - Analyse af human-in-the-loop som designprincip

3. **Effekt og trade-offs: Hvilke indikatorer ses i spildtidsmål, og hvilke trade-offs opstår?**
   - Evaluering baseret på KPI-struktur (Precision@5, override rate, beslutningstid, rejection reasons)
   - Analyse af trade-offs mellem automatisering og menneskelig kontrol

4. **Forudsætninger: Hvilke TOE-forudsætninger kræves for at reducere de resterende manuelle trin?**
   - TOE-struktureret analyse af teknologiske, organisatoriske og miljømæssige barrierer/enablers

---

## 1.3 Afgrænsning

Projektet afgrænses efter følgende dimensioner:

### Proces
Processen analyseres fra `staging_imported` til `matched` i SoluTalent-platformen (2025–2026). Dette omfatter:
- Trin 1: Job Import (automatisk)
- Trin 2: AI Enrichment (automatisk)
- Trin 3: Auto-Approval Gate (automatisk)
- **Trin 4: Manuel Curation** (manuelt – flaskehals)
- Trin 5: AI Matching (automatisk)
- **Trin 6: Match Review** (manuelt – flaskehals)
- **Trin 7: Notifikation til Freelancer** (manuelt – flaskehals)
- Trin 8: Bud og Allokering (delvist manuelt)

**Uden for scope:**
- Jobsourcing og ekstern rekruttering (før import)
- Onboarding af freelancere
- Kontrakthåndtering, signering og fakturering (efter allokering)
- Løn- og betalingsprocesser

### Case og tid
Undersøgelsen er et single-case studie af Support Solutions ApS og SoluTalent-platformen. Fund diskuteres i forhold til teori med henblik på analytisk generaliserbarhed (Holm, 2023; Kuada, 2012), men der generaliseres ikke statistisk til branchen.

Tidsrammen er platformens tilstand i perioden 2025–2026, med særligt fokus på de seneste 30 dages data for KPI-evaluering (hvor tilgængeligt).

### Teknisk
AI og automatisering analyseres fra et forretnings- og organisationsperspektiv. Den bagvedliggende tekniske implementering (GPT-modeller, embeddingalgoritmer, Supabase-arkitektur) beskrives kontekstuelt for forståelse af artefaktets funktionalitet, men selve ML-udviklingsprocessen og algoritmeoptimering er ikke genstand for analyse.

### Etik og data
Projektet analyserer ikke personhenførbare data på individniveau i rapporten; data anvendes aggregeret og anonymiseret. GDPR og potentiel bias behandles som kontekstuelle rammer for diskussion. Der foreligger samtykke fra virksomheden til brug af platformen som empiri og til interview med nøglepersoner.

---

## 1.4 Læsevejledning

Rapporten er struktureret i seks kapitler:

- **Kapitel 1 (Indledning)** præsenterer problemfeltet, problemformuleringen med underspørgsmål og afgrænsning
- **Kapitel 2 (Metode)** redegør for den videnskabsteoretiske position (pragmatisme), casedesign, empirikilder, operationalisering af spildtid og validitet
- **Kapitel 3 (Teori)** gennemgår Lean waste, Davenport's procesoptimering, DSS/human-in-the-loop og TOE-frameworket
- **Kapitel 4 (Analyse)** besvarer de fire underspørgsmål gennem systematisk analyse af spildtid (4.1), automatisering vs. manuelle trin (4.2), KPI-indikatorer (4.3) og TOE-forudsætninger (4.4)
- **Kapitel 5 (Diskussion)** sammenfatter fund, diskuterer teoretiske implikationer, begrænsninger og praktiske anbefalinger
- **Kapitel 6 (Konklusion)** besvarer problemformuleringen, opsummerer underspørgsmål og perspektiverer
