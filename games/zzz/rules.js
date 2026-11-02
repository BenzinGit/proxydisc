// Zenless Zone Zero: the app's behaviour that follows this game's own conventions: which main
// stats each slot can roll, how the image files are named, and how a screenshot's stat panel is
// read. engine/app.js mixes these into the app, so `this` inside them is the app itself and every
// helper in engine/app.js is available. Another game provides the same methods.
const GAME_RULES = {
  slotOptions(slotKey){
    const A = this.constructor;
    if(!slotKey) return [];
    if(A.FIXED_MAIN[slotKey]) return [A.FIXED_MAIN[slotKey]];
    const set = new Set();
    A.AGENTS.forEach(a => a[slotKey].forEach(m => set.add(m)));
    // HP% / ATK% / DEF% can roll in any of slots 4-6 regardless of whether an agent's own
    // recommendation data happens to mention it there — don't let the picker's options depend on
    // that coincidence.
    set.add("HP%"); set.add("ATK%"); set.add("DEF%");
    return Array.from(set).sort((a,b) => {
      let ia = A.MAIN_ORDER.indexOf(a); if(ia < 0) ia = 999;
      let ib = A.MAIN_ORDER.indexOf(b); if(ib < 0) ib = 999;
      return ia - ib || a.localeCompare(b);
    });
  },
  // Landing on a main stat nobody wants would open the tool on an empty RECYCLE screen, so seed
  // with the first option for this slot that some agent running this set actually asks for.
  defaultMain(setName, slotKey){
    const A = this.constructor, opts = this.slotOptions(slotKey);
    if(A.FIXED_MAIN[slotKey]) return opts[0] || "";
    const hit = opts.find(o => A.AGENTS.some(a => this.pieceFor(a, setName) && a[slotKey].indexOf(o) >= 0));
    return hit || opts[0] || "";
  },
  elementFromMain(stat){ const m = /^(.+) DMG$/.exec(stat); return m ? m[1] : null; },
  // Matches the exact filenames under discs/ (Drive_Disc_<Set Name, spaces to underscores>_Icon.webp).
  discIconPath(setName){ return "discs/Drive_Disc_" + setName.replace(/ /g, "_") + "_Icon.webp"; },
  rankIconPath(rank){ return "icons/Icon_AgentRank_" + rank + ".webp"; },
  // Role/element/stat glyphs under icons/. Support and Armorer are distinct roles with their own
  // icons — Armorer is currently Claret only, everyone else buff/support-flavored is Support.
  // "<Element> DMG" main stats reuse that element's own icon — there's no separate DMG icon set.
  roleIconPath(role){
    const file = {Attack:"Attack", Stun:"Stun", Anomaly:"Anomaly", Defense:"Defense", Support:"Support", Armorer:"Armorer", Rupture:"Rupture"}[role];
    return file ? "icons/Icon_" + file + ".webp" : "";
  },
  elementIconPath(el){ return el ? "icons/Icon_" + el + ".webp" : ""; },
  statIconPath(stat){
    // Only an actual element name before " DMG" routes to that element's icon — "CRIT DMG" also
    // ends in " DMG" but isn't elemental, and must fall through to the plain stat icon below.
    const dmg = /^(Physical|Fire|Ice|Electric|Ether|Lumiflux|Wind) DMG$/.exec(stat);
    if(dmg) return this.elementIconPath(dmg[1]);
    return "icons/Icon_Stat_" + stat.replace(/%$/, "").replace(/ /g, "_") + ".webp";
  },
  agentIconPath(name){
    const n = name.replace(/ /g, "_");
    if(this.state.portraitMode !== "icon") return "icons/Avatar_" + n + ".webp";
    const suffix = this.constructor.NO_CIRCLE_ICON.has(name) ? "_Icon.webp" : "_Circle_Icon.webp";
    return "icons/Agent_" + n + suffix;
  },
  parseStatLine(text){
    const t = String(text).replace(/[|]/g, " ").trim();
    const val = t.match(/([0-9][0-9.,]*)\s*(%?)\s*$/);
    if(!val) return null;
    const pct = !!val[2];
    const roll = t.match(/\+\s*([1-5])(?=\s|$)/);
    const cut = roll ? t.indexOf(roll[0]) : t.lastIndexOf(val[0]);
    const label = t.slice(0, cut).replace(/bonus/i, "").trim();
    const base = this.fuzzyPick(label, ["HP","ATK","DEF","CRIT Rate","CRIT DMG","PEN","PEN Ratio","Anomaly Proficiency",
      "Anomaly Mastery","Impact","Energy Regen","Physical DMG","Fire DMG","Ice DMG","Electric DMG","Ether DMG","Lumiflux DMG"], .34);
    if(!base) return null;
    let name = base;
    if(pct && (base === "HP" || base === "ATK" || base === "DEF")) name = base + "%";
    if(base === "PEN" && pct) name = "PEN Ratio";
    return {name: name, rolls: roll ? +roll[1] : 0};
  },
  parseDiscText(data){
    const A = this.constructor;
    let lines = (data.lines || []).map(l => ({t: (l.text || "").replace(/\s+/g, " ").trim(), b: l.bbox})).filter(l => l.t);
    const W = Math.max(1, ...lines.map(l => l.b.x1));
    const mainIdx = lines.findIndex(l => /ma[il1]n\s*s[tl]at/i.test(l.t));
    if(mainIdx >= 0){
      const x = lines[mainIdx].b.x0 - W * .05;
      lines = lines.filter(l => l.b.x1 > x);
    }
    const find = re => lines.findIndex(l => re.test(l.t));
    const mi = find(/ma[il1]n\s*s[tl]at/i), si = find(/sub.?s[tl]at/i);
    const li = find(/lv\.?\s*\d{1,2}\s*\/\s*1\s*5/i);
    const out = {notes: []};
    // set + slot: the text above the level line, title spread over one or two lines
    const headEnd = li >= 0 ? li : (mi >= 0 ? mi : Math.min(4, lines.length));
    const head = lines.slice(0, headEnd).map(l => l.t).join(" ").replace(/detail/i, " ");
    const slotM = head.match(/[\[(|{]\s*([1-6])\s*[\])|}]/) || head.match(/\b([1-6])\s*[\])|}]/);
    if(slotM) out.slot = "s" + slotM[1];
    out.set = this.fuzzyPick(head.replace(/[\[(|{]\s*[1-6]\s*[\])|}]/, " "), Object.keys(A.SETS), .3);
    if(li >= 0){ const m = lines[li].t.match(/lv\.?\s*(\d{1,2})/i); if(m) out.level = Math.min(15, +m[1]); }
    if(mi >= 0){
      for(let i = mi + 1; i < lines.length && i !== si; i++){ const p = this.parseStatLine(lines[i].t); if(p){ out.main = p.name; break; } }
    }
    const subs = [];
    for(let i = (si >= 0 ? si + 1 : (mi >= 0 ? mi + 2 : 0)); i < lines.length && subs.length < 4; i++){
      const p = this.parseStatLine(lines[i].t);
      if(p && A.SUBSTAT_ORDER.indexOf(p.name) >= 0 && !subs.some(x => x.name === p.name)) subs.push(p);
    }
    out.subs = subs;
    return out;
  },
};
