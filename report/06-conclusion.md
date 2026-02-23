# 6. Konklusion

Dette afsluttende kapitel besvarer problemformuleringen og de fire underspørgsmål, opsummerer projektets bidrag og perspektiverer til fremtidig forskning og praksis.

---

## 6.1 Besvarelse af underspørgsmål

### Underspørgsmål 1: Hvor opstår spildtid i as-is-processen, og hvad er årsagerne?

Spildtid i SoluTalents bemandingsproces koncentreres primært i **tre manuelle flaskehalse**:

1. **Trin 4 (Manuel Curation):** Jobs venter på admin-godkendelse. [DATA: Gennemsnitlig ventetid = X timer]. Årsag: Konservativ auto-approval gate (threshold 75%) betyder at mange jobs kræver manuel gennemgang.

2. **Trin 6 (Match Review):** AI-genererede matches venter på admin-beslutning. [DATA: Gennemsnitlig ventetid = Y timer]. Årsag: Ingen auto-godkendelse af høj-score matches; alle kræver menneskelig vurdering.

3. **Trin 7 (Notifikation):** Godkendte matches afventer manuel trigger til freelancere. [DATA: Forsinkelse = Z timer]. Årsag: Webhook kaldes ikke automatisk ved approval.

**Lean-kategorisering** viser at **ventetid** (waste type 1) og **overprocessering** (waste type 2) dominerer. Ventetid opstår når items ligger i køer; overprocessering opstår når admin manuelt gennemgår høj-confidence jobs/matches der kunne auto-godkendes.

**Årsagsanalyse** peger på både **tekniske faktorer** (konservative auto-approval gates, manglende automation-triggers) og **organisatoriske faktorer** (tillid til AI er ikke fuldt etableret, kvalitetskontrol prioriteres højt, admin-kapacitet).

---

### Underspørgsmål 2: Hvilke procestrin automatiserer SoluTalent, og hvilke forbliver manuelle – og hvorfor?

SoluTalent automatiserer **50% af procestrinnene**:
- **Trin 1-3:** Job import, AI enrichment, auto-approval gate (fuld automation)
- **Trin 5:** AI matching med hybrid scoring (fuld automation)

**37.5% forbliver manuelle**:
- **Trin 4:** Manuel curation af jobs med lav confidence
- **Trin 6:** Manuel review af alle AI-genererede matches
- **Trin 7:** Manuel trigger af freelancer-notifikationer

**AI-matchingen** anvender en **hybrid tilgang** (40% semantisk embedding-baseret, 60% regelbaseret scoring) og fungerer som **Decision Support System** (DSS) på automatiseringsniveau 5-6 (Parasuraman et al., 2000): AI foreslår, menneske beslutter.

**Designprincippet er human-in-the-loop**, ikke fuld automation. Dette valg skyldes:
1. **Kompleksitet:** Matching kræver kontekstuel vurdering (freelancers nuværende arbejdsbyrde, kundeforhold) som AI ikke fanger
2. **Fejlomkostninger:** Mismatch skaber utilfredse kunder og freelancere
3. **Tillid:** Organisatorisk tillid til AI er endnu ikke fuldt etableret
4. **Regulering:** EU AI Act klassificerer HR-systemer som "high-risk" og kræver human oversight

De manuelle trin bevares fordi de både har **tekniske begrænsninger** (ingen auto-approval thresholds defineret for trin 6) og **organisatoriske grunde** (kvalitetskontrol, kundeforhold, tillid).

---

### Underspørgsmål 3: Hvilke indikatorer ses i spildtidsmål, og hvilke trade-offs opstår?

**KPI-indikatorer** (seneste 30 dage):
- **Precision@5:** [DATA: X%] – Indikerer AI-rankingens præcision
- **Override Rate:** [DATA: Y%] – Andel høj-score matches afvist af admin
- **Gennemsnitlig beslutningstid:** [DATA: Z timer] – Ventetid i match review
- **Rejection rate:** [DATA: A%] – Andel matches afvist (rework/fejl)

**Spildtidsmålinger:**
- **Time-to-match:** [DATA: Samlet tid job → matched]
- **Tid i staging:** [DATA: Ventetid trin 4]
- **Match-til-beslutning:** [DATA: Ventetid trin 6]

Analysen viser en **fundamental trade-off** mellem automatisering (effektivitet) og menneskelig kontrol (kvalitet, tillid):

| Dimension | Fuld automation | Human-in-the-loop (nuværende) | Fuld manual |
|-----------|----------------|-------------------------------|-------------|
| **Effektivitet** | ✅ Høj (ingen ventetid) | ⚠️ Medium (noget ventetid) | ❌ Lav (meget ventetid) |
| **Kvalitetskontrol** | ❌ Risiko for AI-fejl | ✅ Admin fanger fejl | ✅ Fuld kontrol |
| **Tillid** | ❌ Lav (ingen menneskelig involvering) | ✅ Medium-høj (admin har kontrol) | ✅ Høj (fuld kontrol) |
| **Skalerbarhed** | ✅ Ubegrænset | ⚠️ Begrænset af admin-kapacitet | ❌ Meget begrænset |

SoluTalents niveau 5-6 design **balancerer** disse hensyn: Acceptér noget spildtid (ventetid) for at bevare kvalitetskontrol og tillid. Dette er rationelt når fejlomkostninger er høje og tillid endnu ikke fuldt etableret.

**Override rate** indikerer tilfælde hvor menneskelig vurdering tilføjer værdi ud over AI-score. [DATA: Hvis override rate er høj (>20%), indikerer det enten (a) AI er upræcis, eller (b) admin vurderer kontekstuelle faktorer AI ikke fanger.]

---

### Underspørgsmål 4: Hvilke TOE-forudsætninger kræves for at reducere de resterende manuelle trin?

**TOE-analyse** viser at yderligere automatisering kræver alignment mellem teknologiske, organisatoriske og miljømæssige faktorer:

**Technology (T):**
- **Nuværende:** [DATA: Precision@5 = X%]
- **Forudsætning for automation:** Precision@5 skal være >90% for høj-score matches før auto-godkendelse er forsvarlig
- **Enablers:** Auto-approval gate eksisterer (trin 3), KPI-dashboard viser performance, match-forklaringer giver transparens
- **Barrierer:** Feedback-loop mangler (rejection reasons bruges ikke til at re-træne model)

**Organization (O):**
- **Nuværende:** [INTERVIEW: Tillid til AI varierer; kvalitetskontrol-kultur stærk]
- **Forudsætning:** Øget tillid til AI, kulturskifte fra "kontrol alt" til "undtagelseshåndtering"
- **Enablers:** Ledelsesopbakning (investering i SoluTalent)
- **Barrierer:** Tillid ikke fuldt etableret, bekymringer om fejl, kapacitetsbegrænsning kan skabe forsigtighedsprincip

**Environment (E):**
- **Nuværende:** GDPR-compliance implementeret; EU AI Act kræver human oversight for HR-systemer
- **Forudsætning:** Balance mellem konkurrencepres (hastighed) og regulering (human oversight)
- **Enablers:** Hastighed som konkurrenceparameter legitimerer automation
- **Barrierer:** EU AI Act klassificerer HR som "high-risk" → fuld automation (niveau 9-10) kan være regulatorisk problematisk

**Prioritering af automatisering:**
1. **Kortsigtet (lav barriere):** Trin 7 (notifikation) – teknisk simpelt, ingen organisatoriske/miljømæssige barrierer
2. **Mellemlang sigt (medium barriere):** Trin 4 (curation) – udvid auto-approval til confidence ≥70, kræver tillidsopbygning
3. **Langsigtet (høj barriere):** Trin 6 (match review) – kræver Precision@5 >90%, kulturændring og regulatorisk compliance

**TOE-syntese:** Teknologi alene er ikke nok. Selv hvis AI-præcision er høj (T), vil lav tillid (O) eller regulatoriske krav (E) forhindre automation. Yderligere automatisering kræver **parallel udvikling** af T (højere præcision, feedback-loops), O (tillidsopbygning, kulturændring) og forståelse af E (compliance-strategier).

---

## 6.2 Hovedkonklusion: Besvarelse af problemformuleringen

> **Hvordan påvirker AI-baseret automatisering spildtid i bemandingsprocessen fra opgaveidentifikation til konsulentallokering hos Support Solutions ApS – og i hvilket omfang kan de resterende manuelle procestrin reduceres eller yderligere automatiseres?**

AI-baseret automatisering i SoluTalent **påvirker spildtid positivt** ved at:
1. Eliminere manuel indsats i trin 1-3 og 5 (50% af processen)
2. Reducere tid brugt på søgning og kandidatvurdering (AI-matching scorer automatisk)
3. Skabe transparens gennem KPI'er og forklaringer

Men spildtid **persisterer** i tre manuelle flaskehalse (trin 4, 6, 7), primært i form af **ventetid** (jobs/matches i køer) og **overprocessering** (manuel review af høj-confidence items). Årsagerne er både tekniske (konservative auto-approval gates) og organisatoriske (tillid, kvalitetskontrol).

**Omfanget af yderligere automatisering** afhænger af TOE-forudsætninger:
- **Trin 7 (notifikation)** kan automatiseres **straks** (lav barriere)
- **Trin 4 (curation)** kan automatiseres **gradvist** ved at sænke threshold og bygge tillid
- **Trin 6 (match review)** kan automatiseres **på sigt** når AI-præcision >90%, tillid er etableret og compliance-strategi er afklaret

SoluTalents **human-in-the-loop design** (niveau 5-6) repræsenterer en **rationel balance** mellem effektivitet (reducér spildtid) og kontrol (bevar kvalitet og tillid) givet nuværende teknologisk og organisatorisk modenhed. Designet er **ikke statisk** men kan optimeres gradvist gennem:
1. Inkrementel automation af lavrisiko-trin (trin 7 → trin 4 → trin 6)
2. Feedback-loops der kan forbedre AI-præcision baseret på override-cases
3. Kommunikation og kulturændring der bygger tillid til systemet

**Pragmatisk konklusion:** AI reducerer spildtid men erstatter ikke fuldt menneskelig vurdering i komplekse beslutninger. Optimal automatiseringsgrad er **kontekstafhængig** og skal balancere effektivitet, kvalitet, tillid og compliance.

---

## 6.3 Projektets bidrag

### Praktisk bidrag
- **For Support Solutions:** Konkret mapping af spildtid, prioritering af automatisering (trin 7 først), anbefalinger baseret på TOE-analyse
- **For SMV'er generelt:** Blueprint for inkrementel AI-automation i vidensprocesser med lektioner om tillidsopbygning, human-in-the-loop og TOE-alignment

### Teoretisk bidrag
- **Lean-teori:** Nuancering af waste-begreb i vidensarbejde – ikke al ventetid er spild hvis den skaber tillid/kvalitet
- **DSS/HITL-teori:** Udvider Parasuraman et al.'s automatiseringsniveauer med tidsdimension – systemer kan migrere mellem niveauer
- **TOE-teori:** Udvider fra adoption-forklaring til kontinuerlig optimerings-ramme; viser feedback-loops mellem T, O, E
- **Davenport:** Bekræfter at inkrementel > radikal for SMV'er med begrænset risiko-kapacitet

### Metodisk bidrag
- **Pragmatisk casestudie:** Kombination af artefaktanalyse, [interview] og platformdata som triangulering
- **Operationalisering af spildtid:** Lean-kategorier tilpasset vidensarbejde med konkrete måleindikatorer
- **Bias-håndtering:** Transparent positionering af praktikant/udvikler-rolle med negativ-case analyse

---

## 6.4 Perspektivering

### Fremtidig forskning

**Longitudinal studie:**
Dette projekt er et snapshot (2025-2026). En longitudinal studie kunne følge SoluTalents udvikling over 1-2 år og måle:
- Hvordan ændres Precision@5 over tid? (Lærer AI af feedback?)
- Hvordan ændres tillid til systemet? (Falder override rate?)
- Hvordan påvirker gradvis automation organisatorisk kultur?

**Komparativt studie:**
Sammenlign SoluTalent med andre AI-matchingplatforme (fx større HR-systemer eller konkurrenter). Identificér best practices og kontekstspecifikke faktorer.

**Bruger-perspektiv:**
Dette projekt fokuserer på admin-perspektiv (spildtid, beslutning). Fremtidig forskning kunne undersøge:
- Freelancers oplevelse af match-kvalitet
- Kunders tilfredshed med konsulenter matchet via AI vs. manuel
- Freelancers respons på AI-genererede skill improvement-forslag

**A/B-test:**
Eksperimentel sammenligning af auto-godkendelse (niveau 7-8) vs. human-in-the-loop (niveau 5-6) på faktiske matches kunne kvantificere trade-off mellem effektivitet og kvalitet.

### Bredere perspektiv: AI i vidensarbejde

SoluTalent repræsenterer en **generel tendens**: AI flytter sig fra back-office automation (fx regnskab) til **decision-support i komplekse vidensprocesser** (rekruttering, diagnostik, risikovurdering).

**Kernespørgsmål for fremtiden:**
- Hvornår er menneskelig vurdering **essentiel** vs. **spild**?
- Hvordan bygger vi tillid til AI-systemer uden at skabe automation bias (blind tillid)?
- Hvordan designer vi systemer der **lærer af human feedback** (feedback-loops)?
- Hvordan balancerer vi effektivitet med compliance (GDPR, EU AI Act)?

SoluTalents human-in-the-loop tilgang (niveau 5-6) er **ikke endepunkt** men **startpunkt** for en gradvis migration mod højere automation efterhånden som teknologi og organisation modnes. Nøglen er **pragmatisme**: Start konservativt, evaluer, lær, juster, eksperimenter.

### Afsluttende refleksion

Digitalisering og AI lover effektivisering og spildtidsreduktion. Dette projekt viser at **løftet kan indfries** – men ikke automatisk eller fuldt ud. AI-automatisering i vidensarbejde kræver:
1. **Teknologisk præcision** (Precision@5 >90%)
2. **Organisatorisk tillid** (kulturændring, kommunikation)
3. **Miljømæssig forståelse** (compliance, kundeforventninger)
4. **Pragmatisk tilgang** (inkrementel, eksperimentel, evaluerbar)

Support Solutions' rejse med SoluTalent illustrerer denne kompleksitet: AI reducerer spildtid markant (trin 1-5 automatiseret), men fuld automation støder på legitime barrierer (tillid, kvalitet, regulering). Løsningen er ikke "mere AI" men **smartere integration** af AI og menneskelig dømmekraft.

Projektets kerneindsigt kan sammenfattes i én sætning:

> **I vidensarbejde handler optimal automatisering ikke om at eliminere mennesker men om at frigøre dem til at fokusere på det, kun de kan: kontekstuel vurdering, tillidsopbygning og kompleks problemløsning.**
