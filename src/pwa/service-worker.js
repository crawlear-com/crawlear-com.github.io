const CACHE_NAME = "crawlearCache_v3";

//eslint-disable-next-line
self.addEventListener('install', event => {
    console.log(`CrawlearServiceWorker::${CACHE_NAME} Installed`);

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
          return cache.addAll([
            './',
            'index.html',
            '/main.js',
            '/88eb99d0c3739d8fccb7.png',
            '/cc09ab0763994fa2fdd3.png'
          ]);
        })
      );
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
    event.respondWith(caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request.url).then((fetchedResponse) => {
          cache.put(event.request, fetchedResponse.clone());
  
          return fetchedResponse;
        }).catch(() => {
          return cache.match(event.request.url);
        });
      }));
  }
});