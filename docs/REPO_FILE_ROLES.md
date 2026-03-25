# Repo File Roles

**Formål:** Gøre det entydigt for både mennesker og modeller, hvilke filer der er styrende for synopsis og eksamen, og hvilke der kun er støtte, reference eller personlige arbejdsfiler.

## 1. Primære filer

Disse filer er **autoritative** for videnskabsteori-synopsis og mundtligt forsvar. Hvis der er konflikt med andre filer, er det disse der gælder først.

1. `docs/VEJLEDER_FEEDBACK_SYNOPSIS.md`
2. `REGEL_OG_SKRIVEKOMPAS.md`
3. `AKADEMISK_RAMME.md`
4. `UDDANNELSE_OG_PENSUM.md`
5. `KVALITET_OG_SKRIVEGUIDE.md`
6. `CASE_KNOWLEDGE.md`
7. `docs/SYNOPSIS_START_HERE.md`

## 2. Sekundære filer

Disse filer bruges til uddybning, opslag og forberedelse, men de må ikke overtrumfe de primære filer.

- `docs/PENSUM_VIDENSBASE.md`
- `docs/CITATION_MAP.md`
- `docs/PENSUM_KILDEKORT_INDEX.md`
- `docs/PENSUM_KILDEKORT_*.md`
- `docs/VIDENSBASE_AFSNITSKORT.md`
- `teori_bibliotek/`
- `docs/CLAIMS_EVIDENCE_MATRIX.md`
- `docs/FORBUDTE_FORMULERINGER.md`
- `docs/FIGUR_REGISTER.md`

## 3. Agent-styringsfiler

Disse filer er primære for AI-arbejdsgange, men sekundære i forhold til selve synopsisindholdet.

- `.cursor/rules/bachelorgpt-core.mdc`
- `docs/AGENT_QUICKSTART.md`
- `docs/AGENT_PLAYBOOK.md`
- `teori_bibliotek/governance/AKADEMISK_KVALITETSRAMME.md`
- `teori_bibliotek/governance/BEGREBS_SKABELON.md`

## 4. Trænings- og øvelsesfiler

Disse filer må gerne bruges til repetition, quiz og eksamenstræning, men de er **ikke** primær sandhed.

- `videnskabsteori_arena/`
- `docs/10_HURTIGE_TRAENINGSLOG_LUKA.md`
- `NotebookLM_Kilder/`
- `Undervisernes daglige materiale/`

Hvis de siger noget andet end de primære filer, skal de rettes eller læses som sekundære.

## 5. Personlige eller skabelonprægede filer

Disse filer kan være meget nyttige, men de er ikke generel sandhed for hele repoet.

- `docs/SYNOPSIS_INDHOLDSFORTEGNELSE_LUKA.md`
- personlige træningslogs
- lokale eller afskærmede filer nævnt i statusdokumenter

## 6. Lokale eller afskærmede filer

Nogle filer nævnes i repoet som del af den fulde arbejdsopsætning, men er ikke nødvendigvis tilgængelige i den offentlige version. De må ikke bruges som aktiv sandhedskilde, medmindre de faktisk findes i workspace.

Eksempler:

- `Solutalent CODE CONTEXT/RESEARCH_PACKAGE.md`
- `Bachelor_Forberedelsesdokument.md`
- `report/06-conclusion.md`

## 7. Standardprioritet ved konflikt

Brug denne rækkefølge:

1. `docs/VEJLEDER_FEEDBACK_SYNOPSIS.md`
2. `REGEL_OG_SKRIVEKOMPAS.md`
3. `AKADEMISK_RAMME.md`
4. `UDDANNELSE_OG_PENSUM.md`
5. øvrige primære filer
6. sekundære filer
7. trænings- og referencefiler

## 8. Vedligeholdelsesregel

Når en ny synopsisrelevant fil oprettes, skal den straks klassificeres som:

- primær
- sekundær
- agent-styring
- træning
- personlig/reference

Hvis den ikke klassificeres, øger den risikoen for model-drift.
