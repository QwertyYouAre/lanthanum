import express from 'express';
import { createBareServer } from '@tomphttp/bare-server-node';
import { baremuxPath } from '@mercuryworkshop/bare-mux/node';
import { bareModulePath } from '@mercuryworkshop/bare-as-module3';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// User-Agent override middleware for bare server requests
function overrideUserAgent(req) {
  // Check if there's a custom user-agent header from the client
  const customUA = req.headers['x-lanthanum-ua'];
  if (!customUA) return;

  // Get the X-Bare-Headers if present
  const bareHeadersRaw = req.headers['x-bare-headers'];
  if (!bareHeadersRaw) return;

  try {
    // Parse the bare headers (they're JSON encoded)
    const bareHeaders = JSON.parse(bareHeadersRaw);

    // Override the User-Agent
    bareHeaders['User-Agent'] = customUA;

    // Update the request header with modified bare headers
    req.headers['x-bare-headers'] = JSON.stringify(bareHeaders);
  } catch (e) {
    // If parsing fails, ignore
  }
}

export function createServer() {
  const app = express();
  const bareServer = createBareServer('/bare/');

  // Trust proxy
  app.set('trust proxy', 1);

  // Security headers (relaxed for proxy functionality)
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

  // Bare-mux and transport static files
  app.use('/baremux/', express.static(baremuxPath));
  app.use('/baremod/', express.static(bareModulePath));

  // Static files
  app.use(express.static(path.join(__dirname, '../public')));

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

  // Create HTTP server
  const server = http.createServer((req, res) => {
    if (bareServer.shouldRoute(req)) {
      // Apply user-agent override if specified
      overrideUserAgent(req);
      bareServer.routeRequest(req, res);
    } else {
      app(req, res);
    }
  });

  // Handle WebSocket upgrades for Bare Server
  server.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
      bareServer.routeUpgrade(req, socket, head);
    } else {
      socket.end();
    }
  });

  return server;
}
