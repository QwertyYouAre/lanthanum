document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('proxy-form');
  const input = document.getElementById('url-input');

  // Base64url encode (RFC 4648)
  function encode(str) {
    return btoa(unescape(encodeURIComponent(str)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');
  }

  function navigate(url) {
    // Add protocol if missing
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }
    window.location.href = '/browse/' + encode(url);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = input.value.trim();
    if (url) {
      navigate(url);
    }
  });

  // Quick links
  document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const url = link.dataset.url;
      if (url) {
        navigate(url);
      }
    });
  });
});
