const CACHE_NAME = "crawlearCache_v1";

//eslint-disable-next-line
self.addEventListener('install', function() {
    console.log(`CrawlearServiceWorker::${CACHE_NAME} Installed`);
});

//eslint-disable-next-line
self.addEventListener("activate", event => {
    console.log(`CrawlearServiceWorker::${CACHE_NAME} Activated`);
});

//eslint-disable-next-line
self.addEventListener('fetch', function(event) {
  if (event.request.destination === 'image') {
    event.respondWith(caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request.url).then((cachedResponse) => {
        if (cachedResponse) {
            
            return cachedResponse;
        }
        return fetch(event.request).then((fetchedResponse) => {
            cache.put(event.request, fetchedResponse.clone());

            return fetchedResponse;
        });
      });
    }));
  } else {
    return;
  }
});