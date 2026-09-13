import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITEMAP_ROUTES, AppRoute } from '../src/routesData';
import { renderPageHtml } from '../src/utils/pageTemplate';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

// List of handcrafted static pages that should be preserved unless explicitly forced
const PRESERVED_FILES = new Set([
  'geo-services.html',
  'aeo-services.html',
  'seo-services.html',
  'hire-ai-seo-expert.html'
]);

export function generateSitemapXml(): string {
  const currentDate = new Date().toISOString().split('T')[0];
  const urls: string[] = [
    `  <url>
    <loc>https://akglsgroup.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`
  ];

  for (const route of SITEMAP_ROUTES) {
    if (!route.path || route.path === '/' || route.id === 'home') continue;
    const cleanPath = route.path.startsWith('/') ? route.path : `/${route.path}`;
    const formattedPath = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
    urls.push(`  <url>
    <loc>https://akglsgroup.com${formattedPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq || 'weekly'}</changefreq>
    <priority>${route.priority ? route.priority.toFixed(1) : '0.8'}</priority>
  </url>`);
  }

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  const sitemapPublic = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPublic, xmlContent, 'utf-8');

  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xmlContent, 'utf-8');
  }

  return xmlContent;
}

export function generateAllStaticPages(force = false): { created: number; skipped: number; total: number } {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  let created = 0;
  let skipped = 0;

  for (const route of SITEMAP_ROUTES) {
    // Skip home page as index.html is the React SPA root
    if (!route.path || route.path === '/' || route.id === 'home') {
      continue;
    }

    // Clean slug from path (e.g., "/technical-seo-services/" -> "technical-seo-services")
    const cleanSlug = route.path.replace(/^\/+|\/+$/g, '');
    if (!cleanSlug) continue;

    const fileName = `${cleanSlug}.html`;
    const targetPath = path.join(publicDir, fileName);

    // If file is explicitly preserved and already exists, do not overwrite unless forced
    if (PRESERVED_FILES.has(fileName) && fs.existsSync(targetPath) && !force) {
      skipped++;
      continue;
    }

    // Ensure parent directory exists (for paths like case-study/...)
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const htmlContent = renderPageHtml(route);
    fs.writeFileSync(targetPath, htmlContent, 'utf-8');
    created++;

    // If dist/ already exists, write there as well for instant production availability
    if (fs.existsSync(distDir)) {
      const distTarget = path.join(distDir, fileName);
      const distTargetDir = path.dirname(distTarget);
      if (!fs.existsSync(distTargetDir)) {
        fs.mkdirSync(distTargetDir, { recursive: true });
      }
      fs.writeFileSync(distTarget, htmlContent, 'utf-8');
    }
  }

  // Generate sitemap.xml containing all routes
  generateSitemapXml();

  return { created, skipped, total: SITEMAP_ROUTES.length - 1 };
}

// If run directly from CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('🚀 Starting Automatic Static Page Generation for AKGLS Group...');
  const force = process.argv.includes('--force');
  const result = generateAllStaticPages(force);
  console.log(`✓ Completed static page generation: ${result.created} generated, ${result.skipped} preserved (Total routes: ${result.total})`);
}
