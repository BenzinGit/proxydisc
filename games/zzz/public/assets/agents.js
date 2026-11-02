// Set/stat variant tabs on the agent build pages.
document.querySelectorAll('[data-combos]').forEach(function(root){
  var si=0, ti=0;
  function show(){ root.querySelectorAll('[data-combo]').forEach(function(c){ c.hidden = c.getAttribute('data-combo') !== si+'-'+ti; }); }
  root.addEventListener('click', function(e){
    var s=e.target.closest('[data-settab]'), t=e.target.closest('[data-stattab]');
    if(s){ si=+s.getAttribute('data-settab'); show(); } else if(t){ ti=+t.getAttribute('data-stattab'); show(); }
  });
});
