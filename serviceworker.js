self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('meu-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/style.css',
        '/assets/js/app.js',
        '/assets/img/wallpaper.png',
        '/assets/icons/icon-192.png',
        '/assets/icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
