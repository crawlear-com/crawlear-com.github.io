import Analytics from "../Analytics";

const isLocalhost = ()=> {
    return document.location.href.indexOf('localhost')>=0;
};

function initPwa() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            const sw = isLocalhost() ? 'service-worker-dev.js' : 'service-worker.js';
            navigator.serviceWorker.register(sw).then(function(registration) {
                Analytics.event('App','pwa','registered');
            }, function(err) {
                Analytics.event('App','pwa','registration error');
                console.log('ServiceWorker registration failed: ', err);
            }).catch(function(err) {
                console.log(err);
            });
        });
      } else {
            Analytics.event('App','pwa','service worker not supported');
            console.log('service worker is not supported');
      }
}

export default initPwa;
