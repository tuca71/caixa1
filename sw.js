const CACHE_NAME = "atitude-cell-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/manifest.json",
  "/icons/app-icon.png",
  "/icons/app-icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
