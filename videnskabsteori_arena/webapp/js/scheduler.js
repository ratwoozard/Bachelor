// Scheduler module - handles spaced repetition logic
const Scheduler = {
    INTERVALS: [1, 3, 7, 14, 30], // days between reviews

    getItemSchedule(itemId) {
        const schedule = Storage.getSchedule();
        return schedule[itemId] || { box: 0, nextReview: null, lastReview: null };
    },

    recordReview(itemId, correct) {
        const current = this.getItemSchedule(itemId);
        let newBox = current.box;

        if (correct) {
            newBox = Math.min(current.box + 1, this.INTERVALS.length - 1);
        } else {
            newBox = Math.max(0, current.box - 1);
        }

        const intervalDays = this.INTERVALS[newBox];
        const nextReview = Date.now() + intervalDays * 24 * 60 * 60 * 1000;

        Storage.updateSchedule(itemId, {
            box: newBox,
            nextReview: nextReview,
            lastReview: Date.now()
        });

        Storage.recordAttempt(itemId, correct);
    },

    isDue(itemId) {
        const sched = this.getItemSchedule(itemId);
        if (!sched.nextReview) return false;
        return Date.now() >= sched.nextReview;
    },

    isNew(itemId) {
        const sched = this.getItemSchedule(itemId);
        return sched.lastReview === null;
    },

    getDueItems(pool) {
        return pool.filter(item => this.isDue(item.id));
    },

    getNewItems(pool) {
        return pool.filter(item => this.isNew(item.id));
    }
};
