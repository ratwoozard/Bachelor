# Bachelor Report - Figure Export Summary

**Dato**: 9. februar 2026  
**Status**: ✅ Alle figurer eksporteret succesfuldt

---

## Oversigt

| # | Figur | SVG | PNG | Type | Kapitel |
|---|-------|-----|-----|------|---------|
| 1 | **C4 Context** | ✅ | ✅ | Arkitektur | Arkitektur |
| 2 | **C4 Container** | ✅ | ✅ | Arkitektur | Arkitektur |
| 3 | **C4 Component** | ✅ | ✅ | Arkitektur | Arkitektur |
| 4 | **AI Pipeline** | ✅ | ✅ | Dataflow | AI/DSS |
| 5 | **Konceptuelt Framework** | ✅ | ✅ | Konceptuel | Teori |
| 6 | **ER-diagram** | ✅ | ✅ | Database | Database/Arkitektur |
| 7 | **Process As-Is** | ✅ | ✅ | Procesflow | Problemanalyse |
| 8 | **Process To-Be** | ✅ | ✅ | Procesflow | Design/Løsning |

**Total**: 8 diagrammer × 2 formater = **16 billedfiler**

---

## Genererede Filer

### 📁 `docs/bachelor/figures/export/`

#### Arkitektur (C4 Model)
```
✓ c4_context.svg        (vector)
✓ c4_context.png        (2400×1600 px, 300 DPI)
✓ c4_container.svg      (vector)
✓ c4_container.png      (2400×1600 px, 300 DPI)
✓ c4_component.svg      (vector)
✓ c4_component.png      (2400×1600 px, 300 DPI)
```

#### AI & Framework
```
✓ ai_pipeline.svg       (vector)
✓ ai_pipeline.png       (2400×1600 px, 300 DPI)
✓ framework.svg         (vector)
✓ framework.png         (2400×1600 px, 300 DPI)
```

#### Processer
```
✓ process_as_is.svg     (vector)
✓ process_as_is.png     (2400×1600 px, 300 DPI)
✓ process_to_be.svg     (vector)
✓ process_to_be.png     (2400×1600 px, 300 DPI)
```

#### Database
```
✓ er_diagram.svg        (vector)
✓ er_diagram.png        (high-res)
```

---

## Anvendelse i Rapporten

### LaTeX (anbefalet for PDF)
```latex
\begin{figure}[h]
  \centering
  \includegraphics[width=0.9\textwidth]{figures/export/c4_context.svg}
  \caption{Systemkontekst (C4-model) - SoluTalent platform}
  \label{fig:c4-context}
\end{figure}
```

### Microsoft Word
1. Indsæt → Billede
2. Vælg `.png` versionen (bedre kompatibilitet)
3. Billeder er allerede høj opløsning (300 DPI)

### Markdown
```markdown
![AI Matching Pipeline](export/ai_pipeline.svg)
```

---

## Specifikationer

| Format | Opløsning | Baggrund | Anvendelse |
|--------|-----------|----------|------------|
| **SVG** | Vektor (∞) | Transparent | PDF, LaTeX, web |
| **PNG** | 2400×1600 px | Transparent | Word, PowerPoint, print |

**DPI-beregning**: 2400 px / 8 inches = 300 DPI (print-kvalitet)

---

## Regenerering

Hvis kildefiler (`.mmd` eller `.puml`) opdateres:

```bash
npm run export:figures
```

Dette vil:
1. Finde alle `.mmd` filer i `docs/bachelor/figures/`
2. Finde alle `.puml` filer i `docs/bachelor/figures/`
3. Eksportere hver til både SVG og PNG
4. Gemme output i `docs/bachelor/figures/export/`
5. Opdatere `EXPORT_LOG.md`

---

## Tekniske Detaljer

### Værktøjer
- **Mermaid**: `@mermaid-js/mermaid-cli` (mmdc) - globalt installeret
- **PlantUML**: PlantUML JAR v1.2024.3 med OpenJDK 17

### Kommandoer
```bash
# Mermaid → SVG
mmdc -i input.mmd -o export/output.svg

# Mermaid → PNG (høj opløsning)
mmdc -i input.mmd -o export/output.png -w 2400 -H 1600 -b transparent

# PlantUML → SVG
java -jar plantuml.jar -tsvg input.puml -o export/

# PlantUML → PNG
java -jar plantuml.jar -tpng input.puml -o export/
```

---

## Kildefiler

Alle figurer er udledt fra følgende kildefiler i `docs/bachelor/figures/`:

| Figur | Kildefil | Type | Linjer |
|-------|----------|------|--------|
| C4 Context | `c4_context.mmd` | Mermaid | Repo-udledt |
| C4 Container | `c4_container.mmd` | Mermaid | Repo-udledt |
| C4 Component | `c4_component.mmd` | Mermaid | Repo-udledt |
| AI Pipeline | `ai_pipeline.mmd` | Mermaid | Repo-udledt |
| Framework | `framework.mmd` | Mermaid | Konceptuel |
| ER-diagram | `er_diagram.puml` | PlantUML | Repo-udledt |
| Process As-Is | `process_as_is.mmd` | Mermaid | Repo-udledt |
| Process To-Be | `process_to_be.mmd` | Mermaid | Konceptuel |

---

## Dokumentation

- **Detaljeret log**: `docs/bachelor/figures/EXPORT_LOG.md`
- **Brugsguide**: `docs/bachelor/figures/export/README.md`
- **Export script**: `scripts/export_figures.mjs`
- **NPM script**: Tilføjet til `package.json` som `"export:figures"`

---

## Næste Skridt

1. ✅ Alle figurer er genereret og klar til brug
2. ⏳ Indsæt figurer i rapporten med passende captions
3. ⏳ Reference figurerne i teksten (f.eks. "se Figur 1")
4. ⏳ Verificer at alle figurer er læsbare i print-preview
5. ⏳ Opdater figurliste i rapportens indholdsfortegnelse

---

*Genereret: 2026-02-09*  
*Scriptet sikrer reproducérbarhed og konsistens på tværs af alle figurer*

