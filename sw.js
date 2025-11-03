self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('cnc-kalkulator-v11').then(cache => cache.addAll([
    '/cnc/index.html','/cnc/manifest.json',
    'https://unpkg.com/dexie@4.0.3/dist/dexie.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js'
  ])));
});
self.addEventListener('fetch', (event)=>{
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
