self.addEventListener('install', event => {
  console.log('install', event);
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll(['/images/ryan.jpg']);
    }),
  );
});

self.addEventListener('activate', event => {
  console.log('activate', event);
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }),
  );
});
