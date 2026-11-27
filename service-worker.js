const CACHE_NAME = "qr-generator-cache-v5";
const urlsToCache = [
    "./",
    "./index.html",
    "./tables.html",
    "./manifest.json",
    "./qr-code-styling.js",
    "./icon-32.png",
    "./icon-180.png",
    "./icon-192.png",
    "./icon-512.png"
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
