const CACHE_NAME="crawlearCache_v6";self.addEventListener("install",(e=>{console.log(`CrawlearServiceWorker::${CACHE_NAME} Installed`),e.waitUntil(caches.open(CACHE_NAME).then((function(e){return e.addAll(["./","index.html","/main.js","/88eb99d0c3739d8fccb7.png","/b8cd4b8a8d6dc6abfb82.png","/630f3e1e30bbbf36a209.jpeg","/0e8411388912e8090839.png","/616535897b5598e00b94.png"])})))})),self.addEventListener("activate",(e=>{console.log(`CrawlearServiceWorker::${CACHE_NAME} Activated`)})),self.addEventListener("fetch",(function(e){if("image"===e.request.destination)e.respondWith(caches.open(CACHE_NAME).then((t=>t.match(e.request.url).then((n=>n||fetch(e.request).then((n=>(t.put(e.request,n.clone()),n))))))));else{if(-1!==e.request.url.indexOf("chrome-extension://"))return;e.respondWith(caches.open(CACHE_NAME).then((t=>fetch(e.request.url).then((n=>(t.put(e.request,n.clone()),n))).catch((()=>t.match(e.request.url))))))}}));