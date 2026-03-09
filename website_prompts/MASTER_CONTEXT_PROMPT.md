# Master kontekst-prompt

**Brug:** Kopiér blokken nedenfor øverst ind i en ny AI-chat (Cursor, Claude, etc.), når I skal generere indhold eller kode til SoluTalent bachelor-hjemmesiden. Tilføj derefter den konkrete opgave (fx fra prompts_content.md eller prompts_ui_components.md).

---

## Prompt (copy-paste)

```
Du hjælper med at bygge en hjemmeside for vores bachelor-projekt om AI-automatisering og spildtid i bemandingsprocessen hos Support Solutions ApS (SoluTalent-case).

Læs først disse kontekstfiler (inkludér dem via @-reference eller indsæt deres indhold):
- website_context/PROJECT_CONTEXT.md   (case, PF, 8 trin, KPI'er, afgrænsning, nøgleord)
- website_context/DESIGN_AND_TONE.md   (målgruppe, tone, sprog, evt. stack)
- website_context/CONTENT_MAP.md        (sider og indhold pr. side)
- website_context/FIGURE_AND_ASSETS.md  (figurer, filstier, captions)

Alle svar skal være konsistente med:
- Case-fakta og problemformulering i PROJECT_CONTEXT
- Tone og sprog i DESIGN_AND_TONE (dansk, akademisk-men-tilgængelig, fagtermer med kort forklaring)
- Indholdsplan i CONTENT_MAP (overlap ikke sider, brug rigtige underspørgsmål og KPI-navne)
- Figurnavne og stier fra FIGURE_AND_ASSETS når figurer bruges

Teknisk stack: [Se DESIGN_AND_TONE.md – udfyld "Teknisk stack" der, eller skriv her fx "Statisk HTML/CSS/JS" eller "React + Vite + TypeScript".]
```

---

## Eksempel på brug

1. Åbn ny chat.
2. Paste master-prompten ovenfor (inkl. at @-refere de fire filer i website_context/).
3. Tilføj din konkrete opgave, fx: "Generer meta description til forsiden (max 155 tegn) som i prompts_content.md."
4. Eller: "Lav Hero-sektionen som beskrevet i prompts_ui_components.md med titel og undertitel fra PROJECT_CONTEXT."

---

*Når I har valgt teknisk stack, opdater DESIGN_AND_TONE.md og denne prompt så den nævner det eksplicit.*
