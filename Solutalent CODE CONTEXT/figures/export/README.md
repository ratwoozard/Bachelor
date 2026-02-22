# Exported Figures for Bachelor Report

This directory contains all diagrams exported as **SVG** (vector) and **PNG** (raster) formats for inclusion in the bachelor report.

## Files

### Architecture Diagrams (C4 Model)
- `c4_context.svg` / `c4_context.png` - System context diagram
- `c4_container.svg` / `c4_container.png` - Container-level architecture
- `c4_component.svg` / `c4_component.png` - Component-level details (light)

### AI & Data Flow
- `ai_pipeline.svg` / `ai_pipeline.png` - AI matching pipeline dataflow
- `framework.svg` / `framework.png` - Conceptual framework (inputs → DSS → outcomes)

### Process Diagrams
- `process_as_is.svg` / `process_as_is.png` - Current bidding flow
- `process_to_be.svg` / `process_to_be.png` - Future flow with AI decision support

### Database
- `er_diagram.svg` / `er_diagram.png` - Entity-Relationship diagram

## Format Guidelines

### When to use SVG
✅ **Use for**:
- Digital/PDF versions of the report
- LaTeX documents
- Online documentation
- Scalable, lossless quality

### When to use PNG
✅ **Use for**:
- Microsoft Word documents (better compatibility)
- PowerPoint presentations
- Print versions (2400px width = ~300 DPI at 8" width)
- Email/web sharing

## Specifications

| Format | Resolution | Background | Notes |
|--------|-----------|------------|-------|
| **SVG** | Vector (infinite) | Transparent | Best for text clarity |
| **PNG** | 2400×1600 px | Transparent | High DPI for print |

## Regenerating Figures

To regenerate all figures (if source `.mmd` or `.puml` files are updated):

```bash
npm run export:figures
```

This will:
1. Process all Mermaid diagrams (`.mmd`)
2. Process all PlantUML diagrams (`.puml`)
3. Generate both SVG and PNG for each
4. Update `EXPORT_LOG.md` with results

## Source Files

All figures are derived from source files in the parent directory:
- `../ai_pipeline.mmd`
- `../c4_context.mmd`
- `../c4_container.mmd`
- `../c4_component.mmd`
- `../framework.mmd`
- `../process_as_is.mmd`
- `../process_to_be.mmd`
- `../er_diagram.puml`

## Usage in LaTeX

```latex
\begin{figure}[h]
  \centering
  \includegraphics[width=0.9\textwidth]{figures/export/c4_context.svg}
  \caption{System context (C4 model)}
  \label{fig:c4-context}
\end{figure}
```

## Usage in Markdown

```markdown
![System Context](export/c4_context.svg)
```

## Technical Details

**Mermaid**: Exported using `@mermaid-js/mermaid-cli` (mmdc)
**PlantUML**: Exported using PlantUML JAR v1.2024.3 with Java 17

---

*Generated: 2026-02-09*
*See `../EXPORT_LOG.md` for detailed export log*

