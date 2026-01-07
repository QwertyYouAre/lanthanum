import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { browserManager } from './browser/manager.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createServer() {
  const app = express();

  // Trust proxy
  app.set('trust proxy', 1);

  // Security headers (relaxed for browser functionality)
  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
    crossOriginOpenerPolicy: false,
  }));

  // Compression
  app.use(compression());

  // Logging
  app.use(morgan('dev'));

  // Parse request bodies
  app.use(express.json());

  // CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
  });

  // Static files
  app.use(express.static(path.join(__dirname, '../public')));

  // API Routes

  // Create new browser session
  app.post('/api/session', async (req, res) => {
    try {
      const sessionId = await browserManager.createSession();
      res.json({ sessionId });
    } catch (error) {
      console.error('Error creating session:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Navigate to URL
  app.post('/api/session/:sessionId/navigate', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { url } = req.body;
      const result = await browserManager.navigate(sessionId, url);
      res.json(result);
    } catch (error) {
      console.error('Navigation error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Get screenshot
  app.get('/api/session/:sessionId/screenshot', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const quality = parseInt(req.query.quality) || 80;
      const screenshot = await browserManager.screenshot(sessionId, { quality });
      res.set('Content-Type', 'image/jpeg');
      res.set('Content-Length', screenshot.length);
      res.end(screenshot);
    } catch (error) {
      console.error('Screenshot error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Click at coordinates
  app.post('/api/session/:sessionId/click', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { x, y } = req.body;
      const result = await browserManager.click(sessionId, x, y);
      res.json(result);
    } catch (error) {
      console.error('Click error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Type text
  app.post('/api/session/:sessionId/type', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { text } = req.body;
      await browserManager.type(sessionId, text);
      res.json({ success: true });
    } catch (error) {
      console.error('Type error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Press key
  app.post('/api/session/:sessionId/keypress', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { key } = req.body;
      const result = await browserManager.keypress(sessionId, key);
      res.json(result);
    } catch (error) {
      console.error('Keypress error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Scroll
  app.post('/api/session/:sessionId/scroll', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { deltaX, deltaY } = req.body;
      await browserManager.scroll(sessionId, deltaX || 0, deltaY || 0);
      res.json({ success: true });
    } catch (error) {
      console.error('Scroll error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Get page info
  app.get('/api/session/:sessionId/info', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const result = await browserManager.getPageInfo(sessionId);
      res.json(result);
    } catch (error) {
      console.error('Info error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Navigation controls
  app.post('/api/session/:sessionId/back', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const result = await browserManager.goBack(sessionId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/session/:sessionId/forward', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const result = await browserManager.goForward(sessionId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/session/:sessionId/refresh', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const result = await browserManager.refresh(sessionId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Close session
  app.delete('/api/session/:sessionId', async (req, res) => {
    try {
      const { sessionId } = req.params;
      await browserManager.closeSession(sessionId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Health check
  app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Landing page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Error handler
  app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  return app;
}
