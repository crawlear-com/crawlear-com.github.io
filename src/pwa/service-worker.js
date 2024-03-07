import { precacheAndRoute } from "workbox-precaching"
import { registerRoute } from "workbox-routing"
import { NetworkFirst, StaleWhileRevalidate} from "workbox-strategies"

// Precarga la app
// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST)

registerRoute(/.(?:js|css|webp|png|svg)$/, new StaleWhileRevalidate(), "GET")
registerRoute(/^https?._/, new NetworkFirst(), "GET")
registerRoute(/^http?._/, new NetworkFirst(), "GET")