# 20 — Lukas case og synopsis: Support Solutions ApS

## Formål
Denne fil giver botten fuldt kendskab til Lukas konkrete synopsis, case og designvalg. Brug den til at stille case-specifikke eksamensspørgsmål, identificere svagheder i argumentation, og simulere Jens Andersens pressespørgsmål.

---

## Casen i én sætning
Support Solutions ApS er et dansk IT-konsulentbureau der matcher konsulenter med klienters IT-projekter via platformen SoluTalent — en algoritme rangerer konsulenterne, men medarbejderne vurderer, accepterer, afviser eller overstyrer inden endelig indstilling.

---

## Problemformulering
**"Hvordan kan Support Solutions ApS implementere AI-baseret automatisering i bemandingsprocessen for indstilling af konsulenter til løsning af deres klienters IT-projekter?"**

- Spørgsmålet er et **"hvordan"**-spørgsmål → begrunder case-studiet som strategi
- Det er **åbent og undersøgende** — målet er kontekstuel indsigt, ikke kausal effekt
- AI-baseret automatisering = algoritmisk rangering i SoluTalent (ikke generativ AI)
- SoluTalent fungerer som **beslutningsstøttesystem (DSS)** — systemet peger, medarbejderen beslutter (human-in-the-loop)

---

## Procesafgrænsning
**Inden for scope:** Fra en opgave er registreret i SoluTalent → til en konsulent er klientindstillet

**Uden for scope:**
- Aktiviteter *før* registrering: jobsourcing, leadhåndtering
- Aktiviteter *efter* matching: kontrakt, løn, onboarding, fakturering
- Komparativ analyse af andre platforme
- Teknisk evaluering af maskinlæringsmodellen

**Platformen behandles som:** Organisatorisk artefakt, ikke genstand for teknisk ML-evaluering

---

## Kerneudfordringen (fra tre forundersøgelsesinterviews)
Tre informanter er interviewet:
- **Informant 1** — ledelse
- **Informant 2** — teknisk ansvarlig (har insider-viden om platformen)
- **Informant 3** — ledelse

Samstemmende fund: Kerneudfordringen er **ikke** mangel på kandidater, men **kvaliteten og konsistensen i udvælgelses- og beslutningsprocessen**.

Konkrete citater fra interviewene:
- "Beslutninger kan blive liggende lidt for længe" (bilag A)
- "Processen kan gå i stå i de manuelle led" (bilag B)
- "Systemet peger, men ikke beslutter" (bilag B)

Variation i medarbejdernes vurderinger er dokumenteret (bilag A og C). Kvalitet vægtes højere end hastighed i den endelige indstilling.

---

## Indikatorer: KPI og KQI

### KPI'er (kvantitative proceseffektivitetsmål)
1. **Behandlingstid** — målt fra registrering til klientindstilling
2. **Gentagne vurderinger** — antal reviews pr. profil
3. **Override-rate** — andel af systemforslag der tilsidesættes af medarbejderen

### KQI'er (kvalitative kvalitetsmål)
1. **Matchkvalitet** — vurderet via ekstern klientfeedback (skriftlig, efter afsluttet indstilling)
2. **Vurderingskonsistens** — på tværs af medarbejdere
3. **Datakvalitet** — i profilgrundlaget

**Klientfeedback** fungerer som **uafhængig kontrolkilde** til medarbejdernes matchvurdering — det er det der giver KQI'erne validitet og håndterer insider-bias.

**Indikatorerne holdes bevidst få** på synopsis-niveau — fuld operationalisering hører i bachelorens metodekapitel.

---

## Det videnskabsteoretiske design — Lukas' konkrete valg

### Ontologisk ståsted: Pragmatisk
Genstandsfeltet har to sider:
1. **Observerbare spor** — tidsstempler, beslutningsknudepunkter, overstyringer i SoluTalent
2. **Organisatorisk praksis** — medarbejdernes vurdering af matchkvalitet, håndtering af usikkerhed, risikoafvejning

Disse behandles som **to sider af samme felt** — ingen reduceres til den anden.
Begrundelse: "feltet er tilstrækkeligt stabilt til at efterlade observerbare spor, men beskrivelserne formes af de begreber og spørgsmål der gør dem brugbare" (Beck Holm, 2023).

**Kobling fremad:** "Valget af pragmatisk ontologi peger frem mod et tilsvarende pragmatisk strategivalg på metodologi-niveau (Rossman & Wilson, 1984)"

### Epistemologisk ståsted: Blandet
**Interpretivist spor:** Interviews placeres i interpretivisme og moderne hermeneutik — aktørernes begrundelser og beslutningslogik forstås kun i kontekst. Forskerens forforståelse justeres i cirkulær bevægelse mellem del og helhed.

**Positivistisk spor:** Systemudtræk og definerede målepunkter — viden etableres via observerbare og målbare spor.

De to spor kombineres i pragmatisk ramme men holdes **begrebsmæssigt adskilt**.

**Slutningsform: Abduktiv** — forklaringer udvikles når empiriske mønstre overrasker eksisterende forståelse, afprøves mod teori i løbende vekselvirkning.

### Metodologisk ramme: Rossman & Wilson (1984) pragmatisk position
Problemformuleringen kræver både:
- Fortolkning af praksis (interview)
- Dokumentation af observerbare mønstre (systemdata)

→ Rossman & Wilsons pragmatiske position: de to datatyper kan bekræfte, nuancere og udfordre forståelsen af samme problemfelt.

### Forskningsdesign: Sekventielt udforskende single-case
- **Strategi:** Single-case studie — organisatorisk afgrænset til den del af Support Solutions der arbejder med matching og klientindstilling i SoluTalent
- **Begrundelse:** "hvordan"-spørgsmål om aktuelt fænomen i specifik kontekst
- **Tidshorisont:** Kvantitativt spor som tværsnitsundersøgelse i foråret 2026
- **Generalisering:** Analytisk til teori om beslutningsstøtte (Beck Holm, 2023) — ikke statistisk til branchepopulation

### Metode og teknik: Triangulering
**Sekventielt:** Interviews → kortlægger beslutningslogik → informerer design af kvantitativt spor → systemudtræk identificerer observerbare mønstre

**Formål med triangulering:** Synliggøre spændet mellem organisatorisk praksis og faktisk beslutningsadfærd i systemet

---

## Insider-position — Lukas' specifikke situation
Luka har som **udvikler bidraget til opbygningen af SoluTalent**. Det giver:

**Ressourcer:** Indgående systemkendskab, sproglig nærhed, effektiv adgang

**Risici:**
1. **Bekræftelsesbias** — søger ubevidst mønstre der bekræfter forventede resultater
2. **Designbias** — systemkendskab påvirker selve forskningsdesignet
3. **Informantpåvirkning** — informanters udsagn farves af forskerens relation til platformen

**Tre operationelle mitigeringsgreb:**
1. Negative indikatorer (overstyringer, afvisninger, lange beslutningsforløb) kodes og rapporteres på linje med positive mønstre
2. Interviewdata og systemudtræk konfronteres aktivt — hvor systemudtræk modsiger udviklerens forventning, prioriteres det empiriske mønster
3. Eksplicit audit trail i interviewguide, kodning og målepunkter

---

## Forskningsbidrag
**Ikke** en anbefaling om yderligere automatisering, men en analytisk belysning af:
> "Hvilke organisatoriske og datamæssige forudsætninger der skal være opfyldt, for at en algoritmisk matchproces kan integreres forsvarligt i en praksis med human-in-the-loop."

---

## Typiske eksamensspørgsmål specifikt til Lukas' synopsis

**Om problemformuleringen:**
1. Hvad menes der præcist med "AI-baseret automatisering" i din problemformulering?
2. Hvorfor er spørgsmålet formuleret åbent — hvad ville du miste ved en mere lukket formulering?
3. Hvad er dit forskningsbidrag — hvad tilføjer din undersøgelse?

**Om designvalg begrundet i casen:**
4. Hvorfor case-studie fremfor survey?
5. Hvorfor er det sekventielt *udforskende* og ikke sekventielt *forklarende*?
6. Hvad ville du miste, hvis du droppede det kvantitative spor helt?
7. Hvad ville du miste, hvis du droppede det kvalitative spor?

**Om KPI/KQI:**
8. Hvad er begrebsvaliditeten bag din override-rate — måler den præcist det du påstår?
9. Hvorfor er klientfeedback en uafhængig kontrolkilde, og hvad giver det dig metodisk?
10. Hvad er risikoen ved at have KPI-data fra en platform du selv har bygget?

**Om insider-position:**
11. Kan du lave troværdig forskning på en platform du selv har bygget?
12. Hvad er designbias, og hvordan er den konkret risikabel i din situation?
13. Hvad er den præcise forskel på din insider-position og bekræftelsesbias?

**Om generaliserbarhed:**
14. Til hvilken teori generaliserer du analytisk, og hvad bidrager casen med til den teori?
15. Hvad ville du sige til en censor der spørger: "Hvad kan vi lære af dette udover Support Solutions?"

**Om kongruens:**
16. Beskriv kæden fra din ontologiske position til dit konkrete metodevalg i ét sammenhængende argument.
17. Hvad er det specifikke bidrag fra Rossman & Wilson (1984) i dit design — hvad siger de, som Beck Holm ikke siger?

---

## Svage punkter Jens sandsynligvis presser på
1. **Override-rate som begreb:** Er det faktisk et mål for "systemets utilstrækkelighed" eller for "medarbejderens præference"? Begrebsvaliditet er under pres.
2. **Klientfeedback som KQI:** Hvornår modtages den, og er den tilstrækkeligt uafhængig til at fungere som kontrolkilde?
3. **"Analytisk til teori om beslutningsstøtte":** Hvad er den *præcise* teori? Beck Holm (2023) er ikke en beslutningsstøtte-teori.
4. **Sekventiel timing:** Forundersøgelsesinterviewene er allerede gennemført — er det kvalitative spor så "forundersøgelse" eller "primær empiri"?
5. **Abduktion uden eksplicit anomali:** Hvad er den konkrete anomali der udløser den abduktive slutning?
