# Figure Export Log

> **Generated**: 9.2.2026, 12.13.57
> **Export directory**: `docs/bachelor/figures/export/`

---

## Mermaid Diagrams

**Success**: 7 / 7

| Input | SVG | PNG |
|-------|-----|-----|
| `ai_pipeline.mmd` | `docs\bachelor\figures\export\ai_pipeline.svg` | `docs\bachelor\figures\export\ai_pipeline.png` |
| `c4_component.mmd` | `docs\bachelor\figures\export\c4_component.svg` | `docs\bachelor\figures\export\c4_component.png` |
| `c4_container.mmd` | `docs\bachelor\figures\export\c4_container.svg` | `docs\bachelor\figures\export\c4_container.png` |
| `c4_context.mmd` | `docs\bachelor\figures\export\c4_context.svg` | `docs\bachelor\figures\export\c4_context.png` |
| `framework.mmd` | `docs\bachelor\figures\export\framework.svg` | `docs\bachelor\figures\export\framework.png` |
| `process_as_is.mmd` | `docs\bachelor\figures\export\process_as_is.svg` | `docs\bachelor\figures\export\process_as_is.png` |
| `process_to_be.mmd` | `docs\bachelor\figures\export\process_to_be.svg` | `docs\bachelor\figures\export\process_to_be.png` |

---

## PlantUML Diagrams

**Success**: 2 / 2

| Input | SVG | PNG |
|-------|-----|-----|
| `er_diagram.puml` | `docs\bachelor\figures\export\er_diagram.svg` | `docs\bachelor\figures\export\er_diagram.png` |
| `er_full.puml` | `docs\bachelor\figures\export\er_full.svg` | `docs\bachelor\figures\export\er_full.png` |

---

## Commands Used

```bash
# Mermaid (SVG)
mmdc -i "<input>.mmd" -o "export/<name>.svg"

# Mermaid (PNG, 2400px wide, transparent background)
mmdc -i "<input>.mmd" -o "export/<name>.png" -w 2400 -H 1600 -b transparent

# PlantUML (SVG)
plantuml -tsvg "<input>.puml" -o "export/"

# PlantUML (PNG)
plantuml -tpng "<input>.puml" -o "export/"
```

---

## Reproducibility

To regenerate all figures:

```bash
npm run export:figures
```
