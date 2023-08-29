const CACHE_VERSION = 'jamesbaroi-v1'

const CACHE_ASSETS = [
  '/',
  '/site.webmanifest',
  '/public/img/favicon-16x16.png',
  '/public/img/favicon-32x32.png',
  '/public/img/android-chrome-512x512.png',
  '/public/img/android-chrome-192x192.png',
  '/public/img/apple-touch-icon.png',
  '/index.html',
  '/public/css/index.css',
  '/public/js/index.js',
  '/json/index.json'
]

self.addEventListener('install', event => {

  self.skipWaiting()

  event.waitUntil(

    caches.open(CACHE_VERSION).then(cache => cache.addAll(CACHE_ASSETS))

  )
})

self.addEventListener('activate', event => {

  event.waitUntil(

    caches.keys().then(cacheNames => {

      return Promise.all(

        cacheNames.filter(cacheName => cacheName !== CACHE_VERSION)

        .map(cacheName => caches.delete(cacheName))
      )
    })
  )
})

self.addEventListener('fetch', event => {

  event.respondWith(

    caches.match(event.request).then(response => {

      if (navigator.onLine) {

        return fetch(event.request)

      } else {

        if (response) {

          return response
        }
      }
    })
  )
})