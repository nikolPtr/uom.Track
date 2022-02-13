self.addEventListener('install', function (event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('trackCss').then(function(cache) {
            return cache.addAll([
                '/uom.Track/index.html',
                '/uom.Track/common.js',
                '/uom.Track/manifest.json',
                '/uom.Track/track.js',
                '/uom.Track/trackCss.css',
                '/uom.Track/fwto1.jpg',
                '/uom.Track/fwto2.jpg',
                '/uom.Track/fwto3.jpg',
                '/uom.Track/fwto4.svg',
                '/uom.Track/icon1.png',
                '/uom.Track/icon2.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('The service worker is serving the asset.');
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || caches.match('/index.html');
        })
    );
});
