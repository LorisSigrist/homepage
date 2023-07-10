const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/_app/immutable/entry/app.702e65e0.js",
  e + "/_app/immutable/assets/0.7e8976f9.css",
  e + "/_app/immutable/nodes/0.d4a6735c.js",
  e + "/_app/immutable/assets/avatar.4558b389.png",
  e + "/_app/immutable/nodes/1.e5b0b72f.js",
  e + "/_app/immutable/assets/2.57052bc9.css",
  e + "/_app/immutable/nodes/2.9e201422.js",
  e + "/_app/immutable/assets/3.8b9ba990.css",
  e + "/_app/immutable/nodes/3.3e6ba3eb.js",
  e + "/_app/immutable/nodes/4.6fd3f7a4.js",
  e + "/_app/immutable/nodes/5.ad278d36.js",
  e + "/_app/immutable/nodes/6.d3f4949a.js",
  e + "/_app/immutable/nodes/7.08f4601b.js",
  e + "/_app/immutable/assets/for-await-of-compat.16fd3cc1.png",
  e + "/_app/immutable/assets/raw-stream.af5d3091.gif",
  e + "/_app/immutable/assets/text-stream.8cbdd213.gif",
  e + "/_app/immutable/assets/parse-result-value-stream.dc55853e.gif",
  e + "/_app/immutable/assets/final-stream.7ab47112.gif",
  e + "/_app/immutable/assets/non-stream-load.67378d23.gif",
  e + "/_app/immutable/assets/stream-load.a3f8ce89.gif",
  e + "/_app/immutable/chunks/index.4190156f.js",
  e + "/_app/immutable/chunks/index.c3b38f65.js",
  e + "/_app/immutable/chunks/singletons.9fe5eb71.js",
  e + "/_app/immutable/chunks/stores.19601eeb.js",
  e + "/_app/immutable/chunks/theme.de549241.js",
  e + "/_app/immutable/entry/start.0bf37e19.js"
], l = [
  e + "/.nojekyll",
  e + "/favicon.png"
], o = [
  e + "/",
  e + "/__data.json",
  e + "/color-thief",
  e + "/mock-data-with-zocker",
  e + "/reliably-avoiding-theme-flashes",
  e + "/the-better-way-to-load-data",
  e + "/og/Loris Sigrist.png",
  e + "/og/Never write Mock Data again, with Zocker.png",
  e + "/og/Reliably Avoiding Theme flashes.png",
  e + "/og/The better way to load data.png"
], c = "1688997887804", n = `cache-${c}`, p = [
  ...m,
  // the app itself
  ...l,
  // everything in `static`
  ...o
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
