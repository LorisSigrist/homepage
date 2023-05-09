const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  e + "/_app/immutable/entry/app.ed1d1d2c.js",
  e + "/_app/immutable/chunks/0.098c38cb.js",
  e + "/_app/immutable/chunks/1.51d672a3.js",
  e + "/_app/immutable/chunks/2.296e3a02.js",
  e + "/_app/immutable/chunks/3.83196589.js",
  e + "/_app/immutable/chunks/4.c64f43c5.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/_page.8217579f.js",
  e + "/_app/immutable/chunks/_page.dd6af2e0.js",
  e + "/_app/immutable/chunks/index.6ca33f2d.js",
  e + "/_app/immutable/chunks/index.76514a08.js",
  e + "/_app/immutable/chunks/singletons.b34f3199.js",
  e + "/_app/immutable/chunks/stores.eee1f267.js",
  e + "/_app/immutable/chunks/theme.f9ced453.js",
  e + "/_app/immutable/entry/start.29b7844a.js",
  e + "/_app/immutable/entry/error.svelte.b4fe18fa.js",
  e + "/_app/immutable/assets/avatar.4558b389.png",
  e + "/_app/immutable/assets/_layout.2f52a585.css",
  e + "/_app/immutable/entry/(articles)-layout.svelte.d1d7ce9b.js",
  e + "/_app/immutable/entry/(articles)-mock-data-with-zocker-page.svx.f7125d96.js",
  e + "/_app/immutable/entry/(articles)-mock-data-with-zocker-page.ts.25cbbef8.js",
  e + "/_app/immutable/assets/_layout.242dd283.css",
  e + "/_app/immutable/entry/_layout.svelte.6e0ed4cb.js",
  e + "/_app/immutable/entry/_layout.ts.984db11e.js",
  e + "/_app/immutable/assets/_page.7520a7f7.css",
  e + "/_app/immutable/entry/_page.svelte.492703a5.js",
  e + "/_app/immutable/entry/_page.ts.ac7151f4.js"
], l = [
  e + "/.nojekyll",
  e + "/favicon.png"
], m = [
  e + "/",
  e + "/mock-data-with-zocker"
], u = "1683644224211", n = `cache-${u}`, p = [
  ...i,
  // the app itself
  ...l,
  // everything in `static`
  ...m
  // prerendered pages
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(n)).addAll(p);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const s of await caches.keys())
      s !== n && await caches.delete(s);
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
    caches.open(n).then((c) => c.match(s.pathname)).then((c) => c || (console.error("Cache miss for: " + s.pathname), fetch(t)))
  );
});
