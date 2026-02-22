# C4-lignende arkitektur — claim → evidence

> **Formål**: Kort, sporbar forklaring af kontekst-, container- og komponentniveau
> baseret på repo-evidens. Diagrammerne er i:
> `docs/bachelor/figures/c4_context.mmd`, `c4_container.mmd`, `c4_component.mmd`.

---

## Overblik

Vi udleder et C4-lignende arkitekturdiagram fra repoet (filtræ, `package.json`,
Supabase-konfiguration og edge functions). Diagrammerne viser:

1. **Kontekst**: brugere → SoluTalent → eksterne services  
2. **Container**: frontend (React SPA), Supabase (Auth/DB/Realtime/Edge), eksterne integrationer  
3. **Komponent (light)**: frontend-lag (pages → hooks → services), edge functions pr. domæne,
   database med RLS, samt integrationer

---

## Claim → Evidence

| Claim | Evidence (repo) |
|------|-----------------|
| Frontend er en React SPA bygget med Vite | `package.json` (scripts: `vite`, deps: `react`, `react-dom`) |
| Supabase anvendes som backend-platform | `package.json` (`@supabase/supabase-js`), `supabase/config.toml` |
| Backend består af Auth, PostgreSQL, Realtime og Edge Functions | `supabase/config.toml`, `supabase/functions/` |
| Edge Functions er implementeret i Deno | `supabase/functions/**/index.ts`, `supabase/functions/deno.json` |
| OpenAI bruges til AI-funktioner (embeddings + chat) | `supabase/functions/parse-cv-vision/index.ts` (OpenAI API), `supabase/functions/generate-embeddings/index.ts` |
| E-conomic integration findes som edge functions | `supabase/functions/economic/index.ts`, `supabase/functions/sync-time-to-ecom/index.ts` |
| OAuth anvendes til Google token endpoint | `supabase/functions/google-analytics/index.ts` (oauth2.googleapis.com) |
| Resend anvendes til email | `supabase/functions/send-form-email/index.ts` (Resend client) |
| Database-skemændringer findes som migrationer | `supabase/migrations/` |
| Frontend-lag følger pages → components → hooks → services | `src/pages/`, `src/components/`, `src/hooks/`, `src/services/` |

---

## Diagrammer (C4-lignende)

- **Kontekst**: `docs/bachelor/figures/c4_context.mmd`  
- **Container**: `docs/bachelor/figures/c4_container.mmd`  
- **Komponent (light)**: `docs/bachelor/figures/c4_component.mmd`

---

*Alle diagrammer er repo-deriverede og kan renderes via Mermaid.*

