# Videnskabsteori-træner — Custom GPT opsætningsvejledning

## Hvad er dette?
En komplet pakke til en ChatGPT Custom GPT der træner dig sokratisk i videnskabsteori og research design — pensum for BA Business Economics and IT, KEA.

Botten kan:
- Stille flashcard-spørgsmål (Quick drill)
- Udforske ét emne i dybden sokratisk (Deep dive)
- Simulere mundtlig eksamen med karakter (Mock-eksamen)

---

## Trin-for-trin opsætning i ChatGPT

### 1. Opret Custom GPT
- Gå til [chat.openai.com](https://chat.openai.com) → klik dit navn (øverst til venstre) → **"My GPTs"** → **"Create a GPT"**
- Vælg **"Configure"**-fanen (ikke "Create"-fanen med chatbotten)

### 2. Navn og beskrivelse
- **Navn:** `Videnskabsteori-træner`
- **Beskrivelse:** `Sokratisk eksamenstræner i videnskabsteori og research design for BA Business Economics and IT. Kan drill, deep dive og mock-eksamen.`

### 3. Indsæt systemprompt (Instructions)
- Åbn filen `00_SYSTEM_PROMPT.md` i denne mappe
- Kopiér **hele indholdet** og indsæt i feltet **"Instructions"**
- Kontrolspørgsmål: instruktionen bør fylde ca. 2000–2500 tegn

### 4. Upload knowledge-filer
- Klik **"Upload files"** under **"Knowledge"**-sektionen
- Upload alle 20 filer: `01_INDEX_OG_NAVIGATION.md` til `20_CASE_OG_SYNOPSIS.md`
- Sørg for alle 20 er uploadet (ChatGPT tillader op til 20 filer)
- Aktivér **"Code Interpreter & Data Analysis"** er IKKE nødvendigt — slå den fra hvis den er til
- Aktivér **"Retrieval"** / "File Search" — det er nødvendigt for at botten kan slå op i knowledge-filerne

### 5. Conversation starters
Tilføj disse fire som conversation starters (de vises som knapper ved start):
```
Quick drill — stil mig ét spørgsmål
Deep dive — vælg et emne og udforsk det med mig
Mock-eksamen — kør mig igennem 5 eksamensspørgsmål
Forklar mig [skriv begreb] fra bunden
```

### 6. Gem og test
- Klik **"Save"** → vælg **"Only me"** (eller "Anyone with a link" hvis du vil dele med studiegruppe)
- Test med: "Quick drill — stil mig ét spørgsmål"
- Forventet adfærd: botten stiller ét spørgsmål og venter på dit svar uden at give svaret selv

---

## Filstruktur (20 filer)

| Fil | Type | Indhold |
|---|---|---|
| `00_SYSTEM_PROMPT.md` | Instructions | Persona, modes, regler |
| `01_INDEX_OG_NAVIGATION.md` | Knowledge | Filkort og retrieval-guide |
| `02_PENSUM_KILDEOVERSIGT.md` | Knowledge | Kildernes roller og grænser |
| `03_ONTOLOGI.md` | Knowledge | Ontologiske positioner |
| `04_EPISTEMOLOGI.md` | Knowledge | Epistemologiske positioner |
| `05_HERMENEUTIK_OG_FORFORSTAAELSE.md` | Knowledge | Hermeneutisk cirkel, forforståelse |
| `06_METODOLOGI_OG_PRAGMATISME.md` | Knowledge | Rossman & Wilson (1984), tre positioner |
| `07_SLUTNINGSFORMER.md` | Knowledge | Induktion, deduktion, abduktion |
| `08_FORSKNINGSDESIGN_KONGRUENS.md` | Knowledge | Fire vidensniveauer, research onion |
| `09_CASE_STUDIE.md` | Knowledge | Single-case, analytisk generalisering |
| `10_TIDSHORISONT.md` | Knowledge | Tværsnit vs. longitudinal |
| `11_MIXED_METHODS_TRIANGULERING.md` | Knowledge | Sekventielle designs, trianguleringstyper |
| `12_SAMPLING_OG_EMPIRI.md` | Knowledge | Purposive sampling, semistruktureret interview |
| `13_KVALITETSKRITERIER_KVALITATIV.md` | Knowledge | Lincoln & Guba via Kuada |
| `14_KVALITETSKRITERIER_KVANTITATIV.md` | Knowledge | Reliabilitet, validitet, begrebsvaliditet |
| `15_GENERALISERING.md` | Knowledge | Analytisk vs. statistisk generalisering |
| `16_AKSIOLOGI_ETIK_INSIDER.md` | Knowledge | Aksiologi, etik, insider-position og bias |
| `17_JENS_PRECEDENCE_REGLER.md` | Knowledge | Vejleders strukturkrav og præcedensregler |
| `18_EKSAMENS_DRILL_SPORGSMAAL.md` | Knowledge | 32 spørgsmål med modelbesvarelser |
| `19_FALDGRUBER_OG_ANTIPATTERNS.md` | Knowledge | 15 typiske fejl med korrektioner |
| `20_CASE_OG_SYNOPSIS.md` | Knowledge | Lukas konkrete case: Support Solutions, SoluTalent, KPI/KQI, designvalg, svage punkter |

---

## Pensum botten kender
- Beck Holm, A. (2023). *Videnskab i virkeligheden* (3. udg.). Samfundslitteratur.
- Kuada, J. (2012). *Research Methodology*. Samfundslitteratur.
- Saunders, M. N. K., Lewis, P. & Thornhill, A. (2023). *Research Methods for Business Students* (9. udg.). Pearson.
- Rossman, G. B. & Wilson, B. L. (1984). Numbers and Words. *Evaluation Review, 9*(5), 627–643.

Botten citerer **ingen andre forfattere** som pensum.

---

## Fejlfinding

**Botten giver svar direkte uden at spørge først:**
Tjek at "Instructions" indeholder reglen "Stil altid spørgsmål FØR du giver svar."

**Botten nævner Creswell, Yin eller Denzin:**
Tjek at `02_PENSUM_KILDEOVERSIGT.md` og `01_INDEX_OG_NAVIGATION.md` er uploadet korrekt.

**Botten kan ikke huske hvad der er sagt tidligere i sessionen:**
Normalt — Custom GPT har kontekstvindue som al anden ChatGPT. Start ny session for frisk drill.

**Retrieval virker ikke (botten hallucinerer):**
Sørg for at "File Search" er aktiveret i GPT-indstillingerne.
