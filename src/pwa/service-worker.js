import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching"
import { registerRoute, NavigationRoute } from "workbox-routing"
import { StaleWhileRevalidate } from "workbox-strategies"
import { setCacheNameDetails } from 'workbox-core'

const CACHE_NAME = 'crawlearcom'
const CACHE_VERSION = '1.0.13'
const PREVIOUS_CACHE_VERSION = '1.0.12'
const PREVIOUS_CACHE_NAMES = `${CACHE_NAME}-${CACHE_NAME}-precache-${PREVIOUS_CACHE_VERSION}`

setCacheNameDetails({
  prefix: CACHE_NAME,
  suffix: CACHE_VERSION,
  precache: `${CACHE_NAME}-precache`,
  runtime: `${CACHE_NAME}-run-time`
})

// Precarga la app
// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST)
precacheAndRoute([{url: '/', revision: null}])

registerRoute(/.(?:js|css|webp|png|svg)$/, new StaleWhileRevalidate(), "GET")
registerRoute(/^https?._/, new StaleWhileRevalidate(), "GET")
registerRoute(/^http?._/, new StaleWhileRevalidate(), "GET")

const handler = createHandlerBoundToURL('/')
const navigationRoute = new NavigationRoute(handler)
registerRoute(navigationRoute)

//eslint-disable-next-line
self.addEventListener("activate", event => {
  console.log(`CrawlearServiceWorker::${CACHE_NAME} Activated`);
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return PREVIOUS_CACHE_NAMES === cacheName
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
