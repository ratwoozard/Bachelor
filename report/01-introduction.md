# 1. Introduktion

Introduktionskapitlet er struktureret efter guiden til første leverance: **Indledning** (kort rammesætning og branchekontekst), **Problemanalyse** (evidensbaseret virksomheds- og casekontekst) og **Problemformulering inkl. afgrænsning** (HV-spørgsmål og tydelig afgrænsning). Samlet mål: op til ca. 2,5 A4-sider.

---

## 1.1 Indledning

Formålet med indledningen er at skabe en kort rammesætning af projektet og lede læseren fra det generelle felt ind i problemområdet, så problemet senere kan forankres i en konkret virksomheds- og case-sammenhæng.

**Generel kontekstualisering.** Digitalisering og kunstig intelligens transformerer i stigende grad måden, hvorpå virksomheder allokerer menneskelige ressourcer. I videns- og konsulentbranchen er den rette match mellem konsulent og opgave direkte knyttet til omsætning og kundetilfredshed, og potentialet for AI-baseret effektivisering er betydeligt. Fokus trækkes herefter ind på branchen: IT-konsulenthuse og bemandingsprocessen.

**Branchebeskrivelse.** For mindre og mellemstore IT-konsulenthuse (SMV) er bemandingsprocessen ofte kendetegnet ved manuelle, erfaringsbaserede beslutninger: konsulenter matches til opgaver ud fra personligt kendskab, uformelle vurderinger og ad hoc-processer. Større virksomheder har ofte kapacitet til omfattende HR- og rekrutteringssystemer, mens SMV-segmentet typisk har begrænsede ressourcer til sådanne investeringer. Konkurrenceparameteren i markedet er ofte hastighed og præcision i matching af konsulent til opgave.

**Problembeskrivelse på brancheniveau.** Den manuelle praksis er sårbar over for skalering, videnstab ved personaleomsætning og skaber spildtid i form af langsomme matchforløb, mismatch og gentagelsesopgaver. Udfordringen for branchen er dermed: hvordan kan mindre konsulenthuse realisere fordelene ved AI-automatisering uden at skulle gennemføre disproportioneret store implementeringer?

**Best practice og tendenser.** I branchen ses en stigende brug af AI til job-enrichment, CV-parsing og semantisk matching, ofte med menneskelig beslutning bevidst beholdt i loop (human-in-the-loop). Litteraturen om Lean i vidensarbejde (Womack & Jones, 2003; Staats & Upton, 2011) og beslutningsstøttesystemer (Keen & Scott Morton, 1978; Turban et al., 2014) tilbyder rammer til at forstå spildtid og grænsen mellem automatisering og menneskelig vurdering. Denne indledning skaber referencerammen, som virksomheden i problemanalysen kan sammenlignes med.

---

## 1.2 Problemanalyse

Formålet med problemanalysen er at skabe en velunderbygget, kontekstuel ramme for projektets problemformulering. Analysen skal være tilstrækkeligt detaljeret og evidensbaseret til, at andre kan sammenligne egne resultater med undersøgelsen i en tilsvarende kontekst. Evidens understøttes gennem interviews med relevante nøglepersoner i virksomheden samt primære kilder (artefakt, procesbeskrivelser, data).

**Virksomhedsbeskrivelse.** Support Solutions ApS er et dansk IT-konsulenthus med fokus på det skandinaviske marked. Virksomheden er en SMV, hvis kerneydelse er allokering af freelance IT-konsulenter til projektopgaver hos kunder. Konkurrenceparameteren er hastighed og præcision i matching af konsulent til opgave.

**Produkt- eller ydelsesbeskrivelse.** Virksomheden har udviklet SoluTalent – en B2B talentmarkedsplads, der forbinder virksomheder med vettede freelancekonsulenter via AI-matching, budgivning og tilhørende funktioner. Platformen understøtter processen fra jobimport over enrichment og matching til bud og allokering. Det relevante produkt i denne undersøgelse er platformens funktioner i den afgrænsede del af bemandingsprocessen: fra opgave importeret og klar til behandling (`staging_imported`) til det tidspunkt, hvor en konsulent er matchet til opgaven (`matched`). SoluTalent omfatter bl.a. en AI-matchingpipeline (prefiltering, lokation, gate, AI-scoring, ranking, persistering), automatisk job-enrichment og CV-parsing, auto-approval gates baseret på datakvalitet og tillid, samt et KPI-dashboard med metrikker som Precision@5, Override Rate og gennemsnitlig beslutningstid. Kundesegmentet er virksomheder, der søger IT-konsulenter; værdiforslaget er hurtigere og mere præcis matching ved brug af AI under menneskelig kontrol.

**Problembeskrivelse.** Det centrale problem, som projektet tager udgangspunkt i, er, at der mangler en systematisk analyse af, *hvor* i bemandingsprocessen spildtiden faktisk opstår hos Support Solutions, i hvilket omfang SoluTalents AI-automatisering adresserer den, og hvilke organisatoriske forudsætninger der skal være opfyldt for at reducere de resterende manuelle trin. Problemstillingen er konkret og afgrænset til processen i SoluTalent, men forankret i den bredere udfordring om spildtid og AI-adoption i SMV-konsulenthuse.

**Mulige kilder til problemet.** Interne forhold kan omfatte begrænsede admin-ressourcer til manuelle trin (curation, match review, notifikation), forsigtighed over for fuld automatisering af beslutninger samt behov for at konsolidere processer og kompetencer omkring platformen. Eksterne forhold inkluderer konkurrence på hastighed, krav til transparens og fairness (fx i forlængelse af EU AI Act), samt teknologisk udvikling der gør AI-matching mulig. Underbygning sker gennem interviews med nøglepersoner (direktører, partnere, projektledere), artefaktanalyse af SoluTalent og – hvor tilgængeligt – interne rapporter eller procesbeskrivelser.

**Tidligere eller igangværende løsningsforsøg.** Support Solutions har allerede adresseret problemet ved at udvikle og indføre SoluTalent med AI-enrichment, auto-approval gates og en seksstegs AI-matchingpipeline. Nogle procestrin er automatiseret (job import, enrichment, auto-approval, AI-matching), mens andre forbliver manuelle (manuel curation, match review, trigger af notifikation til freelancere). Analysen bør omfatte, hvorfor disse manuelle trin endnu ikke er fuldt automatiseret, og hvor tidligere løsninger har haft succes eller været utilstrækkelige – herunder evidens fra interviews og platformens design (fx betingelser for auto-approval og brugen af rejection reasons).

**Konsekvenser ved ubehandlet problem (berettigelse af problemløsning).** Hvis problemet ikke håndteres systematisk, kan kortsigtede konsekvenser omfatte vedvarende ventetid i curation- og match-review-køer, forlænget time-to-match og dermed tab af potentielle allokeringer. Langsigtet kan det medføre forringet konkurrenceevne, at dyre admin-ressourcer bruges på gentagne manuelle vurderinger, og at potentialet for AI-understøttelse ikke realiseres. En mini risikoanalyse understøttes ved at inddrage både artefaktdata (fx gennemsnitlig beslutningstid, antal pending matches) og informantvurderinger fra interviews.

---

## 1.3 Problemformulering og afgrænsning

Formålet er at formulere projektets akademiske kerne som et præcist og fokuseret spørgsmål, der udspringer af indledningen og problemanalysen og bygger direkte videre på de der legitimerade problemer og udfordringer.

**Problemformulering (HV-spørgsmål).** På baggrund af indledning og problemanalyse formuleres problemformuleringen som et klart spørgsmål med start i *Hvordan*, hvilket på EK anses for særligt relevant for at åbne for analyse og praktisk nytte:

> **Hvordan påvirker AI-baseret automatisering spildtid i bemandingsprocessen fra opgaveidentifikation til konsulentallokering hos Support Solutions ApS – og i hvilket omfang kan de resterende manuelle procestrin reduceres eller yderligere automatiseres?**

Alle centrale elementer (spildtid, AI-automatisering, bemandingsprocessen, resterende manuelle trin) har afsæt i de forhold, der er beskrevet i indledning og problemanalyse, så der sikres en logisk sammenhæng fra kontekst via problem til undersøgelse.

**Operationalisering gennem underspørgsmål.** Problemformuleringen operationaliseres gennem fire underspørgsmål:

1. **As-is: Hvor opstår spildtid i nuværende proces, og hvad er årsagerne?** (Kortlægning med fokus på manuel curation, match review og notifikationstrigger; Lean-kategorisering.)
2. **Struktur/arbejdsdeling: Hvilke procestrin automatiserer SoluTalent, og hvilke forbliver manuelle – og hvorfor?** (Mapping af auto-approval gates, AI-pipeline og human-in-the-loop.)
3. **Effekt og trade-offs: Hvilke indikatorer ses i spildtidsmål, og hvilke trade-offs opstår?** (KPI-struktur: Precision@5, override rate, beslutningstid, rejection reasons.)
4. **Forudsætninger: Hvilke TOE-forudsætninger kræves for at reducere de resterende manuelle trin?** (Teknologiske, organisatoriske og miljømæssige barrierer og enablers.)

**Afgrænsning.** Projektet afgrænses eksplicit for at gøre problemformuleringen præcis og realiserbar:

- **Proces:** Kun processen fra `staging_imported` til `matched` i SoluTalent (2025–2026). Jobsourcing og ekstern rekruttering (før import), onboarding, kontrakthåndtering, signering, tidsregistrering og fakturering (efter allokering) er **uden for scope**.
- **Platform:** Kun SoluTalent; teknisk fokus er funktionel analyse af platformens rolle i processen, ikke ML-udvikling eller algoritmeoptimering.
- **Case og tid:** Single-case studie af Support Solutions ApS og SoluTalent; fund diskuteres med henblik på analytisk generaliserbarhed (Holm, 2023; Kuada, 2012), ikke statistisk generalisering til branchen.
- **Data og etik:** Anvendelse af aggregeret og anonymiseret data; personhenførbare data analyseres ikke på individniveau. GDPR og bias behandles som kontekstuelle rammer; samtykke fra virksomheden til brug af platform og interviews forudsættes.

---

## 1.4 Læsevejledning

Rapporten er struktureret i seks kapitler:

- **Kapitel 1 (Introduktion)** præsenterer indledning, problemanalyse, problemformulering med underspørgsmål og afgrænsning.
- **Kapitel 2 (Metode)** redegør for videnskabsteoretisk position (pragmatisme), casedesign, empirikilder, operationalisering af spildtid og validitet.
- **Kapitel 3 (Teori)** gennemgår Lean waste, Davenports procesoptimering, DSS/human-in-the-loop og TOE-frameworket.
- **Kapitel 4 (Analyse)** besvarer de fire underspørgsmål gennem analyse af spildtid (4.1), automatisering vs. manuelle trin (4.2), KPI-indikatorer (4.3) og TOE-forudsætninger (4.4).
- **Kapitel 5 (Diskussion)** sammenfatter fund, diskuterer teoretiske implikationer, begrænsninger og praktiske anbefalinger.
- **Kapitel 6 (Konklusion)** besvarer problemformuleringen, opsummerer underspørgsmål og perspektiverer.
