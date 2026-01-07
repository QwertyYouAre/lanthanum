import puppeteer from 'puppeteer';
import { v4 as uuidv4 } from 'uuid';

class BrowserManager {
  constructor() {
    this.browser = null;
    this.sessions = new Map(); // sessionId -> { page, lastActivity }
    this.sessionTimeout = 10 * 60 * 1000; // 10 minutes
  }

  async init() {
    if (this.browser) return;

    const launchOptions = {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--window-size=1920,1080',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
        '--disable-site-isolation-trials',
      ],
    };

    // Use system Chromium if specified (for Docker/container environments)
    if (process.env.PUPPETEER_EXECUTABLE_PATH) {
      launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
    }

    this.browser = await puppeteer.launch(launchOptions);

    // Clean up inactive sessions periodically
    setInterval(() => this.cleanupSessions(), 60000);

    console.log('[BrowserManager] Browser launched');
  }

  async createSession() {
    if (!this.browser) await this.init();

    const sessionId = uuidv4();
    const page = await this.browser.newPage();

    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });

    // Set user agent to look like a real browser
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    this.sessions.set(sessionId, {
      page,
      lastActivity: Date.now(),
    });

    console.log(`[BrowserManager] Session created: ${sessionId}`);
    return sessionId;
  }

  getSession(sessionId) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.lastActivity = Date.now();
    }
    return session;
  }

  async navigate(sessionId, url) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    // Add protocol if missing
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }

    await session.page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    return {
      url: session.page.url(),
      title: await session.page.title(),
    };
  }

  async screenshot(sessionId, options = {}) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    const screenshot = await session.page.screenshot({
      type: options.type || 'jpeg',
      quality: options.quality || 80,
      fullPage: options.fullPage || false,
    });

    return screenshot;
  }

  async click(sessionId, x, y) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    await session.page.mouse.click(x, y);

    // Wait a bit for any navigation or changes
    await new Promise(resolve => setTimeout(resolve, 100));

    return {
      url: session.page.url(),
      title: await session.page.title(),
    };
  }

  async type(sessionId, text) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    await session.page.keyboard.type(text);
  }

  async keypress(sessionId, key) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    await session.page.keyboard.press(key);

    return {
      url: session.page.url(),
      title: await session.page.title(),
    };
  }

  async scroll(sessionId, deltaX, deltaY) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    await session.page.mouse.wheel({ deltaX, deltaY });
  }

  async getPageInfo(sessionId) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    return {
      url: session.page.url(),
      title: await session.page.title(),
    };
  }

  async goBack(sessionId) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    await session.page.goBack({ waitUntil: 'domcontentloaded' });

    return {
      url: session.page.url(),
      title: await session.page.title(),
    };
  }

  async goForward(sessionId) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    await session.page.goForward({ waitUntil: 'domcontentloaded' });

    return {
      url: session.page.url(),
      title: await session.page.title(),
    };
  }

  async refresh(sessionId) {
    const session = this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    await session.page.reload({ waitUntil: 'domcontentloaded' });

    return {
      url: session.page.url(),
      title: await session.page.title(),
    };
  }

  async closeSession(sessionId) {
    const session = this.sessions.get(sessionId);
    if (session) {
      await session.page.close();
      this.sessions.delete(sessionId);
      console.log(`[BrowserManager] Session closed: ${sessionId}`);
    }
  }

  cleanupSessions() {
    const now = Date.now();
    for (const [sessionId, session] of this.sessions) {
      if (now - session.lastActivity > this.sessionTimeout) {
        this.closeSession(sessionId);
      }
    }
  }

  async shutdown() {
    for (const [sessionId] of this.sessions) {
      await this.closeSession(sessionId);
    }
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
    console.log('[BrowserManager] Shutdown complete');
  }
}

// Singleton instance
export const browserManager = new BrowserManager();
