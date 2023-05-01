/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />
declare var self: ServiceWorkerGlobalScope;

import { build, files, version, prerendered } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
  ...build, // the app itself
  ...files,  // everything in `static`
  ...prerendered, // prerendered pages
];

self.addEventListener('install', (event) => {
  // Create a new cache and add all files to it
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }

  event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
  // Remove previous cached data from disk
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key);
    }
  }

  event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(event.request.url);

  if (request.method !== 'GET') {
    event.respondWith(fetch(request));
    return;
  }

  const urlIsCached = ASSETS.includes(url.pathname);


  //Serve API from network
  if (!urlIsCached) {
    event.respondWith(fetch(request));
    return;
  }

  //Serve ASSETS from cache

  /*
     Here is a lesson I learned the hard way: caches.match() does not acutally match all cached requests, only the ones in caches that have explicitly been opened.
     Caches are supposed to stay opened, but in Chrome they do not reliably do that. Always explicitly open the cache when you want to access it.
     This took waay too long to figure out.
   */

  event.respondWith(

    caches.open(CACHE).then(cache => cache.match(url.pathname)).then(cached => {
      if (cached) {
        return cached;
      }
      console.error("Cache miss for: " + url.pathname);
      return fetch(request);
    })
  );
});