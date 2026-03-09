# 1) Title Page

**Title:** SoluTalent-casen: Effektmåling af AI-automatisering i bemandingsprocessen med fokus på spildtid (positivistisk/kritisk-rationalistisk vinkel)  
**Course:** Theory of Science and Project Methodology (2024E)  
**Assignment choice:** 2) Use your current bachelor thesis (SoluTalent case)  
**Name:** Luka  
**Supervisor:** [indsæt navn]  
**Educational institution:** KEA  
**Date:** [indsæt dato]

---

# 2) Table of Contents
1. Title Page  
2. Table of Contents  
3. Introduction (scope: aims and objectives)  
4. Problem formulation and delimitation  
5. Methodology (research design)  
6. Overview (diagram) of research structure  
7. Bibliography (Harvard style)  
8. Appendix

---

# Individual hand-in note (2 forfattere-regel)
Denne synopsis er skrevet individuelt af Luka. I overensstemmelse med eksamenskravet ved co-writing af bachelorprojekt må kun problemformulering og researchdiagram være fælles med medforfatter.

Fælles elementer i de to synopsis:
- Problemformulering
- Overordnet researchdiagram/struktur

Individuelle elementer i denne version:
- Videnskabsteoretisk argumentation
- Metodeprioritering og analyseteknik
- KPI-valg, validitetsdiskussion, etiske prioriteringer
- Litteraturudvalg og appendiksdetaljer

---

# 3) Introduction (scope: aims and objectives)
SoluTalent-casen tager udgangspunkt i Support Solutions ApS og et centralt forretningsproblem: bemandingsprocessen indeholder tidskrævende manuelle led, som skaber spildtid, forsinket time-to-match og ujævn kvalitet i matchforslag.

Denne synopsis følger jeres researchdiagram og fokuserer på den del, der handler om **målbar effekt** af AI-automatisering. Hvor den fortolkende version undersøger, hvordan kvalitet forstås af aktører, er denne version rettet mod at teste, om de justeringer, SoluTalent indfører i workflowet, giver dokumenterbare forbedringer.

**Aim:** At evaluere, om AI-automatisering i SoluTalent reducerer spildtid og forbedrer centrale performanceindikatorer i bemandingsprocessen.  
**Objective:** At opstille et testbart research design med klare hypoteser, KPI’er, datakilder og evalueringskriterier, så konklusioner kan begrundes empirisk.

---

# 4) Problem formulation and delimitation
## Problem formulation (fælles med medforfatter)
**Hvordan påvirker AI-automatisering spildtid i bemandingsprocessen hos Support Solutions ApS (staging_imported → matched), og hvordan kan effekten dokumenteres i SoluTalent-casen?**

## Delimitation (i tråd med researchdiagram)
- Tidsrum: SoluTalent-workflow 2025-2026.
- Scope: processerne fra staging_imported til matched.
- Out of scope: onboarding, kontrakt og løn.
- Fokus: operationel procesperformance og dokumenterbar effekt.

## Arbejdsmæssig afgrænsning
- KPI’er afgrænses til: decision time, time-to-match, override rate, rejection reasons.
- Evaluering foretages på afgrænset pilot-/testperiode.
- Resultater fortolkes som kontekstspecifikke for casen og organisationen.

---

# 5) Methodology (research design)
## Videnskabsteoretisk udgangspunkt
**Individuel vinkel:** Kvantitativ effektvurdering af automatisering (positivistisk/kritisk-rationalistisk).

- **Ontologi (fra diagram):** Pragmatisk virkelighedsforståelse – fokus på, hvad der virker i praksis.
- **Epistemologi (fra diagram):** Anvendelsesorienteret viden med abduktiv slutningsform.
- **Videnskabsteoretisk prioritering i denne synopsis:** Effektpåstande operationaliseres, så de kan testes systematisk.

## Delanalyser (koblet til researchdiagrammets USP1-4)
### Analyse 1 – USP1: Hvor opstår spildtid i as-is?
- Metode: proceskortlægning + lean waste-kategorisering.
- Output: baseline over ventetid, håndoff-tid og gentagelsesarbejde.

### Analyse 2 – USP2: Hvad automatiserer SoluTalent, og hvad er stadig manuelt?
- Metode: artefaktanalyse af workflow, pipeline og systemlogik.
- Output: tydelig opdeling mellem automatiserede og manuelle beslutningsled.

### Analyse 3 – USP3: Hvilken målbar effekt ses?
- Metode: før/efter- og/eller A/B-lignende sammenligning.
- KPI’er: decision time, time-to-match, override rate, rejection reasons.
- Output: statistisk vurdering af ændring i performance.

### Analyse 4 – USP4: Hvilke TOE-forudsætninger kræves for videre automatisering?
- Metode: struktureret vurdering af teknologiske, organisatoriske og miljømæssige barrierer.
- Output: prioriteret implementerings- og skaleringslogik.

## Hypoteser
- **H1:** AI-automatisering reducerer gennemsnitlig decision time signifikant.
- **H0:** AI-automatisering medfører ingen signifikant ændring i decision time.
- **H2:** AI-automatisering reducerer time-to-match for profiler med høj datakomplethed.
- **H3:** Override rate falder, når matchkriterier er tydeligt operationaliserede.

## Data and analysis
### Datagrundlag (fra diagram)
- Interviews (supplerende)
- Artefakter (workflow-design, pipelineopsætning, kravprofiler)
- Dokumenter (procesbeskrivelser, kvalitetskriterier)
- Event logs / performanceudtræk
- Triangulering på tværs af kilder

### Analyseplan
1. Etablering af baseline for as-is.
2. Klassificering af automationsgrad per procestrin.
3. KPI-beregning før/efter eller A/B-lignende.
4. Robusthedstjek (fx segmentering på jobtyper/datakomplethed).
5. Syntese af effekt, trade-offs og implementeringskrav.

### Interviewrolle i denne vinkel
Interviews er ikke primær effekt-evidens, men bruges til:
- validering af procesforståelse,
- forklaring af outliers,
- kvalificering af KPI-fortolkning.

## Quality criteria
- **Reliabilitet:** ens KPI-definitioner, ens udtrækslogik, reproducerbar beregningsmetode.
- **Begrebsvaliditet:** “spildtid” og “matchkvalitet” defineres operationelt før analyse.
- **Intern validitet:** sammenligningsdesign med tydelig kontrol for centrale forskelle.
- **Ekstern validitet:** begrænset generaliserbarhed; kontekstnær anvendelighed prioriteres.

## Ethics
- Dataminimering og anonymisering af persondata.
- Transparens om automatiserede beslutningskriterier.
- Vurdering af bias-risiko i modelparametre.
- Hensyn til human-in-the-loop, så kritiske beslutninger kan efterprøves.

## Foreløbig syntese og diskussion (i tråd med diagram)
Resultater diskuteres som trade-offs mellem:
- effektivitet,
- kvalitet,
- human-in-the-loop,
- bias,
- GDPR.

Målet er ikke alene høj hastighed, men dokumenteret forbedring med ansvarlig beslutningsstøtte.

---

# 6) Overview (diagram) of your research structure (fælles med medforfatter)
```text
Research-diagram – SoluTalent-casen

1) Videnskabsteori
   Ontologi: pragmatisk virkelighedsforståelse
   Epistemologi: anvendelsesorienteret viden, abduktiv slutningsform

2) Problem
   Problemfelt: manuel bemanding skaber spildtid
   Problemformulering: effekt af AI-automatisering på spildtid (staging_imported → matched)
   Afgrænsning: SoluTalent-workflow 2025-2026, out of scope: onboarding/kontrakt/løn

3) Delanalyser
   USP1: Spildtid i as-is (lean waste + proceskort)
   USP2: Hvad er automatiseret vs manuelt? (artefaktanalyse)
   USP3: Målbar effekt (KPI: decision time, time-to-match, override rate, rejection reasons)
   USP4: TOE-forudsætninger for videre automatisering

4) Data og metode
   Datagrundlag: interviews + artefakter + dokumenter (triangulering)

5) Syntese
   Trade-offs: effektivitet, kvalitet, human-in-the-loop, bias, GDPR
   Konklusion + perspektivering til lignende SMV-konsulenthuse
```

---

# 7) Bibliography (Harvard style)
Creswell, J.W. and Creswell, J.D., 2018. *Research Design: Qualitative, Quantitative, and Mixed Methods Approaches*. 5th ed. Thousand Oaks: SAGE.  
Popper, K., 2002. *The Logic of Scientific Discovery*. London: Routledge.  
Womack, J.P. and Jones, D.T., 2003. *Lean Thinking*. London: Simon & Schuster.  
Undervisningsmateriale (KEA), 2024. Positivisme, Kritisk Rationalisme, Empiri og Metoder, Videnskab og Etik.

---

# 8) Appendix
## Appendix A: KPI-definitioner (draft)
- Decision time: tid fra kandidat vises til beslutning registreres.
- Time-to-match: tid fra staging_imported til matched.
- Override rate: andel anbefalinger manuelt overstyret.
- Rejection reasons: kategoriserede årsager til afvisning.

## Appendix B: Evalueringsflow (draft)
1. Udtag baseline (as-is).
2. Kør sammenligningsvindue med justeret automatisering.
3. Beregn KPI-forskelle.
4. Kør robusthedstjek.
5. Dokumentér fund, begrænsninger og anbefalinger.

## Appendix C: Kort interviewguide (supplement)
- Hvor opstår ventetid i praksis?
- Hvornår overstyrer teamet automatiske forslag?
- Hvilke kvalitetskriterier vurderes som vigtigst i match?
