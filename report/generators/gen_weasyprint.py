# gen_weasyprint.py – Genererer PDF fra introduktion via Jinja2 + WeasyPrint.
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML, CSS

from content_loader import load_introduction_md, get_sections_for_html, _md_to_html_line
import re

def main():
    base = Path(__file__).resolve().parent
    out_dir = base.parent / "generated"
    out_dir.mkdir(exist_ok=True)
    out_path = out_dir / "01-introduction-weasyprint.pdf"

    data = load_introduction_md()
    data["sections"] = get_sections_for_html(data)
    intro_paragraphs = [_md_to_html_line(p) for p in re.split(r"\n\n+", data["intro"]) if p.strip()]

    env = Environment(loader=FileSystemLoader(base / "templates"))
    template = env.get_template("intro.html")
    html_str = template.render(
        title=data["title"],
        intro_paragraphs=intro_paragraphs,
        sections=data["sections"],
    )

    html_doc = HTML(string=html_str, base_url=str(base))
    html_doc.write_pdf(out_path)

    print(f"Skrevet: {out_path}")

if __name__ == "__main__":
    main()
