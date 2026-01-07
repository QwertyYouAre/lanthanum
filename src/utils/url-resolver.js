import { encode } from './url-codec.js';

/**
 * Resolve a relative or absolute URL against a base URL
 * Returns null for URLs that shouldn't be rewritten (data:, javascript:, etc.)
 */
export function resolveUrl(relativeUrl, baseUrl) {
  if (!relativeUrl || typeof relativeUrl !== 'string') {
    return null;
  }

  const trimmed = relativeUrl.trim();

  // Don't rewrite these URL types
  if (/^(data:|javascript:|mailto:|tel:|blob:|#)/i.test(trimmed)) {
    return null;
  }

  // Handle protocol-relative URLs
  if (trimmed.startsWith('//')) {
    try {
      const base = new URL(baseUrl);
      return `${base.protocol}${trimmed}`;
    } catch {
      return null;
    }
  }

  // Already absolute URL
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  // Resolve relative URL against base
  try {
    return new URL(trimmed, baseUrl).href;
  } catch {
    return null;
  }
}

/**
 * Rewrite a URL to go through the proxy
 */
export function rewriteUrl(originalUrl, baseUrl, proxyOrigin) {
  const resolved = resolveUrl(originalUrl, baseUrl);

  // Don't rewrite if resolution failed or URL should be kept as-is
  if (!resolved) {
    return originalUrl;
  }

  // Already a proxy URL
  if (resolved.startsWith(proxyOrigin)) {
    return originalUrl;
  }

  return `${proxyOrigin}/browse/${encode(resolved)}`;
}
