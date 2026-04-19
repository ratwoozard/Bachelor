// Synopsis Bot module - renders the bot UI and handles generation flow.
const SynopsisBot = {
    state: {
        loading: false,
        lastResult: null,
        lastError: '',
        activeController: null
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
        if (this.state.loading) return;

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
            if (this.state.activeController) {
                this.state.activeController.abort();
            }

            const controller = new AbortController();
            this.state.activeController = controller;
            const timeoutId = setTimeout(() => controller.abort(), 35000);

            const response = await fetch('/api/synopsis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            const rawText = await response.text();
            let data = {};
            try {
                data = rawText ? JSON.parse(rawText) : {};
            } catch {
                data = {};
            }
            if (!response.ok) {
                throw new Error(this.normalizeErrorMessage(data.error) || `Uventet fejl ved generering (${response.status}).`);
            }

            this.state.lastResult = data;
            this.state.lastError = '';
            this.renderResult(data);
        } catch (error) {
            if (error && error.name === 'AbortError') {
                this.renderError('Anmodningen tog for lang tid og blev afbrudt. Prøv igen.');
            } else {
                this.renderError(this.normalizeErrorMessage(error && error.message ? error.message : error));
            }
        } finally {
            this.state.activeController = null;
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
        const coverageMode = this.normalizeValue(result.coverageMode || 'unknown');
        const sections = [
            { label: 'Problemfelt', value: this.normalizeValue(synopsis.problemField) },
            { label: 'Teori', value: this.normalizeValue(synopsis.theory) },
            { label: 'Metode', value: this.normalizeValue(synopsis.method) },
            { label: 'Analyse', value: this.normalizeValue(synopsis.analysis) },
            { label: 'Kritik og begrænsninger', value: this.normalizeValue(synopsis.critique) },
            { label: 'Konklusion', value: this.normalizeValue(synopsis.conclusion) }
        ];
        const modeClass = this.getModeClass(coverageMode);

        output.innerHTML = `
            <div class="synopsis-meta">
                <span>Repo-dækning: ${Math.round((result.coverageScore || 0) * 100)}%</span>
                <span>Mode: ${this.escapeHtml(coverageMode)}</span>
                <span class="synopsis-mode-badge ${modeClass}">${this.escapeHtml(this.getModeLabel(coverageMode))}</span>
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
                        .map((note) => `<li>${this.escapeHtml(this.normalizeValue(note))}</li>`).join('')}
                </ul>
            </article>
            <article class="synopsis-section">
                <h3>Repo-referencer (RAG)</h3>
                <ul>
                    ${((result.citations || []).length ? result.citations : [{ path: 'Ingen direkte repo-match', score: 0 }])
                        .map((citation) => `<li>${this.escapeHtml(this.normalizeValue(citation.path))} (${Number(citation.score || 0).toFixed(2)})</li>`).join('')}
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

    normalizeValue(value) {
        if (typeof value === 'string') return value;
        if (typeof value === 'number' || typeof value === 'boolean') return String(value);
        if (value == null) return '';
        if (Array.isArray(value)) {
            return value.map((entry) => this.normalizeValue(entry)).filter(Boolean).join('\n');
        }
        try {
            return JSON.stringify(value, null, 2);
        } catch {
            return String(value);
        }
    },

    normalizeErrorMessage(errorValue) {
        const message = this.normalizeValue(errorValue).trim();
        return message || 'Der opstod en fejl under generering.';
    },

    getModeClass(coverageMode) {
        if (coverageMode === 'repo_grounded') return 'grounded';
        if (coverageMode === 'generic_with_low_repo_support') return 'low-support';
        if (coverageMode.indexOf('fallback') !== -1) return 'fallback';
        return 'unknown';
    },

    getModeLabel(coverageMode) {
        const map = {
            repo_grounded: 'Repo-grounded',
            generic_with_low_repo_support: 'Lav repo-støtte',
            fallback_without_openrouter_key: 'Fallback (ingen API key)',
            fallback_after_openrouter_error: 'Fallback (LLM-fejl)'
        };
        return map[coverageMode] || 'Ukendt mode';
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
