import { createServer } from './server.js';
import { browserManager } from './browser/manager.js';

const PORT = process.env.PORT || 3000;

async function start() {
  // Initialize browser
  await browserManager.init();

  const app = createServer();

  app.listen(PORT, () => {
    console.log(`
  ╦  ┌─┐┌┐┌┌┬┐┬ ┬┌─┐┌┐┌┬ ┬┌┬┐
  ║  ├─┤│││ │ ├─┤├─┤││││ ││││
  ╩═╝┴ ┴┘└┘ ┴ ┴ ┴┴ ┴┘└┘└─┘┴ ┴

  Remote Browser v2.0.0
  Running on port ${PORT}
  Visit http://localhost:${PORT} to start browsing
    `);
  });

  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\nShutting down...');
    await browserManager.shutdown();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await browserManager.shutdown();
    process.exit(0);
  });
}

start().catch(console.error);
