// Touch screens never show title="" tooltips, and ProxyDisc keeps a lot of explanation in them.
// On a touch-only device: press and hold anything with a title to read it, and a plain tap shows
// it on the info-only bits (the ones drawn with cursor:help). Inlined at the end of <body>.
(function(){
  if(!window.matchMedia || !matchMedia("(hover: none)").matches) return;
  var tip = null, timer = 0, swallowClick = false, start = null;

  function titled(el){
    for(; el && el !== document.body; el = el.parentElement){
      if(el.getAttribute && el.getAttribute("title")) return el;
    }
    return null;
  }
  function hide(){ if(tip){ tip.remove(); tip = null; } }
  function show(el){
    hide();
    var text = el.getAttribute("title");
    if(!text) return;
    tip = document.createElement("div");
    tip.setAttribute("role", "tooltip");
    tip.textContent = text;
    tip.style.cssText = "position:fixed;z-index:2147483000;left:12px;top:0;max-width:min(320px,calc(100vw - 24px));" +
      "padding:9px 11px;background:#1b1e23;color:#ecefe6;border:1px solid #2e333b;border-top:2px solid #e8ff45;" +
      "font:400 15px/1.4 Barlow,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.5);pointer-events:none";
    document.body.appendChild(tip);
    var r = el.getBoundingClientRect(), t = tip.getBoundingClientRect();
    var left = Math.min(Math.max(12, r.left + r.width / 2 - t.width / 2), innerWidth - t.width - 12);
    var top = r.top - t.height - 8;
    if(top < 8) top = Math.min(r.bottom + 8, innerHeight - t.height - 8);
    tip.style.left = left + "px";
    tip.style.top = top + "px";
    clearTimeout(tip._t);
    tip._t = setTimeout(hide, 5000);
  }

  document.addEventListener("touchstart", function(e){
    hide();
    swallowClick = false;
    var el = titled(e.target);
    if(!el || e.touches.length !== 1) return;
    start = {x: e.touches[0].clientX, y: e.touches[0].clientY};
    clearTimeout(timer);
    timer = setTimeout(function(){ swallowClick = true; show(el); }, 450);
  }, {passive: true});
  document.addEventListener("touchmove", function(e){
    if(!start) return;
    var t = e.touches[0];
    if(Math.abs(t.clientX - start.x) > 10 || Math.abs(t.clientY - start.y) > 10){ clearTimeout(timer); start = null; }
  }, {passive: true});
  document.addEventListener("touchend", function(){ clearTimeout(timer); start = null; }, {passive: true});
  document.addEventListener("scroll", hide, {passive: true, capture: true});
  // a long press reads the tooltip; it shouldn't also press the button
  document.addEventListener("click", function(e){
    if(swallowClick){ swallowClick = false; e.preventDefault(); e.stopPropagation(); return; }
    var el = titled(e.target);
    if(el && getComputedStyle(el).cursor === "help") show(el);
  }, true);
  document.addEventListener("contextmenu", function(e){ if(tip) e.preventDefault(); }, true);
})();
