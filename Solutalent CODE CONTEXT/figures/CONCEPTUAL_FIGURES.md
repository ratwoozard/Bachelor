# Konceptuelle figurer (K1–K4)

> **Status**: Alle figurer er eksplicit markeret som **"Konceptuel figur — egen tilvirkning"**.
> Teoretisk grundlag og litteraturhenvisninger er angivet under hver figur.
> Mermaid-koden kan renderes via GitHub, Mermaid Live Editor, eller LaTeX (mermaid-filter).

---

## K1 — DSR-cyklus tilpasset SoluTalent-projektet

**Konceptuel figur — egen tilvirkning**
**Teoretisk grundlag**: Peffers, K. et al. (2007) "A Design Science Research Methodology for Information Systems Research." *JMIS*, 24(3), 45–77; Hevner, A.R. et al. (2004) "Design Science in Information Systems Research." *MIS Quarterly*, 28(1), 75–105.

```mermaid
flowchart LR
    P1["<b>1. Problemidentifikation</b><br/><br/>B2B talent matching:<br/>ineffektiv, manuel,<br/>manglende kvalitetskontrol"]

    P2["<b>2. Målsætning</b><br/><br/>Funktionel, sikker,<br/>vedligeholdbar platform<br/>med AI-matchning"]

    P3["<b>3. Design & Udvikling</b><br/><br/>SoluTalent-artefakt:<br/>React + Supabase +<br/>OpenAI + E-conomic"]

    P4["<b>4. Demonstration</b><br/><br/>Fungerende platform<br/>40 edge functions<br/>585 RLS-policies<br/>249 migrationer"]

    P5["<b>5. Evaluering</b><br/><br/>Statisk kodeanalyse<br/>mod 4 kvalitetskriterier:<br/>funktionalitet, sikkerhed,<br/>vedligeholdbarhed,<br/>integrationskvalitet"]

    P6["<b>6. Kommunikation</b><br/><br/>Bachelorprojekt:<br/>teori, metode,<br/>artefaktbeskrivelse,<br/>analyse, diskussion"]

    P1 --> P2 --> P3 --> P4 --> P5 --> P6

    P5 -.->|"Iteration<br/>(Hevner et al., 2004)"| P3

    style P1 fill:#ffebee,stroke:#c62828
    style P2 fill:#fff3e0,stroke:#e65100
    style P3 fill:#e8f5e9,stroke:#2e7d32
    style P4 fill:#e3f2fd,stroke:#1565c0
    style P5 fill:#f3e5f5,stroke:#6a1b9a
    style P6 fill:#e0f2f1,stroke:#00695c
```

**Mapping til Peffers et al. (2007), figur 1**:

| DSR-fase (Peffers) | SoluTalent-kontekst | Evidens |
|---------------------|---------------------|---------|
| Problem identification | B2B talent matching med kvalitetssikring | Projektbeskrivelse |
| Define objectives | Platform der forbinder freelancere med virksomheder via AI | ADR'er, kravspecifikation |
| Design & development | Full-stack udvikling over 12+ måneder | 249 migrationer, 40 edge functions |
| Demonstration | Funktionel platform med alle kerneflows | Kodebase, live artefakt |
| Evaluation | Statisk kodeanalyse, security audit | `system-assessment.md`, `SECURITY_AUDIT_DEC2025.md` |
| Communication | Bachelorprojekt (dette dokument) | Afhandling |

---

## K2 — Platform-værdiskabelse (to-sidet marked)

**Konceptuel figur — egen tilvirkning**
**Teoretisk grundlag**: Parker, G.G. et al. (2016) *Platform Revolution*; Rochet, J.-C. & Tirole, J. (2003) "Platform Competition in Two-Sided Markets." *JEEA*, 1(4), 990–1029; Evans, D.S. & Schmalensee, R. (2016) *Matchmakers.*

```mermaid
flowchart TB
    subgraph Supply["Udbudsside (Freelancere)"]
        FL["Freelancere<br/><i>Profil, kompetencer,<br/>CV, tilgængelighed</i>"]
    end

    subgraph Platform["SoluTalent — Platformlag"]
        direction TB
        REG["Registrering &<br/>Profilberigelse"]
        AI["AI-matchning<br/>(Embedding + Regler)"]
        BID["Administreret Budgivning<br/>(ADR-005)"]
        CON["Kontraktsignering<br/>(Dual-signature, ADR-008)"]
        PAY["Betalingsflow<br/>(E-conomic, ADR-006)"]

        REG --> AI --> BID --> CON --> PAY
    end

    subgraph Demand["Efterspørgselsside (Virksomheder)"]
        CO["Virksomheder<br/><i>Projektbriefs,<br/>krav, budget</i>"]
    end

    FL -->|"Opret profil<br/>Upload CV"| REG
    CO -->|"Opret projekter<br/>Definer krav"| AI

    PAY -->|"Betaling for<br/>udført arbejde"| FL
    PAY -->|"Kvalificeret talent<br/>med kontrakt"| CO

    NE1["Direkte netværkseffekt:<br/>Flere freelancere →<br/>bedre matching"]
    NE2["Kryds-netværkseffekt:<br/>Flere virksomheder →<br/>flere muligheder<br/>(Parker et al., 2016)"]

    FL -.-> NE1
    CO -.-> NE2

    style Platform fill:#e3f2fd,stroke:#1565c0
    style Supply fill:#e8f5e9,stroke:#2e7d32
    style Demand fill:#fff3e0,stroke:#e65100
    style NE1 fill:#f5f5f5,stroke:#bdbdbd,stroke-dasharray: 5
    style NE2 fill:#f5f5f5,stroke:#bdbdbd,stroke-dasharray: 5
```

**Teoretiske begreber illustreret**:

| Begreb | Kilde | Manifestation i SoluTalent |
|--------|-------|---------------------------|
| To-sidet marked | Rochet & Tirole (2003) | Freelancere (udbud) + Virksomheder (efterspørgsel) |
| Kryds-netværkseffekt | Parker et al. (2016) | Flere freelancere gør platformen værdifuld for virksomheder og omvendt |
| Matching-platform | Evans & Schmalensee (2016) | AI-baseret matching som kernefunktion |
| Platform-governance | Parker et al. (2016) | Admin-medieret budgivning (ADR-005) sikrer kvalitetskontrol |
| Tillid & verifikation | Hagiu & Wright (2015) | Dual-signature kontrakter, profilverifikation |

---

## K3 — Evalueringsramme (succeskriterier → datakilder → evidenstyper)

**Konceptuel figur — egen tilvirkning**
**Teoretisk grundlag**: Hevner, A.R. et al. (2004) "Design Science in Information Systems Research." *MIS Quarterly*, 28(1), 75–105 — særligt evaluerings­sektionen; Gregor, S. & Hevner, A.R. (2013) "Positioning and Presenting Design Science Research for Maximum Impact." *MIS Quarterly*, 37(2), 337–355.

```mermaid
flowchart TB
    subgraph Criteria["Kvalitetskriterier<br/>(Hevner et al., 2004)"]
        C1["<b>Funktionalitet</b><br/>Dækker artefaktet<br/>de definerede krav?"]
        C2["<b>Sikkerhed</b><br/>Er data beskyttet<br/>og adgang kontrolleret?"]
        C3["<b>Vedligeholdbarhed</b><br/>Er koden organiseret,<br/>typet og dokumenteret?"]
        C4["<b>Integrationskvalitet</b><br/>Fungerer eksterne<br/>integrationer pålideligt?"]
    end

    subgraph Sources["Datakilder"]
        S1["Kodebaseanalyse<br/>(172 komp., 40 fn)"]
        S2["Security Audit<br/>(585 RLS, GDPR)"]
        S3["ADR'er (12 stk.) +<br/>Kodeorganisering"]
        S4["System Assessment<br/>(docs/system-assessment.md)"]
    end

    subgraph Evidence["Evidenstyper"]
        E1["Workflow-dækning<br/>Feature completeness<br/>Edge function-katalog"]
        E2["RLS-policy-tælling<br/>GDPR feature-map<br/>PII-ekskludering"]
        E3["TypeScript strict mode<br/>Komponentstruktur<br/>Hook-mønster"]
        E4["E-conomic sync-log<br/>OpenAI integration<br/>Fejlhåndtering"]
    end

    C1 --> S1 --> E1
    C2 --> S2 --> E2
    C3 --> S3 --> E3
    C4 --> S4 --> E4

    style Criteria fill:#f3e5f5,stroke:#6a1b9a
    style Sources fill:#e3f2fd,stroke:#1565c0
    style Evidence fill:#e8f5e9,stroke:#2e7d32
```

**Mapping til Hevner et al. (2004), tabel 2 — Design Evaluation Methods**:

| Evalueringsmetode (Hevner) | Anvendt i projektet | Begrænsning |
|---------------------------|---------------------|-------------|
| Observational — Case Study | Single-case studie af SoluTalent | Begrænset generaliserbarhed (Yin, 2018) |
| Analytical — Static Analysis | Kodegennemgang, komponent-tælling, pattern-analyse | Ingen runtime-data |
| Analytical — Architecture Analysis | ADR-gennemgang, module interaction-analyse | Dokumentation ≠ praksis |
| Testing — Structural | RLS-policy-verifikation, type-checking | Ikke udtømmende test-suite |

---

## K4 — Embedding-baseret matchning (konceptuel)

**Konceptuel figur — egen tilvirkning**
**Teoretisk grundlag**: Mikolov, T. et al. (2013) "Efficient Estimation of Word Representations in Vector Space." *arXiv:1301.3781*; OpenAI dokumentation for `text-embedding-3-small` (2024).

> **NB**: SoluTalent anvender OpenAI `text-embedding-3-small` (2024), ikke word2vec. Mikolov-referencen forklarer det konceptuelle grundlag for semantisk vektorrepræsentation. OpenAI's model er en videreudvikling af samme princip.

```mermaid
flowchart TB
    subgraph Input["Inputtekster"]
        FP["Freelancerprofil<br/><i>'Senior React developer<br/>med 8 års erfaring i<br/>TypeScript og cloud...'</i>"]
        JD["Jobbeskrivelse<br/><i>'Vi søger en erfaren<br/>frontend-udvikler med<br/>React og TypeScript...'</i>"]
    end

    subgraph Embedding["Embedding-generering (OpenAI)"]
        FP --> FE["text-embedding-3-small"]
        JD --> JE["text-embedding-3-small"]
        FE --> FV["Freelancer-vektor<br/>[0.023, -0.041, 0.087, ...]<br/>(1 536 dimensioner)"]
        JE --> JV["Job-vektor<br/>[0.019, -0.038, 0.091, ...]<br/>(1 536 dimensioner)"]
    end

    subgraph Similarity["Similaritetsberegning"]
        FV --> CS["Cosine Similarity<br/>(pgvector <=> operator)"]
        JV --> CS
        CS --> Score["Semantisk score<br/>cos(θ) ∈ [0, 1]"]
    end

    subgraph Concept["Konceptuel illustration"]
        direction TB
        VS["Højdimensionelt vektorrum"]
        P1["● React Senior Dev"]
        P2["● TypeScript Expert"]
        P3["○ Frontend job (React)"]
        P4["△ Data Science job"]
        VS --- P1
        VS --- P2
        VS --- P3
        VS --- P4
        Note1["Semantisk nære profiler<br/>og jobs klynges tæt<br/>i vektorrummet<br/>(Mikolov et al., 2013)"]
        VS -.-> Note1
    end

    Score --> Combined["Kombineres med<br/>regelbaseret score<br/>(se F2)"]

    style Input fill:#fff3e0,stroke:#e65100
    style Embedding fill:#e3f2fd,stroke:#1565c0
    style Similarity fill:#e8f5e9,stroke:#2e7d32
    style Concept fill:#f5f5f5,stroke:#bdbdbd,stroke-dasharray: 5
```

**Konceptuel forklaring**:

| Trin | Beskrivelse | Teknisk implementering i SoluTalent |
|------|-------------|--------------------------------------|
| 1. Tekstnormalisering | Profildata samles til én tekst uden PII | `generate-embeddings/index.ts` — "Normalized profile text (no PII)" |
| 2. Embedding-generering | Tekst → 1 536-dimensionel vektor | OpenAI `text-embedding-3-small` via Edge Function |
| 3. Vektorlagring | Vektorer gemmes i PostgreSQL | pgvector-extension, `freelancer_embeddings` / `job_embeddings` tabeller |
| 4. Similaritetssøgning | Cosine similarity mellem job- og freelancer-vektorer | pgvector `<=>` operator (1 – cosine distance) |
| 5. Score-kombination | Semantisk score (40 %) + regelbaseret (60 %) | `ai-match/index.ts` linje 78–87 (`DEFAULT_WEIGHTS`) |

**Relation til word2vec-konceptet (Mikolov et al., 2013)**:
- **Grundprincip**: Ord/tekster med lignende kontekst placeres tæt i vektorrummet
- **Udvidelse**: Moderne embedding-modeller (som OpenAI's) anvender transformer-arkitektur i stedet for word2vec's shallow neural networks
- **Fordel for matchning**: Semantisk lighed fanges automatisk — "React developer" og "frontend-udvikler" placeres tæt, selvom ordene er forskellige

---

*Genereret: 2026-02-09 — Alle konceptuelle figurer er markeret som "egen tilvirkning" med eksplicit kildehenvisning.*

