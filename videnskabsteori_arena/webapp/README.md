# Videnskabsteori Arena

A gamified learning platform for academic concepts in scientific theory, methodology, and theory frameworks.

## Features

- **Arena Quiz System**: Test your knowledge with spaced repetition
- **Gamification**: XP, levels, streaks, and achievements
- **Multiple Categories**: Videnskabsteori, Metode, Teori
- **Daily Challenges**: Complete daily goals for bonus rewards
- **Progress Tracking**: Detailed statistics and category performance
- **Lesson Content**: Structured learning materials
- **Synopsis Bot (RAG)**: Generate structured synopsis drafts with repo-grounded context

## Deploy to Vercel

### Option 1: Import from GitHub (Recommended)

1. Push this folder to your GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Set **Root Directory** to `videnskabsteori_arena/webapp`
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to webapp folder
cd videnskabsteori_arena/webapp

# Deploy
vercel
```

## Local Development

```bash
# Navigate to webapp folder
cd videnskabsteori_arena/webapp

# Install dependencies
npm install

# Build RAG index
npm run build:rag

# Start local serverless runtime (required for /api/synopsis)
vercel dev
```

Open the URL shown by `vercel dev` (typically http://localhost:3000).

## Synopsis Bot Setup (OpenRouter + RAG)

The bot UI is available as a new top navigation tab: **Synopsis Bot**.

### 1) Build the local repo index

```bash
cd videnskabsteori_arena/webapp
npm run build:rag
```

This generates `data/rag-index.json` used by `/api/synopsis`.

### 2) Configure environment variables

Set these variables in your deployment (or local Vercel dev):

- `OPENROUTER_API_KEY` (required)
- `OPENROUTER_MODEL` (optional, default: `openrouter/auto`)
- `OPENROUTER_HTTP_REFERER` (optional, default: `http://localhost`)
- `SYNOPSIS_BOT_ACCESS_TOKEN` (optional, enables header auth via `x-bot-token`)
- `RAG_MIN_SCORE_THRESHOLD` (optional, default: `0.15`)

### 3) API endpoint

- `POST /api/synopsis`
- Request body:
  - `topic` (string, required, max 500 chars)
  - `gradeTarget` (`12` | `7` | `02`)
  - `lengthTarget` (`short` | `medium` | `long`)
  - `tone` (`academic` | `critical` | `practical`)
  - `includeCounterarguments` (boolean)

The endpoint returns structured JSON with sections (`problemField`, `theory`, `method`, `analysis`, `critique`, `conclusion`) plus `sourceNotes`, `coverageScore`, and RAG `citations`.

Additional runtime behavior:
- Per-IP rate limiting (HTTP 429 on burst abuse)
- OpenRouter timeout/retry and fallback mode when provider fails
- `requestId` in responses for traceability

### 3b) Health endpoint

- `GET /api/health`
- Returns model, key/config status, token protection status, and RAG index metadata.

### 4) Manual test checklist

- Empty input topic -> user-facing validation error
- Broad topic -> returns synopsis and citations
- Narrow topic -> stronger repo grounding expected
- Out-of-scope topic -> still returns synopsis, with lower coverage and explicit uncertainty
- Very long topic (>500 chars) -> API validation error

## Quality Evaluation Pack

- Prompt suite: `evaluation/test-prompts.md`
- Scoring rubric: `evaluation/scoring-rubric.md`

Use these after changes to prompt, retriever, or model settings.

## Operations

See `docs/OPERATIONS.md` for release checklist, rollback steps, and diagnostics.

## Scripts

- `npm run build:rag` - build `data/rag-index.json`
- `npm run rag:version` - snapshot active index into `data/versions`
- `npm run rag:build-and-version` - build + snapshot
- `npm run test` - run API/retriever/prompt tests
- `npm run ci:check` - build index + run tests

## File Structure

```
webapp/
├── index.html          # Main HTML file
├── vercel.json         # Vercel configuration
├── css/
│   └── style.css       # Styles
└── js/
    ├── data.js         # Quiz questions and lesson content
    ├── storage.js      # localStorage handling
    ├── scheduler.js    # Spaced repetition logic
    ├── gamification.js # XP, levels, achievements
    ├── lessons.js      # Lesson display
    ├── arena.js        # Quiz gameplay
    ├── stats.js        # Statistics display
    └── app.js          # Main app controller
```

## Technologies

- Vanilla JavaScript (no frameworks)
- CSS3 with custom properties
- localStorage for persistence
- Static hosting compatible
