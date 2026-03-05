// Arena module - handles quiz gameplay
const Arena = {
    sessionItems: [],
    currentIndex: 0,
    sessionStats: { total: 0, correct: 0, xp: 0 },
    selectedCategory: null,
    selectedMode: 'standard',
    maxQuestions: 10,
    answered: false,
    currentShuffledOptions: [],
    currentCorrectIndex: 0,

    init() {
        this.showStart();
    },

    quickStart(category) {
        this.selectedCategory = category;
        this.selectedMode = 'standard';
        this.startSession();
        App.showScreen('arena');
    },

    showStart() {
        const container = document.getElementById('arenaContent');
        const stats = Gamification.getStats();
        
        const categoryCounts = {
            all: Data.items.length,
            general: Data.items.filter(i => i.category !== 'case').length,
            videnskabsteori: Data.items.filter(i => i.category === 'videnskabsteori').length,
            metode: Data.items.filter(i => i.category === 'metode').length,
            teori: Data.items.filter(i => i.category === 'teori').length,
            case: Data.items.filter(i => i.category === 'case').length
        };
        
        const dueCount = Scheduler.getDueItems(Data.items).length;
        
        let html = `
            <div class="arena-start">
                <div class="arena-header">
                    <h2>⚔️ Arena</h2>
                    <p>Vælg din udfordring og test din viden</p>
                </div>
                
                <div class="arena-modes">
                    <div class="mode-card ${this.selectedMode === 'standard' ? 'selected' : ''}" onclick="Arena.selectMode('standard')">
                        <span class="mode-icon">📝</span>
                        <div class="mode-info">
                            <h4>Standard Quiz</h4>
                            <p>10 spørgsmål fra valgt kategori</p>
                        </div>
                    </div>
                    <div class="mode-card ${this.selectedMode === 'review' ? 'selected' : ''}" onclick="Arena.selectMode('review')">
                        <span class="mode-icon">🔄</span>
                        <div class="mode-info">
                            <h4>Spaced Repetition</h4>
                            <p>Fokusér på spørgsmål der kræver øvelse</p>
                        </div>
                        ${dueCount > 0 ? `<span class="mode-badge">${dueCount} klar</span>` : ''}
                    </div>
                    <div class="mode-card ${this.selectedMode === 'challenge' ? 'selected' : ''}" onclick="Arena.selectMode('challenge')">
                        <span class="mode-icon">⚡</span>
                        <div class="mode-info">
                            <h4>Hurtig udfordring</h4>
                            <p>5 spørgsmål, dobbelt XP!</p>
                        </div>
                    </div>
                </div>
                
                <div class="category-select">
                    <h4>Vælg kategori</h4>
                    <div class="category-chips">
                        <button class="category-chip ${this.selectedCategory === null ? 'selected' : ''}" onclick="Arena.selectCategory(null)">
                            🎲 Alle (${categoryCounts.all})
                        </button>
                        <button class="category-chip ${this.selectedCategory === 'general' ? 'selected' : ''}" onclick="Arena.selectCategory('general')">
                            📖 Generelle (${categoryCounts.general})
                        </button>
                        <button class="category-chip ${this.selectedCategory === 'videnskabsteori' ? 'selected' : ''}" onclick="Arena.selectCategory('videnskabsteori')">
                            📚 Videnskabsteori (${categoryCounts.videnskabsteori})
                        </button>
                        <button class="category-chip ${this.selectedCategory === 'metode' ? 'selected' : ''}" onclick="Arena.selectCategory('metode')">
                            🔬 Metode (${categoryCounts.metode})
                        </button>
                        <button class="category-chip ${this.selectedCategory === 'teori' ? 'selected' : ''}" onclick="Arena.selectCategory('teori')">
                            🧠 Teori (${categoryCounts.teori})
                        </button>
                        <button class="category-chip ${this.selectedCategory === 'case' ? 'selected' : ''}" onclick="Arena.selectCategory('case')">
                            🎓 Case/Bachelor (${categoryCounts.case})
                        </button>
                    </div>
                </div>
                
                <button class="btn-start-arena" onclick="Arena.startSession()">
                    Start Quiz
                </button>
            </div>
        `;
        
        container.innerHTML = html;
    },

    selectMode(mode) {
        this.selectedMode = mode;
        this.showStart();
    },

    selectCategory(category) {
        this.selectedCategory = category;
        this.showStart();
    },

    startSession() {
        // Configure based on mode
        if (this.selectedMode === 'challenge') {
            this.maxQuestions = 5;
        } else {
            this.maxQuestions = 10;
        }

        // Get items based on category selection
        let pool;
        if (this.selectedCategory === 'general') {
            // All non-case questions
            pool = Data.items.filter(i => i.category !== 'case');
        } else if (this.selectedCategory) {
            pool = Data.items.filter(i => i.category === this.selectedCategory);
        } else {
            pool = [...Data.items];
        }
        
        this.sessionItems = [];

        if (this.selectedMode === 'review') {
            // Prioritize due items for spaced repetition
            const dueItems = Scheduler.getDueItems(pool);
            const shuffledDue = this.shuffle([...dueItems]);
            this.sessionItems.push(...shuffledDue.slice(0, this.maxQuestions));
            
            // Fill with new items if needed
            if (this.sessionItems.length < this.maxQuestions) {
                const newItems = Scheduler.getNewItems(pool);
                const shuffledNew = this.shuffle([...newItems]);
                const remaining = this.maxQuestions - this.sessionItems.length;
                this.sessionItems.push(...shuffledNew.slice(0, remaining));
            }
        } else {
            // Standard/challenge: random selection
            this.sessionItems = this.shuffle([...pool]).slice(0, this.maxQuestions);
        }

        // Fill with random if still not enough
        if (this.sessionItems.length < this.maxQuestions) {
            const usedIds = new Set(this.sessionItems.map(i => i.id));
            const remaining = pool.filter(i => !usedIds.has(i.id));
            const shuffledRemaining = this.shuffle([...remaining]);
            const needed = this.maxQuestions - this.sessionItems.length;
            this.sessionItems.push(...shuffledRemaining.slice(0, needed));
        }
        
        this.currentIndex = 0;
        this.sessionStats = { total: 0, correct: 0, xp: 0 };
        this.showQuestion();
    },

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    showQuestion() {
        if (this.currentIndex >= this.sessionItems.length) {
            this.showComplete();
            return;
        }
        
        this.answered = false;
        const item = this.sessionItems[this.currentIndex];
        const progress = ((this.currentIndex) / this.sessionItems.length) * 100;
        
        // Shuffle options
        const optionsWithIndices = item.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
        this.currentShuffledOptions = this.shuffle([...optionsWithIndices]);
        this.currentCorrectIndex = this.currentShuffledOptions.findIndex(opt => opt.originalIndex === item.correct_index);
        
        const container = document.getElementById('arenaContent');
        
        let html = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <div class="quiz-progress">
                        <span class="quiz-progress-text">${this.currentIndex + 1}/${this.sessionItems.length}</span>
                        <div class="quiz-progress-bar">
                            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
                        </div>
                    </div>
                    <div class="quiz-score">
                        <span>✓</span> ${this.sessionStats.correct}
                    </div>
                    <div class="quiz-xp">
                        <span>⚡</span> ${this.sessionStats.xp} XP
                    </div>
                </div>
                
                <div class="quiz-question">
                    <span class="question-category">${item.lens}</span>
                    <div class="question-text">${item.prompt}</div>
                </div>
                
                <div class="quiz-options">
        `;
        
        this.currentShuffledOptions.forEach((option, index) => {
            html += `
                <button class="option-btn" onclick="Arena.selectAnswer(${index})" id="option-${index}">
                    ${option.text}
                </button>
            `;
        });
        
        html += `
                </div>
                
                <div class="quiz-feedback" id="feedback"></div>
                
                <div class="quiz-actions">
                    <button class="btn btn-primary" id="nextBtn" style="display: none;" onclick="Arena.nextQuestion()">
                        ${this.currentIndex < this.sessionItems.length - 1 ? 'Næste spørgsmål →' : 'Se resultat →'}
                    </button>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    },

    selectAnswer(selectedIndex) {
        if (this.answered) return;
        this.answered = true;
        
        const item = this.sessionItems[this.currentIndex];
        const correct = selectedIndex === this.currentCorrectIndex;
        
        // Update session stats
        this.sessionStats.total++;
        if (correct) this.sessionStats.correct++;
        
        // Record with gamification
        const xpMultiplier = this.selectedMode === 'challenge' ? 2 : 1;
        const rewards = Gamification.recordAnswer(correct, item.category);
        const xpGained = rewards.xp * xpMultiplier;
        this.sessionStats.xp += xpGained;
        
        // Record in scheduler
        Scheduler.recordReview(item.id, correct);
        
        // Show toasts
        if (correct) {
            Toast.xp(xpGained);
            const stats = Gamification.getStats();
            if (stats.streak > 1 && stats.streak % 5 === 0) {
                Toast.streak(stats.streak);
            }
        }
        
        rewards.achievements.forEach(a => {
            Toast.achievement(a);
        });
        
        if (rewards.levelUp) {
            setTimeout(() => App.showLevelUp(rewards.levelUp), 500);
        }
        
        // Update UI
        const options = document.querySelectorAll('.option-btn');
        options.forEach((btn, index) => {
            btn.disabled = true;
            if (index === this.currentCorrectIndex) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !correct) {
                btn.classList.add('incorrect');
            }
        });
        
        // Update XP display
        document.querySelector('.quiz-xp').innerHTML = `<span>⚡</span> ${this.sessionStats.xp} XP`;
        document.querySelector('.quiz-score').innerHTML = `<span>✓</span> ${this.sessionStats.correct}`;
        
        // Show feedback
        const feedback = document.getElementById('feedback');
        feedback.className = `quiz-feedback visible ${correct ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = `
            <div class="feedback-header">
                <span class="feedback-icon">${correct ? '✓' : '✗'}</span>
                <span class="feedback-result ${correct ? 'correct' : 'incorrect'}">
                    ${correct ? 'Korrekt!' : 'Forkert'}
                </span>
                <span class="feedback-xp">+${xpGained} XP</span>
            </div>
            <div class="feedback-explanation">${item.explanation}</div>
        `;
        
        // Show next button
        document.getElementById('nextBtn').style.display = 'inline-flex';
    },

    nextQuestion() {
        this.currentIndex++;
        this.showQuestion();
    },

    showComplete() {
        const sessionRewards = Gamification.recordSessionComplete(this.sessionStats.correct, this.sessionStats.total);
        this.sessionStats.xp += sessionRewards.xp;
        
        sessionRewards.achievements.forEach(a => {
            Toast.achievement(a);
        });
        
        const container = document.getElementById('arenaContent');
        const percentage = Math.round((this.sessionStats.correct / this.sessionStats.total) * 100);
        
        let message = '';
        let icon = '';
        if (percentage === 100) { message = 'Perfekt!'; icon = '🏆'; }
        else if (percentage >= 80) { message = 'Fremragende!'; icon = '🌟'; }
        else if (percentage >= 60) { message = 'Godt gået!'; icon = '👍'; }
        else if (percentage >= 40) { message = 'Øv dig lidt mere'; icon = '📚'; }
        else { message = 'Bliv ved med at øve!'; icon = '💪'; }
        
        const stats = Gamification.getStats();
        
        container.innerHTML = `
            <div class="session-complete">
                <div class="complete-icon">${icon}</div>
                <h2>Session færdig!</h2>
                <p class="complete-message">${message}</p>
                
                <div class="session-rewards">
                    <div class="reward-row">
                        <span class="reward-label">XP optjent</span>
                        <span class="reward-value xp">+${this.sessionStats.xp} XP</span>
                    </div>
                    <div class="reward-row">
                        <span class="reward-label">Rigtige svar</span>
                        <span class="reward-value correct">${this.sessionStats.correct}/${this.sessionStats.total}</span>
                    </div>
                    <div class="reward-row">
                        <span class="reward-label">Nuværende streak</span>
                        <span class="reward-value streak">🔥 ${stats.streak}</span>
                    </div>
                </div>
                
                <div class="session-stats">
                    <div class="session-stat">
                        <div class="session-stat-value">${percentage}%</div>
                        <div class="session-stat-label">Accuracy</div>
                    </div>
                    <div class="session-stat">
                        <div class="session-stat-value">${stats.bestStreak}</div>
                        <div class="session-stat-label">Bedste streak</div>
                    </div>
                    <div class="session-stat">
                        <div class="session-stat-value">${stats.xp}</div>
                        <div class="session-stat-label">Total XP</div>
                    </div>
                </div>
                
                <div class="nav-buttons">
                    <button class="btn" onclick="Arena.showStart()">Vælg ny kategori</button>
                    <button class="btn btn-primary" onclick="Arena.startSession()">Spil igen</button>
                </div>
            </div>
        `;
        
        // Update header stats
        App.updateHeaderStats();
    }
};
