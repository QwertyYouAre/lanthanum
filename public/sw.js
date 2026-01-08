importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts('/uv/uv.sw.js');

const uv = new UVServiceWorker();

// Activate immediately
self.addEventListener('install', () => {
  self.skipWaiting();
});

// Take control of all pages immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (uv.route(event)) {
    event.respondWith(uv.fetch(event));
  }
});
