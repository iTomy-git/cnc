self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('cnc-kalkulator-v9').then(cache => cache.addAll([
    './index.html','./manifest.json','https://unpkg.com/dexie@4.0.3/dist/dexie.min.js'
  ])));
});
self.addEventListener('fetch', (event)=>{
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
