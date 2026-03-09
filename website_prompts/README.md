# Prompts og kontekst til SoluTalent bachelor-hjemmeside

Korte guide til hvordan I bruger kontekstfilerne og prompt-filerne når I bygger hjemmesiden – især med **to personer** der arbejder parallelt.

---

## Mapper

- **website_context/** – Kontekst til AI (case, design, indhold, figurer). Læses før eller sammen med prompts.
- **website_prompts/** – Prompts I paste ind i Cursor/Claude. Inkl. master-prompt og kategorier (content, UI, smart features, diagrammer).

---

## Sådan bruger I MASTER_CONTEXT_PROMPT

1. Åbn en ny chat i Cursor (eller anden AI).
2. Paste indholdet fra **MASTER_CONTEXT_PROMPT.md** (blokken under "Prompt (copy-paste)").
3. Inkludér kontekstfilerne via @-reference:  
   `@website_context/PROJECT_CONTEXT.md`  
   `@website_context/DESIGN_AND_TONE.md`  
   `@website_context/CONTENT_MAP.md`  
   `@website_context/FIGURE_AND_ASSETS.md`
4. Tilføj den konkrete opgave – fx en af promptene fra **prompts_content.md**, **prompts_ui_components.md**, **prompts_smart_features.md** eller **prompts_diagrams.md**.

AI får dermed samme case-fakta, tone og indholdsplan hver gang.

---

## Workflow for 2 personer

**Fælles start (begge):**
- Læs **PROJECT_CONTEXT.md** og **CONTENT_MAP.md** én gang, så I kender case og sider.
- Afklær **teknik** (HTML/CSS, React, Astro) og evt. designnøgleord – skriv det i **DESIGN_AND_TONE.md**.

**Rollefordeling (forslag):**
- **Person A (UI/komponenter):** Bruger **MASTER_CONTEXT_PROMPT** + **prompts_ui_components.md** + **prompts_smart_features.md** + **prompts_diagrams.md** til at generere Hero, navigation, 8-trins sektion, KPI-kort, figur-galleri, footer, interaktivt diagram og **Mermaid-diagrammer** (proces, AI-pipeline, framework) osv.
- **Person B (Indhold/copy):** Bruger **MASTER_CONTEXT_PROMPT** + **prompts_content.md** til at generere meta description, "Om projektet"-tekst, undertekster til 8 trin, teori-tekster, figur-captions, KPI-forklaringer.

**Integration:**
- Person B leverer tekster (meta, brødtekst, captions) til Person A, der indsætter dem i komponenter/sider.
- Eller I bytter filer/PRs: den ene committer tekster, den anden committer komponenter og integrerer teksterne.

**Versionsstyring:**
- Hold alle kontekst- og prompt-filer i repo. Når I opdaterer PROJECT_CONTEXT eller CONTENT_MAP, puller den anden og bruger den seneste version – så output forbliver konsistent.

---

## Prompt-filer – hurtig oversigt

| Fil | Indhold |
|-----|---------|
| **MASTER_CONTEXT_PROMPT.md** | Én prompt der loader alle kontekstfiler + stack. Brug den øverst i hver ny chat. |
| **prompts_content.md** | 7 prompts til tekster: meta, om-projektet, 8-trins undertekster, teori, captions, underspørgsmål, KPI-forklaringer. |
| **prompts_ui_components.md** | 7 prompts til UI: Hero, 8-trins sektion, KPI-cards, figur-galleri, footer, navigation, teori-kort. |
| **prompts_smart_features.md** | 5 prompts til avancerede ting: interaktivt 8-trins diagram, KPI-dashboard, teori-navigator, filtrerbar figur-galleri, mini-checkliste. |
| **prompts_diagrams.md** | 4 prompts til Mermaid-diagrammer: 8-trins bemandingsproces (as-is), AI-matchingpipeline (6 stages), konceptuelt framework, teoretisk syntese (valgfri). |

---

## Tips

- **Uendelige credits:** I kan generere flere varianter (fx to forslag til forside) og vælge den bedste, eller iterere ("lav samme sektion men kortere").
- **Konsistens:** Hvis AI gætter på case-fakta, påmind med "Brug PROJECT_CONTEXT – scope er staging_imported til matched" eller lign.
- **Stack:** Når I har valgt teknisk stack, opdater **DESIGN_AND_TONE.md** (sektion "Teknisk stack") og evt. **MASTER_CONTEXT_PROMPT.md**, så alle prompts beder om det rigtige output-format.

---

*God bygge-lyst.*
