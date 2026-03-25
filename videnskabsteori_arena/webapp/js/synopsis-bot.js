// Synopsis Bot module - renders the bot UI and handles generation flow.
const SynopsisBot = {
    state: {
        loading: false,
        lastResult: null,
        lastError: ''
    },

    init() {
        this.render();
        this.bindEvents();
    },

    render() {
        const container = document.getElementById('synopsisContent');
        if (!container) return;

        container.innerHTML = `
            <div class="synopsis-layout">
                <section class="synopsis-panel">
                    <h2>🤖 Synopsis Bot</h2>
                    <p class="synopsis-subtitle">
                        Generer et 12-tals synopsis-udkast med repo-baseret kontekst og tydelig kildeafgrænsning.
                    </p>
                    <form id="synopsisForm" class="synopsis-form">
                        <label class="synopsis-label" for="topicInput">Emne</label>
                        <textarea id="topicInput" name="topic" rows="4" maxlength="500" required
                            placeholder="Fx: Hvordan påvirker AI-automatisering beslutningskvalitet i HR-screening?"></textarea>

                        <div class="synopsis-grid">
                            <div>
                                <label class="synopsis-label" for="gradeTarget">Niveau</label>
                                <select id="gradeTarget" name="gradeTarget">
                                    <option value="12">12-tals akademisk niveau</option>
                                    <option value="7">7-tals mellem-niveau</option>
                                    <option value="02">02 minimums-niveau</option>
                                </select>
                            </div>
                            <div>
                                <label class="synopsis-label" for="lengthTarget">Længde</label>
                                <select id="lengthTarget" name="lengthTarget">
                                    <option value="short">Kort (ca. 1 side)</option>
                                    <option value="medium" selected>Mellem (ca. 2 sider)</option>
                                    <option value="long">Lang (ca. 3 sider)</option>
                                </select>
                            </div>
                        </div>

                        <div class="synopsis-grid">
                            <div>
                                <label class="synopsis-label" for="tone">Tone</label>
                                <select id="tone" name="tone">
                                    <option value="academic" selected>Akademisk neutral</option>
                                    <option value="critical">Kritisk/analytisk</option>
                                    <option value="practical">Praksisnær</option>
                                </select>
                            </div>
                            <div class="synopsis-checkbox-row">
                                <input id="includeCounterarguments" type="checkbox" name="includeCounterarguments" checked />
                                <label for="includeCounterarguments">Inkluder kritiske modargumenter</label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary synopsis-submit" id="synopsisSubmitBtn">
                            Generer synopsis
                        </button>
                    </form>
                </section>

                <section class="synopsis-panel">
                    <div id="synopsisOutput" class="synopsis-output">
                        ${this.renderEmptyState()}
                    </div>
                </section>
            </div>
        `;
    },

    bindEvents() {
        const form = document.getElementById('synopsisForm');
        if (!form) return;

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            await this.handleSubmit(form);
        });
    },

    async handleSubmit(form) {
        const topic = (form.topic.value || '').trim();
        if (!topic) {
            this.renderError('Skriv et emne før du genererer.');
            return;
        }

        this.setLoading(true);
        const payload = {
            topic,
            gradeTarget: form.gradeTarget.value,
            lengthTarget: form.lengthTarget.value,
            tone: form.tone.value,
            includeCounterarguments: !!form.includeCounterarguments.checked
        };

        try {
            const response = await fetch('/api/synopsis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const rawText = await response.text();
            let data = {};
            try {
                data = rawText ? JSON.parse(rawText) : {};
            } catch {
                data = {};
            }
            if (!response.ok) {
                throw new Error(data.error || 'Uventet fejl ved generering.');
            }

            this.state.lastResult = data;
            this.state.lastError = '';
            this.renderResult(data);
        } catch (error) {
            this.renderError(error.message || 'Der opstod en fejl under generering.');
        } finally {
            this.setLoading(false);
        }
    },

    setLoading(loading) {
        this.state.loading = loading;
        const button = document.getElementById('synopsisSubmitBtn');
        if (button) {
            button.disabled = loading;
            button.textContent = loading ? 'Genererer...' : 'Generer synopsis';
        }

        if (loading) {
            const output = document.getElementById('synopsisOutput');
            if (output) {
                output.innerHTML = `
                    <div class="synopsis-loading">
                        <div class="synopsis-spinner"></div>
                        <p>Bygger synopsis med repo-kontekst...</p>
                    </div>
                `;
            }
        }
    },

    renderError(message) {
        this.state.lastError = message;
        const output = document.getElementById('synopsisOutput');
        if (!output) return;
        output.innerHTML = `
            <div class="synopsis-error">
                <strong>Fejl:</strong> ${this.escapeHtml(message)}
            </div>
            ${this.renderEmptyState()}
        `;
    },

    renderResult(result) {
        const output = document.getElementById('synopsisOutput');
        if (!output) return;

        const synopsis = result.synopsis || {};
        const sections = [
            { label: 'Problemfelt', value: synopsis.problemField },
            { label: 'Teori', value: synopsis.theory },
            { label: 'Metode', value: synopsis.method },
            { label: 'Analyse', value: synopsis.analysis },
            { label: 'Kritik og begrænsninger', value: synopsis.critique },
            { label: 'Konklusion', value: synopsis.conclusion }
        ];

        output.innerHTML = `
            <div class="synopsis-meta">
                <span>Repo-dækning: ${Math.round((result.coverageScore || 0) * 100)}%</span>
                <span>Mode: ${this.escapeHtml(result.coverageMode || 'unknown')}</span>
            </div>
            ${sections.map((section) => `
                <article class="synopsis-section">
                    <h3>${section.label}</h3>
                    <p>${this.formatParagraph(section.value || 'Ikke genereret')}</p>
                </article>
            `).join('')}
            <article class="synopsis-section">
                <h3>Kilde- og grundlagsmarkering</h3>
                <ul>
                    ${((result.sourceNotes || []).length ? result.sourceNotes : ['Ingen kildemarkering modtaget.'])
                        .map((note) => `<li>${this.escapeHtml(note)}</li>`).join('')}
                </ul>
            </article>
            <article class="synopsis-section">
                <h3>Repo-referencer (RAG)</h3>
                <ul>
                    ${((result.citations || []).length ? result.citations : [{ path: 'Ingen direkte repo-match', score: 0 }])
                        .map((citation) => `<li>${this.escapeHtml(citation.path)} (${Number(citation.score || 0).toFixed(2)})</li>`).join('')}
                </ul>
            </article>
        `;
    },

    renderEmptyState() {
        return `
            <div class="synopsis-empty">
                <h3>Klar til generering</h3>
                <p>Indtast et emne for at få et struktureret synopsis-udkast med metode, teori, kritik og konklusion.</p>
            </div>
        `;
    },

    formatParagraph(value) {
        return this.escapeHtml(value).replace(/\n/g, '<br>');
    },

    escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
};
