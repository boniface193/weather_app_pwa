const assets = [
"./", 
"/index.html",
"/assets/css/style.css", 
"/assets/images/cloud-full_width192.png",
"/assets/images/home-map.png",
"https://use.fontawesome.com/releases/v5.8.2/css/all.css", 
"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap", 
"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
]
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(caches => {
            return caches.addAll(assets)
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});