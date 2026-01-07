(function() {
  'use strict';

  const config = window.__LANTHANUM__;
  if (!config) return;

  const { baseUrl, proxyOrigin, encodePath } = config;

  // Base64url encode (RFC 4648)
  function encode(str) {
    try {
      return btoa(unescape(encodeURIComponent(str)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '');
    } catch {
      return str;
    }
  }

  // Base64url decode
  function decode(str) {
    try {
      let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
      const pad = base64.length % 4;
      if (pad) base64 += '='.repeat(4 - pad);
      return decodeURIComponent(escape(atob(base64)));
    } catch {
      return str;
    }
  }

  // Resolve and convert URL to proxy URL
  function toProxyUrl(url) {
    if (!url || typeof url !== 'string') return url;

    const trimmed = url.trim();

    // Don't rewrite special URLs
    if (/^(data:|javascript:|mailto:|tel:|blob:|#)/i.test(trimmed)) {
      return url;
    }

    // Already a proxy URL
    if (trimmed.startsWith(proxyOrigin + encodePath)) {
      return url;
    }

    // Resolve relative URLs against the original base
    let absoluteUrl;
    try {
      absoluteUrl = new URL(trimmed, baseUrl).href;
    } catch {
      return url;
    }

    // Don't proxy the proxy origin itself
    if (absoluteUrl.startsWith(proxyOrigin)) {
      return url;
    }

    return proxyOrigin + encodePath + encode(absoluteUrl);
  }

  // Override XMLHttpRequest.open
  const originalXHROpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...args) {
    return originalXHROpen.call(this, method, toProxyUrl(url), ...args);
  };

  // Override fetch
  const originalFetch = window.fetch;
  window.fetch = function(input, init) {
    if (typeof input === 'string') {
      input = toProxyUrl(input);
    } else if (input instanceof Request) {
      input = new Request(toProxyUrl(input.url), input);
    } else if (input instanceof URL) {
      input = toProxyUrl(input.href);
    }
    return originalFetch.call(this, input, init);
  };

  // Override window.open
  const originalWindowOpen = window.open;
  window.open = function(url, ...args) {
    return originalWindowOpen.call(this, toProxyUrl(url), ...args);
  };

  // Override Element.setAttribute for URL attributes
  const urlAttributes = ['src', 'href', 'action', 'poster', 'data', 'formaction'];
  const originalSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, value) {
    if (urlAttributes.includes(name.toLowerCase()) && typeof value === 'string') {
      value = toProxyUrl(value);
    }
    return originalSetAttribute.call(this, name, value);
  };

  // Override property setters for common elements
  function overrideUrlProperty(ElementClass, prop) {
    const descriptor = Object.getOwnPropertyDescriptor(ElementClass.prototype, prop);
    if (descriptor && descriptor.set) {
      const originalSet = descriptor.set;
      Object.defineProperty(ElementClass.prototype, prop, {
        ...descriptor,
        set(value) {
          return originalSet.call(this, toProxyUrl(value));
        }
      });
    }
  }

  // Override src property
  [HTMLImageElement, HTMLScriptElement, HTMLIFrameElement, HTMLSourceElement, HTMLVideoElement, HTMLAudioElement, HTMLEmbedElement].forEach(El => {
    if (El) overrideUrlProperty(El, 'src');
  });

  // Override href property
  [HTMLAnchorElement, HTMLLinkElement, HTMLAreaElement].forEach(El => {
    if (El) overrideUrlProperty(El, 'href');
  });

  // Override action property on forms
  if (HTMLFormElement) {
    overrideUrlProperty(HTMLFormElement, 'action');
  }

  // Override poster property on video
  if (HTMLVideoElement) {
    overrideUrlProperty(HTMLVideoElement, 'poster');
  }

  // Handle form submissions
  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form && form.action) {
      const currentAction = form.getAttribute('action') || '';
      if (!currentAction.startsWith(proxyOrigin + encodePath)) {
        form.action = toProxyUrl(form.action);
      }
    }
  }, true);

  // Handle dynamically created elements with MutationObserver
  function rewriteElementUrls(el) {
    if (!el || !el.hasAttribute) return;

    urlAttributes.forEach(attr => {
      if (el.hasAttribute(attr)) {
        const value = el.getAttribute(attr);
        if (value && !value.startsWith(proxyOrigin + encodePath)) {
          const newValue = toProxyUrl(value);
          if (newValue !== value) {
            originalSetAttribute.call(el, attr, newValue);
          }
        }
      }
    });

    // Handle srcset
    if (el.hasAttribute('srcset')) {
      const srcset = el.getAttribute('srcset');
      const rewritten = srcset.split(',').map(entry => {
        const parts = entry.trim().split(/\s+/);
        if (parts[0]) {
          parts[0] = toProxyUrl(parts[0]);
        }
        return parts.join(' ');
      }).join(', ');
      originalSetAttribute.call(el, 'srcset', rewritten);
    }
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          rewriteElementUrls(node);
          if (node.querySelectorAll) {
            node.querySelectorAll('*').forEach(rewriteElementUrls);
          }
        }
      });
    });
  });

  // Start observing when DOM is ready
  if (document.documentElement) {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    });
  }

  // Override History API to rewrite URLs
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function(state, title, url) {
    return originalPushState.call(this, state, title, url ? toProxyUrl(url) : url);
  };

  history.replaceState = function(state, title, url) {
    return originalReplaceState.call(this, state, title, url ? toProxyUrl(url) : url);
  };

  // Override document.write to handle dynamic HTML
  const originalWrite = document.write;
  const originalWriteln = document.writeln;

  // Note: Full document.write rewriting is complex and may break some sites
  // This is a simplified version

  console.log('[Lanthanum] Client-side proxy injection loaded');

})();
