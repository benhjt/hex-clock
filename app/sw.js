// The files we want to cache
var CACHE_NAME = 'hc::v2';
var urlsToCache = [
	'/'
];

// Set the callback for the install step
self.addEventListener('install', function (event) {
	self.skipWaiting();

	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

// when service worker activates, check for old version of files
// and delete them
self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(function (keys) {
			return Promise.all(keys.filter(function (key) {
					return key.indexOf(CACHE_NAME) !== 0;
				})
				.map(function (key) {
					return caches.delete(key);
				})
			);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.match(event.request).then(function (response) {
				return response || fetch(event.request).then(function (response) {
					cache.put(event.request, response.clone());
					return response;
				});
			});
		})
	);
});
