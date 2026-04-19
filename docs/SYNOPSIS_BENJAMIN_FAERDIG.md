# Synopsis — Theory of Science (videnskabsteori) — Benjamin Zeka

**Emne:** AI som beslutningsstøtte i bemandingsprocessen — Support Solutions ApS / SoluTalent  
**Afgrænsning:** `staging_imported` → `matched` (funktionelt fra modtaget opgave i systemet til klientindstillet konsulent)  
**Dato:** 13-03-2026

---

## 1. Indledning

Konkurrencen på markedet for IT-konsulentydelser er præget af krav om både hurtig respons og dokumenteret kvalitet i leverancerne (Right People Group, n.d.). Leverandører fremhæver ofte hurtig respons og strukturerede udvælgelsesprocesser som centrale parametre (Right People Group, n.d.). Når beslutninger skal træffes hurtigt i bemandingsforløb, opstår samtidig et spænd mellem hastighed, kontrol og ansvar: fejlmatch eller forsinkelser kan have omkostninger for både kunde og leverandør, hvorfor manuel kontrol og gensidig afstemning mellem roller ofte opretholdes som led i risikostyring (Holm, 2023).

Support Solutions ApS er et dansk konsulentbureau, der formidler IT-specialister til projektbaserede opgaver hos kunder med behov for tekniske kompetencer (Support Solutions, n.d.). Virksomheden fremhæver hurtig fremdrift og muligheden for at præsentere relevante kandidater kort efter, at en opgave er kvalificeret (Support Solutions, n.d.). Til understøttelse af denne proces anvendes platformen SoluTalent, hvor funktioner baseret på kunstig intelligens producerer prioriterede matchforslag ud fra data om konsulentprofiler, kompetencer og opgavens krav (SoluTalent, n.d.). I praksis fungerer det som beslutningsstøtte snarere end som fuld automatisering: medarbejdere kan acceptere, afvise eller overstyre forslag, så menneskelig vurdering forbliver en integreret del af beslutningskæden. Med *overstyring* (override) menes her, at et systemforslag fravælges til fordel for et andet valg; med *AI-score* menes et prioriteringssignal, der ikke i sig selv erstatter faglig bedømmelse. Disse begreber er centrale, fordi de gør det muligt at tale præcist om samspillet mellem system og praksis uden at reducere processen til ren teknisk logik.

I den afgrænsede del af processen fra modtaget opgave til klientindstillet konsulent er der gennemført en forundersøgelse med semistrukturerede interviews med henholdsvis ledelse og teknisk ansvarlig (bilag B). Den har bidraget til at afgrænse problemfeltet og har peget på, at spildtid særligt knytter sig til ventetid i beslutningsled, gentagne gennemgange og uens praksis omkring registrering af afvisningsårsager (bilag B). Spørgsmålet er derfor ikke primært, om platformen som teknologi "virker", men hvordan samspillet mellem automatiske forslag og organisatorisk beslutningspraksis påvirker tidsforbrug og procesflow i den konkrete kontekst — herunder hvordan kontrol, tillid til score og intern koordinering kommer til udtryk (Holm, 2023).

Formålet med synopsen er at udvikle og begrunde et videnskabsteoretisk kongruent research design til den videre undersøgelse. Synopsen forsvarer position, design, empirisk logik og kvalitetskriterier; den erstatter ikke bachelorprojektets senere metode- og analysekapitel.

---

## 2. Problemformulering og afgrænsning

**Hvordan påvirker AI-baseret automatisering spildtid i bemandingsprocessen fra modtaget opgave til klientindstillet konsulent hos Support Solutions ApS, og hvilke forudsætninger kræver reduktion af de resterende manuelle procestrin?**

Med *AI-baseret automatisering* menes i denne opgave de dele af processen, hvor SoluTalent automatisk genererer og prioriterer matchforslag og tilhørende signaler, som efterfølgende menneskeligt kvalificeres — ikke kontrakt, fakturering eller teknisk modeltræning uden for analyseens scope. Formuleringen er undersøgende: målet er kontekstbundet indsigt i spildtid og manuelle trin under menneske–system-samspil, ikke dokumentation af en entydig, generel kausal effekt af automatisering alene.

De analytiske dimensioner, som problemformuleringen åbner for, kan sammenfattes uden at opløses i en separat liste i hovedteksten: hvor spildtid opstår og hvilke forklaringsmønstre der knytter sig hertil; hvilke trin der er automatiserede kontra manuelle og med hvilken begrundelse; hvordan kontrol- og tillidshensyn kommer til udtryk i brugen af AI-score og relaterede beslutninger; samt hvilke organisatoriske, tekniske og styringsmæssige betingelser der gør sig gældende, hvis manuelle trin skal reduceres forsvarligt. Den konkrete operationalisering af målinger og analyseprocedurer for disse dimensioner hører under bachelorprojektets metodekapitel og bilag.

Undersøgelsen afgrænses til den del af bemandingsprocessen, der efter registrering i SoluTalent kan følges fra workflow-tilstanden `staging_imported` til `matched`, svarende til den funktionelle kæde fra modtaget opgave til klientindstillet konsulent. Aktiviteter før systemregistrering (scouting, netværk, indledende dialog) kan indgå som kvalitativ kontekst gennem interviews og rekonstruktion, men indgår ikke i den kvantitative spildtidsmåling. Forløb efter klientgodkendelse, herunder kontrakt, onboarding, compliance samt time- og faktureringsprocesser, ligger uden for scope. Platformen behandles som organisatorisk og funktionelt artefakt i beslutningspraksis; ML-arkitektur som udviklingsprojekt ligger uden for denne videnskabsteorisynopsis.

Den kvantitative del planlægges som en tværsnitsundersøgelse med data fra et afgrænset observationsvindue (seneste kvartal i forhold til indsamlingstidspunkt), så mønstre sammenlignes inden for samme periode og samme afgrænsede sagspopulation, uden at resultaterne extrapoleres til hele branchen (Saunders et al., 2023).

---

## 3. Metodologi og research design

Research designet redegøres sekventielt på fire vidensniveauer, så det er tydeligt, hvordan metodevalg følger problemstilling og afgrænsning (Kuada, 2012; Saunders et al., 2023; Holm, 2023).

### 3.1 Ontologi

Ontologi vedrører spørgsmålet om, hvad der antages at eksistere som genstand for viden inden for undersøgelsens felt (Kuada, 2012). I denne case omfatter genstandsfeltet både observerbare systemforhold, herunder workflow-tilstande, tidsstempler, overstyring og mønstre i registrerede afvisningsårsager, og en socialt forankret beslutningspraksis, hvor medarbejdere fortolker opgavens krav, vurderer risiko og prioriterer kvalitet (Holm, 2023). Genstandsfeltet er dermed både systemisk og socialt; platformens tilstande er en del af det observerbare materiale, men casen defineres organisatorisk som den del af Support Solutions ApS, der arbejder med matching og klientindstilling i SoluTalent — ikke som enkelte tekniske tilstande i isolation.

### 3.2 Epistemologi

Epistemologi vedrører, hvordan gyldig viden om genstandsfeltet kan etableres (Kuada, 2012). Interviewsporet forankres i et fortolkende perspektiv med interpretivisme og moderne hermeneutik, fordi medarbejdernes begrundelser, fortolkning af "godt match" og handlingslogik skal forstås i kontekst (Holm, 2023; Saunders et al., 2023). Det kvantitative spor knytter til beskrivelse og sammenligning af observerbare mønstre i systemdata inden for den valgte periode og population af sager. De to spor skal holdes begrebsmæssigt adskilt, så fortolkende forklaringer ikke substitueres af måltal, og så måltal ikke læses som direkte adgang til meningsindhold uden fortolkende mediering.

### 3.3 Pragmatisk vidensvurdering i den konkrete undersøgelse

Uafhængigt af ovenstående epistemologiske adskillelse er projektet anvendelsesorienteret: forskningsresultater forventes at kunne understøtte beslutninger om proces og styring i den konkrete organisation. Denne vidensvurdering — hvad der tæller som "nyttig" indsigt i praksis — er ikke en erstatning for epistemologisk redegørelse, men et udtryk for den pragmatiske ramme: kriteriet om anvendelighed i kontekst supplerer spørgsmålet om, hvordan viden etableres (Holm, 2023).

### 3.4 Metodologisk ramme: pragmatisme, mixed methods og abduktion

Den overordnede metodologiske ramme er pragmatisk, fordi problemformuleringen både kræver fortolkning af praksis og dokumentation af observerbare forløb (Kuada, 2012; Saunders et al., 2023). Pragmatisme begrundes først ud fra problemfeltets karakter: behov for både at forstå menings- og beslutningslogikker og at sammenligne dokumenterbare mønstre i samme proces. Derefter understøttes den strategiske beslutning om at kombinere kvalitative og kvantitative spor i samme undersøgelse af Rossman og Wilson (1985), som behandler komplementær anvendelse af kvantitative og kvalitative data — uden at disse forfattere kan tilskrives kendskab til denne konkrete problemformulering, hvilket ville være kildeforvanskning.

Slutningsformen er overvejende abduktiv: observationer og begreber bringes i gensidig afprøvning, og forklaringer justeres, når empiri og foreløbige antagelser ikke stemmer overens (Holm, 2023; Saunders et al., 2023).

### 3.5 Metodisk tilgang og forskningsdesign

Den metodiske tilgang er sekventielt udforskende: der arbejdes først med kvalitative spor, der etablerer forforståelse og identificerer centrale temaer, hvorefter kvantitative spor kan anvendes målrettet som opfølgning. Forundersøgelsesinterviews (bilag B) er allerede gennemført og har bidraget til problemfeltets afgrænsning; yderligere interviews og artefaktgennemgang planlægges som led i hovedundersøgelsen. Den kvantitative opfølgning gennemføres som tværsnit i det nævnte tidsvindue. Dette er ikke et spørgsmål om hypotetisk fremtid alene, men om en allerede påbegyndt empirisk kæde, som den videre bachelorundersøgelse bygger videre på.

Undersøgelsen udformes som et single-case studie med tydelig organisatorisk afgrænsning til den del af virksomheden, der arbejder med matching og klientindstilling i SoluTalent. Generalisering er primært analytisk til teori og procesforståelse, ikke statistisk til en bred branchepopulation (Holm, 2023; Kuada, 2012).

### 3.6 Metode- og teknisk niveau og triangulering

På metode- og teknisk niveau kombineres semistrukturerede interviews, analyse af artefakter (herunder workflow og beslutningsregler i platformen) og systemiske udtræk. Triangulering anvendes som analytisk redskab til at belyse spændet mellem formelle principper i systemets og organisationens *governance* — dvs. aftalte roller, kontrolpunkter og ansvarsfordeling — og den faktiske beslutningsadfærd (Rossman & Wilson, 1985). Interviewanalyse og kodning begrundes metodisk med reference til etableret kvalitativ praksis og pensum (Saunders et al., 2023; Kuada, 2012); Rossman og Wilson bruges ikke som primær kilde til selve kodningsproceduren.

---

## 4. Empiri, etik og kvalitetskriterier

Empirien kombinerer tre spor. Primære data udgøres af semistrukturerede interviews med purposive udvalgte informanter med strategisk, operativ eller teknisk indsigt i den afgrænsede proces (Saunders et al., 2023). To forundersøgelsesinterviews er gennemført med ledelsesniveau og teknisk ansvarlig og indgår som grundlag for problemafklaring (bilag B). Sekundære data omfatter artefakter og dokumenterede udtræk fra platformen, der kan belyse beslutningsflow og tidsmæssige mønstre. Ingen enkelt kilde alene kan besvare problemformuleringen om spildtid og manuelle trin i samspillet mellem automatisering og praksis; derfor er kombinationen central.

Den kvantitative del understøtter beskrivelse af observerbare mønstre inden for tværsnittet. Detaljerede indikatordefinitioner, fuld liste over KPI og procedure for dataudtræk dokumenteres i bachelorprojektets metodebilag, ikke i denne synopsis.

Trianguleringens funktion er at sammenholde fortolkninger fra interviews med artefakters beskrivelse af den formelle logik og med mønstre i systemdata, så eventuelle uoverensstemmelser behandles som analytisk indhold snarere end som fejl (Rossman & Wilson, 1985).

Undersøgelsen involverer personer og virksomhedsdata og kræver derfor eksplicit etisk stillingtagen. Aksiologisk lægges vægt på informeret samtykke, klar formålsbeskrivelse, anonymisering af citater i offentlig fremstilling, ansvarlig håndtering af data og mulighed for tilbagetrækning (Kuada, 2012). Samtykke og dokumentationspraksis for forundersøgelse og videre dataindsamling beskrives konkret i bilag C. Mundtlig accept kan udgøre ét led i en samlet procedure, men erstatter ikke en redegørelse for, hvordan informanter er informeret, og hvordan persondata beskyttes; eventuel skriftlig bekræftelse indgår, hvor det er muligt og relevant.

For det kvalitative spor anvendes Lincoln og Gubas kriterier formidlet via Kuada (2012). Credibility understøttes gennem triangulering og informantvalidering, hvor centrale fortolkninger forelægges informanter i relevant kontekst, så de kan bekræfte, præcisere eller afvise gengivelsen. Transferability understøttes gennem tydelig beskrivelse af case og afgrænsning. Dependability understøttes gennem sporbar dokumentation af interviewguide, kodningsbeslutninger og analyseforløb. Confirmability understøttes gennem åbenhed om forskerposition og gennem at fastholde modstridende fund som en del af analysen. For det kvantitative spor lægges vægt på målepålidelighed i definitionerne, stabilitet inden for den valgte periode og repræsentativitet inden for den afgrænsede sagspopulation (Kuada, 2012; Saunders et al., 2023).

Insider-nærhed til case kan styrke adgang og feltkendskab, men øger risiko for bekræftelsesbias. Det håndteres gennem transparens om position, inddragelse af flere roller i materialet og gennem systematisk opmærksomhed på negative indikatorer såsom hyppig overstyring, gentagne gennemgange og lange beslutningsforløb som fuldt legitime analytiske fund på linje med effektivitetsgevinster.

---

## 5. Oversigt over research design

Nedenstående figur samler research designet fra vidensniveauer til empiriske spor og fungerer som strukturbevis for sammenhæng mellem problemformulering, filosofiske valg og datagrundlag.

![Figur 1 — Research design (Support Solutions / SoluTalent, Benjamin Zeka)](figures/RESEARCH_STRUCTURE_SYNOPSIS_LUKA.svg)

**Figur 1.** Egen figur, udarbejdet af forfatteren, baseret på undervisningsmateriale og på Kuada (2012), Holm (2023) og Saunders et al. (2023). Figuren visualiserer sammenhæng mellem ontologi, epistemologi, pragmatisk metodologi, abduktion, sekventielt udforskende design, single-case med organisatorisk afgrænsning, tværsnit og triangulering i undersøgelsen af AI som beslutningsstøtte og spildtid i den angivne procesafgrænsning. Den strategiske kombination af kvalitative og kvantitative spor forankres i Rossman og Wilson (1985).

---

## 6. Litteraturliste (Harvard)

Holm, A. B. (2023). *Videnskab i virkeligheden – En grundbog i videnskabsteori* (3. udg.). Samfundslitteratur.

Kuada, J. (2012). *Research Methodology: A Project Guide for University Students*. Samfundslitteratur.

Right People Group. (n.d.). *Consultants, vendor management, IT recruitment*. Tilgået 12. marts 2026 fra https://rightpeoplegroup.com

Right People Group. (n.d.). *People powering excellence*. Tilgået 12. marts 2026 fra https://rightpeoplegroup.com/services/consultants

Rossman, G. B. & Wilson, B. L. (1985). Numbers and Words: Combining Quantitative and Qualitative Methods in a Single Large-Scale Study. *Evaluation Review*, 9(5), 627–643.

Saunders, M. N. K., Lewis, P. & Thornhill, A. (2023). *Research Methods for Business Students* (9. udg.). Pearson.

SoluTalent. (n.d.). *SoluTalent – Premium Global Freelancers*. Tilgået 12. marts 2026 fra https://solutalent.com

Support Solutions. (n.d.). *IT konsulenter – første CV inden 48 timer*. Tilgået 12. marts 2026 fra https://support-solutions.dk

---

## 7. Bilag og disposition

Planlagte bilag omfatter (A) research structure-diagram som i figur 1, (B) forundersøgelsesnoter fra interviews med informant på ledelsesniveau og teknisk ansvarlig i anonymiseret form, og (C) samtykke- og informationsmateriale knyttet til informanter. En foreløbig disposition for bachelorrapporten følger den sædvanlige rækkefølge fra indledning og problemfelt over teori og metode til analyse, diskussion og konklusion; analysekapitlet kan struktureres efter problemformuleringens dimensioner uden at gentage dem som en skoleliste i rapportens indledende kapitler.
