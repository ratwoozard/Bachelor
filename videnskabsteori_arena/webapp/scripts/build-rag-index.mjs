import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webappDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(webappDir, '..', '..');
const outputDir = path.resolve(webappDir, 'data');
const outputPath = path.resolve(outputDir, 'rag-index.json');

const includeDirectories = [
    path.resolve(repoRoot, 'docs')
];

const includeFiles = [
    path.resolve(repoRoot, 'README.md'),
    path.resolve(repoRoot, 'AKADEMISK_RAMME.md'),
    path.resolve(repoRoot, 'KVALITET_OG_SKRIVEGUIDE.md'),
    path.resolve(repoRoot, 'UDDANNELSE_OG_PENSUM.md'),
    path.resolve(repoRoot, 'CASE_KNOWLEDGE.md')
];

const allowedExtensions = new Set(['.md', '.txt']);
const stopWords = new Set([
    'og', 'i', 'på', 'af', 'for', 'med', 'til', 'en', 'et', 'det', 'de', 'der',
    'som', 'er', 'at', 'om', 'den', 'har', 'fra', 'ved', 'kan', 'skal', 'man',
    'the', 'and', 'to', 'of', 'in', 'a', 'is', 'that', 'with', 'as', 'be', 'or'
]);

function normalizeText(value) {
    return String(value || '')
        .replace(/\r\n/g, '\n')
        .replace(/\t/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function tokenize(text) {
    return normalizeText(text)
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .split(' ')
        .filter((token) => token.length > 1 && !stopWords.has(token));
}

function tokenFrequency(tokens) {
    const freq = {};
    tokens.forEach((token) => {
        freq[token] = (freq[token] || 0) + 1;
    });
    return freq;
}

function toRelativePath(absPath) {
    return path.relative(repoRoot, absPath).replace(/\\/g, '/');
}

function chunkText(text, maxLength = 1400) {
    const paragraphs = String(text || '').split(/\n{2,}/);
    const chunks = [];
    let current = '';

    for (const paragraph of paragraphs) {
        const clean = paragraph.trim();
        if (!clean) continue;

        if ((current + '\n\n' + clean).length > maxLength && current) {
            chunks.push(current.trim());
            current = clean;
        } else {
            current += (current ? '\n\n' : '') + clean;
        }
    }

    if (current.trim()) {
        chunks.push(current.trim());
    }
    return chunks;
}

function walkDir(dirPath, collector) {
    if (!fs.existsSync(dirPath)) return;
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const absolute = path.resolve(dirPath, entry.name);
        if (entry.isDirectory()) {
            if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
            walkDir(absolute, collector);
            continue;
        }

        const ext = path.extname(entry.name).toLowerCase();
        if (allowedExtensions.has(ext)) {
            collector.add(absolute);
        }
    }
}

function collectSourceFiles() {
    const files = new Set();

    includeDirectories.forEach((dirPath) => walkDir(dirPath, files));
    includeFiles.forEach((filePath) => {
        if (fs.existsSync(filePath)) {
            files.add(filePath);
        }
    });

    return [...files];
}

function buildIndex() {
    const sourceFiles = collectSourceFiles();
    const chunks = [];
    const docs = [];

    sourceFiles.forEach((filePath) => {
        const raw = fs.readFileSync(filePath, 'utf8');
        const text = normalizeText(raw);
        if (!text) return;

        const fileChunks = chunkText(text);
        docs.push({
            path: toRelativePath(filePath),
            chunkCount: fileChunks.length
        });

        fileChunks.forEach((chunkTextValue, index) => {
            const tokens = tokenize(chunkTextValue);
            chunks.push({
                id: `${toRelativePath(filePath)}#${index + 1}`,
                path: toRelativePath(filePath),
                text: chunkTextValue,
                tokenFreq: tokenFrequency(tokens)
            });
        });
    });

    return {
        builtAt: new Date().toISOString(),
        documentCount: docs.length,
        chunkCount: chunks.length,
        docs,
        chunks
    };
}

function main() {
    const index = buildIndex();
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(index), 'utf8');
    console.log(`RAG index built: ${index.chunkCount} chunks from ${index.documentCount} docs`);
    console.log(`Output: ${outputPath}`);
}

main();
