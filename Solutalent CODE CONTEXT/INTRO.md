# Introduktion

Digitale platforme skaber værdi ved at forbinde aktører på tværs af markeder og
reducere friktion i matching-processer [@Parker2016; @Rochet2003; @Evans2016].
I en B2B-kontekst handler matching ikke kun om at finde et teknisk “fit”, men også
om governance, kvalitetssikring og kontraktlig håndtering [@Parker2016; @Boudreau2009].
Samtidig rykker AI-baseret beslutningsstøtte tættere på centrale HR-processer,
hvilket øger kravet til transparens, fairness og menneskelig kontrol [@Raghavan2020;
@Selbst2019; @Shneiderman2020].

Dette bachelorprojekt undersøger SoluTalent, en B2B talentplatform, som kombinerer
AI-matchning med admin-medieret beslutningstagning. Projektet er forankret i
Design Science Research (DSR) og behandler SoluTalent som et IT-artefakt, der
kan analyseres og evalueres ud fra konkrete kvalitetskriterier [@Hevner2004;
@Peffers2007]. Den empiriske base er kodebasen og dens dokumentation
(`docs/ARCHITECTURE_DECISIONS.md`, `docs/flows/`, `docs/MODULE_INTERACTIONS.md`).

> **TODO (primær empiri)**: Indsæt kort kontekst om organisation og brugergrupper
> baseret på interviews/observationer/logdata, hvis sådanne data indsamles.

---

# Problemanalyse (omvendt trekant)

## 1. Overordnet niveau (marked og teori)

Matching-platforme fungerer som tosidede markeder, hvor platformens rolle er at
facilitere udveksling og samtidig regulere kvalitet og adgang [@Rochet2003;
@Boudreau2009; @Parker2016]. Dette skaber et strukturelt behov for governance:
platformen må definere regler, der beskytter både udbuds- og efterspørgselssiden.
AI-løsninger kan forbedre matching-effektiviteten, men introducerer samtidig
risici for bias og manglende transparens [@Raghavan2020; @Selbst2019].

## 2. Domæneniveau (beslutningsstøtte i rekruttering)

I rekrutteringsdomænet er beslutninger ofte komplekse og værdiladede. DSS- og
human-in-the-loop-litteraturen argumenterer for, at AI bør fungere som
beslutningsstøtte fremfor autonom beslutningstager [@Dellermann2019;
@Parasuraman2000; @Shneiderman2020]. Det betyder, at kvalitet i processen ikke
kun måles på algoritmisk præcision, men på, om beslutninger kan begrundes og
kontrolleres.

> **TODO (primær empiri)**: Dokumentér hvordan beslutninger træffes i praksis
> (fx interview med admin/brugere), samt hvilke kriterier der faktisk vægtes.

## 3. Caseniveau (SoluTalent)

SoluTalent er implementeret som en platform med admin-medieret budgivning og
dual-signature kontraktflow, hvilket indikerer et bevidst governance-design
(`docs/ARCHITECTURE_DECISIONS.md`, ADR-005 og ADR-008). Workflow-dokumenter viser
et flow fra bud → admin review → kontrakt → tidsregistrering → fakturering
(`docs/flows/FLOW_BIDDING.md`, `docs/flows/FLOW_CONTRACT_SIGNING.md`).
AI-matchningspipen er dokumenteret som en hybrid model (semantisk + regelbaseret)
med forklaringer som output (`docs/MODULE_INTERACTIONS.md`,
`supabase/functions/ai-match/index.ts`), hvilket understøtter transparenskravet.

Samtidig fremgår det af systemvurderingen, at der findes risici i komplekse
områder som matching-pipeline og kontrakt-/faktureringstransitioner
(`docs/system-assessment.md`). Det peger på et problemfelt, hvor der både er
potentiale for effektivisering og risiko for fejl eller bias, hvis governance
og transparens ikke håndteres eksplicit.

> **TODO (primær empiri)**: Bekræft om platformen anvendes i produktion, og
> dokumentér eventuelle performance-/kvalitetsmålinger eller brugerfeedback.

---

## Samlet problemformulering (arbejdsversion)

Hvordan kan et AI-understøttet matching-artefakt designes, så det både
effektiviserer rekrutteringsprocessen og opretholder krav til transparens,
governance og beslutningskvalitet i en B2B-platformkontekst?

> **TODO (primær empiri)**: Justér problemformuleringen baseret på empiriske
> indsigter fra interviews/observationer/logs, hvis sådanne data foreligger.

