# 01. Baggrund og Afgrænsning (Slide 2 & 3)

## Human-in-the-loop Dilemmaet (Slide 2)
*   **Kernefortælling:** IT-konsulentbranchen er presset på to parametre: *Beslutningshastighed* (få kandidaten hurtigt afsted til kunden for at vinde opgaven) og *Kvalitet* (hvis man sender en forkert profil, mister man kunden).
*   **AI som beslutningsstøtte:** Support Solutions bruger AI til lynhurtigt at screene og finde den rigtige kandidat.
*   **Problemet:** Teknologien er hurtig, men organisationen tøver. Fordi konsekvenserne ved fejlmatch er så høje, tør ledere/projektledere ikke lade AI'en stå alene (auto-approval). De vil have et menneske ind over (Human-in-the-loop). 
*   **Resultatet:** Manuelle kontrol-loops skaber enorm ventetid, selvom man har en superhurtig AI. Dette gør det til et *organisatorisk* problem (governance/tillid), mere end et rent teknologisk problem.

## Afgrænsning og Scope (Slide 3)
*   **Hvorfor afgrænsning er vigtig:** Censor elsker at angribe, hvis man lover mere, end man kan holde. Du skal være benhård på, præcis *hvad* du måler på, og hvad du udelader.
*   **In Scope (Kvantitativ måling):** Du måler præcist fra "Staging Imported" (opgaven lander i systemet) via "Matching" og frem til "Matched" (kandidaten præsenteres for kunden). Dette giver rene, objektive system-timestamps.
*   **Out of Scope:** Alt *efter* godkendelsen – såsom kontraktforhandling, compliance, onboarding og fakturering. Vi kigger kun på *bemandingsbeslutningen*.
*   **Kvalitativt Scope:** De aktiviteter, der sker *før* opgaven bliver tastet ind i systemet (fx de skjulte processer og telefonopkald), måles ikke med tal (for der er ingen data), men de afdækkes i dine interviews.

**Eksamenstip:** Hvis censor spørger "Hvorfor har du ikke kigget på fakturering eller kundens endelige tilfredshed?", svarer du: 
*"For at sikre høj validitet i vores kvantitative data, var vi nødt til at afgrænse os til den del af processen, der rent faktisk afsætter uafbrudte, digitale spor i SoluTalent (fra t_1 til t_3). Hvis vi medtog de administrative og manuelle processer efterfølgende, ville vi blande æbler og pærer i vores spildtidsmåling."*