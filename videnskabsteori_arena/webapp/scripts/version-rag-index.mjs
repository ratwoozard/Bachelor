import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webappDir = path.resolve(__dirname, '..');
const dataDir = path.resolve(webappDir, 'data');
const indexPath = path.resolve(dataDir, 'rag-index.json');
const versionsDir = path.resolve(dataDir, 'versions');
const manifestPath = path.resolve(versionsDir, 'manifest.json');

function ensureIndexExists() {
    if (!fs.existsSync(indexPath)) {
        throw new Error('Mangler data/rag-index.json. Kør npm run build:rag først.');
    }
}

function readJson(filePath, fallback) {
    if (!fs.existsSync(filePath)) return fallback;
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch {
        return fallback;
    }
}

function main() {
    ensureIndexExists();
    const indexData = readJson(indexPath, {});
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const versionFile = `rag-index-${timestamp}.json`;

    fs.mkdirSync(versionsDir, { recursive: true });
    const targetPath = path.resolve(versionsDir, versionFile);
    fs.copyFileSync(indexPath, targetPath);

    const manifest = readJson(manifestPath, { latest: null, versions: [] });
    manifest.latest = versionFile;
    manifest.versions = [
        {
            file: versionFile,
            createdAt: new Date().toISOString(),
            documentCount: Number(indexData.documentCount || 0),
            chunkCount: Number(indexData.chunkCount || 0),
            builtAt: indexData.builtAt || null
        },
        ...(Array.isArray(manifest.versions) ? manifest.versions : [])
    ].slice(0, 50);

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log(`Versioned index written: ${targetPath}`);
    console.log(`Updated manifest: ${manifestPath}`);
}

main();
