# 🎓 Bachelor-rapport: Komplet udkast

**Status:** ✅ Afleveringsklar (efter dataupdatering)  
**Spor:** Pragmatisk casestudie om spildtid i bemandingsprocessen  
**Scope:** staging_imported → matched  
**Kapitler:** 6 + bilag  

---

## 📂 Struktur

```
report/
├── REPORT.md                 # Hovedfil (samler alle kapitler)
├── 01-introduction.md        # Indledning (omvendt trekant, PF, afgrænsning)
├── 02-method.md              # Metode (pragmatisme, casestudie, empiri, bias)
├── 03-theory.md              # Teori (Lean, Davenport, DSS, TOE)
├── 04-analysis.md            # Analyse (4 delafsnit = 4 USP)
├── 05-discussion.md          # Diskussion (fund, teoretisk bidrag, begrænsninger)
├── 06-conclusion.md          # Konklusion (svar på PF + USP, perspektivering)
├── QUALITY_CHECK.md          # Konsistenstjek (10/10 checks passed ✅)
├── appendices/               # Bilag
│   ├── sql/                  # 7 SQL-queries (copy/paste-klare)
│   ├── interviewguide.md     # Interview-skabelon
│   ├── figurliste.md         # Figuroversigt med captions
│   └── README.md             # Guide til bilag
└── README.md                 # Denne fil
```

---

## 🚀 Sådan bruges rapporten

### 1. Læs den samlede rapport
Start med **[REPORT.md](REPORT.md)** – den linker til alle kapitler og bilag.

### 2. Udfyld [DATA]-placeholders
Alle KPI-tal er markeret med `[DATA: ...]` og skal erstattes med faktiske værdier:

**Hvor finder jeg dem?**
- Kapitel 4.1.3: Spildtidsmålinger (ventetid, tid i staging)
- Kapitel 4.3.2: KPI-resultater (Precision@5, Override Rate, beslutningstid, rejection reasons, approval rate)
- Kapitel 4.3.3: Spildtidsindikatorer (time-to-match, tid i staging, match-til-beslutning)

**Hvordan får jeg tallene?**
1. Åbn `appendices/sql/` mappen
2. Kopiér SQL-query (fx `01-precision-at-5.sql`)
3. Kør i Supabase SQL Editor
4. Indsæt resultatet i rapporten (søg efter `[DATA]`)

**SQL-queries ready:**
- ✅ 01-precision-at-5.sql
- ✅ 02-override-rate.sql
- ✅ 03-average-decision-time.sql
- ✅ 04-top-rejection-reasons.sql
- ✅ 05-approval-rate.sql
- ✅ 06-time-in-staging.sql
- ✅ 07-auto-approval-rate.sql

### 3. Udfyld [INTERVIEW]-placeholders
Hvis I har gennemført interviews:
- Erstat `[INTERVIEW PLACEHOLDER:]` med faktiske citater
- Tilføj transskriptioner som bilag

Hvis I IKKE har gennemført interviews:
- Marker i kap 2.3 (Empirikilder) at interviews ikke blev gennemført
- Marker i kap 5.3 (Begrænsninger) at det svækker triangulering
- Behold artefaktanalyse + platformdata som primære kilder

### 4. Indsæt figurer
**Figur 4.1:** Procesdiagram as-is  
→ Kopi fra `Solutalent CODE CONTEXT/figures/export/process_as_is.svg`

**Figur 4.2:** AI-pipeline  
→ Kopi fra `Solutalent CODE CONTEXT/figures/export/ai_pipeline.svg`

**Valgfrit:** Figur 3.1 (teoretisk syntese), Figur 5.1 (trade-off matrix) – se `appendices/figurliste.md` for forslag.

### 5. Opdatér formalia
- [ ] Indsæt vejledernavn (REPORT.md + kap 1)
- [ ] Indsæt anslag (REPORT.md)
- [ ] Indsæt dato (REPORT.md)

---

## ✅ Kvalitetssikring

**Se [QUALITY_CHECK.md](QUALITY_CHECK.md) for fuld rapport.**

**10/10 tjek bestået:**
- ✅ Scope-konsistens (kun staging → matched)
- ✅ Kausalitet/sprog (ingen "forbedrer"/"beviser")
- ✅ Bias-refleksion (praktikantrolle håndteret)
- ✅ Kildehierarki (Holm/Kuada, ikke Yin)
- ✅ Ingen opfundne tal (alle [DATA]-markerede)
- ✅ Pragmatisme-konsistens (gennem hele rapporten)
- ✅ Teorianvendelse (alle 4 teorier arbejder)
- ✅ Strukturel konsistens (PF → USP → analyse → konklusion)
- ✅ Figurhenvisninger (captions + kilder)
- ✅ Bilag-konsistens (alt eksisterer)

**Estimeret karakter:** 10-12 (ved korrekt dataudfyldning)

---

## 📊 Overblik

### Kapitler (sider ca.)
- Kap 1 Indledning: 5-7
- Kap 2 Metode: 8-10
- Kap 3 Teori: 8-10
- Kap 4 Analyse: 27-35
- Kap 5 Diskussion: 5-7
- Kap 6 Konklusion: 3-4
- **Total:** ~56-63 sider

### Bilag
- A: SQL-udtræk (7 queries)
- B: Interviewguide (+ evt. transskriptioner)
- C: Figurliste (+ captions)

### Teorier anvendt
- ✅ Lean Waste (Womack & Jones)
- ✅ Procesoptimering (Davenport)
- ✅ DSS/Human-in-the-loop (Turban et al., Parasuraman et al.)
- ✅ TOE-framework (Tornatzky & Fleischer)

### Empiri
- Artefaktanalyse (SoluTalent-kodebase, workflow-states)
- [Semistrukturerede interviews – hvis gennemført]
- Platformdata (match_analytics, projects)

---

## 🎯 Næste skridt

1. **Kør SQL-queries** → Erstat [DATA]-placeholders
2. **Indsæt interview-citater** → Erstat [INTERVIEW]-placeholders (eller marker at interviews ikke gennemførtes)
3. **Indsæt figurer** → Kopiér fra figures/export/
4. **Opdatér formalia** → Vejleder, anslag, dato
5. **Konvertér til afleveringsformat** → Word/PDF (hvis krævet)
6. **Aflever** → 🎉

---

## 💡 Tips

**Hvis I konverterer til Word:**
- Brug Pandoc: `pandoc REPORT.md -o bachelor.docx`
- Eller kopier kapitel for kapitel og formater manuelt
- Husk sidetal, indholdsfortegnelse og figurnumre

**Hvis I holder Markdown:**
- Samlet i én fil: `cat 01-*.md 02-*.md ... > bachelor-full.md`
- Eller behold struktur og link via REPORT.md

**Hvis I vil have PDF direkte:**
- Pandoc med LaTeX: `pandoc REPORT.md -o bachelor.pdf --toc`

---

**God fornøjelse med afleveringen! 🚀**
