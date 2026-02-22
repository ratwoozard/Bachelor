# Teori — nøglebegreber, konceptuelt framework og teorigap

> **Formål**: Samle centrale begrebsdefinitioner, et konceptuelt framework
> og en tydelig afgrænsning/teorigap for SoluTalent-casen.
>
> **Kilder**: Se `docs/bachelor/literature_map.md` og `docs/bachelor/references.bib`.

---

## 1. Definitioner af nøglebegreber

Definitionerne er **operationelle** og koblet til artefaktet. Når der refereres til teori,
angives litteraturkilder i parentes.

### 1.1 Beslutningskvalitet

**Definition (projektet):** Beslutningskvalitet er graden af, at en beslutning er
*velinformeret, konsistent med mål og efterfølgende kan begrundes og forklares*.
I SoluTalent måles beslutningskvalitet primært i den administrative beslutningsproces:
- AI leverer match-scores og forklaringer, men **mennesket træffer beslutningen**
  (human-in-the-loop) [@Dellermann2019; @Parasuraman2000; @Shneiderman2020].
- Kvalitet knyttes til *begrundet valg* mellem kandidater, ikke til fuld automation.

**Teoretisk forankring:** Human-in-the-loop og hybrid intelligence understreger, at
AI bør støtte — ikke erstatte — beslutningstagning i komplekse domæner [@Dellermann2019;
@Shneiderman2020]. Automationsniveauer anvendes til at positionere systemet som
"AI-forslag + human beslutning" [@Parasuraman2000].

### 1.2 Match-kvalitet

**Definition (projektet):** Match-kvalitet er graden af *overensstemmelse mellem
krav i job/projekt og freelancerens kompetenceprofil*.
I SoluTalent operationaliseres match-kvalitet via en **hybrid matchinglogik**:
- **Semantisk lighed** mellem tekstlige beskrivelser (embedding-baseret)
- **Regelbaseret match** (kompetencer, erfaring, kategori, lokation, senioritet)

Dette afspejler et beslutningsstøttesystem, hvor AI-scoren **informerer** admin,
men ikke automatisk beslutter [@Arnott2005; @Dellermann2019].

### 1.3 Transparens

**Definition (projektet):** Transparens er graden af, at AI-baserede vurderinger kan
*forklares, granskes og auditeres*.
Transparens operationaliseres som:
- **Forklaringer** til match-score (hvilke faktorer bidrager)
- **Sporbarhed** via logning og beslutningshistorik

**Teoretisk forankring:** Responsible AI-litteraturen fremhæver transparens som
en kerne for fairness og ansvarlighed [@Jobin2019; @Selbst2019; @Raghavan2020].

### 1.4 Governance

**Definition (projektet):** Governance er de **regler, roller og processer**, der
styrer adgang, interaktion og kvalitet på platformen.
I SoluTalent udtrykkes governance gennem:
- Admin-medieret budgivning (kontrolmekanisme)
- Kontaktinfo-detektion (modvirker omgåelse)
- Dual-signature kontraktflow (juridisk håndhævelse)

**Teoretisk forankring:** Platforme fungerer som regulatorer, der sætter regler
for deltagelse og kvalitet [@Boudreau2009; @Parker2016; @Tiwana2013].

### 1.5 Teknisk gæld (tech debt)

**Definition:** Teknisk gæld er akkumulerede kompromiser i design eller implementering,
ombulket som kortsigtede gevinster men med langsigtede vedligeholdelsesomkostninger
[@Cunningham1992; @Kruchten2012].

**Anvendelse i casen:** System-assessment peger på klassiske tech-debt-mønstre
(legacy database artefakter, inkonsistent data fetching, utilstrækkelige tests),
som vurderes med udgangspunkt i tech-debt-litteraturen [@Kruchten2012].

---

## 2. Konceptuelt framework

Figuren samler projektets kerneflow fra **inputs** til **outcomes** og viser,
hvordan AI/DSS, governance og transparens interagerer.

> **Konceptuel figur — egen tilvirkning**
> Kildegrundlag: DSR [@Hevner2004; @Peffers2007], DSS/HITL [@Arnott2005; @Dellermann2019; @Parasuraman2000],
> platform governance [@Parker2016; @Boudreau2009], Responsible AI [@Raghavan2020; @Selbst2019],
> softwarearkitektur [@Bass2021].

Figuren findes som Mermaid i `docs/bachelor/figures/framework.mmd`.

---

## 3. Afgrænsning og teorigap

### 3.1 Afgrænsning

- **Single-case**: Analysen er afgrænset til én platform (SoluTalent) i én
  organisatorisk kontekst (B2B talentformidling). Generalisering er analytisk,
  ikke statistisk [@Yin2018].
- **Artefaktfokus**: Evaluering bygger på kodebase-empiri og dokumentation,
  ikke på brugerdata eller performance-målinger.
- **AI som beslutningsstøtte**: Casen omhandler *human-in-the-loop* AI, ikke
  fuldautomatiske beslutningssystemer.

### 3.2 Teorigap (hvad casen bidrager med)

1. **Kobling af DSR + DSS/HITL i en platformskontekst**
   - DSR-litteraturen beskriver artefaktudvikling, men adresserer sjældnere
     human-in-the-loop-beslutningsprocesser i rekrutteringsplatforme.
   - Casen viser, hvordan AI-baseret matching designes som beslutningsstøtte
     (ikke autonom beslutning) i en platform med governance-mekanismer.

2. **Governance som fairness-mekanisme i AI-matching**
   - Responsible AI-litteraturen fokuserer ofte på modelniveau, mens
     platform governance (administrative beslutninger, kontraktflow) kan
     fungere som *praktisk fairness-kontrol*.
   - Casen illustrerer governance som et organisatorisk lag over AI-scoren.

3. **Transparens som arkitektur- og procesdesign**
   - Transparens er ikke kun et UX-spørgsmål, men også et arkitektonisk valg
     (logning, forklaringsdata, auditability).
   - Casen giver et konkret eksempel på transparenskrav, der indarbejdes i
     AI-matching og kontraktprocesser.

---

## 4. Sammenfatning

TEORI-kapitlet etablerer en fælles begrebsramme og et samlet framework, der kobler
inputs → AI/DSS → beslutningsproces → outcomes. Det tydeliggør samtidig, at casen
bidrager med indsigt i *human-in-the-loop AI* i en platformskontekst, hvor governance
og transparens fungerer som centrale designmekanismer.