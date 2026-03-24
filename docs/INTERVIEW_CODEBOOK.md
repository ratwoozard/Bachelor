# INTERVIEW_CODEBOOK

Formaal: Ensarte kodning af interviewdata med tydelige inklusions-/eksklusionsregler.

## Brug

- Bruges i analysefasen til at kode udsagn konsistent.
- Hver kode skal kunne kobles til teori og evidenskrav.

## Kodebog

| Kode | Definition | Inklusionsregel | Eksklusionsregel | Evidenseksempel | Teorikobling |
|---|---|---|---|---|---|
| `trust_in_ai` | Udsagn om tillid/mistillid til AI-score | Når informant vurderer AI som paalidelig/usikker | Rene faktaudsagn uden vurdering | "Vi tjekker altid selv, selv ved hoej score." | TOE (Organization), DSS |
| `manual_override_reason` | Begrundelse for manuel overstyring | Når informant beskriver hvorfor AI-forslag afvises | Beskrivelse af systemfunktion uden begrundelse | "Kunden passer ikke kulturmaessigt." | DSS, Lean (overprocessering) |
| `waiting_bottleneck` | Ventetid/koe i processen | Når tidsforsinkelser nævnes i et trin | Generel travlhed uden proceshenvisning | "Matches ligger ofte til naeste dag." | Lean (ventetid), Davenport |
| `quality_risk_control` | Kvalitetssikring via menneskelig kontrol | Når manuel kontrol beskrives som risikominimering | Uspecificeret "bedre kvalitet" uden mekanisme | "Vi vil undgå fejlmatch hos kunde." | DSS, TOE (Organization) |
| `data_quality_constraint` | Begrænsning i input/data | Når datakvalitet nævnes som hinder for automation | Klager uden kobling til data | "Profildata er ikke altid opdateret." | TOE (Technology) |
| `market_time_pressure` | Markeds- eller kundepres på hastighed | Når tempo/konkurrence driver beslutninger | Interne ressourceklager uden ekstern reference | "Vi mister opgaver hvis vi er for langsomme." | TOE (Environment), Davenport |
| `adoption_enabler` | Faktor der fremmer mere automation | Når informant nævner betingelser for tillid/adoption | Urealistiske ønsker uden implementeringsspor | "Hvis vi kan se historisk hit-rate, tør vi auto-godkende mere." | TOE, metodepluralisme |
| `adoption_barrier` | Faktor der hæmmer adoption | Når organisatorisk/teknisk/miljømæssig barriere nævnes | Engangstilfælde uden mønster | "Ansvar ligger hos os, ikke modellen." | TOE |

## Kodningsregler (bindende)

1. Kod kun meningsbaerende udsagn med tydelig kontekst.
2. Brug dobbeltkodning ved tvivl (maks 2 koder per udsagn).
3. Noter hvorfor en kode er valgt ved graensetilfaelde.
4. Marker modsigende udsagn eksplicit (bruges i triangulering).

## Kvalitetskontrol

- Hver kode boer forekomme i mindst 2 eksempler foer den bruges i hovedfund.
- Hovedfund boer trianguleres med artefakt eller KPI, hvor muligt.
- Bias-refleksion skal noteres ved fortolkning af tillid/effekt.

## Krydsreferencer

- `docs/CLAIMS_EVIDENCE_MATRIX.md`
- `docs/AGENT_PLAYBOOK.md`
- `teori_bibliotek/domain-okonomi-it/toe-framework/KONTEKST.md`
- `teori_bibliotek/domain-okonomi-it/dss-human-in-the-loop/KONTEKST.md`

Sidst opdateret: 2026-03-23
