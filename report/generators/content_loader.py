# content_loader.py – Indlæser introduktionskapitlet og giver struktureret indhold til generatorer.
import re
from pathlib import Path

def _md_to_html_line(text: str) -> str:
    """Simpel markdown til HTML: **bold**, *italic*, `kode`."""
    s = text
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'\*(.+?)\*', r'<em>\1</em>', s)
    s = re.sub(r'`(.+?)`', r'<code>\1</code>', s)
    return s

def load_introduction_md(md_path: Path | None = None) -> dict:
    """Læser 01-introduction.md og returnerer dict med title, intro, sections."""
    if md_path is None:
        md_path = Path(__file__).resolve().parent.parent / "01-introduction.md"
    raw = md_path.read_text(encoding="utf-8")

    # Fjern første # titel
    title_match = re.match(r'^#\s+(.+)$', raw, re.MULTILINE)
    title = title_match.group(1).strip() if title_match else "Introduktion"

    # Split i sektioner efter ##
    parts = re.split(r'\n##\s+', raw)
    intro_block = parts[0]
    # Fjern titellinje fra intro
    intro_text = re.sub(r'^#\s+.+$', '', intro_block, flags=re.MULTILINE).strip()
    intro_text = re.sub(r'^---\s*', '', intro_text).strip()

    sections = []
    for block in parts[1:]:
        lines = block.strip().split("\n")
        if not lines:
            continue
        head = lines[0].strip()
        body = "\n".join(lines[1:]).strip()
        body = re.sub(r'^---\s*', '', body).strip()
        paragraphs = [p.strip() for p in re.split(r'\n\n+', body) if p.strip()]
        sections.append({
            "heading": head,
            "paragraphs": paragraphs,
        })

    return {
        "title": title,
        "intro": intro_text,
        "sections": sections,
    }

def get_plain_blocks(data: dict) -> list[tuple[str, str]]:
    """Returnerer liste af (heading eller '', paragraph) til brug i ReportLab/FPDF2/docx."""
    blocks = []
    if data.get("intro"):
        blocks.append(("", data["intro"]))
    for sec in data.get("sections", []):
        blocks.append((sec["heading"], ""))
        for p in sec["paragraphs"]:
            blocks.append(("", p))
    return blocks

def strip_md(text: str) -> str:
    """Fjerner markdown-formatting til ren brødtekst."""
    s = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    s = re.sub(r'\*(.+?)\*', r'\1', s)
    s = re.sub(r'`(.+?)`', r'\1', s)
    s = re.sub(r'^>\s*', '', s, flags=re.MULTILINE)
    return s.strip()

def get_sections_for_html(data: dict):
    """Returnerer sektioner med HTML-formaterede afsnit til Jinja."""
    out = []
    for sec in data.get("sections", []):
        out.append({
            "heading": sec["heading"],
            "paragraphs_html": [_md_to_html_line(p) for p in sec["paragraphs"]],
        })
    return out
