# Bilag: Figurliste og figurhenvisninger

Dette bilag samler alle figurer anvendt i rapporten med kilde, caption og placering.

---

## Figur 4.1: Procesdiagram as-is (8-trins workflow)

**Kilde:** `Solutalent CODE CONTEXT/figures/export/process_as_is.svg`  
**Anvendes i:** Kapitel 4.1.1 (As-is proceskortlægning)  
**Caption:**
> Figur 4.1: Bemandingsprocessen i SoluTalent (as-is) med otte sekventielle trin fra job import til konsulentallokering. Trin markeret med ★ (4, 6, 7) er manuelle flaskehalse hvor spildtid akkumuleres. Baseret på artefaktanalyse af workflow-states og datamodel (2025-2026).

**Beskrivelse:**
Diagrammet viser:
- **Grønne bokse:** Automatiserede trin (1, 2, 3, 5)
- **Røde bokse:** Manuelle trin (4, 6, 7)
- **Gule bokse:** Delvist manuelle trin (8)
- **Pile:** Dataflow og transitions mellem trin

---

## Figur 4.2: AI-matchingpipeline (6 stages)

**Kilde:** `Solutalent CODE CONTEXT/figures/export/ai_pipeline.svg`  
**Anvendes i:** Kapitel 4.2.2 (AI-matchingpipeline – Hybrid tilgang)  
**Caption:**
> Figur 4.2: SoluTalents AI-matchingpipeline med seks sekventielle stages fra input (freelancer-profiler, job-krav) til output (ranked matches med scores og forklaringer). Hybrid scoring kombinerer 40% semantisk similaritet (embeddings) og 60% regelbaseret evaluering (skills, erfaring, kategori, lokation, senioritet). Baseret på kodeanalyse af `supabase/functions/ai-match/index.ts`.

**Beskrivelse:**
Pipelinen viser:
1. **PREFILTER:** Semantisk søgning + skill-overlap → ~50 kandidater
2. **LOCATION:** Lokationskompatibilitet (remote/on-site)
3. **GATE:** Domænebaserede filtre
4. **AI SCORING:** GPT-4o-mini evaluering (fallback: regelbaseret)
5. **RANKING:** Score ≥55, sorteret faldende, top 20
6. **PERSIST:** Gem i `match_requests` + `match_results` med forklaringer

---

## Figur 3.1 (foreslået): Teoretisk syntese-framework

**Kilde:** Konceptuel figur (kan laves i Mermaid eller tegnes)  
**Anvendes i:** Kapitel 3.5 (Teoriernes samspil)  
**Caption:**
> Figur 3.1: Konceptuel model der viser hvordan projektets fire teorier (Lean, Davenport, DSS, TOE) komplementerer hinanden i analysen. Lean klassificerer spildtid, Davenport strukturerer as-is/to-be, DSS forklarer human-in-the-loop, og TOE analyserer forudsætninger for yderligere automatisering.

**Foreslået indhold (Mermaid pseudokode):**
```
flowchart TD
    Input[Jobs + Freelancere] --> Process[AI-matching DSS]
    Process --> HITL[Admin Review Human-in-the-Loop]
    HITL --> Output[Matches]
    
    Process -.-> Spild[Spildtid: Lean waste]
    HITL -.-> Forudsætninger[TOE: T, O, E]
    
    Spild --> AsIs[As-is/to-be Davenport]
    Forudsætninger --> AsIs
```

---

## Figur 5.1 (foreslået): Trade-off matrix

**Kilde:** Tabel/matrix baseret på afsnit 5.4  
**Anvendes i:** Kapitel 5 (Diskussion, trade-offs)  
**Caption:**
> Figur 5.1: Trade-off mellem automatisering (effektivitet), menneskelig kontrol (kvalitet) og tillid. SoluTalents human-in-the-loop design (niveau 5-6) balancerer disse dimensioner ved at acceptere noget spildtid (ventetid i review) for at bevare kvalitetskontrol og tillid.

**Foreslået indhold:**
Matrix med tre scenarier (fuld manual, HITL, fuld automation) evalueret på effektivitet, kvalitet, tillid, skalerbarhed.

---

## Yderligere figurer fra Solutalent CODE CONTEXT

Følgende figurer findes i repo og kan indsættes efter behov:

### C4-diagrammer (arkitektur)
- **C4 Context:** `figures/export/c4_context.svg` – SoluTalent-platformen, brugerroller (Freelancer, Admin, Virksomhed) og eksterne services
- **C4 Container:** `figures/export/c4_container.svg` – Deployable units (React SPA, Supabase Auth/DB/Realtime/Edge Functions)
- **C4 Component:** `figures/export/c4_component.svg` – Komponentniveau (frontend-lag, edge functions, database)

**Anvendelse:** Kan bruges i artefaktbeskrivelse hvis teknisk arkitektur skal uddybes.

### Framework-diagram
- **Framework:** `figures/export/framework.svg` – Konceptuel framework for beslutningsstøtte (input → AI/DSS → human review → outcomes)

**Anvendelse:** Kan bruges i teorikapitlet som konceptuel model.

### ER-diagrammer (datamodel)
- **ER (light):** `figures/export/er_diagram.svg` – Forenklet ER med centrale tabeller
- **ER (full):** `figures/export/er_full.svg` – Komplet ER med alle relationer

**Anvendelse:** Kan bruges i artefaktbeskrivelse eller metode (datakilder).

---

## Anbefalinger til figurindsættelse

1. **Kapitel 4.1:** Indsæt Figur 4.1 (process_as_is.svg) for at visualisere 8-trins workflow
2. **Kapitel 4.2:** Indsæt Figur 4.2 (ai_pipeline.svg) for at forklare hybrid matching
3. **Kapitel 3.5:** Overvej at tegne Figur 3.1 (teoretisk syntese) i Mermaid
4. **Kapitel 5:** Overvej at lave Figur 5.1 (trade-off matrix) som tabel

**Format:**
- Eksportér SVG til PNG hvis Word/PDF-konvertering kræver det
- Hold figurer enkle og læsbare (undgå information overload)
- Alle figurer skal have:
  - Nummer (Figur X.Y)
  - Caption med forklaring
  - Kilde-reference (artefakt, teori eller egen tilvirkning)
