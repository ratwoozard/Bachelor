# Rapport TODO-liste

> **Prioriteret liste** over manglende elementer før endelig aflevering.  
> **Status**: Udkast klar · TODOs pending

---

## 🔴 HIGH Priority (skal løses)

| # | Opgave | Sektion | Note |
|---|---|---|---|
| 1 | **Indsæt forfatternavne** | Forside | [INDSÆT NAVNE] |
| 2 | **Indsæt vejledernavn** | Forside | [INDSÆT NAVN] |
| 3 | **Indsæt universitet** | Forside | [INDSÆT UNIVERSITET] |
| 4 | **Indsæt afleveringsdato** | Forside | [INDSÆT DATO] |
| 5 | **Indsæt anslag** | Forside | [INDSÆT ANSLAG] |
| 6 | **Verificer alle DOI'er** | Referencer | Besøg `https://doi.org/<DOI>` for hver |
| 7 | **Konverter til Word/LaTeX** | Hele rapporten | Markdown → endelig format |

---

## 🟡 MEDIUM Priority (bør løses)

| # | Opgave | Sektion | Note |
|---|---|---|---|
| 8 | **Primær empiri (interviews)** | §4.2, §8.2 | Hvis gennemført: tilføj resultater. Hvis ej: bekræft at artefakt-empiri er tilstrækkelig |
| 9 | **Produktionsstatus** | §2.1 | Afklar om platformen er/har været i produktion. Tilføj deployment-dato hvis ja |
| 10 | **Refleksion over forskerrolle** | §4.3 | Uddyb: Er I medudviklere? Praktikanter? Hvordan håndteres inhabilitet? |
| 11 | **Figur-nummerering** | Hele rapporten | Verificer at alle figurer har korrekte numre (5.1, 5.2 osv.) |
| 12 | **Sidetal og indholdsfortegnelse** | Hele rapporten | Tilføj ved konvertering |
| 13 | **Abstract/resumé** | Forside | Tilføj dansk og engelsk abstract |

---

## 🟢 LOW Priority (nice-to-have)

| # | Opgave | Sektion | Note |
|---|---|---|---|
| 14 | **Netlify-config evidens** | Appendix A, F4 | Tilføj `netlify.toml` eller fjern Netlify-claim |
| 15 | **RLS-policy count verificering** | §6.3 | Tæl policies direkte fra SQL (nu: 585 fra audit-doc) |
| 16 | **Fremtidige figurer** | Appendix | Overvej: K1 (DSR-cyklus), K3 (Human-in-the-loop) fra CONCEPTUAL_FIGURES.md |
| 17 | **Ordliste/glossar** | Bilag | Definer: embedding, RLS, ADR, Edge Function osv. |

---

## ✅ Allerede løst (via FIX_PLAN)

- [x] `weights_used` rettelser i SYSTEMANALYSE.md, METODE_REVIDERET.md
- [x] "betaling" → "fakturering" konsistens
- [x] `automatic-match/index.ts` reference fjernet
- [x] Figur-kommentarer rettet (bud-til-fakturering)
- [x] EVALUERING.md status-markers tilføjet

---

## Kvalitetskontrol før aflevering

- [ ] Søg efter "TODO" — alle skal være løst eller markeret som limitation
- [ ] Søg efter "Visma" — skal være 0 forekomster
- [ ] Søg efter "payout", "withdrawal" — kun i kontekst af "fjernet"
- [ ] Søg efter "weights_used" — kun i kontekst af API-response/match_analytics
- [ ] Verificer alle figur-stier peger på eksisterende filer
- [ ] Læs rapporten højt — fanger sproglige fejl

---

*Genereret: 2026-02-09*

