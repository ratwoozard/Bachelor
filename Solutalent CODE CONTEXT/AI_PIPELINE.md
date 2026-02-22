# AI-matchningspipeline — claim → evidence

> **Formål**: Dokumentere dataflowet for AI-matchning med sporbarhed til repoet.
> Figur: `docs/bachelor/figures/ai_pipeline.mmd`

---

## Dataflow (kort)

CV/job input → parsing → embeddings → similarity → regelbaseret scoring → samlet score → forklaring (GPT) → match_results.

---

## Claim → Evidence

| Pipeline-trin | Claim | Evidence (repo) |
|---|---|---|
| CV input | CV-data indgår i pipeline via parsing-funktioner | `supabase/functions/parse-cv/index.ts`, `supabase/functions/parse-cv-vision/index.ts` |
| Job input | Job-data indgår via upload/webhook | `supabase/functions/upload-job/index.ts`, `supabase/functions/jobs-webhook/index.ts` |
| Parsing | CV parsning (tekst + vision) | `supabase/functions/parse-cv/index.ts`, `supabase/functions/parse-cv-vision/index.ts` |
| Embeddings | Embeddings genereres til matching | `supabase/functions/generate-embeddings/index.ts` |
| Similarity | Similarity baseres på pgvector | `supabase/functions/ai-match/index.ts`, `supabase/migrations/archive/2025-Q1/20250203000000_create_ai_matching_schema.sql` |
| Regelbaseret scoring | Rule-based scoring anvendes | `supabase/functions/ai-match/index.ts` |
| Samlet score | Score kombineres til samlet matchscore | `supabase/functions/ai-match/index.ts` |
| Forklaring (GPT) | Match forklares via GPT | `supabase/functions/ai-match/index.ts` |
| match_results | Resultater gemmes i `match_results` | `supabase/functions/ai-match/index.ts`, `supabase/migrations/archive/2025-Q1/20250203000000_create_ai_matching_schema.sql` |

---

## Note

Alle bokse i figuren indeholder direkte filstier for sporbarhed.

