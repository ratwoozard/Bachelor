# Forskningspakke — SoluTalent Bachelorprojekt (Økonomi & IT)

> **Status**: FORSLAG — skal godkendes før endelige kapitler skrives.
> **Dato**: 2026-02-09
> **Princip**: Ingen opfundne kilder, tal eller observationer. Alt verificerbart.

---

## 1. Foreslået kapitelstruktur

| # | Kapitel | Primært indhold | Hovedkilder |
|---|---------|----------------|-------------|
| 1 | **Indledning** | Problemfelt, problemformulering, afgrænsning | Artefakt-kontekst (ADR'er, repo) |
| 2 | **Teori** | Platform-teori, DSR-ramme, AI-matching-teori, GDPR | Akademisk litteratur (se §3) |
| 3 | **Metode** | Videnskabsteori, DSR-operationalisering, datakilder, validitet | Allerede udkast: `METODE_REVIDERET.md` |
| 4 | **Artefaktbeskrivelse** | Arkitektur, teknologivalg, kerneworkflows | Kodebase + ADR'er |
| 5 | **Analyse** | Evaluering mod succeskriterier (funktionalitet, sikkerhed, vedligeholdbarhed, integration) | Kodebase, system-assessment, security audit |
| 6 | **Diskussion** | Implikationer, begrænsninger, generaliserbarhed | Teori + empiri |
| 7 | **Konklusion** | Svar på problemformulering | Syntese |

---

## 2. Figurliste

### 2A. Repo-afledte figurer (direkte evidens)

| Fig# | Titel | Type | Primær kilde(r) | Filsti til kilde |
|------|-------|------|-----------------|-----------------|
| F1 | Overordnet systemarkitektur (3-lags) | Arkitekturdiagram | ASCII-diagram i docs | `docs/MODULE_INTERACTIONS.md` linje 9–31 |
| F2 | AI-matchningspipeline (hybrid scoring) | Flowdiagram | Edge function + ADR-009 | `supabase/functions/ai-match/index.ts` linje 78–112; `docs/MODULE_INTERACTIONS.md` linje 170–211 |
| F3 | Bidding-workflow (tilstandsmaskine) | State machine diagram | Flow-dok + bidding hook | `docs/flows/FLOW_BIDDING.md` linje 12–61; `docs/ARCHITECTURE_DECISIONS.md` ADR-005 |
| F4 | Kontraktsigneringsflow (dual-signature) | Sekvensdiagram | Flow-dok + ADR-008 | `docs/flows/FLOW_CONTRACT_SIGNING.md` linje 12–56; `docs/ARCHITECTURE_DECISIONS.md` ADR-008 |
| F5 | E-conomic integrationsflow (tidsregistrering → faktura) | Dataflow-diagram | Module interactions | `docs/MODULE_INTERACTIONS.md` linje 248–281; `docs/ARCHITECTURE_DECISIONS.md` ADR-006 |
| F6 | Autentificeringsflow | Sekvensdiagram | Module interactions | `docs/MODULE_INTERACTIONS.md` linje 68–97 |
| F7 | Teknologisk stack-oversigt | Tabeldiagram | package.json + ADR'er | `package.json`; `docs/ARCHITECTURE_DECISIONS.md` |
| F8 | Database-domænemodel (forenklet ER) | ER-diagram | Migrationer + skemadok | `docs/DATABASE_SCHEMA.md`; `docs/database/TABLE_*.md` (13 filer) |
| F9 | ADR-oversigt (beslutningskort) | Oversigtstabel | ADR-dokument | `docs/ARCHITECTURE_DECISIONS.md` (12 ADR'er) |
| F10 | GDPR-compliance feature-map | Feature-matrix | Kodebase-evidens | `src/pages/FreelancerSettingsPage.tsx`; `docs/SECURITY_AUDIT_DEC2025.md` |
| F11 | Frontend-komponenthierarki (page → hook → service) | Lagdiagram | App.tsx + hooks | `src/App.tsx`; `src/hooks/`; `src/services/` |
| F12 | Edge function-katalog (40 funktioner pr. domæne) | Kategoriseret oversigt | Functions-mappe | `supabase/functions/` (40 funktioner) |
| F13 | Kodebase-metrikker (komponent/migration/function-tæl) | Metriktabel | Repo-tælling | Hele repo (verificeret i evidence log) |

### 2B. Konceptuelle figurer (teori-afledte)

| Fig# | Titel | Type | Teoretisk grundlag |
|------|-------|------|--------------------|
| K1 | DSR-cyklus tilpasset projektet | Procesdiagram | Peffers et al. (2007); Hevner et al. (2004) |
| K2 | Platform-værdiskabelse (to-sidet marked) | Konceptuelt diagram | Parker et al. (2016); Rochet & Tirole (2003) |
| K3 | Evalueringsramme (succeskriterier → datakilder) | Matrix | Hevner et al. (2004), afsnit "Evaluation" |
| K4 | Embedding-baseret matchning (konceptuel) | Illustrationsdiagram | OpenAI dokumentation; Mikolov et al. (2013) |

> **Alle konceptuelle figurer markeres eksplicit som "Konceptuel figur — egen tilvirkning" med kildehenvisning.**

---

## 3. Litteraturplan (kun verificerede referencer)

> **KRITISK REGEL**: Nedenstående referencer er velkendte, publicerede værker. Inden brug i endelig tekst skal DOI/URL og sidetal verificeres mod faktisk udgave.

### 3.1 Design Science Research

| Ref-ID | Reference | Relevans for projektet |
|--------|-----------|----------------------|
| DSR-1 | Hevner, A.R., March, S.T., Park, J. & Ram, S. (2004). "Design Science in Information Systems Research." *MIS Quarterly*, 28(1), 75–105. | Grundlæggende DSR-ramme; evaluerings­kriterier for IT-artefakter |
| DSR-2 | Peffers, K., Tuunanen, T., Rothenberger, M.A. & Chatterjee, S. (2007). "A Design Science Research Methodology for Information Systems Research." *Journal of Management Information Systems*, 24(3), 45–77. | DSR-procesmodel (6 faser) — strukturerer projektets metode |
| DSR-3 | Gregor, S. & Hevner, A.R. (2013). "Positioning and Presenting Design Science Research for Maximum Impact." *MIS Quarterly*, 37(2), 337–355. | Vidensbidragstyper i DSR; positionering af artefaktets nyhedsværdi |

### 3.2 Platformøkonomi & tosidede markeder

| Ref-ID | Reference | Relevans for projektet |
|--------|-----------|----------------------|
| PLAT-1 | Parker, G.G., Van Alstyne, M.W. & Choudary, S.P. (2016). *Platform Revolution: How Networked Markets Are Transforming the Economy and How to Make Them Work for You.* W.W. Norton. | Platformdesignprincipper; netværkseffekter; governance |
| PLAT-2 | Evans, D.S. & Schmalensee, R. (2016). *Matchmakers: The New Economics of Multisided Platforms.* Harvard Business Review Press. | Matching-platforme som forretningsmodel; prisstrategier |
| PLAT-3 | Rochet, J.-C. & Tirole, J. (2003). "Platform Competition in Two-Sided Markets." *Journal of the European Economic Association*, 1(4), 990–1029. | Teoretisk fundament for tosidede markeder; krydssubsidiering |
| PLAT-4 | Hagiu, A. & Wright, J. (2015). "Multi-Sided Platforms." *International Journal of Industrial Organization*, 43, 162–174. | Definition og afgrænsning af multisidede platforme |

### 3.3 Videnskabsteori & metode

| Ref-ID | Reference | Relevans for projektet |
|--------|-----------|----------------------|
| MET-1 | Dewey, J. (1938). *Logic: The Theory of Inquiry.* New York: Holt, Rinehart and Winston. | Pragmatismens grundlag |
| MET-2 | James, W. (1907). *Pragmatism: A New Name for Some Old Ways of Thinking.* New York: Longmans, Green. | Pragmatisk sandhedsbegreb |
| MET-3 | Saunders, M., Lewis, P. & Thornhill, A. (2019). *Research Methods for Business Students.* 8th ed. Pearson. | Forskningsdesign, dataindsamling, analyse­strategi |
| MET-4 | Yin, R.K. (2018). *Case Study Research and Applications: Design and Methods.* 6th ed. Sage. | Single-case design; validitet; analytisk generalisering |
| MET-5 | Creswell, J.W. & Creswell, J.D. (2018). *Research Design: Qualitative, Quantitative, and Mixed Methods Approaches.* 5th ed. Sage. | Metodisk pluralisme; mixed methods |

### 3.4 AI & NLP i rekruttering

| Ref-ID | Reference | Relevans for projektet |
|--------|-----------|----------------------|
| AI-1 | Tambe, P., Cappelli, P. & Yakubovich, V. (2019). "Artificial Intelligence in Human Resources Management: Challenges and a Path Forward." *California Management Review*, 61(4), 15–42. | AI i HR-kontekst; bias; automatiseret matching |
| AI-2 | Mikolov, T., Chen, K., Corrado, G. & Dean, J. (2013). "Efficient Estimation of Word Representations in Vector Space." *arXiv:1301.3781*. | Grundlaget for word embeddings (word2vec); semantisk similaritet |

> **NB til AI-2**: Projektet bruger OpenAI `text-embedding-3-small` (2024), ikke word2vec direkte. Mikolov-referencen bruges til at forklare det *konceptuelle* grundlag for embedding-baseret matchning. OpenAI's modeldokumentation citeres som teknisk kilde (ikke akademisk peer-reviewed).

### 3.5 GDPR & datasikkerhed

| Ref-ID | Reference | Relevans for projektet |
|--------|-----------|----------------------|
| GDPR-1 | Voigt, P. & von dem Bussche, A. (2017). *The EU General Data Protection Regulation (GDPR): A Practical Guide.* Springer. | GDPR-implementeringskrav; art. 15, 17, 20 |
| GDPR-2 | Europa-Parlamentets og Rådets forordning (EU) 2016/679 af 27. april 2016 (GDPR). | Primær juridisk kilde |

### 3.6 Softwarearkitektur & serverless

| Ref-ID | Reference | Relevans for projektet |
|--------|-----------|----------------------|
| ARCH-1 | Bass, L., Clements, P. & Kazman, R. (2021). *Software Architecture in Practice.* 4th ed. Addison-Wesley. | Arkitekturprincipper; kvalitetsattributter; evaluering |

---

## 4. Kapitel-til-kilde matrix

| Kapitel | Repo-figurer | Koncept-figurer | Primære referencer | Kodebase-evidens |
|---------|-------------|-----------------|-------------------|-----------------|
| 1. Indledning | — | K2 | PLAT-1, PLAT-3 | ADR'er (kontekst) |
| 2. Teori | — | K1, K2, K4 | DSR-1–3, PLAT-1–4, AI-1–2, GDPR-1–2 | — |
| 3. Metode | — | K1, K3 | MET-1–5, DSR-1–2 | Evidence log |
| 4. Artefaktbeskrivelse | F1, F2, F3, F4, F5, F6, F7, F8, F9, F11, F12, F13 | — | ARCH-1 | Alle kilde-filer (se fig-tabel) |
| 5. Analyse | F10, F13 | K3 | DSR-1 (evaluering), GDPR-1 | Security audit, system assessment |
| 6. Diskussion | — | K2 | PLAT-1–4, AI-1, DSR-3 | System assessment findings |
| 7. Konklusion | — | — | — | Syntese af ovenstående |

---

## 5. Hvad denne pakke IKKE indeholder

For transparens:

1. **Ingen opfundne tal** — Kodebase-metrikker (172 komponenter, 40 edge functions, 249 migrationer) er talt direkte fra repo og dokumenteret i evidence log.

2. **Ingen påståede interviews** — Medmindre I faktisk gennemfører og dokumenterer interviews, indgår de ikke.

3. **Ingen performance-benchmarks** — Der er ikke gennemført load-tests eller latency-målinger. System assessment (`docs/system-assessment.md`) er baseret på statisk analyse.

4. **Ingen brugerdata** — Ingen brugertest, NPS, satisfaction scores eller lignende. Evaluering baseres på kodeanalyse.

5. **Ingen tredjepartsaudit** — Security audit er AI-assisteret (Claude), ikke ekstern uafhængig auditor.

---

## 6. Næste skridt

Når denne pakke er godkendt:

1. [ ] Generer Mermaid-diagrammer for F1–F13 (repo-afledte)
2. [ ] Skriv K1–K4 konceptuelle figurer med kildehenvisning
3. [ ] Skriv endelige kapitler i rækkefølge: Teori → Artefaktbeskrivelse → Analyse → Diskussion
4. [ ] Kompiler BibTeX-fil med alle referencer
5. [ ] Opdater evidence log løbende

---

*Sidst opdateret: 2026-02-09*

