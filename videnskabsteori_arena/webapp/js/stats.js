// Stats module - displays user statistics
const Stats = {
    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('statsContent');
        const gamificationStats = Gamification.getStats();
        const levelInfo = Gamification.getLevelInfo(gamificationStats.xp);
        const allAttempts = Storage.getAllAttempts();
        
        // Calculate total stats
        let totalCorrect = 0;
        let totalAnswers = 0;
        Object.values(allAttempts).forEach(attempts => {
            attempts.forEach(a => {
                totalAnswers++;
                if (a.correct) totalCorrect++;
            });
        });
        
        const accuracy = totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0;
        
        // Category stats
        const categoryStats = { videnskabsteori: { correct: 0, total: 0 }, metode: { correct: 0, total: 0 }, teori: { correct: 0, total: 0 }, case: { correct: 0, total: 0 }, pensum: { correct: 0, total: 0 } };
        Object.keys(allAttempts).forEach(itemId => {
            const item = Data.items.find(i => i.id === itemId);
            if (item && item.category) {
                const cat = item.category;
                if (categoryStats[cat]) {
                    allAttempts[itemId].forEach(a => {
                        categoryStats[cat].total++;
                        if (a.correct) categoryStats[cat].correct++;
                    });
                }
            }
        });
        
        // Recent activity
        const recentAttempts = [];
        Object.keys(allAttempts).forEach(itemId => {
            const item = Data.items.find(i => i.id === itemId);
            allAttempts[itemId].forEach(attempt => {
                recentAttempts.push({ ...attempt, itemId, item });
            });
        });
        recentAttempts.sort((a, b) => b.timestamp - a.timestamp);
        const recent = recentAttempts.slice(0, 10);
        
        let html = `
            <div class="stats-header">
                <h2>📊 Statistik</h2>
                <div class="level-display">
                    <div class="level-badge">${levelInfo.level}</div>
                    <div class="level-info">
                        <div class="level-title">${levelInfo.title}</div>
                        <div class="level-progress">
                            <div class="level-progress-bar">
                                <div class="level-progress-fill" style="width: ${levelInfo.progress}%"></div>
                            </div>
                            <span class="level-progress-text">${levelInfo.xpInLevel}/${levelInfo.xpForNext || '∞'}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="stats-overview">
                <div class="stats-card">
                    <div class="stats-card-icon">⚡</div>
                    <div class="stats-card-value">${gamificationStats.xp}</div>
                    <div class="stats-card-label">Total XP</div>
                </div>
                <div class="stats-card">
                    <div class="stats-card-icon">🔥</div>
                    <div class="stats-card-value">${gamificationStats.bestStreak}</div>
                    <div class="stats-card-label">Bedste streak</div>
                </div>
                <div class="stats-card">
                    <div class="stats-card-icon">✓</div>
                    <div class="stats-card-value">${totalCorrect}</div>
                    <div class="stats-card-label">Rigtige svar</div>
                </div>
                <div class="stats-card">
                    <div class="stats-card-icon">🎯</div>
                    <div class="stats-card-value">${accuracy}%</div>
                    <div class="stats-card-label">Accuracy</div>
                </div>
                <div class="stats-card">
                    <div class="stats-card-icon">📝</div>
                    <div class="stats-card-value">${totalAnswers}</div>
                    <div class="stats-card-label">Besvarede</div>
                </div>
                <div class="stats-card">
                    <div class="stats-card-icon">🏆</div>
                    <div class="stats-card-value">${gamificationStats.achievements.length}</div>
                    <div class="stats-card-label">Præstationer</div>
                </div>
            </div>
            
            <div class="stats-section">
                <h3>📚 Kategorier</h3>
                <div class="category-stats">
        `;
        
        const categories = [
            { key: 'videnskabsteori', name: 'Videnskabsteori', icon: '📚' },
            { key: 'metode', name: 'Metode', icon: '🔬' },
            { key: 'teori', name: 'Teori', icon: '🧠' },
            { key: 'case', name: 'Case (Bachelor)', icon: '🎓' },
            { key: 'pensum', name: 'Pensum', icon: '📘' }
        ];
        
        categories.forEach(cat => {
            const stat = categoryStats[cat.key];
            const percent = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
            html += `
                <div class="category-row">
                    <span class="category-name">${cat.icon} ${cat.name}</span>
                    <div class="category-bar">
                        <div class="category-fill ${cat.key}" style="width: ${percent}%"></div>
                    </div>
                    <span class="category-percent">${percent}%</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
            
            <div class="stats-section">
                <h3>🏅 Præstationer</h3>
                <div class="achievements-list">
        `;
        
        Gamification.ACHIEVEMENTS.forEach(achievement => {
            const unlocked = gamificationStats.achievements.some(a => a.startsWith(achievement.id));
            html += `
                <div class="achievement-item" style="opacity: ${unlocked ? 1 : 0.4}">
                    <span class="achievement-icon">${achievement.icon}</span>
                    <div class="achievement-info">
                        <div class="achievement-name">${achievement.name}</div>
                        <div class="achievement-desc">${achievement.desc}</div>
                    </div>
                    <span class="achievement-xp">${unlocked ? '✓' : `+${achievement.xp} XP`}</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
            
            <div class="stats-section">
                <h3>📜 Seneste aktivitet</h3>
                <div class="recent-activity">
        `;
        
        if (recent.length === 0) {
            html += `<p style="color: var(--text-secondary); text-align: center; padding: 1rem;">Ingen aktivitet endnu</p>`;
        } else {
            recent.forEach(attempt => {
                const timeAgo = this.formatTimeAgo(attempt.timestamp);
                const question = attempt.item ? attempt.item.prompt : 'Slettet spørgsmål';
                html += `
                    <div class="activity-item">
                        <span class="activity-icon">${attempt.correct ? '✓' : '✗'}</span>
                        <div class="activity-info">
                            <div class="activity-question">${question.substring(0, 60)}...</div>
                            <div class="activity-time">${timeAgo}</div>
                        </div>
                    </div>
                `;
            });
        }
        
        html += `
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <button class="btn" onclick="Stats.confirmReset()">🗑️ Nulstil alle data</button>
            </div>
        `;
        
        container.innerHTML = html;
    },

    formatTimeAgo(timestamp) {
        const seconds = Math.floor((Date.now() - timestamp) / 1000);
        if (seconds < 60) return 'Lige nu';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} min siden`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} timer siden`;
        const days = Math.floor(hours / 24);
        return `${days} dage siden`;
    },

    confirmReset() {
        if (confirm('Er du sikker på at du vil nulstille alle data? Dette kan ikke fortrydes.')) {
            Storage.clearAll();
            this.render();
            App.updateHeaderStats();
            Toast.show('success', 'Data nulstillet', 'Alle dine data er blevet slettet');
        }
    }
};
