/**
 * Post-build step (runs after `vite build`).
 *
 * Some sitemap routes (about, faq, international-seo-services, ...) are rendered
 * only by the React app, so no static page exists for them in dist/. Without one,
 * Apache falls back to dist/index.html, and crawlers see the HOMEPAGE title,
 * description and canonical on those URLs.
 *
 * For every sitemap route that still has no dist/<slug>.html, this writes a copy
 * of the built SPA shell with that route's own title, description, canonical,
 * Open Graph/Twitter tags, and a crawlable <h1> + lead paragraph inside #root
 * (React replaces it when it boots, so visitors see the normal app).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITEMAP_ROUTES } from '../src/routesData';

const SITE = 'https://www.akglsgroup.com';
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const shellPath = path.join(distDir, 'index.html');

function esc(s: string): string {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function setMeta(html: string, attr: 'name' | 'property', key: string, value: string): string {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  return html.replace(re, `$1${esc(value)}$2`);
}

if (!fs.existsSync(shellPath)) {
  console.error('dist/index.html not found - run `vite build` first.');
  process.exit(1);
}

const shell = fs.readFileSync(shellPath, 'utf-8');
let written = 0;

for (const route of SITEMAP_ROUTES) {
  const slug = route.path.replace(/^\/+|\/+$/g, '');
  if (!slug) continue; // homepage is index.html itself

  const target = path.join(distDir, `${slug}.html`);
  if (fs.existsSync(target)) continue; // a prerendered static page already exists

  const url = `${SITE}/${slug}/`;
  const title = route.title;
  const description = route.description || route.leadParagraph || '';
  const h1 = route.h1 || route.title.split('|')[0].trim();
  const lead = route.leadParagraph || route.description || '';

  let html = shell;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = setMeta(html, 'name', 'description', description);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', description);
  html = setMeta(html, 'name', 'twitter:url', url);
  // The homepage FAQPage schema describes the homepage only - drop it on other URLs.
  html = html.replace(/\s*<!-- FAQPage JSON-LD[\s\S]*?<\/script>/, '');
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><main><h1>${esc(h1)}</h1><p>${esc(lead)}</p></main></div>`
  );

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html, 'utf-8');
  written++;
  console.log(`  + ${slug}.html`);
}

console.log(`✓ SPA meta pages: ${written} written`);
