const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.7d95844d.js",
  a + "/_app/immutable/assets/0.f5c19244.css",
  a + "/_app/immutable/nodes/0.f0067cd7.js",
  a + "/_app/immutable/assets/avatar.4558b389.png",
  a + "/_app/immutable/nodes/1.4b645288.js",
  a + "/_app/immutable/assets/2.3d7ef7ec.css",
  a + "/_app/immutable/nodes/2.4c5fa574.js",
  a + "/_app/immutable/assets/3.8b9ba990.css",
  a + "/_app/immutable/nodes/3.ad648cfe.js",
  a + "/_app/immutable/nodes/4.7463e73a.js",
  a + "/_app/immutable/nodes/5.7ab993d7.js",
  a + "/_app/immutable/assets/for-await-of-compat.16fd3cc1.png",
  a + "/_app/immutable/assets/raw-stream.af5d3091.gif",
  a + "/_app/immutable/assets/text-stream.8cbdd213.gif",
  a + "/_app/immutable/assets/parse-result-value-stream.dc55853e.gif",
  a + "/_app/immutable/assets/final-stream.7ab47112.gif",
  a + "/_app/immutable/assets/non-stream-load.67378d23.gif",
  a + "/_app/immutable/assets/stream-load.a3f8ce89.gif",
  a + "/_app/immutable/chunks/index.4190156f.js",
  a + "/_app/immutable/chunks/index.c3b38f65.js",
  a + "/_app/immutable/chunks/singletons.6a82630e.js",
  a + "/_app/immutable/chunks/stores.973c34bc.js",
  a + "/_app/immutable/chunks/theme.de549241.js",
  a + "/_app/immutable/entry/start.dbe4de50.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png"
], o = [
  a + "/",
  a + "/__data.json",
  a + "/mock-data-with-zocker",
  a + "/the-better-way-to-load-data",
  a + "/og/Loris Sigrist.png",
  a + "/og/Never write Mock Data again, with Zocker.png",
  a + "/og/The better way to load data.png"
], l = "1688982731221", n = `cache-${l}`, c = [
  ...p,
  // the app itself
  ...m,
  // everything in `static`
  ...o
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
