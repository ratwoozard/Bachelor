# FIGUR_REGISTER

Formaal: Samlet figurregister til agentbrug med status, teoriankre og brugsregel.

## Statuskoder

- `godkendt`: kan bruges direkte med kort figurtekst.
- `forsigtig`: kan bruges med tydelig caveat.
- `udelades`: bruges ikke.
- `manuel_review`: maa ikke bruges foer manuel slide-gennemgang.

## A) Ekstraherede figurer (`pptx_extract`)

| Figurpath | Status | Budskab | Teoriankre | Brugsregel |
|---|---|---|---|---|
| `pptx_extract/content/ppt/media/image10.png` | godkendt | Basic vs applied research | Saunders, Holm | Brug i metodeintro |
| `pptx_extract/content/ppt/media/image11.png` | godkendt | Planning -> execution | Kuada, Saunders | Brug i metodeflow |
| `pptx_extract/content/ppt/media/image14.png` | godkendt | Methodology levels | Holm, Saunders | Brug i kongruensargument |
| `pptx_extract/content/ppt/media/image20.png` | godkendt | Ontologi->metode lagdeling | Holm, Kuada (metode), Saunders | Brug i forsvar af design |
| `pptx_extract/content/ppt/media/image15.png` | forsigtig | Kuada bogcover | Kuada | Kun visuel reference, ikke teoribevis |
| `pptx_extract/content/ppt/media/image9.png` | udelades | Watermark/copyright | - | Bruges ikke |
| `pptx_extract/content/ppt/media/image24.png` | udelades | Teksttaet screenshot | - | Bruges ikke |
| `pptx_extract/content/ppt/media/image31.png` | udelades | Motivationsgrafik | - | Bruges ikke |

## B) Indlejrede figurer (`Bachelor underviser materiale`)

| Kildedokument | Status | Forventet emne | Regel |
|---|---|---|---|
| `Bachelor underviser materiale/Formulering af et Research Design 2026F.pptx` | manuel_review | Research design | Brug kun tekstudtraek indtil slides er ekstraheret |
| `Bachelor underviser materiale/PoS - Dag 3 - Positivismen v.06.pptx` | manuel_review | Positivisme | Kræver slideeksport |
| `Bachelor underviser materiale/PoS - Dag 6 - Hermeneutik.pptx` | manuel_review | Hermeneutik | Kræver slideeksport |
| `Bachelor underviser materiale/Kritisk Rationalisme 2026F.pptx` | manuel_review | Popper/falsifikation | Kræver slideeksport |
| `Bachelor underviser materiale/Socialkonstruktivisme 2026F.pptx` | manuel_review | Socialkonstruktivisme | Kræver slideeksport |

## C) Projekt-synopsis (Support Solutions / SoluTalent)

| Figurpath | Status | Budskab | Teoriankre | Brugsregel |
|---|---|---|---|---|
| `pptx_extract/content/ppt/media/image28.png` | godkendt | Research structure (pragmatisme, abduktion, case, tværsnit, multi-method, triangulering) | Holm, Kuada, Saunders, Rossman & Wilson | **Primær skabelon** fra undervisning; **tilpas** alle B&O-/eksempeltekster til Support Solutions / SoluTalent |
| `docs/figures/RESEARCH_STRUCTURE_SYNOPSIS.svg` | godkendt | PF → 4 vidensniveauer → empiri → triangulering → etik | Holm, Kuada, Saunders, Rossman & Wilson | Valgfri egen forenklet figur (SVG); tilpas labels; `docs/scripts/svg_to_png.py` kan generere PNG til Word-embed |

## Obligatorisk figurtekst under brug

Når en figur bruges i synopsis/rapport/forsvar, skriv:
1. Hvad figuren viser i denne case.
2. Hvilken paastand den understoetter.
3. Hvilken kilde der baerer paastanden.

## Krydsreferencer

- `docs/UNDERVISNINGSFIGURER_KONTEKST.md`
- `docs/UNDERVISNING_DAG_SLIDEFIGUR_EKSAMEN.md`
- `docs/AGENT_PLAYBOOK.md`

Sidst opdateret: 2026-03-24
