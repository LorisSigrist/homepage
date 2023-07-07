const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), c = [
  e + "/_app/immutable/entry/app.6e1854e3.js",
  e + "/_app/immutable/assets/0.ee9901b3.css",
  e + "/_app/immutable/nodes/0.05007aec.js",
  e + "/_app/immutable/assets/avatar.4558b389.png",
  e + "/_app/immutable/nodes/1.fde76b9f.js",
  e + "/_app/immutable/assets/2.e1cc326a.css",
  e + "/_app/immutable/nodes/2.90524fd0.js",
  e + "/_app/immutable/assets/3.7520a7f7.css",
  e + "/_app/immutable/nodes/3.bc1122c6.js",
  e + "/_app/immutable/nodes/4.7e948f94.js",
  e + "/_app/immutable/nodes/5.82b2aad4.js",
  e + "/_app/immutable/assets/for-await-of-compat.16fd3cc1.png",
  e + "/_app/immutable/assets/raw-stream.af5d3091.gif",
  e + "/_app/immutable/assets/text-stream.8cbdd213.gif",
  e + "/_app/immutable/assets/parse-result-value-stream.dc55853e.gif",
  e + "/_app/immutable/assets/final-stream.7ab47112.gif",
  e + "/_app/immutable/assets/non-stream-load.67378d23.gif",
  e + "/_app/immutable/assets/stream-load.a3f8ce89.gif",
  e + "/_app/immutable/chunks/index.2413453e.js",
  e + "/_app/immutable/chunks/index.328d30d5.js",
  e + "/_app/immutable/chunks/singletons.0d203ed3.js",
  e + "/_app/immutable/chunks/stores.2d811d5e.js",
  e + "/_app/immutable/chunks/theme.179a6edd.js",
  e + "/_app/immutable/entry/start.a01f24d1.js"
], m = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/fonts/LibreBaskerville-Regular.ttf"
], l = [
  e + "/",
  e + "/mock-data-with-zocker",
  e + "/the-better-way-to-load-data",
  e + "/og/Loris Sigrist.png",
  e + "/og/Never write Mock Data again, with Zocker.png",
  e + "/og/The better way to load data.png"
], o = "1688716955444", n = `cache-${o}`, p = [
  ...c,
  // the app itself
  ...m,
  // everything in `static`
  ...l
  // prerendered pages
];
self.addEventListener("install", (a) => {
  async function s() {
    await (await caches.open(n)).addAll(p);
  }
  a.waitUntil(s());
});
self.addEventListener("activate", (a) => {
  async function s() {
    for (const t of await caches.keys())
      t !== n && await caches.delete(t);
  }
  a.waitUntil(s());
});
self.addEventListener("fetch", (a) => {
  const { request: s } = a, t = new URL(a.request.url);
  if (s.method !== "GET") {
    a.respondWith(fetch(s));
    return;
  }
  if (!p.includes(t.pathname)) {
    a.respondWith(fetch(s));
    return;
  }
  a.respondWith(
    caches.open(n).then((i) => i.match(t.pathname)).then((i) => i || (console.error("Cache miss for: " + t.pathname), fetch(s)))
  );
});
