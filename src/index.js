import { createServer } from './server.js';

const PORT = process.env.PORT || 3000;

async function start() {
  const server = createServer();

  server.listen(PORT, () => {
    console.log(`
  ╦  ┌─┐┌┐┌┌┬┐┬ ┬┌─┐┌┐┌┬ ┬┌┬┐
  ║  ├─┤│││ │ ├─┤├─┤││││ ││││
  ╩═╝┴ ┴┘└┘ ┴ ┴ ┴┴ ┴┘└┘└─┘┴ ┴

  Ultraviolet Proxy v3.0.0
  Running on port ${PORT}
  Visit http://localhost:${PORT} to start browsing
    `);
  });

  // Graceful shutdown
  process.on('SIGINT', () => {
    console.log('\nShutting down...');
    server.close();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    server.close();
    process.exit(0);
  });
}

start().catch(console.error);
