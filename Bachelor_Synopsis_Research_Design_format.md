# Synopsis – Bachelorprojekt, Økonomi & IT  
## (Research Design-format efter kursus 2026F)

**Titel:** AI-automatisering i bemandingsprocessen: Et pragmatisk casestudie af spildtidsreduktion hos Support Solutions ApS  

**Forfattere:** Benjamin & Luka  
**Uddannelse:** Bachelor i Økonomi & IT  
**Casevirksomhed:** Support Solutions ApS (SS)

Synopsen er forarbejde til eksamensrapporten og kan ændres undervejs. Den endelige synopsis kan anvendes i projektrapporten i kondenseret form (Salling, SDU, 2016).  
**Vejleder skal godkende synopsis inkl. problemformulering inden for tre uger efter semesterstart. Deadline for anmodning til vejleder: 16. februar 2026 kl. 10.00.**

---

## 1. Problemstilling

*Emneområde og baggrund for at stille problemformuleringens spørgsmål.*

Digitalisering og AI transformerer måden, virksomheder rekrutterer og allokerer ressourcer på; særligt i videns- og konsulentbranchen er den rette match mellem konsulent og opgave afgørende for omsætning og kundetilfredshed. For mindre og mellemstore IT-konsulenthuse er bemandingsprocessen ofte kendetegnet ved manuelle, erfaringsbaserede beslutninger, som skaber spildtid: langsomme matchforløb, mismatch og manuelle gentagelsesopgaver.

Support Solutions ApS har udviklet SoluTalent – en AI-drevet talentplatform, der automatiserer matching af freelancekonsulenter til projektopgaver (bl.a. seksstegs AI-matchingpipeline, KPI-dashboard med Precision@5, Override Rate og beslutningstid). Der mangler imidlertid en systematisk analyse af, *hvor* i processen spildtiden opstår, i hvilket omfang AI-automatiseringen adresserer den, og hvilke organisatoriske forudsætninger der skal være opfyldt for at realisere potentialet.

---

## 2. Problemformulering

*Det meget kontant formulerede spørgsmål, som den endelige konklusion skal være svaret på.*

**Hvordan påvirker AI-baseret automatisering spildtid i bemandingsprocessen fra opgaveidentifikation til konsulentallokering hos Support Solutions ApS – og i hvilket omfang kan de resterende manuelle procestrin reduceres eller yderligere automatiseres?**

- **X (hvad):** Spildtid i bemandingsprocessen og AI-automatiseringens påvirkning heraf; muligheder for at reducere eller yderligere automatisere resterende manuelle trin.  
- **Y (hvordan):** Pragmatisk, eksplorativt casestudie med artefaktanalyse (SoluTalent), semistrukturerede interviews og proceskortlægning.  
- **Z (hvorfor):** For at forstå, hvordan et mindre IT-konsulenthus kan anvende AI til at reducere processpild – og hvilke betingelser det kræver.

**Underspørgsmål:**  
1) Hvor opstår spildtid i as-is-processen, og hvad er årsagerne?  
2) Hvilke procestrin automatiserer SoluTalent, og hvilke forbliver manuelle – og hvorfor?  
3) Hvilke indikatorer ses i spildtidsmål (fx beslutningstid, time-to-match, override rate, rejection reasons) – og hvilke trade-offs opstår?  
4) Hvilke TOE-forudsætninger kræves for at reducere de resterende manuelle trin?

**Afgrænsning:** Processen analyseres fra *staging_imported* til *matched* i SoluTalent (2025–2026). Jobsourcing/ekstern rekruttering, onboarding, kontrakt, løn/fakturering er out of scope. Kun SS og SoluTalent. Analysen er forretnings- og organisationsorienteret; ML-udvikling er ikke genstand for analyse. Projektet analyserer ikke personhenførbare data på individniveau i rapporten; data anvendes aggregeret/anonymiseret, og GDPR/bias behandles som kontekstuel ramme. Samtykke fra virksomheden foreligger.

---

## 3. Overvejelser over teori og metode

*Faglig indfaldsvinkel til emnet og den praktiske måde, undersøgelsen gennemføres på.*

**Videnskabsteori:** Pragmatisk position med forankring i 7. semesters metodepensum (Holm, 2023; Kuada, 2012), suppleret af Saunders (2023). Ontologi: virkeligheden er kompleks; fokus på det med praktisk konsekvens. Epistemologi: viden vurderes på anvendelighed. Slutningsform: abduktiv (vekslen teori ↔ empiri). Metodepluralisme er valgt, fordi PF er handlingsorienteret og empirien har dualitet: menneskers oplevelser (interviews) og et konkret artefakt (SoluTalent).

**Teoretisk ramme:**  
- **Lean/Waste (Womack & Jones):** Kategorisering af spildtid (ventetid, overprocessering, fejl/rework m.m.). (Anvendes som analytiske kategorier til mapping af spild i vidensarbejde.) → underspørgsmål 1.  
- **Procesoptimering as-is → to-be (Davenport):** Nuværende vs. AI-understøttet workflow → underspørgsmål 1 og 2.  
- **Decision Support Systems (Keen & Scott Morton; Turban et al.):** AI-matching som beslutningsstøtte, human-in-the-loop → underspørgsmål 2 og 3.  
- **TOE (Tornatzky & Fleischer):** Teknologiske, organisatoriske og miljømæssige forudsætninger for AI-adoption → underspørgsmål 4.

**Forskningsdesign:** Eksplorativt single-case studie med indlejret enhed, metodisk forankret i Holm (2023), Kuada (2012) og Saunders (2023). *Embedded unit:* bemandingsworkflowet i SoluTalent (*staging_imported* → *matched*) som delproces i SS' ressourceallokering. **Figurer:** Procesdiagrammer (as-is/to-be), framework og AI-pipeline fra `Solutalent CODE CONTEXT/figures/` (jf. FIGUR_REFERENCE_SYNOPSIS.md). Research structure-diagram vedlægges som bilag (eksamenskrav). Analysestrategi: tematisk kodning (Kuada, 2012; Saunders, 2023), proceskortlægning as-is/to-be, krydsanalyse interview–artefakt, TOE-strukturering. Validitet: triangulering (tre kilder), informant-validering, transparent interviewguide. **Bias-refleksion (praktikantrolle/medudviklere):** Modtræk – (1) negativ-case analyse: opsøg cases hvor AI fejler (høje overrides, bestemte rejection reasons); (2) kilde-triangulering med konflikt: når interview siger "AI sparer tid", skal platformdata understøtte det, ellers forklares afvigelsen; (3) informantspredning: mindst én informant der ikke er tæt på SoluTalent i daglig drift (reduktion af halo-effekt).

---

## 4. Empiri

*De data eller andre kilder, der bruges som grundlag for undersøgelsen.*

| Kilde | Indhold | Anvendelse |
|-------|---------|------------|
| **Semistrukturerede interviews (4–6)** | Direktører, partnere, projektledere hos SS | Spildtid, beslutningspraksis, barrierer (USP 1, 3, 4) |
| **Artefaktanalyse: SoluTalent** | Workflow-states, AI-pipeline, KPI-dashboard, datamodeller; udtræk/validering af match_analytics (override, rejection reasons, decision time) | Automatiserede vs. manuelle trin, KPI-struktur (USP 2, 3) |
| **Dokumentanalyse** | Procesbeskrivelser, matchdata-strukturer, analytics-log (anonymiseret) | Validering af interviewfund (USP 1, 2) |

**Operationalisering af spildtid (Lean-kategorier + målelogik):**  
- **Ventetid:** Tid mellem status-skift (queue time mellem trin) – artefakt: timestamps i datamodel + interview.  
- **Rework/fejl:** Override rate + rejection_reason-kategorier (match_analytics).  
- **Overprocessering:** Antal berøringer pr. job/match (manuelle touchpoints) – artefakt: workflow-mapping.  
- **Time-to-match:** Fra opgave oprettet til konsulent allokeret (projekt-states).  
- **Mismatch-rate:** Andel matches afvist/overruled – artefakt + interview.

For hver indikator verificeres datatilgængelighed (timestamps/fields) i SoluTalents datamodel; hvor data ikke findes, suppleres med interview og dokumentation.

---

## 5. Første udkast til disposition

| Kapitel | Indhold | Ca. sider |
|---------|---------|-----------|
| 1. Indledning | Omvendt trekant, problemformulering, afgrænsning | 5–7 |
| 2. Metode | Pragmatisme, casestudie, empirikilder, operationalisering, validitet, bias, etik | 8–10 |
| 3. Teori | Lean, Davenport, TOE, DSS – kobling til analyse | 8–10 |
| 4. Empiri og analyse | 4.1 As-is spildtid; 4.2 SoluTalents rolle (auto vs. manuelle trin); 4.3 Målbar effekt + trade-offs (KPI); 4.4 Forudsætninger (TOE) | 27–35 |
| 5. Diskussion | Sammenfatning, teoretisk diskussion, begrænsninger, implikationer | 5–7 |
| 6. Konklusion | Svar på PF og underspørgsmål, perspektivering | 3–4 |
| **I alt** | | **~56–63 sider** |

---

## 6. Første udkast til kildefortegnelse

*Litteratur om emnet kendt på forhånd – uforpligtende men obligatorisk som udkast (Salling, SDU, 2016). Metode og videnskabsteori forankres i 7. semesters kernepensum.*

*Metode og videnskabsteori (kernepensum):*
- Holm, A. B. (2023). *Videnskab i virkeligheden – En grundbog i videnskabsteori* (3. udg.). Samfundslitteratur.
- Kuada, J. (2012). *Research Methodology: A Project Guide for University Students* (1st ed.). Samfundslitteratur.
- Saunders, M. N. K., Lewis, P. & Thornhill, A. (2023). *Research Methods for Business Students* (9th ed.). Pearson.

*Projektspecifik teori (domæne):*
- Davenport, T. H. (1993). *Process Innovation: Reengineering Work through Information Technology*. Harvard Business School Press.
- Keen, P. G. W. & Scott Morton, M. S. (1978). *Decision Support Systems: An Organizational Perspective*. Addison-Wesley.
- Tornatzky, L. G. & Fleischer, M. (1990). *The Processes of Technological Innovation*. Lexington Books.
- Turban, E., Sharda, R. & Delen, D. (2014). *Decision Support and Business Intelligence Systems* (10th ed.). Pearson.
- Womack, J. P. & Jones, D. T. (2003). *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press.
