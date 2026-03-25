# Synopsis: Videnskabsteori og Forskningsdesign

**Bachelorprojekt i Økonomi & IT (KEA), Forår 2026**

**Forfatter:** Luka

**Titel:** AI-automatiseret matching og spildtid i bemandingsprocessen hos Support Solutions ApS

---

## 1. Indledning

Bemandingsprocessen i IT-konsulenthuse er karakteriseret ved et komplekst samspil mellem menneskelig vurdering og teknologisk understøttelse. Når en kundeforespørgsel skal matches med den rette konsulent, opstår der en kæde af beslutninger, hvor både tidseffektivitet og kvalitetsvurdering er kritiske parametre. Dette rejser et videnskabsteoretisk interessant spørgsmål: hvordan påvirker introduktionen af AI-baseret beslutningsstøtte den menneskelige beslutningspraksis, og hvilke former for spildtid opstår i samspillet mellem automatiserede forslag og manuelle godkendelser?

Hos Support Solutions ApS er platformen SoluTalent udviklet til at understøtte denne proces. Platformen genererer AI-baserede matchforslag, som efterfølgende gennemgås og godkendes af menneskelige beslutningstagere. Dette skaber en empirisk kontekst, hvor det er muligt at undersøge, hvordan teknologisk automatisering og organisatorisk praksis gensidigt påvirker hinanden. Problemstillingen er videnskabsteoretisk relevant, fordi den forudsætter en forståelse af virkeligheden som både målbar (procestider, match-scores) og socialt konstrueret (tillid til AI, kvalitetsvurderinger). Denne dualitet nødvendiggør et reflekteret valg af forskningsdesign, som denne synopsis redegør for.

---

## 2. Problemformulering og afgrænsning

### 2.1 Fælles problemformulering (gruppe)

> **Hvordan påvirker AI-baseret automatisering spildtid i bemandingsprocessen fra modtaget opgave til klientindstillet konsulent hos Support Solutions ApS, og hvilke forudsætninger kræver reduktion af de resterende manuelle procestrin?**

### 2.2 Delspørgsmål

1. Hvor i workflowet opstår de største former for ventetid og processpild?
2. Hvilke trin er automatiseret i SoluTalent, og hvilke forbliver manuelle?
3. Hvilke KPI-spor kan belyse mulige flaskehalse, rework og beslutningsforsinkelse?
4. Hvilke forudsætninger skal være opfyldt for at reducere de manuelle trin?

### 2.3 Afgrænsning

- **Proces-scope:** Fra modtaget opgave til klientindstillet konsulent (funktionelt svarende til `staging_imported` → `matched` i SoluTalent).
- **Platform-scope:** Kun SoluTalent-platformen analyseres. Eksterne systemer og integrationer indgår ikke.
- **Tidsmæssig afgrænsning:** Data indsamles i forår 2026 som tværsnitsundersøgelse.
- **Uden for scope:** Jobsourcing, kontraktindgåelse, fakturering, onboarding og øvrig post-match administration.
- **Teknisk niveau:** Funktionel analyse af processerne, ikke ML-arkitektur eller kodekvalitetsvurdering.

### 2.4 Individuel vinkel (Luka)

I de følgende afsnit forsvarer jeg det valgte forskningsdesign ud fra tre centrale argumenter: (1) hvordan pragmatisme som videnskabsteoretisk position begrundes af problemformuleringens karakter, (2) hvorfor indlejret casestudie afgrænses organisatorisk frem for teknisk, og (3) hvordan triangulering anvendes som analytisk strategi til at synliggøre spændet mellem formelle systemprincipper og faktisk beslutningsadfærd. Disse tre elementer udgør kernen i min individuelle redegørelse og vil være fokus for det mundtlige forsvar.

---

## 3. Redegørelse for forskningsdesign

Følgende redegørelse struktureres efter fire vidensniveauer: ontologisk, epistemologisk, metodologisk og metode-/teknisk niveau. Denne struktur følger 7. semesters undervisningsforløb og sikrer, at de videnskabsteoretiske valg fremstår som en sammenhængende kæde fra grundlæggende antagelser om virkeligheden til konkrete dataindsamlingsteknikker.

### 3.1 Videnskabsteoretisk position: Pragmatisme

**Begrebsdefinition:** Pragmatisme er en videnskabsteoretisk position, hvor forskningsspørgsmålet driver metodevalget. Frem for at fastlåse sig i én ontologisk eller epistemologisk tradition prioriterer pragmatismen "det der virker" for at besvare det konkrete forskningsspørgsmål (Kuada, 2012, kap. 3). Positionen accepterer, at virkeligheden kan have både objektive og subjektive dimensioner, og at viden derfor kan produceres gennem flere tilgange.

**Begrundelse for valget:** Problemformuleringen spørger, *hvordan* AI-baseret automatisering *påvirker* spildtid. Dette er et handlingsorienteret spørgsmål, der forudsætter to typer af erkendelse: dels en forståelse af målbare procesforhold (ventetider, beslutningshastighed, systemspor), dels en fortolkning af organisatorisk praksis (tillid til AI, kvalitetsvurdering, beslutningslogik). Rossman og Wilson (1985) argumenterer for, at sådanne problemstillinger legitimerer en pragmatisk strategi, hvor kvalitative og kvantitative logikker kombineres for at belyse fænomenet fyldestgørende.

Problemformuleringens karakter illustrerer dette: "Hvordan påvirker..." kræver forståelse af mekanismer og sammenhænge, ikke blot måling af frekvenser. Samtidig spørger delspørgsmål 3 efter KPI-spor, der forudsætter kvantificerbar evidens. Pragmatismen giver et sammenhængende fundament for at kombinere disse erkendelsesformer, uden at de bringes i hierarkisk modsætning. Valget af pragmatisme er dermed ikke udtryk for metodisk bekvemmelighed, men en principiel konsekvens af problemformuleringens struktur.

### 3.2 Ontologi

**Begrebsdefinition:** Ontologi handler om, hvad der antages at eksistere, og hvad der kan undersøges (Kuada, 2012, kap. 3). Det ontologiske valg afklarer, hvilken type virkelighed forskeren forholder sig til: Er den objektiv og ekstern, eller er den socialt konstrueret og afhængig af aktørers fortolkninger?

**Anvendelse på problemstillingen:** I denne undersøgelse antages det, at virkeligheden har flere dimensioner. På den ene side eksisterer der observerbare procesforhold: jobs oprettes i systemet, matches genereres, beslutninger registreres med tidsstempler. Disse fænomener kan i princippet måles uafhængigt af observatøren. På den anden side eksisterer der fortolkede praksisser: projektlederens oplevelse af, hvornår et match er "godt nok", eller administrationens tillid til AI-scoringen. Disse fænomener er socialt konstruerede og varierer mellem aktører.

Pragmatismens ontologiske konsekvens er, at begge dimensioner anerkendes som gyldige undersøgelsesobjekter. Denne dobbelthed afspejles direkte i problemformuleringen, der både spørger til målbar spildtid (procesforhold) og til forudsætninger for reduktion af manuelle trin (organisatorisk praksis). Det ontologiske valg styrer dermed den efterfølgende metodeargumentation: datakilder skal kunne belyse både systemiske mønstre og aktørers meningsdannelse.

### 3.3 Epistemologi

**Begrebsdefinition:** Epistemologi handler om, hvad viden er, og hvordan gyldig viden produceres (Kuada, 2012, kap. 3). Det epistemologiske valg bestemmer, hvilke erkendelsesformer der accepteres som legitime i undersøgelsen.

**Fortolkende og positivistisk inspirerede elementer:** I denne undersøgelse anvendes to epistemologiske tilgange, der supplerer hinanden:

**Interpretivisme og moderne hermeneutik** udgør den primære erkendelsesramme for den kvalitative del af undersøgelsen. Når informanter beskriver deres beslutningspraksis, fortolkes udsagnene som udtryk for subjektiv mening, der er indlejret i en organisatorisk og historisk kontekst. Forståelsen sker iterativt gennem den hermeneutiske cirkel, hvor dele (enkelte udsagn) forstås i lyset af helheden (den samlede interview- og kontekstforståelse), og omvendt. Forskerens forforståelse ekspliciteres som en nødvendig del af erkendelsesprocessen, ikke som en fejlkilde der skal elimineres.

**Positivistisk inspirerede processpor** anvendes i den kvantitative del af undersøgelsen. Når systemdata analyseres (tidsstempler, match-scores, rejection reasons), antages det, at disse data kan aflæses relativt objektivt og sammenlignes på tværs af cases. Denne evidensform legitimerer udsagn om omfang og frekvens ("gennemsnitlig beslutningstid", "andel af overrides").

Kombinationen af disse epistemologier følger logisk af den pragmatiske position: den type viden, der søges, afhænger af, hvilket aspekt af problemformuleringen der belyses. Kvalitative udsagn om "hvorfor" kræver fortolkende epistemologi; kvantitative udsagn om "hvor meget" kræver positivistisk inspireret evidens.

*Mundtlig note:* Over for eksaminator vil jeg kunne forklare, at denne kombination ikke er eklektisk tilfældighed, men en konsekvent anvendelse af pragmatismens grundprincip: spørgsmålet bestemmer erkendelsesformen.

### 3.4 Metodologi: Slutningsform, design og case

**Slutningsform: Abduktion.** Undersøgelsen anvender en abduktiv slutningsform, hvor der veksles iterativt mellem teori og empiri (Holm, 2023, kap. 4). Abduktion adskiller sig fra deduktion (teori → test) og induktion (empiri → mønster) ved at søge den bedste forklaring på observerede fænomener. I praksis betyder det, at teoretiske begreber (fx Lean-kategorier for spildtid) bringes i dialog med empiriske fund (fx informanters beskrivelse af ventetid), hvorefter forståelsen justeres iterativt. Abduktion er den naturlige slutningsform for pragmatisme, fordi den tillader teori og empiri at informere hinanden gensidigt.

**Design: Sekventielt udforskende.** Undersøgelsen anlægger et sekventielt udforskende design, hvor kvalitative data (interviews, artefaktanalyse) indsamles først for at afdække ukendte aspekter ved problemet. Denne forståelse informerer derefter design af det kvantitative element (KPI-målinger, platformdata). Sekventiel logik begrundes med, at problemfeltet ikke er fuldt kortlagt på forhånd: vi ved ikke præcist, hvor spildtiden opstår, eller hvilke forudsætninger der er kritiske. Kvalitativ udforskning identificerer disse aspekter, hvorefter de kan undersøges systematisk.

**Casestrategi: Indlejret single-case.** Undersøgelsen gennemføres som et indlejret single-case studie (Holm, 2023, kap. 6; Kuada, 2012, kap. 5; Saunders et al., 2023, kap. 5). Casen er Support Solutions ApS, og undersøgelsen afgrænses til den organisatoriske delmængde, der arbejder med matching og bemanding. Denne afgrænsning er central: indlejret casestudie betyder ikke, at tekniske workflow-states eller systemenheder udgør analyseenhederne, men at undersøgelsen fokuserer på en specifik del af organisationen (bemandingsteamet) frem for organisationen som helhed.

Valget af indlejret frem for holistisk casestudie begrundes med, at problemformuleringen adresserer en afgrænset proces (fra modtaget opgave til klientindstillet konsulent), ikke organisationens samlede praksis. Et holistisk design ville risikere at fortynde fokus og gøre analysen overfladisk. Ved at afgrænse til én organisatorisk delmængde opnås den dybde, der er nødvendig for at besvare problemformuleringen fyldestgørende.

**Analytisk generaliserbarhed:** Casestudier generaliserer analytisk til teori, ikke statistisk til population (Holm, 2023, kap. 6). Fund fra denne undersøgelse kan ikke direkte overføres til alle IT-konsulenthuse, men de kan understøtte, nuancere eller udfordre de anvendte teoretiske frameworks (Lean, TOE, DSS). Konteksten (dansk SMV, skandinavisk IT-marked, konkurrence på hastighed) påvirker resultaterne og skal derfor beskrives tydeligt, så læseren selv kan vurdere overførbarhed.

### 3.5 Metode og triangulering

**Datakilder:** Undersøgelsen anvender tre primære datakilder:

1. **Semistrukturerede interviews (4-6 informanter):** Informanter udvælges via purposive sampling fra forskellige roller i bemandingsprocessen (direktør, partner, projektleder, evt. konsulent). Interviews afdækker oplevelser, praksisser og forståelser af spildtid og automatisering. Interviewguiden struktureres efter underspørgsmålene og operationaliserer nøglebegreber som "ventetid", "tillid til AI" og "kvalitetsvurdering".

2. **Artefaktanalyse (SoluTalent-platformen):** Platformens workflow-konfiguration, automatiseringslogik og beslutningsgates analyseres som primær datakilde. Dette er ikke en teknisk code review, men en funktionel analyse af, hvordan systemet strukturerer processen.

3. **Platformdata og KPI-design:** I pre-go-live fasen defineres KPI'er og loggingkrav (beslutningstid, override rate, rejection reasons), der kan måles efter go-live. I denne synopsis indgår KPI'er som måleplan, ikke som faktiske driftsresultater.

**Triangulering som analytisk strategi:** Triangulering anvendes ikke blot som kombination af datakilder, men som analytisk redskab til at synliggøre spændet mellem formelle principper og faktisk beslutningsadfærd (Rossman & Wilson, 1985). Konkret betyder det:

- **Interviews** belyser, hvordan beslutningstagere *oplever* og *begrunder* deres praksis.
- **Artefaktanalyse** viser, hvordan systemet *formelt* strukturerer processen (fx auto-approval betingelser).
- **Platformdata** dokumenterer, hvad der *faktisk* sker (fx andel af overrides på high-confidence matches).

Når disse kilder sammenholdes, kan analysen identificere, hvor praksis afviger fra formel logik, og dermed pege på forudsætninger for yderligere automatisering. Interviews har den primære forklaringsrolle (hvorfor sker afvigelsen?), mens artefaktanalyse og platformdata har valideringsrolle (kan afvigelsen dokumenteres systematisk?).

### 3.6 Tidshorisont og kvantitativ repræsentativitet

**Tidshorisont: Tværsnitsdesign.** Undersøgelsen anvender et tværsnitsdesign, hvor data indsamles på tværs af den undersøgte gruppe i en afgrænset periode (forår 2026). Dette indebærer, at resultaterne afspejler en specifik tidsperiode, ikke en udvikling over tid (longitudinelt design).

**Repræsentativitet:** Tværsnitsdesignet muliggør diskussion af repræsentativitet for den kvantitative del: I hvilket omfang afspejler data fra perioden den typiske praksis? Begrænsningen er, at sæsonvariation eller enkeltstående hændelser kan påvirke resultaterne. Dette adresseres i diskussionsafsnittet af bacheloropgaven.

**Hvad data kan og ikke kan sige:** Data fra denne undersøgelse kan belyse mønstre i den aktuelle proces og identificere forudsætninger for automatisering. Data kan ikke dokumentere langsigtede effekter af AI-implementering eller forudsige fremtidig udvikling. Konklusioner begrænses til den undersøgte kontekst og periode.

---

## 4. Empiri (oversigt)

Dette afsnit giver et overblik over de empiriske kilder, der indgår i undersøgelsen. Formålet er at vise, hvordan de metodiske valg i afsnit 3 omsættes til konkrete datakilder. Afsnittet holdes på principniveau; den fulde operationalisering og datakædebeskrivelse hører til bacheloropgavens metodekapitel.

### 4.1 Informanttyper

Informanterne udvælges via purposive sampling ud fra deres rolle i bemandingsprocessen:

| Rolle | Perspektiv | Bidrag til undersøgelsen |
|-------|------------|--------------------------|
| **Direktør/ejer** | Strategisk og forretningsmæssigt | Overblik over organisatoriske mål, ressourceallokering, villighed til automatisering |
| **Partner/projektleder** | Operationelt, daglig beslutningspraksis | Erfaring med manuel review, vurdering af matchkvalitet, tillid til AI-forslag |
| **Konsulent** (evt.) | Modtager-perspektiv | Oplevelse af at blive matchet, feedback på proceshastighed |

Udvælgelsen sikrer variation i perspektiver, så processen belyses fra flere organisatoriske niveauer. 4-6 informanter vurderes tilstrækkeligt for at opnå analytisk mætning inden for den afgrænsede case.

### 4.2 Dokumenter og artefakter

- **SoluTalent-platformen:** Workflow-konfiguration, automatiseringsregler, beslutningsgates, rejection reason-kategorier.
- **Eksisterende dokumentation:** Evt. interne procedurer eller retningslinjer for matchgodkendelse.

Artefaktanalysen fokuserer på, hvordan systemet strukturerer processen formelt. Dette sammenholdes med informanters beskrivelse af faktisk praksis.

### 4.3 Platformspor og KPI-design

I pre-go-live fasen defineres følgende KPI'er som måleplan:

| KPI | Beskrivelse | Analytisk funktion |
|-----|-------------|-------------------|
| **Beslutningstid** | Tid fra match-generering til godkendelse/afvisning | Indikator for ventetid/flaskehals |
| **Override rate** | Andel af matches hvor admin afviger fra AI-anbefaling | Indikator for tillid til AI |
| **Rejection reasons** | Kategoriserede årsager til afvisning | Indikator for mismatch-typer |

Disse KPI'er indgår i synopsen som designelementer. Faktiske målinger rapporteres først i bacheloropgaven efter go-live.

---

## 5. Etik (aksiologi) og kvalitetskriterier

Dette afsnit redegør for, hvordan undersøgelsens troværdighed sikres gennem eksplicitte kvalitetskriterier, og hvordan etiske hensyn håndteres. Afsnittet følger undervisningens opdeling i kvalitative og kvantitative kvalitetskriterier.

### 5.1 Kvalitative kvalitetskriterier (Lincoln & Guba via Kuada, 2012, kap. 7)

**Credibility (troværdighed):** Sikres gennem informantvalidering, hvor centrale analyseresultater sendes til informanterne med beskrivelse af den kontekst, de vil indgå i. Informanterne får mulighed for at bekræfte, korrigere eller afvise fortolkningen. Derudover styrkes credibility af langvarigt engagement: begge forfattere har gennemført praktik hos Support Solutions ApS og har dermed opbygget en nuanceret forståelse af organisationens praksis.

**Transferability (overførbarhed):** Sikres gennem tyk beskrivelse af konteksten. Ved at dokumentere organisationens karakteristika (dansk SMV, IT-konsulentbranchen, skandinavisk marked, konkurrence på hastighed), kan læseren selv vurdere, i hvilket omfang fund er overførbare til andre kontekster. Undersøgelsen generaliserer analytisk til teori, ikke statistisk til population.

**Dependability (pålidelighed):** Sikres gennem transparent dokumentation af forskningsprocessen. Interviewguide, kodningsstrategi og beslutningslogik dokumenteres som bilag, så en ekstern læser kan følge kædebeviset fra rådata til konklusioner.

**Confirmability (bekræftbarhed):** Sikres gennem bias-refleksion og neutral fremstilling. Undersøgelsen præsenterer data der viser systemets begrænsninger (rejection reasons, override rate) på lige fod med data der viser styrker. Forfatternes dobbeltrolle som praktikanter og medudviklere af SoluTalent ekspliciteres.

### 5.2 Kvantitative kvalitetskriterier (Kuada, 2012, kap. 7)

**Målepålidelighed:** Sikres gennem klare, operationelle KPI-definitioner. "Beslutningstid" defineres som differensen mellem `decision_timestamp` og `created_at` i match_analytics. Entydige definitioner muliggør replikerbar måling.

**Stabilitetspålidelighed:** Adresseres gennem tværsnitsdesign med afgrænset periode. Sammenlignelighed over tid kan først vurderes ved gentagen måling, hvilket ligger uden for denne undersøgelses scope.

**Repræsentativitet:** Diskuteres i relation til den valgte population og periode. Tværsnitsdesignet muliggør udsagn om den aktuelle praksis, men ikke om sæsonvariation eller langsigtet udvikling.

### 5.3 Insider-bias og kritisk distance

Begge forfattere har gennemført praktikophold hos Support Solutions ApS og har bidraget aktivt til udviklingen af SoluTalent. Denne dobbeltrolle giver privilegeret empirisk adgang: vi kender organisationens daglige praksis, har adgang til teknisk dokumentation og kan stille informerede spørgsmål.

Dobbeltrollen indebærer imidlertid også risiko for bekræftelsesbias: en tendens til at fortolke data i retning af, at platformen "virker". Dette håndteres gennem følgende strategier:

1. **Artefaktanalyse som uafhængig kilde:** Platformens logik analyseres ud fra dokumenteret konfiguration, ikke ud fra forfatternes oplevelse.
2. **Informanter vi ikke arbejdede direkte med:** Udvælgelsen inkluderer informanter uden for vores daglige arbejdsrelation.
3. **Aktiv søgning efter modsigende fund:** Analysen prioriterer at identificere situationer, hvor AI-matchingen *ikke* fungerer efter hensigten.
4. **Præsentation af negative fund:** Rejection reasons, override rate og begrænsninger præsenteres på lige fod med positive fund.

### 5.4 Etiske hensyn

**Informeret samtykke:** Alle informanter modtager skriftlig information om undersøgelsens formål, anvendelse af data og mulighed for at trække samtykke tilbage.

**Anonymisering:** Individuelle informanter anonymiseres i rapporten. Organisationen (Support Solutions ApS) nævnes ved navn efter aftale.

**GDPR:** Platformdata behandles i overensstemmelse med databeskyttelsesforordningen. Personhenførbare data anonymiseres før analyse.

---

## 6. Redegørelse for forskningsdesign: Figur

Nedenstående figur samler forskningsdesignet i én oversigt, der følger undervisningens opdeling i fire vidensniveauer: ontologisk, epistemologisk, metodologisk og metode-/teknisk. Figuren fungerer som visuelt strukturbevis på, at de videnskabsteoretiske valg hænger sammen fra filosofisk grundlag til konkret dataindsamling.

**Figurbeskrivelse:**

- **Øverste niveau (Research Philosophy):** Pragmatisme, med forgreninger til henholdsvis positivistisk inspireret evidens (processpor, KPI) og interpretivistisk evidens (interviews, fortolkning).
- **Research Approach:** Abduktion som slutningsform – iterativ vekslen mellem teori og empiri.
- **Research Design:** Eksplorativt → indlejret casestudie (Support Solutions ApS, organisatorisk delmængde: matching/bemanding) → tværsnitsdesign (forår 2026) → multi-method med primære data (interviews, artefaktanalyse) og sekundære kilder efter behov.
- **Triangulering:** Placeret som samlende logik mellem kilderne, med formål at synliggøre forskellen mellem formelle systemprincipper og faktisk beslutningsadfærd.
- **Analyse og diskussion:** Afslutter den metodiske kæde.

*[Indsæt figur her: [`docs/figures/RESEARCH_STRUCTURE_SYNOPSIS_LUKA.svg`](figures/RESEARCH_STRUCTURE_SYNOPSIS_LUKA.svg)]*

**Figur 1.** Oversigt over forskningsdesign for bachelorprojektet om AI-baseret automatisering og spildtid i bemandingsprocessen hos Support Solutions ApS. Processen afgrænses fra modtaget opgave til klientindstillet konsulent (funktionelt `staging_imported` → `matched`). Figuren visualiserer den firedelte vidensniveaustruktur og den efterfølgende empiri- og trianguleringslogik. *Begrebsmæssig forankring:* Kuada (2012); *pragmatisk strategi og perspektiver:* Rossman & Wilson (1985); *slutningsform:* Holm (2023); *design og datatyper:* Saunders et al. (2023). Egen tilpasning efter undervisningens skabelon.

---

## 7. Foreløbig disposition (bachelorrapport)

Nedenstående disposition giver et overblik over, hvordan bachelorprojektet forventes struktureret. Synopsen forsvarer forskningsdesignet; den fulde metode-, analyse- og diskussionsbeskrivelse hører til selve bacheloropgaven.

| Kapitel | Indhold | Omfang (ca.) |
|---------|---------|--------------|
| **1. Indledning** | Problemfelt, problemformulering, afgrænsning, læsevejledning | 5-7 sider |
| **2. Metode** | Videnskabsteori, design, empirikilder, operationalisering, validitet, etik | 8-10 sider |
| **3. Teori** | Lean (spildtid), Davenport (as-is/to-be), TOE (forudsætninger), DSS (human-in-the-loop) | 8-10 sider |
| **4. Analyse** | 4.1 Spildtid i as-is-processen, 4.2 AI-matchingens effekt, 4.3 Grænsen for automatisering, 4.4 Organisatoriske forudsætninger | 27-35 sider |
| **5. Diskussion** | Sammenfatning, teoretisk diskussion, begrænsninger, implikationer | 5-7 sider |
| **6. Konklusion** | Besvarelse af USP og PF, perspektivering | 3-4 sider |
| **Litteratur** | Harvard-format | – |
| **Bilag** | Interviewguide, samtykkeerklæring, procesdiagram, KPI-definitioner | – |

---

## 8. Litteraturliste (foreløbig)

Nedenstående liste omfatter de kilder, der faktisk anvendes i synopsen. Tier 1-kilder (7. semesters pensum) anføres først.

### Tier 1 – Pensum

- Holm, A. B. (2023). *Videnskab i virkeligheden* (3. udg.). Samfundslitteratur.
- Kuada, J. (2012). *Research Methodology: A Project Guide for University Students*. Samfundslitteratur.
- Saunders, M. N. K., Lewis, P., & Thornhill, A. (2023). *Research Methods for Business Students* (9th ed.). Pearson.

### Synopsis-strategikilde

- Rossman, G. B., & Wilson, B. L. (1985). Numbers and Words: Combining Quantitative and Qualitative Methods in a Single Large-Scale Evaluation Study. *Evaluation Review*, 9(5), 627-643.

### Supplerende (til bacheloropgaven)

- Womack, J. P., & Jones, D. T. (2003). *Lean Thinking: Banish Waste and Create Wealth in Your Corporation* (2nd ed.). Free Press.
- Davenport, T. H. (1993). *Process Innovation: Reengineering Work through Information Technology*. Harvard Business School Press.
- Tornatzky, L. G., & Fleischer, M. (1990). *The Processes of Technological Innovation*. Lexington Books.
- Turban, E., Sharda, R., & Delen, D. (2014). *Decision Support and Business Intelligence Systems* (10th ed.). Pearson.
- Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. *Qualitative Research in Psychology*, 3(2), 77-101.

---

---

# DEL B: Mundtlig forberedelse

Denne del er til personlig eksamensforberedelse og indgår ikke i den afleverede synopsis. Formålet er at forberede det mundtlige forsvar ved at gennemgå sandsynlige spørgsmål, centrale begrebsdefinitioner og svarstrategier.

---

## B.1 Sandsynlige eksamensspørgsmål fra Jens

Vejleder har angivet, at eksaminator (Jens) typisk stiller direkte begrebsspørgsmål. Nedenfor er 12 sandsynlige spørgsmål med foreslåede svarstrategier.

### Spørgsmål om videnskabsteori

**1. "Hvad er pragmatisme, og hvorfor har I valgt det?"**

*Svar:* Pragmatisme er en videnskabsteoretisk position, hvor forskningsspørgsmålet driver metodevalget (Kuada, 2012). Vi har valgt det, fordi vores problemformulering kræver både målbare procesdata (KPI) og fortolkning af organisatorisk praksis (interviews). Rossman og Wilson (1985) argumenterer for, at denne type problemstillinger legitimerer en pragmatisk strategi, hvor kvalitative og kvantitative logikker kombineres.

**2. "Hvad er moderne hermeneutik, og hvordan bruger I det?"**

*Svar:* Moderne hermeneutik (Gadamer) handler om, at forståelse sker gennem en dialektisk proces – den hermeneutiske cirkel – hvor del og helhed gensidigt belyser hinanden. I vores undersøgelse bruger vi det til at fortolke interviewdata: enkelte udsagn forstås i lyset af hele interviewet, og vores forståelse justeres iterativt. Forforståelse (at vi har bygget systemet) ekspliciteres som en del af erkendelsesprocessen, ikke som en fejlkilde.

**3. "Forklar den hermeneutiske cirkel og dens processer."**

*Svar:* Den hermeneutiske cirkel bevæger sig mellem del og helhed gennem tre logiske processer: induktion (fra enkeltobservationer til mønstre), deduktion (fra teori til konkrete forventninger) og abduktion (søgning efter den bedste forklaring). I praksis læser vi et interview, identificerer temaer (helhed), vender tilbage til enkelte udsagn (del) for at tjekke om de passer, og justerer forståelsen iterativt.

**4. "Hvad er forskellen på objekt og subjekt i en fortolkende position?"**

*Svar:* I en fortolkende position er forskeren (subjekt) ikke en neutral observatør af objektet, men en aktiv deltager i meningsdannelsen. Når vi interviewer informanter, fortolker vi deres udsagn ud fra vores egen forforståelse. Objekt-subjekt-forholdet er altså gensidigt: informantens mening påvirker vores forståelse, og vores spørgsmål påvirker hvad informanten fortæller.

**5. "Hvordan ville problemet se ud, hvis I havde valgt logisk positivisme?"**

*Svar:* Logisk positivisme kræver, at udsagn er enten logisk sande eller empirisk verificerbare (Ayer, 1936). Vores PF ville skulle omformuleres til præcise, målbare hypoteser med klare sandhedsværdier. Fx: "Beslutningstid > 24 timer medfører tabt match i >30% af tilfældene." Det ville udelukke vores kvalitative "hvorfor"-spørgsmål om tillid og praksis. Logisk positivisme passer derfor ikke til vores handlingsorienterede PF, der kræver fortolkning af organisatorisk kontekst.

### Spørgsmål om metode

**6. "Hvorfor er det et indlejret og ikke et holistisk casestudie?"**

*Svar:* Indlejret casestudie undersøger en delmængde af organisationen, fx én afdeling eller én proces (Holm, 2023). Vi har afgrænset til bemandingsteamet og processen fra modtaget opgave til klientindstillet konsulent. Et holistisk design ville se på hele organisationen, hvilket ville fortynde fokus. Indlejret design giver den dybde, der er nødvendig for at besvare vores afgrænsede PF.

**7. "Hvad er forskellen på metodetriangulering og datatriangulering?"**

*Svar:* Datatriangulering bruger flere datakilder (fx flere informanter) til at belyse samme fænomen. Metodetriangulering kombinerer forskellige indsamlingsmetoder (fx interviews + artefaktanalyse + platformdata). Vi bruger primært metodetriangulering i et sekventielt design: interviews afdækker mønstre, som efterfølgende undersøges via artefaktanalyse og KPI-data. Triangulering er ikke bare en liste over kilder, men en analytisk strategi til at synliggøre spændet mellem formel logik og faktisk praksis (Rossman & Wilson, 1985).

**8. "I har udviklet systemet selv – hvordan sikrer I objektivitet?"**

*Svar:* Vi sikrer det gennem fire strategier: (1) Artefaktanalyse som uafhængig kilde – vi analyserer dokumenteret konfiguration, ikke vores egne oplevelser. (2) Informanter uden for vores daglige arbejdsrelation. (3) Aktiv søgning efter modsigende fund. (4) Præsentation af negative data (rejection reasons, override rate) på lige fod med positive. Vi ekspliciterer vores forforståelse og bruger informantvalidering til at tjekke fortolkninger.

**9. "Hvad er abduktion, og hvordan adskiller det sig fra induktion og deduktion?"**

*Svar:* Deduktion går fra teori til test (hvis Lean holder, bør ventetid = spild). Induktion går fra empiri til mønster (mange afvisninger = skill mismatch er hyppigt). Abduktion søger den bedste forklaring på et overraskende fund: Hvorfor er override rate høj på high-confidence matches? Mulige forklaringer testes mod flere data. Abduktion er iterativ og kreativ – den introducerer nye ideer, som deduktion og induktion ikke gør (Peirce).

**10. "Kan I generalisere til andre virksomheder?"**

*Svar:* Nej, ikke statistisk. Casestudier generaliserer analytisk til teori (Holm, 2023). Vores fund kan understøtte eller udfordre Lean-teoriens kategorier, TOE-frameworkets forudsigelser eller DSS-princippet om human-in-the-loop. Men vi kan ikke sige, at vores resultater gælder for alle konsulenthuse. Konteksten (dansk SMV, skandinavisk marked) påvirker resultaterne.

### Spørgsmål til topkarakter

**11. "Hvad er socialkonstruktivisme, og hvordan kunne det påvirke jeres analyse?"**

*Svar:* Socialkonstruktivisme (Gergen, 1999) hævder, at virkeligheden, som vi kender den, skabes gennem sociale processer og sprog. "Tillid til AI" er fx ikke en objektiv egenskab, men en socialt konstrueret forståelse, der varierer mellem aktører. I vores analyse betyder det, at vi ikke kan tage informanters udsagn som objektive fakta om AI'ens kvalitet – de afspejler organisationens kultur og fælles meningsproduktion. Det styrker behovet for triangulering og forforståelses-eksplicitering.

**12. "Hvad er Kuhns paradigmeteori, og er jeres projekt 'normal science' eller et paradigmeskift?"**

*Svar:* Kuhn (1962) siger, at videnskab udvikles gennem skift mellem paradigmer – grundlæggende verdensbilleder. "Normal science" løser gåder inden for et eksisterende paradigme, mens "revolution" erstatter paradigmet ved anomalier. Vores projekt er primært normal science: vi anvender eksisterende teorier (Lean, TOE, DSS) på en ny case. Hvis vores fund viser, at teorierne ikke holder i vidensarbejde, kunne det pege på en anomali – men det ville kræve flere studier at tale om paradigmeskift.

---

## B.2 Centrale begrebsdefinitioner (hurtig repetition)

| Begreb | Kort definition | Kilde |
|--------|-----------------|-------|
| **Pragmatisme** | Forskningsspørgsmålet driver metodevalget; viden vurderes på anvendelighed | Kuada (2012) |
| **Ontologi** | Læren om hvad der eksisterer; hvad der kan undersøges | Kuada (2012) |
| **Epistemologi** | Læren om viden; hvordan gyldig viden produceres | Kuada (2012) |
| **Interpretivisme** | Viden skabes gennem fortolkning af aktørers subjektive mening | Saunders et al. (2023) |
| **Moderne hermeneutik** | Forståelse sker iterativt gennem del-helhed-dialektik; forforståelse er nødvendig | Gadamer (1960) |
| **Hermeneutisk cirkel** | Bevægelse mellem del og helhed via induktion, deduktion, abduktion | Gadamer (1960) |
| **Abduktion** | Slutning til bedste forklaring; iterativ vekslen teori ↔ empiri | Peirce; Holm (2023) |
| **Indlejret casestudie** | Undersøgelse af organisatorisk delmængde, ikke hele organisationen | Holm (2023) |
| **Analytisk generaliserbarhed** | Generalisering til teori, ikke til population | Holm (2023) |
| **Metodetriangulering** | Kombination af metoder (kval + kvant) i sekventielt design | Rossman & Wilson (1985) |
| **Credibility** | Troværdighed; sikres via informantvalidering | Kuada (2012) |
| **Informantvalidering** | Send analyseresultater + kontekst til informant; de kan bekræfte/korrigere | Kuada (2012) |

---

## B.3 Fallback: Logisk positivisme vs. klassisk positivisme

Hvis Jens spørger om forskellen:

| | Klassisk positivisme (Comte) | Logisk positivisme (Wienerkredsen) |
|---|---|---|
| **Kerne** | Al viden fra sanseerfaring; søger lovmæssigheder | Kun verificerbare eller logisk sande udsagn er meningsfulde |
| **Verifikation** | Observation og systematik | Stærkt verifikationsprincip; anti-metafysik |
| **Kritik** | For bred; inkluderer spekulativ samfundsvidenskab | For snævert; verifikationsprincippet opgives |

*Hvorfor ikke logisk positivisme for os:* Vores PF spørger "hvordan påvirker", ikke "er det sandt at X". Logisk positivisme ville kræve præcise, verificerbare hypoteser og udelukke fortolkende spørgsmål om "hvorfor".

---

## B.4 Socialkonstruktivisme og Kuhn (næste niveau for topkarakter)

Eksaminator kan gå til disse emner, hvis basispensum er solidt:

**Socialkonstruktivisme (Gergen):**
- Virkeligheden skabes gennem sprog og sociale relationer
- "Tillid til AI" er ikke objektiv, men konstrueret i organisationen
- Kritisk pointe: Vores egne begreber (spildtid, effektivitet) er heller ikke neutrale

**Kuhn:**
- Normal science = anvende eksisterende paradigme (det vi gør med Lean, TOE, DSS)
- Anomalier = fund der ikke passer i paradigmet (fx hvis Lean-kategorier ikke fanger vidensarbejdets spild)
- Paradigmeskift = nyt verdensbillede (kræver mere end én case)

---

## B.5 Fem kritiske censor-spørgsmål med svarstrategier

**1. "Jeres PF spørger 'hvordan påvirker' – hvad hvis svaret er 'det påvirker ikke'?"**

*Strategi:* Det er et gyldigt fund. Vi antager ikke kausalitet; "påvirker" er valgt bevidst (ikke "forbedrer"). Hvis data viser minimal påvirkning, er det en konklusionsværdig indsigt om forudsætninger.

**2. "Lean er udviklet til produktion – kan det overføres til vidensarbejde?"**

*Strategi:* Lean er blevet tilpasset vidensarbejde (Staats & Upton, 2011). Vi operationaliserer de 7 spildtyper til vores kontekst (fx "ventetid" = matches i kø). Transferability diskuteres eksplicit.

**3. "Override rate er X% – er det højt eller lavt?"**

*Strategi:* Vi har ikke ekstern benchmark, men vi kan vurdere i forhold til AI-scoring: Hvis high-confidence matches overrides lige så ofte som low-confidence, indikerer det tillidsproblem. Konteksten afgør tolkningen.

**4. "Triangulering er bare en liste over kilder – hvor er den analytiske funktion?"**

*Strategi:* Triangulering bruges til at synliggøre spændet mellem formel logik (artefakt) og faktisk praksis (interview). Hvis systemet tillader auto-approval, men admin alligevel overrider, identificerer vi en forudsætning for automatisering.

**5. "I har bias – hvordan ved vi, at jeres fund ikke bare bekræfter jeres forventninger?"**

*Strategi:* Vi ekspliciterer bias, bruger informantvalidering, præsenterer negative fund på lige fod, og analyserer artefakt uafhængigt af vores oplevelser. Confirmability-kriteriet adresseres direkte.

---

## B.6 Træningsloop (anbefalet af vejleder)

1. Kør "10 hurtige på 10 minutter" uden noter
2. Ret med noter og marker svage begreber
3. Kør samme sæt igen dagen efter
4. Gentag med nye spørgsmål

**Mål:**
- Definere begreber kort og korrekt
- Koble hvert begreb til casen på 1-2 sætninger
- Forklare hvorfor valgene er kongruente med PF

---

**Sidst opdateret:** 2026-03-25

