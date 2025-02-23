export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      // Handle API routes
      return fetch(request);
    }
    
    try {
      // Try to get the static asset
      return await env.ASSETS.fetch(request);
    } catch {
      // If not found, return the app shell
      return env.ASSETS.fetch(`${url.origin}/index.html`);
    }
  },
};
