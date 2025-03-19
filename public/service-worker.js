// Empty service worker that immediately unregisters itself
// This ensures that any previously registered service worker is removed

self.addEventListener('install', function(event) {
  // Skip the waiting phase
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Unregister this service worker immediately
  self.registration.unregister()
    .then(function() {
      console.log('Service worker unregistered successfully to prevent caching');
      return self.clients.matchAll();
    })
    .then(function(clients) {
      clients.forEach(client => {
        // Reload the page if possible to ensure clean state
        if ('navigate' in client) {
          client.navigate(client.url);
        }
      });
    });
});
