# Bilag til Bachelor-rapport

Dette appendices-bibliotek indeholder alt supplerende materiale til rapporten.

---

## 📁 Struktur

```
appendices/
├── sql/                      # SQL-udtræk (copy/paste-klare queries)
│   ├── 01-precision-at-5.sql
│   ├── 02-override-rate.sql
│   ├── 03-average-decision-time.sql
│   ├── 04-top-rejection-reasons.sql
│   ├── 05-approval-rate.sql
│   ├── 06-time-in-staging.sql
│   └── 07-auto-approval-rate.sql
├── interviewguide.md          # Semistruktureret interviewguide (skabelon)
├── figurliste.md              # Oversigt over alle figurer med captions og kilder
└── README.md                  # Denne fil
```

---

## 🔢 SQL-udtræk (KPI-data)

**Formål:** Copy/paste-klare queries til at hente KPI-data fra Supabase  
**Brug:** Åbn filen, kopier SQL-koden, kør i Supabase SQL Editor, indsæt resultatet i rapport

| Fil | Måling | Anvendes i rapport |
|-----|--------|-------------------|
| `01-precision-at-5.sql` | Precision@5 (andel top-5 matches godkendt) | Kap. 4.3.2 |
| `02-override-rate.sql` | Override rate (høj-score matches afvist) | Kap. 4.3.2, 5.2 |
| `03-average-decision-time.sql` | Gns. tid match → beslutning | Kap. 4.1.3, 4.3.2 |
| `04-top-rejection-reasons.sql` | Frekvens af rejection_reason | Kap. 4.3.2 |
| `05-approval-rate.sql` | Approval/rejection rate | Kap. 4.3.2 |
| `06-time-in-staging.sql` | Tid jobs tilbringer i staging | Kap. 4.1.3 |
| `07-auto-approval-rate.sql` | Andel jobs auto-godkendt (trin 3) | Kap. 4.1.3 |

**Tidsperiode:** Alle queries er scope'd til seneste 30 dage (justerbart i WHERE-clause).

**OBS:** Alle [DATA]-placeholders i rapporten skal erstattes med faktiske tal fra disse queries.

---

## 🎤 Interviewguide

**Fil:** `interviewguide.md`  
**Formål:** Skabelon til semistrukturerede interviews med Support Solutions-nøglepersoner  
**Struktur:**
- Del 1: Baggrund (rolle, erfaring)
- Del 2: Nuværende praksis og spildtid (USP 1)
- Del 3: SoluTalents rolle (USP 2)
- Del 4: Grænsen for automatisering (USP 3)
- Del 5: Forudsætninger (USP 4, TOE)
- Del 6: Afrunding

**Brug:**
1. Tilpas spørgsmål til informantens rolle (direktør vs. projektleder)
2. Print eller hav åben under interview
3. Optag interview (med samtykke)
4. Transskribér inden for 48 timer
5. Send transskription til informant for validering

**Status:** [TODO: Angiv om interviews er gennemført. Hvis ja, vedlæg transskriptioner som separate filer.]

---

## 🖼️ Figurliste

**Fil:** `figurliste.md`  
**Formål:** Oversigt over alle figurer anvendt i rapporten med kilder, captions og placering  
**Indhold:**
- Figur 4.1: Procesdiagram as-is (8-trins workflow)
- Figur 4.2: AI-matchingpipeline (hybrid scoring)
- Forslag til yderligere figurer (teoretisk syntese, trade-off matrix)
- Reference til eksisterende figurer i `Solutalent CODE CONTEXT/figures/export/`

**Brug:**
- Kopiér figur-captions direkte ind i rapport
- Link til kildefiler (`Solutalent CODE CONTEXT/figures/export/*.svg`)
- Eksportér SVG til PNG hvis nødvendigt for Word/PDF

---

## 📋 Anbefalinger til brug

### Før rapport skrives færdig:
1. **Kør alle SQL-queries** og erstat [DATA]-placeholders i rapport
2. **Gennemfør interviews** (hvis planlagt) og vedlæg transskriptioner
3. **Indsæt figurer** fra `figurliste.md` i relevante kapitler

### Ved aflevering:
- Verificér at alle bilag er nævnt i rapportens hovedtekst
- Nummerér bilag korrekt (Bilag A: SQL-udtræk, Bilag B: Interviewguide, etc.)
- Hvis Word/PDF: Konvertér Markdown til Word-kompatibelt format

---

## ⚠️ VIGTIGE NOTER

**Ingen opfundne tal:**
- Alle KPI-værdier markeret med [DATA] SKAL erstattes med faktiske queries
- Hvis data ikke er tilgængeligt, skriv eksplicit "[DATA IKKE TILGÆNGELIG]" og brug interview/kvalitativ vurdering

**Interview-afhængighed:**
- Dele af analysen (særligt USP 1, 3, 4) er stærkere med interview-empiri
- Hvis interviews ikke gennemføres, skal dette nævnes i metodens begrænsninger (afsnit 2.3)

**Figur-kvalitet:**
- SVG-filer fra `figures/export/` kan indsættes direkte i web-baseret rapport
- Hvis I afleverer Word/PDF: Eksportér SVG til PNG (300 DPI minimum for print-kvalitet)
