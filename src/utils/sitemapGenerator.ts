import { SITEMAP_ROUTES, AppRoute } from '../App';

export const DEFAULT_BASE_URL = 'https://www.akglsgroup.com';

export interface SitemapGeneratorOptions {
  baseUrl?: string;
  defaultChangefreq?: string;
  defaultPriority?: number;
  currentDate?: string;
}

export interface SitemapFileResult {
  success: boolean;
  totalUrls: number;
  writtenPaths: string[];
  xml: string;
  error?: string;
}

export interface SitemapSummary {
  totalUrls: number;
  baseUrl: string;
  categories: Record<string, number>;
  priorityDistribution: Record<string, number>;
  routes: {
    loc: string;
    priority: string;
    changefreq: string;
  }[];
}

/**
 * Escapes characters that are reserved in XML format.
 */
export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Formats and normalizes a route path for the sitemap.
 * Ensures leading slash, handles root, and standardizes trailing slash for directory paths.
 */
export function normalizeSitemapPath(path: string): string {
  if (!path || path === '/' || path === '') {
    return '/';
  }
  
  // Ensure leading slash
  let clean = path.startsWith('/') ? path : `/${path}`;

  // If it contains a dot with an extension (e.g. .html, .xml), don't append trailing slash
  if (/\.[a-z0-9]+$/i.test(clean)) {
    return clean;
  }

  // Ensure trailing slash for SEO canonical conformity
  return clean.endsWith('/') ? clean : `${clean}/`;
}

/**
 * Generates a valid Schema-compliant sitemap.xml string from an array of AppRoute objects.
 * Defaults to the SITEMAP_ROUTES array exported from src/App.tsx.
 */
export function generateSitemapXml(
  routes: AppRoute[] = SITEMAP_ROUTES,
  options: SitemapGeneratorOptions = {}
): string {
  const baseUrl = (options.baseUrl || DEFAULT_BASE_URL).replace(/\/+$/, '');
  const currentDate = options.currentDate || new Date().toISOString().split('T')[0];
  const defaultChangefreq = options.defaultChangefreq || 'weekly';
  const defaultPriority = options.defaultPriority ?? 0.8;

  const seenUrls = new Set<string>();
  const urlEntries: string[] = [];

  // 1. Ensure Root URL is placed first with 1.0 priority
  const rootLoc = `${baseUrl}/`;
  seenUrls.add(rootLoc);
  urlEntries.push(`  <url>
    <loc>${escapeXml(rootLoc)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`);

  // 2. Process all routes from App.tsx
  for (const route of routes) {
    if (!route || !route.path || route.path === '/' || route.id === 'home') {
      continue;
    }

    const normalizedPath = normalizeSitemapPath(route.path);
    const loc = `${baseUrl}${normalizedPath}`;

    if (seenUrls.has(loc)) {
      continue;
    }
    seenUrls.add(loc);

    const changefreq = route.changefreq || defaultChangefreq;
    const priority = typeof route.priority === 'number' 
      ? route.priority.toFixed(1) 
      : defaultPriority.toFixed(1);

    urlEntries.push(`  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>
`;
}

/**
 * Returns diagnostic metadata and a structured breakdown of the indexed routes.
 */
export function getSitemapSummary(
  routes: AppRoute[] = SITEMAP_ROUTES,
  baseUrl: string = DEFAULT_BASE_URL
): SitemapSummary {
  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const categories: Record<string, number> = {};
  const priorityDistribution: Record<string, number> = {};
  const processedRoutes: { loc: string; priority: string; changefreq: string }[] = [];
  const seenUrls = new Set<string>();

  // Include root
  seenUrls.add(`${normalizedBase}/`);
  processedRoutes.push({
    loc: `${normalizedBase}/`,
    priority: '1.0',
    changefreq: 'daily',
  });
  categories['Root / Core'] = (categories['Root / Core'] || 0) + 1;
  priorityDistribution['1.0'] = (priorityDistribution['1.0'] || 0) + 1;

  for (const route of routes) {
    if (!route.path || route.path === '/' || route.id === 'home') continue;
    const loc = `${normalizedBase}${normalizeSitemapPath(route.path)}`;
    if (seenUrls.has(loc)) continue;
    seenUrls.add(loc);

    const prio = typeof route.priority === 'number' ? route.priority.toFixed(1) : '0.8';
    priorityDistribution[prio] = (priorityDistribution[prio] || 0) + 1;

    const cat = (route as any).category || (
      route.path.includes('/blog/') ? 'Blog' :
      route.path.includes('/learning-hub/') ? 'Learning Hub' :
      route.path.includes('/case-study/') ? 'Case Studies' :
      route.path.includes('-services') ? 'Services' :
      route.path.includes('-company-') ? 'Locations' :
      'General'
    );
    categories[cat] = (categories[cat] || 0) + 1;

    processedRoutes.push({
      loc,
      priority: prio,
      changefreq: route.changefreq || 'weekly',
    });
  }

  return {
    totalUrls: processedRoutes.length,
    baseUrl: normalizedBase,
    categories,
    priorityDistribution,
    routes: processedRoutes,
  };
}

/**
 * Node.js-compatible synchronous file writer that writes sitemap.xml to both /public and /dist.
 * Gracefully no-ops in browser environments.
 */
export function writeSitemapFilesSync(options: {
  publicDir?: string;
  distDir?: string;
  baseUrl?: string;
  routes?: AppRoute[];
} = {}): SitemapFileResult {
  const routes = options.routes || SITEMAP_ROUTES;
  const xml = generateSitemapXml(routes, { baseUrl: options.baseUrl });
  const writtenPaths: string[] = [];

  // Check if running in a Node.js environment
  if (typeof window !== 'undefined' || typeof process === 'undefined' || !process.cwd) {
    return {
      success: false,
      totalUrls: 0,
      writtenPaths: [],
      xml,
      error: 'writeSitemapFilesSync can only be executed in a Node.js runtime environment.',
    };
  }

  try {
    const fs = (process as any).getBuiltinModule 
      ? (process as any).getBuiltinModule('fs') 
      : null;
    const path = (process as any).getBuiltinModule 
      ? (process as any).getBuiltinModule('path') 
      : null;

    if (!fs || !path) {
      throw new Error('Node fs and path modules are unavailable');
    }

    const rootDir = process.cwd();
    const publicDir = options.publicDir || path.resolve(rootDir, 'public');
    const distDir = options.distDir || path.resolve(rootDir, 'dist');

    // 1. Write to public directory
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(publicSitemapPath, xml, 'utf-8');
    writtenPaths.push(publicSitemapPath);

    // 2. Write to dist directory if it exists
    if (fs.existsSync(distDir)) {
      const distSitemapPath = path.join(distDir, 'sitemap.xml');
      fs.writeFileSync(distSitemapPath, xml, 'utf-8');
      writtenPaths.push(distSitemapPath);
    }

    const summary = getSitemapSummary(routes, options.baseUrl);

    return {
      success: true,
      totalUrls: summary.totalUrls,
      writtenPaths,
      xml,
    };
  } catch (error: any) {
    return {
      success: false,
      totalUrls: 0,
      writtenPaths,
      xml,
      error: error?.message || String(error),
    };
  }
}

/**
 * Node.js-compatible file writer that writes sitemap.xml to both /public and /dist.
 * Gracefully no-ops in browser environments.
 */
export async function writeSitemapFiles(options: {
  publicDir?: string;
  distDir?: string;
  baseUrl?: string;
  routes?: AppRoute[];
} = {}): Promise<SitemapFileResult> {
  const routes = options.routes || SITEMAP_ROUTES;
  const xml = generateSitemapXml(routes, { baseUrl: options.baseUrl });
  const writtenPaths: string[] = [];

  // Check if running in a Node.js environment
  if (typeof window !== 'undefined' || typeof process === 'undefined' || !process.cwd) {
    return {
      success: false,
      totalUrls: 0,
      writtenPaths: [],
      xml,
      error: 'writeSitemapFiles can only be executed in a Node.js runtime environment.',
    };
  }

  try {
    const fs = await import('fs');
    const path = await import('path');

    const rootDir = process.cwd();
    const publicDir = options.publicDir || path.resolve(rootDir, 'public');
    const distDir = options.distDir || path.resolve(rootDir, 'dist');

    // 1. Write to public directory
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(publicSitemapPath, xml, 'utf-8');
    writtenPaths.push(publicSitemapPath);

    // 2. Write to dist directory if it exists
    if (fs.existsSync(distDir)) {
      const distSitemapPath = path.join(distDir, 'sitemap.xml');
      fs.writeFileSync(distSitemapPath, xml, 'utf-8');
      writtenPaths.push(distSitemapPath);
    }

    const summary = getSitemapSummary(routes, options.baseUrl);

    return {
      success: true,
      totalUrls: summary.totalUrls,
      writtenPaths,
      xml,
    };
  } catch (error: any) {
    return {
      success: false,
      totalUrls: 0,
      writtenPaths,
      xml,
      error: error?.message || String(error),
    };
  }
}

// CLI auto-run when executed directly via `tsx src/utils/sitemapGenerator.ts`
if (typeof process !== 'undefined' && process.argv && process.argv[1]) {
  const isDirectRun = process.argv[1].endsWith('sitemapGenerator.ts') || process.argv[1].endsWith('sitemapGenerator.js');
  if (isDirectRun) {
    writeSitemapFiles().then((result) => {
      if (result.success) {
        console.log(`[Sitemap Generator] Generated sitemap.xml with ${result.totalUrls} indexed URLs!`);
        result.writtenPaths.forEach((p) => console.log(`  -> Written to: ${p}`));
      } else {
        console.error('[Sitemap Generator] Error writing sitemap:', result.error);
        process.exit(1);
      }
    });
  }
}
