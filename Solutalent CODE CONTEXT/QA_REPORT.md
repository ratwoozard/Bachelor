# QA-rapport — docs/bachelor/ kvalitetssikring

> **Formål**: Systematisk gennemgang af alle producerede filer i `docs/bachelor/`
> for at identificere påstande uden kilde, uklare begreber, kausale påstande uden data
> og figurer uden dokumenteret datagrundlag.
>
> **Metode**: Manuelt review af alle filer + krydstjek mod kodebase.
> **Prioritering**: "Censor-risk" (HØJ/MEDIUM/LAV).

---

## 1. Påstande uden kilde

### HØJ PRIORITET (fix før aflevering)

| Fil | Linje/Afsnit | Påstand | Problem | Fix |
|-----|-------------|---------|---------|-----|
| `INTRO.md` | Linje 18-19 | TODO-markering: "Indsæt kort kontekst om organisation og brugergrupper" | Mangler primær empiri (interview/observation) | Enten tilføj empiri eller omformulér til kun repo-baserede fakta |
| `INTRO.md` | Linje 43-44 | TODO: "Dokumentér hvordan beslutninger træffes i praksis" | Kausale påstande om beslutningsproces kræver primær empiri | Enten tilføj interviews eller slet afsnittet |
| `INTRO.md` | Linje 63-64 | TODO: "Bekræft om platformen anvendes i produktion" | Deployment-status er udokumenteret | Dokumentér via release-noter eller ADR |
| `METODE_REVIDERET.md` | Linje 18 | "Indsæt korrekte sidetal/udgaver for Dewey (1938) og James (1907)" | Mangler fuldstændige bibliografiske data | Slå op i faktiske udgaver og tilføj sidetal |
| `METODE_REVIDERET.md` | Linje 44 | "Afklar jeres egen rolle" | Forskerposition er uklar | Tilføj beskrivelse af egen rolle (udvikler/praktikant/observatør) |
| `EVALUERING.md` | Linje 30 | TODO: "Hvis I har adgang til drift/production..." | Udokumenteret om drift/logs er tilgængelige | Dokumentér eller slet afsnittet |
| `EVALUERING.md` | Linje 50 | TODO: "Konkrete målinger kræver logdata og samtykke" | Primær empiri mangler | Enten tilføj logdata eller markér som "fremtidig arbejde" |

### MEDIUM PRIORITET (fix hvis tid)

| Fil | Linje/Afsnit | Påstand | Problem | Fix |
|-----|-------------|---------|---------|-----|
| `SYSTEMANALYSE.md` | Afsnit 2.2 | "237 React-komponenter" | Tal matcher ikke claim i METODE_REVIDERET (172+65=237) | Konsistenscheck OK, men mangler direkte kilde |
| `ARKITEKTUR.md` | Linje 34 | "Frontend-lag følger pages → components → hooks → services" | Udokumenteret organisationsprincip | Tilføj reference til `.cursor/rules/` eller ADR |
| `DATABASE.md` | Afsnit "Relationer" | Alle relationer er dokumenterede | OK, men mangler en overordnet forklaring af relationsmønstre | Tilføj kort intro til ER-diagram |

---

## 2. Uklare begreber uden definition

### HØJ PRIORITET

| Fil | Begreb | Problem | Fix |
|-----|--------|---------|-----|
| `INTRO.md` | "AI-matchning" (første forekomst) | Ikke defineret før brug | Tilføj kort definition eller henvisning til TEORI.md |
| `INTRO.md` | "Admin-medieret beslutningstagning" | Første forekomst uden definition | Tilføj kort forklaring eller henvisning |
| `ARKITEKTUR.md` | "Edge Functions" | Ikke forklaret for læsere uden Supabase-kendskab | Tilføj kort forklaring (serverløse funktioner) |
| `DATABASE.md` | "RLS" | Bruges uden definition | Tilføj "Row Level Security (RLS)" ved første forekomst |
| `PROCESSER.md` | "Admin-in-the-loop" | Bruges uden definition | Henvisning til TEORI.md eller kort forklaring |

### MEDIUM PRIORITET

| Fil | Begreb | Problem | Fix |
|-----|--------|---------|-----|
| `EVALUERING.md` | "Statisk kodeanalyse" | Ikke forklaret | Tilføj kort definition (analyse uden eksekvering) |
| `LOGGING_SPEC.md` | "Correlation ID" | Teknisk term ikke forklaret | Tilføj kort forklaring i fælles felter-afsnit |
| `AI_PIPELINE.md` | "Pgvector" | Teknisk term ikke forklaret | Tilføj kort forklaring (PostgreSQL extension for vektorsøgning) |

---

## 3. Kausale påstande uden data

### HØJ PRIORITET (censor-kritisk)

| Fil | Påstand | Problem | Fix |
|-----|---------|---------|-----|
| `INTRO.md` | "AI-løsninger kan forbedre matching-effektiviteten" | Kausal påstand uden data | Omformulér til teoretisk udsagn med citation (fx [@Tambe2019]) eller slet |
| `INTRO.md` | "Kvalitet i processen måles ikke kun på algoritmisk præcision, men på om beslutninger kan begrundes" | Kausal påstand om kvalitet uden empirisk dokumentation | Omformulér til normativt udsagn fra teori ([@Shneiderman2020]) |
| `EVALUERING.md` | "Artefakt-evalueringen kan udvides med performance-målinger" | Kausal påstand om mulig effekt | Omformulér til "hvis performance-målinger tilføjes, kan..." |
| `SYSTEMANALYSE.md` | Afsnit 3.2 "Hybrid tilgang balancerer bias-risici med effektivitet" | Kausal påstand uden empirisk dokumentation | Omformulér til "Hybrid tilgang er designet til at balancere..." (intention vs effekt) |
| `SYSTEMANALYSE.md` | Afsnit 5.1 "Hybrid tilgang reducerer afhængighed af embeddings alene" | Kausal påstand | Omformulér til "Hybrid tilgang er tiltænkt at reducere..." eller dokumentér effekt |

### MEDIUM PRIORITET

| Fil | Påstand | Problem | Fix |
|-----|---------|---------|-----|
| `TEORI.md` | "AI bør støtte — ikke erstatte — beslutningstagning" | Normativ påstand uden begrundelse | Tilføj litteraturcitation ([@Dellermann2019; @Shneiderman2020]) |
| `PROCESSER.md` | "AI anvendes **før** admin-match" | Tidsmæssig påstand | Dokumentér sekvens i kode eller ADR |

---

## 4. Figurer uden dokumenteret datagrundlag

### HØJ PRIORITET

| Figur | Fil | Problem | Fix |
|-------|-----|---------|-----|
| `framework.mmd` | `TEORI.md` | Markeret som "egen tilvirkning" med litteraturcitations, men mangler metodeforklaring | Tilføj afsnit i TEORI.md: "Figuren er udledt af..." |
| `process_as_is.mmd` | `PROCESSER.md` | Repo-deriveret, men mangler tydelig mapping til kilder | Tilføj tabel: boks → filsti (som i ai_pipeline.mmd) |
| `process_to_be.mmd` | `PROCESSER.md` | Repo-deriveret + konceptuel (to-be er forslag) | Markér eksplicit som "foreslået flow" |

### MEDIUM PRIORITET

| Figur | Fil | Problem | Fix |
|-------|-----|---------|-----|
| `c4_context.mmd` | `ARKITEKTUR.md` | Repo-deriveret, men mangler eksplicit kilde-tabel | OK — claim→evidence tabel findes i ARKITEKTUR.md |
| `er_diagram.puml` | `DATABASE.md` | Repo-deriveret fra migrationer | OK — kildetabel findes i DATABASE.md |
| `ai_pipeline.mmd` | `AI_PIPELINE.md` | Repo-deriveret med claim→evidence | OK — alle bokse har filstier |

### LAV PRIORITET

| Figur | Fil | Problem | Fix |
|-------|-----|---------|-----|
| Alle figurer i `FIGURLISTE.md` | `FIGURLISTE.md` | Kun forslag — endnu ikke implementerede | OK — listen er en plan |

---

## 5. Konsistens og references

### HØJ PRIORITET

| Problem | Fil(er) | Fix |
|---------|---------|-----|
| Inkonsistent antal ADR'er | METODE_REVIDERET.md siger "9 ADR'er", SYSTEMANALYSE.md siger "12 ADR'er" | Tæl op i `docs/ARCHITECTURE_DECISIONS.md` og ret alle filer |
| Manglende DOI-verifikation | `literature_map.md` indeholder notice om DOI-verifikation | Før aflevering: Verificér alle DOI'er via https://doi.org/ |
| TODO-markeringer | INTRO.md, EVALUERING.md, METODE_REVIDERET.md | Beslut om primær empiri tilføjes eller TODO'er fjernes |

### MEDIUM PRIORITET

| Problem | Fil(er) | Fix |
|---------|---------|-----|
| Inkonsistente filstier | Nogle filer bruger relativ sti, andre bruger absolut | Standardisér til relative stier fra repo-root |
| Citation-format | Nogle steder [@Author2020], andre steder (Author, 2020) | Vælg én standard (forslag: [@Author2020]) |

---

## 6. Samlet prioriteret fix-liste

### Før aflevering (HØJ PRIORITET — censor-risiko)

1. **Ret ADR-antal**: Tæl op og ret alle filer (METODE_REVIDERET: 9 vs SYSTEMANALYSE: 12)
2. **Fjern/dokumentér TODO-markeringer i INTRO.md**: Primær empiri eller omskrivning
3. **Definer kernebegrebberne ved første forekomst**: "AI-matchning", "Admin-medieret", "RLS", "Edge Functions"
4. **Omformulér kausale påstande uden data**: "kan forbedre" → "er designet til at forbedre" eller tilføj litteraturcitation
5. **Tilføj metodeforklaring til konceptuelle figurer**: Især framework.mmd
6. **Verificér alle DOI'er i REFERENCES.bib**: Tjek via https://doi.org/
7. **Tilføj sidetal til Dewey (1938) og James (1907)** i METODE_REVIDERET.md
8. **Dokumentér forskerposition** i METODE_REVIDERET.md (udvikler/praktikant/observatør)

### Før vejledning/peer review (MEDIUM PRIORITET)

9. **Tilføj claim→evidence tabel til process_as_is/to_be.mmd**: Som i ai_pipeline.mmd
10. **Standardisér citation-format**: Vælg [@Author2020] eller (Author, 2020)
11. **Tilføj kort forklaring til tekniske termer**: "Pgvector", "Correlation ID", "Statisk kodeanalyse"
12. **Konsistenscheck på tal**: Komponenter, migrationer, edge functions (alle steder)

### Nice-to-have (LAV PRIORITET)

13. **Tilføj kort intro til ER-diagram**: Forklaring af relationsmønstre
14. **Standardisér filstier**: Relativ vs absolut
15. **Ekspandér AI_PIPELINE.md**: Tilføj kort forklaring til hver boks (ikke kun filsti)

---

## 7. Konkrete næste skridt

1. **Tag fat i HØJ PRIORITET-listen** (pkt. 1-8) — disse er censor-kritiske
2. **Læs INTRO.md, METODE_REVIDERET.md og EVALUERING.md højt** — check om TODO'er kan fjernes eller skal dokumenteres
3. **Gennemgå REFERENCES.bib** — verificér DOI'er og sidetal
4. **Peer review**: Bed en medstuderende læse INTRO.md og TEORI.md — check om begreber er klare

---

## 8. Overordnet kvalitetsvurdering

### Styrker
- **Systematisk evidens-dokumentation**: Claim→evidence-tabeller i AI_PIPELINE, ARKITEKTUR, DATABASE
- **Teoretisk forankring**: TEORI.md og SYSTEMANALYSE.md har stærk litteraturcitations
- **Repo-sporbarhed**: Figurer og påstande er koblet til konkrete filstier

### Svagheder
- **TODO-markeringer**: Flere kritiske TODO'er kræver primær empiri eller omskrivning
- **Kausale påstande**: Flere påstande om effekt uden empirisk dokumentation
- **Begrebsdefinitioner**: Centrale termer bruges før definition
- **Inkonsistens**: ADR-antal og tal varierer mellem filer

### Samlet risikovurdering
**MEDIUM-HØJ**: Projektet har stærk teoretisk og teknisk forankring, men TODO-markeringer
og udokumenterede kausale påstande udgør en censor-risiko. Fix-listen er overkommelig
(8 HØJ-prioritet fixes), men kræver prioritering før aflevering.

---

*Genereret: 2026-02-09. Baseret på manuel gennemgang af alle filer i `docs/bachelor/`.*

