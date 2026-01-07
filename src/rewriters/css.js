import { rewriteUrl } from '../utils/url-resolver.js';

/**
 * Rewrite URLs in CSS content
 * Handles url() and @import statements
 */
export function rewriteCss(css, baseUrl, proxyOrigin) {
  let rewritten = css;

  // Rewrite url() references
  // Matches: url(path), url('path'), url("path")
  rewritten = rewritten.replace(
    /url\s*\(\s*(['"]?)([^'")]+)\1\s*\)/gi,
    (match, quote, url) => {
      const newUrl = rewriteUrl(url.trim(), baseUrl, proxyOrigin);
      return `url(${quote}${newUrl}${quote})`;
    }
  );

  // Rewrite @import 'url' and @import "url"
  rewritten = rewritten.replace(
    /@import\s+(['"])([^'"]+)\1/gi,
    (match, quote, url) => {
      const newUrl = rewriteUrl(url.trim(), baseUrl, proxyOrigin);
      return `@import ${quote}${newUrl}${quote}`;
    }
  );

  // Rewrite @import url() statements
  rewritten = rewritten.replace(
    /@import\s+url\s*\(\s*(['"]?)([^'")]+)\1\s*\)/gi,
    (match, quote, url) => {
      const newUrl = rewriteUrl(url.trim(), baseUrl, proxyOrigin);
      return `@import url(${quote}${newUrl}${quote})`;
    }
  );

  return rewritten;
}
