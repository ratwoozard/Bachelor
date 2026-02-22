# Changelog — Dokumentation & Figurer (2026-02-09, runde 2)

> **Formål**: Dokumentere alle ændringer der sikrer overensstemmelse mellem
> `docs/bachelor/`-filer, figurer og den aktuelle kodebase.

---

## Opdagelser (claim → evidence)

### 1. AI-match trigger

| Claim (før) | Sandhed (verificeret) | Evidens |
|---|---|---|
| AI-match er "on-demand / admin-initieret" | ✅ Korrekt — allerede rettet i runde 1 | `src/services/matchFitScore.ts:79` |
| Freelancer-side bruger AI-match | ❌ Bruger rule-based fallback | `src/pages/FreelancerOpportunitiesPage.tsx:37` |
| Visma bruges til fakturering | ❌ **Visma findes IKKE i kodebasen** | `grep -ri visma` → 0 resultater |

### 2. Payments/udbetalinger

| Claim (før) | Sandhed (verificeret) | Evidens |
|---|---|---|
| `payment_accounts` tabel eksisterer | ❌ **FJERNET** | `20251209000000_remove_withdrawals_and_payment_accounts.sql` |
| `withdrawals` tabel eksisterer | ❌ **FJERNET** | Samme migration — "payments are not handled through the platform" |
| E-conomic integration aktiv | ✅ Korrekt | Edge functions: `economic/`, `sync-time-to-ecom/`, `sync-ecom-projects/`, `ecom-auth-callback/` |
| `economic_sync_log` eksisterer | ✅ Korrekt | `20251126093142_create_economic_sync_log.sql` (aldrig droppet) |
| `platform_ecom_integration` eksisterer | ✅ Korrekt | `20251201155342_add_platform_ecom_integration.sql` |
| `time_entries` eksisterer | ✅ Korrekt | `20251126093140_create_time_entries_table.sql` (aldrig droppet) |

### 3. Bud → kontrakt → betaling flow

| Claim (før) | Sandhed (verificeret) | Evidens |
|---|---|---|
| "bud → kontrakt → betaling" | Delvis korrekt — men "betaling" er misvisende | Platformen håndterer **fakturering** (E-conomic), ikke udbetalinger |

---

## Ændrede filer

### Figurer

| Fil | Ændring | Begrundelse |
|---|---|---|
| `figures/er_full.puml` | Fjernet `payment_accounts` + `withdrawals` entiteter og relationer; tilføjet `platform_ecom_integration` | Tabeller fjernet fra DB |
| `figures/er_diagram.puml` | Sektion-header "PAYMENT" → "TIDSREGISTRERING" | Ingen payment-tabeller i light ER |

### Dokumentation

| Fil | Ændring | Begrundelse |
|---|---|---|
| `DATABASE.md` | Fjernet payment_accounts/withdrawals; tilføjet platform_ecom_integration; tilføjet note om fjernelse | Afspejle aktuel DB-struktur |
| `PROCESSER.md` | Opdateret To-be: "on-demand" trigger + kildereference; "Betaling/tid" → "Tidsregistrering → E-conomic fakturering" | Præcis terminologi |
| `INTRO.md` | "betaling" → "fakturering"; "betalingstransitioner" → "faktureringstransitioner" | Konsistens |
| `LOGGING_SPEC.md` | "Payment" → "Tidsregistrering og fakturering"; "Contract→Payment lead time" → "Contract→Faktura lead time"; "Endepunkt for betaling" → "Endepunkt for fakturering" | Konsistens |
| `FIGURE_CAPTIONS.md` | F3: tilføjet "ikke udbetalinger"; F6: "bud-til-betaling" → "bud-til-fakturering" + note om fjernede tabeller; F7: tilføjet "on-demand" + "ikke automatisk"; F8: note om fjernede tabeller; F9: opdateret tabel-liste | Konsistens + præcision |
| `APPENDIX_FIGURE_EVIDENCE.md` | F8 #10: "Payment-flow" → "Timer → E-conomic fakturering"; F9: fjernet payment_accounts/withdrawals, tilføjet platform_ecom_integration | Afspejle aktuel DB |
| `CONSISTENCY_CHECKLIST.md` | Tilføjet "AI-trigger = On-demand (IKKE automatisk)" som terminologi-regel | Konsistens |
| `FIGURE_REALITY_LOCK.md` | Tilføjet §8 med runde 2-fund og ændrede filer | Sporbarhed |

---

## Ikke ændret (bekræftet korrekt)

| Fil | Grund |
|---|---|
| `figures/ai_pipeline.mmd` | Allerede rettet i runde 1 (on-demand, separate datastores) |
| `figures/process_to_be.mmd` | Allerede rettet i runde 1 (stiplet pil, on-demand note) |
| `figures/process_as_is.mmd` | "Fakturering via E-conomic" er korrekt (E-conomic eksisterer stadig) |
| `figures/c4_context.mmd` | E-conomic API er korrekt (edge functions eksisterer) |
| `figures/c4_container.mmd` | E-conomic API er korrekt |
| `figures/c4_component.mmd` | E-conomic EF-modul er korrekt |
| `figures/framework.mmd` | Outcomes er korrekt markeret |

---

## TODO (mangler i kodebasen)

| Hvad | Beskrivelse | Foreslået handling |
|---|---|---|
| Visma-integration | Brugeren nævner Visma, men **0 referencer** i kodebasen | Afklar med product owner: Er Visma planlagt? Hvis ja, opret integration-fil + env vars + docs |
| Automatisk AI-match trigger | AI-match er kun on-demand — ingen cron/webhook trigger | Overvej om automatisk matching ved job-oprettelse er ønsket (feature request) |
| Netlify-config | C4 Container nævner "Netlify CDN" men ingen `netlify.toml` i repo | Tilføj deployment-config eller fjern Netlify-reference |

---

*Genereret: 2026-02-09*

