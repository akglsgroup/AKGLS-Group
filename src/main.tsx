import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import { SITEMAP_ROUTES, NOINDEX_ROUTE_IDS } from './routesData';
import './index.css';

// Soft-404 guard: Apache serves this SPA shell (HTTP 200) for ANY unknown URL, so
// typos, old aliases and private app routes would otherwise be indexable copies of
// the homepage. Anything that is not a sitemap route gets noindex (Google renders
// JS and honours a robots meta added here).
{
  const norm = (p: string) => '/' + p.toLowerCase().replace(/\.html$/, '').replace(/^\/+|\/+$/g, '');
  const known = new Set(SITEMAP_ROUTES.filter((r) => !NOINDEX_ROUTE_IDS.has(r.id)).map((r) => norm(r.path)));
  known.add('/');
  known.add('/index');
  if (!known.has(norm(window.location.pathname))) {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, follow';
    document.head.appendChild(robots);
  }
}

// Register Service Worker for offline static caching & speed improvements
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('PWA: New static assets available. Updating cache...');
    updateSW(true);
  },
  onOfflineReady() {
    console.log('PWA: Static content precached for offline access.');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

