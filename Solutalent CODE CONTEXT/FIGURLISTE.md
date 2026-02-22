# Figurliste — rapportudkast

> 12 foreslåede figurer (10–14 ønsket), med titel, formål, kapitelplacering,
> type, inputkilder og outputformat.

---

## F1 — Overordnet systemarkitektur (3-lags)
**Formål:** Visualisere SoluTalent som frontend → Supabase → eksterne services.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `docs/MODULE_INTERACTIONS.md` (high-level diagram)  
**Outputformat:** Mermaid + SVG/PNG

## F2 — AI-matchningspipeline (hybrid scoring)
**Formål:** Vise semantisk vs regelbaseret scoring og deres vægte.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `supabase/functions/ai-match/index.ts`, `supabase/functions/generate-embeddings/index.ts`, `docs/MODULE_INTERACTIONS.md`  
**Outputformat:** Mermaid + SVG/PNG

## F3 — Bidding-workflow (tilstandsmaskine)
**Formål:** Dokumentere bid-status og forhandlingsflowet.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `docs/flows/FLOW_BIDDING.md`, `docs/ARCHITECTURE_DECISIONS.md` (ADR-005)  
**Outputformat:** Mermaid (stateDiagram-v2) + SVG/PNG

## F4 — Kontraktsigneringsflow (dual-signature)
**Formål:** Vise signeringssekvens og statusovergange.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `docs/flows/FLOW_CONTRACT_SIGNING.md`, `docs/ARCHITECTURE_DECISIONS.md` (ADR-008)  
**Outputformat:** Mermaid (sequenceDiagram) + SVG/PNG

## F5 — E-conomic integrationsflow (tid → faktura)
**Formål:** Illustrere integrationens datarute og synkronisering.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `docs/MODULE_INTERACTIONS.md` (E-conomic flow), `docs/ARCHITECTURE_DECISIONS.md` (ADR-006)  
**Outputformat:** Mermaid + SVG/PNG

## F6 — Autentificeringsflow (login → session)
**Formål:** Visualisere auth-flow og stateopdatering i frontend.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `docs/MODULE_INTERACTIONS.md` (auth flow), `src/contexts/AuthContext.tsx`, `src/integrations/supabase/client.ts`  
**Outputformat:** Mermaid (sequenceDiagram) + SVG/PNG

## F7 — Database-domænemodel (forenklet ER)
**Formål:** Give et overblik over centrale tabeller og relationer.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `docs/DATABASE_SCHEMA.md`, `docs/database/`  
**Outputformat:** Mermaid (erDiagram) + SVG/PNG

## F8 — GDPR-compliance feature-map
**Formål:** Kortlægge GDPR-krav → implementerede features.  
**Kapitel:** Analyse  
**Type:** Repo-deriveret  
**Inputkilder:** `src/pages/FreelancerSettingsPage.tsx`, GDPR-migrationer i `supabase/migrations/archive/2025-Q1/`, `docs/SECURITY_AUDIT_DEC2025.md`  
**Outputformat:** Mermaid (table/flow) eller Markdown-tabel + SVG/PNG

## F9 — Frontend-komponenthierarki (page → hook → service)
**Formål:** Vise lagdeling og dataflow i frontend.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `src/App.tsx`, `src/hooks/`, `src/components/`, `src/services/`  
**Outputformat:** Mermaid + SVG/PNG

## F10 — Edge function-katalog (domæneoversigt)
**Formål:** Dokumentere de 40 edge functions pr. domæne.  
**Kapitel:** Artefaktbeskrivelse  
**Type:** Repo-deriveret  
**Inputkilder:** `supabase/functions/`  
**Outputformat:** Mermaid (table) eller Markdown-tabel + SVG/PNG

## K1 — DSR-cyklus tilpasset SoluTalent
**Formål:** Teoretisk ramme for artefakt-udvikling og evaluering.  
**Kapitel:** Teori eller Metode  
**Type:** Konceptuel  
**Inputkilder:** `docs/bachelor/literature_map.md` (DSR-spor), `docs/bachelor/references.bib`  
**Outputformat:** Mermaid + SVG/PNG

## K2 — Konceptuelt framework (inputs → AI/DSS → beslutning → outcomes)
**Formål:** Koble data, beslutningsstøtte og outcomes i én model.  
**Kapitel:** Teori  
**Type:** Konceptuel  
**Inputkilder:** `docs/bachelor/TEORI.md`, `docs/bachelor/figures/framework.mmd`  
**Outputformat:** Mermaid + SVG/PNG

---

## Noter

- Repo-deriverede figurer bør altid linkes til konkrete filstier i evidenslog.  
- Konceptuelle figurer skal markeres som “Konceptuel figur — egen tilvirkning” og
  have litteraturhenvisning.  

