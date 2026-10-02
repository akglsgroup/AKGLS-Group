/**
 * PWA Service Worker & Cache Management Utility
 * Provides tools to inspect, purge, and force refresh client-side PWA and Service Worker caches.
 */

export async function forcePwaCacheRefresh(options?: {
  onStatusUpdate?: (status: string) => void;
  bypassBrowserCache?: boolean;
}): Promise<void> {
  const { onStatusUpdate, bypassBrowserCache = true } = options || {};

  try {
    onStatusUpdate?.('Clearing Service Worker Cache...');

    // 1. Purge all CacheStorage buckets
    if (typeof window !== 'undefined' && 'caches' in window) {
      try {
        const cacheKeys = await window.caches.keys();
        await Promise.all(
          cacheKeys.map(async (key) => {
            try {
              await window.caches.delete(key);
            } catch (e) {
              console.warn(`[PWA] Failed to delete cache key "${key}":`, e);
            }
          })
        );
      } catch (err) {
        console.warn('[PWA] Error reading cache keys:', err);
      }
    }

    onStatusUpdate?.('Updating Service Workers...');

    // 2. Unregister or trigger immediate update on all active Service Workers
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(
          registrations.map(async (registration) => {
            try {
              // Send skipWaiting signal if waiting worker exists
              if (registration.waiting) {
                registration.waiting.postMessage({ type: 'SKIP_WAITING' });
              }
              // Attempt update
              await registration.update();
              // Unregister to ensure completely clean slate on next reload
              await registration.unregister();
            } catch (e) {
              console.warn('[PWA] Failed to cycle registration:', e);
            }
          })
        );
      } catch (err) {
        console.warn('[PWA] Error accessing service worker registrations:', err);
      }
    }

    onStatusUpdate?.('Reloading...');

    // Short delay to let animations/feedback render
    await new Promise((resolve) => setTimeout(resolve, 350));

    // 3. Force hard browser reload bypassing HTTP cache
    if (typeof window !== 'undefined') {
      if (bypassBrowserCache) {
        // Append cache-busting timestamp parameter and reload cleanly
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('_pwa_refresh', Date.now().toString());
        window.location.replace(currentUrl.toString());
      } else {
        window.location.reload();
      }
    }
  } catch (error) {
    console.error('[PWA] Force refresh encountered an unexpected error:', error);
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }
}
