/**
 * Cookie domain rewriting utilities
 *
 * When proxying, we need to handle Set-Cookie headers from target sites.
 * The main issue is that cookies are domain-specific, but the proxy
 * runs on a different domain. We handle this by:
 *
 * 1. Removing the Domain attribute (makes it a host-only cookie for proxy domain)
 * 2. Setting Path to "/" to ensure cookies are sent on all proxy requests
 * 3. Adjusting SameSite attribute for cross-origin compatibility
 */

/**
 * Rewrite Set-Cookie headers from target server
 * @param {string|string[]} setCookieHeaders - Original Set-Cookie header(s)
 * @returns {string[]} - Array of rewritten Set-Cookie headers
 */
export function rewriteSetCookieHeaders(setCookieHeaders) {
  if (!setCookieHeaders) return [];

  const headers = Array.isArray(setCookieHeaders)
    ? setCookieHeaders
    : [setCookieHeaders];

  return headers.map(header => {
    let rewritten = header;

    // Remove Domain attribute (makes cookie valid only for proxy domain)
    rewritten = rewritten.replace(/;\s*domain=[^;]+/gi, '');

    // Rewrite Path to "/" to ensure cookies work across all proxied paths
    rewritten = rewritten.replace(/;\s*path=[^;]*/gi, '');
    rewritten += '; Path=/';

    // Handle Secure attribute - keep it for HTTPS proxies
    // For local development on HTTP, you might want to remove it:
    // rewritten = rewritten.replace(/;\s*secure/gi, '');

    // Set SameSite to Lax if not present (prevents some CSRF issues)
    if (!/samesite/i.test(rewritten)) {
      rewritten += '; SameSite=Lax';
    }

    return rewritten;
  });
}

/**
 * Parse cookies from Cookie header
 * @param {string} cookieHeader - Cookie header value
 * @returns {Object} - Parsed cookies as key-value pairs
 */
export function parseCookies(cookieHeader) {
  if (!cookieHeader) return {};

  const cookies = {};
  cookieHeader.split(';').forEach(cookie => {
    const parts = cookie.trim().split('=');
    if (parts.length >= 2) {
      const name = parts[0].trim();
      const value = parts.slice(1).join('=').trim();
      cookies[name] = value;
    }
  });

  return cookies;
}

/**
 * Serialize cookies object to Cookie header value
 * @param {Object} cookies - Cookies as key-value pairs
 * @returns {string} - Cookie header value
 */
export function serializeCookies(cookies) {
  return Object.entries(cookies)
    .map(([name, value]) => `${name}=${value}`)
    .join('; ');
}
