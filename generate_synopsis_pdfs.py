from pathlib import Path
import textwrap

PAGE_W, PAGE_H = 595, 842
MARGIN = 50
LINE_H = 15
FONT_SIZE = 11


def esc(s: str) -> str:
    return s.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')


def md_to_lines(md: str):
    out = []
    for raw in md.splitlines():
        line = raw.rstrip().replace('**','').replace('*','').replace('`','')
        if line.startswith('#'):
            level = len(line) - len(line.lstrip('#'))
            text = line[level:].strip()
            out.append(('heading', level, text))
        elif line.startswith('```'):
            out.append(('codefence', 0, ''))
        elif line.startswith('- '):
            out.append(('bullet', 0, line[2:].strip()))
        elif line.strip() == '---':
            out.append(('rule', 0, ''))
        else:
            out.append(('text', 0, line.strip()))
    return out


def wrap_item(kind, level, text):
    if kind == 'heading':
        width = 78 - level * 4
        return [('heading', level, w) for w in textwrap.wrap(text, width=max(30, width))] or [('heading', level, '')]
    if kind == 'bullet':
        wraps = textwrap.wrap(text, width=90, subsequent_indent='  ')
        if wraps:
            wraps[0] = '• ' + wraps[0]
        return [('bullet', 0, w) for w in wraps] or [('bullet', 0, '•')]
    if kind == 'text':
        if not text:
            return [('blank', 0, '')]
        return [('text', 0, w) for w in textwrap.wrap(text, width=95)]
    if kind == 'rule':
        return [('blank',0,''),('rule',0,''),('blank',0,'')]
    return [('blank',0,'')]


def render_pdf(lines, outpath: Path):
    pages = []
    y = PAGE_H - MARGIN
    content = []

    def new_page():
        nonlocal y, content
        if content:
            pages.append('\n'.join(content))
        content = []
        y = PAGE_H - MARGIN

    for kind, level, text in lines:
        items = wrap_item(kind, level, text)
        for k, lv, tx in items:
            if y < MARGIN + LINE_H:
                new_page()
            if k == 'blank':
                y -= LINE_H
                continue
            if k == 'rule':
                content.append(f"{MARGIN} {y} m {PAGE_W-MARGIN} {y} l S")
                y -= LINE_H
                continue
            if k == 'heading':
                size = 16 if lv == 1 else 14 if lv == 2 else 12
                font = '/F2' if lv <= 2 else '/F1'
            else:
                size = FONT_SIZE
                font = '/F1'
            content.append('BT')
            content.append(f'{font} {size} Tf')
            content.append(f'1 0 0 1 {MARGIN} {y} Tm')
            content.append(f'({esc(tx)}) Tj')
            content.append('ET')
            y -= LINE_H + (2 if k == 'heading' else 0)

    if content:
        pages.append('\n'.join(content))

    objs = []
    def add_obj(data: bytes):
        objs.append(data)
        return len(objs)

    font1 = add_obj(b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
    font2 = add_obj(b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')

    content_ids = []
    page_ids = []
    total_pages = len(pages)
    for i, stream in enumerate(pages, 1):
        footer = f"BT\n/F1 9 Tf\n1 0 0 1 {PAGE_W-120} 25 Tm\n(Page {i}/{total_pages}) Tj\nET"
        s = (stream + '\n' + footer).encode('latin-1', 'replace')
        cid = add_obj(b'<< /Length ' + str(len(s)).encode() + b' >>\nstream\n' + s + b'\nendstream')
        content_ids.append(cid)
        page = (f'<< /Type /Page /Parent 0 0 R /MediaBox [0 0 {PAGE_W} {PAGE_H}] '
                f'/Resources << /Font << /F1 {font1} 0 R /F2 {font2} 0 R >> >> '
                f'/Contents {cid} 0 R >>').encode()
        pid = add_obj(page)
        page_ids.append(pid)

    kids = ' '.join(f'{pid} 0 R' for pid in page_ids)
    pages_obj = add_obj(f'<< /Type /Pages /Count {len(page_ids)} /Kids [{kids}] >>'.encode())

    # patch parent refs
    for pid in page_ids:
        objs[pid-1] = objs[pid-1].replace(b'/Parent 0 0 R', f'/Parent {pages_obj} 0 R'.encode())

    catalog = add_obj(f'<< /Type /Catalog /Pages {pages_obj} 0 R >>'.encode())

    out = bytearray(b'%PDF-1.4\n%\xe2\xe3\xcf\xd3\n')
    xref = [0]
    for i, obj in enumerate(objs, 1):
        xref.append(len(out))
        out += f'{i} 0 obj\n'.encode() + obj + b'\nendobj\n'
    xref_pos = len(out)
    out += f'xref\n0 {len(objs)+1}\n'.encode()
    out += b'0000000000 65535 f \n'
    for off in xref[1:]:
        out += f'{off:010d} 00000 n \n'.encode()
    out += (f'trailer\n<< /Size {len(objs)+1} /Root {catalog} 0 R >>\n'
            f'startxref\n{xref_pos}\n%%EOF\n').encode()
    outpath.write_bytes(out)


def make(md_file, pdf_file):
    txt = Path(md_file).read_text(encoding='utf-8')
    lines = md_to_lines(txt)
    render_pdf(lines, Path(pdf_file))


if __name__ == '__main__':
    make('synopsis_luka_v1.md', 'synopsis_luka_v1.pdf')
    make('synopsis_benjamin_v1.md', 'synopsis_benjamin_v1.pdf')
    print('Generated PDFs')
