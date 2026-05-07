import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const { render } = await import('./dist/server/entry-server.js');

const template = readFileSync(join(__dirname, 'dist/index.html'), 'utf-8');
const appHtml = render('/');

const html = template.replace('<!--app-html-->', appHtml);
writeFileSync(join(__dirname, 'dist/index.html'), html);

console.log('Prerendered / → dist/index.html');
