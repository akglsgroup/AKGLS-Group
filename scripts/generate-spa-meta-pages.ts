/**
 * Post-build step (runs after `vite build`).
 *
 * The homepage and some sitemap routes (about, faq, international-seo-services, ...)
 * are rendered only by the React app. Without this step, crawlers that don't run
 * JavaScript (GPTBot, ClaudeBot, PerplexityBot, and Google's first pass) see an
 * empty <div id="root"></div> on those URLs - and for SPA-only routes, the
 * HOMEPAGE title and canonical.
 *
 * This step:
 *  1. Writes crawlable content (h1, lead, features, deliverables, FAQs, internal
 *     links) into #root of dist/index.html (homepage) and of a per-route copy for
 *     every SPA-only sitemap route. React replaces #root when it boots, so
 *     visitors still see the normal app; the static copy mirrors the same route
 *     data the app uses.
 *  2. Sets each route's own title, description, canonical, OG/Twitter tags.
 *  3. Adds JSON-LD: Organization + WebSite (home), WebPage + BreadcrumbList
 *     (others), FAQPage where the route has FAQs.
 *  4. Forces noindex on private tool pages (NOINDEX_ROUTE_IDS).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITEMAP_ROUTES, NOINDEX_ROUTE_IDS, AppRoute } from '../src/routesData';
import { DEFAULT_FAQS } from '../src/components/FAQ';

const SITE = 'https://www.akglsgroup.com';
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const shellPath = path.join(distDir, 'index.html');

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'AKGLS Group',
  legalName: 'AK Global Labs & Solutions',
  url: `${SITE}/`,
  logo: `${SITE}/pwa-512x512.png`,
};

const esc = (s: string) =>
  (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugOf = (r: AppRoute) => r.path.replace(/^\/+|\/+$/g, '');
const urlOf = (r: AppRoute) => (slugOf(r) ? `${SITE}/${slugOf(r)}/` : `${SITE}/`);
const indexable = SITEMAP_ROUTES.filter((r) => !NOINDEX_ROUTE_IDS.has(r.id));

function faqsFor(route: AppRoute): { q: string; a: string }[] {
  if (route.id === 'faq') return DEFAULT_FAQS.map((f) => ({ q: f.q, a: f.a }));
  return route.faqs || [];
}

function linksHtml(route: AppRoute): string {
  const isHome = route.id === 'home';
  let pool = indexable.filter((r) => r.id !== route.id && slugOf(r));
  if (!isHome) {
    const same = pool.filter((r) => r.category && r.category === route.category).slice(0, 8);
    const hubs = pool.filter((r) => ['seo-services', 'geo-services', 'aeo-services', 'blog', 'seo-case-studies', 'about', 'faq'].includes(r.id));
    pool = [...new Map([...same, ...hubs].map((r) => [r.id, r])).values()];
  }
  const groups = new Map<string, AppRoute[]>();
  for (const r of pool) {
    const k = r.category || 'More';
    groups.set(k, [...(groups.get(k) || []), r]);
  }
  let out = `<nav aria-label="${isHome ? 'All services and resources' : 'Related pages'}"><h2>${isHome ? 'Services &amp; resources' : 'Related pages'}</h2>`;
  for (const [cat, rs] of groups) {
    out += `<h3>${esc(cat)}</h3><ul>`;
    for (const r of rs) out += `<li><a href="/${slugOf(r)}/">${esc(r.h1 || r.title.split('|')[0].trim())}</a></li>`;
    out += `</ul>`;
  }
  return out + `</nav>`;
}

function bodyHtml(route: AppRoute): string {
  const h1 = route.h1 || route.title.split('|')[0].trim();
  let out = `<main style="max-width:960px;margin:0 auto;padding:48px 20px;color:#e5e7eb;font-family:system-ui,sans-serif;line-height:1.6">`;
  out += `<h1>${esc(h1)}</h1>`;
  if (route.highlight) out += `<p><strong>${esc(route.highlight)}</strong></p>`;
  out += `<p>${esc(route.leadParagraph || route.description)}</p>`;
  if (route.features?.length) {
    out += `<h2>What we deliver</h2>`;
    for (const f of route.features) out += `<h3>${esc(f.title)}</h3><p>${esc(f.desc)}</p>`;
  }
  if (route.deliverables?.length) {
    out += `<h2>Deliverables</h2><ul>${route.deliverables.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>`;
  }
  const faqs = faqsFor(route);
  if (faqs.length) {
    out += `<h2>Frequently asked questions</h2>`;
    for (const f of faqs) out += `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`;
  }
  out += linksHtml(route);
  out += `<p><a href="/">AKGLS Group</a> &middot; <a href="/about/">About</a> &middot; <a href="/faq/">FAQ</a> &middot; <a href="/case-study/">Case studies</a></p>`;
  return out + `</main>`;
}

function schemaFor(route: AppRoute): object[] {
  const url = urlOf(route);
  const blocks: object[] = [];
  if (route.id === 'home') {
    blocks.push({ '@context': 'https://schema.org', ...ORG, description: route.description });
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: 'AKGLS Group',
      publisher: { '@id': ORG['@id'] },
    });
  } else {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': route.id === 'about' ? 'AboutPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: route.title,
      description: route.description,
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'AKGLS Group' },
      publisher: ORG,
    });
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: route.h1 || route.title.split('|')[0].trim(), item: url },
      ],
    });
  }
  return blocks;
}

function faqSchemaFor(route: AppRoute): object | null {
  const faqs = faqsFor(route);
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

const ld = (o: object, id?: string) =>
  `<script type="application/ld+json"${id ? ` id="${id}"` : ''}>${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;

function setMeta(html: string, attr: 'name' | 'property', key: string, value: string): string {
  return html.replace(new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`), `$1${esc(value)}$2`);
}

function render(shell: string, route: AppRoute): string {
  const url = urlOf(route);
  const isHome = route.id === 'home';
  let html = shell;
  if (!isHome) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`);
    html = setMeta(html, 'name', 'description', route.description);
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
    html = setMeta(html, 'property', 'og:title', route.title);
    html = setMeta(html, 'property', 'og:description', route.description);
    html = setMeta(html, 'property', 'og:url', url);
    html = setMeta(html, 'name', 'twitter:title', route.title);
    html = setMeta(html, 'name', 'twitter:description', route.description);
    html = setMeta(html, 'name', 'twitter:url', url);
    // The shell's FAQPage block describes the homepage only.
    html = html.replace(/\s*<!-- FAQPage JSON-LD[\s\S]*?<\/script>/, '');
    const faq = faqSchemaFor(route);
    // Same id the FAQ component manages at runtime, so it is updated, not duplicated.
    if (faq) html = html.replace('</head>', `${ld(faq, 'faqpage-schema-jsonld')}\n</head>`);
  }
  html = html.replace('</head>', `${schemaFor(route).map((o) => ld(o)).join('\n')}\n</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml(route)}</div>`);
  return html;
}

function forceNoindex(file: string) {
  if (!fs.existsSync(file)) return false;
  let html = fs.readFileSync(file, 'utf-8');
  const tag = '<meta name="robots" content="noindex, follow" />';
  html = /<meta name="robots"[^>]*>/.test(html)
    ? html.replace(/<meta name="robots"[^>]*>/, tag)
    : html.replace('</head>', `${tag}\n</head>`);
  fs.writeFileSync(file, html, 'utf-8');
  return true;
}

if (!fs.existsSync(shellPath)) {
  console.error('dist/index.html not found - run `vite build` first.');
  process.exit(1);
}
const shell = fs.readFileSync(shellPath, 'utf-8');
if (!shell.includes('<div id="root"></div>')) {
  console.error('dist/index.html has already been processed - rebuild with `vite build` first.');
  process.exit(1);
}

let written = 0;
for (const route of SITEMAP_ROUTES) {
  const slug = slugOf(route);
  if (NOINDEX_ROUTE_IDS.has(route.id)) continue;
  const target = slug ? path.join(distDir, `${slug}.html`) : null;
  if (target && fs.existsSync(target)) continue; // a prerendered static page already exists
  if (!target) continue; // homepage handled last (it is the shell itself)
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, render(shell, route), 'utf-8');
  written++;
  console.log(`  + ${slug}.html`);
}

for (const id of NOINDEX_ROUTE_IDS) {
  const r = SITEMAP_ROUTES.find((x) => x.id === id);
  if (!r) continue;
  const file = path.join(distDir, `${slugOf(r)}.html`);
  if (!fs.existsSync(file)) fs.writeFileSync(file, shell, 'utf-8');
  forceNoindex(file);
  console.log(`  - ${slugOf(r)}.html (noindex)`);
}

const home = SITEMAP_ROUTES.find((r) => r.id === 'home');
if (home) {
  fs.writeFileSync(shellPath, render(shell, home), 'utf-8');
  console.log('  + index.html (homepage content + schema)');
}

console.log(`✓ SPA pages: ${written} written`);
