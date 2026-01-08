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

class LanthanumProxy {
  constructor() {
    this.filteredGames = [...GAMES];

    this.elements = {
      startForm: document.getElementById('start-form'),
      startUrl: document.getElementById('start-url'),
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
      this.navigate(this.elements.startUrl.value);
    });

    // Quick links
    document.querySelectorAll('.links a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigate(link.dataset.url);
      });
    });

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

  navigate(url) {
    // Add protocol if missing
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }

    // Encode URL using Ultraviolet
    const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);

    // Navigate to proxied URL
    window.location.href = encodedUrl;
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
          gameUrl = GAME_SOURCES.gn;
        } else {
          gameUrl = `${GAME_SOURCES.pn}/${slug}`;
        }

        this.navigate(gameUrl);
      });
    });
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

// Settings Manager
class SettingsManager {
  constructor() {
    this.settings = this.loadSettings();
    this.init();
  }

  loadSettings() {
    const saved = localStorage.getItem('lanthanum-settings');
    return saved ? JSON.parse(saved) : {
      theme: 'dark',
      aboutBlank: false
    };
  }

  saveSettings() {
    localStorage.setItem('lanthanum-settings', JSON.stringify(this.settings));
  }

  init() {
    // Apply saved theme
    this.applyTheme(this.settings.theme);

    // Theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
      // Mark saved theme as active
      if (btn.dataset.theme === this.settings.theme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      btn.addEventListener('click', () => {
        this.setTheme(btn.dataset.theme);
      });
    });

    // About:blank toggle
    const aboutBlankToggle = document.getElementById('aboutblank-toggle');
    const aboutBlankStatus = document.getElementById('aboutblank-status');

    if (aboutBlankToggle) {
      aboutBlankToggle.checked = this.settings.aboutBlank;
      if (aboutBlankStatus) {
        aboutBlankStatus.textContent = this.settings.aboutBlank ? 'Enabled' : 'Disabled';
      }

      aboutBlankToggle.addEventListener('change', () => {
        this.settings.aboutBlank = aboutBlankToggle.checked;
        if (aboutBlankStatus) {
          aboutBlankStatus.textContent = this.settings.aboutBlank ? 'Enabled' : 'Disabled';
        }
        this.saveSettings();
      });
    }

    // Check if we should open in about:blank on load
    this.checkAboutBlank();
  }

  setTheme(theme) {
    this.settings.theme = theme;
    this.applyTheme(theme);
    this.saveSettings();

    // Update active button
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  checkAboutBlank() {
    // If about:blank is enabled and we're not already in an about:blank page
    if (this.settings.aboutBlank && window.location.href !== 'about:blank' && !window.frameElement) {
      // Check if we've already opened in about:blank this session
      if (!sessionStorage.getItem('lanthanum-aboutblank-opened')) {
        this.openInAboutBlank();
      }
    }
  }

  openInAboutBlank() {
    // Mark that we're opening in about:blank
    sessionStorage.setItem('lanthanum-aboutblank-opened', 'true');

    // Open a new about:blank tab with our page in an iframe
    const newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Lanthanum</title>
          <style>
            * { margin: 0; padding: 0; }
            html, body { height: 100%; overflow: hidden; }
            iframe { width: 100%; height: 100%; border: none; }
          </style>
        </head>
        <body>
          <iframe src="${window.location.href}"></iframe>
        </body>
        </html>
      `);
      newWindow.document.close();
      // Close the original tab
      window.close();
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new LanthanumProxy();
  initRotatingTips();
  new SettingsManager();
});
