var CACHE_NAME="hc::v1",urlsToCache=[".","styles/styles.css","scripts/app.js"];self.addEventListener("install",function(e){self.skipWaiting(),e.waitUntil(caches.open(CACHE_NAME).then(function(e){return console.log("Opened cache"),e.addAll(urlsToCache)}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return 0!==e.indexOf(CACHE_NAME)}).map(function(e){return caches["delete"](e)}))}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.open(CACHE_NAME).then(function(n){return n.match(e.request).then(function(t){return t||fetch(e.request).then(function(t){return n.put(e.request,t.clone()),t})})}))});