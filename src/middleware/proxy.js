import { decode, encode } from '../utils/url-codec.js';
import { rewriteUrl } from '../utils/url-resolver.js';
import { isHtml, isCss, guessContentType } from '../utils/content-type.js';
import { rewriteHtml } from '../rewriters/html.js';
import { rewriteCss } from '../rewriters/css.js';
import { rewriteSetCookieHeaders } from '../handlers/cookies.js';

/**
 * Main proxy middleware
 * Handles /browse/:encodedUrl requests
 */
export async function proxyMiddleware(req, res) {
  try {
    const proxyOrigin = `${req.protocol}://${req.get('host')}`;

    // Extract encoded URL from path (everything after /browse/)
    const encodedUrl = req.params[0] || req.params.encodedUrl;
    if (!encodedUrl) {
      return res.status(400).json({ error: 'No URL provided' });
    }

    // Decode target URL
    let targetUrl;
    try {
      targetUrl = decode(encodedUrl);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid encoded URL' });
    }

    // Parse and append query string if present
    const targetUrlObj = new URL(targetUrl);
    if (req.query && Object.keys(req.query).length > 0) {
      Object.entries(req.query).forEach(([key, value]) => {
        targetUrlObj.searchParams.append(key, value);
      });
    }

    // Build request headers
    const headers = buildRequestHeaders(req, targetUrlObj);

    // Fetch the target URL
    const response = await fetch(targetUrlObj.href, {
      method: req.method,
      headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
      redirect: 'manual', // Handle redirects ourselves
    });

    // Handle redirects
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location');
      if (location) {
        const absoluteLocation = new URL(location, targetUrlObj.href).href;
        const proxyLocation = `${proxyOrigin}/browse/${encode(absoluteLocation)}`;
        return res.redirect(response.status, proxyLocation);
      }
    }

    // Get content type
    const contentType = response.headers.get('content-type') || guessContentType(targetUrlObj.href);

    // Copy response headers (filtered)
    copyResponseHeaders(response, res, proxyOrigin);

    // Get response body as buffer
    const buffer = Buffer.from(await response.arrayBuffer());

    // Rewrite content based on type
    if (isHtml(contentType)) {
      const html = buffer.toString('utf-8');
      const rewritten = rewriteHtml(html, targetUrlObj.href, proxyOrigin);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.send(rewritten);
    }

    if (isCss(contentType)) {
      const css = buffer.toString('utf-8');
      const rewritten = rewriteCss(css, targetUrlObj.href, proxyOrigin);
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      return res.send(rewritten);
    }

    // Binary/other content - pass through
    res.setHeader('Content-Type', contentType);
    return res.send(buffer);

  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(502).json({
      error: 'Proxy Error',
      message: error.message
    });
  }
}

/**
 * Build headers for the outgoing request to target
 */
function buildRequestHeaders(req, targetUrl) {
  const headers = {
    'Host': targetUrl.host,
    'Origin': targetUrl.origin,
    'Referer': targetUrl.href,
    'User-Agent': req.get('user-agent') || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': req.get('accept') || 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': req.get('accept-language') || 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
  };

  // Forward cookies
  if (req.get('cookie')) {
    headers['Cookie'] = req.get('cookie');
  }

  // Forward content-type for POST requests
  if (req.get('content-type')) {
    headers['Content-Type'] = req.get('content-type');
  }

  return headers;
}

/**
 * Copy response headers from target to client (with filtering)
 */
function copyResponseHeaders(response, res, proxyOrigin) {
  // Headers to skip
  const skipHeaders = new Set([
    'content-encoding',       // We decode it
    'content-length',         // Changes after rewriting
    'transfer-encoding',      // We handle this
    'connection',             // Not needed
    'x-frame-options',        // Allow embedding
    'content-security-policy', // Would block our injections
    'content-security-policy-report-only',
    'x-content-type-options', // Can interfere
    'strict-transport-security', // Not applicable to proxy
  ]);

  response.headers.forEach((value, name) => {
    const lowerName = name.toLowerCase();

    if (skipHeaders.has(lowerName)) {
      return;
    }

    if (lowerName === 'set-cookie') {
      const rewritten = rewriteSetCookieHeaders(value);
      rewritten.forEach(cookie => res.append('Set-Cookie', cookie));
    } else if (lowerName === 'location') {
      // Rewrite redirect locations (shouldn't reach here due to manual redirect handling)
      res.setHeader(name, rewriteUrl(value, '', proxyOrigin));
    } else {
      res.setHeader(name, value);
    }
  });
}
