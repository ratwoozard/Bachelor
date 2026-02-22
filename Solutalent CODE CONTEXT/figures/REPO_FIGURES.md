# Repo-afledte figurer (F1–F13)

> **Kilde**: Alle diagrammer er direkte afledt af SoluTalent-kodebasen.
> Filstier til primærkilde er angivet under hver figur.
> Mermaid-koden kan renderes via GitHub, Mermaid Live Editor, eller LaTeX (mermaid-filter).

---

## F1 — Overordnet systemarkitektur (3-lags)

**Kilde**: `docs/MODULE_INTERACTIONS.md` linje 9–31

```mermaid
graph TB
    subgraph Frontend["Frontend Layer — React 18 + TypeScript"]
        direction LR
        Pages["Pages<br/>(65 route-components)"]
        Components["Components<br/>(172 feature-components)"]
        Hooks["Custom Hooks<br/>(22 useQuery · 41 useMutation)"]
        Services["Services"]
        Client["Supabase Client"]
        Pages --> Components --> Hooks --> Services --> Client
    end

    subgraph Supabase["Supabase Platform"]
        direction LR
        Auth["Auth<br/>(JWT + cookie fallback)"]
        DB["PostgreSQL<br/>(585 RLS policies)"]
        RT["Realtime<br/>(WebSocket)"]
        EF["Edge Functions<br/>(40 Deno functions)"]
    end

    subgraph External["External Services"]
        direction LR
        OpenAI["OpenAI API<br/>(Embeddings + GPT)"]
        Economic["E-conomic API<br/>(Invoicing)"]
        Resend["Resend<br/>(Transactional Email)"]
        GA["Analytics<br/>(GA)"]
    end

    Client -->|"REST / Realtime"| Auth
    Client -->|"PostgREST"| DB
    Client -->|"WebSocket"| RT
    Client -->|"HTTPS"| EF
    EF -->|"REST"| OpenAI
    EF -->|"REST"| Economic
    EF -->|"REST"| Resend

    style Frontend fill:#e8f5e9,stroke:#2e7d32
    style Supabase fill:#e3f2fd,stroke:#1565c0
    style External fill:#fff3e0,stroke:#e65100
```

---

## F2 — AI-matchningspipeline (hybrid scoring)

**Kilder**:
- `supabase/functions/ai-match/index.ts` linje 78–112 (vægte, proficiency, recency)
- `supabase/functions/generate-embeddings/index.ts` linje 151 (`text-embedding-3-small`)
- `docs/MODULE_INTERACTIONS.md` linje 170–211

```mermaid
flowchart TB
    A["Job oprettet/opdateret"] --> B["generate-embeddings<br/>Edge Function"]
    B --> C["OpenAI API<br/><i>text-embedding-3-small</i><br/>(1 536 dimensioner)"]
    C --> D["Store i job_embeddings<br/>(pgvector)"]
    D --> E["ai-match<br/>Edge Function"]

    E --> F["Semantisk Score<br/><b>Vægt: 40 %</b>"]
    E --> G["Regelbaseret Score<br/><b>Vægt: 60 %</b>"]

    F --> H["Cosine Similarity<br/>(pgvector <=> operator)"]

    G --> I["Skills Match — 25 %<br/>× proficiency multiplier<br/>× recency multiplier"]
    G --> J["Experience Match — 15 %"]
    G --> K["Category Match — 10 %"]
    G --> L["Location Match — 5 %"]
    G --> M["Seniority Match — 5 %"]

    H --> N["Kombineret Score<br/>(0–100)"]
    I --> N
    J --> N
    K --> N
    L --> N
    M --> N

    N --> O["match_results INSERT"]
    O --> P["match-notifications<br/>(Resend e-mail)"]

    subgraph Proficiency["Proficiency Multipliers (linje 89–95)"]
        direction LR
        PM1["expert → 1.0"]
        PM2["advanced → 0.8"]
        PM3["intermediate → 0.6"]
        PM4["beginner → 0.4"]
    end

    subgraph Recency["Recency Multipliers (linje 101–112)"]
        direction LR
        RM1["≤ 6 mdr → 1.0"]
        RM2["≤ 24 mdr → 0.85"]
        RM3["≤ 60 mdr → 0.6"]
        RM4["> 60 mdr → 0.4"]
    end

    I -.-> Proficiency
    I -.-> Recency

    style F fill:#e3f2fd,stroke:#1565c0
    style G fill:#fff3e0,stroke:#e65100
```

---

## F3 — Bidding-workflow (tilstandsmaskine)

**Kilder**:
- `docs/flows/FLOW_BIDDING.md` linje 12–61
- `docs/ARCHITECTURE_DECISIONS.md` ADR-005 (Admin-Mediated Bidding)

```mermaid
stateDiagram-v2
    [*] --> submitted : Freelancer submitter bid

    submitted --> accepted : Admin accepterer
    submitted --> rejected : Admin afviser
    submitted --> pending_freelancer_response : Admin modtilbud
    submitted --> withdrawn : Freelancer trækker tilbage

    pending_freelancer_response --> accepted : Freelancer accepterer modtilbud
    pending_freelancer_response --> pending_negotiation : Freelancer modtilbyder
    pending_freelancer_response --> withdrawn : Freelancer trækker tilbage

    pending_negotiation --> accepted : Admin accepterer modtilbud
    pending_negotiation --> rejected : Admin afviser
    pending_negotiation --> pending_freelancer_response : Admin nyt modtilbud

    accepted --> contract_generated : generate-contract-from-bid
    contract_generated --> [*]
    rejected --> [*]
    withdrawn --> [*]

    note right of accepted
        Trigger: generate-contract-from-bid
        Edge Function opretter kontrakt
        Project status → matched
    end note
```

---

## F4 — Kontraktsigneringsflow (dual-signature)

**Kilder**:
- `docs/flows/FLOW_CONTRACT_SIGNING.md` linje 12–56
- `docs/ARCHITECTURE_DECISIONS.md` ADR-008 (Dual-Signature Contract Flow)

```mermaid
sequenceDiagram
    participant BF as Bid Flow
    participant EF as generate-contract-from-bid
    participant DB as PostgreSQL
    participant Admin as Admin
    participant FL as Freelancer
    participant EC as E-conomic API

    rect rgb(240, 248, 255)
        Note over BF,EF: Kontraktgenerering
        BF->>EF: Bid accepteret
        EF->>DB: INSERT contract (status: draft)
        EF-->>Admin: Notifikation: Kontrakt klar
    end

    rect rgb(255, 248, 240)
        Note over Admin,DB: Admin-signering
        Admin->>DB: Gennemser & signerer kontrakt
        Note right of Admin: Signaturdata (billede, IP, user-agent, tidsstempel)
        DB->>DB: Status → pending_signature
        DB-->>FL: E-mail + in-app notifikation
    end

    rect rgb(240, 255, 240)
        Note over FL,DB: Freelancer-signering
        FL->>DB: Gennemser & signerer kontrakt
        Note right of FL: freelancer_sign_contract(contract_id)
        DB->>DB: Status → active
    end

    rect rgb(255, 255, 240)
        Note over DB,EC: Kontraktaktivering
        DB->>DB: Trigger: on_contract_activated
        DB->>DB: project.status → in_progress
        DB->>EC: Opret E-conomic projekt
        DB-->>Admin: Kontrakt aktiv
        DB-->>FL: Kontrakt aktiv — arbejde kan begynde
    end
```

---

## F5 — E-conomic integrationsflow (tidsregistrering → faktura)

**Kilder**:
- `docs/MODULE_INTERACTIONS.md` linje 248–281
- `docs/ARCHITECTURE_DECISIONS.md` ADR-006 (E-conomic for Payments)

```mermaid
flowchart TB
    A["Freelancer logger tid"] --> B["TimeEntryForm"]
    B --> C["INSERT time_entries<br/>(status: pending)"]
    C --> D["Admin godkender"]
    D --> E["UPDATE status → approved"]
    E --> F["sync-time-to-ecom<br/>Edge Function"]

    F --> G{"Kontrakt har<br/>E-conomic link?"}
    G -->|Ja| H["E-conomic API:<br/>Opret journalpost"]
    G -->|Nej| I["Skip sync"]
    H --> J["UPDATE time_entry<br/>sync status"]
    J --> K["E-conomic:<br/>Generer faktura"]

    K --> L["economic_sync_log<br/>INSERT"]

    style G fill:#fff9c4,stroke:#f9a825
    style H fill:#e3f2fd,stroke:#1565c0
    style I fill:#ffebee,stroke:#c62828
```

---

## F6 — Autentificeringsflow

**Kilder**:
- `docs/MODULE_INTERACTIONS.md` linje 68–97
- `docs/ARCHITECTURE_DECISIONS.md` ADR-003 (Safari Cookie Storage Fallback)
- `src/integrations/supabase/client.ts`

```mermaid
sequenceDiagram
    participant U as Bruger
    participant LP as LoginPage
    participant AC as AuthContext
    participant SB as Supabase Auth
    participant DB as PostgreSQL
    participant PR as ProtectedRoute

    U->>LP: Klik Login
    LP->>AC: signIn(email, password)
    AC->>SB: signInWithPassword()
    SB-->>AC: JWT + Session

    Note over AC: Cookie storage (Safari)<br/>med localStorage fallback

    AC->>AC: onAuthStateChange fires
    AC->>DB: fetchProfile()
    AC->>DB: fetchUserRole()
    DB-->>AC: Profildata + Rolle

    Note over AC: AuthContext state opdateret

    U->>PR: Naviger til beskyttet side
    PR->>AC: Tjek auth state + rolle
    AC-->>PR: Authenticated + Role
    alt Autoriseret
        PR->>U: Tillad adgang
    else Ikke autoriseret
        PR->>U: Redirect til login
    end
```

---

## F7 — Teknologisk stack-oversigt

**Kilder**: `package.json`; `docs/ARCHITECTURE_DECISIONS.md` (ADR-002, ADR-003, ADR-009, ADR-011)

| Lag | Teknologi | Version | Formål | ADR |
|-----|-----------|---------|--------|-----|
| **Frontend** | React | 18.3 | UI-framework | — |
| | TypeScript | 5.5 | Type safety | — |
| | Tailwind CSS | 3.4 | Utility-first styling | — |
| | shadcn/ui | — | Komponentbibliotek (Radix-baseret) | — |
| | TanStack React Query | 5.x | Server state management | ADR-002 |
| | React Hook Form + Zod | — | Formhåndtering + validering | — |
| | Vite | 5.x | Build tool + code splitting | ADR-011 |
| **Backend** | Supabase (PostgreSQL) | — | Database + Auth + Realtime | — |
| | Supabase Edge Functions | Deno | Serverless business logic (40 fn) | — |
| | pgvector | — | Vector similarity search | ADR-009 |
| | Row Level Security | — | 585 policies | — |
| **AI** | OpenAI text-embedding-3-small | — | Embedding-generering (1 536 dim) | ADR-009 |
| | OpenAI gpt-4o-mini | — | CV-parsing (tekst) + match-forklaringer | ADR-009 |
| | OpenAI gpt-4o | — | CV-parsing (vision) | ADR-009 |
| **Hosting** | Netlify | — | Frontend hosting + CDN | — |
| | Supabase Cloud | — | Backend hosting | — |
| **Integration** | E-conomic API | — | Bogføring + fakturering | ADR-006 |
| | Resend | — | Transaktionelle e-mails | — |

---

## F8 — Database-domænemodel (forenklet ER-diagram)

**Kilder**:
- `docs/DATABASE_SCHEMA.md`
- `supabase/migrations/archive/` (249 migrationer)

```mermaid
erDiagram
    PROFILES {
        uuid id PK
        uuid user_id FK
        text full_name
        text role
        boolean is_active
    }

    USER_ROLES {
        uuid id PK
        uuid user_id FK
        text role
    }

    FREELANCERS {
        uuid id PK
        uuid user_id FK
        text name
        text category
        text seniority
        integer hourly_rate
    }

    FREELANCER_SKILLS {
        uuid id PK
        uuid freelancer_id FK
        text skill
        text proficiency_level
    }

    FREELANCER_EMBEDDINGS {
        uuid id PK
        uuid freelancer_id FK
        vector embedding
    }

    JOBS {
        uuid id PK
        text title
        text category
        text job_type
        text experience
    }

    JOB_EMBEDDINGS {
        uuid id PK
        uuid job_id FK
        vector embedding
    }

    PROJECTS {
        uuid id PK
        text title
        text status
        text budget_type
    }

    PROJECT_BIDS {
        uuid id PK
        uuid project_id FK
        uuid freelancer_id FK
        text status
        numeric proposed_rate
    }

    NEGOTIATION_LOG {
        uuid id PK
        uuid bid_id FK
        text action_type
        jsonb proposed_terms
    }

    CONTRACTS {
        uuid id PK
        uuid project_id FK
        uuid freelancer_id FK
        text status
        jsonb contract_terms
    }

    CONTRACT_SIGNATURES {
        uuid id PK
        uuid contract_id FK
        text signer_role
        jsonb signature_data
    }

    TIME_ENTRIES {
        uuid id PK
        uuid contract_id FK
        uuid freelancer_id FK
        numeric hours
        text status
    }

    MATCH_REQUESTS {
        uuid id PK
        uuid freelancer_id FK
        uuid job_id FK
        integer match_score
        text status
    }

    MESSAGES {
        uuid id PK
        uuid conversation_id FK
        uuid sender_id FK
        text content
    }

    CONVERSATIONS {
        uuid id PK
        text type
    }

    ECONOMIC_SYNC_LOG {
        uuid id PK
        uuid contract_id FK
        text sync_type
        text status
    }

    PROFILES ||--o{ USER_ROLES : "has roles"
    PROFILES ||--o| FREELANCERS : "is freelancer"
    FREELANCERS ||--o{ FREELANCER_SKILLS : "has skills"
    FREELANCERS ||--o{ FREELANCER_EMBEDDINGS : "has embeddings"
    FREELANCERS ||--o{ PROJECT_BIDS : "submits"
    FREELANCERS ||--o{ MATCH_REQUESTS : "matched to"
    FREELANCERS ||--o{ CONTRACTS : "signs"
    FREELANCERS ||--o{ TIME_ENTRIES : "logs"

    JOBS ||--o{ JOB_EMBEDDINGS : "has embeddings"
    JOBS ||--o{ MATCH_REQUESTS : "generates matches"

    PROJECTS ||--o{ PROJECT_BIDS : "receives"
    PROJECTS ||--o{ CONTRACTS : "produces"

    PROJECT_BIDS ||--o{ NEGOTIATION_LOG : "negotiation history"
    CONTRACTS ||--o{ CONTRACT_SIGNATURES : "signatures"
    CONTRACTS ||--o{ TIME_ENTRIES : "tracked time"
    CONTRACTS ||--o{ ECONOMIC_SYNC_LOG : "sync events"

    CONVERSATIONS ||--o{ MESSAGES : "contains"
```

---

## F9 — ADR-oversigt (beslutningskort)

**Kilde**: `docs/ARCHITECTURE_DECISIONS.md` (12 ADR'er)

| ADR | Beslutning | Kategori | Nøglekonsekvens |
|-----|-----------|----------|----------------|
| ADR-001 | User Roles via Dedicated Table | Sikkerhed | Forhindrer privilege-eskalering via profilmanipulation |
| ADR-002 | React Query for Server State | Frontend | Automatisk caching; ingen Redux nødvendig |
| ADR-003 | Safari Cookie Storage Fallback | Frontend | Auth virker i Safari private mode |
| ADR-004 | Projects vs Jobs Table Unification | Database | Enkelt kilde for projekt-entiteter |
| ADR-005 | Admin-Mediated Bidding | Forretningslogik | Platform kontrollerer matchkvalitet |
| ADR-006 | E-conomic for Payments | Integration | Dansk bogføringscompliance |
| ADR-007 | Contact Info Detection | Sikkerhed | Forhindrer platform-omgåelse i chat |
| ADR-008 | Dual-Signature Contract Flow | Forretningslogik | Juridisk gyldige elektroniske kontrakter |
| ADR-009 | OpenAI for AI Features | AI | Hybrid matching: semantisk + regelbaseret |
| ADR-010 | Feature Flags | Frontend | Gradvis feature-udrulning |
| ADR-011 | Code Splitting | Frontend | Lazy loading via Vite manualChunks |
| ADR-012 | Security Definer with Fixed Search Path | Sikkerhed | Forhindrer search_path-angreb på functions |

---

## F10 — GDPR-compliance feature-map

**Kilder**:
- `src/pages/FreelancerSettingsPage.tsx` linje 1021 (handleExportData), linje 1387 (handleDeleteAccount)
- `supabase/migrations/archive/2025-Q1/20250120000000_gdpr_account_deletion.sql`
- `supabase/migrations/archive/2025-Q1/20250127000001_gdpr_account_deletion_enhancement.sql`
- `supabase/migrations/archive/2025-Q1/20250203000000_create_ai_matching_schema.sql` linje 114
- `docs/SECURITY_AUDIT_DEC2025.md` sektion 7

| GDPR-artikel | Krav | Implementering | Kodebase-evidens |
|-------------|------|---------------|-----------------|
| Art. 15 — Ret til indsigt | Dataeksport | `handleExportData()` — JSON-download af profil, skills, bids, kontrakter | `FreelancerSettingsPage.tsx:1021` |
| Art. 17 — Ret til sletning | Kontosletning | Soft delete → 30-dages grace period → permanent sletning | `20250120000000_gdpr_account_deletion.sql` |
| Art. 17 (udvidet) | Grace period | `deletion_scheduled_at = now() + 30 days` | `20250127000001_gdpr_account_deletion_enhancement.sql` |
| Art. 20 — Dataportabilitet | Struktureret eksport | JSON-format download af alle persondata | `FreelancerSettingsPage.tsx:1021` |
| Art. 25 — Data Protection by Design | PII-ekskludering fra embeddings | "Normalized profile text (no PII)" i embedding-pipeline | `20250203000000_create_ai_matching_schema.sql:114` |
| Art. 25 — Offentlig visning | PII-beskyttelse | `public_freelancers` view ekskluderer sensitiv data | `SECURITY_AUDIT_DEC2025.md` sektion 7 |
| Art. 32 — Sikkerhed | Row Level Security | 585 RLS-policies på alle tabeller | Kodebase (verificeret via `CREATE POLICY`-tælling) |
| — | Eksplicit bekræftelse | Brugeren skal skrive "DELETE" for at bekræfte sletning | `FreelancerSettingsPage.tsx:1400` |

---

## F11 — Frontend-komponenthierarki (page → hook → service)

**Kilder**:
- `src/App.tsx` (routing + lazy loading)
- `src/hooks/` (22 useQuery, 41 useMutation)
- `src/components/` (172 komponenter)

```mermaid
graph TB
    subgraph "Lag 0 — Entry Point"
        App["App.tsx<br/>(BrowserRouter + QueryClientProvider<br/>+ AuthProvider + ThemeProvider)"]
    end

    subgraph "Lag 1 — Route Pages (65)"
        direction LR
        AP["Admin Pages<br/>/admin/*"]
        FP["Freelancer Pages<br/>/freelancer/*"]
        PP["Public Pages<br/>/, /login, /signup"]
    end

    subgraph "Lag 2 — Feature Components (172)"
        direction LR
        AC["admin/<br/>Dashboard, Bidding,<br/>Contracts, Applications"]
        FC["freelancer/<br/>Profile, Opportunities,<br/>Bids, Contracts"]
        MC["messaging/<br/>ConversationList,<br/>MessageInput"]
    end

    subgraph "Lag 3 — Base UI (shadcn/ui)"
        direction LR
        UI["Button · Card · Dialog<br/>Input · Table · Badge<br/>Toast · Tabs · Dropdown"]
    end

    subgraph "Lag 4 — Data Hooks"
        direction LR
        QH["useQuery hooks (22)<br/>useMutation hooks (41)"]
        AH["useAuth()"]
        FF["useFeatureFlags()"]
    end

    subgraph "Lag 5 — Services & Lib"
        direction LR
        SBC["Supabase Client<br/>(REST + Realtime)"]
        SEC["security.ts<br/>(sanitize, validate)"]
        CID["contactInfoDetector.ts"]
    end

    App -->|"Lazy Loading<br/>(React.lazy + Suspense)"| AP
    App --> FP
    App --> PP
    AP --> AC
    FP --> FC
    AC --> UI
    FC --> UI
    MC --> UI
    AC --> QH
    FC --> QH
    QH --> SBC
    AH --> SBC
```

---

## F12 — Edge function-katalog (40 funktioner pr. domæne)

**Kilde**: `supabase/functions/` (40 funktioner)

| Domæne | Edge Function | Formål |
|--------|--------------|--------|
| **AI & Matching** | `ai-match` | Hybrid scoring (semantisk + regelbaseret) |
| | `generate-embeddings` | Generér OpenAI embeddings for profiler/jobs |
| | `automatic-match` | Automatisk matching ved job-oprettelse |
| | `match-notifications` | Send match-notifikationer |
| | `parse-cv` | CV-parsing (tekst, gpt-4o-mini) |
| | `parse-cv-vision` | CV-parsing (billede/PDF, gpt-4o) |
| **Kontrakter** | `generate-contract-from-bid` | Opret kontrakt fra accepteret bid |
| | `generate-contract-pdf` | PDF-generering |
| **E-conomic** | `sync-time-to-ecom` | Synkroniser tidsregistrering |
| | `economic-*` | Diverse E-conomic API-operationer |
| **Kommunikation** | `send-form-email` | Transaktionelle e-mails (Resend) |
| | `send-notification` | In-app + e-mail notifikationer |
| **Administration** | `admin-*` | Administrative operationer |
| | `create-user` | Brugeroprettelse |
| | `delete-user` | Brugersletning (GDPR) |
| **Diverse** | `feature-flags` | Feature flag management |
| | `health-check` | System health monitoring |

> **Note**: Komplet liste (40 funktioner) findes i `supabase/functions/` — tabellen viser repræsentative eksempler pr. domæne.

---

## F13 — Kodebase-metrikker

**Kilde**: Direkte tælling fra repository (verificeret 2026-02-09)

| Metrik | Antal | Metode |
|--------|-------|--------|
| React-komponenter (`src/components/`) | 172 | `Get-ChildItem -Recurse -Filter *.tsx` |
| Route-pages (`src/pages/`) | 65 | `Get-ChildItem -Recurse -Filter *.tsx` |
| Supabase Edge Functions | 40 | Mapper i `supabase/functions/` |
| Database-migrationer | 249 | `.sql`-filer i `supabase/migrations/` |
| RLS-policies | 585 | `CREATE POLICY`-forekomster i migrationer |
| Custom hooks (`src/hooks/`) | ~60+ | `.ts/.tsx`-filer |
| `useQuery`-kald i hooks | 22 | `Select-String` i `src/hooks/` |
| `useMutation`-kald i hooks | 41 | `Select-String` i `src/hooks/` |
| Dokumentation (`.md`-filer i `docs/`) | 132 | `Get-ChildItem -Recurse -Filter *.md` |
| Architecture Decision Records | 12 | `docs/ARCHITECTURE_DECISIONS.md` |
| Feature flag hooks | 4 | `src/hooks/useFeatureFlags.tsx` |

---

*Genereret: 2026-02-09 — Alle figurer er afledt direkte af SoluTalent-repositoriet.*

