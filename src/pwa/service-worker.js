const CACHE_NAME = "crawlearCache_v16"

//eslint-disable-next-line
self.addEventListener('install', event => {
    console.log(`CrawlearServiceWorker::${CACHE_NAME} Installed`);

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
          return cache.addAll([
            './',
            'index.html'
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
                
                return cachedResponse
            }
            return fetch(event.request).then((fetchedResponse) => {
                cache.put(event.request, fetchedResponse.clone())
    
                return fetchedResponse
            })
            })
        }))
    } else {
        const url = event.request.url
        if ((event.request.method !== 'POST') && (url.indexOf('crawlear.com') >= 0) && (url.indexOf('chrome-extension://') <= 0)) {
            event.respondWith(caches.open(CACHE_NAME).then((cache) => {
                return fetch(url).then((fetchedResponse) => {
                    cache.put(event.request, fetchedResponse.clone())
            
                    return fetchedResponse
                }).catch(() => {
                    return cache.match(url)
                })
            }))
        } else {
            return
        }
    }    
})