const CACHE_NAME = "crawlearCacheDEV_v4";

//eslint-disable-next-line
self.addEventListener('install', event => {
    console.log(`CrawlearServiceWorkerDEV::${CACHE_NAME} Installed`);

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
    console.log(`CrawlearServiceWorkerDEV::${CACHE_NAME} Activated`);
});

//eslint-disable-next-line
self.addEventListener('fetch', function(event) {

});