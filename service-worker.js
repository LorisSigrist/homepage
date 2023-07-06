const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), c = [
  e + "/_app/immutable/entry/app.43aa3527.js",
  e + "/_app/immutable/assets/0.ee9901b3.css",
  e + "/_app/immutable/nodes/0.5b1010b7.js",
  e + "/_app/immutable/assets/avatar.4558b389.png",
  e + "/_app/immutable/nodes/1.9f587c9d.js",
  e + "/_app/immutable/assets/2.e1cc326a.css",
  e + "/_app/immutable/nodes/2.90524fd0.js",
  e + "/_app/immutable/assets/3.7520a7f7.css",
  e + "/_app/immutable/nodes/3.bc1122c6.js",
  e + "/_app/immutable/nodes/4.4e38395b.js",
  e + "/_app/immutable/nodes/5.e171424c.js",
  e + "/_app/immutable/nodes/6.4661ca85.js",
  e + "/_app/immutable/assets/for-await-of-compat.16fd3cc1.png",
  e + "/_app/immutable/assets/raw-stream.af5d3091.gif",
  e + "/_app/immutable/assets/text-stream.8cbdd213.gif",
  e + "/_app/immutable/assets/parse-result-value-stream.dc55853e.gif",
  e + "/_app/immutable/assets/final-stream.7ab47112.gif",
  e + "/_app/immutable/assets/non-stream-load.67378d23.gif",
  e + "/_app/immutable/assets/stream-load.a3f8ce89.gif",
  e + "/_app/immutable/chunks/environment.9aa685ef.js",
  e + "/_app/immutable/chunks/index.2413453e.js",
  e + "/_app/immutable/chunks/index.328d30d5.js",
  e + "/_app/immutable/chunks/singletons.010ecd08.js",
  e + "/_app/immutable/chunks/stores.87601716.js",
  e + "/_app/immutable/chunks/theme.179a6edd.js",
  e + "/_app/immutable/entry/start.fe3fcf00.js"
], m = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/fonts/LibreBaskerville-Regular.ttf"
], l = [
  e + "/",
  e + "/exception-handling",
  e + "/mock-data-with-zocker",
  e + "/the-better-way-to-load-data",
  e + "/og/Loris Sigrist.png",
  e + "/og/Exception Handling.png",
  e + "/og/Never write Mock Data again, with Zocker.png",
  e + "/og/The better way to load data.png"
], o = "1688675545077", i = `cache-${o}`, p = [
  ...c,
  // the app itself
  ...m,
  // everything in `static`
  ...l
  // prerendered pages
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(i)).addAll(p);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  const { request: t } = a, s = new URL(a.request.url);
  if (t.method !== "GET") {
    a.respondWith(fetch(t));
    return;
  }
  if (!p.includes(s.pathname)) {
    a.respondWith(fetch(t));
    return;
  }
  a.respondWith(
    caches.open(i).then((n) => n.match(s.pathname)).then((n) => n || (console.error("Cache miss for: " + s.pathname), fetch(t)))
  );
});
