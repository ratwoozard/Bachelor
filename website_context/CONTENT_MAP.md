# Indholdsplan – Sider på hjemmesiden

Oversigt over sider og hvad hver side skal indeholde. Brug ved generering af sider og navigation. Rapportkapitler ligger i `report/` (01-introduction.md, 02-method.md, osv.).

---

## Forside

- Hero: projektets titel (AI-automatisering i bemandingsprocessen …) og kort undertitel.
- Kort "Om projektet" (3–4 sætninger) – kan bygges på abstract fra report/REPORT.md.
- Evt. CTA: "Læs rapporten" / "Se metode og resultater".
- Ingen dyb teori eller lange afsnit – kun indledning og navigation.

**Kilde:** report/REPORT.md (abstract), Bachelor_Synopsis.md (titel, PF).

---

## Om projektet (Indledning + PF)

- Problemfelt i trin: branche → IT-konsulenthuse → Support Solutions og SoluTalent (den omvendte trekant).
- Problemformuleringen (citat) og de fire underspørgsmål som punkter.
- Kort afgrænsning: proces (staging → matched), case, teknisk fokus.

**Kilde:** report/01-introduction.md, Bachelor_Synopsis.md §1–3.

---

## Metode

- Pragmatisk videnskabsteoretisk position (kort: ontologi, epistemologi, abduktion, metodepluralisme).
- Forskningsdesign: eksplorativt casestudie, indlejret analyseenhed (workflow staging → matched).
- Empirikilder: (1) semistrukturerede interviews, (2) artefaktanalyse SoluTalent, (3) dokumentanalyse.
- Kort om operationalisering af spildtid og bias-refleksion (praktikanter/medudviklere).

**Kilde:** report/02-method.md, Bachelor_Synopsis.md §4 og §6.

---

## Teori

- Fire teorier med kort beskrivelse og rolle i analysen:
  - **Lean / Waste (Womack & Jones):** spildtid i vidensarbejde, kategorier.
  - **Procesoptimering (Davenport):** as-is → to-be.
  - **DSS / Human-in-the-loop (Turban m.fl.):** AI som beslutningsstøtte.
  - **TOE (Tornatzky & Fleischer):** teknologiske, organisatoriske, miljømæssige forudsætninger.
- Evt. link til rapportens teori-kapitel for fuld gennemgang.

**Kilde:** report/03-theory.md, Bachelor_Synopsis.md §5.

---

## Analyse / Resultater

- **As-is:** Hvor opstår spildtid? 8-trins workflow med markering af flaskehalse (4, 6, 7).
- **Automatisering vs. manuelle trin:** Hvilke trin er auto/manuelle og hvorfor; human-in-the-loop.
- **KPI’er:** Precision@5, Override Rate, beslutningstid, Approval Rate (evt. med placeholder-tal eller [DATA]).
- **Trade-offs:** Automatisering vs. kvalitetskontrol/tillid.
- **TOE-forudsætninger:** Kort opsummering af T, O, E for yderligere automatisering.

**Kilde:** report/04-analysis.md, CASE_KNOWLEDGE.md (KPI, 8 trin).

---

## Konklusion

- Svar på problemformuleringen og de fire underspørgsmål (kort).
- Projektets bidrag (teoretisk og praktisk).
- Evt. perspektivering (begrænsninger, anbefalinger).

**Kilde:** report/06-conclusion.md.

---

## Figurer / Bilag

- Galleri eller liste over figurer med caption og evt. link til rapporten.
- Figurer: process_as_is, ai_pipeline, framework, C4 (context/container/component), ER – se FIGURE_AND_ASSETS.md for filstier og captions.

**Kilde:** report/appendices/figurliste.md, FIGURE_AND_ASSETS.md.

---

## Fælles elementer

- **Navigation:** Links til alle ovenstående sider.
- **Footer:** Forfattere (Benjamin & Luka), KEA, år (2026), evt. link til rapport-PDF eller repo.

---

*Rapportens fulde indhold ligger i report/; denne fil angiver kun hvad hjemmesiden skal *opsummere* eller *pege på* pr. side.*
