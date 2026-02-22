# Metode og forskningsdesign – Revideret udkast

> **Dokument-status**: Revideret version med alle udsagn verificeret mod kodebasen.
> Alle påstande er enten (a) dokumenteret med filsti, (b) omskrevet til neutral formulering, eller (c) markeret som TODO.

---

## 1. Videnskabsteoretisk position

Projektet positionerer sig inden for en **pragmatisk** videnskabsteoretisk tradition. Pragmatismen fokuserer på praktisk nytte og konsekvenser af viden frem for abstrakte sandhedsbegreber (Dewey, 1938; James, 1907). Denne position er velegnet til projektet, fordi:

1. **Operationalisering af "virker"**: Pragmatismen tillader, at kvalitet defineres gennem operationelle succeskriterier (funktionalitet, sikkerhed, vedligeholdbarhed) fremfor abstrakte sandhedskriterier. I praksis betyder det, at vi vurderer artefaktet mod konkrete, målbare parametre udledt af problemstillingen.

2. **Metodisk pluralisme**: Pragmatismen legitimerer kombination af datakilder (kodeanalyse, arkitekturdokumentation, eventuel brugerdata), så længe valget er begrundet i undersøgelsens formål.

3. **Kontekstafhængighed**: Løsningens kvalitet evalueres i relation til den specifikke organisatoriske kontekst, ikke som universelt gældende designprincipper.

> **TODO**: Indsæt korrekte sidetal/udgaver for Dewey (1938) *Logic: The Theory of Inquiry* og James (1907) *Pragmatism*. Overvej om Creswell (2014) eller Saunders et al. (2019) skal bruges som metode-grundreference.

---

## 2. Forskningsdesign: Design Science Research

Projektet anvender **Design Science Research (DSR)** som overordnet forskningsramme (Hevner et al., 2004; Peffers et al., 2007). DSR er velegnet, fordi undersøgelsen centrerer sig om udvikling og evaluering af et IT-artefakt – specifikt en B2B talentmarkedsplads.

DSR-cyklussen operationaliseres i projektet som:

| DSR-fase | Aktivitet i projektet |
|----------|----------------------|
| **Problemidentifikation** | Afdækning af udfordringer ved freelancer-matching i konsulentbranchen |
| **Løsningsdesign** | Arkitektur- og designbeslutninger dokumenteret som ADR'er |
| **Udvikling** | Implementering af SoluTalent-platformen (kodebase) |
| **Evaluering** | Analyse af artefaktet mod definerede succeskriterier |
| **Kommunikation** | Nærværende rapport |

### Caseafgrænsning

Projektet er et **single-case studie**, hvor:

- **Artefakt**: SoluTalent (platformen/kodebasen) — en B2B talentmarkedsplads bygget med React/TypeScript og Supabase.
- **Organisatorisk kontekst**: Support Solutions ApS, som er virksomheden bag SoluTalent. Support Solutions fungerer som mellemmand mellem freelancere og kunder (kilde: `docs/DEVELOPER_QUICKSTART.md`, `supabase/functions/generate-contract-from-bid/index.ts`).
- **Evalueringen** relateres til denne kontekst — dvs. hvordan artefaktet understøtter Support Solutions' forretningsprocesser for freelancer-matching, kontraktgenerering og tidsregistrering.

> **TODO**: Afklar og beskriv jeres egen rolle. Er I medudviklere? Praktikanter hos Support Solutions? Denne positionering er vigtig for transparens og bias-refleksion.

---

## 3. Datakilder og evidensgrundlag

### Evidenshierarki

Projektets empiri er organiseret i tre niveauer:

| Niveau | Datakilde | Status | Karakter |
|--------|-----------|--------|----------|
| **Primær** | Kodebase og ADR'er (artefakt-empiri) | Tilgængelig | Objektiv, versioneret |
| **Sekundær** | Teknisk dokumentation og system-assessment | Tilgængelig | Intern, deskriptiv |
| **Supplerende** | Eventuelle interviews/observationer | *Kun anvendt hvis gennemført og dokumenteret i bilag* | Subjektiv, kontekstuel |

### 3.1 Primær artefakt-empiri: Kodebasen

Kodebasen udgør den centrale empiri og er tilgængelig som Git-repository. Den omfatter:

- **172 React-komponenter** i `src/components/` og **65 sidekomponenter** i `src/pages/` (TypeScript/React)
- **40 Supabase Edge Functions** i `supabase/functions/` (Deno/TypeScript) — serverløse funktioner til AI-matching, CV-parsing, kontraktgenerering, e-mailhåndtering m.fl.
- **249 databasemigrationer** i `supabase/migrations/` (SQL) — dokumenterer den fulde skemaevolution
- **Arkitekturbeslutninger (ADR'er)** i `docs/ARCHITECTURE_DECISIONS.md` — 9 dokumenterede beslutninger med kontekst, rationale og konsekvenser

### 3.2 Sekundær dokumentation

| Dokument | Sti | Indhold |
|----------|-----|---------|
| Arkitekturbeslutninger | `docs/ARCHITECTURE_DECISIONS.md` | 9 ADR'er (auth, database, AI-valg, hosting, m.fl.) |
| System-assessment | `docs/system-assessment.md` | Overordnet vurdering af systemets tilstand |
| Sikkerhedsgennemgang | `docs/SECURITY_AUDIT_DEC2025.md` | Audit af RLS, auth, GDPR, edge functions (udført dec. 2025 med AI-assisteret gennemgang — **ikke** ekstern uafhængig audit) |
| Modulinteraktioner | `docs/MODULE_INTERACTIONS.md` | Dataflow og komponentafhængigheder |
| Feature-flows | `docs/flows/` (6 dokumenter) | Detaljerede bruger-/systemflows for authentication, bidding, kontraktsignering, freelancer-directory, job-import, messaging |
| Databasedokumentation | `docs/database/` (13 dokumenter) | Tabeldokumentation for alle domæner |
| Edge function-dokumentation | `docs/edge-functions/` (9 dokumenter) | Funktionsbeskrivelser, endpoints, sikkerhed |

### 3.3 Supplerende empiri

Problemafgrænsningen baseres primært på artefakt-empiri fra kodebasen (ADR'er, workflows og implementering). Supplementært kan der indgå praksisnære observationer og semistrukturerede interviews fra praktikforløbet, såfremt de gennemføres og dokumenteres (interviewguide, samtykke og transskription vedlægges som bilag).

> **TODO**: Hvis I gennemfører interviews eller har observationsnoter, beskriv her:
> - Hvem blev interviewet (rolle, ikke navn)?
> - Hvilken interviewform (semistruktureret, ustruktureret)?
> - Hvordan dokumenteret (transskription, noter)?
> - Vedlæg interviewguide som bilag.
>
> Hvis I **ikke** gennemfører interviews: Slet dette afsnit og beskriv i stedet, at artefakt-empiri og teknisk dokumentation udgør det samlede empiriske grundlag.

---

## 4. Artefaktbeskrivelse

SoluTalent er en B2B talentmarkedsplads, der forbinder skandinaviske freelancere med virksomheder. Platformen er udviklet med følgende teknologisk stack:

| Lag | Teknologi | Dokumentation |
|-----|-----------|---------------|
| Frontend | React 18, TypeScript, Tailwind CSS, shadcn/ui | `package.json`, `src/` |
| Backend | Supabase (PostgreSQL, Edge Functions, Auth, Realtime) | `supabase/`, `docs/ARCHITECTURE_DECISIONS.md` ADR-001, ADR-002 |
| AI-lag | OpenAI API (se afsnit 4.1) | `supabase/functions/ai-match/`, `supabase/functions/generate-embeddings/` |
| Hosting | Netlify (frontend), Supabase Cloud (backend) | `docs/ARCHITECTURE_DECISIONS.md` ADR-004 |
| Bogføring | E-conomic API-integration | `supabase/functions/economic/`, `docs/ARCHITECTURE_DECISIONS.md` ADR-005 |

### 4.1 AI-matchningsalgoritme (verificeret i kodebasen)

Matchning mellem freelancerprofiler og jobopslag anvender en **hybrid tilgang** med to hovedkomponenter:

**Semantisk similaritet (vægt: 0,40)**:
- Freelancer-profiler og jobopslag konverteres til 1536-dimensionelle vektorer via OpenAI's `text-embedding-3-small`-model (kilde: `supabase/functions/generate-embeddings/index.ts`, linje 151).
- Vektorerne gemmes i PostgreSQL med pgvector-udvidelsen og sammenlignes via cosinus-similaritet (kilde: `supabase/migrations/archive/2025-Q1/20250203000000_create_ai_matching_schema.sql`).

**Regelbaseret scoring (vægt: 0,60)**, fordelt på:
- Kompetencematch: 0,25
- Erfaringsniveau: 0,15
- Kategorimatch: 0,10
- Lokation: 0,05
- Anciennitet: 0,05

Disse vægte er defineret som `DEFAULT_WEIGHTS` i `supabase/functions/ai-match/index.ts`, linje 79–87. Systemet understøtter desuden dynamiske, kategori-specifikke vægte via databasefunktionen `get_matching_weights_for_category` (linje 653–665 i samme fil).

Kompetencescoring vægter yderligere freelancerens færdighedsniveau (*proficiency*: expert=1,0; advanced=0,8; intermediate=0,6; beginner=0,4) og færdighedens aktualitet (*recency*: ≤6 mdr=1,0; ≤24 mdr=0,85; ≤60 mdr=0,6; >60 mdr=0,4) — se linje 89–111 i `supabase/functions/ai-match/index.ts`.

Forklaringer af matchresultater genereres via `gpt-4o-mini` (linje 523 i `supabase/functions/ai-match/index.ts`).

> *Figur-forslag*: Flowdiagram over matchningsalgoritmen med de to spor (semantisk + regelbaseret) og deres sammenvægtning. Kan baseres på `docs/MODULE_INTERACTIONS.md`, sektion "AI Matching Pipeline".

### 4.2 CV-parsing

Platformen tilbyder to CV-parsningsmetoder:

| Metode | Model | Kilde |
|--------|-------|-------|
| Tekstbaseret | `gpt-4o-mini` | `supabase/functions/parse-cv/index.ts`, linje 212 |
| Visionsbaseret (PDF/billede) | `gpt-4o` | `supabase/functions/parse-cv-vision/index.ts`, linje 252 |

### 4.3 GDPR-compliance

Platformen implementerer følgende GDPR-relaterede features:

| Feature | Implementation | Kilde |
|---------|---------------|-------|
| Dataeksport (art. 15 & 20) | HTML-eksport af persondata | `src/pages/FreelancerSettingsPage.tsx`, linje 1021 (`handleExportData`) |
| Kontosletning | 30-dages grace period via `request_account_deletion` RPC | `src/pages/FreelancerSettingsPage.tsx`, linje 1387; `supabase/migrations/archive/2025-Q1/20250120000000_gdpr_account_deletion.sql` |
| RLS-beskyttelse | Alle kernetabeller har Row Level Security | `docs/SECURITY_AUDIT_DEC2025.md`, sektion 3 |
| PII-beskyttelse | `public_freelancers` view ekskluderer email, bankinfo, CPR/CVR | `docs/SECURITY_AUDIT_DEC2025.md`, sektion 7 |

> **NB**: Sikkerhedsgennemgangen (`docs/SECURITY_AUDIT_DEC2025.md`) er udført med AI-assisteret analyse af kodebasen — ikke af en ekstern, uafhængig auditor (se dokumentets linje 232: "Auditor: AI Assistant (Claude)").

---

## 5. Evaluering og succeskriterier

Artefaktet evalueres mod følgende operationaliserede succeskriterier:

| Kriterie | Operationalisering | Datakilde |
|----------|-------------------|-----------|
| **Funktionalitet** | Kerneworkflows kan gennemføres (matching, bidding, kontrakt) | Kodebase-analyse af implementerede flows |
| **Sikkerhed** | RLS, auth, PII-beskyttelse er implementeret | `docs/SECURITY_AUDIT_DEC2025.md`, migrationer |
| **Vedligeholdbarhed** | Kodestruktur, typesikkerhed, dokumentation | Kodebase-metrics, ADR'er |
| **Integrationskvalitet** | API-integrationer (OpenAI, E-conomic, Resend) fungerer | Edge function-implementeringer |

> **Vigtig begrænsning**: Evaluering baseret på kodeanalyse dokumenterer hvad der er *implementeret*, men ikke nødvendigvis hvordan funktionaliteten *anvendes af brugere i praksis*. Vurderinger af effekt og brugeraccept kræver supplerende data (fx brugertest, loganalyse).

Artefaktets instans udgøres af den kørende platform i projektperioden. Hvis der gennemføres produktions- eller staging-deployment, dokumenteres dette via release-noter, miljøkonfiguration og ændringslog (bilag).

> **TODO**: Beskriv om platformen er/har været i produktion. Hvis ja, angiv deployment-dato og miljø. Hvis nej, omskriv til "artefaktet evalueres på basis af kodeanalyse og lokalt testmiljø".

---

## 6. Validitet, reliabilitet og begrænsninger

### Intern validitet

- **Sporbarhed**: Alle tekniske påstande kan spores til specifikke filer og linjenumre i kodebasen (se Tabel: Claim → Evidence).
- **Versionskontrol**: Git-historik dokumenterer udviklingsforløbet og muliggør reproduktion af tidligere tilstande.

### Ekstern validitet

- **Generaliserbarhed**: Som single-case studie kan resultaterne ikke generaliseres uden forbehold. Designbeslutningerne kan dog overføres som inspiration til lignende B2B-markedspladser.

### Reliabilitet

- **Reproduktionsgrundlag**: Kodebasen er tilgængelig som Git-repository, og alle referencer kan verificeres.
- **Systematik**: Analysen følger en defineret evalueringsramme med operationelle succeskriterier.

### Begrænsninger

1. **Forskerposition**: Forfatterne er tæt på casen (udviklerrolle/praktikophold), hvilket skaber en potentiel bias i vurderingen af artefaktets kvalitet. Denne nærhed håndteres ved at basere analysen på verificerbar kode og dokumentation fremfor subjektive vurderinger.

2. **Kode vs. praksis**: Kodeanalyse kan dokumentere *hvad der er implementeret*, men ikke *hvordan det anvendes* eller *opleves* af brugere. Effektvurderinger kræver supplerende brugerdata.

3. **AI-assisteret udvikling**: Dele af kodebasen er udviklet med AI-assisterede værktøjer (jf. sikkerhedsaudit udført af Claude). Dette reflekteres i analysen, men kan påvirke vurderingen af kodekvalitet.

4. **Tidspunkt**: Analysen afspejler kodebases tilstand på et givet tidspunkt. Software er dynamisk, og vurderinger kan ændres med efterfølgende opdateringer.

> **TODO**: Hvis I har andre begrænsninger (fx manglende brugerdata, begrænset testmiljø), tilføj dem her.

---

## 7. Etik og ansvarlighed

### GDPR og persondatabeskyttelse

Platformen håndterer persondata (freelancer-profiler, kontaktoplysninger, bankdata). Implementerede beskyttelsesforanstaltninger er beskrevet i afsnit 4.3. Etisk reflekteres der over:

- **Dataminimering**: Embeddings indeholder ikke PII (kilde: kommentar i `supabase/migrations/archive/2025-Q1/20250203000000_create_ai_matching_schema.sql`: "Normalized profile text (no PII)").
- **Informeret samtykke**: Kontosletning kræver eksplicit bekræftelse ("type DELETE", kilde: `src/pages/FreelancerSettingsPage.tsx`, linje 1400).

### AI-bias og fairness

AI-matchningen anvender foruddefinerede vægte og OpenAI-modeller, hvilket introducerer potentiel algoritmisk bias:

- Semantiske embeddings kan afspejle bias fra OpenAI's træningsdata.
- Vægtfordelingen (kompetence 25%, erfaring 15% osv.) er designbeslutninger, der prioriterer bestemte kandidatprofiler.
- Systemet er designet med transparens: `weights_used` returneres i API-response og persisteres i `match_analytics`-tabellen (kilde: `supabase/functions/ai-match/index.ts`, linje 848–856; `20260107110000_phase4_enhanced_analytics.sql`).

### Forskeretik

> **TODO**: Tilføj refleksion over jeres egen rolle:
> - Er I inhabile (medudviklere)?
> - Hvordan håndterer I dette i analysen?
> - Eventuel anonymisering af brugere/kunder.

---

# Tabel: Claim → Evidence

| # | Påstand i originalt udkast | Verificeret? | Evidens (filsti / status) |
|---|---------------------------|--------------|---------------------------|
| 1 | `text-embedding-3-small` som embedding-model | ✅ **Ja** | `supabase/functions/generate-embeddings/index.ts` linje 151; `supabase/functions/ai-match/index.ts` linje 919 |
| 2 | `gpt-4o-mini` til match-forklaringer | ✅ **Ja** | `supabase/functions/ai-match/index.ts` linje 523 |
| 3 | `gpt-4o-mini` til CV-parsing (tekst) | ✅ **Ja** | `supabase/functions/parse-cv/index.ts` linje 212 |
| 4 | `gpt-4o` til CV-parsing (vision) | ✅ **Ja** | `supabase/functions/parse-cv-vision/index.ts` linje 252 |
| 5 | Semantisk vægt: 0,40 / Regelbaseret: 0,60 | ✅ **Ja** | `supabase/functions/ai-match/index.ts` linje 79–87 (`DEFAULT_WEIGHTS`) |
| 6 | Delvægte: skills=0,25, experience=0,15, category=0,10, location=0,05, seniority=0,05 | ✅ **Ja** | Samme fil, linje 82–86 |
| 7 | "161 komponenter" | ❌ **Forkert** | Faktisk: 172 komponentfiler i `src/components/` + 65 sidefiler i `src/pages/` = **237 .tsx-filer total** |
| 8 | "26 edge functions" | ❌ **Forkert** | Faktisk: **40 edge functions** i `supabase/functions/` (ekskl. `_shared/`-mappen) |
| 9 | "250 migrationer" | ✅ **Korrekt** | Faktisk: **249 .sql-filer** i `supabase/migrations/` (inkl. arkiverede) |
| 10 | `docs/SECURITY_AUDIT_DEC2025.md` eksisterer | ✅ **Ja** | Filen findes — **men** auditor er "AI Assistant (Claude)", ikke ekstern auditor (linje 232) |
| 11 | Dataeksport (GDPR) | ✅ **Ja** | `src/pages/FreelancerSettingsPage.tsx` linje 1021 (`handleExportData`) |
| 12 | Kontosletning (GDPR) | ✅ **Ja** | `src/pages/FreelancerSettingsPage.tsx` linje 1387 (`handleDeleteAccount`); `supabase/migrations/archive/2025-Q1/20250120000000_gdpr_account_deletion.sql` |
| 13 | Audit logging | ✅ **Ja** | `src/pages/admin/AuditLogsPage.tsx`; `audit_log`-referencer i 30+ migrationer |
| 14 | Support Solutions som organisatorisk kontekst | ✅ **Ja** | Kontrakt-templates (`supabase/functions/generate-contract-from-bid/index.ts`), `docs/DEVELOPER_QUICKSTART.md`, admin-sider |
| 15 | ADR-dokumentation | ✅ **Ja** | `docs/ARCHITECTURE_DECISIONS.md` (9 ADR'er) |
| 16 | System-assessment | ✅ **Ja** | `docs/system-assessment.md` |
| 17 | "Interview med Support Solutions" | ❌ **Ikke dokumenteret** | Ingen interviewnoter, -guides eller transskripter i repo. Omskrevet til betinget formulering |
| 18 | "Observation fra praktikophold" | ❌ **Ikke dokumenteret** | Ingen observationsnoter i repo. Omskrevet til betinget formulering |
| 19 | "Deployment af platform.solutalent.com" | ⚠️ **Delvist** | URL refereret i CORS-config (`docs/SECURITY_AUDIT_DEC2025.md` linje 137), men ingen deployment-logs eller release-noter i repo |
| 20 | RLS på alle tabeller | ✅ **Ja** | `docs/SECURITY_AUDIT_DEC2025.md` sektion 3; migrationer med `enable row level security` |
| 21 | Proficiency/recency-multiplikatorer | ✅ **Ja** | `supabase/functions/ai-match/index.ts` linje 89–111 |
| 22 | Dynamiske kategori-vægte | ✅ **Ja** | `supabase/functions/ai-match/index.ts` linje 650–668 (`get_matching_weights_for_category`) |
| 23 | PII ekskluderet fra embeddings | ✅ **Ja** | Kommentar i migrering: "Normalized profile text (no PII)" (`20250203000000_create_ai_matching_schema.sql` linje 114) |
| 24 | Weights_used gemt med matchresultat | ✅ **Ja** | `supabase/functions/ai-match/index.ts` linje 848–856, 953 |

---

# Appendiks-forslag

| Bilag | Indhold | Kilde |
|-------|---------|-------|
| Bilag A | ADR-liste (komplet) | `docs/ARCHITECTURE_DECISIONS.md` |
| Bilag B | Kodebase-metrics (output fra tællescript) | Kommandoer i dette dokument |
| Bilag C | AI-matchningsalgoritme (pseudokode/flow) | `supabase/functions/ai-match/index.ts` |
| Bilag D | Sikkerhedsgennemgang (dec. 2025) | `docs/SECURITY_AUDIT_DEC2025.md` |
| Bilag E | Database-skema (ER-diagram) | Genereres fra migrationer |
| Bilag F | *Interviewguide + transskription (hvis gennemført)* | TODO |
| Bilag G | *Observationsnoter fra praktik (hvis dokumenteret)* | TODO |

