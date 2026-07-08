const CACHE = 'fitplan-v1';
const URLS = [
  '/fitness-app/',
  '/fitness-app/index.html',
  '/fitness-app/css/style.css',
  '/fitness-app/js/app.js',
  '/fitness-app/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('chrome-extension')) return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
