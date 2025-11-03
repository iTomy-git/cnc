self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('cnc-kalkulator-v12').then(cache => cache.addAll([
    '/cnc/index.html','/cnc/manifest.json'
  ])));
});
self.addEventListener('fetch', (event)=>{
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
