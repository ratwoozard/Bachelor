// Main App Controller
const App = {
    currentScreen: 'home',

    init() {
        // Initialize screens
        this.showScreen('home');
        
        // Setup navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const screen = btn.dataset.screen;
                this.showScreen(screen);
            });
        });
        
        // Update header stats
        this.updateHeaderStats();
        
        // Render home content
        this.renderHome();
    },

    showScreen(screenId) {
        this.currentScreen = screenId;
        
        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.screen === screenId);
        });
        
        // Show/hide screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId + 'Screen').classList.add('active');
        
        // Initialize screen content
        switch (screenId) {
            case 'home':
                this.renderHome();
                break;
            case 'arena':
                Arena.init();
                break;
            case 'lessons':
                Lessons.init();
                break;
            case 'stats':
                Stats.init();
                break;
        }
        
        this.updateHeaderStats();
    },

    renderHome() {
        const stats = Gamification.getStats();
        const levelInfo = Gamification.getLevelInfo(stats.xp);
        const daily = Gamification.getDailyProgress();
        
        // Hero stats
        const heroStats = document.getElementById('heroStats');
        heroStats.innerHTML = `
            <div class="hero-stat">
                <div class="hero-stat-value">${levelInfo.level}</div>
                <div class="hero-stat-label">Level</div>
            </div>
            <div class="hero-stat">
                <div class="hero-stat-value">${stats.xp}</div>
                <div class="hero-stat-label">XP</div>
            </div>
            <div class="hero-stat">
                <div class="hero-stat-value">${stats.bestStreak}</div>
                <div class="hero-stat-label">Streak</div>
            </div>
        `;
        
        // Daily challenge
        const dailyContent = document.getElementById('dailyContent');
        dailyContent.innerHTML = `
            <div class="daily-progress">
                <div class="daily-progress-bar">
                    <div class="daily-progress-fill" style="width: ${daily.progress}%"></div>
                </div>
                <span class="daily-progress-text">${daily.correct}/${daily.goal}</span>
            </div>
            <div class="daily-reward">
                <span class="daily-reward-icon">🎁</span>
                <div class="daily-reward-text">
                    ${daily.correct >= daily.goal 
                        ? '<strong style="color: var(--success);">Udfordring gennemført!</strong>' 
                        : `<strong>${daily.goal - daily.correct}</strong> rigtige mere for bonus XP`}
                </div>
            </div>
        `;
        
        // Category counts
        const counts = {
            general: Data.items.filter(i => i.category !== 'case').length,
            videnskabsteori: Data.items.filter(i => i.category === 'videnskabsteori').length,
            metode: Data.items.filter(i => i.category === 'metode').length,
            teori: Data.items.filter(i => i.category === 'teori').length,
            case: Data.items.filter(i => i.category === 'case').length
        };
        document.getElementById('countGeneral').textContent = counts.general;
        document.getElementById('countVidenskabsteori').textContent = counts.videnskabsteori;
        document.getElementById('countMetode').textContent = counts.metode;
        document.getElementById('countTeori').textContent = counts.teori;
        document.getElementById('countCase').textContent = counts.case;
        
        // Recent achievements
        const achievementsList = document.getElementById('achievementsList');
        const recent = Gamification.getRecentAchievements(3);
        if (recent.length === 0) {
            achievementsList.innerHTML = `
                <p style="color: var(--text-secondary); text-align: center; padding: 1rem;">
                    Ingen præstationer endnu - start arena for at optjene!
                </p>
            `;
        } else {
            achievementsList.innerHTML = recent.map(a => `
                <div class="achievement-item">
                    <span class="achievement-icon">${a.icon}</span>
                    <div class="achievement-info">
                        <div class="achievement-name">${a.name}</div>
                        <div class="achievement-desc">${a.desc}</div>
                    </div>
                    <span class="achievement-xp">+${a.xp} XP</span>
                </div>
            `).join('');
        }
        
        // Progress overview
        const progressOverview = document.getElementById('progressOverview');
        const allAttempts = Storage.getAllAttempts();
        const categoryProgress = { videnskabsteori: { correct: 0, total: 0 }, metode: { correct: 0, total: 0 }, teori: { correct: 0, total: 0 }, case: { correct: 0, total: 0 } };
        
        Object.keys(allAttempts).forEach(itemId => {
            const item = Data.items.find(i => i.id === itemId);
            if (item && item.category && categoryProgress[item.category]) {
                allAttempts[itemId].forEach(a => {
                    categoryProgress[item.category].total++;
                    if (a.correct) categoryProgress[item.category].correct++;
                });
            }
        });
        
        const categories = [
            { key: 'videnskabsteori', name: 'Videnskabsteori' },
            { key: 'metode', name: 'Metode' },
            { key: 'teori', name: 'Teori' },
            { key: 'case', name: 'Case (Bachelor)' }
        ];
        
        progressOverview.innerHTML = categories.map(cat => {
            const p = categoryProgress[cat.key];
            const percent = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
            return `
                <div class="progress-item">
                    <span class="progress-label">${cat.name}</span>
                    <div class="progress-bar">
                        <div class="progress-fill ${cat.key}" style="width: ${percent}%"></div>
                    </div>
                    <span class="progress-percent">${percent}%</span>
                </div>
            `;
        }).join('');
    },

    updateHeaderStats() {
        const stats = Gamification.getStats();
        document.getElementById('headerXP').innerHTML = `
            <span class="xp-icon">⚡</span>
            <span class="xp-value">${stats.xp} XP</span>
        `;
        document.getElementById('headerStreak').innerHTML = `
            <span class="streak-icon">🔥</span>
            <span class="streak-value">${stats.streak}</span>
        `;
    },

    showLevelUp(levelInfo) {
        const modal = document.getElementById('levelUpModal');
        modal.querySelector('.level-up-text').textContent = `Du er nu niveau ${levelInfo.level} - ${levelInfo.title}!`;
        modal.classList.add('visible');
    },

    closeLevelUp() {
        document.getElementById('levelUpModal').classList.remove('visible');
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => App.init());
