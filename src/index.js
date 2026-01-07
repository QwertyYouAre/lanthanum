import { createServer } from './server.js';

const PORT = process.env.PORT || 3000;
const app = createServer();

app.listen(PORT, () => {
  console.log(`
  ╦  ┌─┐┌┐┌┌┬┐┬ ┬┌─┐┌┐┌┬ ┬┌┬┐
  ║  ├─┤│││ │ ├─┤├─┤││││ ││││
  ╩═╝┴ ┴┘└┘ ┴ ┴ ┴┴ ┴┘└┘└─┘┴ ┴

  Web Proxy Server running on port ${PORT}
  Visit http://localhost:${PORT} to start browsing
  `);
});
