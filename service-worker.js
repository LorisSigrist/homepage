const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.2c9bb14c.js",
  a + "/_app/immutable/assets/0.ee9901b3.css",
  a + "/_app/immutable/nodes/0.b699550c.js",
  a + "/_app/immutable/assets/avatar.4558b389.png",
  a + "/_app/immutable/nodes/1.8feb58c2.js",
  a + "/_app/immutable/assets/2.e1cc326a.css",
  a + "/_app/immutable/nodes/2.90524fd0.js",
  a + "/_app/immutable/assets/3.7520a7f7.css",
  a + "/_app/immutable/nodes/3.bc1122c6.js",
  a + "/_app/immutable/nodes/4.7e948f94.js",
  a + "/_app/immutable/nodes/5.85a4e44d.js",
  a + "/_app/immutable/assets/for-await-of-compat.16fd3cc1.png",
  a + "/_app/immutable/assets/raw-stream.af5d3091.gif",
  a + "/_app/immutable/assets/text-stream.8cbdd213.gif",
  a + "/_app/immutable/assets/parse-result-value-stream.dc55853e.gif",
  a + "/_app/immutable/assets/final-stream.7ab47112.gif",
  a + "/_app/immutable/assets/non-stream-load.67378d23.gif",
  a + "/_app/immutable/assets/stream-load.a3f8ce89.gif",
  a + "/_app/immutable/chunks/index.2413453e.js",
  a + "/_app/immutable/chunks/index.328d30d5.js",
  a + "/_app/immutable/chunks/singletons.5bc2714f.js",
  a + "/_app/immutable/chunks/stores.a7035dbf.js",
  a + "/_app/immutable/chunks/theme.179a6edd.js",
  a + "/_app/immutable/entry/start.c23eada9.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/fonts/LibreBaskerville-Regular.ttf"
], l = [
  a + "/",
  a + "/mock-data-with-zocker",
  a + "/the-better-way-to-load-data",
  a + "/og/Loris Sigrist.png",
  a + "/og/Never write Mock Data again, with Zocker.png",
  a + "/og/The better way to load data.png"
], o = "1688676446560", n = `cache-${o}`, c = [
  ...p,
  // the app itself
  ...m,
  // everything in `static`
  ...l
  // prerendered pages
];
self.addEventListener("install", (e) => {
  async function s() {
    await (await caches.open(n)).addAll(c);
  }
  e.waitUntil(s());
});
self.addEventListener("activate", (e) => {
  async function s() {
    for (const t of await caches.keys())
      t !== n && await caches.delete(t);
  }
  e.waitUntil(s());
});
self.addEventListener("fetch", (e) => {
  const { request: s } = e, t = new URL(e.request.url);
  if (s.method !== "GET") {
    e.respondWith(fetch(s));
    return;
  }
  if (!c.includes(t.pathname)) {
    e.respondWith(fetch(s));
    return;
  }
  e.respondWith(
    caches.open(n).then((i) => i.match(t.pathname)).then((i) => i || (console.error("Cache miss for: " + t.pathname), fetch(s)))
  );
});
