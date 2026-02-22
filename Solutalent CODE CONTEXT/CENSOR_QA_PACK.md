# Censor QA Pack — 20 hårde spørgsmål med evidensankre

> **Formål**: Forberedelse til mundtlig eksamen/forsvar.  
> **Format**: Spørgsmål → 3 svar-bullets → evidens-anker (repo path / doc / figur-id)

---

## A. Problemformulering & afgrænsning (4)

### Q1: Hvorfor er en single-case analyse tilstrækkelig til at besvare problemformuleringen?

- DSR fokuserer på artefaktets kvalitet i kontekst, ikke statistisk generaliserbarhed
- Casen giver dyb indsigt i konkrete designbeslutninger og implementeringsudfordringer
- Analytisk generaliserbarhed mulig via design patterns og ADR'er

**Evidens**: `METODE_REVIDERET.md` §2, §6.1; Yin (2018) i `TEORI.md` §3.1

---

### Q2: Hvordan afgrænser I jer fra at evaluere brugernes faktiske oplevelse?

- Evalueringen er artefakt-baseret (kode, ADR'er), ikke brugerbaseret
- Effektmåling markeret som TODO — kræver logging og samtykke
- Begrænsning eksplicit nævnt: "kode vs praksis"

**Evidens**: `METODE_REVIDERET.md` §6.3 (begrænsning #2); `EVALUERING.md` §2 (TODO)

---

### Q3: Hvad er forskellen mellem jeres artefakt-evaluering og en egentlig effektmåling?

- Artefakt-evaluering: dokumenterer *hvad der er implementeret* (statisk analyse)
- Effektmåling: dokumenterer *hvordan det virker* (runtime data)
- Vi har kun førstnævnte — effektmåling kræver LOGGING_SPEC-implementation

**Evidens**: `EVALUERING.md` §1 vs §2; `METRICS_FEASIBILITY.md` (YES/PARTIAL/NO)

---

### Q4: Hvorfor fokuserer I på AI som beslutningsstøtte fremfor fuld automatisering?

- Domænet (rekruttering) er værdiladet — kræver menneskelig vurdering
- Human-in-the-loop litteraturen anbefaler AI som støtte i komplekse beslutninger
- SoluTalent's governance-design (admin-medieret) afspejler dette

**Evidens**: `TEORI.md` §1.1; Parasuraman (2000), Shneiderman (2020); ADR-005 i `ARCHITECTURE_DECISIONS.md`

---

## B. Videnskabsteori/DSR & metodevalg (4)

### Q5: Hvordan sikrer I, at jeres pragmatiske position ikke bliver en undskyldning for at undgå kritisk analyse?

- Pragmatisme kræver operationelle succeskriterier — vi definerer 4 (funktionalitet, sikkerhed, vedligeholdbarhed, integration)
- Sporbarhed: alle claims har claim→evidence mapping
- Begrænsninger eksplicit angivet

**Evidens**: `METODE_REVIDERET.md` §1, §5; Claim→Evidence tabel (§8)

---

### Q6: Hvordan adresserer DSR-rammen validitet, når I selv er udviklere?

- Transparens: alle referencer verificerbare via Git
- Objektivitet: fokus på *kode* fremfor *intention*
- Begrænsning: "forskerposition" nævnt eksplicit — nærhed kan skabe bias

**Evidens**: `METODE_REVIDERET.md` §6.3 (begrænsning #1); `APPENDIX_FIGURE_EVIDENCE.md` (styrke-vurdering)

---

### Q7: Hvad er forskellen mellem jeres brug af DSR og en ren teknisk rapport?

- DSR: iterativ design-evaluate cyklus med teori-forankring
- Vores bidrag: kobling af DSR + DSS/HITL + platform governance
- Ikke kun beskrivelse, men analyse mod definerede kriterier

**Evidens**: `METODE_REVIDERET.md` §2 (DSR-tabel); `TEORI.md` §3.2 (teorigap)

---

### Q8: Kan jeres resultater reproduceres af andre forskere?

- Kodebase er Git-versioneret — kan klones og verificeres
- Alle filreferencer inkluderer linjenumre
- Kommandoer til counts dokumenteret

**Evidens**: `METODE_REVIDERET.md` §6.2; `APPENDIX_FIGURE_EVIDENCE.md` (metode-sektion)

---

## C. Artefakt/arkitektur & design trade-offs (4)

### Q9: Hvorfor valgte I en hybrid matching-tilgang (semantisk + regelbaseret)?

- Semantisk: fanger latente kompetencer og sproglig variation
- Regelbaseret: forklarbar og justerbar (vægte kan ændres)
- Trade-off: kompleksitet vs. transparens — hybridmodel balancerer

**Evidens**: `ai-match/index.ts:79-112` (DEFAULT_WEIGHTS); `SYSTEMANALYSE.md` §3.1-3.2; Figur F1

---

### Q10: Hvad er risikoen ved at admin-medieret bidding er en flaskehals?

- Single point of failure: alle bids kræver admin-godkendelse
- Skaleringsudfordring ved højt volumen
- Mitigation: AI-match giver decision support, reducerer kognitiv load

**Evidens**: `docs/system-assessment.md` (failure points); ADR-005; Figur F7

---

### Q11: Hvordan håndterer I teknisk gæld i systemet?

- System-assessment identificerer 6 svagheder (auth race conditions, dual role, etc.)
- Tech debt dokumenteret, ikke løst
- ADR'er dokumenterer rationale for kompromiser

**Evidens**: `docs/system-assessment.md` §Weaknesses; `TEORI.md` §1.5; `ARCHITECTURE_DECISIONS.md`

---

### Q12: Hvorfor E-conomic til fakturering fremfor en in-house løsning?

- Ekstern integration reducerer compliance-byrde (bogføringsregler)
- Separation of concerns: platform matcher, E-conomic fakturerer
- Trade-off: API-dependency vs. feature-scope

**Evidens**: ADR-006 (E-conomic for Payments); `supabase/functions/economic/`; Figur F3 (C4 Context)

---

## D. AI/etik/bias/transparens (4)

### Q13: Hvordan adresserer I bias i OpenAI's embedding-model?

- Anerkendelse: embeddings kan afspejle træningsdata-bias
- Mitigation #1: regelbaseret scoring (60%) uafhængig af embeddings
- Mitigation #2: human-in-the-loop — admin kan overrule AI

**Evidens**: `METODE_REVIDERET.md` §7.2; `TEORI.md` §1.3; `ai-match/index.ts:79-87`

---

### Q14: Hvad betyder "transparens" konkret i jeres system?

- Match-forklaringer genereres (GPT-4o-mini)
- Vægte dokumenteret i kode (DEFAULT_WEIGHTS)
- Audit: rejection reasons logges for ML feedback loop

**Evidens**: `ai-match/index.ts:523` (forklaring); `MatchDashboard.tsx:37-45` (rejection reasons); `TEORI.md` §1.3

---

### Q15: Gemmes forklaringer og vægte, så de kan auditeres?

- Forklaringer: persisteres i `match_results.match_reasons` (jsonb)
- Vægte: returneres i API-response, persisteres i `match_analytics.weights_used`
- **NB**: `weights_used` er IKKE i `match_results` — kun i separat tabel

**Evidens**: `20250203000000_create_ai_matching_schema.sql:49`; `20260107110000_phase4_enhanced_analytics.sql:14-17`

---

### Q16: Hvordan sikrer I GDPR-compliance i AI-pipen?

- PII ekskluderet fra embeddings: "Normalized profile text (no PII)"
- Kontosletning: 30-dages grace period + hard delete RPC
- RLS på alle tabeller

**Evidens**: `20250203000000_create_ai_matching_schema.sql:114`; `METODE_REVIDERET.md` §4.3; `SECURITY_AUDIT_DEC2025.md`

---

## E. Validitet/troværdighed/begrænsninger (4)

### Q17: Hvad er den største svaghed ved jeres evidensgrundlag?

- Primært artefakt-empiri — ingen brugerdata eller loganalyse
- Interviews/observationer kun betinget ("hvis gennemført")
- Effektmåling kræver implementering af LOGGING_SPEC

**Evidens**: `METODE_REVIDERET.md` §3.3; `EVALUERING.md` §2 (TODO)

---

### Q18: Hvordan håndterer I, at sikkerhedsauditen er AI-genereret?

- Eksplicit disclosure: "Auditor: AI Assistant (Claude)"
- Ikke ekstern uafhængig audit — begrænsning nævnt
- RLS-claims verificeret via migrations (objektiv kilde)

**Evidens**: `SECURITY_AUDIT_DEC2025.md:232`; `METODE_REVIDERET.md` §4.3 (NB)

---

### Q19: Kan jeres konklusioner ændres af fremtidige kode-ændringer?

- Ja — analyse er snapshot på givet tidspunkt
- Git-historik muliggør reproduktion af tidligere tilstand
- Begrænsning eksplicit: "Software er dynamisk"

**Evidens**: `METODE_REVIDERET.md` §6.3 (begrænsning #4)

---

### Q20: Hvad skulle der til for at styrke validiteten af jeres resultater?

- Implementér LOGGING_SPEC → muliggør effektmåling
- Gennemfør brugertest/interviews → kvalitativ indsigt
- A/B-test (AI vs. ingen AI) → kausal evidens for effekt

**Evidens**: `EVALUERING.md` §2.2; `METRICS_FEASIBILITY.md` (NO-kategorien)

---

## Hurtig-reference: Nøgle-dokumenter

| Emne | Primær kilde |
|---|---|
| Metode/validitet | `METODE_REVIDERET.md` |
| Teori/begreber | `TEORI.md` |
| Evaluering | `EVALUERING.md`, `LOGGING_SPEC.md` |
| Arkitektur | `ARCHITECTURE_DECISIONS.md`, `SYSTEMANALYSE.md` |
| Figur-evidens | `APPENDIX_FIGURE_EVIDENCE.md` |
| Metrics | `METRICS_FEASIBILITY.md` |
| Inkonsistenser | `INCONSISTENCY_REPORT.md` |

---

*Genereret: 2026-02-09*

