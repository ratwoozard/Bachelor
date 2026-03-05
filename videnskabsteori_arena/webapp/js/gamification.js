// Gamification module - handles XP, levels, achievements, streaks
const Gamification = {
    XP_PER_CORRECT: 10,
    XP_PER_INCORRECT: 2,
    XP_STREAK_BONUS: 5,
    XP_PERFECT_SESSION: 50,
    DAILY_GOAL: 10,

    LEVELS: [
        { level: 1, title: 'Novice', xpRequired: 0 },
        { level: 2, title: 'Lærling', xpRequired: 100 },
        { level: 3, title: 'Student', xpRequired: 250 },
        { level: 4, title: 'Kandidat', xpRequired: 500 },
        { level: 5, title: 'Forsker', xpRequired: 1000 },
        { level: 6, title: 'Ekspert', xpRequired: 2000 },
        { level: 7, title: 'Mester', xpRequired: 3500 },
        { level: 8, title: 'Professor', xpRequired: 5000 },
        { level: 9, title: 'Vismand', xpRequired: 7500 },
        { level: 10, title: 'Legende', xpRequired: 10000 }
    ],

    ACHIEVEMENTS: [
        { id: 'first_correct', name: 'Første rigtige!', desc: 'Svar korrekt på dit første spørgsmål', icon: '🎯', xp: 25 },
        { id: 'streak_5', name: 'På stribe', desc: 'Få 5 rigtige i træk', icon: '🔥', xp: 50 },
        { id: 'streak_10', name: 'Ustoppelig', desc: 'Få 10 rigtige i træk', icon: '⚡', xp: 100 },
        { id: 'perfect_session', name: 'Perfekt session', desc: 'Gennemfør en session uden fejl', icon: '💎', xp: 75 },
        { id: 'videnskabsteori_10', name: 'Videnskabsteoretiker', desc: 'Svar rigtigt på 10 videnskabsteori-spørgsmål', icon: '📚', xp: 50 },
        { id: 'metode_10', name: 'Metodiker', desc: 'Svar rigtigt på 10 metode-spørgsmål', icon: '🔬', xp: 50 },
        { id: 'teori_10', name: 'Teoretiker', desc: 'Svar rigtigt på 10 teori-spørgsmål', icon: '🧠', xp: 50 },
        { id: 'daily_complete', name: 'Daglig udfordring', desc: 'Gennemfør din daglige udfordring', icon: '📅', xp: 30 },
        { id: 'total_50', name: 'Halv hundrede', desc: 'Besvar 50 spørgsmål', icon: '🎪', xp: 50 },
        { id: 'total_100', name: 'Centurion', desc: 'Besvar 100 spørgsmål', icon: '🏛️', xp: 100 },
        { id: 'total_250', name: 'Veteran', desc: 'Besvar 250 spørgsmål', icon: '🎖️', xp: 150 },
        { id: 'accuracy_80', name: 'Præcis', desc: 'Opnå 80% accuracy samlet', icon: '🎯', xp: 75 },
        { id: 'all_categories', name: 'Alsidigt talent', desc: 'Besvar mindst 10 spørgsmål i hver kategori', icon: '🌟', xp: 100 }
    ],

    getStats() {
        return Storage.get('vt_gamification', {
            xp: 0,
            level: 1,
            streak: 0,
            bestStreak: 0,
            todayCorrect: 0,
            todayTotal: 0,
            lastPlayDate: null,
            achievements: [],
            categoryCorrect: { videnskabsteori: 0, metode: 0, teori: 0, case: 0 },
            categoryTotal: { videnskabsteori: 0, metode: 0, teori: 0, case: 0 }
        });
    },

    saveStats(stats) {
        Storage.set('vt_gamification', stats);
    },

    recordAnswer(correct, category) {
        const stats = this.getStats();
        const today = new Date().toDateString();
        const rewards = { xp: 0, achievements: [], levelUp: null };

        // Reset daily if new day
        if (stats.lastPlayDate !== today) {
            stats.todayCorrect = 0;
            stats.todayTotal = 0;
            stats.lastPlayDate = today;
        }

        // Update stats
        stats.todayTotal++;
        if (category) {
            stats.categoryTotal[category] = (stats.categoryTotal[category] || 0) + 1;
        }

        if (correct) {
            stats.todayCorrect++;
            stats.streak++;
            if (stats.streak > stats.bestStreak) {
                stats.bestStreak = stats.streak;
            }
            if (category) {
                stats.categoryCorrect[category] = (stats.categoryCorrect[category] || 0) + 1;
            }

            // Base XP
            rewards.xp += this.XP_PER_CORRECT;

            // Streak bonus
            if (stats.streak > 1) {
                const streakBonus = Math.min(stats.streak - 1, 10) * this.XP_STREAK_BONUS;
                rewards.xp += streakBonus;
            }
        } else {
            stats.streak = 0;
            rewards.xp += this.XP_PER_INCORRECT;
        }

        // Add XP
        const oldLevel = this.getLevelInfo(stats.xp);
        stats.xp += rewards.xp;
        const newLevel = this.getLevelInfo(stats.xp);

        // Check level up
        if (newLevel.level > oldLevel.level) {
            stats.level = newLevel.level;
            rewards.levelUp = newLevel;
        }

        // Check achievements
        rewards.achievements = this.checkAchievements(stats, correct);
        stats.achievements = [...new Set([...stats.achievements, ...rewards.achievements.map(a => a.id)])];

        // Add achievement XP
        rewards.achievements.forEach(a => {
            rewards.xp += a.xp;
            stats.xp += a.xp;
        });

        this.saveStats(stats);
        return rewards;
    },

    recordSessionComplete(correct, total) {
        const stats = this.getStats();
        const rewards = { xp: 0, achievements: [] };

        if (correct === total && total > 0) {
            rewards.xp += this.XP_PERFECT_SESSION;
            stats.xp += rewards.xp;
            
            if (!stats.achievements.includes('perfect_session')) {
                const achievement = this.ACHIEVEMENTS.find(a => a.id === 'perfect_session');
                rewards.achievements.push(achievement);
                stats.achievements.push('perfect_session');
                rewards.xp += achievement.xp;
                stats.xp += achievement.xp;
            }
        }

        // Check daily goal
        if (stats.todayCorrect >= this.DAILY_GOAL && !stats.achievements.includes('daily_complete_' + new Date().toDateString())) {
            const achievement = this.ACHIEVEMENTS.find(a => a.id === 'daily_complete');
            if (achievement) {
                rewards.achievements.push(achievement);
                stats.achievements.push('daily_complete_' + new Date().toDateString());
                rewards.xp += achievement.xp;
                stats.xp += achievement.xp;
            }
        }

        this.saveStats(stats);
        return rewards;
    },

    checkAchievements(stats, correct) {
        const newAchievements = [];
        const totalCorrect = stats.categoryCorrect.videnskabsteori + stats.categoryCorrect.metode + stats.categoryCorrect.teori;
        const totalAnswers = stats.categoryTotal.videnskabsteori + stats.categoryTotal.metode + stats.categoryTotal.teori;

        const checks = [
            { id: 'first_correct', condition: totalCorrect >= 1 },
            { id: 'streak_5', condition: stats.streak >= 5 },
            { id: 'streak_10', condition: stats.streak >= 10 },
            { id: 'videnskabsteori_10', condition: stats.categoryCorrect.videnskabsteori >= 10 },
            { id: 'metode_10', condition: stats.categoryCorrect.metode >= 10 },
            { id: 'teori_10', condition: stats.categoryCorrect.teori >= 10 },
            { id: 'total_50', condition: totalAnswers >= 50 },
            { id: 'total_100', condition: totalAnswers >= 100 },
            { id: 'total_250', condition: totalAnswers >= 250 },
            { id: 'accuracy_80', condition: totalAnswers >= 20 && (totalCorrect / totalAnswers) >= 0.8 },
            { id: 'all_categories', condition: 
                stats.categoryTotal.videnskabsteori >= 10 && 
                stats.categoryTotal.metode >= 10 && 
                stats.categoryTotal.teori >= 10 
            }
        ];

        checks.forEach(check => {
            if (check.condition && !stats.achievements.includes(check.id)) {
                const achievement = this.ACHIEVEMENTS.find(a => a.id === check.id);
                if (achievement) {
                    newAchievements.push(achievement);
                }
            }
        });

        return newAchievements;
    },

    getLevelInfo(xp) {
        let currentLevel = this.LEVELS[0];
        let nextLevel = this.LEVELS[1];

        for (let i = this.LEVELS.length - 1; i >= 0; i--) {
            if (xp >= this.LEVELS[i].xpRequired) {
                currentLevel = this.LEVELS[i];
                nextLevel = this.LEVELS[i + 1] || null;
                break;
            }
        }

        const xpInLevel = xp - currentLevel.xpRequired;
        const xpForNext = nextLevel ? nextLevel.xpRequired - currentLevel.xpRequired : 0;
        const progress = nextLevel ? (xpInLevel / xpForNext) * 100 : 100;

        return {
            ...currentLevel,
            xp: xp,
            xpInLevel: xpInLevel,
            xpForNext: xpForNext,
            progress: Math.min(progress, 100),
            nextLevel: nextLevel
        };
    },

    getDailyProgress() {
        const stats = this.getStats();
        const today = new Date().toDateString();
        
        if (stats.lastPlayDate !== today) {
            return { correct: 0, total: 0, goal: this.DAILY_GOAL, progress: 0 };
        }

        return {
            correct: stats.todayCorrect,
            total: stats.todayTotal,
            goal: this.DAILY_GOAL,
            progress: Math.min((stats.todayCorrect / this.DAILY_GOAL) * 100, 100)
        };
    },

    getRecentAchievements(count = 3) {
        const stats = this.getStats();
        const recent = [];

        // Get last N achievements
        const achievementIds = stats.achievements.slice(-count).reverse();
        achievementIds.forEach(id => {
            // Handle daily achievements
            const baseId = id.replace(/_\d{4}.*$/, '').replace(/_.+$/, id.includes('daily') ? '' : '');
            const achievement = this.ACHIEVEMENTS.find(a => a.id === id || a.id === baseId);
            if (achievement && !recent.find(r => r.id === achievement.id)) {
                recent.push(achievement);
            }
        });

        return recent.slice(0, count);
    }
};

// Toast notifications
const Toast = {
    show(type, title, message, duration = 3000) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: '✓',
            xp: '⚡',
            achievement: '🏆',
            streak: '🔥'
        };

        toast.innerHTML = `
            <span class="toast-icon">${icons[type] || '📣'}</span>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                ${message ? `<div class="toast-message">${message}</div>` : ''}
            </div>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'fadeIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    xp(amount) {
        this.show('xp', `+${amount} XP`, null, 2000);
    },

    achievement(achievement) {
        this.show('achievement', achievement.name, `+${achievement.xp} XP`, 4000);
    },

    streak(count) {
        this.show('streak', `${count} i træk!`, 'Streak bonus aktiveret', 2000);
    }
};
