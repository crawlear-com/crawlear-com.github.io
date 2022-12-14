import Analytics from "../Analytics";

function initPwa() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
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
