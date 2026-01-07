import * as cheerio from 'cheerio';
import { rewriteUrl } from '../utils/url-resolver.js';
import { rewriteCss } from './css.js';

// HTML attributes that contain URLs
const URL_ATTRIBUTES = [
  'href', 'src', 'action', 'poster', 'data', 'background',
  'cite', 'formaction', 'icon', 'manifest', 'codebase'
];

// data-* attributes that commonly contain URLs
const DATA_URL_ATTRIBUTES = [
  'data-src', 'data-href', 'data-url', 'data-image',
  'data-background', 'data-poster', 'data-lazy-src',
  'data-srcset', 'data-original'
];

/**
 * Rewrite all URLs in HTML content
 */
export function rewriteHtml(html, baseUrl, proxyOrigin) {
  const $ = cheerio.load(html, { decodeEntities: false });

  // Rewrite standard URL attributes
  URL_ATTRIBUTES.forEach(attr => {
    $(`[${attr}]`).each((_, el) => {
      const $el = $(el);
      const value = $el.attr(attr);
      if (value) {
        $el.attr(attr, rewriteUrl(value, baseUrl, proxyOrigin));
      }
    });
  });

  // Rewrite srcset (special format: "url1 1x, url2 2x")
  $('[srcset]').each((_, el) => {
    const $el = $(el);
    const srcset = $el.attr('srcset');
    if (srcset) {
      $el.attr('srcset', rewriteSrcset(srcset, baseUrl, proxyOrigin));
    }
  });

  // Rewrite data-* URL attributes
  DATA_URL_ATTRIBUTES.forEach(attr => {
    $(`[${attr}]`).each((_, el) => {
      const $el = $(el);
      const value = $el.attr(attr);
      if (value) {
        if (attr === 'data-srcset') {
          $el.attr(attr, rewriteSrcset(value, baseUrl, proxyOrigin));
        } else {
          $el.attr(attr, rewriteUrl(value, baseUrl, proxyOrigin));
        }
      }
    });
  });

  // Rewrite inline style attributes
  $('[style]').each((_, el) => {
    const $el = $(el);
    const style = $el.attr('style');
    if (style && style.includes('url(')) {
      $el.attr('style', rewriteCss(style, baseUrl, proxyOrigin));
    }
  });

  // Rewrite <style> blocks
  $('style').each((_, el) => {
    const $el = $(el);
    const css = $el.html();
    if (css) {
      $el.html(rewriteCss(css, baseUrl, proxyOrigin));
    }
  });

  // Rewrite meta refresh URLs
  $('meta[http-equiv="refresh"]').each((_, el) => {
    const $el = $(el);
    const content = $el.attr('content');
    if (content) {
      $el.attr('content', rewriteMetaRefresh(content, baseUrl, proxyOrigin));
    }
  });

  // Inject client-side scripts into <head>
  const injectionScript = createInjectionScript(baseUrl, proxyOrigin);
  const $head = $('head');
  if ($head.length) {
    $head.prepend(injectionScript);
  } else {
    // No head, inject at beginning of html
    $.root().prepend(injectionScript);
  }

  // Add base tag if not present (helps with relative URLs in JS)
  if (!$('base').length) {
    $('head').prepend(`<base href="${proxyOrigin}/">`);
  }

  return $.html();
}

/**
 * Rewrite srcset attribute value
 * Format: "url1 1x, url2 2x, url3 100w"
 */
function rewriteSrcset(srcset, baseUrl, proxyOrigin) {
  return srcset.split(',').map(entry => {
    const parts = entry.trim().split(/\s+/);
    if (parts[0]) {
      parts[0] = rewriteUrl(parts[0], baseUrl, proxyOrigin);
    }
    return parts.join(' ');
  }).join(', ');
}

/**
 * Rewrite meta refresh content
 * Format: "5; url=https://example.com"
 */
function rewriteMetaRefresh(content, baseUrl, proxyOrigin) {
  return content.replace(/url\s*=\s*(['"]?)([^'"\s;]+)\1/i, (match, quote, url) => {
    return `url=${quote}${rewriteUrl(url.trim(), baseUrl, proxyOrigin)}${quote}`;
  });
}

/**
 * Create the injection script to add to pages
 */
function createInjectionScript(baseUrl, proxyOrigin) {
  return `
<script>
window.__LANTHANUM__ = {
  baseUrl: "${baseUrl}",
  proxyOrigin: "${proxyOrigin}",
  encodePath: "/browse/"
};
</script>
<script src="${proxyOrigin}/inject/client.js"></script>
`;
}
