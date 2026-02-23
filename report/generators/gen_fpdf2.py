# gen_fpdf2.py – Genererer PDF med FPDF2 fra introduktion.
import os
from pathlib import Path
from fpdf import FPDF

from content_loader import load_introduction_md, get_plain_blocks, strip_md

def _add_unicode_fonts(pdf: FPDF) -> bool:
    """Tilføjer Arial (regular + bold) på Windows så æ, ø, å virker. Returnerer True hvis tilføjet."""
    win = Path(os.environ.get("WINDIR", "C:\\Windows"))
    arial = win / "Fonts" / "arial.ttf"
    arial_b = win / "Fonts" / "arialbd.ttf"
    if arial.exists():
        pdf.add_font("Arial", "", str(arial))
        if arial_b.exists():
            pdf.add_font("Arial", "B", str(arial_b))
        return True
    return False

class DanishPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(True, margin=20)
        self._font_name = "Helvetica"

    def header(self):
        self.set_font(self._font_name, "", 8)
        self.set_text_color(100, 100, 100)
        self.cell(0, 8, "Kapitel 1 – Introduktion", align="C")
        self.ln(12)

    def chapter_title(self, title: str):
        self.set_font(self._font_name, "B", 16)
        self.set_text_color(26, 54, 93)
        self.multi_cell(0, 10, title)
        self.ln(6)

    def chapter_heading(self, heading: str):
        self.set_font(self._font_name, "B", 12)
        self.set_text_color(44, 82, 130)
        self.multi_cell(0, 8, heading)
        self.ln(4)

    def body(self, text: str):
        self.set_font(self._font_name, "", 11)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 6, text)
        self.ln(3)

def main():
    base = Path(__file__).resolve().parent
    out_dir = base.parent / "generated"
    out_dir.mkdir(exist_ok=True)
    out_path = out_dir / "01-introduction-fpdf2.pdf"

    data = load_introduction_md()
    blocks = get_plain_blocks(data)

    pdf = DanishPDF()
    pdf._use_unicode = _add_unicode_fonts(pdf)
    pdf._font_name = "Arial" if pdf._use_unicode else "Helvetica"
    pdf.add_page()
    pdf.set_margins(25, 25, 25)

    pdf.chapter_title(data["title"])
    pdf.body(strip_md(data["intro"]))
    pdf.ln(6)

    for heading, para in blocks:
        if heading:
            pdf.chapter_heading(heading)
        if para:
            pdf.body(strip_md(para))

    pdf.output(str(out_path))
    print(f"Skrevet: {out_path}")

if __name__ == "__main__":
    main()
