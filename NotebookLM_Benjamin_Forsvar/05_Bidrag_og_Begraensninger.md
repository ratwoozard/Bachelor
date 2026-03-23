# 05. Bidrag og Begrænsninger (Slide 7)

Det sidste slide runder projektet af med en skarp vurdering af, hvad vi *kan* sige, og hvad vi *ikke kan* sige. Censorer elsker studerende, der kender deres egne begrænsninger.

## Projektets Bidrag (Output)
1.  **Prioriterede Flaskehalse:** Et konkret, praksisnært overblik over, *hvor* spildtiden (ventetid/overprocessering i Lean forstand) opstår.
2.  **Automatiserings-betingelser:** Vi identificerer (gennem TOE-frameworket) de *forudsætninger* (organisatorisk tillid, datakvalitet, ansvarsplacering), der skal være på plads for, at Support Solutions kan hæve auto-approval raten uden at miste kvalitet.
*   **Pointen:** Som en sand pragmatiker har du leveret *anvendelig* viden, der løser et praktisk problem i organisationen.

## Begrænsninger og Risici

### 1. Generaliserbarhed (Single-Case Studie)
*   *Begrænsning:* Vi undersøger kun ét system i ét mellemstort konsulenthus. Vi kan ikke *statistisk* konkludere noget om hele IT-branchen.
*   *Styrken i svagheden:* Vi benytter **Analytisk Generaliserbarhed** (Holm, 2023). Vores fund (fx at tillidsbarrieren i organisationen er en større bremseklods for AI-adoption end selve teknologien) bidrager til *teorien* (fx TOE-frameworket). Vores case demonstrerer, at spildtid i høj grad skyldes "Human-in-the-loop" dilemmaet, hvilket kan generaliseres *teoretisk* til andre virksomheder med lignende setup.

### 2. Construct Validity og Proxy-måling (Metodisk Risiko)
*   *Begrænsning:* Vi kan ikke bogstaveligt talt måle "ubehag" eller "ineffektivitet" direkte i en database.
*   *Proxy-måling:* I stedet måler vi det *indirekte* gennem proxyer (indikatorer). Vi kigger på "tid i state" (hvor længe ligger den i en bunke) og "antal manuelle loops". Det er systemets fodspor.
*   *Forsvaret:* "Selvom vi kun måler stedfortrædende data for spildtid, gør vores kombination (Sequential Explanatory Design) med de kvalitative interviews, at vi med høj troværdighed kan knytte systemets timestamps til informanternes oplevelse af ineffektivitet og manglende tillid."