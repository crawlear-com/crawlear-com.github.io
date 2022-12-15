const CACHE_NAME = "crawlearCacheDEV_v1";

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
            '/616535897b5598e00b94.png'
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

});