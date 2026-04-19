# Synopsis Bot Operations

## Release Checklist

1. Build and version RAG index:
   - `npm run rag:build-and-version`
2. Run automated checks:
   - `npm run ci:check`
3. Verify environment variables in Vercel:
   - `OPENROUTER_API_KEY`
   - `OPENROUTER_MODEL` (recommended: `openrouter/auto` or pinned model)
   - `OPENROUTER_HTTP_REFERER`
   - Optional: `SYNOPSIS_BOT_ACCESS_TOKEN`
4. Deploy production:
   - `vercel --prod`
5. Run smoke tests:
   - `GET /api/health`
   - `POST /api/synopsis` with on-topic and out-of-domain prompts

## Rollback Procedure

### App rollback

- Use Vercel deployment rollback:
  - `vercel rollback <deployment-url-or-id>`

### RAG index rollback

1. Inspect available versions in `data/versions/manifest.json`.
2. Copy a previous version into active index:
   - `copy data\\versions\\rag-index-<timestamp>.json data\\rag-index.json` (Windows)
3. Redeploy:
   - `vercel --prod`
4. Verify with `GET /api/health` (`ragIndex.builtAt`, `chunkCount`).

## Runtime Diagnostics

- `GET /api/health` returns:
  - model in use
  - whether OpenRouter key is configured
  - whether token protection is enabled
  - RAG index metadata

## Abuse Protection Notes

- API includes per-IP rate limiting.
- Optional header auth can be enabled by setting:
  - `SYNOPSIS_BOT_ACCESS_TOKEN`
- If enabled, clients must send:
  - `x-bot-token: <token>`
