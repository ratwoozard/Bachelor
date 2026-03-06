# Videnskabsteori Arena

A gamified learning platform for academic concepts in scientific theory, methodology, and theory frameworks.

## Features

- **Arena Quiz System**: Test your knowledge with spaced repetition
- **Gamification**: XP, levels, streaks, and achievements
- **Multiple Categories**: Videnskabsteori, Metode, Teori
- **Daily Challenges**: Complete daily goals for bonus rewards
- **Progress Tracking**: Detailed statistics and category performance
- **Lesson Content**: Structured learning materials
- **Vercel Web Analytics**: Track visitor behavior and page views

## Deploy to Vercel

### Option 1: Import from GitHub (Recommended)

1. Push this folder to your GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Set **Root Directory** to `videnskabsteori_arena/webapp`
6. Click "Deploy"
7. After deployment, enable **Web Analytics** in your project's Analytics tab on the Vercel dashboard

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

# Start local server
python -m http.server 8000

# Or using Node.js
npx serve .
```

Open http://localhost:8000 in your browser.

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

## Vercel Web Analytics

This project includes Vercel Web Analytics for tracking visitor behavior and page views.

### Enabling Analytics

1. Deploy your project to Vercel
2. Go to your project dashboard on Vercel
3. Navigate to the **Analytics** tab
4. Click **Enable** to activate Web Analytics
5. After your next deployment, analytics will start tracking visitors

The analytics script is already integrated in `index.html` and will automatically start collecting data once enabled on your Vercel dashboard. You can view analytics data including:

- Page views and unique visitors
- Traffic sources and referrers
- Device and browser information
- Geographic data

No additional configuration or package installation is required for HTML sites.
