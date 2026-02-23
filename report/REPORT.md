# AI-automatisering i bemandingsprocessen
## Et pragmatisk casestudie af spildtidsreduktion hos Support Solutions ApS

---

**Forfattere:** Benjamin & Luka  
**Uddannelse:** Bachelor i Økonomi & IT  
**Uddannelsesinstitution:** KEA – Københavns Erhvervsakademi  
**Casevirksomhed:** Support Solutions ApS  
**Vejleder:** [Indsæt vejledernavn]  
**Dato:** Februar 2026  
**Anslag:** [Indsæt anslag ved aflevering]

---

## Abstract

Dette bachelor-projekt undersøger hvordan AI-baseret automatisering påvirker spildtid i bemandingsprocessen hos Support Solutions ApS gennem analyse af SoluTalent-platformen. Projektet anvender en pragmatisk videnskabsteoretisk position med eksplorativt casestudie-design kombinerende artefaktanalyse, semistrukturerede interviews og platformdata.

Analysen viser at spildtid koncentreres i tre manuelle flaskehalse (manuel curation, match review, notifikationstrigger), primært i form af ventetid og overprocessering. SoluTalent automatiserer 50% af procestrinnene men bevarer human-in-the-loop design (automatiseringsniveau 5-6), hvilket skaber en trade-off mellem effektivitet og kvalitetskontrol.

TOE-analyse identificerer at yderligere automatisering kræver alignment mellem teknologiske forudsætninger (højere AI-præcision), organisatoriske forudsætninger (øget tillid, kulturændring) og miljømæssige hensyn (GDPR/EU AI Act compliance). Projektet bidrager teoretisk ved at nuancere Lean waste-begreb i vidensarbejde og udvide TOE-framework til kontinuerlig optimerings-ramme.

**Nøgleord:** AI-automatisering, spildtid, Lean, beslutningsstøttesystemer, human-in-the-loop, TOE-framework, bemandingsproces, pragmatisme

---

## Indholdsfortegnelse

### [1. Indledning](01-introduction.md)
- 1.1 Problemfelt – Den omvendte trekant
- 1.2 Problemformulering (XYZ-princippet)
- 1.3 Afgrænsning
- 1.4 Læsevejledning

### [2. Metode og forskningsdesign](02-method.md)
- 2.1 Videnskabsteoretisk position: Pragmatisme
- 2.2 Forskningsdesign: Eksplorativt casestudie
- 2.3 Empirikilder og dataindsamling
- 2.4 Operationalisering af "spildtid"
- 2.5 Analysestrategi
- 2.6 Validitet og troværdighed
- 2.7 Bias-refleksion og forskerpositioning
- 2.8 Etiske overvejelser
- 2.9 Opsummering af metodevalg

### [3. Teoretisk ramme](03-theory.md)
- 3.1 Lean Waste – Spildtid i vidensarbejde
- 3.2 Procesoptimering: As-is → To-be (Davenport)
- 3.3 Decision Support Systems og Human-in-the-Loop
- 3.4 TOE-frameworket – Forudsætninger for teknologiadoption
- 3.5 Teoriernes samspil – Analytisk syntese
- 3.6 Sammenfatning: Teoretisk positionering

### [4. Analyse](04-analysis.md)
- 4.1 As-is: Hvor opstår spildtid i nuværende proces?
  - 4.1.1 Proceskortlægning – SoluTalents 8-trins workflow
  - 4.1.2 Identifikation af primære flaskehalse
  - 4.1.3 Lean-kategorisering af identificeret spildtid
  - 4.1.4 Årsagsanalyse
- 4.2 Automatisering vs. manuelle trin – SoluTalents struktur
  - 4.2.1 Mapping af automatiserede vs. manuelle trin
  - 4.2.2 AI-matchingpipeline – Hybrid tilgang
  - 4.2.3 Human-in-the-Loop som designprincip
  - 4.2.4 Hvorfor forbliver trin 4, 6, 7 manuelle?
- 4.3 Effekt og trade-offs – KPI-evaluering
  - 4.3.1 KPI-struktur i SoluTalent
  - 4.3.2 KPI-resultater (30-dages periode)
  - 4.3.3 Spildtidsindikatorer
  - 4.3.4 Trade-offs: Automatisering vs. Kontrol
- 4.4 TOE-forudsætninger for yderligere automatisering
  - 4.4.1 Technology: Teknologiske forudsætninger
  - 4.4.2 Organization: Organisatoriske forudsætninger
  - 4.4.3 Environment: Eksterne forudsætninger
  - 4.4.4 TOE-syntese

### [5. Diskussion](05-discussion.md)
- 5.1 Sammenfatning af hovedfund
- 5.2 Teoretisk diskussion
  - 5.2.1 Lean waste i vidensarbejde – Bekræftelse og nuancering
  - 5.2.2 DSS og human-in-the-loop – Hvornår giver det mening?
  - 5.2.3 TOE-framework – Teknologi alene er ikke nok
  - 5.2.4 Davenport's as-is → to-be – Inkrementel vs. radikal
- 5.3 Kritisk refleksion og begrænsninger
  - 5.3.1 Kode vs. praksis
  - 5.3.2 Bias-risiko: Praktikant og medudvikler-rolle
  - 5.3.3 Single-case begrænser generaliserbarhed
  - 5.3.4 Tidspunkt: Snapshot af udviklende system
- 5.4 Praktiske implikationer og anbefalinger
  - 5.4.1 For Support Solutions ApS
  - 5.4.2 For vidensintensive SMV'er generelt
- 5.5 Teoretiske implikationer
- 5.6 Sammenfatning: Balancen mellem spildtid og tillid

### [6. Konklusion](06-conclusion.md)
- 6.1 Besvarelse af underspørgsmål
- 6.2 Hovedkonklusion: Besvarelse af problemformuleringen
- 6.3 Projektets bidrag
- 6.4 Perspektivering

---

## Bilag

### [Bilag A: SQL-udtræk (KPI-data)](appendices/sql/)
- [01: Precision@5](appendices/sql/01-precision-at-5.sql)
- [02: Override Rate](appendices/sql/02-override-rate.sql)
- [03: Gennemsnitlig beslutningstid](appendices/sql/03-average-decision-time.sql)
- [04: Top Rejection Reasons](appendices/sql/04-top-rejection-reasons.sql)
- [05: Approval Rate](appendices/sql/05-approval-rate.sql)
- [06: Tid i Staging](appendices/sql/06-time-in-staging.sql)
- [07: Auto-Approval Rate](appendices/sql/07-auto-approval-rate.sql)

### [Bilag B: Interviewguide](appendices/interviewguide.md)
Semistruktureret interviewguide til interviews med Support Solutions-nøglepersoner (direktører, partnere, projektledere). Struktureret efter USP 1-4 med fokus på spildtid, AI-brug, trade-offs og forudsætninger.

### [Bilag C: Figurliste](appendices/figurliste.md)
Oversigt over alle figurer anvendt i rapporten med kilder, captions og placering. Inkluderer procesdiagrammer (as-is), AI-pipeline, teoretisk syntese og referencer til eksisterende figurer i Solutalent CODE CONTEXT.

---

## Litteraturliste

### Metode og videnskabsteori (7. semester kernepensum)
- Holm, A. B. (2023). *Videnskab i virkeligheden – En grundbog i videnskabsteori* (3. udg.). Samfundslitteratur.
- Kuada, J. (2012). *Research Methodology: A Project Guide for University Students* (1st ed.). Samfundslitteratur.
- Saunders, M. N. K., Lewis, P. & Thornhill, A. (2023). *Research Methods for Business Students* (9th ed.). Pearson.

### Projektspecifik teori (domæne)
- Davenport, T. H. (1993). *Process Innovation: Reengineering Work through Information Technology*. Harvard Business School Press.
- Dellermann, D., Ebel, P., Söllner, M. & Leimeister, J. M. (2019). Hybrid Intelligence. *Business & Information Systems Engineering*, 61, 637-643.
- Keen, P. G. W. & Scott Morton, M. S. (1978). *Decision Support Systems: An Organizational Perspective*. Addison-Wesley.
- Parasuraman, R., Sheridan, T. B. & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics - Part A: Systems and Humans*, 30(3), 286-297.
- Shneiderman, B. (2020). Human-Centered Artificial Intelligence: Reliable, Safe & Trustworthy. *International Journal of Human-Computer Interaction*, 36(6), 495-504.
- Staats, B. R. & Upton, D. M. (2011). Lean knowledge work. *Harvard Business Review*, 89(10), 100-110.
- Tornatzky, L. G. & Fleischer, M. (1990). *The Processes of Technological Innovation*. Lexington Books.
- Turban, E., Sharda, R. & Delen, D. (2014). *Decision Support and Business Intelligence Systems* (10th ed.). Pearson.
- Womack, J. P. & Jones, D. T. (2003). *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press.

---

## Hvordan rapporten læses

**Digital version (Markdown i repo):**
- Klik på kapitellinks ovenfor for at navigere
- SQL-queries kan kopieres direkte fra `.sql`-filer i `appendices/sql/`
- Figurer findes i `Solutalent CODE CONTEXT/figures/export/` (SVG-format)

**Print/PDF-version:**
- Konverter hvert kapitel-Markdown til Word/PDF
- Saml i én samlet fil med sidetal
- Indsæt figurer fra figurliste
- Nummerér bilag (Bilag A, B, C)

**Data-opdatering:**
- Alle `[DATA]`-placeholders skal erstattes med faktiske tal fra SQL-queries
- Kør queries i Supabase SQL Editor
- Indsæt resultater i kapitlerne (søg efter `[DATA]` for at finde alle steder)

**Interview-afhængighed:**
- `[INTERVIEW PLACEHOLDER]`-markeringer skal erstattes med faktiske citater
- Hvis interviews ikke gennemføres, marker dette i metode (afsnit 2.3) og diskussion (afsnit 5.3)

---

**Læsevejledning færdig. God fornøjelse med rapporten!**
