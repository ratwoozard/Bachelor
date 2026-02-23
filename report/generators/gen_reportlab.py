# gen_reportlab.py – Genererer PDF med ReportLab fra introduktion.
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from content_loader import load_introduction_md, get_plain_blocks, strip_md

def main():
    base = Path(__file__).resolve().parent
    out_dir = base.parent / "generated"
    out_dir.mkdir(exist_ok=True)
    out_path = out_dir / "01-introduction-reportlab.pdf"

    data = load_introduction_md()
    blocks = get_plain_blocks(data)

    doc = SimpleDocTemplate(
        str(out_path),
        pagesize=A4,
        leftMargin=2*cm,
        rightMargin=2*cm,
        topMargin=2*cm,
        bottomMargin=2*cm,
    )
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        name="CustomTitle",
        parent=styles["Heading1"],
        fontSize=16,
        textColor=colors.HexColor("#1a365d"),
        spaceAfter=12,
    )
    heading_style = ParagraphStyle(
        name="CustomHeading",
        parent=styles["Heading2"],
        fontSize=12,
        textColor=colors.HexColor("#2c5282"),
        spaceBefore=18,
        spaceAfter=8,
    )
    body_style = ParagraphStyle(
        name="CustomBody",
        parent=styles["Normal"],
        fontSize=11,
        leading=14,
        spaceAfter=8,
        alignment=4,  # justify
    )

    story = []
    story.append(Paragraph(data["title"], title_style))
    story.append(Spacer(1, 0.3*cm))
    story.append(Paragraph(strip_md(data["intro"]).replace("\n", "<br/>"), body_style))
    story.append(Spacer(1, 0.5*cm))

    for heading, para in blocks:
        if heading:
            story.append(Paragraph(heading, heading_style))
        if para:
            story.append(Paragraph(strip_md(para).replace("\n", "<br/>"), body_style))

    doc.build(story)
    print(f"Skrevet: {out_path}")

if __name__ == "__main__":
    main()
