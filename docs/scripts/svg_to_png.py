# -*- coding: utf-8 -*-
"""Convert docs/figures/RESEARCH_STRUCTURE_SYNOPSIS.svg to PNG (300 DPI) for Word embed."""
from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
SVG_PATH = ROOT / "docs" / "figures" / "RESEARCH_STRUCTURE_SYNOPSIS.svg"
PNG_PATH = ROOT / "docs" / "figures" / "RESEARCH_STRUCTURE_SYNOPSIS.png"

TARGET_DPI = 300
SVG_POINT_WIDTH = 720  # matches viewBox width in points
SVG_POINT_HEIGHT = 900


def _render_with_svglib() -> bool:
    try:
        from svglib.svglib import svg2rlg
        from reportlab.graphics import renderPM
    except ImportError:
        return False
    drawing = svg2rlg(str(SVG_PATH))
    if drawing is None:
        return False
    scale = TARGET_DPI / 72.0
    drawing.scale(scale, scale)
    drawing.width = SVG_POINT_WIDTH * scale
    drawing.height = SVG_POINT_HEIGHT * scale
    renderPM.drawToFile(drawing, str(PNG_PATH), fmt="PNG", dpi=TARGET_DPI)
    return True


def _render_with_cairosvg() -> bool:
    try:
        import cairosvg
    except ImportError:
        return False
    cairosvg.svg2png(
        url=str(SVG_PATH),
        write_to=str(PNG_PATH),
        output_width=SVG_POINT_WIDTH * TARGET_DPI / 72,
        output_height=SVG_POINT_HEIGHT * TARGET_DPI / 72,
    )
    return True


def main() -> None:
    if not SVG_PATH.is_file():
        raise FileNotFoundError(f"SVG not found: {SVG_PATH}")
    for backend in (_render_with_svglib, _render_with_cairosvg):
        if backend():
            print(f"Wrote {PNG_PATH} ({TARGET_DPI} DPI) via {backend.__name__}")
            return
    raise RuntimeError(
        "No SVG->PNG backend available. Install svglib+reportlab or cairosvg."
    )


if __name__ == "__main__":
    main()
