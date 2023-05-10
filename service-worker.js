const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.96dbaf85.js",
  a + "/_app/immutable/chunks/0.40eed8e9.js",
  a + "/_app/immutable/chunks/1.77e2e4a6.js",
  a + "/_app/immutable/chunks/2.296e3a02.js",
  a + "/_app/immutable/chunks/3.83196589.js",
  a + "/_app/immutable/chunks/4.c64f43c5.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.8217579f.js",
  a + "/_app/immutable/chunks/_page.dd6af2e0.js",
  a + "/_app/immutable/chunks/index.6ca33f2d.js",
  a + "/_app/immutable/chunks/index.76514a08.js",
  a + "/_app/immutable/chunks/singletons.84af436c.js",
  a + "/_app/immutable/chunks/stores.fac3ac8a.js",
  a + "/_app/immutable/chunks/theme.f9ced453.js",
  a + "/_app/immutable/entry/start.21b0ad74.js",
  a + "/_app/immutable/entry/error.svelte.d5781d34.js",
  a + "/_app/immutable/assets/avatar.4558b389.png",
  a + "/_app/immutable/assets/_layout.2f52a585.css",
  a + "/_app/immutable/entry/(articles)-layout.svelte.d1d7ce9b.js",
  a + "/_app/immutable/entry/(articles)-mock-data-with-zocker-page.svx.f7125d96.js",
  a + "/_app/immutable/entry/(articles)-mock-data-with-zocker-page.ts.25cbbef8.js",
  a + "/_app/immutable/assets/_layout.2d78b62a.css",
  a + "/_app/immutable/entry/_layout.svelte.40d24d82.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.7520a7f7.css",
  a + "/_app/immutable/entry/_page.svelte.492703a5.js",
  a + "/_app/immutable/entry/_page.ts.ac7151f4.js"
], l = [
  a + "/.nojekyll",
  a + "/favicon.png"
], m = [
  a + "/",
  a + "/mock-data-with-zocker",
  a + "/og/Loris Sigrist.png",
  a + "/og/Never write Mock Data again, with Zocker.png"
], u = "1683736769291", n = `cache-${u}`, p = [
  ...i,
  // the app itself
  ...l,
  // everything in `static`
  ...m
  // prerendered pages
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(n)).addAll(p);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const s of await caches.keys())
      s !== n && await caches.delete(s);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  const { request: t } = e, s = new URL(e.request.url);
  if (t.method !== "GET") {
    e.respondWith(fetch(t));
    return;
  }
  if (!p.includes(s.pathname)) {
    e.respondWith(fetch(t));
    return;
  }
  e.respondWith(
    caches.open(n).then((c) => c.match(s.pathname)).then((c) => c || (console.error("Cache miss for: " + s.pathname), fetch(t)))
  );
});
