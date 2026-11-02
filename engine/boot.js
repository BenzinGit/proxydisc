// Inlined into <head> by build.mjs, ahead of every other script.

// The static intro in #pd-static is for crawlers and no-JS visitors; with JS on, the boot screen
// shows instead until the app has rendered, so nothing jumps.
document.documentElement.className += " js";

// dc-runtime loads React from the URLs it was built against unless this map points them somewhere
// else. Self-hosted copies keep the site working without unpkg, and a non-null map also stops the
// runtime re-fetching the whole page to re-read its template.
window.__resources = {
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js": "assets/vendor/react.production.min.js",
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js": "assets/vendor/react-dom.production.min.js"
};

// The parody ads' fonts, fetched by loadJokeFonts() in app.js only while the ads are on.
window.PD_JOKE_FONTS = "<!--#asset assets/fonts-joke.css-->";

// Offline support, the home-screen install and the share target all need the service worker.
if("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")){
  window.addEventListener("load", function(){ navigator.serviceWorker.register("/sw.js").catch(function(){}); });
}
// Chrome and Edge offer installation through this event, which can fire before React mounts;
// keep it for the Install button on the Backup tab.
window.addEventListener("beforeinstallprompt", function(e){
  e.preventDefault();
  window.__pdInstallPrompt = e;
  window.dispatchEvent(new Event("pd-installable"));
});
window.addEventListener("appinstalled", function(){
  window.__pdInstallPrompt = null;
  window.dispatchEvent(new Event("pd-installable"));
});

// Early sink: prints whatever the browser will give us, before the runtime loads.
window.addEventListener('error', function(e){
  if(!e.message && !e.error && e.target && e.target !== window) return;
  try {
    var box = document.getElementById('__pd_err');
    if(!box){
      box = document.createElement('div'); box.id = '__pd_err';
      box.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:2147483647;max-height:60vh;overflow:auto;background:#2a1215;color:#ffb4ad;border-top:2px solid #ff5a5a;padding:14px 16px;font:12px/1.5 ui-monospace,monospace;white-space:pre-wrap';
      (document.body || document.documentElement).appendChild(box);
    }
    box.textContent += '\n\n[window] ' + (e.message || e.type)
      + (e.filename ? ' @ ' + String(e.filename).slice(0,60) + ':' + e.lineno : '')
      + (e.error && e.error.stack ? '\n' + String(e.error.stack).split('\n').slice(0,6).join('\n') : '');
  } catch(x){}
}, true);
window.addEventListener('unhandledrejection', function(e){
  try {
    var r = e.reason;
    var box = document.getElementById('__pd_err');
    if(!box){ box = document.createElement('div'); box.id='__pd_err';
      box.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:2147483647;max-height:60vh;overflow:auto;background:#2a1215;color:#ffb4ad;border-top:2px solid #ff5a5a;padding:14px 16px;font:12px/1.5 ui-monospace,monospace;white-space:pre-wrap';
      (document.body||document.documentElement).appendChild(box); }
    box.textContent += '\n\n[promise] ' + ((r && (r.name+': '+r.message)) || String(r))
      + (r && r.stack ? '\n' + String(r.stack).split('\n').slice(0,6).join('\n') : '');
  } catch(x){}
});
