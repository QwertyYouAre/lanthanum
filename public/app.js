// Games data - source: playernation (pn) and gn-math (gn)
const GAMES = [
  // === ACTION GAMES ===
  { name: '1v1.LoL', slug: '1v1lol', category: 'action', source: 'pn' },
  { name: 'Slope', slug: 'slope', category: 'action', source: 'pn' },
  { name: 'Slope 2', slug: 'slope2', category: 'action', source: 'pn' },
  { name: 'Ragdoll Archers', slug: 'ragdoll-archers', category: 'action', source: 'pn' },
  { name: 'Ragdoll Hit', slug: 'ragdoll-hit', category: 'action', source: 'pn' },
  { name: 'Tag', slug: 'tag', category: 'action', source: 'pn' },
  { name: 'Clash Royale', slug: 'clash-royale', category: 'action', source: 'pn' },
  { name: 'Brawl Stars', slug: 'brawlstars', category: 'action', source: 'pn' },
  { name: 'Buildnow.gg', slug: 'buildnowgg', category: 'action', source: 'pn' },
  { name: 'Stickman Hook', slug: 'stickman-hook', category: 'action', source: 'pn' },
  { name: 'N-Gon', slug: 'n-gon', category: 'action', source: 'pn' },
  { name: 'Funny Shooter', slug: 'funnyshooter', category: 'action', source: 'pn' },
  { name: 'Space Huggers', slug: 'spacehuggers', category: 'action', source: 'pn' },
  { name: 'Call of Duty', slug: 'callofduty', category: 'action', source: 'pn' },
  { name: 'Stumble Guys', slug: 'stumbleguys', category: 'action', source: 'pn' },
  { name: 'Gladihoppers', slug: 'gladihoppers', category: 'action', source: 'pn' },
  { name: 'Cluster Rush', slug: 'cluster-rush', category: 'action', source: 'pn' },
  { name: 'SUPERHOT', slug: 'superhot', category: 'action', source: 'pn' },

  // === RACING GAMES ===
  { name: 'Poly Track', slug: 'polytrack', category: 'racing', source: 'pn' },
  { name: 'Highway Racer', slug: 'highway-racer', category: 'racing', source: 'pn' },
  { name: 'Highway Racer 2', slug: 'highway-race2', category: 'racing', source: 'pn' },
  { name: 'Super Star Car', slug: 'superstarcar', category: 'racing', source: 'pn' },
  { name: 'Drive Mad', slug: 'drivemad', category: 'racing', source: 'pn' },
  { name: 'Smashy Road', slug: 'smashyroad', category: 'racing', source: 'pn' },
  { name: 'Sky Riders', slug: 'sky-riders', category: 'racing', source: 'pn' },
  { name: 'Race Survival', slug: 'racesurvival', category: 'racing', source: 'pn' },
  { name: 'Drift Hunters', slug: 'drift-hunters', category: 'racing', source: 'pn' },
  { name: 'Drift Boss', slug: 'drift-boss', category: 'racing', source: 'pn' },
  { name: 'Moto X3M', slug: 'motox3m', category: 'racing', source: 'pn' },

  // === IO GAMES ===
  { name: 'Slither.io', slug: 'slither', category: 'io', source: 'pn' },
  { name: 'Agar.io', slug: 'agar', category: 'io', source: 'pn' },
  { name: 'Yohoho.io', slug: 'yohoho', category: 'io', source: 'pn' },
  { name: 'Hole.io', slug: 'holeio', category: 'io', source: 'pn' },
  { name: 'Paper.io', slug: 'paperio', category: 'io', source: 'pn' },
  { name: 'Paper.io 2', slug: 'paperio2', category: 'io', source: 'pn' },
  { name: 'Skribbl.io', slug: 'skribbl', category: 'io', source: 'pn' },
  { name: 'Smash Karts', slug: 'smashkarts', category: 'io', source: 'pn' },
  { name: 'Territorial.io', slug: 'territorial', category: 'io', source: 'pn' },
  { name: 'Hexanaut.io', slug: 'hexa', category: 'io', source: 'pn' },
  { name: 'Deeeep.io', slug: 'dieeeeeep', category: 'io', source: 'pn' },
  { name: 'Arras.io', slug: 'arras', category: 'io', source: 'pn' },
  { name: 'Krunker.io', slug: 'krunker', category: 'io', source: 'pn' },
  { name: 'Shell Shockers', slug: 'shellshockers', category: 'io', source: 'pn' },

  // === SPORTS GAMES ===
  { name: 'Retro Bowl', slug: 'retrobowl', category: 'sports', source: 'pn' },
  { name: 'Retro Bowl College', slug: 'retrobowlcollege', category: 'sports', source: 'pn' },
  { name: 'Table Tennis', slug: 'table-tennis-world-tour', category: 'sports', source: 'pn' },
  { name: 'Basketball Stars', slug: 'basketball-stars', category: 'sports', source: 'pn' },
  { name: 'Basket Random', slug: 'basket-random', category: 'sports', source: 'pn' },
  { name: 'Baseball Bros', slug: 'baseball-bros', category: 'sports', source: 'pn' },
  { name: 'Boxing Random', slug: 'boxing-random', category: 'sports', source: 'pn' },

  // === PUZZLE GAMES ===
  { name: 'Buckshot Roulette', slug: 'buckshot-roullete', category: 'puzzle', source: 'pn' },
  { name: '2048', slug: '2048', category: 'puzzle', source: 'pn' },
  { name: 'Cookie Clicker', slug: 'cookie-clicker', category: 'puzzle', source: 'pn' },
  { name: 'Bloxorz', slug: 'bloxorz', category: 'puzzle', source: 'pn' },
  { name: 'Cut the Rope', slug: 'cut-the-rope', category: 'puzzle', source: 'pn' },

  // === GN-MATH GAMES (Horror/Adventure/Classic) ===
  { name: 'Minecraft', slug: 'minecraft', category: 'adventure', source: 'gn' },
  { name: 'FNAF Pizza Sim', slug: 'fnaf-pizzeria', category: 'horror', source: 'gn' },
  { name: 'FNAF Sister Location', slug: 'fnaf-sl', category: 'horror', source: 'gn' },
  { name: 'Bendy Ink Machine', slug: 'bendy', category: 'horror', source: 'gn' },
  { name: 'Baldi\'s Basics', slug: 'baldis-basics', category: 'horror', source: 'gn' },
  { name: 'Poppy Playtime', slug: 'poppy-playtime', category: 'horror', source: 'gn' },
  { name: 'Backrooms', slug: 'backrooms', category: 'horror', source: 'gn' },
  { name: 'Amanda Adventurer', slug: 'amanda', category: 'horror', source: 'gn' },
  { name: 'Tattletail', slug: 'tattletail', category: 'horror', source: 'gn' },
  { name: 'That\'s Not My Neighbor', slug: 'thats-not-my-neighbor', category: 'horror', source: 'gn' },
  { name: 'Celeste', slug: 'celeste', category: 'adventure', source: 'gn' },
  { name: 'Hollow Knight', slug: 'hollow-knight', category: 'adventure', source: 'gn' },
  { name: 'Cuphead', slug: 'cuphead', category: 'adventure', source: 'gn' },
  { name: 'Pizza Tower', slug: 'pizza-tower', category: 'adventure', source: 'gn' },
  { name: 'ULTRAKILL', slug: 'ultrakill', category: 'action', source: 'gn' },
  { name: 'Karlson', slug: 'karlson', category: 'action', source: 'gn' },
  { name: 'People Playground', slug: 'people-playground', category: 'sandbox', source: 'gn' },
  { name: 'Half Life', slug: 'half-life', category: 'action', source: 'gn' },
  { name: 'DOOM', slug: 'doom', category: 'action', source: 'gn' },
  { name: 'Quake III Arena', slug: 'quake3', category: 'action', source: 'gn' },
  { name: 'Hotline Miami', slug: 'hotline-miami', category: 'action', source: 'gn' },
  { name: 'OMORI', slug: 'omori', category: 'adventure', source: 'gn' },
  { name: 'Kindergarten', slug: 'kindergarten', category: 'adventure', source: 'gn' },
  { name: 'Kindergarten 2', slug: 'kindergarten-2', category: 'adventure', source: 'gn' },
  { name: 'Slime Rancher', slug: 'slime-rancher', category: 'adventure', source: 'gn' },

  // === CLASSIC/ARCADE GAMES ===
  { name: 'Angry Birds', slug: 'angry-birds', category: 'puzzle', source: 'gn' },
  { name: 'Crossy Road', slug: 'crossy-road', category: 'action', source: 'gn' },
  { name: 'Doodle Jump', slug: 'doodle-jump', category: 'action', source: 'gn' },
  { name: 'Geometry Dash', slug: 'geometry-dash', category: 'action', source: 'gn' },
  { name: 'Flappy Bird', slug: 'flappy-bird', category: 'action', source: 'gn' },
  { name: 'Subway Surfers', slug: 'subway-surfers', category: 'action', source: 'gn' },
  { name: 'Temple Run', slug: 'temple-run', category: 'action', source: 'gn' },
  { name: 'Fruit Ninja', slug: 'fruit-ninja', category: 'action', source: 'gn' },
  { name: 'Jetpack Joyride', slug: 'jetpack-joyride', category: 'action', source: 'gn' },

  // === TOWER DEFENSE ===
  { name: 'Bloons TD 5', slug: 'bloons-td-5', category: 'puzzle', source: 'gn' },
  { name: 'Bloons TD 4', slug: 'bloons-td-4', category: 'puzzle', source: 'gn' },
  { name: 'Kingdom Rush', slug: 'kingdom-rush', category: 'puzzle', source: 'gn' },

  // === DUCK LIFE SERIES ===
  { name: 'Duck Life', slug: 'duck-life', category: 'adventure', source: 'gn' },
  { name: 'Duck Life 2', slug: 'duck-life-2', category: 'adventure', source: 'gn' },
  { name: 'Duck Life 3', slug: 'duck-life-3', category: 'adventure', source: 'gn' },
  { name: 'Duck Life 4', slug: 'duck-life-4', category: 'adventure', source: 'gn' },

  // === MORE ACTION ===
  { name: 'Awesome Tanks', slug: 'awesome-tanks', category: 'action', source: 'gn' },
  { name: 'Awesome Tanks 2', slug: 'awesome-tanks-2', category: 'action', source: 'gn' },
  { name: 'Death Run 3D', slug: 'death-run-3d', category: 'action', source: 'gn' },
  { name: 'Vex 3', slug: 'vex-3', category: 'action', source: 'gn' },
  { name: 'Vex 4', slug: 'vex-4', category: 'action', source: 'gn' },
  { name: 'Vex 5', slug: 'vex-5', category: 'action', source: 'gn' },
  { name: 'Run 3', slug: 'run-3', category: 'action', source: 'gn' },
  { name: 'Happy Wheels', slug: 'happy-wheels', category: 'action', source: 'gn' },
  { name: 'Electric Man 2', slug: 'electric-man-2', category: 'action', source: 'gn' },

  // === IDLE/CLICKER ===
  { name: 'Adventure Capitalist', slug: 'adventure-capitalist', category: 'puzzle', source: 'gn' },
  { name: 'Doge Miner', slug: 'doge-miner', category: 'puzzle', source: 'gn' },
  { name: 'BitLife', slug: 'bitlife', category: 'puzzle', source: 'gn' },
];

// Game source URLs
const GAME_SOURCES = {
  pn: 'https://dev.playernation.drsanjay.com.au/storage/ag/g',
  gn: 'https://gn-mid.ok.kinda.baumgardner.us'
};

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
      <div class="game-card" data-slug="${game.slug}" data-source="${game.source || 'pn'}">
        <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%231e293b%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 fill=%22%236366f1%22 font-size=%2240%22>🎮</text></svg>" alt="${game.name}">
        <div class="game-name">${game.name}</div>
      </div>
    `).join('');

    // Add click handlers
    this.elements.gamesGrid.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.dataset.slug;
        const source = card.dataset.source;
        let gameUrl;

        if (source === 'gn') {
          // gn-math games - open the site directly and let user find the game
          gameUrl = GAME_SOURCES.gn;
        } else {
          // playernation games
          gameUrl = `${GAME_SOURCES.pn}/${slug}`;
        }

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
      this.elements.browserImage.src = `/api/session/${this.sessionId}/screenshot?t=${timestamp}&quality=90`;
    } catch (error) {
      console.error('Screenshot error:', error);
    }
  }

  startRefreshLoop() {
    // Refresh screenshot every 100ms for smooth updates
    this.refreshInterval = setInterval(() => {
      if (!this.isLoading) {
        this.refreshScreenshot();
      }
    }, 100);
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

// Rotating tips
const TIPS = [
  "Michael is the worst Tuba",
  "Neevthegreat Proxylover loves proxies",
  "KatyISD you cant stop me lol",
  "Lanthanum is the best element",
  "2.9 Minerloon is the best clash deck"
];

function initRotatingTips() {
  const tipElement = document.getElementById('rotating-tip');
  if (!tipElement) return;

  let lastIndex = -1;

  tipElement.addEventListener('click', () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * TIPS.length);
    } while (newIndex === lastIndex && TIPS.length > 1);
    lastIndex = newIndex;
    tipElement.textContent = TIPS[newIndex];
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new RemoteBrowser();
  initRotatingTips();
});
