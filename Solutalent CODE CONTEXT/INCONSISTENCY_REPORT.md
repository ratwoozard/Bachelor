# Inconsistency Report — Academic QA

> **Scan-dato**: 2026-02-09  
> **Scope**: `docs/bachelor/`, `supabase/migrations/`, `src/`, `supabase/functions/`

---

## 1. Terminologi-inkonsistenser

| Sev | Fil | Linje | Problem | Fix |
|---|---|---|---|---|
| **HIGH** | `SYSTEMANALYSE.md` | 118, 153, 159 | Hævder `weights_used` gemmes i `match_results` — **FORKERT** (kun i API-response) | Ret til: "returneres i API-response, persisteres i `match_analytics`" |
| **HIGH** | `METODE_REVIDERET.md` | 218 | "weights_used gemmes med hvert matchresultat" — **FORKERT** | Ret til: "returneres i API-response (ikke persisteret i match_results)" |
| **HIGH** | `SYSTEMANALYSE.md` | 130 | Refererer til `automatic-match/index.ts` — **EKSISTERER IKKE** | Fjern reference eller marker som TODO |
| **MED** | `LOGGING_SPEC.md` | 52 | Lister `weights_used (JSON)` som felt — men det er ikke i match_results | Tilføj note: "Kun i API-response; persisteres separat i match_analytics" |
| **MED** | `figures/process_to_be.mmd` | 2 | Kommentar: "Bud-til-betaling" → skal være "Bud-til-fakturering" | Ret kommentar |
| **MED** | `figures/process_as_is.mmd` | 2 | Kommentar: "bud-til-betaling" → skal være "bud-til-fakturering" | Ret kommentar |
| **LOW** | `FIGURE_REALITY_LOCK.md` | 85 | "bidding-til-betaling" → skal være "bidding-til-fakturering" | Ret tekst |
| **LOW** | `CONSISTENCY_CHECKLIST.md` | 38 | "Outcomes / payment" farve-semantik — "payment" er misvisende | Ret til "Outcomes / fakturering" |
| **LOW** | `CHANGELOG_FIGURES.md` | 85 | "bud-til-betaling flow" → "bud-til-fakturering flow" | Ret tekst |

---

## 2. Figurer vs tekst-inkonsistenser

| Sev | Figur | Tekst/doc | Problem | Fix |
|---|---|---|---|---|
| **MED** | `ai_pipeline.mmd` | `TEORI.md` §1.2 | Figur viser separate `match_requests` + `match_results` datastores; teori nævner kun "match-score" | Tilføj eksplicit reference til begge tabeller i TEORI |
| **MED** | `framework.mmd` | `EVALUERING.md` §2.1 | Framework viser outcomes med ¹³-markers for logging; EVALUERING nævner ikke disse markers | Synkroniser notation |
| **LOW** | `process_to_be.mmd` | `FIGURE_CAPTIONS.md` F7 | Figur viser "Kan trigge AI-match" (stiplet); caption siger "Bud → AI-matching" (solid) | Ret caption til "Bud → AI-matching (on-demand)" |

---

## 3. DB schema vs ER-diagram-inkonsistenser

| Sev | Tabel/kolonne | ER-diagram | Migration | Problem | Fix |
|---|---|---|---|---|---|
| **HIGH** | `match_results.weights_used` | Vist i CHANGELOG_FIGURES (v1) | Eksisterer IKKE i `20250203000000` | Allerede rettet i FIGURE_REALITY_LOCK — men SYSTEMANALYSE.md ikke opdateret | Opdater SYSTEMANALYSE.md |
| **MED** | `match_results.explanation` | Nævnt i SYSTEMANALYSE.md:159 | Eksisterer IKKE (er `match_reasons : jsonb` i stedet) | Ret kolonnenavn i SYSTEMANALYSE.md |
| **LOW** | `match_analytics` tabel | Ikke i ER Light (F8) | Eksisterer i `20260107110000` | Overvej at nævne i ER-caption eller Appendix |

---

## 4. Metode vs evaluering-inkonsistenser

| Sev | Metode-claim | Evaluering-claim | Problem | Fix |
|---|---|---|---|---|
| **HIGH** | METODE §5: "Effektvurderinger kræver brugerdata" | EVALUERING §2: Lover metrics uden data | Effektmåling kræver logging der IKKE er implementeret | Marker alle effekt-metrics som "³ Kræver logging-implementering" |
| **HIGH** | TEORI §1.1: "beslutningskvalitet måles" | LOGGING_SPEC: Ingen event for beslutningskvalitet | Ingen operationalisering af "beslutningskvalitet" | Definér metric eller marker som TODO |
| **MED** | METODE §6.2: "Kode vs praksis" begrænsning | EVALUERING §2.1: "High-score rate" metric | Metric kræver logdata — ikke tilgængeligt | Tilføj explicit TODO i EVALUERING |
| **MED** | INTRO §3: "AI-matchningspipen dokumenteret" | AI-match er on-demand, ikke automatisk | Formulering antyder automatisk pipeline | Ret til "on-demand AI-matching" |

---

## 5. Andre fund

| Sev | Fil | Problem | Fix |
|---|---|---|---|
| **MED** | `APPENDIX_FIGURE_EVIDENCE.md` F4#2 | "Netlify CDN" markeret som ❌ needs evidence | Fjern Netlify-claim eller tilføj config |
| **LOW** | `FIGURE_CAPTIONS.md` F5 | "585 RLS-policies" — tallet fra SECURITY_AUDIT, ikke talt i SQL | Tilføj "(ifølge sikkerhedsaudit)" caveat |
| **LOW** | Flere filer | Blanding af dansk/engelsk terminologi (fakturering/invoicing) | Vælg konsekvent sprog |

---

## Top 10 Fixes (prioriteret)

1. **SYSTEMANALYSE.md**: Fjern alle claims om `weights_used` i `match_results`; ret til API-response + match_analytics
2. **SYSTEMANALYSE.md**: Fjern reference til `automatic-match/index.ts` (eksisterer ikke)
3. **METODE_REVIDERET.md:218**: Ret `weights_used` claim
4. **EVALUERING.md**: Marker alle effekt-metrics med "³ Kræver logging-implementering"
5. **TEORI.md**: Operationaliser "beslutningskvalitet" eller marker som TODO
6. **figures/process_to_be.mmd:2**: Ret kommentar til "Bud-til-fakturering"
7. **figures/process_as_is.mmd:2**: Ret kommentar til "bud-til-fakturering"
8. **LOGGING_SPEC.md:52**: Tilføj note om `weights_used` persistering
9. **FIGURE_CAPTIONS.md F7**: Ret "Bud → AI-matching" til "Bud → AI-matching (on-demand)"
10. **SYSTEMANALYSE.md:159**: Ret `explanation` til `match_reasons`

---

*Genereret: 2026-02-09*

