const CACHE_VERSION = 'jamesbaroi-v1'

const CACHE_ASSETS = [
  '/',
  '/#return',
  '/site.webmanifest',
  '/public/img/apple-touch-icon.png',
  '/public/img/android-chrome-192x192.png',
  '/public/img/android-chrome-512x512.png',
  '/public/img/favicon-32x32.png',
  '/public/img/favicon-16x16.png',
  '/about',
  '/contact',
  '/article/template',
  '/article/test',
  '/policy/user-agreement',
  '/policy/privacy-policy',
  '/policy/cookie-policy',
  '/public/css/common.css',
  '/public/css/index.css',
  '/public/css/article.css',
  '/public/css/policy.css',
  '/public/css/print.css',
  '/public/js/common.js',
  '/public/js/index.js',
  '/public/js/article.js',
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

      if (response) {

        return response

      } else {

        return fetch(event.request)
      }
    })
  )
})