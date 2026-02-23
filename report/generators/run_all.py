# run_all.py – Kør alle rapportgeneratorer (WeasyPrint, ReportLab, FPDF2, python-docx).
# Kræver: pip install -r ../requirements-report.txt
import sys
from pathlib import Path

def main():
    base = Path(__file__).resolve().parent
    (base.parent / "generated").mkdir(exist_ok=True)

    runners = [
        ("WeasyPrint (Jinja2 → PDF)", "gen_weasyprint"),
        ("ReportLab (PDF)", "gen_reportlab"),
        ("FPDF2 (PDF)", "gen_fpdf2"),
        ("python-docx (Word)", "gen_docx"),
    ]
    failed = []
    for name, mod in runners:
        try:
            __import__(mod).main()
        except Exception as e:
            print(f"Fejl ved {name}: {e}", file=sys.stderr)
            failed.append(name)
    if failed:
        print(f"\nFejlede: {', '.join(failed)}. Se report/generators/README.md.", file=sys.stderr)
        if "WeasyPrint" in str(failed):
            print("WeasyPrint på Windows kræver ofte GTK – se README.", file=sys.stderr)
    else:
        print("\nAlle dokumenter genereret i report/generated/")

if __name__ == "__main__":
    main()
