const CACHE_NAME = "qr-generator-cache-v1";
const urlsToCache = [
  "/generator/",
  "/generator/generator.html",
  "/generator/qrcode.min.js",
  "/generator/style.css"
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