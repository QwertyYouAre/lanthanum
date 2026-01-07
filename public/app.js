// Games data from playernation
const GAMES = [
  { name: '1v1.LoL', slug: '1v1lol', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/1v1lol.jpg' },
  { name: 'Slope', slug: 'slope', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/slope.jpg' },
  { name: 'Slope 2', slug: 'slope2', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/slope.jpg' },
  { name: 'Poly Track', slug: 'polytrack', category: 'racing', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/polytrack.jpg' },
  { name: 'Highway Racer', slug: 'highway-racer', category: 'racing', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/highway-racer.jpg' },
  { name: 'Highway Racer 2', slug: 'highway-race2', category: 'racing', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/highway-racer.jpg' },
  { name: 'Super Star Car', slug: 'superstarcar', category: 'racing', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/superstarcar.jpg' },
  { name: 'Drive Mad', slug: 'drivemad', category: 'racing', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/drivemad.jpg' },
  { name: 'Smashy Road', slug: 'smashyroad', category: 'racing', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/smashyroad.jpg' },
  { name: 'Ragdoll Archers', slug: 'ragdoll-archers', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/ragdollarchers.jpg' },
  { name: 'Ragdoll Hit', slug: 'ragdoll-hit', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/ragdollhit.jpg' },
  { name: 'Slither.io', slug: 'slither', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/slither.jpg' },
  { name: 'Agar.io', slug: 'agar', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/agar.jpg' },
  { name: 'Yohoho.io', slug: 'yohoho', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/yohoho.jpg' },
  { name: 'Hole.io', slug: 'holeio', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/holeio.jpg' },
  { name: 'Paper.io', slug: 'paperio', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/paperio.jpg' },
  { name: 'Paper.io 2', slug: 'paperio2', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/paperio.jpg' },
  { name: 'Skribbl.io', slug: 'skribbl', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/skribbl.jpg' },
  { name: 'Smash Karts', slug: 'smashkarts', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/smashkarts.jpg' },
  { name: 'Territorial.io', slug: 'territorial', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/territorial.jpg' },
  { name: 'Hexanaut.io', slug: 'hexa', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/hexanaut.jpg' },
  { name: 'Deeeep.io', slug: 'dieeeeeep', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/deeeep.jpg' },
  { name: 'Arras.io', slug: 'arras', category: 'io', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/arras.jpg' },
  { name: 'Tag', slug: 'tag', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/tag.jpg' },
  { name: 'Clash Royale', slug: 'clash-royale', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/clashroyale.jpg' },
  { name: 'Brawl Stars', slug: 'brawlstars', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/brawlstars.jpg' },
  { name: 'Buildnow.gg', slug: 'buildnowgg', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/buildnow.jpg' },
  { name: 'Retro Bowl', slug: 'retrobowl', category: 'sports', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/retrobowl.jpg' },
  { name: 'Retro Bowl College', slug: 'retrobowlcollege', category: 'sports', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/retrobowl.jpg' },
  { name: 'Table Tennis', slug: 'table-tennis-world-tour', category: 'sports', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/tabletennis.jpg' },
  { name: 'Stickman Hook', slug: 'stickman-hook', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/stickmanhook.jpg' },
  { name: 'N-Gon', slug: 'n-gon', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/ngon.jpg' },
  { name: 'Funny Shooter', slug: 'funnyshooter', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/funnyshooter.jpg' },
  { name: 'Space Huggers', slug: 'spacehuggers', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/spacehuggers.jpg' },
  { name: 'Space Waves', slug: 'spacewaves', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/spacewaves.jpg' },
  { name: 'Call of Duty', slug: 'callofduty', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/callofduty.jpg' },
  { name: 'Stumble Guys', slug: 'stumbleguys', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/stumbleguys.jpg' },
  { name: 'Gladihoppers', slug: 'gladihoppers', category: 'action', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/gladihoppers.jpg' },
  { name: 'Buckshot Roulette', slug: 'buckshot-roullete', category: 'puzzle', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/buckshot.jpg' },
  { name: 'Sky Riders', slug: 'sky-riders', category: 'racing', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/skyriders.jpg' },
  { name: 'Crushed Adventures', slug: 'crushed-adventures', category: 'puzzle', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/crushed.jpg' },
  { name: 'Race Survival', slug: 'racesurvival', category: 'racing', image: 'https://cdn.jsdelivr.net/gh/nicholastay/assets@main/games/racesurvival.jpg' },
];

const GAME_BASE_URL = 'https://dev.playernation.drsanjay.com.au/storage/ag/g';

class RemoteBrowser {
  constructor() {
    this.sessionId = null;
    this.refreshInterval = null;
    this.isLoading = false;
    this.imageScale = 1;
    this.imageOffsetX = 0;
    this.imageOffsetY = 0;
    this.filteredGames = [...GAMES];

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
      gamesGrid: document.getElementById('games-grid'),
      gameSearch: document.getElementById('game-search'),
      gameFilter: document.getElementById('game-filter'),
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

    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
    });

    // Games search and filter
    if (this.elements.gameSearch) {
      this.elements.gameSearch.addEventListener('input', () => this.filterGames());
    }
    if (this.elements.gameFilter) {
      this.elements.gameFilter.addEventListener('change', () => this.filterGames());
    }

    // Render games grid
    this.renderGames();
  }

  switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.toggle('active', content.id === `${tabName}-tab`);
    });
  }

  filterGames() {
    const search = this.elements.gameSearch?.value.toLowerCase() || '';
    const category = this.elements.gameFilter?.value || 'all';

    this.filteredGames = GAMES.filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(search);
      const matchesCategory = category === 'all' || game.category === category;
      return matchesSearch && matchesCategory;
    });

    this.renderGames();
  }

  renderGames() {
    if (!this.elements.gamesGrid) return;

    this.elements.gamesGrid.innerHTML = this.filteredGames.map(game => `
      <div class="game-card" data-slug="${game.slug}">
        <img src="${game.image}" alt="${game.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%231e293b%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 fill=%22%236366f1%22 font-size=%2240%22>🎮</text></svg>'">
        <div class="game-name">${game.name}</div>
      </div>
    `).join('');

    // Add click handlers
    this.elements.gamesGrid.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.dataset.slug;
        const gameUrl = `${GAME_BASE_URL}/${slug}`;
        this.startBrowsing(gameUrl);
      });
    });
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

    // Don't capture if typing in URL bar or game search
    if (e.target === this.elements.urlInput || e.target === this.elements.startUrl || e.target === this.elements.gameSearch) {
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
