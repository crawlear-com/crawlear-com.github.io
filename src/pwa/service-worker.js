
//eslint-disable-next-line
self.addEventListener('install', function() {
    console.log('Install!');
});

//eslint-disable-next-line
self.addEventListener("activate", event => {
    console.log('Activate!');
});

//eslint-disable-next-line
self.addEventListener('fetch', function(event) {

});