const CACHE_NAME = 'minecraft-search-pwa-v1';
const APP_SHELL = [
  './',
  './index.html',
  './data.js',
  './tools.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    for (const path of APP_SHELL) {
      try {
        const url = new URL(path, self.registration.scope);
        const response = await fetch(url, { cache: 'reload' });
        if (response.ok) await cache.put(url.href, response);
      } catch (error) {
        // One missing optional entry should not prevent the rest of the app from installing.
        console.warn('[Minecraft SEARCH PWA] Could not precache:', path, error);
      }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('minecraft-search-pwa-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Keep cross-origin data feeds online-only; don't interfere with their CORS behavior.
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone());
        }
        return response;
      } catch (error) {
        const cached = await caches.match(request) || await caches.match(new URL('./index.html', self.registration.scope).href) || await caches.match(new URL('./', self.registration.scope).href);
        if (cached) return cached;
        return new Response('オフラインです。初回はインターネットに接続してMinecraft SEARCHを開いてください。', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});
