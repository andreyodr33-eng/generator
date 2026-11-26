const CACHE_NAME = "qr-generator-cache-v4";
const urlsToCache = [
   "./",
    "./index.html",
    "./manifest.json",
    "./icon-32.png",
    "./icon-180.png",
    "./icon-192.png",
    "./icon-512.png",
    "./qr-code-styling.js,
    "./tables.html,
    "./favicon.ico
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
