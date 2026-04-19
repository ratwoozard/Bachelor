# Interview 2 - Informant 2 (Teknisk ansvarlig)

## Metadata

- Rolle: Informant 2 (Teknisk ansvarlig)
- Formål: Teknisk-operativ forklaring af flaskehalse og manuelle gates
- Format: Semistruktureret interview
- Status: Faktisk transskript

## Centrale sætninger og viden

- `Q1`: "Som prioriteringssignal. Den er ikke en automatisk beslutning."  
  Understøtter, at AI-scoren fungerer som beslutningsstøtte og ikke som fuld automatisering.
- `Q3`: "Vi kan se hvad der sker, men ikke altid hvorfor uden interviewdata."  
  Begrundelse for, at systemudtræk ikke kan stå alene, og at interviewsporet er nødvendigt.
- `Q4`: "Trin med manuel databerigelse og tværfaglig afklaring. Der opstår kø, når få personer skal validere mange sager."  
  Peger på konkrete flaskehalse og ventetid i procesforløbet.
- `Q6`: "Tid i state, override-rate, antal loops og rejection reasons fordelt på kategori."  
  Giver tydelige eksempler på relevante målepunkter i det kvantitative spor.
- `Q8`: "Nogle stoler mere på scoren og arbejder hurtigere. Andre laver flere manuelle kontrolrunder."  
  Viser variation i praksis og forskelle i tillid og arbejdsvaner.
- `Q9`: "Governance og arbejdsvaner er lige så vigtige som modelkvalitet."  
  Understøtter, at teknologi alene ikke kan forklare eller løse problemet.
- `Q11`: "Som signal om, at vi skal undersøge praksis nærmere. Ikke som tegn på at den ene kilde er 'forkert'."  
  Understøtter triangulering som analytisk redskab frem for simpel validering.

## Interview

### Q1. Hvordan fungerer AI-scoren i praksis?

Interviewer: Hvordan fungerer AI-scoren i praksis?  
Informant 2 (Teknisk ansvarlig): Som prioriteringssignal. Den er ikke en automatisk beslutning. Medarbejderen vurderer stadig kontekst og kundehensyn.

### Q2. Hvad udløser oftest overrides?

Interviewer: Hvad udløser oftest overrides?  
Informant 2 (Teknisk ansvarlig): Lav confidence i enrichment, manglende domænekontekst eller uklare krav i opgaven.

### Q3. Er loggingen god nok til analyse?

Interviewer: Er loggingen god nok til analyse?  
Informant 2 (Teknisk ansvarlig): Til mønstre ja. Til fuld kausal forklaring ikke altid. Vi kan se hvad der sker, men ikke altid hvorfor uden interviewdata.

### Q4. Hvilke trin giver typisk længst beslutningstid?

Interviewer: Hvilke trin giver typisk længst beslutningstid?  
Informant 2 (Teknisk ansvarlig): Trin med manuel databerigelse og tværfaglig afklaring. Der opstår kø, når få personer skal validere mange sager.

### Q5. Hvorfor er gates sat konservativt?

Interviewer: Hvorfor er gates sat konservativt?  
Informant 2 (Teknisk ansvarlig): For at undgå fejl i produktion. Vi optimerer gradvist, ikke aggressivt.

### Q6. Hvilke KPI'er er mest nyttige for dig?

Interviewer: Hvilke KPI'er er mest nyttige for dig?  
Informant 2 (Teknisk ansvarlig): Tid i state, override-rate, antal loops og rejection reasons fordelt på kategori.

### Q7. Hvad mangler for at hæve auto-approval?

Interviewer: Hvad mangler for at hæve auto-approval?  
Informant 2 (Teknisk ansvarlig): Mere stabil precision i topsegmentet og ensartet brugeradfærd i vurderingskriterier.

### Q8. Ser du forskel på teams?

Interviewer: Ser du forskel på teams?  
Informant 2 (Teknisk ansvarlig): Ja, tydeligt. Nogle stoler mere på scoren og arbejder hurtigere. Andre laver flere manuelle kontrolrunder.

### Q9. Kan teknologi alene løse problemet?

Interviewer: Kan teknologi alene løse problemet?  
Informant 2 (Teknisk ansvarlig): Nej. Governance og arbejdsvaner er lige så vigtige som modelkvalitet.

### Q10. Hvilken risiko ser du ved for hurtig automation?

Interviewer: Hvilken risiko ser du ved for hurtig automation?  
Informant 2 (Teknisk ansvarlig): At vi skalerer fejlmønstre. Hvis data eller kriterier er skæve, bliver fejl bare hurtigere.

### Q11. Hvordan bruger I afvigelser mellem data og oplevelse?

Interviewer: Hvordan bruger I afvigelser mellem data og oplevelse?  
Informant 2 (Teknisk ansvarlig): Som signal om, at vi skal undersøge praksis nærmere. Ikke som tegn på at den ene kilde er "forkert".
