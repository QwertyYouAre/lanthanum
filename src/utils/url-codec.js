// Base64url encoding (RFC 4648)
// URL-safe variant: replaces + with -, / with _, removes padding =

export function encode(url) {
  return Buffer.from(url, 'utf-8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function decode(encoded) {
  // Restore standard base64 characters
  let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');

  // Add back padding if needed
  const pad = base64.length % 4;
  if (pad) {
    base64 += '='.repeat(4 - pad);
  }

  return Buffer.from(base64, 'base64').toString('utf-8');
}

export function createProxyUrl(targetUrl, proxyOrigin) {
  return `${proxyOrigin}/browse/${encode(targetUrl)}`;
}

export function extractTargetUrl(proxyPath) {
  // proxyPath is like "/browse/aHR0cHM6..." or just "aHR0cHM6..."
  const encoded = proxyPath.replace(/^\/browse\//, '');
  return decode(encoded);
}
