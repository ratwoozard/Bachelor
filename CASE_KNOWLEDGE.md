# Case Knowledge

**Formål:** Minimal, offentlig referencefil for case-scope og nøglekontekst. Filen findes for at forhindre drift i repoet, hvor mange andre filer allerede henviser til `CASE_KNOWLEDGE.md`.

**Vigtigt:** Dette er en **kompakt referencefil**, ikke den fulde lokale casepakke. Hvor der mangler detaljer, henvises der videre til de autoritative filer nedenfor.

## Autoritative kilder for case og synopsis

1. `docs/VEJLEDER_FEEDBACK_SYNOPSIS.md`
2. `REGEL_OG_SKRIVEKOMPAS.md`
3. `AKADEMISK_RAMME.md`
4. `UDDANNELSE_OG_PENSUM.md`

## Scope

- **Proces:** Fra modtaget opgave til klientindstillet konsulent
- **Teknisk mapping:** Dette svarer funktionelt til SoluTalent-scope `staging_imported` → `matched`
- **Uden for scope:** Jobsourcing, kontrakt, fakturering, onboarding og øvrig post-match administration
- **Platform:** Kun SoluTalent
- **Teknisk niveau:** Funktionel analyse, ikke ML-udvikling eller kodekvalitetsvurdering

## Casekontekst

- **Organisation:** Support Solutions ApS
- **Analysefokus:** Matching/bemanding som organisatorisk delmængde
- **Analytiske fokusområder:** SoluTalent-platformen og bemandingsprocessen
- **Præmis:** Pre-go-live eller begrænset live-evidens betyder, at KPI'er ofte behandles som måleplan eller loggingkrav frem for endelig driftseffekt

## Workflow-note

Repoet henviser flere steder til et 8-trins workflow i SoluTalent. I synopsis og eksamensnær skrivning bør dette kun bruges som **støttekontekst**, ikke som hoveddefinition af embedded case eller som erstatning for den læsbare procesafgrænsning.

## Informanter og empiri

- Brug `AKADEMISK_RAMME.md` som primær reference for interviewdesign, sampling og empirikilder
- Brug `docs/VEJLEDER_FEEDBACK_SYNOPSIS.md` for synopsisnære krav til triangulering, informantvalidering og etik

## Brug denne fil til

- hurtig afklaring af case-scope
- fælles terminologi på tværs af repoet
- at undgå at modeller hallucinerer en manglende casefil

## Brug ikke denne fil til

- at udlede nye performance-påstande
- at definere pragmatismestrategi eller embedded case alene
- at erstatte de autoritative synopsisfiler
