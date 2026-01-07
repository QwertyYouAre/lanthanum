class RemoteBrowser {
  constructor() {
    this.sessionId = null;
    this.refreshInterval = null;
    this.isLoading = false;
    this.imageScale = 1;
    this.imageOffsetX = 0;
    this.imageOffsetY = 0;

    this.elements = {
      startScreen: document.getElementById('start-screen'),
      browserScreen: document.getElementById('browser-screen'),
      startForm: document.getElementById('start-form'),
      startUrl: document.getElementById('start-url'),
      urlInput: document.getElementById('url-input'),
      btnGo: document.getElementById('btn-go'),
      btnBack: document.getElementById('btn-back'),
      btnForward: document.getElementById('btn-forward'),
      btnRefresh: document.getElementById('btn-refresh'),
      btnHome: document.getElementById('btn-home'),
      browserView: document.getElementById('browser-view'),
      browserImage: document.getElementById('browser-image'),
      loading: document.getElementById('loading'),
      pageTitle: document.getElementById('page-title'),
    };

    this.init();
  }

  init() {
    // Start form
    this.elements.startForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.startBrowsing(this.elements.startUrl.value);
    });

    // Quick links
    document.querySelectorAll('.links a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.startBrowsing(link.dataset.url);
      });
    });

    // Navigation buttons
    this.elements.btnBack.addEventListener('click', () => this.goBack());
    this.elements.btnForward.addEventListener('click', () => this.goForward());
    this.elements.btnRefresh.addEventListener('click', () => this.refresh());
    this.elements.btnHome.addEventListener('click', () => this.goHome());

    // URL bar
    this.elements.btnGo.addEventListener('click', () => this.navigate(this.elements.urlInput.value));
    this.elements.urlInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.navigate(this.elements.urlInput.value);
    });

    // Browser view interactions
    this.elements.browserImage.addEventListener('click', (e) => this.handleClick(e));
    this.elements.browserView.addEventListener('wheel', (e) => this.handleScroll(e));

    // Keyboard input
    document.addEventListener('keydown', (e) => this.handleKeydown(e));
  }

  async startBrowsing(url) {
    this.showLoading(true);

    try {
      // Create session
      const response = await fetch('/api/session', { method: 'POST' });
      const data = await response.json();
      this.sessionId = data.sessionId;

      // Show browser screen
      this.elements.startScreen.classList.add('hidden');
      this.elements.browserScreen.classList.remove('hidden');

      // Navigate to URL (skip isLoading check since we just set it)
      await this.doNavigate(url);

      // Start refresh loop
      this.startRefreshLoop();
    } catch (error) {
      console.error('Error starting session:', error);
      alert('Failed to start browser session: ' + error.message);
      this.showLoading(false);
    }
  }

  async navigate(url) {
    if (!this.sessionId || this.isLoading) return;
    await this.doNavigate(url);
  }

  async doNavigate(url) {
    if (!this.sessionId) return;

    // Add protocol if missing
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }

    this.showLoading(true);
    this.elements.urlInput.value = url;

    try {
      const response = await fetch(`/api/session/${this.sessionId}/navigate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();

      if (data.error) throw new Error(data.error);

      this.updatePageInfo(data);
      await this.refreshScreenshot();
    } catch (error) {
      console.error('Navigation error:', error);
      this.elements.pageTitle.textContent = 'Error: ' + error.message;
    }

    this.showLoading(false);
  }

  async refreshScreenshot() {
    if (!this.sessionId) return;

    try {
      const timestamp = Date.now();
      this.elements.browserImage.src = `/api/session/${this.sessionId}/screenshot?t=${timestamp}&quality=85`;
    } catch (error) {
      console.error('Screenshot error:', error);
    }
  }

  startRefreshLoop() {
    // Refresh screenshot every 500ms for smooth updates
    this.refreshInterval = setInterval(() => {
      if (!this.isLoading) {
        this.refreshScreenshot();
      }
    }, 500);
  }

  stopRefreshLoop() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
      this.refreshInterval = null;
    }
  }

  async handleClick(e) {
    if (!this.sessionId || this.isLoading) return;

    const rect = this.elements.browserImage.getBoundingClientRect();
    const scaleX = this.elements.browserImage.naturalWidth / rect.width;
    const scaleY = this.elements.browserImage.naturalHeight / rect.height;

    const x = Math.round((e.clientX - rect.left) * scaleX);
    const y = Math.round((e.clientY - rect.top) * scaleY);

    try {
      const response = await fetch(`/api/session/${this.sessionId}/click`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ x, y }),
      });
      const data = await response.json();

      if (data.url) {
        this.updatePageInfo(data);
      }

      // Refresh after click
      setTimeout(() => this.refreshScreenshot(), 200);
    } catch (error) {
      console.error('Click error:', error);
    }
  }

  async handleScroll(e) {
    if (!this.sessionId) return;
    e.preventDefault();

    try {
      await fetch(`/api/session/${this.sessionId}/scroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deltaX: e.deltaX, deltaY: e.deltaY }),
      });

      // Refresh after scroll
      setTimeout(() => this.refreshScreenshot(), 100);
    } catch (error) {
      console.error('Scroll error:', error);
    }
  }

  async handleKeydown(e) {
    if (!this.sessionId) return;

    // Don't capture if typing in URL bar
    if (e.target === this.elements.urlInput || e.target === this.elements.startUrl) {
      return;
    }

    // Map common keys
    const keyMap = {
      'Backspace': 'Backspace',
      'Enter': 'Enter',
      'Escape': 'Escape',
      'Tab': 'Tab',
      'ArrowUp': 'ArrowUp',
      'ArrowDown': 'ArrowDown',
      'ArrowLeft': 'ArrowLeft',
      'ArrowRight': 'ArrowRight',
      ' ': 'Space',
    };

    const key = keyMap[e.key] || e.key;

    // For printable characters, type them
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      try {
        await fetch(`/api/session/${this.sessionId}/type`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: e.key }),
        });
        setTimeout(() => this.refreshScreenshot(), 100);
      } catch (error) {
        console.error('Type error:', error);
      }
    } else if (keyMap[e.key]) {
      e.preventDefault();
      try {
        await fetch(`/api/session/${this.sessionId}/keypress`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key }),
        });
        setTimeout(() => this.refreshScreenshot(), 100);
      } catch (error) {
        console.error('Keypress error:', error);
      }
    }
  }

  async goBack() {
    if (!this.sessionId || this.isLoading) return;
    this.showLoading(true);

    try {
      const response = await fetch(`/api/session/${this.sessionId}/back`, { method: 'POST' });
      const data = await response.json();
      this.updatePageInfo(data);
      await this.refreshScreenshot();
    } catch (error) {
      console.error('Back error:', error);
    }

    this.showLoading(false);
  }

  async goForward() {
    if (!this.sessionId || this.isLoading) return;
    this.showLoading(true);

    try {
      const response = await fetch(`/api/session/${this.sessionId}/forward`, { method: 'POST' });
      const data = await response.json();
      this.updatePageInfo(data);
      await this.refreshScreenshot();
    } catch (error) {
      console.error('Forward error:', error);
    }

    this.showLoading(false);
  }

  async refresh() {
    if (!this.sessionId || this.isLoading) return;
    this.showLoading(true);

    try {
      const response = await fetch(`/api/session/${this.sessionId}/refresh`, { method: 'POST' });
      const data = await response.json();
      this.updatePageInfo(data);
      await this.refreshScreenshot();
    } catch (error) {
      console.error('Refresh error:', error);
    }

    this.showLoading(false);
  }

  goHome() {
    this.stopRefreshLoop();
    this.elements.browserScreen.classList.add('hidden');
    this.elements.startScreen.classList.remove('hidden');

    // Close session
    if (this.sessionId) {
      fetch(`/api/session/${this.sessionId}`, { method: 'DELETE' });
      this.sessionId = null;
    }
  }

  updatePageInfo(data) {
    if (data.url) {
      this.elements.urlInput.value = data.url;
    }
    if (data.title) {
      this.elements.pageTitle.textContent = data.title;
      document.title = `${data.title} - Lanthanum`;
    }
  }

  showLoading(show) {
    this.isLoading = show;
    this.elements.loading.style.display = show ? 'flex' : 'none';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new RemoteBrowser();
});
