const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  e + "/_app/immutable/entry/app.e0277b41.js",
  e + "/_app/immutable/assets/0.b909e3c6.css",
  e + "/_app/immutable/nodes/0.b10cfe98.js",
  e + "/_app/immutable/assets/avatar.4558b389.png",
  e + "/_app/immutable/nodes/1.bb9ceeea.js",
  e + "/_app/immutable/assets/2.2f52a585.css",
  e + "/_app/immutable/nodes/2.48f8f9ca.js",
  e + "/_app/immutable/assets/3.7520a7f7.css",
  e + "/_app/immutable/nodes/3.bc1122c6.js",
  e + "/_app/immutable/nodes/4.6d9f2747.js",
  e + "/_app/immutable/chunks/index.2413453e.js",
  e + "/_app/immutable/chunks/index.328d30d5.js",
  e + "/_app/immutable/chunks/singletons.aea337d4.js",
  e + "/_app/immutable/chunks/stores.a9985085.js",
  e + "/_app/immutable/chunks/theme.179a6edd.js",
  e + "/_app/immutable/entry/start.3b3c082b.js"
], o = [
  e + "/.nojekyll",
  e + "/favicon.png"
], l = [
  e + "/",
  e + "/mock-data-with-zocker",
  e + "/og/Loris Sigrist.png",
  e + "/og/Never write Mock Data again, with Zocker.png"
], m = "1684481452540", c = `cache-${m}`, i = [
  ...p,
  // the app itself
  ...o,
  // everything in `static`
  ...l
  // prerendered pages
];
self.addEventListener("install", (a) => {
  async function s() {
    await (await caches.open(c)).addAll(i);
  }
  a.waitUntil(s());
});
self.addEventListener("activate", (a) => {
  async function s() {
    for (const t of await caches.keys())
      t !== c && await caches.delete(t);
  }
  a.waitUntil(s());
});
self.addEventListener("fetch", (a) => {
  const { request: s } = a, t = new URL(a.request.url);
  if (s.method !== "GET") {
    a.respondWith(fetch(s));
    return;
  }
  if (!i.includes(t.pathname)) {
    a.respondWith(fetch(s));
    return;
  }
  a.respondWith(
    caches.open(c).then((n) => n.match(t.pathname)).then((n) => n || (console.error("Cache miss for: " + t.pathname), fetch(s)))
  );
});
