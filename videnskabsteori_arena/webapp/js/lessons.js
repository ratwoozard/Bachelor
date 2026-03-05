// Lessons module - handles lesson display
const Lessons = {
    currentModule: null,
    currentChapter: null,

    init() {
        this.currentModule = null;
        this.currentChapter = null;
        this.showModules();
    },

    showModules() {
        const container = document.getElementById('lessonsContent');
        const modules = Data.lessons;

        let html = '<div class="lessons-modules">';
        
        Object.keys(modules).forEach(moduleId => {
            const module = modules[moduleId];
            const icons = { videnskabsteori: '📚', metode: '🔬', teori: '🧠' };
            html += `
                <div class="module-card" onclick="Lessons.showChapters('${moduleId}')">
                    <span class="module-icon">${icons[moduleId] || '📖'}</span>
                    <div class="module-info">
                        <h3>${module.title}</h3>
                        <p>${module.description || `${module.chapters.length} kapitler`}</p>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;
    },

    showChapters(moduleId) {
        this.currentModule = moduleId;
        const module = Data.lessons[moduleId];
        const container = document.getElementById('lessonsContent');

        let html = `
            <button class="back-btn" onclick="Lessons.init()">← Tilbage til moduler</button>
            <h2 style="margin-bottom: 1.5rem;">${module.title}</h2>
            <div class="chapter-list">
        `;

        module.chapters.forEach((chapter, index) => {
            html += `
                <button class="chapter-btn" onclick="Lessons.showChapter('${moduleId}', ${index})">
                    ${chapter.title}
                </button>
            `;
        });

        html += '</div>';
        container.innerHTML = html;
    },

    showChapter(moduleId, chapterIndex) {
        this.currentModule = moduleId;
        this.currentChapter = chapterIndex;
        const module = Data.lessons[moduleId];
        const chapter = module.chapters[chapterIndex];
        const container = document.getElementById('lessonsContent');

        const content = this.renderMarkdown(chapter.content);

        let html = `
            <button class="back-btn" onclick="Lessons.showChapters('${moduleId}')">← Tilbage til kapitler</button>
            <div class="lesson-content">
                <h2>${chapter.title}</h2>
                ${content}
            </div>
            <div class="nav-buttons" style="margin-top: 1.5rem;">
        `;

        if (chapterIndex > 0) {
            html += `<button class="btn" onclick="Lessons.showChapter('${moduleId}', ${chapterIndex - 1})">← Forrige</button>`;
        }
        if (chapterIndex < module.chapters.length - 1) {
            html += `<button class="btn btn-primary" onclick="Lessons.showChapter('${moduleId}', ${chapterIndex + 1})">Næste →</button>`;
        }

        html += '</div>';
        container.innerHTML = html;
    },

    renderMarkdown(text) {
        if (!text) return '';
        
        // Escape HTML
        let html = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        
        // Headers
        html = html.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');
        html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
        html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
        
        // Bold and italic
        html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Lists
        html = html.replace(/^- (.*?)$/gm, '<li>$1</li>');
        html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
        
        // Numbered lists
        html = html.replace(/^\d+\. (.*?)$/gm, '<li>$1</li>');
        
        // Paragraphs
        html = html.replace(/\n\n/g, '</p><p>');
        html = '<p>' + html + '</p>';
        
        // Clean up
        html = html.replace(/<p><\/p>/g, '');
        html = html.replace(/<p>(<h[234]>)/g, '$1');
        html = html.replace(/(<\/h[234]>)<\/p>/g, '$1');
        html = html.replace(/<p>(<ul>)/g, '$1');
        html = html.replace(/(<\/ul>)<\/p>/g, '$1');
        
        // Highlight markers
        html = html.replace(/\[HIGHLIGHT\](.*?)\[\/HIGHLIGHT\]/g, '<span class="highlight">$1</span>');
        html = html.replace(/\[SUCCESS\](.*?)\[\/SUCCESS\]/g, '<span class="success">$1</span>');
        html = html.replace(/\[ERROR\](.*?)\[\/ERROR\]/g, '<span class="error">$1</span>');
        
        return html;
    }
};
