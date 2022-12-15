const CACHE_NAME = "crawlearCache_v6";
const isLocahost = ()=>{
    return document.location.href.indexOf('localhost') >= 0;
};

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
            '/b8cd4b8a8d6dc6abfb82.png',
            '/630f3e1e30bbbf36a209.jpeg',
            '/0e8411388912e8090839.png',
            '/616535897b5598e00b94.png'
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
    if (!isLocahost()) {
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
            if (event.request.url.indexOf('chrome-extension://') === -1) {
                event.respondWith(caches.open(CACHE_NAME).then((cache) => {
                    return fetch(event.request.url).then((fetchedResponse) => {
                      cache.put(event.request, fetchedResponse.clone());
              
                      return fetchedResponse;
                    }).catch(() => {
                      return cache.match(event.request.url);
                    });
                }));    
            } else {
                return;
            }
          }   
    } else {
        return;
    }
});