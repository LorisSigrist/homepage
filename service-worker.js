const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), c = [
  a + "/_app/immutable/entry/app.cc5d6023.js",
  a + "/_app/immutable/assets/0.7e8976f9.css",
  a + "/_app/immutable/nodes/0.80204160.js",
  a + "/_app/immutable/assets/avatar.4558b389.png",
  a + "/_app/immutable/nodes/1.95c572fe.js",
  a + "/_app/immutable/assets/2.57052bc9.css",
  a + "/_app/immutable/nodes/2.9e201422.js",
  a + "/_app/immutable/assets/3.8b9ba990.css",
  a + "/_app/immutable/nodes/3.3e6ba3eb.js",
  a + "/_app/immutable/nodes/4.6fd3f7a4.js",
  a + "/_app/immutable/nodes/5.ad278d36.js",
  a + "/_app/immutable/nodes/6.139ac033.js",
  a + "/_app/immutable/nodes/7.08f4601b.js",
  a + "/_app/immutable/assets/for-await-of-compat.16fd3cc1.png",
  a + "/_app/immutable/assets/raw-stream.af5d3091.gif",
  a + "/_app/immutable/assets/text-stream.8cbdd213.gif",
  a + "/_app/immutable/assets/parse-result-value-stream.dc55853e.gif",
  a + "/_app/immutable/assets/final-stream.7ab47112.gif",
  a + "/_app/immutable/assets/non-stream-load.67378d23.gif",
  a + "/_app/immutable/assets/stream-load.a3f8ce89.gif",
  a + "/_app/immutable/chunks/index.4190156f.js",
  a + "/_app/immutable/chunks/index.c3b38f65.js",
  a + "/_app/immutable/chunks/singletons.92dee601.js",
  a + "/_app/immutable/chunks/stores.4f3cf503.js",
  a + "/_app/immutable/chunks/theme.de549241.js",
  a + "/_app/immutable/entry/start.b888021d.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png"
], l = [
  a + "/",
  a + "/__data.json",
  a + "/color-thief",
  a + "/mock-data-with-zocker",
  a + "/reliably-avoiding-theme-flashes",
  a + "/the-better-way-to-load-data",
  a + "/og/Loris Sigrist.png",
  a + "/og/Never write Mock Data again, with Zocker.png",
  a + "/og/Reliably Avoiding Theme flashes.png",
  a + "/og/The better way to load data.png"
], o = "1689001488155", n = `cache-${o}`, p = [
  ...c,
  // the app itself
  ...m,
  // everything in `static`
  ...l
  // prerendered pages
];
self.addEventListener("install", (e) => {
  async function s() {
    await (await caches.open(n)).addAll(p);
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
  if (!p.includes(t.pathname)) {
    e.respondWith(fetch(s));
    return;
  }
  e.respondWith(
    caches.open(n).then((i) => i.match(t.pathname)).then((i) => i || (console.error("Cache miss for: " + t.pathname), fetch(s)))
  );
});
