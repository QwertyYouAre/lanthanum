/**
 * Content-Type detection utilities
 */

export function isHtml(contentType) {
  return /text\/html/i.test(contentType || '');
}

export function isCss(contentType) {
  return /text\/css/i.test(contentType || '');
}

export function isJavaScript(contentType) {
  return /javascript|ecmascript/i.test(contentType || '');
}

/**
 * Guess content type from URL if header is missing
 */
export function guessContentType(url) {
  try {
    const pathname = new URL(url).pathname.toLowerCase();
    const ext = pathname.split('.').pop();

    const types = {
      'html': 'text/html',
      'htm': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'mjs': 'application/javascript',
      'json': 'application/json',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'webp': 'image/webp',
      'ico': 'image/x-icon',
      'woff': 'font/woff',
      'woff2': 'font/woff2',
      'ttf': 'font/ttf',
      'eot': 'application/vnd.ms-fontobject',
    };

    return types[ext] || 'application/octet-stream';
  } catch {
    return 'application/octet-stream';
  }
}
