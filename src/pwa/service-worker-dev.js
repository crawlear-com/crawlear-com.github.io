const CACHE_NAME = "crawlearCacheDEV_v9";

//eslint-disable-next-line
self.addEventListener('install', event => {
    console.log(`CrawlearServiceWorkerDEV::${CACHE_NAME} Installed`);

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
            '/616535897b5598e00b94.png',
            '/c02f061a017d59f5bb86.svg',
            '/b0c484b364dc559b8644.svg',
            '/5aa9dd97f0c1a5039ca6.svg'
          ]);
        })
      );
});

//eslint-disable-next-line
self.addEventListener("activate", event => {
    console.log(`CrawlearServiceWorkerDEV::${CACHE_NAME} Activated`);
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
    const url = event.request.url;

    if ((url.indexOf('localhost') >= 0 || url.indexOf('crawlear.com') >= 0) && (url.indexOf('chrome-extension://') <= 0)) {
        event.respondWith(caches.open(CACHE_NAME).then((cache) => {
            return fetch(url).then((fetchedResponse) => {
                cache.put(event.request, fetchedResponse.clone());
        
                return fetchedResponse;
            }).catch(() => {
                return cache.match(url);
            });
        }));    
    } else {
        return;
    }
}
});