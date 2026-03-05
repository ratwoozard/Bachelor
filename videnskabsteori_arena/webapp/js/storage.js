// Storage module - handles localStorage for attempts, schedule, stats
const Storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('Storage error:', e);
        }
    },

    // Attempts
    getAttempts(itemId) {
        const all = this.get('vt_attempts', {});
        return all[itemId] || [];
    },

    recordAttempt(itemId, correct) {
        const all = this.get('vt_attempts', {});
        if (!all[itemId]) all[itemId] = [];
        all[itemId].push({ correct, timestamp: Date.now() });
        this.set('vt_attempts', all);
    },

    getAllAttempts() {
        return this.get('vt_attempts', {});
    },

    // Schedule for spaced repetition
    getSchedule() {
        return this.get('vt_schedule', {});
    },

    updateSchedule(itemId, data) {
        const schedule = this.getSchedule();
        schedule[itemId] = { ...schedule[itemId], ...data };
        this.set('vt_schedule', schedule);
    },

    // Clear all data
    clearAll() {
        localStorage.removeItem('vt_attempts');
        localStorage.removeItem('vt_schedule');
        localStorage.removeItem('vt_gamification');
    }
};
