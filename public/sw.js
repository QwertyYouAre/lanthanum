importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts('/uv/uv.sw.js');

const uv = new UVServiceWorker();

// Store for custom user-agent (will be set via message from main page)
let customUserAgent = null;

// Activate immediately
self.addEventListener('install', () => {
  self.skipWaiting();
});

// Take control of all pages immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for messages from the main page to set custom user-agent
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SET_USER_AGENT') {
    customUserAgent = event.data.userAgent;
    console.log('[SW] Custom user-agent set:', customUserAgent);
  }
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Debug logging
  if (url.includes('/service/')) {
    console.log('[SW] Intercepting:', url);
    console.log('[SW] Route match:', uv.route(event));
  }

  // Intercept bare server requests to add custom user-agent header
  if (url.includes('/bare/') && customUserAgent) {
    const modifiedRequest = new Request(event.request, {
      headers: new Headers(event.request.headers)
    });
    modifiedRequest.headers.set('X-Lanthanum-UA', customUserAgent);
    event.respondWith(fetch(modifiedRequest));
    return;
  }

  if (uv.route(event)) {
    event.respondWith(uv.fetch(event));
  }
});
