# Fix Plan — Inkonsistenser

> **Status**: ✅ Completed  
> **Baseret på**: `INCONSISTENCY_REPORT.md`

---

## HIGH Priority Fixes

| # | Fil | Problem | Fix | Status |
|---|---|---|---|---|
| 1 | `SYSTEMANALYSE.md:118` | `weights_used` i match_results — FORKERT | Ret til: "returneres i API-response" | ✅ |
| 2 | `SYSTEMANALYSE.md:153` | `weights_used` gemmes — FORKERT | Ret til: "returneres i API-response, persisteres i match_analytics" | ✅ |
| 3 | `SYSTEMANALYSE.md:159` | `match_results` indeholder `weights_used`, `explanation` — FORKERT | Ret til: `match_reasons`, `skill_gaps` (faktiske kolonner) | ✅ |
| 4 | `SYSTEMANALYSE.md:130` | Refererer til `automatic-match/index.ts` — EKSISTERER IKKE | Rettet til `ai-match/index.ts` (on-demand) | ✅ |
| 5 | `METODE_REVIDERET.md:218` | `weights_used` gemmes med matchresultat — FORKERT | Ret formulering + tilføjet match_analytics reference | ✅ |

---

## MEDIUM Priority Fixes

| # | Fil | Problem | Fix | Status |
|---|---|---|---|---|
| 6 | `LOGGING_SPEC.md:52` | `weights_used (JSON)` uden note | Tilføjet note om API-response vs. DB | ✅ |
| 7 | `figures/process_to_be.mmd:2` | "Bud-til-betaling" | Ret til "Bud-til-fakturering" | ✅ |
| 8 | `figures/process_as_is.mmd:2` | "bud-til-betaling" | Ret til "bud-til-fakturering" | ✅ |
| 9 | `EVALUERING.md` | Effekt-metrics uden data-disclaimer | Tilføjet Status-kolonne med ✅/³ markers | ✅ |

---

## LOW Priority Fixes

| # | Fil | Problem | Fix | Status |
|---|---|---|---|---|
| 10 | `FIGURE_REALITY_LOCK.md:85` | "bidding-til-betaling" | Ret til "bidding-til-fakturering" | ✅ |
| 11 | `CONSISTENCY_CHECKLIST.md:38` | "Outcomes / payment" | Ret til "Outcomes / fakturering" | ✅ |
| 12 | `CONSISTENCY_CHECKLIST.md:80` | "kontrakt → betaling" | Ret til "kontrakt → fakturering" | ✅ |
| 13 | `CHANGELOG_FIGURES.md:85` | "bud-til-betaling flow" | Ret til "bud-til-fakturering flow" | ✅ |
| 14 | `EVALUERING.md:18` | "betaling" i Funktionalitet | Ret til "fakturering" | ✅ |

---

## Ekstra rettelser (fundet under scan)

| # | Fil | Problem | Fix | Status |
|---|---|---|---|---|
| 15 | `SYSTEMANALYSE.md:184` | `weights_used gemmes for audit` | Ret til API-response + match_analytics | ✅ |
| 16 | `SYSTEMANALYSE.md:317` | `weights_used` mitigation | Rettet | ✅ |
| 17 | `SYSTEMANALYSE.md:362` | `weights_used gemmes for audit` | Rettet | ✅ |

---

## Opsummering

- **Total fixes**: 17
- **HIGH**: 5 ✅
- **MEDIUM**: 4 ✅
- **LOW**: 5 ✅
- **Ekstra**: 3 ✅

---

*Plan oprettet: 2026-02-09*  
*Completed: 2026-02-09*
