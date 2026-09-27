import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITEMAP_ROUTES, AppRoute } from '../src/App';
import { renderPageHtml } from '../src/utils/pageTemplate';
import { generateSitemapXml, writeSitemapFiles, writeSitemapFilesSync } from '../src/utils/sitemapGenerator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

// List of handcrafted static pages that should be preserved unless explicitly forced
const PRESERVED_FILES = new Set([
  'geo-services.html',
  'crypto-growth-services.html'
]);

export { generateSitemapXml, writeSitemapFiles, writeSitemapFilesSync };

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

  // Generate sitemap.xml containing all routes from App.tsx SITEMAP_ROUTES
  writeSitemapFilesSync();

  return { created, skipped, total: SITEMAP_ROUTES.length - 1 };
}

// If run directly from CLI
const isDirectRun = process.argv[1] && (
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url) ||
  process.argv[1].includes('generate-static-pages')
);

if (isDirectRun) {
  console.log('🚀 Starting Automatic Static Page Generation for AKGLS Group...');
  const force = process.argv.includes('--force');
  const result = generateAllStaticPages(force);
  console.log(`✓ Completed static page generation: ${result.created} generated, ${result.skipped} preserved (Total routes: ${result.total})`);
  process.exit(0);
}
