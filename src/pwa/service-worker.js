import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching"
import { registerRoute, NavigationRoute } from "workbox-routing"
import { NetworkFirst, StaleWhileRevalidate} from "workbox-strategies"

// Precarga la app
// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST)
precacheAndRoute([{url: '/', revision: null}])

registerRoute(/.(?:js|css|webp|png|svg)$/, new StaleWhileRevalidate())
registerRoute(/^https?._/, new StaleWhileRevalidate())
registerRoute(/^http?._/, new StaleWhileRevalidate())

const handler = createHandlerBoundToURL('/')
const navigationRoute = new NavigationRoute(handler)
registerRoute(navigationRoute, new StaleWhileRevalidate())
