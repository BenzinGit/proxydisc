// ProxyDisc service worker. build.mjs copies this to /sw.js and fills in VERSION and PRECACHE.
//
//   pages (navigations)        network first, cached copy when offline
//   assets with ?v=<hash>      cache first: the hash changes whenever the file does
//   everything else same-site  stale-while-revalidate: instant from cache, refreshed behind the scenes
//   POST /share-target         a screenshot shared to the installed app (see manifest.webmanifest)
const VERSION = "__VERSION__";
const PRECACHE = __PRECACHE__;
const SHELL = "pd-shell-" + VERSION;
const RUNTIME = "pd-runtime";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("pd-shell-") && k !== SHELL).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if(url.origin !== location.origin) return;
  if(req.method === "POST" && url.pathname === "/share-target"){ e.respondWith(receiveShare(req)); return; }
  if(req.method !== "GET") return;
  if(req.mode === "navigate"){ e.respondWith(page(req)); return; }
  if(url.searchParams.has("v")){ e.respondWith(cacheFirst(req)); return; }
  e.respondWith(staleWhileRevalidate(req));
});

async function page(req){
  const cache = await caches.open(RUNTIME);
  try {
    const res = await fetch(req);
    if(res.ok) cache.put(req, res.clone());
    return res;
  } catch(err){
    return (await cache.match(req, {ignoreSearch: true}))
      || (await caches.match(req, {ignoreSearch: true}))
      || (await caches.match("/"))
      || Response.error();
  }
}

async function cacheFirst(req){
  const hit = await caches.match(req);
  if(hit) return hit;
  const res = await fetch(req);
  if(res.ok) (await caches.open(RUNTIME)).put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(req){
  const cache = await caches.open(RUNTIME);
  const hit = await cache.match(req);
  const fresh = fetch(req).then(res => { if(res.ok) cache.put(req, res.clone()); return res; });
  if(hit){ fresh.catch(() => {}); return hit; }
  return fresh;
}

// The page picks the image up from this cache on load (takeSharedScreenshot in app.js).
async function receiveShare(req){
  try {
    const form = await req.formData();
    const file = form.get("screenshot");
    if(file && file.size){
      const cache = await caches.open("pd-share");
      await cache.put("/__shared-screenshot", new Response(file, {headers: {"content-type": file.type || "image/png"}}));
    }
  } catch(err){}
  return Response.redirect("/#scrap-or-stash?shared=1", 303);
}
