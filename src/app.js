class Component extends DCLogic {
  static AGENTS = [
    {n:"Phoenix", r:"S", role:"Anomaly", el:"Fire", s4:["Anomaly Proficiency"], s5:["Fire DMG","PEN Ratio","ATK%"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Freedom Blues", p2:"Phaethon's Melody"},
    {n:"Roxy", r:"S", role:"Stun", el:"Wind", s4:["CRIT Rate"], s5:["PEN Ratio","Wind DMG","ATK%"], s6:["Energy Regen"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Moonlight Lullaby"},
    {n:"Zhao", r:"S", role:"Support", el:"Ice", s4:["HP%"], s5:["HP%"], s6:["Energy Regen"], sub:["HP%","HP","CRIT Rate","CRIT DMG"], p4:"Bunny in Wonderland", p2:"Yunkui Tales"},
    {n:"Ye Shunguang", r:"S", role:"Attack", el:"Physical", s4:["ATK%","CRIT DMG"], s5:["PEN Ratio","ATK%"], s6:["ATK%"], sub:["CRIT DMG","CRIT Rate","ATK%","PEN","ATK"], p4:"White Water Ballad", p2:"Branch & Blade Song"},
    {n:"Banyue", r:"S", role:"Rupture", el:"Fire", s4:["CRIT DMG","CRIT Rate"], s5:["Fire DMG","HP%"], s6:["HP%"], sub:["CRIT Rate","CRIT DMG","HP%","ATK%","HP"], p4:"Yunkui Tales", p2:"Woodpecker Electro"},
    {n:"Dialyn", r:"S", role:"Stun", el:"Physical", s4:["CRIT Rate"], s5:["ATK%","Physical DMG","PEN Ratio"], s6:["Energy Regen"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Woodpecker Electro"},
    {n:"Yidhari", r:"S", role:"Rupture", el:"Ice", s4:["CRIT Rate","CRIT DMG"], s5:["Ice DMG","HP%"], s6:["HP%"], sub:["CRIT Rate","CRIT DMG","HP%","ATK%","HP"], p4:"Yunkui Tales", p2:"Woodpecker Electro"},
    {n:"Lucia", r:"S", role:"Support", el:"Ether", s4:["HP%"], s5:["HP%"], s6:["HP%"], sub:["HP%","HP","CRIT Rate","CRIT DMG"], p4:"Moonlight Lullaby", p2:"Yunkui Tales"},
    {n:"Orphie and Magus", r:"S", role:"Attack", el:"Fire", s4:["CRIT DMG","CRIT Rate"], s5:["Fire DMG","ATK%"], s6:["Energy Regen","ATK%"], sub:["CRIT DMG","CRIT Rate","ATK%","PEN","ATK"], p4:"Shadow Harmony", p2:"Swing Jazz"},
    {n:"Seed", r:"S", role:"Attack", el:"Electric", s4:["CRIT DMG","CRIT Rate"], s5:["PEN Ratio","ATK%","Electric DMG"], s6:["ATK%"], sub:["CRIT DMG","CRIT Rate","ATK%","PEN","ATK"], p4:"Dawn's Bloom", p2:"Woodpecker Electro"},
    {n:"Alice", r:"S", role:"Anomaly", el:"Physical", s4:["Anomaly Proficiency","ATK%"], s5:["PEN Ratio","Physical DMG","ATK%"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Fanged Metal", p2:"Phaethon's Melody"},
    {n:"Yuzuha", r:"S", role:"Support", el:"Physical", s4:["ATK%","Anomaly Proficiency"], s5:["ATK%","PEN Ratio"], s6:["Anomaly Mastery","ATK%"], sub:["ATK%","ATK","Anomaly Proficiency","CRIT Rate","CRIT DMG","PEN"], p4:"Moonlight Lullaby", p2:"Phaethon's Melody"},
    {n:"Ju Fufu", r:"S", role:"Stun", el:"Fire", s4:["CRIT Rate","ATK%"], s5:["ATK%"], s6:["Impact","ATK%"], sub:["CRIT Rate","ATK%","ATK","CRIT DMG","PEN"], p4:"King of the Summit", p2:"Shockstar Disco"},
    {n:"Yixuan", r:"S", role:"Rupture", el:"Ether", s4:["CRIT DMG","CRIT Rate"], s5:["Ether DMG","HP%"], s6:["HP%"], sub:["CRIT Rate","CRIT DMG","HP%","ATK%","HP"], p4:"Yunkui Tales", p2:"Woodpecker Electro"},
    {n:"Hugo", r:"S", role:"Attack", el:"Ice", s4:["CRIT DMG","CRIT Rate"], s5:["Ice DMG","ATK%","PEN Ratio"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","ATK","PEN"], p4:"Hormone Punk", p2:"Polar Metal"},
    {n:"Vivian", r:"S", role:"Anomaly", el:"Ether", s4:["Anomaly Proficiency"], s5:["Ether DMG","PEN Ratio","ATK%"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","ATK","PEN"], p4:"Phaethon's Melody", p2:"Freedom Blues"},
    {n:"Trigger", r:"S", role:"Stun", el:"Electric", s4:["CRIT Rate"], s5:["Electric DMG","ATK%"], s6:["Impact"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Shockstar Disco"},
    {n:"Soldier 0 Anby", r:"S", role:"Attack", el:"Electric", s4:["CRIT Rate","CRIT DMG"], s5:["Electric DMG","ATK%"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Shadow Harmony", p2:"Woodpecker Electro"},
    {n:"Evelyn", r:"S", role:"Attack", el:"Fire", s4:["ATK%","CRIT DMG"], s5:["PEN Ratio","Fire DMG","ATK%"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Hormone Punk", p2:"Branch & Blade Song"},
    {n:"Astra Yao", r:"S", role:"Support", el:"Ether", s4:["ATK%"], s5:["ATK%"], s6:["Energy Regen","ATK%"], sub:["ATK%","ATK","Anomaly Proficiency","PEN"], p4:"Astral Voice", p2:"Swing Jazz"},
    {n:"Harumasa", r:"S", role:"Attack", el:"Electric", s4:["ATK%","CRIT DMG","CRIT Rate"], s5:["ATK%","Electric DMG"], s6:["ATK%"], sub:["CRIT Rate","ATK%","CRIT DMG","PEN","ATK"], p4:"Thunder Metal", p2:"Hormone Punk"},
    {n:"Miyabi", r:"S", role:"Attack", el:"Ice", s4:["CRIT Rate","ATK%"], s5:["Ice DMG","ATK%"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","Anomaly Proficiency","ATK","PEN"], p4:"Branch & Blade Song", p2:"Polar Metal"},
    {n:"Lighter", r:"S", role:"Stun", el:"Fire", s4:["CRIT Rate","CRIT DMG"], s5:["ATK%","Fire DMG","PEN Ratio"], s6:["Impact"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Shockstar Disco"},
    {n:"Yanagi", r:"S", role:"Anomaly", el:"Electric", s4:["Anomaly Proficiency"], s5:["PEN Ratio","Electric DMG","ATK%"], s6:["Anomaly Mastery","ATK%"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Chaos Jazz", p2:"Freedom Blues"},
    {n:"Burnice", r:"S", role:"Anomaly", el:"Fire", s4:["Anomaly Proficiency"], s5:["PEN Ratio","Fire DMG"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Chaos Jazz", p2:"Swing Jazz"},
    {n:"Caesar", r:"S", role:"Defense", el:"Physical", s4:["CRIT Rate","Anomaly Proficiency"], s5:["Physical DMG","ATK%","PEN Ratio"], s6:["Impact"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Astral Voice", p2:"Shockstar Disco"},
    {n:"Jane", r:"S", role:"Anomaly", el:"Physical", s4:["Anomaly Proficiency"], s5:["PEN Ratio","Physical DMG","ATK%"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Fanged Metal", p2:"Puffer Electro"},
    {n:"Qingyi", r:"S", role:"Stun", el:"Electric", s4:["CRIT Rate","CRIT DMG"], s5:["Electric DMG","ATK%"], s6:["Impact"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Shockstar Disco"},
    {n:"Zhu Yuan", r:"S", role:"Attack", el:"Ether", s4:["CRIT DMG","CRIT Rate"], s5:["ATK%","Ether DMG","PEN Ratio"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Woodpecker Electro", p2:"Branch & Blade Song"},
    {n:"Nekomata", r:"S", role:"Attack", el:"Physical", s4:["CRIT Rate","CRIT DMG","ATK%"], s5:["PEN Ratio","ATK%","Physical DMG"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Woodpecker Electro", p2:"Puffer Electro"},
    {n:"Koleda", r:"S", role:"Stun", el:"Fire", s4:["CRIT Rate","CRIT DMG"], s5:["Fire DMG","ATK%"], s6:["Impact"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Shockstar Disco"},
    {n:"Grace", r:"S", role:"Anomaly", el:"Electric", s4:["Anomaly Proficiency","ATK%"], s5:["PEN Ratio","Electric DMG","ATK%"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Thunder Metal", p2:"Puffer Electro"},
    {n:"Lycaon", r:"S", role:"Stun", el:"Ice", s4:["CRIT Rate","CRIT DMG"], s5:["Ice DMG","ATK%"], s6:["Impact"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Shockstar Disco"},
    {n:"Soldier 11", r:"S", role:"Attack", el:"Fire", s4:["CRIT Rate","ATK%","CRIT DMG"], s5:["PEN Ratio","ATK%","Fire DMG"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","Anomaly Proficiency","PEN","ATK"], p4:"Woodpecker Electro", p2:"Puffer Electro"},
    {n:"Rina", r:"S", role:"Support", el:"Electric", s4:["ATK%","Anomaly Proficiency","CRIT Rate"], s5:["PEN Ratio"], s6:["Energy Regen"], sub:["Anomaly Proficiency","CRIT Rate","ATK%","CRIT DMG","PEN","ATK"], p4:"Moonlight Lullaby", p2:"Puffer Electro"},
    {n:"Ellen", r:"S", role:"Attack", el:"Ice", s4:["CRIT DMG"], s5:["PEN Ratio","Ice DMG"], s6:["ATK%"], sub:["CRIT DMG","CRIT Rate","ATK%","PEN","ATK"], p4:"Woodpecker Electro", p2:"Puffer Electro"},
    {n:"Sigrid", r:"S", role:"Attack", el:"Ice", s4:["CRIT DMG","ATK%"], s5:["PEN Ratio"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Hormone Punk", p2:"Puffer Electro"},
    {n:"Remielle", r:"S", role:"Anomaly", el:"Lumiflux", s4:["Anomaly Proficiency"], s5:["ATK%"], s6:["ATK%"], sub:["ATK%","Anomaly Proficiency","PEN","ATK"], p4:"Feathered Fate", p2:"Chaos Jazz"},
    {n:"Norma", r:"S", role:"Stun", el:"Fire", s4:["CRIT Rate"], s5:["Fire DMG","PEN Ratio","ATK%"], s6:["Energy Regen","Impact"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Moonlight Lullaby"},
    {n:"Cissia", r:"S", role:"Attack", el:"Electric", s4:["CRIT Rate","CRIT DMG"], s5:["Electric DMG","ATK%"], s6:["Energy Regen"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Dawn's Bloom", p2:"Swing Jazz"},
    {n:"Aria", r:"S", role:"Anomaly", el:"Ether", s4:["Anomaly Proficiency"], s5:["Ether DMG","ATK%","PEN Ratio"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Phaethon's Melody", p2:"Freedom Blues"},
    {n:"Manato", r:"A", role:"Rupture", el:"Fire", s4:["CRIT Rate","CRIT DMG"], s5:["Fire DMG","HP%"], s6:["HP%"], sub:["CRIT Rate","CRIT DMG","HP%","HP","ATK%","ATK"], p4:"Yunkui Tales", p2:"Woodpecker Electro"},
    {n:"Pan Yinhu", r:"A", role:"Defense", el:"Physical", s4:["CRIT Rate","CRIT DMG","ATK%"], s5:["Physical DMG","ATK%"], s6:["ATK%"], sub:["ATK%","ATK","CRIT Rate","CRIT DMG","PEN"], p4:"Astral Voice", p2:"Hormone Punk"},
    {n:"Pulchra", r:"A", role:"Stun", el:"Physical", s4:["Anomaly Proficiency"], s5:["ATK%","Physical DMG"], s6:["Impact"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Shockstar Disco"},
    {n:"Seth", r:"A", role:"Defense", el:"Electric", s4:["ATK%","Anomaly Proficiency"], s5:["ATK%","Electric DMG"], s6:["Energy Regen","Anomaly Mastery"], sub:["ATK%","Anomaly Proficiency","ATK","PEN"], p4:"Astral Voice", p2:"Swing Jazz"},
    {n:"Anton", r:"A", role:"Attack", el:"Electric", s4:["CRIT Rate","CRIT DMG"], s5:["Electric DMG"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Thunder Metal", p2:"Woodpecker Electro"},
    {n:"Ben", r:"A", role:"Defense", el:"Fire", s4:["CRIT Rate","CRIT DMG"], s5:["Fire DMG","PEN Ratio"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Woodpecker Electro", p2:"Branch & Blade Song"},
    {n:"Soukaku", r:"A", role:"Support", el:"Ice", s4:["ATK%","CRIT Rate"], s5:["ATK%","Ice DMG"], s6:["Energy Regen","ATK%"], sub:["ATK%","CRIT Rate","CRIT DMG","PEN","ATK"], p4:"Freedom Blues", p2:"Phaethon's Melody"},
    {n:"Corin", r:"A", role:"Attack", el:"Physical", s4:["CRIT Rate"], s5:["PEN Ratio","ATK%","Physical DMG"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Hormone Punk", p2:"Woodpecker Electro"},
    {n:"Nicole", r:"A", role:"Anomaly", el:"Ether", s4:["ATK%","Anomaly Proficiency"], s5:["Ether DMG","ATK%"], s6:["Energy Regen","ATK%"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Moonlight Lullaby", p2:"Phaethon's Melody"},
    {n:"Piper", r:"A", role:"Anomaly", el:"Physical", s4:["Anomaly Proficiency"], s5:["PEN Ratio","ATK%","Physical DMG"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Fanged Metal", p2:"Phaethon's Melody"},
    {n:"Lucy", r:"A", role:"Support", el:"Fire", s4:["ATK%","CRIT Rate"], s5:["ATK%"], s6:["Energy Regen","ATK%"], sub:["ATK%","CRIT Rate","CRIT DMG","PEN","ATK"], p4:"Moonlight Lullaby", p2:"Puffer Electro"},
    {n:"Billy", r:"A", role:"Attack", el:"Physical", s4:["CRIT Rate","CRIT DMG"], s5:["PEN Ratio","ATK%","Physical DMG"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"Woodpecker Electro", p2:"Branch & Blade Song"},
    {n:"Anby", r:"A", role:"Stun", el:"Electric", s4:["CRIT Rate","CRIT DMG"], s5:["Electric DMG","ATK%"], s6:["Impact"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"King of the Summit", p2:"Shockstar Disco"},
    {n:"Starlight - Billy", r:"S", role:"Rupture", el:"Physical", s4:["CRIT Rate","CRIT DMG","HP%"], s5:["Physical DMG","HP%"], s6:["HP%"], sub:["CRIT Rate","CRIT DMG","HP%","HP","ATK"], p4:"Yunkui Tales", p2:"Woodpecker Electro"},
    {n:"Claret", r:"S", role:"Armorer", el:"Electric", s4:["CRIT Rate"], s5:["PEN Ratio"], s6:["DEF%"], sub:["CRIT Rate","DEF%","CRIT DMG","PEN","DEF"], p4:"Thorned Rose", p2:"Puffer Electro"},
    {n:"Nangong Yu", r:"S", role:"Stun", el:"Ether", s4:["Anomaly Proficiency"], s5:["Ether DMG","ATK%","PEN Ratio"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Phaethon's Melody", p2:"Chaos Jazz"},
    {n:"Promeia", r:"S", role:"Anomaly", el:"Ice", s4:["Anomaly Proficiency"], s5:["Ice DMG","ATK%","PEN Ratio"], s6:["Anomaly Mastery"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Notes From the Chained", p2:"Phaethon's Melody"},
    {n:"Pyrois", r:"S", role:"Attack", el:"Ether", s4:["CRIT Rate","CRIT DMG"], s5:["PEN Ratio","Ether DMG","ATK%"], s6:["ATK%"], sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"], p4:"The Sky Ablaze", p2:"Puffer Electro"},
    {n:"Sunna", r:"S", role:"Support", el:"Physical", s4:["ATK%"], s5:["ATK%"], s6:["Energy Regen"], sub:["ATK%","ATK","Anomaly Proficiency","PEN"], p4:"Moonlight Lullaby", p2:"Swing Jazz"},
    {n:"Velina", r:"S", role:"Anomaly", el:"Wind", s4:["Anomaly Proficiency"], s5:["Wind DMG","ATK%","PEN Ratio"], s6:["Energy Regen"], sub:["Anomaly Proficiency","ATK%","PEN","ATK"], p4:"Wuthering Salon", p2:"Swing Jazz"}
  ];
  static SETS = {
    "Astral Voice": {p2:"ATK +10%.", p4:"Entering via Quick Assist grants a stack (max 3, 15s) adding +8% DMG for the entrant."},
    "Branch & Blade Song": {p2:"CRIT DMG +16%.", p4:"At 115+ Anomaly Mastery, equipper's CRIT DMG +30%. Freeze/Shatter triggers also grant CRIT Rate +12% (15s)."},
    "Bunny in Wonderland": {p2:"HP +10%.", p4:"If equipper is Defense: EX Special or Defensive/Evasive Assists grant squad DMG +6% (max 3, 25s)."},
    "Chaos Jazz": {p2:"Anomaly Proficiency +30.", p4:"Fire/Electric DMG +15%. Off-field EX Special/Assist DMG +20%, continuing 5s on-field (every 7.5s)."},
    "Chaotic Metal": {p2:"Ether DMG +10%.", p4:"Equipper's CRIT DMG +20%. Corruption DMG triggers add +5.5% more, stacking 6x, 8s, refreshing."},
    "Dawn's Bloom": {p2:"Basic Attack DMG +15%.", p4:"Basic Attack DMG +20%. For Attack equippers, EX Special/Ultimate adds +20% more for 25s, refreshing."},
    "Fanged Metal": {p2:"Physical DMG +10%.", p4:"Whenever a squad member inflicts Assault on an enemy, the equipper deals 35% additional DMG to the target for 12s."},
    "Feathered Fate": {p2:"Anomaly Proficiency +30.", p4:"On entering, gain Anomaly Proficiency +50 (persists off-field). Lumiflux equippers also get Anomaly DMG +15% (15s)."},
    "Freedom Blues": {p2:"Anomaly Proficiency +30.", p4:"EX Special hits reduce target's Anomaly Buildup RES (to equipper's attribute) by 20% for 8s."},
    "Hormone Punk": {p2:"ATK +10%.", p4:"Upon entering combat or switching in, its user's ATK increases by 25% for 10s. This effect can trigger once every 20s."},
    "Inferno Metal": {p2:"Fire DMG +10%.", p4:"Upon hitting a Burning enemy, the equipper's CRIT Rate is increased by 28% for 8s."},
    "King of the Summit": {p2:"Daze dealt +6%.", p4:"Stun equipper's EX Special/Chain Attack grants squad CRIT DMG +15% (+15% more if CRIT Rate ≥50%), 15s."},
    "Moonlight Lullaby": {p2:"Energy Regen +20%.", p4:"Support equipper's EX Special/Ultimate grants squad DMG +18% for 25s, refreshing."},
    "Notes From the Chained": {p2:"Ice DMG +10%.", p4:"Abloom triggers grant Anomaly Proficiency +48 (30s); Freeze triggers grant Anomaly/Disorder DMG +16% (30s)."},
    "Phaethon's Melody": {p2:"Anomaly Mastery +8%.", p4:"Squad EX Special use grants equipper Anomaly Proficiency +45 (8s); if from another agent, also Ether DMG +25%."},
    "Polar Metal": {p2:"Ice DMG +10%.", p4:"Basic/Dash Attack DMG +20%. Squad Freeze or Shatter triggers add +20% more for 12s."},
    "Proto Punk": {p2:"Shield effect +15%.", p4:"When any squad member triggers a Defensive Assist or Evasive Assist, all squad members deal 15% increased DMG, lasting 10s."},
    "Puffer Electro": {p2:"PEN Ratio +8%.", p4:"Ultimate DMG increases by 20%. Launching an Ultimate increases the equipper's ATK by 15% for 12s."},
    "Shadow Harmony": {p2:"Aftershock and Dash Attack DMG +15%.", p4:"Aftershock/Dash hits matching equipper's attribute grant a stack: ATK +4%, CRIT Rate +4% (max 3, 15s)."},
    "Shining Aria": {p2:"Ether DMG +10%.", p4:"Basic Attack hits grant equipper Anomaly Proficiency +36 (8s); enemy Stun grants equipper DMG +25% (18s)."},
    "Shockstar Disco": {p2:"Impact +6%.", p4:"Basic Attacks, Dash Attacks, and Dodge Counters inflict 20% more Daze to the main target."},
    "Soul Rock": {p2:"DEF +16%.", p4:"Upon receiving an enemy attack and losing HP, equipper takes 40% less DMG for 2.5s (once per 15s)."},
    "Swing Jazz": {p2:"Energy Regen +20%.", p4:"Launching a Chain Attack or Ultimate increases all squad members' DMG by 15% for 12s."},
    "The Sky Ablaze": {p2:"Ether DMG +10%.", p4:"Ether equippers get CRIT DMG +30%. EX Special/Ultimate use also grants ATK +10% for 30s."},
    "Thorned Rose": {p2:"DEF +16%.", p4:"Equipper DMG +15%. At 1000+ initial DEF, CRIT Rate +8%; at 1800+, CRIT Rate +16%."},
    "Thunder Metal": {p2:"Electric DMG +10%.", p4:"As long as an enemy in combat is Shocked, the equipper's ATK is increased by 28%."},
    "White Water Ballad": {p2:"Physical DMG +10%.", p4:"In Ether Veil, CRIT Rate +10% (15s post-exit). Attack equippers activating/extending it get +10% ATK/CRIT Rate more (30s)."},
    "Woodpecker Electro": {p2:"CRIT Rate +8%.", p4:"Crit hits via Basic Attack, Dodge Counter, or EX Special grant ATK +9% for 6s (tracked per skill)."},
    "Wuthering Salon": {p2:"Wind DMG +10%.", p4:"EX Special use grants equipper Anomaly Proficiency +25 (stacks 2x, 40s); Windswept grants DMG +18% (40s)."},
    "Yunkui Tales": {p2:"HP +10%.", p4:"EX Special/Chain/Ultimate grants CRIT Rate +4% (stacks 3x, 15s); at 3 stacks, Sheer DMG +10%."}
  };
  // Per-agent build overrides, keyed by agent name. An agent not listed here gets one build
  // synthesized from their flat p4/p2/s4/s5/s6/sub fields (see getBuilds) — that's every agent
  // today. Add an entry here to give someone named alternate builds; each build's p2 is an
  // array (first = recommended, shown on the tile; the rest surface in the "+N" popover).
  // Sets and stats are SEPARATE build axes: which discs you farm is a gearing decision, while
  // main stats/substats follow the team an agent is slotted into. Switching one never reassigns
  // the other, so each gets its own tab strip and its own selection index. An agent missing from
  // here (today, everyone but these four) gets exactly one of each, synthesized in getAgentBuilds
  // from their flat p4/p2/s4/s5/s6/sub fields. note is a real caveat/bonus blurb — leave it "" on
  // an option unless there's something genuinely worth flagging; only a non-empty note earns the
  // "*" on its tab and a visible line under the section header.
  static BUILDS = {
    "Phoenix": {
      sets: [
        {label:"Primary", note:"",
          p4:"Freedom Blues", p2:["Phaethon's Melody"]},
        {label:"Chaos Jazz", note:"",
          p4:"Chaos Jazz", p2:["Phaethon's Melody"]},
        {label:"Feathered Fate", note:"",
          p4:"Feathered Fate", p2:["Phaethon's Melody"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:["Fire DMG","PEN Ratio","ATK%"], s6:["Anomaly Mastery"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]}
      ]
    },
    "Roxy": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:[["Moonlight Lullaby","Swing Jazz"]]},
        {label:"Armorer team", note:"",
          p4:"Astral Voice", p2:[["Moonlight Lullaby","Swing Jazz"]]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate"], s5:["PEN Ratio",["Wind DMG","ATK%"]], s6:["Energy Regen"]},
          sub:["CRIT Rate","CRIT DMG","ATK%","PEN","ATK"]}
      ]
    },
    "Alice": {
      sets: [
        {label:"Primary", note:"",
          p4:"Fanged Metal", p2:["Phaethon's Melody","Puffer Electro","Freedom Blues","Chaos Jazz","Astral Voice"]},
        {label:"Alternative", note:"",
          p4:"Hormone Punk", p2:["Phaethon's Melody","Puffer Electro","Freedom Blues","Chaos Jazz","Fanged Metal","Astral Voice"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency","ATK%"], s5:["PEN Ratio","Physical DMG","ATK%"], s6:["Anomaly Mastery"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]}
      ]
    },
    "Anby": {
      sets: [
        {label:"Primary", note:"", p4:"King of the Summit", p2:["Shockstar Disco","Swing Jazz"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate","CRIT DMG"], s5:["Electric DMG","ATK%"], s6:["Impact"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Anton": {
      sets: [
        {label:"Primary", note:"", p4:"Thunder Metal", p2:["Woodpecker Electro","Hormone Punk","Puffer Electro"]},
        {label:"Alternative", note:"", p4:"Puffer Electro", p2:["Woodpecker Electro","Hormone Punk","Thunder Metal"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate","CRIT DMG"], s5:["Electric DMG"], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Aria": {
      sets: [
        {label:"Primary", note:"", p4:"Phaethon's Melody", p2:[["Freedom Blues","Chaos Jazz"], "Shining Aria", "Chaotic Metal"]},
        {label:"Alternative", note:"", p4:"Shining Aria", p2:["Phaethon's Melody","Freedom Blues","Chaos Jazz"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:[["Ether DMG","ATK%"], "PEN Ratio"], s6:["Anomaly Mastery"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]}
      ]
    },
    "Astra Yao": {
      sets: [
        {label:"Primary", note:"",
          p4:"Astral Voice", p2:[["Swing Jazz","Moonlight Lullaby"], "Hormone Punk"]},
        {label:"Alternative", note:"",
          p4:"Moonlight Lullaby", p2:["Swing Jazz", "Hormone Punk", "Astral Voice"]}
      ],
      stats: [
        {label:"Anomaly Build", note:"",
          mains:{s4:["ATK%"], s5:["ATK%"], s6:[["Energy Regen","ATK%"]]},
          sub:["ATK%","ATK","Anomaly Proficiency","PEN"],
          subNotes:{"ATK":"Top Priorities Until Ability Cap"}},
        {label:"CRIT Build", note:"",
          mains:{s4:["ATK%"], s5:["ATK%"], s6:[["Energy Regen","ATK%"]]},
          sub:["ATK%","ATK",["CRIT Rate","CRIT DMG"],"PEN"],
          subNotes:{"ATK":"Top Priorities Until Ability Cap"}}
      ]
    },
    "Banyue": {
      sets: [
        {label:"Primary", note:"",
          p4:"Yunkui Tales", p2:["Woodpecker Electro","Branch & Blade Song"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT DMG","CRIT Rate"], s5:["Fire DMG","HP%"], s6:["HP%"]},
          sub:[["CRIT Rate","CRIT DMG"], "HP%", "ATK%", "HP"]}
      ]
    },
    "Ben": {
      sets: [
        {label:"Primary", note:"",
          p4:"Woodpecker Electro", p2:["Branch & Blade Song","Inferno Metal","Astral Voice","Hormone Punk","Puffer Electro"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Woodpecker Electro","Branch & Blade Song","Inferno Metal","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:[["Fire DMG","PEN Ratio"]], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]],
          subNotes:{"CRIT Rate":"Aim for 70%+."}}
      ]
    },
    "Billy": {
      sets: [
        {label:"Primary", note:"",
          p4:"Woodpecker Electro", p2:["Branch & Blade Song","Hormone Punk","Astral Voice","Puffer Electro"]},
        {label:"Dash Build", note:"",
          p4:"Shadow Harmony", p2:["Woodpecker Electro","Branch & Blade Song","Puffer Electro"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:[["PEN Ratio","ATK%"], "Physical DMG"], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Burnice": {
      sets: [
        {label:"Primary", note:"",
          p4:"Chaos Jazz", p2:[["Swing Jazz","Moonlight Lullaby"]]},
        {label:"Wind Team", note:"",
          p4:"Freedom Blues", p2:[["Swing Jazz","Moonlight Lullaby"]]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:[["PEN Ratio","Fire DMG"]], s6:["Anomaly Mastery"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]}
      ]
    },
    "Caesar": {
      sets: [
        {label:"Primary", note:"",
          p4:"Astral Voice", p2:["Shockstar Disco","King of the Summit","Proto Punk"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["Shockstar Disco","King of the Summit"]},
        {label:"Physical Anomaly", note:"",
          p4:"Freedom Blues", p2:["Shockstar Disco","King of the Summit","Proto Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","Anomaly Proficiency"]], s5:["Physical DMG", ["ATK%","PEN Ratio"]], s6:["Impact"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]},
        {label:"Alternative", note:"",
          mains:{s4:[["CRIT Rate","Anomaly Proficiency"]], s5:["Physical DMG", ["ATK%","PEN Ratio"]], s6:["Impact"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]}
      ]
    },
    "Cissia": {
      sets: [
        {label:"Primary", note:"",
          p4:"Dawn's Bloom", p2:[["Swing Jazz","Moonlight Lullaby"], "Branch & Blade Song", "Astral Voice", "Hormone Punk", "Thunder Metal", "Woodpecker Electro"]},
        {label:"With Seed", note:"",
          p4:"Astral Voice", p2:[["Swing Jazz","Moonlight Lullaby"], "Branch & Blade Song", "Thunder Metal", "Woodpecker Electro"]},
        {label:"Electric Team", note:"",
          p4:"Thunder Metal", p2:[["Swing Jazz","Moonlight Lullaby"], "Branch & Blade Song"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate","CRIT DMG"], s5:["Electric DMG","ATK%"], s6:["Energy Regen"]},
          sub:[["CRIT Rate","CRIT DMG","ATK%"], "PEN", "ATK"]}
      ]
    },
    "Corin": {
      sets: [
        {label:"Primary", note:"",
          p4:"Hormone Punk", p2:["Woodpecker Electro","Branch & Blade Song","Fanged Metal","Astral Voice"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Woodpecker Electro","Branch & Blade Song","Fanged Metal","Astral Voice"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate"], s5:["PEN Ratio", ["ATK%","Physical DMG"]], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Dialyn": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:["Woodpecker Electro","Swing Jazz"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate"], s5:[["ATK%","Physical DMG","PEN Ratio"]], s6:["Energy Regen"]},
          sub:["CRIT Rate", ["CRIT DMG","ATK%"], "PEN", "ATK"],
          subNotes:{"CRIT Rate":"Until 100%."}}
      ]
    },
    "Ellen": {
      sets: [
        {label:"Primary", note:"",
          p4:"Woodpecker Electro", p2:["Puffer Electro","Polar Metal","Branch & Blade Song","Astral Voice","Hormone Punk"]},
        {label:"Dash Build", note:"",
          p4:"Shadow Harmony", p2:["Puffer Electro","Woodpecker Electro","Branch & Blade Song","Astral Voice","Hormone Punk"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Woodpecker Electro","Polar Metal","Branch & Blade Song","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT DMG"], s5:["PEN Ratio","Ice DMG"], s6:["ATK%"]},
          sub:[["CRIT DMG","CRIT Rate"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Evelyn": {
      sets: [
        {label:"Primary", note:"",
          p4:"Hormone Punk", p2:["Branch & Blade Song","Woodpecker Electro","Inferno Metal"]},
        {label:"With Astra", note:"",
          p4:"Astral Voice", p2:["Branch & Blade Song","Woodpecker Electro","Inferno Metal"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Branch & Blade Song","Woodpecker Electro","Inferno Metal"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["ATK%","CRIT DMG"], s5:["PEN Ratio","Fire DMG","ATK%"], s6:["ATK%"]},
          sub:["CRIT Rate", ["CRIT DMG","ATK%"], "PEN", "ATK"],
          subNotes:{"CRIT Rate":"Until 75% in stat screen."}}
      ]
    },
    "Grace": {
      sets: [
        {label:"Primary", note:"",
          p4:"Thunder Metal", p2:["Puffer Electro","Phaethon's Melody","Freedom Blues","Astral Voice","Hormone Punk"]},
        {label:"Alternative", note:"",
          p4:"Chaos Jazz", p2:["Puffer Electro","Phaethon's Melody","Freedom Blues","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency","ATK%"], s5:["PEN Ratio", ["Electric DMG","ATK%"]], s6:["Anomaly Mastery"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]}
      ]
    },
    "Harumasa": {
      sets: [
        {label:"Primary", note:"",
          p4:"Thunder Metal", p2:[["Hormone Punk","Astral Voice"],"Branch & Blade Song","Shadow Harmony","Woodpecker Electro"]},
        {label:"Alternative", note:"",
          p4:"Shadow Harmony", p2:["Branch & Blade Song","Woodpecker Electro","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["ATK%", ["CRIT DMG","CRIT Rate"]], s5:["ATK%","Electric DMG"], s6:["ATK%"]},
          sub:["CRIT Rate","ATK%","CRIT DMG","PEN","ATK"],
          subNotes:{"CRIT Rate":"Until 75% in stat screen."}}
      ]
    },
    "Hugo": {
      sets: [
        {label:"Primary", note:"",
          p4:"Hormone Punk", p2:["Polar Metal","Woodpecker Electro","Puffer Electro","Astral Voice","Branch & Blade Song"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Polar Metal","Woodpecker Electro","Hormone Punk","Astral Voice","Branch & Blade Song"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT DMG","CRIT Rate"], s5:["Ice DMG", ["ATK%","PEN Ratio"]], s6:["ATK%"]},
          sub:["CRIT Rate","CRIT DMG","ATK%","ATK","PEN"]}
      ]
    },
    "Jane": {
      sets: [
        {label:"Primary", note:"",
          p4:"Fanged Metal", p2:["Puffer Electro","Phaethon's Melody","Freedom Blues","Chaos Jazz","Astral Voice","Hormone Punk","White Water Ballad"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:["PEN Ratio","Physical DMG","ATK%"], s6:["Anomaly Mastery"]},
          sub:[["Anomaly Proficiency","ATK%"], "PEN", "ATK"]}
      ]
    },
    "Ju Fufu": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:["Shockstar Disco","Woodpecker Electro","Astral Voice","Hormone Punk","Swing Jazz"]},
        {label:"Energy Support", note:"",
          p4:"Swing Jazz", p2:["King of the Summit","Shockstar Disco","Astral Voice","Hormone Punk"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["King of the Summit","Astral Voice","Hormone Punk","Swing Jazz"]},
        {label:"Daze Focus", note:"",
          p4:"Shockstar Disco", p2:["King of the Summit","Astral Voice","Hormone Punk","Swing Jazz"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","ATK%"]], s5:["ATK%"], s6:[["Impact","ATK%"]]},
          sub:["CRIT Rate", ["ATK%","ATK"], "CRIT DMG", "PEN"],
          subNotes:{"CRIT Rate":"Until 50% if running the King of the Summit 4pc.", "ATK":"Stack until ~3400 total ATK."}}
      ]
    },
    "Koleda": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:["Shockstar Disco","Swing Jazz","Moonlight Lullaby"]},
        {label:"Support", note:"",
          p4:"Astral Voice", p2:["King of the Summit","Shockstar Disco","Swing Jazz","Moonlight Lullaby"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:["Fire DMG","ATK%"], s6:["Impact"]},
          sub:["CRIT Rate","CRIT DMG","ATK%",["PEN","ATK"]]}
      ]
    },
    "Lighter": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:["Shockstar Disco","Swing Jazz"]},
        {label:"Support", note:"",
          p4:"Astral Voice", p2:["King of the Summit","Shockstar Disco","Swing Jazz"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["King of the Summit","Shockstar Disco","Swing Jazz"]},
        {label:"Daze Focus", note:"",
          p4:"Shockstar Disco", p2:["King of the Summit","Swing Jazz"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:[["ATK%","Fire DMG","PEN Ratio"]], s6:["Impact"]},
          sub:["CRIT Rate","CRIT DMG","ATK%",["PEN","ATK"]]}
      ]
    },
    "Lucia": {
      sets: [
        {label:"Primary", note:"",
          p4:"Moonlight Lullaby", p2:["Yunkui Tales"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["HP%"], s5:["HP%"], s6:["HP%"]},
          sub:["HP%","HP",["CRIT Rate","CRIT DMG"]]}
      ]
    },
    "Lucy": {
      sets: [
        {label:"Primary", note:"",
          p4:"Moonlight Lullaby", p2:["Puffer Electro","Astral Voice","Hormone Punk","Phaethon's Melody","Chaos Jazz","Fanged Metal"]},
        {label:"Quick Assist", note:"",
          p4:"Astral Voice", p2:["Puffer Electro","Hormone Punk","Phaethon's Melody","Chaos Jazz","Fanged Metal"]},
        {label:"Energy Support", note:"",
          p4:"Swing Jazz", p2:["Puffer Electro","Astral Voice","Hormone Punk","Phaethon's Melody","Chaos Jazz","Fanged Metal"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["ATK%","CRIT Rate"], s5:["ATK%"], s6:[["Energy Regen","ATK%"]]},
          sub:[["ATK%","CRIT Rate","CRIT DMG"], ["PEN","ATK"]],
          subNotes:{"ATK%":"Top priority until ability cap."}}
      ]
    },
    "Lycaon": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:["Shockstar Disco","Swing Jazz","Moonlight Lullaby"]},
        {label:"Support", note:"",
          p4:"Astral Voice", p2:["King of the Summit","Shockstar Disco","Swing Jazz","Moonlight Lullaby"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["King of the Summit","Shockstar Disco","Swing Jazz","Moonlight Lullaby"]},
        {label:"Daze Focus", note:"",
          p4:"Shockstar Disco", p2:["King of the Summit","Swing Jazz","Moonlight Lullaby"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:["Ice DMG","ATK%"], s6:["Impact"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Manato": {
      sets: [
        {label:"Primary", note:"",
          p4:"Yunkui Tales", p2:["Woodpecker Electro","Branch & Blade Song","Astral Voice","Hormone Punk"]},
        {label:"Damage Focus", note:"",
          p4:"Yunkui Tales", p2:["Branch & Blade Song","Woodpecker Electro","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:["Fire DMG","HP%"], s6:["HP%"]},
          sub:[["CRIT Rate","CRIT DMG"], "HP%", "HP", "ATK%", "ATK"]}
      ]
    },
    "Miyabi": {
      sets: [
        {label:"Primary", note:"",
          p4:"Branch & Blade Song", p2:["Polar Metal","Astral Voice","Hormone Punk","Puffer Electro","Woodpecker Electro"]},
        {label:"Alternative", note:"",
          p4:"Woodpecker Electro", p2:["Polar Metal","Astral Voice","Hormone Punk","Puffer Electro","Branch & Blade Song"]},
        {label:"Alternative 2", note:"",
          p4:"Polar Metal", p2:["Woodpecker Electro","Astral Voice","Hormone Punk","Branch & Blade Song","Puffer Electro"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","ATK%"]], s5:[["Ice DMG","ATK%"]], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG","ATK%"], ["Anomaly Proficiency","ATK","PEN"]],
          subNotes:{"CRIT Rate":"Until 80%."}}
      ]
    },
    "Nangong Yu": {
      sets: [
        {label:"Primary", note:"",
          p4:"Phaethon's Melody", p2:[["Chaos Jazz","Freedom Blues"],"Shining Aria","Chaotic Metal","Astral Voice","Hormone Punk"]},
        {label:"Anomaly Focus", note:"",
          p4:"Freedom Blues", p2:["Phaethon's Melody"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:[["Ether DMG","ATK%"], "PEN Ratio"], s6:["Anomaly Mastery"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]}
      ]
    },
    "Nekomata": {
      sets: [
        {label:"Primary", note:"",
          p4:"Woodpecker Electro", p2:["Puffer Electro","Branch & Blade Song","Fanged Metal","Astral Voice","Hormone Punk"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Woodpecker Electro","Branch & Blade Song","Fanged Metal","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate", ["CRIT DMG","ATK%"]], s5:["PEN Ratio","ATK%","Physical DMG"], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG","ATK%"], ["PEN","ATK"]],
          subNotes:{"CRIT Rate":"Until 100%."}}
      ]
    },
    "Nicole": {
      sets: [
        {label:"Primary", note:"",
          p4:"Moonlight Lullaby", p2:["Phaethon's Melody","Astral Voice","Hormone Punk","Chaos Jazz","Freedom Blues"]},
        {label:"Quick Assist", note:"",
          p4:"Astral Voice", p2:["Phaethon's Melody","Hormone Punk","Chaos Jazz","Freedom Blues"]},
        {label:"Energy Support", note:"",
          p4:"Swing Jazz", p2:["Phaethon's Melody","Astral Voice","Hormone Punk","Chaos Jazz","Freedom Blues"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["ATK%","Anomaly Proficiency"]], s5:["Ether DMG","ATK%"], s6:[["Energy Regen","ATK%"]]},
          sub:[["Anomaly Proficiency","ATK%"], ["PEN","ATK"]]}
      ]
    },
    "Norma": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:[["Moonlight Lullaby","Swing Jazz"],"Woodpecker Electro"]},
        {label:"Quick Assist", note:"",
          p4:"Astral Voice", p2:[["Swing Jazz","Moonlight Lullaby"],"Woodpecker Electro"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate"], s5:["Fire DMG","PEN Ratio","ATK%"], s6:[["Energy Regen","Impact"]]},
          sub:["CRIT Rate", ["CRIT DMG","ATK%"], "PEN", "ATK"],
          subNotes:{"CRIT Rate":"Until 100% in combat."}}
      ]
    },
    "Orphie and Magus": {
      sets: [
        {label:"Primary", note:"",
          p4:"Shadow Harmony", p2:["Swing Jazz","Moonlight Lullaby"]},
        {label:"Alternative", note:"",
          p4:"Astral Voice", p2:["Swing Jazz","Moonlight Lullaby"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT DMG","CRIT Rate"]], s5:[["Fire DMG","ATK%"]], s6:[["Energy Regen","ATK%"]]},
          sub:[["CRIT DMG","CRIT Rate"], "ATK%", "PEN", "ATK"]}
      ]
    },
    "Pan Yinhu": {
      sets: [
        {label:"Primary", note:"",
          p4:"Astral Voice", p2:["Hormone Punk","Swing Jazz","Fanged Metal"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["Hormone Punk","Swing Jazz","Fanged Metal"]},
        {label:"Energy Support", note:"",
          p4:"Swing Jazz", p2:["Hormone Punk","Fanged Metal"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"], "ATK%"], s5:["Physical DMG","ATK%"], s6:["ATK%"]},
          sub:[["ATK%","ATK"], ["CRIT Rate","CRIT DMG"], "PEN"],
          subNotes:{"ATK":"Stack until ~3000 total ATK."}}
      ]
    },
    "Piper": {
      sets: [
        {label:"Primary", note:"",
          p4:"Fanged Metal", p2:["Phaethon's Melody","Puffer Electro","Chaos Jazz","Freedom Blues","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:[["PEN Ratio","ATK%","Physical DMG"]], s6:["Anomaly Mastery"]},
          sub:["Anomaly Proficiency","ATK%",["PEN","ATK"]]}
      ]
    },
    "Promeia": {
      sets: [
        {label:"Primary", note:"",
          p4:"Notes From the Chained", p2:["Phaethon's Melody","Freedom Blues","Chaos Jazz","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:[["Ice DMG","ATK%"], "PEN Ratio"], s6:["Anomaly Mastery"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]}
      ]
    },
    "Pulchra": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:["Shockstar Disco","Swing Jazz"]},
        {label:"Support", note:"",
          p4:"Astral Voice", p2:["King of the Summit","Shockstar Disco","Swing Jazz"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["King of the Summit","Shockstar Disco","Swing Jazz"]},
        {label:"Daze Focus", note:"",
          p4:"Shockstar Disco", p2:["King of the Summit","Swing Jazz"]}
      ],
      stats: [
        {label:"Anomaly", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:[["ATK%","Physical DMG"]], s6:["Impact"]},
          sub:["Anomaly Proficiency","ATK%","PEN","ATK"]},
        {label:"CRIT Build", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:[["ATK%","Physical DMG"]], s6:["Impact"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Pyrois": {
      sets: [
        {label:"Primary", note:"",
          p4:"The Sky Ablaze", p2:["Puffer Electro","Branch & Blade Song","Chaotic Metal","Shining Aria","Astral Voice","Hormone Punk"]},
        {label:"Alternative", note:"",
          p4:"Puffer Electro", p2:["Branch & Blade Song","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate","CRIT DMG"], s5:["PEN Ratio","Ether DMG","ATK%"], s6:["ATK%"]},
          sub:["CRIT Rate", ["CRIT DMG","ATK%"], "PEN", "ATK"],
          subNotes:{"CRIT Rate":"Until 100% in combat."}}
      ]
    },
    "Qingyi": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:["Shockstar Disco","Swing Jazz"]},
        {label:"Support", note:"",
          p4:"Astral Voice", p2:["King of the Summit","Shockstar Disco","Swing Jazz"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["King of the Summit","Shockstar Disco","Swing Jazz"]},
        {label:"Daze Focus", note:"",
          p4:"Shockstar Disco", p2:["King of the Summit","Swing Jazz"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:["Electric DMG","ATK%"], s6:["Impact"]},
          sub:["CRIT Rate","CRIT DMG","ATK%",["PEN","ATK"]]}
      ]
    },
    "Remielle": {
      sets: [
        {label:"Primary", note:"",
          p4:"Feathered Fate", p2:[["Chaos Jazz","Freedom Blues"],"Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:["ATK%"], s6:["ATK%"]},
          sub:["ATK%","Anomaly Proficiency","PEN","ATK"],
          subNotes:{"ATK%":"Until 4000 in stat screen."}}
      ]
    },
    "Rina": {
      sets: [
        {label:"Primary", note:"",
          p4:"Moonlight Lullaby", p2:["Puffer Electro"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["ATK%","Anomaly Proficiency","CRIT Rate"]], s5:["PEN Ratio"], s6:["Energy Regen"]},
          sub:[["Anomaly Proficiency","CRIT Rate","ATK%"], "CRIT DMG", "PEN", "ATK"]}
      ]
    },
    "Seed": {
      sets: [
        {label:"Primary", note:"",
          p4:"Dawn's Bloom", p2:["Woodpecker Electro","Branch & Blade Song","Puffer Electro","Thunder Metal","Astral Voice","Hormone Punk"]},
        {label:"Alternative", note:"",
          p4:"Woodpecker Electro", p2:["Branch & Blade Song","Puffer Electro","Dawn's Bloom","Thunder Metal","Astral Voice","Hormone Punk"]},
        {label:"Alternative 2", note:"",
          p4:"Hormone Punk", p2:["Woodpecker Electro","Branch & Blade Song","Dawn's Bloom","Puffer Electro","Thunder Metal"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT DMG","CRIT Rate"], s5:[["PEN Ratio","ATK%","Electric DMG"]], s6:["ATK%"]},
          sub:[["CRIT DMG","CRIT Rate"], "ATK%", "PEN", "ATK"]}
      ]
    },
    "Seth": {
      sets: [
        {label:"Primary", note:"",
          p4:"Astral Voice", p2:["Swing Jazz","Freedom Blues","Chaos Jazz"]},
        {label:"Energy Support", note:"",
          p4:"Swing Jazz", p2:["Hormone Punk","Proto Punk","Shockstar Disco"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["Swing Jazz","Hormone Punk","Shockstar Disco"]},
        {label:"Shock Support", note:"",
          p4:"Freedom Blues", p2:["Swing Jazz","Hormone Punk","Shockstar Disco"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["ATK%","Anomaly Proficiency"]], s5:[["ATK%","Electric DMG"]], s6:[["Energy Regen","Anomaly Mastery"]]},
          sub:["ATK%","Anomaly Proficiency","ATK","PEN"]}
      ]
    },
    "Sigrid": {
      sets: [
        {label:"Primary", note:"",
          p4:"Hormone Punk", p2:["Puffer Electro"]},
        {label:"Alternative", note:"",
          p4:"Dawn's Bloom", p2:["Puffer Electro"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Branch & Blade Song","Astral Voice","Hormone Punk","Polar Metal"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT DMG","ATK%"], s5:["PEN Ratio"], s6:["ATK%"]},
          sub:["CRIT Rate", ["CRIT DMG","ATK%"], "PEN", "ATK"],
          subNotes:{"CRIT Rate":"Until 33.8% in stat screen."}}
      ]
    },
    "Soldier 0 Anby": {
      sets: [
        {label:"Primary", note:"",
          p4:"Shadow Harmony", p2:["Woodpecker Electro","Hormone Punk","Astral Voice","Thunder Metal","Branch & Blade Song","Puffer Electro"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:["Electric DMG","ATK%"], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Soldier 11": {
      sets: [
        {label:"Primary", note:"",
          p4:"Woodpecker Electro", p2:["Puffer Electro","Inferno Metal","Branch & Blade Song","Astral Voice","Hormone Punk","Dawn's Bloom"]},
        {label:"Alternative", note:"",
          p4:"Dawn's Bloom", p2:["Woodpecker Electro","Astral Voice","Hormone Punk","Branch & Blade Song","Inferno Metal","Puffer Electro"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Woodpecker Electro","Astral Voice","Hormone Punk","Branch & Blade Song","Inferno Metal","Dawn's Bloom"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","ATK%","CRIT DMG"]], s5:[["PEN Ratio","ATK%"], "Fire DMG"], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", "Anomaly Proficiency", "PEN", "ATK"]}
      ]
    },
    "Soukaku": {
      sets: [
        {label:"Primary", note:"",
          p4:"Freedom Blues", p2:["Phaethon's Melody","Astral Voice","Hormone Punk","Chaos Jazz"]},
        {label:"Alternative", note:"",
          p4:"Moonlight Lullaby", p2:["Phaethon's Melody","Astral Voice","Hormone Punk","Chaos Jazz","Freedom Blues"]},
        {label:"Quick Assists", note:"",
          p4:"Astral Voice", p2:["Phaethon's Melody","Hormone Punk","Chaos Jazz","Freedom Blues"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["ATK%","CRIT Rate"], s5:["ATK%","Ice DMG"], s6:[["Energy Regen","ATK%"]]},
          sub:[["ATK%","CRIT Rate","CRIT DMG"], ["PEN","ATK"]],
          subNotes:{"ATK%":"Top priority until ability cap."}}
      ]
    },
    "Starlight - Billy": {
      sets: [
        {label:"Primary", note:"",
          p4:"Yunkui Tales", p2:["Woodpecker Electro","Branch & Blade Song","Fanged Metal","White Water Ballad","Astral Voice","Hormone Punk","Bunny in Wonderland"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG","HP%"]], s5:["Physical DMG","HP%"], s6:["HP%"]},
          sub:["CRIT Rate", ["CRIT DMG","HP%"], "HP", "ATK"]}
      ]
    },
    "Claret": {
      sets: [
        {label:"Primary", note:"",
          p4:"Thorned Rose", p2:["Puffer Electro","Woodpecker Electro","Soul Rock","Thunder Metal","Branch & Blade Song"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate"], s5:["PEN Ratio"], s6:["DEF%"]},
          sub:["CRIT Rate","DEF%","CRIT DMG","PEN","DEF"]}
      ]
    },
    "Sunna": {
      sets: [
        {label:"Primary", note:"",
          p4:"Moonlight Lullaby", p2:["Swing Jazz","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Anomaly Build", note:"",
          mains:{s4:["ATK%"], s5:["ATK%"], s6:["Energy Regen"]},
          sub:["ATK%","ATK","Anomaly Proficiency","PEN"],
          subNotes:{"ATK":"Until 3500."}},
        {label:"CRIT Build", note:"",
          mains:{s4:["ATK%"], s5:["ATK%"], s6:["Energy Regen"]},
          sub:["ATK%","ATK",["CRIT Rate","CRIT DMG"],"PEN"],
          subNotes:{"ATK":"Until 3500."}}
      ]
    },
    "Trigger": {
      sets: [
        {label:"Primary", note:"",
          p4:"King of the Summit", p2:["Shockstar Disco","Swing Jazz"]},
        {label:"Support", note:"",
          p4:"Astral Voice", p2:["King of the Summit","Shockstar Disco","Swing Jazz"]},
        {label:"Perfect Assist", note:"",
          p4:"Proto Punk", p2:["King of the Summit","Shockstar Disco","Swing Jazz"]},
        {label:"Daze Focus", note:"",
          p4:"Shockstar Disco", p2:["King of the Summit","Swing Jazz"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["CRIT Rate"], s5:["Electric DMG","ATK%"], s6:["Impact"]},
          sub:[["CRIT Rate","CRIT DMG"], "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Velina": {
      sets: [
        {label:"Primary", note:"",
          p4:"Wuthering Salon", p2:[["Swing Jazz","Moonlight Lullaby"]]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:[["Wind DMG","ATK%","PEN Ratio"]], s6:["Energy Regen"]},
          sub:[["Anomaly Proficiency","ATK%"], "PEN", "ATK"]}
      ]
    },
    "Vivian": {
      sets: [
        {label:"Primary", note:"",
          p4:"Phaethon's Melody", p2:[["Freedom Blues","Chaos Jazz"],"Chaotic Metal","Astral Voice","Hormone Punk","Puffer Electro"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:["Ether DMG", ["PEN Ratio","ATK%"]], s6:["Anomaly Mastery"]},
          // ">>>" in the source guide: Anomaly Proficiency reads as three full tiers ahead of
          // ATK%, not just one — {gap:2} pushes the color ladder those extra two steps.
          sub:["Anomaly Proficiency", {name:"ATK%", gap:2}, ["ATK","PEN"]]}
      ]
    },
    "Yanagi": {
      sets: [
        {label:"Primary", note:"",
          p4:"Chaos Jazz", p2:["Freedom Blues","Puffer Electro","Thunder Metal","Astral Voice","Hormone Punk"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["Anomaly Proficiency"], s5:[["PEN Ratio","Electric DMG"], "ATK%"], s6:["Anomaly Mastery","ATK%"]},
          sub:["Anomaly Proficiency", "ATK%", ["PEN","ATK"]]}
      ]
    },
    "Ye Shunguang": {
      sets: [
        {label:"Primary", note:"",
          p4:"White Water Ballad", p2:["Branch & Blade Song","Puffer Electro","Astral Voice","Hormone Punk","Fanged Metal","Woodpecker Electro"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["ATK%","CRIT DMG"], s5:[["PEN Ratio","ATK%"]], s6:["ATK%"]},
          sub:[["CRIT DMG","CRIT Rate"], "ATK%", "PEN", "ATK"]}
      ]
    },
    "Yidhari": {
      sets: [
        {label:"Primary", note:"",
          p4:"Yunkui Tales", p2:["Woodpecker Electro","Branch & Blade Song"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT Rate","CRIT DMG"]], s5:["Ice DMG","HP%"], s6:["HP%"]},
          sub:[["CRIT Rate","CRIT DMG"], "HP%", ["ATK%","HP"]]}
      ]
    },
    "Yixuan": {
      sets: [
        {label:"Primary", note:"",
          p4:"Yunkui Tales", p2:["Woodpecker Electro","Branch & Blade Song"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT DMG","CRIT Rate"]], s5:["Ether DMG","HP%"], s6:["HP%"]},
          sub:[["CRIT Rate","CRIT DMG"], "HP%", "ATK%", "HP"]}
      ]
    },
    "Yuzuha": {
      sets: [
        {label:"Primary", note:"",
          p4:"Moonlight Lullaby", p2:["Phaethon's Melody","Astral Voice","Hormone Punk","Chaos Jazz","Freedom Blues"]},
        {label:"Quick Assists", note:"",
          p4:"Astral Voice", p2:["Phaethon's Melody","Hormone Punk","Chaos Jazz","Freedom Blues"]}
      ],
      stats: [
        {label:"Physical DMG Team", note:"",
          mains:{s4:[["ATK%","Anomaly Proficiency"]], s5:[["ATK%","PEN Ratio"]], s6:[["Anomaly Mastery","ATK%"]]},
          sub:["ATK%","ATK","Anomaly Proficiency",["CRIT Rate","CRIT DMG"],"PEN"],
          subNotes:{"ATK":"Until 3000."}},
        {label:"Other", note:"",
          mains:{s4:[["ATK%","Anomaly Proficiency"]], s5:[["ATK%","PEN Ratio"]], s6:[["Anomaly Mastery","ATK%"]]},
          sub:["ATK%","ATK","Anomaly Proficiency","PEN"],
          subNotes:{"ATK":"Until 3000."}}
      ]
    },
    "Zhao": {
      sets: [
        {label:"Primary", note:"",
          p4:"Bunny in Wonderland", p2:["Yunkui Tales","Moonlight Lullaby","Swing Jazz"]},
        {label:"Alternative", note:"",
          p4:"Astral Voice", p2:[["Moonlight Lullaby","Swing Jazz"],"Yunkui Tales"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:["HP%"], s5:["HP%"], s6:["Energy Regen"]},
          sub:["HP%","HP",["CRIT Rate","CRIT DMG"]],
          subNotes:{"HP%":"Until 27,000 initial HP.", "HP":"Until 27,000 initial HP."}}
      ]
    },
    "Zhu Yuan": {
      sets: [
        {label:"Primary", note:"",
          p4:"Woodpecker Electro", p2:["Branch & Blade Song","Chaotic Metal","Astral Voice","Hormone Punk","Dawn's Bloom"]},
        {label:"Ether Team", note:"",
          p4:"Chaotic Metal", p2:["Woodpecker Electro","Astral Voice","Hormone Punk","Branch & Blade Song","Dawn's Bloom"]},
        {label:"With Dialyn", note:"",
          p4:"Puffer Electro", p2:["Woodpecker Electro","Branch & Blade Song","Astral Voice","Hormone Punk","Chaotic Metal"]}
      ],
      stats: [
        {label:"Primary", note:"",
          mains:{s4:[["CRIT DMG","CRIT Rate"]], s5:["ATK%", ["Ether DMG","PEN Ratio"]], s6:["ATK%"]},
          sub:[["CRIT Rate","CRIT DMG","ATK%"], "PEN", "ATK"]}
      ]
    }
  };
  static SET_ROLES = {
    "Woodpecker Electro":"Attack","Fanged Metal":"Attack","Dawn's Bloom":"Attack","Yunkui Tales":"Attack",
    "Polar Metal":"Attack","Branch & Blade Song":"Attack","Chaotic Metal":"Attack","Hormone Punk":"Attack",
    "Thunder Metal":"Attack","White Water Ballad":"Attack",
    "Chaos Jazz":"Anomaly","Freedom Blues":"Anomaly","Shining Aria":"Anomaly","Feathered Fate":"Anomaly","Phaethon's Melody":"Anomaly",
    "Shockstar Disco":"Stun","Soul Rock":"Stun","King of the Summit":"Stun",
    "Swing Jazz":"Support","Astral Voice":"Support","Moonlight Lullaby":"Support",
    "Proto Punk":"Defense"
  };
  // Display-only: a sharper read on what each set's 2pc/4pc bonuses actually DO, distilled from
  // their bonus text (element flavor takes priority when the set grants one, else the clearest
  // single mechanic word), for the little line under the disc-preview name. Kept to 1-2 words —
  // this is a quick-glance tag, not a full description. Never used for scoring/coherence checks —
  // SET_ROLES above stays the one enum that logic reads, so a set can say "Ether" here while
  // still checking as "Anomaly" for that purpose.
  static SET_LABELS = {
    "Astral Voice": "Support",
    "Branch & Blade Song": "CRIT",
    "Bunny in Wonderland": "Defense",
    "Chaos Jazz": "Anomaly",
    "Chaotic Metal": "Ether",
    "Dawn's Bloom": "Basic Attack",
    "Fanged Metal": "Physical",
    "Feathered Fate": "Anomaly",
    "Freedom Blues": "Anomaly",
    "Hormone Punk": "Attack",
    "Inferno Metal": "Fire",
    "King of the Summit": "Stun",
    "Moonlight Lullaby": "Support",
    "Notes From the Chained": "Ice",
    "Phaethon's Melody": "Ether",
    "Polar Metal": "Ice",
    "Proto Punk": "Defense",
    "Puffer Electro": "Ultimate",
    "Shadow Harmony": "Aftershock",
    "Shining Aria": "Ether",
    "Shockstar Disco": "Stun",
    "Soul Rock": "Defense",
    "Swing Jazz": "Support",
    "The Sky Ablaze": "Ether",
    "Thorned Rose": "Defense",
    "Thunder Metal": "Electric",
    "White Water Ballad": "Physical",
    "Woodpecker Electro": "CRIT",
    "Wuthering Salon": "Wind",
    "Yunkui Tales": "HP"
  };
  static MAIN_STAT_ROLES = {
    "CRIT Rate":["Attack","Stun"],"CRIT DMG":["Attack","Stun"],
    "Anomaly Proficiency":["Anomaly"],"Anomaly Mastery":["Anomaly"],
    "Impact":["Stun"],"Energy Regen":["Support"],
    "PEN Ratio":["Attack","Anomaly"],
    "ATK%":["Attack","Support","Anomaly","Stun"],"ATK":["Attack","Support","Anomaly","Stun"],
    "HP%":["Support","Defense"],"HP":["Support","Defense"],
    "DEF%":["Defense"],"DEF":["Defense"]
  };
  static SUBSTAT_ORDER = ["CRIT Rate","CRIT DMG","ATK%","ATK","HP%","HP","DEF%","DEF","Anomaly Proficiency","PEN"];
  static SUBSTAT_BASE_S = {"HP":112,"ATK":19,"DEF":15,"HP%":3,"ATK%":3,"DEF%":4.8,"CRIT Rate":2.4,"CRIT DMG":4.8,"PEN":9,"Anomaly Proficiency":9};
  static MAIN_ORDER = ["HP%","ATK%","DEF%","CRIT Rate","CRIT DMG","Anomaly Proficiency","Anomaly Mastery","PEN Ratio","Impact","Energy Regen","Physical DMG","Fire DMG","Ice DMG","Electric DMG","Ether DMG","Lumiflux DMG"];
  static FIXED_MAIN = {s1:"HP", s2:"ATK", s3:"DEF"};
  static SLOT_LABEL = {s1:"Slot 1",s2:"Slot 2",s3:"Slot 3",s4:"Slot 4",s5:"Slot 5",s6:"Slot 6"};
  static STAGES = 5;
  static PERCENT = ["HP%","ATK%","DEF%","CRIT Rate","CRIT DMG"];

  static __report(err, where){
    try {
      var box = document.getElementById('__pd_err');
      if(!box){
        box = document.createElement('div');
        box.id = '__pd_err';
        box.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:2147483647;max-height:60vh;overflow:auto;background:#2a1215;color:#ffb4ad;border-top:2px solid #ff5a5a;padding:14px 16px;font:12px/1.5 ui-monospace,monospace;white-space:pre-wrap;-webkit-user-select:text;user-select:text';
        (document.body || document.documentElement).appendChild(box);
      }
      var msg = (err && (err.name + ': ' + err.message)) || String(err);
      var stack = (err && err.stack) ? String(err.stack).split('\n').slice(0, 6).join('\n') : '(no stack)';
      if(box.textContent.indexOf(msg) < 0){
        box.textContent += (box.textContent ? '\n\n' : 'ProxyDisc hit an error. Screenshot this and send it over.\n\n')
          + '[' + where + '] ' + msg + '\n' + stack;
      }
    } catch(e2){}
  }
  renderVals(){
    try { return this.renderValsInner(); }
    catch(err){
      this.constructor.__report(err, 'renderVals');
      return {};
    }
  }
  componentDidCatch(err, info){
    this.constructor.__report(err, 'render');
  }
  constructor(props){
    super(props);
    const A = this.constructor;
    let shown = [];
    try {
      if(localStorage.getItem("discTriage_initialized")){
        // Older saves kept owned and wishlist apart; both now collapse into one shown list.
        const legacy = JSON.parse(localStorage.getItem("discTriage_owned") || "[]");
        const wish = JSON.parse(localStorage.getItem("discTriage_wishlist") || "[]");
        shown = Array.from(new Set(legacy.concat(wish)));
        // One-shot: fold the old key into the single source of truth and empty it, or a later
        // skip would be undone on reload by whoever still sat in the legacy list.
        if(legacy.length){
          localStorage.setItem("discTriage_wishlist", JSON.stringify(shown));
          localStorage.setItem("discTriage_owned", "[]");
        }
      } else {
        shown = A.AGENTS.map(a => a.n);
        localStorage.setItem("discTriage_wishlist", JSON.stringify(shown));
        localStorage.setItem("discTriage_initialized", "1");
      }
    } catch(e){ shown = A.AGENTS.map(a => a.n); }
    // A renamed or removed agent leaves its old name orphaned in a persisted list — prune those
    // out so the tracked count can never read higher than the roster actually is (e.g. "61/59").
    const liveNames = new Set(A.AGENTS.map(a => a.n));
    const prunedShown = shown.filter(n => liveNames.has(n));
    if(prunedShown.length !== shown.length){
      shown = prunedShown;
      try { localStorage.setItem("discTriage_wishlist", JSON.stringify(shown)); } catch(e){}
    }
    const firstMain = this.defaultMain("Woodpecker Electro", "s4");
    let discs = [];
    try { discs = JSON.parse(localStorage.getItem("discTriage_discs") || "[]"); } catch(e){ discs = []; }
    let discHidden = {};
    try { discHidden = JSON.parse(localStorage.getItem("discTriage_discHidden") || "{}"); } catch(e){ discHidden = {}; }
    let discFav = {};
    try { discFav = JSON.parse(localStorage.getItem("discTriage_discFav") || "{}"); } catch(e){ discFav = {}; }
    let discAssign = {};
    try { discAssign = JSON.parse(localStorage.getItem("discTriage_discAssign") || "{}"); } catch(e){ discAssign = {}; }
    let portraitMode = "icon";
    try { portraitMode = localStorage.getItem("discTriage_portraitMode") || "icon"; } catch(e){}
    let disabledBuilds = {};
    try { disabledBuilds = JSON.parse(localStorage.getItem("discTriage_disabledBuilds") || "{}"); } catch(e){ disabledBuilds = {}; }
    this.state = {
      discs: discs, discDetail: {}, pendingDelete: null,
      upgrades: this.loadUpgrades(), upSel: "", upAgent: "", upSetFilter: "", upSlotFilter: "", upHideMaxed: false,
      discSetFilter: "", discSlotFilter: "", bayAll: false, mineSort: "saved", mineView: "disc", mineAgentQ: "", mineUneq: false, mineUnlev: false, mineSel: "", mineExpanded: {}, mineOthersOpen: false,
      discHidden: discHidden, discFav: discFav, discAssign: discAssign, hiddenOpen: {},
      setPickOpen: false, setQuery: "", bayShowWorn: false, bayAdd: null, guideOpen: (() => { try { return localStorage.getItem("discTriage_guideOpen") === "1"; } catch(e){ return false; } })(), loSort: "score", autoPlan: null, bkPaste: "", bkStatus: "", bkTone: "", bkCode: "", wipeArmed: false, wipeConfirm: "", rackPick: "", discSel: "", selSlot: "", focusAgent: "", bayFloor: "all", selWhoOpen: false, pendingMove: null, discAgentQuery: "",
      gradeFloor: "all", flashMsg: "", portraitMode: portraitMode, nowPlaying: false,
      disabledBuilds: disabledBuilds,
      selectedSet: {}, selectedStat: {},
      // Set by "Show build" — pins Agent Index down to exactly this one agent (name equality,
      // not the search box's substring match, so "Billy" can't also surface "Starlight - Billy").
      // Typing in the search box clears it, handing control back to the normal substring search.
      pinnedAgent: null,
      tab: props.startTab === "score" && props.deepScanEnabled !== true ? "check" : (props.startTab || "check"),
      // Nothing pre-selected on load — the preview reads this as "insert a disc" until the
      // player actually picks a set and a slot themselves.
      setName: "", slot: "", mainStat: "",
      // Kept per slot — entering substats on Slot 1 and switching to Slot 2 shouldn't lose them,
      // and Clear on one slot must never touch what's sitting on any other.
      subsBySlot: {s1:["","","",""], s2:["","","",""], s3:["","","",""], s4:["","","",""], s5:["","","",""], s6:["","","",""]},
      // Level (0-15) and the in-game "+N" upgrade markers per line, also per slot, so a disc that's
      // already levelled can be entered as it looks now instead of rebuilt from +0.
      levelBySlot: {}, rollsBySlot: {},
      expanded: {}, othersOpen: false,
      // Same idea for the 2pc pick within a build: recommended-only by default, every other
      // 2pc option opt-in — the ★/sortable SET column tells you WHICH one's recommended, but
      // that's not the same as being able to hide the rest of a long alternates list.
      // And once more for the main stat itself: best-rank-only by default, 2nd/3rd/etc opt-in.
      ...(() => {
        // Result filters are now remembered, so a choice made in setup or Settings sticks.
        let p = {};
        try { p = JSON.parse(localStorage.getItem("discTriage_prefs") || "{}") || {}; } catch(e){ p = {}; }
        return {primaryFilter: p.primaryFilter || "primary", pieceFilter: p.pieceFilter || "recommended",
          mainFilter: p.mainFilter || "best", showMindscape: p.showMindscape !== false};
      })(),
      setupOpen: false,
      setupPending: (() => { try { return !localStorage.getItem("discTriage_setupDone"); } catch(e){ return false; } })(),
      setupQ: "", undoLabel: "", tourStep: 0, dupPending: null, ocrState: "", ocrMsg: "", ocrNotes: [],
      adsOn: (() => { try { return !localStorage.getItem("discTriage_adsOff"); } catch(e){ return true; } })(),
      patrolSkip: (() => { try { return JSON.parse(localStorage.getItem("discTriage_patrolSkip") || "[]") || []; } catch(e){ return []; } })(),
      patrolView: "", patrolAllSets: false, patrolPickOpen: false,
      // Which column the roster table is sorted by, and which direction. Defaults to the best
      // overall fit first — the RECOMMENDED-2PC / BEST-MAIN-STAT toggles this replaced are now
      // just a click on the SET / MAIN STAT column header instead of a separate hide/show filter.
      sortBy: "rating", sortDir: "desc",
      shown: shown,
      q: "", fRank: "all", fMark: "all", fRole: "all",
      sAgent: A.AGENTS.map(a=>a.n).sort((x,y)=>x.localeCompare(y))[0],
      sSet: "Woodpecker Electro", sSlot: "s4", sMain: firstMain, sLevel: "0",
      sSubs: [{t:"",r:"1"},{t:"",r:"1"},{t:"",r:"1"},{t:"",r:"1"}],
      sResult: null
    };
    // A #fragment link lands straight on its tab (and on its disc, for a shared-disc link) rather
    // than flashing the default tab first.
    Object.assign(this.state, this.hashState());
    this.visualRef = React.createRef();
    // Callback ref, not createRef: each tab lives behind an sc-if, so the check tab's subtree
    // unmounts on tab switch. Re-arming here means the disc replays its entrance every time it
    // comes back — componentDidMount only ever fires once for the whole component.
    this.slideRef = (el) => {
      this._slide = el;
      // Nothing to spin up with no disc selected yet — the red "insert disc" state should sit
      // still, not play an entrance animation over an empty preview.
      if(el && this.state.setName) requestAnimationFrame(() => this.playDisc());
    };
    // agent name -> array of {slideEl, visualEl, timer}, one entry per disc tile on that
    // agent's card (4pc, 2pc). Populated by the ref callbacks built in renderVals().
    this._buildDiscRefs = {};
    // Hold-to-disable bookkeeping: pending 2s timers keyed by "agent|kind|idx", and a flag set
    // the instant a hold matures so the mouseup's own click event can be swallowed once.
    this._holdTimers = {};
    this._holdFired = {};
  }

  // The ruler under the header doubles as a playhead: it spans from the start of the track to the
  // active tab's right edge, so switching tabs slides it along like scrubbing.
  syncPlayhead(){
    const head = document.querySelector('[data-pd="playhead"]');
    const track = document.querySelector('[data-pd="hazard"]');
    // a tab folded into More has no box of its own, so the playhead points at More instead
    const tab = Array.from(document.querySelectorAll('[data-pd="navrow"] > button[data-tabon="1"]')).find(b => b.offsetWidth)
      || document.querySelector('[data-pd="moretab"]');
    if(!head || !track) return;
    if(!tab){ head.style.width = "0px"; return; }
    const tr = track.getBoundingClientRect(), br = tab.getBoundingClientRect();
    const left = Math.max(0, br.left - tr.left), w = Math.max(24, br.width);
    head.style.left = left + "px";
    head.style.width = Math.min(w, tr.width - left) + "px";
  }
  // ---------- address bar ----------
  // #<tab-slug> names the open tab. A shared disc rides along as a query after it
  // (#scrap-or-stash?set=…&slot=4&main=…&lv=6&sub=CRIT+Rate*2…), and a screenshot shared to the
  // installed app arrives as #scrap-or-stash?shared=1. Both are one-shot: once read, the address
  // bar settles back on the plain tab slug.
  tabSlug(id){ const t = this.constructor.TABS.find(x => x.id === id); return t ? t.slug : id; }
  readHash(){
    const raw = (location.hash || "").slice(1), q = raw.indexOf("?");
    const slug = (q < 0 ? raw : raw.slice(0, q)).toLowerCase();
    const t = this.constructor.TABS.find(x => x.slug === slug || x.id === slug);
    return {tab: t ? t.id : null, params: new URLSearchParams(q < 0 ? "" : raw.slice(q + 1))};
  }
  hashState(){
    const h = this.readHash(), n = {};
    if(h.tab) n.tab = h.tab;
    const disc = h.params.has("set") ? this.discFromParams(h.params) : null;
    if(disc) Object.assign(n, disc, {tab: "check"});
    return n;
  }
  applyHash(fromEvent){
    const h = this.readHash();
    const n = this.hashState();
    // back to the bare address (the first entry, before any tab was picked) means the first tab
    if(fromEvent && !h.tab && !n.tab) n.tab = "check";
    if(n.tab === this.state.tab) delete n.tab;
    if(n.tab) this._hashTab = n.tab;
    if(Object.keys(n).length) this.setState(Object.assign(n, {moreOpen: false}));
    if(h.params.has("shared")) this.takeSharedScreenshot();
    if(h.params.has("set") && !n.setName) this.flash("That disc link didn't make sense to us, so nothing was filled in.");
    if([...h.params.keys()].length){
      try { history.replaceState(history.state, "", "#" + this.tabSlug(n.tab || this.state.tab)); } catch(e){}
    }
  }
  // Rebuilds a disc from a link, checking every part against the game data so a mangled or
  // hand-edited link fills in nothing rather than something wrong.
  discFromParams(p){
    const A = this.constructor;
    const set = p.get("set"), slot = "s" + (p.get("slot") || "");
    if(!A.SETS[set] || !A.SLOT_LABEL[slot]) return null;
    const fixed = A.FIXED_MAIN[slot];
    const main = fixed || p.get("main");
    if(!fixed && (A.MAIN_POOL[slot] || []).indexOf(main) < 0) return null;
    const names = [], rolls = [];
    p.getAll("sub").slice(0, 4).forEach(s => {
      const m = /^(.*?)(?:\*(\d))?$/.exec(s);
      if(!m || A.SUBSTAT_ORDER.indexOf(m[1]) < 0 || m[1] === main || names.indexOf(m[1]) >= 0) return;
      names.push(m[1]); rolls.push(Math.min(5, +(m[2] || 0)));
    });
    while(names.length < 4){ names.push(""); rolls.push(0); }
    const lv = Math.max(0, Math.min(15, parseInt(p.get("lv"), 10) || 0));
    return {setName: set, slot: slot, mainStat: main,
      subsBySlot: Object.assign({}, this.state.subsBySlot, {[slot]: names}),
      rollsBySlot: Object.assign({}, this.state.rollsBySlot, {[slot]: rolls}),
      levelBySlot: Object.assign({}, this.state.levelBySlot, {[slot]: lv})};
  }
  discLink(){
    const st = this.state;
    if(!st.setName || !st.slot) return "";
    const p = new URLSearchParams();
    p.set("set", st.setName); p.set("slot", st.slot.slice(1));
    if(!this.constructor.FIXED_MAIN[st.slot] && st.mainStat) p.set("main", st.mainStat);
    const lv = (st.levelBySlot || {})[st.slot] || 0;
    if(lv) p.set("lv", String(lv));
    const subs = (st.subsBySlot || {})[st.slot] || [], rolls = (st.rollsBySlot || {})[st.slot] || [];
    subs.forEach((s, i) => { if(s) p.append("sub", s + (rolls[i] ? "*" + rolls[i] : "")); });
    return location.origin + location.pathname + "#scrap-or-stash?" + p.toString();
  }
  shareDisc(){
    const url = this.discLink();
    if(!url) return;
    const st = this.state, A = this.constructor;
    const title = st.setName + " · " + A.SLOT_LABEL[st.slot] + (st.mainStat ? " · " + st.mainStat : "");
    // The share sheet on phones (straight into Discord or a chat); the clipboard everywhere else.
    if(navigator.share && window.matchMedia && window.matchMedia("(pointer:coarse)").matches){
      navigator.share({title: title, text: title + ", rated on ProxyDisc", url: url}).catch(() => {});
      return;
    }
    const done = () => this.flash("Link copied. Whoever opens it sees this disc, graded for their own roster.");
    if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, () => window.prompt("Copy this link:", url));
    else window.prompt("Copy this link:", url);
  }
  // A screenshot shared to the installed app from the phone's gallery. sw.js receives the share
  // and parks the image in the "pd-share" cache; this picks it up and runs the normal import.
  takeSharedScreenshot(){
    if(!window.caches) return;
    caches.open("pd-share").then(c => c.match("/__shared-screenshot").then(r => {
      if(!r) return;
      return r.blob().then(b => {
        c.delete("/__shared-screenshot");
        this.setState({tab: "check"});
        this.importScreenshot(new File([b], "shared-screenshot", {type: b.type || "image/png"}));
      });
    })).catch(() => {});
  }
  // A short burst of TV static over the page when the tab changes, like flipping channels on one
  // of the Hollow TVs. Pure CSS (see [data-static] in styles.css); reduced motion switches it off.
  tvStatic(){
    const el = document.querySelector('[data-pd="main"]');
    if(!el) return;
    el.removeAttribute("data-static");
    void el.offsetWidth;
    el.setAttribute("data-static", "1");
    clearTimeout(this._staticT);
    this._staticT = setTimeout(() => el.removeAttribute("data-static"), 450);
  }
  // The parody ads' display faces (Pacifico, Bangers, VT323…) are ~130 KB nobody else needs, so
  // they load after the page has settled, and only while the ads are switched on.
  loadJokeFonts(){
    if(this._jokeFonts || !window.PD_JOKE_FONTS) return;
    this._jokeFonts = true;
    const go = () => {
      const l = document.createElement("link");
      l.rel = "stylesheet"; l.href = window.PD_JOKE_FONTS;
      document.head.appendChild(l);
    };
    if(window.requestIdleCallback) requestIdleCallback(go, {timeout: 2500}); else setTimeout(go, 1200);
  }
  // Hover art for an agent is wanted once a pointer has been over their card, or while their rig
  // is the one in focus (it shows the hover art permanently).
  hoverWanted(name){ return !!(this._hoverSeen && this._hoverSeen.has(name)) || this.state.focusAgent === name; }
  // Asks the browser not to evict saved data under storage pressure. Chrome and Safari decide
  // silently; Firefox asks the user, so this only runs from a button press or a save.
  persistStorage(fromButton){
    if(!navigator.storage || !navigator.storage.persist) return;
    if(!fromButton && /firefox/i.test(navigator.userAgent)) return;
    navigator.storage.persist().then(p => {
      this.setState({storagePersisted: !!p});
      if(fromButton) this.flash(p ? "Done. This browser will keep your discs unless you clear site data yourself."
        : "This browser said no for now. Installing ProxyDisc as an app usually changes its mind.");
    }, () => {});
  }
  // beforeinstallprompt is caught in boot.js (it can fire before React has mounted).
  installApp(){
    const e = window.__pdInstallPrompt;
    if(!e) return;
    window.__pdInstallPrompt = null;
    e.prompt();
    (e.userChoice || Promise.resolve()).then(() => this.forceUpdate());
  }
  componentDidMount(){
    if(super.componentDidMount) super.componentDidMount();
    // paste a screenshot anywhere on Scrap or stash to import it
    this._onPaste = e => {
      if(this.state.tab !== "check" || !e.clipboardData) return;
      const it = Array.from(e.clipboardData.items || []).find(x => x.kind === "file" && /^image\//.test(x.type));
      if(!it) return;
      e.preventDefault();
      this.importScreenshot(it.getAsFile());
    };
    window.addEventListener("paste", this._onPaste);
    // Back/forward between tabs, or a #fragment typed or clicked while the app is open.
    this._onHash = () => this.applyHash(true);
    window.addEventListener("popstate", this._onHash);
    window.addEventListener("hashchange", this._onHash);
    this.applyHash();
    this._onKey = e => { if(e.key === "Escape" && this.state.moreOpen) this.setState({moreOpen: false}); };
    window.addEventListener("keydown", this._onKey);
    // Hover art is only fetched once a pointer actually reaches that agent's card (see hoverWanted).
    this._onArtHover = e => {
      const card = e.target && e.target.closest && e.target.closest("[data-agent-card],[data-disccard]");
      const el = card && card.querySelector("[data-artname]");
      const n = el && el.getAttribute("data-artname");
      if(!n || (this._hoverSeen && this._hoverSeen.has(n))) return;
      (this._hoverSeen = this._hoverSeen || new Set()).add(n);
      clearTimeout(this._hoverT); this._hoverT = setTimeout(() => this.forceUpdate(), 30);
    };
    document.addEventListener("pointerover", this._onArtHover, {passive: true});
    this._onInstallable = () => this.forceUpdate();
    window.addEventListener("pd-installable", this._onInstallable);
    if(navigator.storage && navigator.storage.persisted){
      navigator.storage.persisted().then(p => this.setState({storagePersisted: !!p}), () => {});
    }
    if(this.state.adsOn) this.loadJokeFonts();
    this._lastTab = this.state.tab;
    setTimeout(() => this.observeArt(), 0);
    this._onPlayhead = () => this.syncPlayhead();
    window.addEventListener("resize", this._onPlayhead);
    const row = document.querySelector('[data-pd="navrow"]');
    if(row) row.addEventListener("scroll", this._onPlayhead, {passive:true});
    requestAnimationFrame(() => this.syncPlayhead());
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(() => this.syncPlayhead());
  }
  componentDidUpdate(pp, ps){
    if(super.componentDidUpdate) super.componentDidUpdate(pp, ps);
    if(!ps || ps.tab !== this.state.tab) requestAnimationFrame(() => this.syncPlayhead());
    // (prevState isn't reliably passed in by the runtime, so the last tab is tracked here)
    if(this._lastTab !== this.state.tab){
      const was = this._lastTab;
      this._lastTab = this.state.tab;
      if(was !== undefined){
        // Each tab switch is a history entry, so the back button steps back through tabs instead
        // of leaving the site. A switch that came from the address bar is already in history.
        if(this._hashTab === this.state.tab) this._hashTab = null;
        else {
          const h = "#" + this.tabSlug(this.state.tab);
          if(location.hash !== h) try { history.pushState(null, "", h); } catch(e){}
        }
        this.tvStatic();
      }
    }
    if(this.state.adsOn) this.loadJokeFonts();
    this.observeArt();
    if(this._lastTourStep !== this.state.tourStep){
      this._lastTourStep = this.state.tourStep;
      if(this.state.tourStep) this.tourScroll();
    }
    // On a phone the editor's steps stack vertically, so after each tap the next step is below the
    // fold. Bring it into view; desktop shows all panels side by side and is left alone.
    {
      const n = this.state, was = this._mobPrev || {};
      this._mobPrev = {selSlot: n.selSlot, discSel: n.discSel, upSel: n.upSel, tab: n.tab};
      if(was.tab === n.tab && window.matchMedia && window.matchMedia("(max-width:760px)").matches){
        const go = sel => setTimeout(() => {
          const el = document.querySelector(sel);
          if(el) window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 12, behavior: "smooth"});
        }, 60);
        if(n.tab === "discs" && n.focusAgent && n.selSlot && n.selSlot !== was.selSlot) go('[data-pd="bay"]');
        else if(n.tab === "discs" && n.focusAgent && n.discSel && n.discSel !== was.discSel) go('[data-mfocus="sel"]');
        if(n.tab === "score" && n.upSel && n.upSel !== was.upSel) go('[data-mfocus="up"]');
      }
    }
    const st = this.state;
    const prefsKey = st.primaryFilter + "|" + st.pieceFilter + "|" + st.mainFilter + "|" + st.showMindscape;
    if(this._lastPrefsKey !== prefsKey){
      if(this._lastPrefsKey != null){
        try { localStorage.setItem("discTriage_prefs", JSON.stringify({primaryFilter: st.primaryFilter,
          pieceFilter: st.pieceFilter, mainFilter: st.mainFilter, showMindscape: st.showMindscape})); } catch(e){}
      }
      this._lastPrefsKey = prefsKey;
    }
  }
  componentWillUnmount(){
    if(this._onPaste) window.removeEventListener("paste", this._onPaste);
    if(this._onHash){ window.removeEventListener("popstate", this._onHash); window.removeEventListener("hashchange", this._onHash); }
    if(this._onKey) window.removeEventListener("keydown", this._onKey);
    if(this._onArtHover) document.removeEventListener("pointerover", this._onArtHover);
    if(this._onInstallable) window.removeEventListener("pd-installable", this._onInstallable);
    if(this._artIO) this._artIO.disconnect();
    if(this._onPlayhead) window.removeEventListener("resize", this._onPlayhead);
    clearTimeout(this._spinTimer);
    Object.keys(this._buildDiscRefs).forEach(name => {
      (this._buildDiscRefs[name] || []).forEach(r => { if(r) clearTimeout(r.timer); });
    });
  }
  // Same slide-in-then-spin choreography as the check tab's disc, replayed on whichever of an
  // agent's disc tiles are currently mounted — called whenever their build tab changes.
  playBuildDiscs(name){
    (this._buildDiscRefs[name] || []).forEach(r => {
      const visuals = r && r.visualEls ? r.visualEls.filter(Boolean) : [];
      if(!r || !r.slideEl || !visuals.length) return;
      const slide = r.slideEl;
      // discSpin has no explicit 0% frame, so it implicitly starts from whatever transform is
      // already on the element — a leftover freeze-in-place angle (this node may be recycled
      // from the tab just switched away from) would make the new spin start off-angle and read
      // as slow/backwards instead of a clean rotation.
      visuals.forEach(v => { v.style.animation = "none"; v.style.transform = ""; });
      slide.style.animation = "none";
      void slide.offsetWidth;
      slide.style.animation = "discEnter 0.45s cubic-bezier(.22,.7,.32,1) both";
      clearTimeout(r.timer);
      r.timer = setTimeout(() => {
        slide.style.animation = "none";
        // Clear the inline override rather than pinning discSpin forever — this hands control
        // back to the [data-agent-card]:hover CSS rule, so each half keeps spinning only while
        // still hovered and goes idle the moment the mouse leaves, same as any other tile.
        visuals.forEach(v => { v.style.animation = ""; });
      }, 460);
    });
  }

  // Slide in from off-screen left, then hand off to the idle 9s spin at 460ms — the same moment
  // the status flips from "Loading..." to "Now playing". Same reflow-restart trick.
  playDisc(){
    const slide = this._slide, visual = this.visualRef.current;
    if(!slide || !visual) return;
    this.setState({nowPlaying: false});
    visual.style.animation = "none";
    slide.style.animation = "none";
    void slide.offsetWidth;
    slide.style.animation = "discEnter 0.45s cubic-bezier(.22,.7,.32,1) both";
    clearTimeout(this._spinTimer);
    this._spinTimer = setTimeout(() => {
      slide.style.animation = "none";
      visual.style.animation = "discSpin 9s linear infinite";
      this.setState({nowPlaying: true});
    }, 460);
  }

  // ---------- shared logic (ported) ----------
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
  }
  // Landing on a main stat nobody wants would open the tool on an empty RECYCLE screen, so seed
  // with the first option for this slot that some agent running this set actually asks for.
  defaultMain(setName, slotKey){
    const A = this.constructor, opts = this.slotOptions(slotKey);
    if(A.FIXED_MAIN[slotKey]) return opts[0] || "";
    const hit = opts.find(o => A.AGENTS.some(a => this.pieceFor(a, setName) && a[slotKey].indexOf(o) >= 0));
    return hit || opts[0] || "";
  }
  prioIndex(agent, slotKey, stat){ return agent[slotKey] ? agent[slotKey].indexOf(stat) : -1; }
  prioLabel(i){ return i === 0 ? "Top pick" : i === 1 ? "Good alt" : "Situational"; }
  prioTone(i){ return i === 0 ? "best" : i === 1 ? "keep" : "warm"; }
  pieceFor(agent, setName){ return agent.p4 === setName ? "4pc" : agent.p2 === setName ? "2pc" : null; }
  matchCount(agent, types){ return Array.from(new Set(types)).filter(t => agent.sub.includes(t)).length; }
  countLabel(c){ return c >= 4 ? "Perfect" : c === 3 ? "Strong" : c === 2 ? "Workable" : "Off-stat"; }
  countTone(c){ return c >= 4 ? "best" : c === 3 ? "keep" : c === 2 ? "warm" : "recycle"; }
  combineTier(mainTier, count){
    if(mainTier === 0) return 0;
    if(count === null) return mainTier;
    if(count <= 1) return 0;
    if(count === 2) return Math.min(mainTier, 2);
    if(count === 3) return mainTier;
    return Math.max(mainTier, 3);
  }
  priorityScore(agent, types){
    if(!types || !types.length) return 0;
    return Array.from(new Set(types)).reduce((sum, t) => {
      const i = agent.sub.indexOf(t);
      return sum + (i >= 0 ? agent.sub.length - i : 0);
    }, 0);
  }
  // Was called by the roll-quality readout but never defined in the original — this is that gap
  // filled: how much a given line is worth to this agent, by its rank in their priority list.
  weightFor(agent, stat){ const i = agent.sub.indexOf(stat); return i < 0 ? 0 : agent.sub.length - i; }
  elementFromMain(stat){ const m = /^(.+) DMG$/.exec(stat); return m ? m[1] : null; }
  mainStatRoles(stat){ return this.constructor.MAIN_STAT_ROLES[stat] || ["Any"]; }
  fmtStat(stat, v){ return this.constructor.PERCENT.indexOf(stat) >= 0 ? v.toFixed(1) + "%" : String(Math.round(v)); }

  // ---------- styling helpers ----------
  // Two scales, deliberately separate: verdicts run green / amber / red, while FIT runs
  // blue (perfect) → green → yellow (marginal). Blue never means "keep", it means "ideal".
  tone(t){ return {keep:"#4ade80", maybe:"#ffa02e", recycle:"#ff4d5e", best:"#6cc6ff", warm:"#e5d64a", rare:"#b98cff", info:"#7fd8ff", dim:"#8a9099", srank:"#f5a623"}[t] || "#8a9099"; }
  // Matches the exact filenames under discs/ (Drive_Disc_<Set Name, spaces to underscores>_Icon.webp).
  // Per-agent art framing. Each picture is cropped differently, so any agent can override the
  // default. zoom: % of the box height the picture is drawn at. x / y: where it sits, 0-100%.
  // Example: "Jane Doe": {zoom: 150, x: 80, y: 60}
  // flip: true mirrors the picture; x is mirrored with it so the art stays on the right.
  // fade: "left" or "right" softens that edge of the picture into the card.
  // Agents shown with a NEW tag in the Agent index. Remove a name once she's no longer new.
  // When each agent's build data was last checked, and where it comes from. Agents without an
  // entry use BUILD_UPDATED_DEFAULT.
  static BUILD_UPDATED_DEFAULT = "Oct 2026";
  static BUILD_UPDATED = {"Phoenix": "Oct 2026", "Roxy": "Oct 2026"};
  static BUILD_SOURCE = "Prydwen and community guides";
  static NEW_AGENTS = ["Phoenix"];
  static ART_FRAMES = {
    "Phoenix": {y: 57},
    "Roxy": {y: 57, flip: true},
    "Alice": {y: 57,flip: true,x: 115},
    "Anby": {y: 57,flip: true,x: 190},
    "Anton": {y: 57,flip: false,x: 120},
    "Astra Yao": {y: 57,x: 89},
    "Banyue": {y: 57,x: 147,flip: true},
    "Ben": {y: 57},
    "Billy": {y: 45,flip: true,x: 157},
    "Burnice": {y: 57,x: 113},
    "Caesar": {y: 57,x: 176},
    "Cissia": {y: 57,flip: true,x: 105},
    "Corin": {y: 57},
    "Dialyn": {y: 57,x: 95},
    "Ellen": {y: 57,x: 77},
    "Evelyn": {y: 57,flip: true,x: 133},
    "Grace": {y: 57},
    "Harumasa": {zoom: 114,x: 92,flip: true},
    "Hugo": {y: 57},
    "Jane": {y: 57},
    "Ju Fufu": {y: 57,flip: true,x: 133},
    "Koleda": {y: 57,x: 121},
    "Lighter": {y: 57},
    "Lucia": {y: 57,flip: true,x: 140},
    "Lucy": {y: 57},
    "Lycaon": {y: 57},
    "Miyabi": {y: 57,x: 172},
    "Nangong Yu": {y: 57,x: 109},
    "Nekomata": {y: 57,flip: true,x: 112},
    "Nicole": {y: 57},
    "Norma": {y: 57,flip: true},
    "Orphie and Magus": {y: 66,x: 124},
    "Pan Yinhu": {y: 57,x: 125},
    "Piper": {y: 57,flip: false,x: 117},
    "Promeia": {y: 57},
    "Pulchra": {y: 57},
    "Pyrois": {y: 57,flip: false,fade: "left",x: 125},
    "Qingyi": {y: 57},
    "Remielle": {y: 65,flip: true,x: 125},
    "Rina": {y: 57},
    "Seth": {y: 57,flip: true,x: 157},
    "Sigrid": {y: 57},
    "Soldier 0 Anby": {y: 57,x: 197},
    "Soldier 11": {y: 57},
    "Soukaku": {y: 57,x: 125},
    "Starlight - Billy": {y: 57},
    "Sunna": {flip: true,x: 105,y: 66},
    "Trigger": {x: 164},
    "Velina": {y: 37,zoom: 146},
    "Vivian": {y: 57,x: 183},
    "Yanagi": {y: 57},
    "Ye Shunguang": {y: 66,flip: true},
    "Yidhari": {y: 66,x: 139},
    "Yixuan": {y: 57},
    "Yuzuha": {y: 57,x: 187},
    "Zhao": {y: 57},
    "Zhu Yuan": {y: 57},
    "Claret": {flip: true,x: 105},
    "Seed": {x: 145},
    "Aria": {x: 105}
  };
  artFrame(name){
    const key = String(name).replace(/_/g, " ");
    const f = Object.assign({zoom: 136, x: 85, y: 78, flip: false}, this.constructor.ART_FRAMES[key] || {});
    const side = f.fade === "left" ? (f.flip ? "right" : "left") : f.fade === "right" ? (f.flip ? "left" : "right") : "";
    const mask = side === "left" ? "linear-gradient(90deg,transparent 0%,#000 28%)"
      : side === "right" ? "linear-gradient(270deg,transparent 0%,#000 28%)" : "none";
    return {size: "auto " + f.zoom + "%", pos: (f.flip ? 100 - f.x : f.x) + "% " + f.y + "%",
      transform: f.flip ? "scaleX(-1)" : "none", mask: mask};
  }
  discIconPath(setName){ return "discs/Drive_Disc_" + setName.replace(/ /g, "_") + "_Icon.webp"; }
  // Every disc-icon slot is user-droppable, so each needs a stable id or the drop is lost on
  // reload with no feedback. Keyed by set name, so the same set shares one icon everywhere.
  discIconId(setName){ return setName ? "disc-" + String(setName).toLowerCase().replace(/[^a-z0-9]+/g, "-") : ""; }
  rankIconPath(rank){ return "icons/Icon_AgentRank_" + rank + ".webp"; }
  // Role/element/stat glyphs under icons/. Support and Armorer are distinct roles with their own
  // icons — Armorer is currently Claret only, everyone else buff/support-flavored is Support.
  // "<Element> DMG" main stats reuse that element's own icon — there's no separate DMG icon set.
  roleIconPath(role){
    const file = {Attack:"Attack", Stun:"Stun", Anomaly:"Anomaly", Defense:"Defense", Support:"Support", Armorer:"Armorer", Rupture:"Rupture"}[role];
    return file ? "icons/Icon_" + file + ".webp" : "";
  }
  elementIconPath(el){ return el ? "icons/Icon_" + el + ".webp" : ""; }
  statIconPath(stat){
    // Only an actual element name before " DMG" routes to that element's icon — "CRIT DMG" also
    // ends in " DMG" but isn't elemental, and must fall through to the plain stat icon below.
    const dmg = /^(Physical|Fire|Ice|Electric|Ether|Lumiflux|Wind) DMG$/.exec(stat);
    if(dmg) return this.elementIconPath(dmg[1]);
    return "icons/Icon_Stat_" + stat.replace(/%$/, "").replace(/ /g, "_") + ".webp";
  }
  // background-image, not <img src>: a raw src attribute flashes a failed fetch for the literal
  // "{{ }}" placeholder text during the sc-for hydration pass. A CSS url() with the same content
  // just fails to parse in that instant instead — no request, no console noise.
  iconStyle(src, size){
    size = size || 14;
    // Escape ' so a set name like "Phaethon's Melody" doesn't prematurely close the CSS string —
    // an apostrophe inside url('...') truncates the value and the image silently fails to paint.
    return {display:"inline-block", width: size + "px", height: size + "px", flex: "0 0 " + size + "px",
      backgroundImage: "url('" + src.replace(/'/g, "\\'") + "')", backgroundSize:"contain", backgroundRepeat:"no-repeat",
      backgroundPosition:"center", verticalAlign:"middle"};
  }
  // agents/Avatar_<Name, spaces to underscores>.webp. Icon mode prefers the circle-cropped
  // asset; a few agents (NO_CIRCLE_ICON) don't have one yet, so those fall back to the square
  // Icon file rather than showing a broken/placeholder portrait until art is added.
  static NO_CIRCLE_ICON = new Set([]);
  // The nav. slug is the tab's #fragment in the address bar; short is its bottom-bar label on a
  // phone; desc is the one-line "what is this" shown under the nav and in the More menu.
  // kind: "main" always has its own tab, "more" moves into More on a phone, "util" moves into
  // More below 1100px.
  static TABS = [
    {id:"check", n:"01", slug:"scrap-or-stash", label:"Scrap or stash", short:"Scrap/stash", kind:"main", desc:"Grade a disc you just got: keep it, level it or recycle it."},
    {id:"discs", n:"02", slug:"loadouts", label:"Loadouts", short:"Loadouts", kind:"main", desc:"What each agent is wearing, with a build score out of 100."},
    {id:"mine", n:"03", slug:"my-discs", label:"My discs", short:"My discs", kind:"main", desc:"Every disc you've saved, and who each one suits."},
    {id:"score", n:"04", slug:"upgrades", label:"Upgrades", short:"Upgrades", kind:"main", desc:"Track each roll while you level a disc."},
    {id:"agents", n:"05", slug:"agent-index", label:"Agent index", short:"Agents", kind:"more", desc:"Best sets, main stats and substats for every agent."},
    {id:"farming", n:"06", slug:"area-patrol", label:"Area patrol", short:"Patrol", kind:"more", desc:"Which cleanup missions and sets to farm next."},
    {id:"backup", n:"07", slug:"backup", label:"Backup", short:"Backup", kind:"util", desc:"Export, restore or protect what you've saved."},
    {id:"help", n:"08", slug:"help", label:"Help", short:"Help", kind:"util", desc:"How grading works and how to use each tab."},
    {id:"contact", n:"09", slug:"contact", label:"Contact", short:"Contact", kind:"util", desc:"Report a wrong build or get in touch."},
    {id:"settings", n:"10", slug:"settings", label:"Settings", short:"Settings", kind:"util", desc:"Grading rules and display options."}
  ];
  // Parody ads in the spots real ones would sit. They don't link anywhere; clicking just
  // owns up to the joke.
  // Parody ads where real ones would sit. Each has its own look. Art comes from misc/Name.webp
  // (same naming as backgrounds/); a missing file just leaves the art area empty.
  static JOKE_ADS = [
    {agent:"Norma", strip:"⚠ NormaGuard.exe — System Alert",
      kicker:"Scan complete", head:"Your Bangboo has 47 viruses!", sub:"Download NormaGuard Antivirus Pro NOW.",
      cta:"REMOVE NOW", box:"background:#c0c0c0;border:2px solid #fff;border-right-color:#404040;border-bottom-color:#404040;color:#111",
      stripCss:"background:linear-gradient(90deg,#000080,#1084d0);color:#fff;font:400 18px/1 'VT323',monospace;padding:4px 36px 4px 8px",
      kickerCss:"font:400 18px/1 'VT323',monospace;color:#b00000;text-transform:uppercase", blink:"1",
      headCss:"font:900 24px/1.05 Arial Black,Arial,sans-serif;color:#d00000;text-transform:uppercase",
      subCss:"font:400 19px/1.1 'VT323',monospace;color:#111",
      ctaCss:"align-self:flex-start;padding:7px 14px;background:#c0c0c0;border:2px solid #fff;border-right-color:#404040;border-bottom-color:#404040;font:700 13px/1 Tahoma,Arial,sans-serif;color:#111"},
    {agent:"Jane", kicker:"● 3 discs online near you",
      head:"Single S-rank discs in your area", sub:"Three unequipped discs nearby are looking for the right agent. Jane already swiped right.",
      cta:"Find a match ♥", box:"background:radial-gradient(circle at 75% 40%,#ff7ab8,#c4005a 70%);color:#fff",
      kickerCss:"font:700 13px/1 Arial,sans-serif;color:#fff3a6;letter-spacing:.04em", blink:"1",
      headCss:"font:400 30px/1.05 'Pacifico',cursive;color:#fff;text-shadow:0 2px 0 #7a0035",
      subCss:"font:600 15px/1.3 Arial,sans-serif;color:#ffe0ee",
      ctaCss:"align-self:flex-start;padding:9px 18px;border-radius:999px;background:#fff3a6;color:#b0004e;font:800 15px/1 Arial,sans-serif"},
    {agent:"Phoenix", strip:"★ ★ ★  CONGRATULATIONS!!!  ★ ★ ★",
      kicker:"You have been selected", head:"You are visitor #1,000,000", sub:"Claim 10,000 FREE Polychromes NOW.",
      cta:"CLAIM PRIZE!!!", box:"background:repeating-conic-gradient(from 0deg at 72% 50%,#ffd400 0 10deg,#ff8a00 10deg 20deg);color:#2a0a00",
      stripCss:"background:#e00000;color:#fff200;font:400 20px/1 'Bangers',cursive;letter-spacing:.08em;padding:5px 36px 5px 10px;text-align:center",
      kickerCss:"font:400 18px/1 'Bangers',cursive;color:#e00000;letter-spacing:.06em", blink:"1",
      headCss:"font:400 32px/.95 'Bangers',cursive;color:#fff;letter-spacing:.03em;-webkit-text-stroke:1.5px #6a1500;text-shadow:3px 3px 0 #6a1500",
      subCss:"font:700 14px/1.25 'Comic Sans MS','Comic Neue',cursive;color:#2a0a00;background:rgba(255,255,255,.75);padding:3px 6px",
      ctaCss:"align-self:flex-start;padding:9px 16px;background:#18c400;color:#fff;border:3px solid #0a5a00;font:400 21px/1 'Bangers',cursive;letter-spacing:.06em"},
    {agent:"Piper", kicker:"SHOCKING", head:"Truckers HATE this nap schedule",
      sub:"Piper sleeps 22 hours a day and still out-damages you.",
      cta:"▶ Watch the video", box:"background:#fbfaf5;color:#111;border:1px solid #d8d4c4",
      kickerCss:"align-self:flex-start;font:400 14px/1 'Anton',sans-serif;letter-spacing:.06em;padding:3px 7px;background:#d40000;color:#fff",
      headCss:"font:400 28px/1 'Anton',sans-serif;text-transform:uppercase;color:#111",
      subCss:"font:400 15px/1.3 Georgia,serif;color:#333",
      ctaCss:"align-self:flex-start;padding:8px 14px;background:#111;color:#fff;font:700 14px/1 Arial,sans-serif"},
    {agent:"Nicole", kicker:"Banks HATE her", head:"Nicole's one weird money trick",
      sub:"10 Dennies to 10 million overnight.",
      cta:"Start investing →", box:"background:linear-gradient(135deg,#0b2a1e,#134d34);color:#f3e7c4;border:1px solid #c9a24a",
      kickerCss:"font:600 12px/1 Georgia,serif;letter-spacing:.22em;text-transform:uppercase;color:#c9a24a",
      headCss:"font:italic 700 27px/1.08 'Playfair Display',Georgia,serif;color:#fff6dc",
      subCss:"font:400 15px/1.35 Georgia,serif;color:#d8cfae",
      ctaCss:"align-self:flex-start;padding:9px 16px;background:linear-gradient(#f0d27a,#b8892e);color:#20160a;font:700 14px/1 Georgia,serif;letter-spacing:.04em"},
    {agent:"Zhu Yuan", strip:"☎ 1-800-HOLLOW-LAW",
      kicker:"Free consultation", head:"Injured in a Hollow?", sub:"You may be owed compensation.",
      cta:"CALL NOW", box:"background:linear-gradient(160deg,#0a2a55,#071a36);color:#eaf2ff;border-left:6px solid #ffcf00",
      stripCss:"background:#ffcf00;color:#071a36;font:700 16px/1 'Oswald',sans-serif;letter-spacing:.06em;padding:5px 36px 5px 12px",
      kickerCss:"font:600 13px/1 'Oswald',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#ffcf00",
      headCss:"font:700 30px/1 'Oswald',sans-serif;text-transform:uppercase;color:#fff",
      subCss:"font:400 15px/1.3 Arial,sans-serif;color:#c9d7ee",
      ctaCss:"align-self:flex-start;padding:9px 18px;background:#ffcf00;color:#071a36;font:700 16px/1 'Oswald',sans-serif;letter-spacing:.08em"}
  ];
  jokeAd(idx){
    const A = this.constructor;
    const n = A.JOKE_ADS.length;
    const ad = A.JOKE_ADS[((idx % n) + n) % n];
    const css = str => { const o = {}; (str || "").split(";").forEach(p => { const i = p.indexOf(":"); if(i < 0) return;
      const k = p.slice(0, i).trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase()); if(k) o[k] = p.slice(i + 1).trim(); }); return o; };
    const strip = !!ad.strip;
    return {
      title: "Not a real ad. ProxyDisc doesn't run ads.",
      bgStyle: Object.assign({position:"absolute", inset:0, boxSizing:"border-box", zIndex:0}, css(ad.box)),
      hasStrip: strip, strip: ad.strip || "",
      stripStyle: Object.assign({position:"absolute", top:0, left:0, right:0, zIndex:3, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}, css(ad.stripCss)),
      artStyle: {position:"absolute", right:"-4%", top: strip ? "26px" : 0, bottom:0, width:"52%", zIndex:1, pointerEvents:"none",
        background:"center bottom/contain no-repeat url(\"misc/" + ad.agent.replace(/ /g, "_") + ".webp\")"},
      pad: strip ? "34px 14px 14px 16px" : "16px 14px 14px 16px", textW: "60%",
      kicker: ad.kicker, kickerStyle: Object.assign({flexShrink:0}, css(ad.kickerCss)), blink: ad.blink || "0",
      head: ad.head, headStyle: Object.assign({textWrap:"balance", flexShrink:0}, css(ad.headCss)),
      sub: ad.sub, subStyle: Object.assign({flexShrink:0, overflow:"hidden", display:"-webkit-box", WebkitLineClamp:"2", WebkitBoxOrient:"vertical"}, css(ad.subCss)),
      cta: ad.cta, ctaStyle: Object.assign({flexShrink:0, marginTop:"2px", whiteSpace:"nowrap"}, css(ad.ctaCss)),
      onClick: () => { this._adSeed = (this._adSeed || 0) + 1; this.flash("Nice try. ProxyDisc has no real ads, and no free Polychromes either."); this.forceUpdate(); }
    };
  }
  closeAds(e){
    if(e){ e.preventDefault(); e.stopPropagation(); }
    try { localStorage.setItem("discTriage_adsOff", "1"); } catch(x){}
    this.setState({adsOn: false});
  }
  faceStyle(name, px, dim){
    return {display:"block", flex:"0 0 " + px + "px", width: px + "px", height: px + "px", borderRadius:"50%",
      background:"#1b1e23 center/cover no-repeat url(\"" + this.agentIconPath(name) + "\")",
      boxShadow:"0 0 0 1px #2e333b", filter: dim ? "grayscale(1)" : "none", opacity: dim ? .45 : 1};
  }
  agentIconPath(name){
    const n = name.replace(/ /g, "_");
    if(this.state.portraitMode !== "icon") return "icons/Avatar_" + n + ".webp";
    const suffix = this.constructor.NO_CIRCLE_ICON.has(name) ? "_Icon.webp" : "_Circle_Icon.webp";
    return "icons/Agent_" + n + suffix;
  }
  badge(t){
    const c = this.tone(t);
    return {font:"500 15px/1 'JetBrains Mono',monospace", letterSpacing:".03em", padding:"5px 8px",
      whiteSpace:"nowrap", color:c, background:c + "1c", border:"1px solid " + c + "3d"};
  }
  // One binary state per agent: tracked (counts as yours, verdicts weigh them) or ignored.
  // Editable from an expanded row on Check a disc, or directly off the toggle switch anywhere
  // else this state is shown — internal state values stay "shown"/"off" (localStorage-compatible
  // with existing saves); only the user-facing labels read Tracked/Ignored.
  rosterOf(name){ return this.state.shown.indexOf(name) >= 0 ? "shown" : "off"; }
  rosterMeta(s){
    return s === "shown"
      ? {label:"TRACKED", bg:"#4ade80", fg:"#0b0c0e", border:"#4ade80"}
      : {label:"IGNORED", bg:"#171a1f", fg:"#8a9099", border:"#2e333b"};
  }
  // The button says what pressing it does, not what the state currently is.
  rosterAction(s){ return s === "shown" ? "IGNORE" : "TRACK"; }
  rosterBtn(s){
    return s === "shown"
      ? {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".1em", padding:"8px 14px", cursor:"pointer", background:"#171a1f", color:"#9aa0a8", border:"1px solid #2e333b"}
      : {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".1em", padding:"8px 14px", cursor:"pointer", background:"#4ade80", color:"#0b0c0e", border:"1px solid #4ade80"};
  }
  // Same track/thumb switch as the portrait toggle, but one per agent — wherever the roster
  // label shows up (Agent index identity, Loadouts group header), it's a live control, not
  // just a status pill.
  rosterToggle(name){
    const on = this.rosterOf(name) === "shown";
    return {
      trackColor: on ? "#4ade80" : "#171a1f",
      thumbLeft: on ? "17px" : "1px",
      checked: on ? "true" : "false",
      onClick: e => this.cycleRoster(name, e)
    };
  }
  // Rank shown as a descending ladder rather than a run of ">" — position and weight carry the
  // order, so the punctuation isn't doing the work.
  // Each entry in agent.sub is either a plain stat name (its own rank) or an array of names
  // tied at the same rank ("CRIT Rate = CRIT DMG") — those share one bar colour and one text
  // style, they just aren't merged into a single displayed line.
  // subNotes (optional) maps a single substat name to a caveat shown only as a hover tooltip on
  // its own "*" — no visible line anywhere else, unlike the build-level note/asterisk on tabs.
  // `hitSet` (optional, a Set of substat names) marks which entries the in-hand disc actually
  // rolled — used only by the Scrap or Stash rewrite below. Every other caller omits it, so
  // isHit/hitMark are always falsy/empty there and the rendered ladder is pixel-identical to before.
  priorityLadder(agent, hitSet){
    const scale = ["#6cc6ff", "#4ade80", "#b4dd5c", "#e5d64a", "#d9a83c"];
    const notes = agent.subNotes || {};
    const out = [];
    let rank = 0;
    agent.sub.forEach((entry) => {
      // A plain {name, gap} entry (as opposed to a string, or a tied-name array) advances the
      // color tier by `gap` extra steps before landing — lets one substat read as clearly several
      // tiers ahead of the next (">>>") instead of just one, without inventing blank filler rows.
      const isGapEntry = entry && typeof entry === "object" && !Array.isArray(entry);
      rank += isGapEntry ? (entry.gap || 0) : 0;
      const value = isGapEntry ? entry.name : entry;
      const names = Array.isArray(value) ? value : [value];
      const barStyle = {height:"3px", background: scale[rank] || "#8a7f3c", opacity: rank > 4 ? .5 : 1, marginBottom:"6px"};
      names.forEach(name => {
        const isHit = !!(hitSet && hitSet.has(name));
        const textStyle = isHit
          ? {font:"700 14px/1.3 'JetBrains Mono',monospace", color:"#e8ff45", letterSpacing:".02em"}
          : {font: (rank === 0 ? "600" : "400") + " 14px/1.3 'JetBrains Mono',monospace",
              color: rank === 0 ? "#ecefe6" : rank === 1 ? "#c3c8ce" : "#9aa0a8", letterSpacing:".02em"};
        out.push({name: name, barStyle: barStyle, textStyle: textStyle,
          hasNote: !!notes[name], noteTitle: notes[name] || "",
          isHit: isHit, hitMark: isHit ? " ✓" : ""});
      });
      rank += 1;
    });
    return out;
  }

  // ---------- Scrap or Stash: BUILDS-aware scoring (per "Scrap or stash - markup.html") ----------
  // Everywhere else in the app (Deep Scan, Loadouts) reads only the flat AGENTS fields — one
  // build per agent. These are additive and used ONLY by checkResult() below; they walk every
  // set/stat variant from getAgentBuilds() so a disc gets judged against an agent's actual
  // Primary vs. alternate kits instead of a single mirror.
  //
  // Position of `name` within a priority list: ties (nested arrays) share a rank, and a plain
  // {name, gap} entry (Vivian's ">>>" marker) widens the ladder by `gap` extra steps before it
  // lands. Returns 1-based rank and the list's total tier span (both stretched by any gaps).
  rankIn(list, name){
    let rank = 0, foundAt = -1;
    (list || []).forEach(entry => {
      const isGap = entry && typeof entry === "object" && !Array.isArray(entry);
      rank += isGap ? (entry.gap || 0) : 0;
      const value = isGap ? entry.name : entry;
      const names = Array.isArray(value) ? value : [value];
      if(foundAt < 0 && names.indexOf(name) >= 0) foundAt = rank;
      rank += 1;
    });
    return foundAt >= 0 ? {hit:true, rank: foundAt + 1, of: rank} : {hit:false, rank:0, of: rank};
  }
  ordinal(n){ const s = ["th","st","nd","rd"], v = n % 100; return n + (s[(v-20)%10] || s[v] || s[0]); }
  // Shared by MAIN, SUBSTATS and the ladder — blue is ideal, yellow/brown is the tail, 1-based.
  depthTone(rank){ return ["#6cc6ff","#4ade80","#b4dd5c","#e5d64a","#d9a83c"][rank - 1] || "#8a7f3c"; }
  // Every build this disc could serve for one agent, on both independent axes (set-variant and
  // stat-variant) — a disc can be someone's Primary set paired with their CRIT Build stats, say.
  matchesForCheck(setVars, statVars, setName, slot, mainStat, rawTypes, isFixed){
    // A disc can't roll the same substat twice, but the picker doesn't stop a slip that selects
    // one line's stat again in another — de-dupe so that can't inflate the match count.
    const types = Array.from(new Set(rawTypes));
    const out = [];
    setVars.forEach((sv, si) => {
      let piece, pieceRank = 1, pieceOf = 1;
      if(sv.p4 === setName){ piece = "4pc"; }
      else {
        const r = this.rankIn(sv.p2, setName);
        if(!r.hit) return;
        piece = "2pc"; pieceRank = r.rank; pieceOf = r.of;
      }
      statVars.forEach((tv, ti) => {
        const mr = isFixed ? {hit:true, rank:0, of:0} : this.rankIn((tv.mains || {})[slot] || [], mainStat);
        if(!isFixed && !mr.hit) return;
        // sorted best-first so the row's skyline reads as quality left to right
        const subs = types.map(t => { const r = this.rankIn(tv.sub, t); return {name:t, hit:r.hit, rank:r.rank, of:r.of}; })
          .sort((x, y) => (x.hit === y.hit) ? x.rank - y.rank : (x.hit ? -1 : 1));
        const hits = subs.filter(s => s.hit);
        // quality, not headcount: a 1st-priority hit is worth far more than a 4th
        const quality = hits.reduce((sum, s) => sum + (s.of - s.rank + 1) / s.of, 0);
        out.push({setVar: sv, setIdx: si, statVar: tv, statIdx: ti,
          isPrimary: si === 0 && ti === 0,
          piece: piece, pieceRank: pieceRank, pieceOf: pieceOf,
          mainRank: mr.rank, mainOf: mr.of, isFixed: isFixed,
          subs: subs, hits: hits.length, topHit: hits.length ? hits[0].rank : 0, quality: quality,
          mainTier: isFixed ? 3 : (mr.rank === 1 ? 3 : mr.rank === 2 ? 2 : 1)});
      });
    });
    return out;
  }
  // Every build variant for one agent that matches this disc, each scored independently — one
  // agent can have several rows (Primary plus alternates) rather than collapsing to their single
  // best. Sorted primary-first at equal tier, since "does it serve their meta build" is the
  // question players ask first.
  scoredMatchesForCheck(all, active){
    const scored = all.map(m => Object.assign({}, m, {
      matchCount: active ? m.hits : null,
      tier: this.combineTier(m.mainTier, active ? m.hits : null)
    }));
    scored.sort((x, y) => y.tier - x.tier
      || (x.isPrimary === y.isPrimary ? 0 : x.isPrimary ? -1 : 1)
      || y.quality - x.quality || x.mainRank - y.mainRank || x.pieceRank - y.pieceRank);
    return scored;
  }
  // Skyline bar height for one substat: taller and bluer the higher its priority rank.
  skylineHeight(hit, rank){ return !hit ? 5 : rank === 1 ? 16 : rank === 2 ? 14 : rank === 3 ? 12 : 9; }
  // Full ladder for one matched stat variant. Tied names share a tier's bar colour, but each
  // still gets its own line and its own hit check — a disc only ever rolls one of a tied pair,
  // so folding them into a single "B / C" line would make it look like both landed at once.
  checkLadder(subList, subNotes, hitSet, excludeName){
    const notes = subNotes || {};
    const out = [];
    let rank = 0;
    (subList || []).forEach(entry => {
      const isGap = entry && typeof entry === "object" && !Array.isArray(entry);
      rank += isGap ? (entry.gap || 0) : 0;
      const value = isGap ? entry.name : entry;
      const names = Array.isArray(value) ? value : [value];
      names.forEach(name => {
        if(excludeName && name === excludeName) return;
        const isHit = !!(hitSet && hitSet.has(name));
        out.push({
          label: (isHit ? "✓ " : "") + name,
          barStyle: {height:"5px", background: this.depthTone(rank + 1), opacity: isHit ? 1 : .35, marginBottom:"8px"},
          textStyle: isHit
            ? {font:"600 14px/1.3 'JetBrains Mono',monospace", color:"#ecefe6"}
            : {font:"400 14px/1.3 'JetBrains Mono',monospace", color:"#8a9099"},
          hasNote: !!notes[name],
          noteTitle: notes[name] || ""
        });
      });
      rank += 1;
    });
    return out;
  }
  // Same idea, but for the slot's main stat instead of its four substats. A disc only ever rolls
  // ONE main stat, so at most a single name here is ever "hit" — and bars split the row's full
  // width evenly rather than wrapping fixed-size boxes, so a slot with just one real option (or a
  // fixed main) visibly fills the whole lane instead of sitting in a lone small corner of it.
  checkMainLadder(mainsList, isFixed, fixedName, mainStat){
    if(isFixed){
      return [{
        label: fixedName,
        barStyle: {height:"5px", background: this.depthTone(1), opacity:1, marginBottom:"8px"},
        textStyle: {font:"600 14px/1.3 'JetBrains Mono',monospace", color:"#ecefe6"}
      }];
    }
    const out = [];
    let rank = 0;
    (mainsList || []).forEach(entry => {
      const isGap = entry && typeof entry === "object" && !Array.isArray(entry);
      rank += isGap ? (entry.gap || 0) : 0;
      const value = isGap ? entry.name : entry;
      const names = Array.isArray(value) ? value : [value];
      names.forEach(name => {
        const isHit = name === mainStat;
        out.push({
          label: (isHit ? "✓ " : "") + name,
          barStyle: {height:"5px", background: this.depthTone(rank + 1), opacity: isHit ? 1 : .35, marginBottom:"8px"},
          textStyle: isHit
            ? {font:"600 14px/1.3 'JetBrains Mono',monospace", color:"#ecefe6"}
            : {font:"400 14px/1.3 'JetBrains Mono',monospace", color:"#8a9099"}
        });
      });
      rank += 1;
    });
    return out;
  }
  // ---------- fit rating (F–S+), deliberately independent of build primacy ----------
  // Some optional builds are objectively worse and some need extra team support to pay off, so
  // "is this their meta build" stays its own separate BUILD column and never feeds this grade —
  // this only judges how well the piece itself fits whichever build already won the match.
  // Same normalized-quality shape used everywhere else here: rank 1 of N scores 1.0, the last
  // of N scores 1/N — a set-and-forget way to compare positions across lists of any length.
  fitQuality(rank, of){
    if(!of) return 1;
    const curve = [1, .8, .6, .4, .25, .15, .1];
    return curve[Math.max(0, rank - 1)] != null ? curve[Math.max(0, rank - 1)] : .05;
  }
  // 2. Main stat gets its own, steeper curve and a bigger share of the grade. On slots 4-6 the main
  //    stat is worth far more than a few substat rolls, so a 2nd-choice main tops out around A and
  //    a 3rd choice around B, however good the substats are.
  mainQuality(rank, of){
    if(!of) return 1;
    return [1, .6, .35][Math.max(0, rank - 1)] != null ? [1, .6, .35][Math.max(0, rank - 1)] : .2;
  }
  mainWeightOf(isFixed, rank, of){ return isFixed ? 1 : .5 + .5 * this.mainQuality(rank, of); }
  // Every name in a sub list with its rank (ties share one) and the list's total tier span —
  // one flat array, so "how good is this specific set of hits" can be compared against every
  // other possible set of hits from the same list.
  flattenSubLadder(subList){
    const out = [];
    let rank = 0;
    (subList || []).forEach(entry => {
      const isGap = entry && typeof entry === "object" && !Array.isArray(entry);
      rank += isGap ? (entry.gap || 0) : 0;
      const value = isGap ? entry.name : entry;
      (Array.isArray(value) ? value : [value]).forEach(name => out.push({name: name, rank: rank + 1}));
      rank += 1;
    });
    out.forEach(o => { o.of = rank; });
    return out;
  }
  // "What does this set usually want?" — independent of any main stat or substats actually on
  // the disc in hand, so it can show up the moment a set is picked, before a slot even is. Each
  // TRACKED agent who can use this set (as p4 or anywhere in p2) counts once, not once per build
  // variant — an agent with several recorded alternate stat spreads shouldn't out-vote one with
  // only a Primary. Ignored agents never enter the average at all, same as everywhere else in the
  // app that talks about "who wants this" — an agent you've ignored shouldn't shape what looks
  // desirable here either. A stat nobody on a given variant wants still counts as a flat 0 for it,
  // so the average reads as popularity and priority combined, not just "how high fans rank it when
  // they want it at all." slotKey is null/omitted to skip the main-stat side entirely (fixed slots).
  setDesireSummary(setName, slotKey){
    const A = this.constructor;
    const subTotals = new Map(), mainTotals = new Map();
    let n = 0;
    A.AGENTS.forEach(a => {
      if(this.rosterOf(a.n) !== "shown") return;
      const data = this.getActiveBuilds(a);
      const usesSet = data.sets.some(sv => sv.p4 === setName || this.rankIn(sv.p2, setName).hit);
      if(!usesSet || !data.stats.length) return;
      n++;
      const addAveraged = (totals, listOf) => {
        const perVariant = data.stats.map(tv => this.flattenSubLadder(listOf(tv)));
        const names = new Set();
        perVariant.forEach(l => l.forEach(x => names.add(x.name)));
        names.forEach(name => {
          const sum = perVariant.reduce((s, l) => {
            const hit = l.find(x => x.name === name);
            return s + (hit ? this.fitQuality(hit.rank, hit.of) : 0);
          }, 0);
          totals.set(name, (totals.get(name) || 0) + sum / perVariant.length);
        });
      };
      addAveraged(subTotals, tv => tv.sub);
      if(slotKey) addAveraged(mainTotals, tv => (tv.mains || {})[slotKey] || []);
    });
    // Anything one niche agent wants at the bottom of their ladder still scored above zero, so
    // the list ran to every stat in the game and the tail said nothing. The cut is relative to the
    // most-wanted stat rather than absolute, so it scales with how contested the set is.
    const cut = this.props.desireThreshold != null ? this.props.desireThreshold : 0.18;
    const toList = totals => {
      const all = Array.from(totals.entries())
        .map(([name, sum]) => ({name: name, avg: n ? sum / n : 0}))
        .filter(x => x.avg > 0)
        .sort((x, y) => y.avg - x.avg || x.name.localeCompare(y.name));
      if(!all.length) return all;
      const floor = all[0].avg * cut;
      const keep = all.filter(x => x.avg >= floor);
      // never collapse to a single entry — a list of one reads as "only this", which is stronger
      // than the data supports
      const out = keep.length >= 2 ? keep : all.slice(0, Math.min(2, all.length));
      out.niche = all.length - out.length;
      return out;
    };
    const subs = toList(subTotals), mains = slotKey ? toList(mainTotals) : [];
    return {count: n, subs: subs, mains: mains,
      nicheSubs: subs.niche || 0, nicheMains: mains.niche || 0};
  }
  // Count does almost all of the talking — landing 1 real substat is a throwaway, 2 is a maybe,
  // 3 is a definite keep, and 4 (every slot actually wanted) is the rare best case. Hand-set to
  // those anchors rather than derived, since a smooth formula kept being too generous to low counts.
  // Shared score -> letter mapping, so the vertical grade lands in the same bands as the fit grade.
  // Lighten or darken a hex toward another, for building a platter gradient out of one colour.
  // Dominant colour of a disc icon: the average of its most saturated, mid-bright pixels, which
  // tracks the artwork's identity colour rather than its dark background or white label text.
  // Every disc's identity colour, sampled from its own artwork at build time: the weighted
  // average of the most saturated mid-bright pixels on the playing surface, ignoring the hub, the
  // outer edge, the black ground and the white print. Baked rather than measured in the browser —
  // runtime sampling had to reach into the slot component's shadow DOM at just the right moment,
  // and any miss fell back to a flat grey.
  static SET_COLOR = {
    "Astral Voice": "#e3dacc",
    "Branch & Blade Song": "#539bca",
    "Bunny in Wonderland": "#348dd3",
    "Chaos Jazz": "#edc216",
    "Chaotic Metal": "#55bb4c",
    "Dawn's Bloom": "#febc2a",
    "Fanged Metal": "#d72322",
    "Feathered Fate": "#f7a4dd",
    "Freedom Blues": "#48a387",
    "Hormone Punk": "#b9e028",
    "Inferno Metal": "#dd1a7a",
    "King of the Summit": "#ee9c09",
    "Moonlight Lullaby": "#ebe5cd",
    "Notes From the Chained": "#e7e5ed",
    "Phaethon's Melody": "#8868e7",
    "Polar Metal": "#0dd496",
    "Proto Punk": "#ffa920",
    "Puffer Electro": "#b8bec7",
    "Shadow Harmony": "#fe8102",
    "Shining Aria": "#feb4b8",
    "Shockstar Disco": "#563de5",
    "Soul Rock": "#eda216",
    "Swing Jazz": "#29b349",
    "The Sky Ablaze": "#3243c6",
    "Thorned Rose": "#5e1819",
    "Thunder Metal": "#6b2df5",
    "White Water Ballad": "#c45244",
    "Woodpecker Electro": "#178755",
    "Wuthering Salon": "#a6b3ec",
    "Yunkui Tales": "#b08b33"
  };
  setColor(setName){
    return (setName && this.constructor.SET_COLOR[setName]) || null;
  }
  hubPair(setName, size){
    const pc = this.setColor(setName) || "#3a4049";
    const ring = Math.round(size * 0.265), hole = Math.round(size * 0.112);
    const at = px => ({position:"absolute", top:"50%", left:"50%", width:px + "px",
      height:px + "px", borderRadius:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none"});
    return {
      ring: Object.assign(at(ring), {
        background:"radial-gradient(circle," + this.shadeMix(pc, "#000000", .35) + ","
          + this.shadeMix(pc, "#000000", .62) + ")",
        boxShadow:"inset 0 0 0 1px rgba(255,255,255,.14)"}),
      hole: Object.assign(at(hole), {
        background:"#0b0c0e", boxShadow:"0 0 0 2px rgba(11,12,14,.8)"})
    };
  }

  shadeMix(hex, toward, amt){
    const p = h => [1,3,5].map(i => parseInt(h.slice(i, i+2), 16));
    const a = p(hex), b = p(toward);
    return "#" + a.map((v, i) => Math.round(v + (b[i] - v) * amt).toString(16).padStart(2, "0")).join("");
  }
  gradeBand(score){
    const bands = [
      {min: .90, grade:"S", color:"#f5a623"}, {min: .72, grade:"A", color:"#b98cff"},
      {min: .60, grade:"B", color:"#6cc6ff"}, {min: .40, grade:"C", color:"#4ade80"},
      {min: .22, grade:"D", color:"#8a9099"}, {min: 0, grade:"F", color:"#ff4d5e"}
    ];
    const b = bands.find(x => score >= x.min);
    return b;
  }
  // ---------- vertical grade ----------
  // The fit grade asks "are these the right lines". The vertical grade asks a different question:
  // of every stat allocation this disc will ever make — its 3 or 4 starting lines plus 5 upgrade
  // rolls, so 8 or 9 in total — how many landed somewhere worth having, and how good was each.
  //
  // Not every hit counts the same. A roll into the agent's #1 line is worth full marks; one into
  // their #4 is worth a fraction, via the same fitQuality curve the fit grade uses. A roll onto a
  // line they don't want scores zero.
  //
  // The yardstick is the best this disc could possibly have done with the SAME number of
  // allocations: four distinct top lines to establish itself, then every upgrade stacked on the
  // single best line. That keeps an early disc judged on its start rather than punished for rolls
  // it hasn't taken yet.
  verticalGrade(disc, cand, ticks, fitScore){
    if(!cand || !cand.statVar) return null;
    const A = this.constructor;
    const base = (disc.subs || []).filter(Boolean);
    const reachable = this.flattenSubLadder(cand.statVar.sub).filter(l => l.name !== disc.main);
    if(!reachable.length) return null;
    const threshold = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
    const recorded = base.length + (ticks || []).length;
    if(recorded < threshold){
      return {pending: true, need: threshold - recorded, spent: recorded,
        lifetime: base.length + A.UP_TICKS, maxAlloc: 4 + A.UP_TICKS, targetHits:
          (this.props.superbHits != null ? this.props.superbHits : 6)};
    }
    const wOf = name => {
      const e = reachable.find(l => l.name === name);
      return e ? this.fitQuality(e.rank, e.of) : 0;
    };
    const sorted = reachable.map(l => this.fitQuality(l.rank, l.of)).sort((a, b) => b - a);
    const w1 = sorted[0] || 1;
    const topDistinct = k => sorted.slice(0, k).reduce((a, b) => a + b, 0);
    // Best possible for N allocations: as many distinct wanted lines as the disc has room for,
    // then every allocation past the fourth stacked on the best line. Base slots beyond the
    // agent's ladder earn nothing — they can only hold a stat that agent doesn't want.
    const bestFor = n => topDistinct(Math.min(4, n, sorted.length)) + Math.max(0, n - 4) * w1;

    const allocs = base.concat(ticks || []);
    const earned = allocs.reduce((sum, n) => sum + wOf(n), 0);
    const hits = allocs.filter(n => wOf(n) > 0).length;
    const spent = allocs.length;
    const lifetime = base.length + A.UP_TICKS;
    const remaining = lifetime - spent;
    // A disc that starts on three lines spends its first upgrade rolling the fourth — a line the
    // four-line disc was handed for free — so it only ever makes 8 allocations against the other's
    // 9. That gap is structural, not bad luck, so the yardstick is always a full nine-allocation
    // disc: a flawless three-liner ceilings just under a flawless four-liner, which is correct.
    const perfect = bestFor(4 + A.UP_TICKS) || 1;

    // Current grade judges only the rolls actually taken, so an early disc isn't punished for
    // upgrades it hasn't had yet. The structural penalty lives in the ceiling, where the
    // keep-or-drop decision is actually made.
    const mainWeight = this.mainWeightOf(cand.isFixed, cand.mainRank, cand.mainOf);

    // A theoretically perfect disc — all nine allocations on the best lines — is the wrong
    // yardstick, because nobody ever builds one. A well-geared agent runs roughly 30-36 good
    // substat rolls across six discs, so a disc pulling its weight lands about 6. That hit count
    // is what earns an S here; the old curve put it at B and reserved S for a 9/9 disc that
    // doesn't exist in practice.
    //
    // Value, not just count, decides it: six rolls into an agent's weakest wanted lines score far
    // below six into their top ones, so a worst-case six still grades mid-B.
    const targetHits = this.props.superbHits != null ? this.props.superbHits : 6;
    const target = bestFor(targetHits) || 1;
    // Straight-line up to the target: banked value is what it is, and bending the curve only
    // flattered discs that had earned very little — a finished disc with two hits out of eight
    // was reading C. Above target the leftover headroom spreads across the S band so 7, 8 and 9
    // hits still separate.
    const curve = e => {
      const r = e / target;
      return r <= 1 ? .93 * r
        : .93 + .07 * Math.min(1, (e - target) / Math.max(.0001, perfect - target));
    };
    // The CURRENT grade is judged against the best this disc could have done with the allocations
    // it has actually spent, capped at a full share. Scoring a +0 disc against a six-hit target
    // penalised it for upgrades it hadn't had yet: a flawless four-line start read A while the fit
    // grade called it S. With the cap the two agree at +0 and the six-hit anchor still holds from
    // the third tick on, where bestFor(spent) passes the target anyway.
    // Floored at the four-line ideal the fit grade measures against, so a three-line disc is
    // judged on the same yardstick rather than a softer one — which both aligns the two grades at
    // +0 and preserves the structural penalty for starting a line down.
    const nowDen = Math.min(bestFor(Math.max(spent, 4)) || 1, target);
    const nowCurve = e => {
      const r = e / nowDen;
      return r <= 1 ? .93 * r
        : .93 + .07 * Math.min(1, (e - nowDen) / Math.max(.0001, perfect - nowDen));
    };
    // With no upgrades recorded there is no roll history to add anything, so this is answering the
    // exact question the fit grade already answered — about the same lines, for the same agent. It
    // defers to that score outright rather than re-deriving it on a curve that weighs quality over
    // count and lands a band away. From the first tick the allocation model takes over, which is
    // the point at which it genuinely knows something the fit grade doesn't.
    const fresh = !(ticks || []).length && fitScore != null && fitScore >= 0;
    const nowScore = fresh ? fitScore
      : spent ? Math.min(1, mainWeight * nowCurve(earned)) : 0;
    const lines = this.upResolve(disc, ticks || []).types;
    const hasBest = lines.length ? Math.max.apply(null, lines.map(wOf)) : 0;
    let reach;
    if(remaining <= 0) reach = 0;
    else if(lines.length < 4){
      const fresh = reachable.filter(l => lines.indexOf(l.name) < 0).map(l => this.fitQuality(l.rank, l.of));
      const bestNew = fresh.length ? Math.max.apply(null, fresh) : 0;
      reach = bestNew + (remaining - 1) * Math.max(hasBest, bestNew);
    } else reach = remaining * hasBest;
    const ceilScore = Math.min(1, mainWeight * curve(earned + reach));
    const floorScore = Math.min(1, mainWeight * curve(earned));
    return {
      score: nowScore, band: this.gradeBand(nowScore),
      ceil: ceilScore, ceilBand: this.gradeBand(ceilScore),
      floor: floorScore, floorBand: this.gradeBand(floorScore),
      hits: hits, spent: spent, lifetime: lifetime, remaining: remaining,
      // how much of a perfect disc's total value it has actually banked
      banked: Math.min(1, mainWeight * curve(earned)), maxAlloc: 4 + A.UP_TICKS,
      targetHits: targetHits
    };
  }
  // Every way the remaining upgrades can land, enumerated exactly: an open line rolls one of the
  // substats the disc doesn't have yet (never its own main stat), and each upgrade after that hits
  // one of the four existing lines with equal odds. Each finished disc is scored with the same
  // curve as the vertical grade, so these odds are about the grade you'd actually see at +15.
  // Assumes new lines are drawn evenly from the pool.
  outlook(disc, cand, ticks){
    if(!cand || !cand.statVar) return null;
    const A = this.constructor;
    const done = ticks || [];
    const who = (cand.a || cand.agent || {}).n || "";
    const key = [who, disc.set, disc.slot, disc.main, (disc.subs || []).join("|"), done.join("|"),
      JSON.stringify(cand.statVar.sub), cand.mainRank, cand.mainOf, cand.isFixed].join("#");
    this._olCache = this._olCache || new Map();
    if(this._olCache.has(key)) return this._olCache.get(key);
    const reachable = this.flattenSubLadder(cand.statVar.sub).filter(l => l.name !== disc.main);
    if(!reachable.length) return null;
    const wOf = n => { const e = reachable.find(l => l.name === n); return e ? this.fitQuality(e.rank, e.of) : 0; };
    const sorted = reachable.map(l => this.fitQuality(l.rank, l.of)).sort((a, b) => b - a);
    const w1 = sorted[0] || 1;
    const topDistinct = k => sorted.slice(0, k).reduce((a, b) => a + b, 0);
    const bestFor = n => topDistinct(Math.min(4, n, sorted.length)) + Math.max(0, n - 4) * w1;
    const perfect = bestFor(4 + A.UP_TICKS) || 1;
    const target = bestFor(this.props.superbHits != null ? this.props.superbHits : 6) || 1;
    const curve = e => { const r = e / target;
      return r <= 1 ? .93 * r : .93 + .07 * Math.min(1, (e - target) / Math.max(.0001, perfect - target)); };
    const mw = this.mainWeightOf(cand.isFixed, cand.mainRank, cand.mainOf);
    const base = (disc.subs || []).filter(Boolean);
    const earned0 = base.concat(done).reduce((sum, n) => sum + wOf(n), 0);
    const lines0 = this.upResolve(disc, done).types.slice();
    const left = Math.max(0, A.UP_TICKS - done.length);
    const poolFor = lines => A.SUBSTAT_ORDER.filter(n => n !== disc.main && lines.indexOf(n) < 0);
    const run = (e0, lines, k) => {
      const o = {good: 0, great: 0, top: 0, exp: 0, min: Infinity, max: -Infinity, leaves: []};
      const rec = (e, ln, kk, p) => {
        if(kk === 0){
          const sc = Math.min(1, mw * curve(e));
          o.exp += p * sc; if(sc >= .60) o.good += p; if(sc >= .72) o.great += p; if(sc >= .90) o.top += p;
          if(sc < o.min) o.min = sc; if(sc > o.max) o.max = sc; o.leaves.push([sc, p]); return;
        }
        if(ln.length < 4){
          const pool = poolFor(ln), q = p / pool.length;
          pool.forEach(n => rec(e + wOf(n), ln.concat([n]), kk - 1, q));
        } else { const q = p / ln.length; ln.forEach(n => rec(e + wOf(n), ln, kk - 1, q)); }
      };
      rec(e0, lines, k, 1);
      o.leaves.sort((x, y) => y[0] - x[0]);
      let acc = 0; o.lucky = o.max;
      for(const [sc, p] of o.leaves){ acc += p; if(acc >= .10){ o.lucky = sc; break; } }
      o.leaves = null;
      return o;
    };
    const all = run(earned0, lines0, left);
    // With a line still open, the very next (and cheapest) upgrade decides a lot — say which rolls
    // turn it into a good disc.
    const open = lines0.length < 4 && left > 0;
    const swing = open ? poolFor(lines0).map(n => Object.assign({name: n}, run(earned0 + wOf(n), lines0.concat([n]), left - 1)))
      .sort((x, y) => y.good - x.good || y.exp - x.exp) : [];
    const out = {agent: who, pGood: all.good, pGreat: all.great, pTop: all.top, expected: all.exp,
      floor: all.min, ceil: all.max, lucky: all.lucky, open: open, left: left, swing: swing,
      ceilBand: this.gradeBand(all.max), luckyBand: this.gradeBand(all.lucky), expBand: this.gradeBand(all.exp)};
    if(this._olCache.size > 400) this._olCache.clear();
    this._olCache.set(key, out);
    return out;
  }
  ratingCountBase(matchCount){ return {0:0, 1:.35, 2:.55, 3:.78, 4:1}[matchCount] || 0; }
  ratingFor(m){
    // Too early to grade — fewer than the threshold's worth of substats are even known yet, so
    // there's nothing honest to say beyond "not enough info," not a punitive F. score:-1 sorts
    // ungraded rows below every real grade (which live in 0-1) when sorting the table by rating.
    if(m.matchCount === null) return {grade:"—", color:"#5f656e", score:-1};
    const mainScore = m.isFixed ? 1 : this.mainQuality(m.mainRank, m.mainOf);
    // A disc can't roll the same substat twice, so landing every single name an agent wants —
    // even spread across several different priority tiers — genuinely is the best any disc for
    // them could ever be. Quality is scored against the best sum achievable with THIS MANY hits
    // (the top-K names by value, K = matchCount) — a list with 5 or 6 real priorities scales the
    // same way as a 4-item one, since it's always comparing against its own best-possible K.
    // A disc physically cannot roll a substat equal to its own main stat, so that line is not an
    // achievable substat for THIS disc and must leave the comparison set. Otherwise an agent whose
    // top substat is also their slot main stat (Vivian: Anomaly Proficiency in both) can never earn
    // a perfect score — the yardstick includes a line no disc of that slot could ever have.
    const reachable = this.flattenSubLadder(m.statVar.sub)
      .filter(l => l.name !== m.mainName);
    let subScore = 0;
    if(m.matchCount){
      const actualSum = m.subs.filter(s => s.hit).reduce((sum, s) => sum + this.fitQuality(s.rank, s.of), 0);
      const bestSum = reachable.map(l => this.fitQuality(l.rank, l.of)).sort((a, b) => b - a)
        .slice(0, m.matchCount).reduce((sum, q) => sum + q, 0);
      const qualityRatio = bestSum ? actualSum / bestSum : 0;
      // Count base is rescaled against the most hits this disc could possibly land (4, or fewer
      // when the reachable list is shorter), so "every line they want, minus the one on the main
      // stat" reads as full marks instead of being capped by an unreachable 4th.
      const maxHits = Math.min(4, reachable.length);
      const ceiling = this.ratingCountBase(maxHits) || 1;
      const countBase = Math.min(1, this.ratingCountBase(m.matchCount) / ceiling);
      // Even the worst-quality set of K hits still earns half of that count's base — count is
      // what mainly moves the grade, quality nudges it within that count's band.
      subScore = countBase * (.5 + .5 * qualityRatio);
    }
    // Main is a modifier on the substat grade, not its own separate floor — a bad main stat can
    // only pull a good substat score down, never prop up a bad one, which is why it multiplies in
    // rather than adding its own guaranteed share.
    const mainWeight = this.mainWeightOf(m.isFixed, m.mainRank, m.mainOf);
    const score = subScore * mainWeight;
    const bands = [
      {min: .90, grade:"S", color:"#f5a623"}, {min: .72, grade:"A", color:"#b98cff"},
      {min: .60, grade:"B", color:"#6cc6ff"}, {min: .40, grade:"C", color:"#4ade80"},
      {min: .22, grade:"D", color:"#8a9099"}, {min: 0, grade:"F", color:"#ff4d5e"}
    ];
    const band = bands.find(b => score >= b.min);
    return {score: score, grade: band.grade, color: band.color};
  }

  cycleRoster(name, ev){
    if(ev){ ev.preventDefault(); ev.stopPropagation(); }
    this.setState(s => {
      const shown = s.shown.indexOf(name) >= 0 ? s.shown.filter(n => n !== name) : s.shown.concat([name]);
      this.persist(shown);
      return {shown: shown};
    });
  }
  // Agents missing from BUILDS get exactly one set option and one stat option, synthesized from
  // their existing flat fields — today, that's everyone but the four with real alternates.
  // Cleanup missions. Each drops two disc sets; a mission is scored as the sum of both. Enemy art loads from
  // enemies/<slug>-1.webp and -2.webp (or can be dropped onto the slot).
  // Possible main stats for a random drop in slots 4-6. Every option is treated as equally
  // likely, so each one's chance is simply 1 / (number of options in that slot). Slots 1-3 have a
  // fixed main stat, so their odds are 1.
  static MAIN_POOL = {
    s4: ["HP%","ATK%","DEF%","CRIT Rate","CRIT DMG","Anomaly Proficiency"],
    s5: ["HP%","ATK%","DEF%","PEN Ratio","Physical DMG","Fire DMG","Ice DMG","Electric DMG","Ether DMG","Wind DMG"],
    s6: ["HP%","ATK%","DEF%","Anomaly Mastery","Impact","Energy Regen"]
  };
  static MAIN_ODDS = Object.fromEntries(Object.entries(this.MAIN_POOL)
    .map(([k, list]) => [k, Object.fromEntries(list.map(n => [n, 1 / list.length]))]));
  // Chance a random drop in this slot has a main stat the agent can use, respecting the
  // "best main stat only" setting.
  mainOdds(agent, k){
    const A = this.constructor;
    if(!A.MAIN_ODDS[k]) return 1;
    const ok = new Set();
    const data = this.getActiveBuilds(agent);
    (data.stats || []).forEach(v => {
      const list = (v.mains && v.mains[k]) || agent[k] || [];
      list.forEach((x, rank) => {
        if(rank > 0 && this.state.mainFilter === "best") return;
        (Array.isArray(x) ? x : [x]).forEach(n => { if(n) ok.add(n); });
      });
    });
    let p = 0;
    ok.forEach(n => { p += A.MAIN_ODDS[k][n] || 0; });
    return Math.min(1, p);
  }
  static MISSIONS = [
    {name:"Monster and Weirdo", sets:["Swing Jazz", "Chaotic Metal"]},
    {name:"Fist and Gun", sets:["Hormone Punk", "Fanged Metal"]},
    {name:"Hunter and Hound", sets:["Shockstar Disco", "Thunder Metal"]},
    {name:"Tower and Cannon", sets:["Woodpecker Electro", "Soul Rock"]},
    {name:"Madman and Follower", sets:["Puffer Electro", "Inferno Metal"]},
    {name:"Sharp Fang and Blunt Axe", sets:["Freedom Blues", "Polar Metal"]},
    {name:"Hunter and Beast", sets:["Chaos Jazz", "Proto Punk"]},
    {name:"Monster Duet", sets:["Branch & Blade Song", "Astral Voice"]},
    {name:"Gunslinger vs Guardian", sets:["Shadow Harmony", "Phaethon's Melody"]},
    {name:"Words and Weapons", sets:["Yunkui Tales", "King of the Summit"]},
    {name:"Iron Law and Outlaws", sets:["Dawn's Bloom", "Moonlight Lullaby"]},
    {name:"Deceits and Bulwarks", sets:["White Water Ballad", "Shining Aria"]},
    {name:"Dragon Taming Chariot", sets:["Bunny in Wonderland", "Notes From the Chained"]},
    {name:"Pilot and the Rebel Mech", sets:["Wuthering Salon", "The Sky Ablaze"]},
    {name:"Swiftspine and Splitclaw", sets:["Feathered Fate", "Thorned Rose"]}
  ];
  // Enemy art only draws once the file has actually loaded, so a missing image never shows a
  // broken-image icon.
  enemyOk(path){
    this._enemy = this._enemy || {};
    if(!(path in this._enemy)){
      this._enemy[path] = false;
      const im = new Image();
      im.onload = () => { this._enemy[path] = true; this.forceUpdate(); };
      im.src = path;
    }
    return this._enemy[path];
  }
  setPatrolSkip(list){
    const v = Array.from(new Set(list));
    try { localStorage.setItem("discTriage_patrolSkip", JSON.stringify(v)); } catch(e){}
    this.setState({patrolSkip: v});
  }
  // How much farming each disc set would still improve the focused agents.
  //   For each agent, the best disc they could wear in each slot of each set is scored
  //   (equipped or free, not worn by / reserved for anyone else; empty = 0, ungraded = 0.5).
  //   The six slots are split 4/2 between the 4pc set and each 2pc option in whichever way the
  //   owned discs fit best, and a set's value is what's still missing in ITS slots, out of 6.
  //   Each slot's gap is weighted by the chance a random drop has a main stat the agent wants
  //   (MAIN_ODDS), so a set whose missing pieces are rare-main slots ranks lower.
  //   Recommended 2pc counts in full, other 2pc options at 0.65 when allowed in Settings.
  // An empty agent is worth 1 in total (4/6 to their 4pc, 2/6 to their 2pc), so a set's total
  // reads as "agents' worth of improvement". Four S discs of a set make it worth ~0 to farm.
  patrolPlan(agents){
    const A = this.constructor, st = this.state;
    const bySet = {};
    const flat = list => {
      const out = [];
      (list || []).forEach((x, rank) => (Array.isArray(x) ? x : [x]).forEach(n => { if(n) out.push({n: n, rank: rank}); }));
      return out;
    };
    const SL = ["s1","s2","s3","s4","s5","s6"];
    // every way to pick the 4 slots the 4pc set fills; the other 2 belong to the 2pc
    const fours = [];
    for(let i = 0; i < 6; i++) for(let j = i + 1; j < 6; j++) fours.push(SL.filter((x, k) => k !== i && k !== j));
    agents.forEach(a => {
      // Discs this agent could actually wear: their own plus any free disc not hidden from them
      // or reserved for someone else. Unequipped discs count, so a good disc you forgot to put on
      // still means that slot is covered.
      const avail = st.discs.filter(d => (!d.to || d.to === a.n)
        && !st.discHidden[this.hideKey(d.id, a.n)]
        && !(st.discAssign[d.id] && st.discAssign[d.id] !== a.n));
      const q = {};
      const qOf = (set, k) => {
        const key = set + "|" + k;
        if(key in q) return q[key];
        let best = 0;
        avail.forEach(d => {
          if(d.set !== set || d.slot !== k) return;
          const g = this.discGradeFor(d, a);
          if(!g) return;
          const v = g.score >= 0 ? Math.min(1, g.score) : .5;
          if(v > best) best = v;
        });
        return (q[key] = best);
      };
      const odds = {};
      SL.forEach(k => { odds[k] = this.mainOdds(a, k); });
      // A gap only counts as much as a random drop could actually fill it: slots 1-3 always can,
      // a slot 4 that needs CRIT Rate only about 7% of the time.
      const miss = (set, slots) => slots.reduce((x, k) => x + (1 - qOf(set, k)) * odds[k], 0);
      const weakIn = (set, slots) => slots.filter(k => qOf(set, k) < .6).length;
      const data = this.getActiveBuilds(a);
      const best = {};
      const offer = (set, val, piece, weak) => {
        if(!best[set] || val > best[set].val) best[set] = {val: val, piece: piece, weak: weak};
      };
      (data.sets || []).forEach(v => {
        const p4 = Array.isArray(v.p4) ? v.p4[0] : v.p4;
        const twos = flat(v.p2).filter(x => x.n !== p4 && !(x.rank > 0 && st.pieceFilter === "recommended"));
        if(!p4){
          twos.forEach(x => {
            const slots = SL.slice().sort((m, n) => qOf(x.n, n) - qOf(x.n, m)).slice(0, 2);
            offer(x.n, (x.rank === 0 ? 1 : .65) * miss(x.n, slots) / 6, "2pc", weakIn(x.n, slots));
          });
          return;
        }
        // Split the six slots between the 4pc and each 2pc option the way your discs fit best,
        // then measure what each set still lacks in its own slots.
        let p4Miss = Infinity, p4Slots = null;
        (twos.length ? twos : [null]).forEach(x => {
          let bestFit = -1, pick = null;
          fours.forEach(f => {
            const rest = SL.filter(k => f.indexOf(k) < 0);
            const fit = f.reduce((t, k) => t + qOf(p4, k), 0) + (x ? rest.reduce((t, k) => t + qOf(x.n, k), 0) : 0);
            if(fit > bestFit){ bestFit = fit; pick = f; }
          });
          const rest = SL.filter(k => pick.indexOf(k) < 0);
          const m4 = miss(p4, pick);
          if(m4 < p4Miss){ p4Miss = m4; p4Slots = pick; }
          if(x) offer(x.n, (x.rank === 0 ? 1 : .65) * miss(x.n, rest) / 6, "2pc", weakIn(x.n, rest));
        });
        offer(p4, p4Miss / 6, "4pc", weakIn(p4, p4Slots));
      });
      Object.keys(best).forEach(n => {
        if(best[n].val < .01) return;
        (bySet[n] = bySet[n] || []).push({agent: a, val: best[n].val, piece: best[n].piece, weak: best[n].weak});
      });
    });
    const sets = Object.keys(bySet).map(n => {
      const who = bySet[n].sort((x, y) => y.val - x.val);
      return {set: n, total: who.reduce((x, y) => x + y.val, 0), who: who};
    }).sort((x, y) => y.total - x.total);
    const setTotal = n => { const f = sets.find(x => x.set === n); return f ? f.total : 0; };
    const missions = A.MISSIONS.map(m => {
      const known = m.sets.filter(Boolean);
      return {m: m, known: known.length === 2, total: known.reduce((x, n) => x + setTotal(n), 0)};
    }).sort((x, y) => (y.known - x.known) || (y.total - x.total));
    return {sets: sets, missions: missions};
  }
  getAgentBuilds(agent){
    const A = this.constructor;
    if(A.BUILDS[agent.n]) return A.BUILDS[agent.n];
    return {
      sets: [{label:"Primary", note:"", p4: agent.p4, p2: agent.p2 ? [agent.p2] : []}],
      stats: [{label:"Primary", note:"", mains: {s4: agent.s4, s5: agent.s5, s6: agent.s6}, sub: agent.sub}]
    };
  }
  // What the MATCHER should consider, as opposed to what the Agent Index draws. Holding a build
  // tab disables that variant, and until now that was purely cosmetic — the tab greyed out but
  // every verdict still scored against it. This drops disabled variants so a build you've ruled
  // out stops producing matches in Scrap or stash, Loadouts and Upgrades.
  //
  // The Agent Index keeps calling getAgentBuilds: its tab indices ARE the disable keys, so
  // filtering there would renumber them and disable the wrong build on the next press.
  getActiveBuilds(agent){
    const raw = this.getAgentBuilds(agent);
    const sets = raw.sets.filter((b, i) => !this.isBuildDisabled(agent.n, "tier", i));
    const stats = raw.stats.filter((b, i) => !this.isBuildDisabled(agent.n, "stat", i));
    // Disabling every variant means "ignore this agent", not "fall back to Primary" — an empty
    // list is honest, and callers already guard on stats.length.
    if(sets.length === raw.sets.length && stats.length === raw.stats.length) return raw;
    return {sets: sets, stats: stats};
  }
  // Disc set and stat priority are independent choices — each keeps its own selection index so
  // flipping one never resets the other.
  selectSet(name, idx){
    this.setState(s => ({selectedSet: Object.assign({}, s.selectedSet, {[name]: idx})}));
    this.playBuildDiscs(name);
  }
  selectStat(name, idx){
    this.setState(s => ({selectedStat: Object.assign({}, s.selectedStat, {[name]: idx})}));
  }
  chip(on){
    return on
      ? {font:"500 15px/1 'JetBrains Mono',monospace", letterSpacing:".05em", padding:"7px 11px", cursor:"pointer", background:"#e8ff45", color:"#0b0c0e", border:"1px solid #e8ff45"}
      : {font:"500 15px/1 'JetBrains Mono',monospace", letterSpacing:".05em", padding:"7px 11px", cursor:"pointer", background:"#0f1114", color:"#8a9099", border:"1px solid #2e333b"};
  }
  // Smaller sibling of chip() — sized to sit inline with the results table's own 8-9px type
  // instead of the sidebar-scale chips elsewhere.
  // Track+thumb switch chrome for the row filters — same visual language as the roster on/off
  // switch inside each expanded row, just accent-yellow instead of green (this "on" doesn't mean
  // tracked/good, it means "showing more rows than the default"). The switch position IS the
  // state, so the label text next to it stays fixed — it names what it toggles, not the state.
  filterSwitch(on){
    return {
      btnStyle: {display:"flex", alignItems:"center", gap:"9px", padding:"6px 12px 6px 6px", cursor:"pointer",
        background:"#0f1114", border:"1px solid " + (on ? "#e8ff4555" : "#2e333b")},
      trackStyle: {position:"relative", width:"34px", height:"18px", flex:"0 0 34px", borderRadius:"9px",
        background: on ? "#e8ff45" : "#2e333b", transition:"background .12s ease"},
      thumbStyle: {position:"absolute", top:"2px", left: on ? "18px" : "2px",
        width:"14px", height:"14px", borderRadius:"50%", background:"#0b0c0e", transition:"left .12s ease"},
      labelStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
        color: on ? "#e8ff45" : "#8a9099"}
    };
  }

  // ---------- mutations ----------
  setTracked(names){
    const shown = Array.from(new Set(names));
    this.persist(shown);
    this.setState({shown: shown});
  }
  finishSetup(){
    try { localStorage.setItem("discTriage_setupDone", "1"); } catch(e){}
    this.setState({setupOpen: false, setupPending: false, setupQ: ""});
    let done = false; try { done = !!localStorage.getItem("discTriage_tourDone"); } catch(e){}
    if(!done) setTimeout(() => this.startTour(), 250);
  }
  // two-option segmented control, shared by setup and Settings
  picFor(name, mode){
    const n = name.replace(/ /g, "_");
    if(mode !== "icon") return "icons/Avatar_" + n + ".webp";
    return "icons/Agent_" + n + (this.constructor.NO_CIRCLE_ICON.has(name) ? "_Icon.webp" : "_Circle_Icon.webp");
  }
  // One agent per visit, picked at random, so both options show the same face.
  exampleAgent(){
    if(!this._exAgent){
      const pool = ["Alice","Burnice","Cissia","Dialyn","Jane","Ju Fufu","Nicole","Nangong Yu","Sunna","Remielle","Zhu Yuan","Roxy"];
      this._exAgent = pool[Math.floor(Math.random() * pool.length)];
    }
    return this._exAgent;
  }
  exampleArtAgent(){
    if(!this._exArt){
      const pool = ["Alice","Burnice","Cissia","Dialyn","Jane","Ju Fufu","Nicole","Nangong Yu","Sunna","Remielle","Zhu Yuan","Roxy"];
      this._exArt = pool[Math.floor(Math.random() * pool.length)];
    }
    return this._exArt;
  }
  seg(options, value, onPick){
    return options.map(o => ({label: o.l, sub: o.s || "", title: o.t || "",
      hasImg: !!o.img, initial: o.initial || "",
      imgStyle: !o.img ? {} : o.wide
        ? {position:"relative", flex:"0 0 104px", width:"104px", height:"58px", overflow:"hidden",
            background:"radial-gradient(rgba(255,255,255,.045) .9px,transparent 1.3px) 0 0/5px 5px,#0f1114",
            border:"1px solid #2e333b", display:"flex", alignItems:"center", justifyContent:"center"}
        : {position:"relative", flex:"0 0 56px", width:"56px", height:"56px", borderRadius:"50%",
            overflow:"hidden", background:"#0f1114", border:"2px solid " + (o.ring || "#3a4049"),
            display:"flex", alignItems:"center", justifyContent:"center"},
      imgInner: !o.img ? {} : {position:"absolute", inset:0, backgroundImage:'url("' + o.img + '")',
        backgroundRepeat:"no-repeat", backgroundSize: o.wide ? "auto 138%" : "cover",
        backgroundPosition: o.wide ? "62% center" : "center"},
      style: {flex:"1 1 0", minWidth:0, padding:"12px 14px", textAlign:"left", cursor:"pointer",
        display:"flex", alignItems:"center", gap:"12px",
        background: value === o.v ? "#e8ff450f" : "#0f1114",
        border:"1px solid " + (value === o.v ? "#e8ff45" : "#2e333b"),
        color: value === o.v ? "#ecefe6" : "#9aa0a8"},
      labelStyle: {display:"block", font:"700 15px/1.15 'Chakra Petch',sans-serif", letterSpacing:".04em",
        textTransform:"uppercase", color: value === o.v ? "#e8ff45" : "#ecefe6"},
      subStyle: {display:"block", marginTop:"5px", font:"400 14px/1.35 Barlow,sans-serif", color:"#9aa0a8"},
      onClick: () => onPick(o.v)}));
  }
  // Shared by the Agent index and Loadouts toolbars, so both read as one control system.
  segBtn(on){
    return {display:"flex", alignItems:"center", gap:"6px", height:"32px", padding:"0 12px",
      border:"none", cursor:"pointer", whiteSpace:"nowrap",
      font:"600 13px/1 'JetBrains Mono',monospace", letterSpacing:".04em",
      background: on ? "#e8ff45" : "#0f1114", color: on ? "#0b0c0e" : "#9aa0a8"};
  }
  // True when the disc fits the agent through a build allowed by the current Settings. The
  // bay, empty-slot glow and auto-fill all use this, so none of them offer a disc that only fits
  // an alternative build, a non-recommended 2pc or a secondary main stat when those are off.
  fitsSettings(entry, agentName){
    const A = this.constructor, st = this.state;
    const a = A.AGENTS.find(x => x.n === agentName);
    if(!a) return false;
    const d = entry.d;
    const data = this.getActiveBuilds(a);
    const all = this.matchesForCheck(data.sets, data.stats, d.set, d.slot, d.main || "", entry.types || [], !!A.FIXED_MAIN[d.slot]);
    return all.some(m =>
      (st.primaryFilter !== "primary" || m.isPrimary)
      && (st.pieceFilter !== "recommended" || m.piece === "4pc" || m.pieceRank === 1)
      && (st.mainFilter !== "best" || m.isFixed || m.mainRank === 1));
  }
  persist(shown){
    try {
      localStorage.setItem("discTriage_wishlist", JSON.stringify(shown));
      localStorage.setItem("discTriage_initialized", "1");
    } catch(e){}
  }
  setPortraitMode(mode){
    this.setState({portraitMode: mode});
    try { localStorage.setItem("discTriage_portraitMode", mode); } catch(e){}
  }
  // ---------- hold-to-disable builds ----------
  persistDisabledBuilds(obj){ try { localStorage.setItem("discTriage_disabledBuilds", JSON.stringify(obj)); } catch(e){} }
  isBuildDisabled(agentName, kind, idx){ return !!this.state.disabledBuilds[agentName + "|" + kind + "|" + idx]; }
  ignoreBtnStyle(off){
    return {marginLeft:"auto", alignSelf:"flex-end", marginBottom:"3px", whiteSpace:"nowrap",
      font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".1em", padding:"4px 7px",
      background: off ? "#ff4d5e14" : "transparent",
      border:"1px solid " + (off ? "#ff4d5e55" : "#262a31"),
      color: off ? "#ff4d5e" : "#5f656e", cursor:"pointer"};
  }
  // A disc set only has live DOM refs while it's the one currently shown, so freezing/unfreezing
  // only makes sense (and only gets called) when the toggled tier tab is the active one.
  freezeAgentDiscs(agentName){
    (this._buildDiscRefs[agentName] || []).forEach(tile => {
      ((tile && tile.visualEls) || []).forEach(el => { if(el) el.style.transform = getComputedStyle(el).transform; });
    });
  }
  unfreezeAgentDiscs(agentName){
    (this._buildDiscRefs[agentName] || []).forEach(tile => {
      ((tile && tile.visualEls) || []).forEach(el => { if(el) el.style.transform = ""; });
    });
  }
  toggleBuildDisabled(agentName, kind, idx){
    const key = agentName + "|" + kind + "|" + idx;
    const willDisable = !this.state.disabledBuilds[key];
    if(kind === "tier" && idx === (this.state.selectedSet[agentName] || 0)){
      if(willDisable) this.freezeAgentDiscs(agentName); else this.unfreezeAgentDiscs(agentName);
    }
    this.setState(s => {
      const disabledBuilds = Object.assign({}, s.disabledBuilds);
      if(disabledBuilds[key]) delete disabledBuilds[key]; else disabledBuilds[key] = true;
      this.persistDisabledBuilds(disabledBuilds);
      return {disabledBuilds: disabledBuilds};
    });
  }
  // Rows recycle physical DOM nodes across re-renders (e.g. a search-filter swap), so a node
  // once bound for one tab can silently become a different tab later. Re-binding fresh
  // listeners on every ref call (and tearing down whatever this node had before) keeps the
  // attached closure's agentName/kind/idx honest instead of trusting a one-time bound flag.
  buildHoldRef(agentName, kind, idx){
    const key = agentName + "|" + kind + "|" + idx;
    return (el) => {
      if(!el) return;
      if(el._holdHandlers){
        const h = el._holdHandlers;
        el.removeEventListener("mousedown", h.start);
        el.removeEventListener("touchstart", h.start);
        el.removeEventListener("mouseup", h.cancel);
        el.removeEventListener("mouseleave", h.cancel);
        el.removeEventListener("touchend", h.cancel);
        el.removeEventListener("touchcancel", h.cancel);
      }
      const start = () => {
        clearTimeout(this._holdTimers[key]);
        this._holdTimers[key] = setTimeout(() => {
          this._holdFired[key] = true;
          this.toggleBuildDisabled(agentName, kind, idx);
        }, 1000);
      };
      const cancel = () => { clearTimeout(this._holdTimers[key]); };
      el._holdHandlers = {start: start, cancel: cancel};
      el.addEventListener("mousedown", start);
      el.addEventListener("touchstart", start, {passive: true});
      el.addEventListener("mouseup", cancel);
      el.addEventListener("mouseleave", cancel);
      el.addEventListener("touchend", cancel);
      el.addEventListener("touchcancel", cancel);
    };
  }
  // ---------- backup & restore ----------
  // Everything this tool knows lives in localStorage under one prefix, so the backup is simply
  // every key that carries it. Enumerating by prefix rather than listing keys means any state
  // added later is included without touching this code.
  static BK_PREFIX = "discTriage_";
  backupSnapshot(){
    const out = {};
    try {
      for(let i = 0; i < localStorage.length; i++){
        const k = localStorage.key(i);
        if(k && k.indexOf(this.constructor.BK_PREFIX) === 0) out[k.slice(this.constructor.BK_PREFIX.length)] = localStorage.getItem(k);
      }
    } catch(e){}
    return out;
  }
  // Codes are deflate-compressed then base64url'd: raw JSON of a full collection runs to several
  // KB, which is miserable to paste on a phone, and compression takes the common case under a
  // kilobyte. The PD0 path is the fallback for browsers without CompressionStream — same payload,
  // just bigger. The tag is what tells the decoder which it's holding.
  async encodeBackup(){
    const json = JSON.stringify(this.backupSnapshot());
    let bytes = new TextEncoder().encode(json), tag = "PD0";
    if(typeof CompressionStream === "function"){
      try {
        const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream("deflate-raw"));
        bytes = new Uint8Array(await new Response(stream).arrayBuffer());
        tag = "PD1";
      } catch(e){}
    }
    let bin = "";
    for(let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return tag + "." + btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async decodeBackup(code){
    const t = String(code || "").trim().replace(/\s+/g, "");
    const m = t.match(/^(PD[01])\.(.+)$/);
    if(!m) throw new Error("That doesn't look like a ProxyDisc backup code.");
    let b64 = m[2].replace(/-/g, "+").replace(/_/g, "/");
    while(b64.length % 4) b64 += "=";
    let bin;
    try { bin = atob(b64); } catch(e){ throw new Error("The code is incomplete or picked up stray characters — copy the whole thing and try again."); }
    let bytes = new Uint8Array(bin.length);
    for(let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    if(m[1] === "PD1"){
      if(typeof DecompressionStream !== "function") throw new Error("This browser can't read compressed codes. Restore from a backup file instead.");
      try {
        const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
        bytes = new Uint8Array(await new Response(stream).arrayBuffer());
      } catch(e){ throw new Error("The code is damaged — it decoded but wouldn't decompress."); }
    }
    let obj;
    try { obj = JSON.parse(new TextDecoder().decode(bytes)); }
    catch(e){ throw new Error("The code decoded to something that isn't ProxyDisc data."); }
    if(!obj || typeof obj !== "object" || Array.isArray(obj)) throw new Error("The code didn't contain a ProxyDisc backup.");
    return obj;
  }
  // A restore rewrites every key the snapshot covers, so the safest way to pick it up is a reload:
  // roster, discs, upgrades and the derived caches are all read once at construction.
  applyBackup(obj){
    const P = this.constructor.BK_PREFIX;
    const keys = Object.keys(obj);
    if(!keys.length) throw new Error("That backup is empty.");
    for(let i = localStorage.length - 1; i >= 0; i--){
      const k = localStorage.key(i);
      if(k && k.indexOf(P) === 0) localStorage.removeItem(k);
    }
    keys.forEach(k => { if(typeof obj[k] === "string") localStorage.setItem(P + k, obj[k]); });
    return keys.length;
  }
  async copyBackupCode(){
    try {
      const code = await this.encodeBackup();
      let ok = false;
      try { await navigator.clipboard.writeText(code); ok = true; } catch(e){}
      this.setState({bkCode: code, bkTone: ok ? "ok" : "bad",
        bkStatus: ok ? "Copied — " + code.length.toLocaleString() + " characters on your clipboard."
          : "Couldn't reach the clipboard. Select the code below and copy it by hand."});
    } catch(e){ this.setState({bkTone: "bad", bkStatus: "Couldn't build a code: " + e.message}); }
  }
  async downloadBackup(){
    try {
      const snap = this.backupSnapshot();
      const d = new Date();
      const stamp = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      const blob = new Blob([JSON.stringify(snap, null, 2)], {type: "application/json"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "proxydisc-backup-" + stamp + ".json";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      this.setState({bkTone: "ok", bkStatus: "Saved proxydisc-backup-" + stamp + ".json."});
    } catch(e){ this.setState({bkTone: "bad", bkStatus: "Couldn't save the file: " + e.message}); }
  }
  wipeAll(){
    const P = this.constructor.BK_PREFIX;
    try {
      for(let i = localStorage.length - 1; i >= 0; i--){
        const k = localStorage.key(i);
        if(k && k.indexOf(P) === 0) localStorage.removeItem(k);
      }
    } catch(e){}
    location.reload();
  }
  async restoreBackup(){
    const raw = (this.state.bkPaste || "").trim();
    if(!raw){ this.setState({bkTone: "bad", bkStatus: "Paste a backup code or load a file first."}); return; }
    try {
      // A pasted file's contents are plain JSON; a code is tagged. Accept either, so it doesn't
      // matter which of the two exports someone happens to be holding.
      const obj = raw.charAt(0) === "{" ? JSON.parse(raw) : await this.decodeBackup(raw);
      const n = this.applyBackup(obj);
      this.setState({bkTone: "ok", bkStatus: "Restored " + n + " records. Reloading…"});
      setTimeout(() => location.reload(), 700);
    } catch(e){ this.setState({bkTone: "bad", bkStatus: e.message}); }
  }
  readBackupFile(ev){
    const f = ev && ev.target && ev.target.files && ev.target.files[0];
    if(!f) return;
    const r = new FileReader();
    r.onload = () => this.setState({bkPaste: String(r.result || ""), bkTone: "ok",
      bkStatus: "Loaded " + f.name + ". Press Restore to apply it."});
    r.onerror = () => this.setState({bkTone: "bad", bkStatus: "Couldn't read that file."});
    r.readAsText(f);
  }
  // ---------- saved discs ----------
  persistDiscs(discs){
    try { localStorage.setItem("discTriage_discs", JSON.stringify(discs)); } catch(e){}
    // first time there's something worth keeping, ask the browser not to evict it
    if(discs && discs.length && !this._askedPersist){ this._askedPersist = true; this.persistStorage(false); }
  }
  persistHidden(h){ try { localStorage.setItem("discTriage_discHidden", JSON.stringify(h)); } catch(e){} }
  hideKey(id, agentName){ return id + "|" + agentName; }
  // Favouriting is per DISC, not per agent — it marks the physical thing as one you've decided to
  // keep, so it reads the same wherever the disc shows up and blocks deletion everywhere.
  persistFav(f){ try { localStorage.setItem("discTriage_discFav", JSON.stringify(f)); } catch(e){} }
  toggleFavDisc(id, ev){
    if(ev){ ev.preventDefault(); ev.stopPropagation(); }
    const was = !!this.state.discFav[id];
    this.setState(s => {
      const f = Object.assign({}, s.discFav);
      if(f[id]) delete f[id]; else f[id] = 1;
      this.persistFav(f);
      return {discFav: f};
    });
    this.flash(was ? "Removed from favourites." : "Favourited — it can't be deleted until you unstar it.");
  }
  // Equip the disc currently described on Scrap or stash to an agent. It isn't saved yet, so it
  // gets saved (or matched to an identical existing one) on the way through.
  equipFromCheck(agentName, ev){
    if(ev){ ev.preventDefault(); ev.stopPropagation(); }
    const st = this.state;
    const disc = {set: st.setName, slot: st.slot, main: st.mainStat,
      subs: (st.subsBySlot[st.slot] || ["","","",""]).slice()};
    const key = this.discKey(disc);
    const found = st.discs.find(d => this.discKey(d) === key);
    if(found && found.to === agentName){ this.equipDisc(found.id, agentName); return; }
    if(found){ this.equipDisc(found.id, agentName); return; }
    const id = "d" + Date.now();
    const discs = st.discs.concat([Object.assign({id: id}, disc)]);
    this.persistDiscs(discs);
    this.setState({discs: discs}, () => this.equipDisc(id, agentName));
  }
  checkEquippedTo(agentName){
    const st = this.state;
    const key = this.discKey({set: st.setName, slot: st.slot, main: st.mainStat,
      subs: (st.subsBySlot[st.slot] || ["","","",""]).slice()});
    const found = st.discs.find(d => this.discKey(d) === key);
    return !!found && found.to === agentName;
  }
  // The inverse of hide: instead of removing this disc from one agent, reserve it for one agent
  // and remove it from everyone else. One call replaces what would otherwise be hiding it N times.
  persistAssign(m){ try { localStorage.setItem("discTriage_discAssign", JSON.stringify(m)); } catch(e){} }
  toggleAssignDisc(id, agentName, ev){
    if(ev){ ev.preventDefault(); ev.stopPropagation(); }
    const was = this.state.discAssign[id] === agentName;
    this.setState(s => {
      const m = Object.assign({}, s.discAssign);
      if(m[id] === agentName) delete m[id]; else m[id] = agentName;
      this.persistAssign(m);
      return {discAssign: m};
    });
    this.flash(was ? "No longer reserved — it shows for everyone who wants it again."
      : "Reserved for " + agentName + " — hidden from every other agent.");
  }
  toggleHideDisc(id, agentName){
    const k = this.hideKey(id, agentName);
    const wasHidden = !!this.state.discHidden[k];
    this.setState(s => {
      const h = Object.assign({}, s.discHidden);
      if(h[k]) delete h[k]; else h[k] = 1;
      this.persistHidden(h);
      return {discHidden: h};
    });
    this.flash(wasHidden ? "Shown for " + agentName + " again." : "Hidden for " + agentName + ".");
  }
  // ---------- upgrade tracking ----------
  // An S-rank disc gains one substat tick every 3 levels: 5 ticks over 0 -> 15. A disc that starts
  // with only 3 lines spends its first tick rolling the 4th line instead of upgrading one, which is
  // why a tick records a stat NAME rather than an index — the same record covers both cases.
  static UP_TICKS = 5;
  loadUpgrades(){
    try { return JSON.parse(localStorage.getItem("discTriage_upgrades") || "{}") || {}; }
    catch(e){ return {}; }
  }
  persistUpgrades(u){ try { localStorage.setItem("discTriage_upgrades", JSON.stringify(u)); } catch(e){} }
  upOf(id){ return this.state.upgrades[id] || {ticks: []}; }
  // The disc as it stands after the ticks so far: base lines, plus any line a tick introduced.
  upResolve(disc, ticks){
    const subs = (disc.subs || []).slice(0, 4);
    while(subs.length < 4) subs.push("");
    const rolls = {};
    (ticks || []).forEach(t => {
      if(!t) return;
      if(subs.indexOf(t) < 0){
        const slot = subs.indexOf("");
        if(slot >= 0){ subs[slot] = t; rolls[t] = (rolls[t] || 0); return; }
      }
      rolls[t] = (rolls[t] || 0) + 1;
    });
    return {subs: subs, rolls: rolls, types: subs.filter(Boolean)};
  }
  upRecord(id, stat){
    this.setState(s => {
      const cur = (s.upgrades[id] || {ticks: []}).ticks.slice();
      if(cur.length >= this.constructor.UP_TICKS) return null;
      cur.push(stat);
      const u = Object.assign({}, s.upgrades); u[id] = {ticks: cur};
      this.persistUpgrades(u);
      return {upgrades: u};
    });
    this.flash("Level " + (((this.upOf(id).ticks.length + 1) * 3)) + " — " + stat + ".");
  }
  // Remove one roll from a line. The tick that created a 3-line disc's fourth substat is its first
  // occurrence, and a line only offers "−" while it has rolls of its own, so the last occurrence
  // is always a real roll.
  upDec(id, name){
    this.setState(s => {
      const cur = (s.upgrades[id] || {ticks: []}).ticks.slice();
      const i = cur.lastIndexOf(name);
      if(i < 0) return null;
      cur.splice(i, 1);
      const u = Object.assign({}, s.upgrades); u[id] = {ticks: cur};
      this.persistUpgrades(u);
      return {upgrades: u};
    });
  }
  // Pick, change or clear a 3-line disc's fourth substat. Changing it carries its rolls over;
  // clearing it removes every upgrade, since nothing can roll before the fourth line exists.
  upSetFourth(id, base, name){
    this.setState(s => {
      let cur = (s.upgrades[id] || {ticks: []}).ticks.slice();
      const old = cur.length && base.indexOf(cur[0]) < 0 ? cur[0] : "";
      if(!name) cur = [];
      else if(!old) cur = [name].concat(cur);
      else cur = cur.map(t => t === old ? name : t);
      const u = Object.assign({}, s.upgrades); u[id] = {ticks: cur};
      this.persistUpgrades(u);
      return {upgrades: u};
    });
  }
  upUndo(id){
    this.setState(s => {
      const cur = (s.upgrades[id] || {ticks: []}).ticks.slice();
      if(!cur.length) return null;
      cur.pop();
      const u = Object.assign({}, s.upgrades); u[id] = {ticks: cur};
      this.persistUpgrades(u);
      return {upgrades: u};
    });
    this.flash("Last upgrade undone.");
  }
  upReset(id){
    this.setState(s => {
      const u = Object.assign({}, s.upgrades); delete u[id];
      this.persistUpgrades(u);
      return {upgrades: u};
    });
    this.flash("Back to level 0.");
  }
  // Every build variant on every agent that can use one SAVED disc, in the same row vocabulary
  // Scrap or stash uses for the disc you're holding. Built from the same primitives rather than a
  // parallel implementation, so a disc reads identically whether you just found it or saved it
  // weeks ago.
  // One disc's grade for one specific agent, through the same path the roster table uses. Needed
  // to price a swap: the suggestion is only worth acting on next to what the agent already wears.
  // Everything you need to judge one disc on one agent: its lines, where each sits on that
  // agent's ladder, and the grade that comes out. Used for both halves of the comparison.
  discFace(disc, agentName){
    const A = this.constructor;
    const agent = A.AGENTS.find(a => a.n === agentName);
    if(!disc || !agent) return null;
    const threshold = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
    const ticks = (this.state.upgrades[disc.id] || {ticks: []}).ticks;
    const res = this.upResolve(disc, ticks);
    const types = res.types;
    const active = types.length >= threshold;
    const isFixed = !!A.FIXED_MAIN[disc.slot];
    const data = this.getActiveBuilds(agent);
    const all = this.matchesForCheck(data.sets, data.stats, disc.set, disc.slot, disc.main || "", types, isFixed);
    const m = this.scoredMatchesForCheck(all, active)[0];
    const g = m ? this.ratingFor(Object.assign({mainName: disc.main || ""}, m)) : null;
    const graded = this.isGraded(g);
    const mainRank = m ? (m.isFixed ? {rank:1, of:1} : {rank: m.mainRank, of: m.mainOf}) : null;
    return {
      set: disc.set, slotLabel: A.SLOT_LABEL[disc.slot],
      iconSrc: this.discIconPath(disc.set),
      iconId: this.discIconId(disc.set) + "-cmp-" + disc.id,
      hub: this.hubPair(disc.set, 62).ring, hole: this.hubPair(disc.set, 62).hole,
      lvl: "+" + (ticks.length * 3),
      rollsLeft: (A.UP_TICKS - ticks.length),
      rollsLabel: ticks.length >= A.UP_TICKS ? "fully levelled"
        : (A.UP_TICKS - ticks.length) + " roll" + ((A.UP_TICKS - ticks.length) === 1 ? "" : "s") + " left",
      grade: graded ? g.grade : "—",
      gradeStyle: {font:"800 40px/1 'Chakra Petch',sans-serif", color: graded ? g.color : "#5f656e"},
      graded: graded, score: graded ? g.score : -1,
      ungradedNote: graded ? "" : "Only " + types.length + " of 4 substats recorded — not enough to grade.",
      mainStat: disc.main || "—",
      mainLabel: !m ? "—" : m.isFixed ? "FIXED" : mainRank.rank === 1 ? "BEST" : this.ordinal(mainRank.rank).toUpperCase(),
      mainStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".06em",
        whiteSpace:"nowrap", color: !m ? "#5f656e" : m.isFixed ? "#8a9099" : this.depthTone(mainRank.rank)},
      subs: (m ? m.subs : types.map(t => ({name: t, hit: false, rank: 0, of: 0}))).map(x => {
        const rolls = res.rolls[x.name] || 0;
        return {
          name: x.name,
          rollLabel: rolls ? "+" + rolls : "",
          rankLabel: x.hit ? "#" + x.rank : "—",
          barStyle: {width:"4px", flex:"0 0 4px", height:"26px",
            background: x.hit ? this.depthTone(x.rank) : "#3f454e", opacity: x.hit ? 1 : .5},
          nameStyle: {font:"600 14px/1.3 Barlow,sans-serif", flex:"1", minWidth:0,
            overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
            color: x.hit ? "#ecefe6" : "#8a9099"},
          rankStyle: {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
            whiteSpace:"nowrap", color: x.hit ? this.depthTone(x.rank) : "#5f656e"}
        };
      }),
      hits: m ? m.hits : 0,
      hitsLabel: (m ? m.hits : 0) + " of " + types.length + " on their list"
    };
  }
  // Set bonuses are counted across the whole loadout, so a disc's own grade is only half the
  // story: swapping a better disc in can still be a net loss if it drops a 4-piece to a 3. This
  // reports what the swap would do to every bonus on that agent.
  setBonusDelta(agentName, incoming, outgoing){
    const tiers = d => ({four: d >= 4, two: d >= 2});
    const before = {};
    this.state.discs.forEach(x => { if(x.to === agentName) before[x.set] = (before[x.set] || 0) + 1; });
    const after = Object.assign({}, before);
    if(outgoing) after[outgoing.set] = Math.max(0, (after[outgoing.set] || 0) - 1);
    if(incoming) after[incoming.set] = (after[incoming.set] || 0) + 1;
    const names = [...new Set(Object.keys(before).concat(Object.keys(after)))];
    const breaks = [], gains = [];
    names.forEach(nm => {
      const b = tiers(before[nm] || 0), a2 = tiers(after[nm] || 0);
      if(b.four && !a2.four) breaks.push(nm + " 4-piece");
      else if(b.two && !a2.two) breaks.push(nm + " 2-piece");
      if(!b.four && a2.four) gains.push(nm + " 4-piece");
      else if(!b.two && a2.two) gains.push(nm + " 2-piece");
    });
    return {breaks: breaks, gains: gains, safe: breaks.length === 0,
      note: breaks.length
        ? "breaks " + breaks.join(" and ") + (gains.length ? ", completes " + gains.join(" and ") : "")
        : gains.length ? "completes " + gains.join(" and ") : ""};
  }
  // The full cost of putting one disc on one agent: what it does to the destination's bonuses AND
  // what taking it off its current owner does to theirs. Breaks are named per agent, since "breaks
  // Fanged Metal 4-piece" is ambiguous when two agents are involved.
  swapCost(disc, targetAgent){
    const to = this.setBonusDelta(targetAgent, disc,
      this.state.discs.find(x => x.to === targetAgent && x.slot === disc.slot && x.id !== disc.id) || null);
    const from = (disc.to && disc.to !== targetAgent)
      ? this.setBonusDelta(disc.to, null, disc)
      : {breaks: [], gains: []};
    const breaks = to.breaks.map(b => targetAgent + "'s " + b)
      .concat(from.breaks.map(b => disc.to + "'s " + b));
    const gains = to.gains.map(b => targetAgent + "'s " + b);
    return {breaks: breaks, gains: gains, safe: breaks.length === 0,
      note: breaks.length
        ? "breaks " + breaks.join(" and ") + (gains.length ? ", completes " + gains.join(" and ") : "")
        : gains.length ? "completes " + gains.join(" and ") : ""};
  }
  isGraded(g){ return !!g && g.grade !== "—" && !(g.score != null && g.score < 0); }
  _memoFresh(){
    const sig = [this.state.disabledBuilds, this.props.substatThreshold];
    if(!this._memoSig || sig.some((v, i) => v !== this._memoSig[i])){
      this._memoSig = sig; this._gMemo = new Map(); this._cMemo = new Map();
    }
  }
  discGradeFor(disc, agent){
    if(!disc || !agent) return null;
    this._memoFresh();
    const key = agent.n + "|" + disc.set + "|" + disc.slot + "|" + (disc.main || "") + "|" + (disc.subs || []).join(",");
    if(this._gMemo.has(key)) return this._gMemo.get(key);
    const v = this._discGradeForRaw(disc, agent);
    this._gMemo.set(key, v);
    return v;
  }
  _discGradeForRaw(disc, agent){
    const A = this.constructor;
    const threshold = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
    const types = (disc.subs || []).filter(Boolean);
    const active = types.length >= threshold;
    const isFixed = !!A.FIXED_MAIN[disc.slot];
    const data = this.getActiveBuilds(agent);
    const all = this.matchesForCheck(data.sets, data.stats, disc.set, disc.slot, disc.main || "", types, isFixed);
    const best = this.scoredMatchesForCheck(all, active)[0];
    if(!best) return null;
    return this.ratingFor(Object.assign({mainName: disc.main || ""}, best));
  }
  // What this agent is wearing in the same slot, so a row can be read as a comparison rather than
  // an isolated score.
  discGradeNow(disc, agent){
    const fit = this.discGradeFor(disc, agent);
    const ticks = disc && disc.id ? (this.state.upgrades[disc.id] || {ticks: []}).ticks : [];
    if(!fit || !ticks.length) return fit;
    const types = (disc.subs || []).filter(Boolean);
    const data = this.getActiveBuilds(agent);
    const all = this.matchesForCheck(data.sets, data.stats, disc.set, disc.slot, disc.main || "", types,
      !!this.constructor.FIXED_MAIN[disc.slot]);
    const c = this.scoredMatchesForCheck(all, true)[0];
    if(!c) return fit;
    const v = this.verticalGrade(disc, c, ticks, fit.score);
    if(!v || v.pending) return fit;
    return {score: v.score, grade: v.band.grade, color: v.band.color, tone: fit.tone, vertical: true};
  }
  incumbentFor(disc, agentName){
    const agent = this.constructor.AGENTS.find(a => a.n === agentName);
    const cur = this.state.discs.find(x => x.to === agentName && x.slot === disc.slot && x.id !== disc.id);
    if(!cur) return {has: false, empty: true};
    const g = this.discGradeNow(cur, agent);
    const lvl = ((this.state.upgrades[cur.id] || {ticks: []}).ticks.length) * 3;
    return {has: true, empty: false, set: cur.set, lvl: lvl,
      graded: this.isGraded(g),
      grade: g ? g.grade : "—", color: g ? g.color : "#5f656e", score: g ? g.score : -1};
  }
  discRoster(disc, expandedMap){
    const A = this.constructor;
    const threshold = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
    const types = (disc.subs || []).filter(Boolean);
    const active = types.length >= threshold;
    const isFixed = !!A.FIXED_MAIN[disc.slot];
    const stat = disc.main || "";
    let cands = A.AGENTS.flatMap(a => {
      const data = this.getActiveBuilds(a);
      const all = this.matchesForCheck(data.sets, data.stats, disc.set, disc.slot, stat, types, isFixed);
      return this.scoredMatchesForCheck(all, active).map(m => Object.assign({agent: a}, m));
    });
    const ticks = disc.id ? (this.state.upgrades[disc.id] || {ticks: []}).ticks : [];
    cands.forEach(m => {
      const fit = this.ratingFor(Object.assign({mainName: stat}, m));
      let r = fit;
      if(ticks.length){
        const v = this.verticalGrade(disc, m, ticks, fit.score);
        if(v && !v.pending) r = {grade: v.band.grade, color: v.band.color, score: v.score};
      }
      m.ratingGrade = r.grade; m.ratingColor = r.color; m.ratingScore = r.score;
    });
    cands.sort((x, y) => (y.ratingScore || 0) - (x.ratingScore || 0)
      || (x.isPrimary === y.isPrimary ? 0 : x.isPrimary ? -1 : 1)
      || x.agent.n.localeCompare(y.agent.n));

    const rowOf = m => {
      const a = m.agent;
      const key = disc.id + "|" + a.n + "|" + m.setIdx + "|" + m.statIdx;
      const open = !!(expandedMap || {})[key];
      const hitSet = new Set(m.subs.filter(x => x.hit).map(x => x.name));
      const parts = [];
      if(m.setIdx !== 0) parts.push(m.setVar.label);
      if(m.statIdx !== 0) parts.push(m.statVar.label);
      const owner = disc.to === a.n;
      const hidden = !!this.state.discHidden[this.hideKey(disc.id, a.n)];
      return {
        key: key, name: a.n, open: open,
        portraitId: "mine-" + key.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        portraitSrc: this.agentIconPath(a.n),
        initial: a.n.charAt(0),
        rankIconStyle: this.iconStyle(this.rankIconPath(a.r), 14),
        roleIconStyle: this.iconStyle(this.roleIconPath(a.role), 12),
        roleLabel: a.role.toUpperCase(),
        hasElement: !!a.el,
        elIconStyle: this.iconStyle(this.elementIconPath(a.el), 12),
        elLabel: (a.el || "").toUpperCase(),
        buildLabel: m.isPrimary ? "PRIMARY" : parts.join(" · ").toUpperCase(),
        buildStyle: {display:"block", marginTop:"4px",
          font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".11em",
          whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
          color: m.isPrimary ? "#6cc6ff" : "#b98cff"},
        pieceLabel: m.piece === "4pc" ? "4PC" : "2PC",
        mainLabel: m.isFixed ? "FIXED" : m.mainRank === 1 ? "BEST" : this.ordinal(m.mainRank).toUpperCase(),
        mainStyle: {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".06em",
          whiteSpace:"nowrap", color: m.isFixed ? "#8a9099" : this.depthTone(m.mainRank)},
        mainTitle: m.isFixed ? "This slot's main stat is fixed."
          : stat + " is their " + this.ordinal(m.mainRank) + " choice of " + m.mainOf + " for " + A.SLOT_LABEL[disc.slot] + ".",
        skyline: m.subs.map(x => ({
          height: this.skylineHeight(x.hit, x.rank) + "px",
          color: x.hit ? this.depthTone(x.rank) : "#2e333b"
        })),
        hasSkyline: active && m.subs.length > 0,
        subCount: m.hits + "/" + m.subs.length,
        subCountStyle: {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
          whiteSpace:"nowrap", marginLeft:"5px",
          color: m.hits ? this.depthTone(m.subs.filter(x => x.hit)[0].rank) : "#5f656e"},
        subTitle: !active
          ? "Only " + types.length + " of 4 substats recorded — too few to score against " + a.n + "'s list."
          : m.hits + " of " + m.subs.length + " substats are on " + a.n + "'s list; bar height is how high.",
        grade: m.ratingGrade,
        gradeStyle: {font:"800 19px/1 'Chakra Petch',sans-serif", color: m.ratingColor, flex:"0 0 auto"},
        ladder: this.checkLadder(m.statVar.sub, m.statVar.subNotes, hitSet, stat),
        mainLadder: this.checkMainLadder((m.statVar.mains || {})[disc.slot], m.isFixed, A.FIXED_MAIN[disc.slot], stat),
        note: m.statVar.note || "",
        hasNote: !!m.statVar.note,
        // the comparison: what they're wearing there now, and whether this disc beats it
        incumbent: (() => {
          const inc = this.incumbentFor(disc, a.n);
          if(inc.empty) return {canCompare: false, label: "slot empty", style: {display:"block",
            marginTop:"4px", font:"500 11px/1.3 'JetBrains Mono',monospace",
            letterSpacing:".04em", color:"#4ade80", whiteSpace:"nowrap"},
            title: A.SLOT_LABEL[disc.slot] + " is empty on " + a.n + " — nothing to displace."};
          // Either side ungraded means there is no comparison to report — say so instead of
          // ranking an abstention, which would make any graded disc "beat" an unknown one.
          const mineGraded = this.isGraded({grade: m.ratingGrade, score: m.ratingScore});
          if(!inc.graded || !mineGraded){
            const which = !inc.graded ? inc.set : "this disc";
            return {
              canCompare: true,
              label: "vs " + inc.set + " · compare",
              btnStyle: {display:"block", marginTop:"4px", background:"none", border:"none",
                padding:"0", cursor:"pointer", textAlign:"left", maxWidth:"100%",
                font:"500 11px/1.3 'JetBrains Mono',monospace", letterSpacing:".04em",
                whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
                textDecoration:"underline", textDecorationColor:"#8a909966", color:"#8a9099"},
              style: {font:"500 11px/1.3 'JetBrains Mono',monospace", letterSpacing:".04em",
                whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", color:"#8a9099"},
              title: a.n + " is wearing " + inc.set + " at +" + inc.lvl + " in " + A.SLOT_LABEL[disc.slot]
                + ". " + which.charAt(0).toUpperCase() + which.slice(1)
                + " has too few substats to grade, so there's no single letter to compare — open the"
                + " comparison to see both side by side."
            };
          }
          const beats = (m.ratingScore || 0) > (inc.score || 0) + 1e-9;
          const c = beats ? "#4ade80" : "#8a9099";
          return {
            canCompare: true,
            label: (beats ? "beats " : "vs ") + inc.set + " " + inc.grade,
            btnStyle: {display:"block", marginTop:"4px", background:"none", border:"none",
              padding:"0", cursor:"pointer", textAlign:"left", maxWidth:"100%",
              font:"500 11px/1.3 'JetBrains Mono',monospace", letterSpacing:".04em",
              whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
              textDecoration:"underline", textDecorationColor: c + "66", color: c},
            style: {font:"500 11px/1.3 'JetBrains Mono',monospace", letterSpacing:".04em",
              whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", color: c},
            title: a.n + " is wearing " + inc.set + " at +" + inc.lvl + " in " + A.SLOT_LABEL[disc.slot]
              + ", which grades " + inc.grade + " for them. This disc grades " + m.ratingGrade + "."
              + (beats ? " Swapping is an upgrade." : " Swapping would not help.")
          };
        })(),
        isOwner: owner, isHidden: hidden,
        stateLabel: owner ? "EQUIPPED" : hidden ? "HIDDEN" : "",
        hasState: owner || hidden,
        stateStyle: {font:"700 10px/1 'JetBrains Mono',monospace", letterSpacing:".07em",
          padding:"4px 6px", whiteSpace:"nowrap",
          color: owner ? "#e8ff45" : "#8a9099",
          border:"1px solid " + (owner ? "#e8ff4555" : "#2e333b")},
        rowStyle: {display:"flex", alignItems:"center", gap:"10px", width:"100%",
          padding:"9px 11px", textAlign:"left", cursor:"pointer",
          background: owner ? "#e8ff450a" : "#0f1114",
          border:"1px solid " + (owner ? "#e8ff4544" : "#1e2228"),
          opacity: hidden ? .6 : 1},
        glyph: open ? "–" : "+",
        onToggle: () => this.setState(s2 => {
          const m2 = Object.assign({}, s2.mineExpanded);
          if(m2[key]) delete m2[key]; else m2[key] = true;
          return {mineExpanded: m2};
        }),
        onEquip: e => { if(e) e.stopPropagation(); this.equipDisc(disc.id, a.n); }
      };
    };
    const isMine = n => this.rosterOf(n) !== "off";
    const mineAll = cands.filter(m => isMine(m.agent.n));
    return {
      mine: [],
      weak: mineAll.map(rowOf),
      others: cands.filter(m => !isMine(m.agent.n)).map(rowOf),
      active: active, known: types.length, threshold: threshold
    };
  }
  discKey(d){ return [d.set, d.slot, d.main].concat(d.subs).join("|"); }
  // Draw one agent's loadout as a 1200x630 card and hand it to the system share sheet, or
  // download it where sharing files isn't supported.
  async shareBuild(name){
    const A = this.constructor;
    const g = (this._groups || []).find(x => x.name === name);
    if(!g){ this.flash("Couldn't find that build."); return; }
    this.flash("Making your build image…");
    const load = src => new Promise(res => { if(!src) return res(null); const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = src; });
    try { if(document.fonts && document.fonts.ready) await document.fonts.ready; } catch(e){}
    const W = 1200, H = 630, c = document.createElement("canvas"); c.width = W; c.height = H;
    const x = c.getContext("2d");
    x.fillStyle = "#0b0c0e"; x.fillRect(0, 0, W, H);
    const bg = await load("backgrounds/" + name.replace(/ /g, "_") + ".webp");
    if(bg){
      const h = H, w = bg.width * h / bg.height;
      x.globalAlpha = .55; x.drawImage(bg, W - w + w * .12, 0, w, h); x.globalAlpha = 1;
      const gr = x.createLinearGradient(0, 0, W, 0);
      gr.addColorStop(0, "rgba(11,12,14,1)"); gr.addColorStop(.45, "rgba(11,12,14,.92)"); gr.addColorStop(1, "rgba(11,12,14,.25)");
      x.fillStyle = gr; x.fillRect(0, 0, W, H);
    }
    x.fillStyle = "#e8ff45"; x.fillRect(0, 0, W, 6);
    const ic = await load(this.agentIconPath(name));
    if(ic){ x.save(); x.beginPath(); x.arc(110, 120, 58, 0, Math.PI * 2); x.clip(); x.drawImage(ic, 52, 62, 116, 116); x.restore(); }
    x.strokeStyle = "#3a4049"; x.lineWidth = 3; x.beginPath(); x.arc(110, 120, 58, 0, Math.PI * 2); x.stroke();
    x.fillStyle = "#ecefe6"; x.font = "700 64px 'Chakra Petch', sans-serif"; x.textBaseline = "alphabetic";
    x.fillText(name.toUpperCase(), 196, 128);
    x.fillStyle = "#8a9099"; x.font = "500 22px 'JetBrains Mono', monospace";
    x.fillText("BUILD", 198, 166);
    const ra = g.rigAvg || {};
    const gc = (ra.gradeStyle && ra.gradeStyle.color) || "#ecefe6";
    x.fillStyle = gc; x.font = "800 96px 'Chakra Petch', sans-serif"; x.textAlign = "right";
    x.fillText(ra.none ? "–" : (ra.grade || "–"), W - 60, 140);
    x.fillStyle = "#9aa0a8"; x.font = "500 24px 'JetBrains Mono', monospace";
    x.fillText(ra.none ? "nothing equipped" : (ra.hitsLabel || ""), W - 60, 178);
    x.textAlign = "left";
    const rig = g.rig || [], cw = 172, gap = 18, x0 = (W - (cw * 6 + gap * 5)) / 2, y0 = 250;
    for(let i = 0; i < 6; i++){
      const k = rig[i] || {}, cx = x0 + i * (cw + gap);
      x.fillStyle = "rgba(19,21,25,.92)"; x.fillRect(cx, y0, cw, 260);
      x.strokeStyle = "#262a31"; x.lineWidth = 2; x.strokeRect(cx + 1, y0 + 1, cw - 2, 258);
      x.fillStyle = "#8a9099"; x.font = "700 18px 'JetBrains Mono', monospace"; x.textAlign = "center";
      x.fillText("0" + (i + 1), cx + cw / 2, y0 + 32);
      const mx = cx + cw / 2, my = y0 + 106, r = 54;
      if(k.has){
        const di = await load(k.iconSrc);
        if(di){ x.save(); x.beginPath(); x.arc(mx, my, r, 0, Math.PI * 2); x.clip(); x.drawImage(di, mx - r, my - r, r * 2, r * 2); x.restore(); }
        x.fillStyle = "#0b0c0e"; x.beginPath(); x.arc(mx, my, 8, 0, Math.PI * 2); x.fill();
        x.fillStyle = (k.hexGradeStyle && k.hexGradeStyle.color) || "#ecefe6"; x.font = "800 40px 'Chakra Petch', sans-serif";
        x.fillText(k.stripGrade || "", mx, y0 + 208);
        x.fillStyle = "#9aa0a8"; x.font = "600 18px 'JetBrains Mono', monospace";
        x.fillText(k.lvlLabel || "", mx, y0 + 238);
      } else {
        x.fillStyle = "#15181c"; x.beginPath(); x.arc(mx, my, r, 0, Math.PI * 2); x.fill();
        x.strokeStyle = "#2e333b"; x.beginPath(); x.arc(mx, my, r, 0, Math.PI * 2); x.stroke();
        x.fillStyle = "#4d535c"; x.font = "800 40px 'Chakra Petch', sans-serif"; x.fillText("—", mx, y0 + 208);
      }
      x.textAlign = "left";
    }
    x.fillStyle = "#e8ff45"; x.font = "700 30px 'Chakra Petch', sans-serif"; x.fillText("PROXYDISC", 60, H - 46);
    x.fillStyle = "#8a9099"; x.font = "400 22px Barlow, sans-serif"; x.fillText("Free drive disc grader for Zenless Zone Zero", 238, H - 47);
    const blob = await new Promise(res => c.toBlob(res, "image/png"));
    if(!blob){ this.flash("Couldn't make the image."); return; }
    const file = new File([blob], "proxydisc-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".png", {type: "image/png"});
    try {
      if(navigator.canShare && navigator.canShare({files: [file]})){ await navigator.share({files: [file], title: name + " build · ProxyDisc"}); this.flash("Shared."); return; }
    } catch(e){ if(e && e.name === "AbortError") return; }
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = file.name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    this.flash("Image saved — " + file.name);
  }
  nearKey(d){ return [d.set, d.slot, d.main || ""].concat((d.subs || []).filter(Boolean).slice().sort()).join("|"); }
  discLabel(d){ return d.set + " · " + this.constructor.SLOT_LABEL[d.slot] + " · " + d.main; }
  saveDisc(){
    const st = this.state;
    if(!st.setName || !st.slot) return;
    const lv = this.formLevelled(st);
    if(!lv.ok){ this.flash(lv.msg); return; }
    const subs = lv.subs.slice(); while(subs.length < 4) subs.push("");
    const disc = {id: "d" + Date.now(), set: st.setName, slot: st.slot, main: st.mainStat, subs: subs};
    // Same set, slot, main stat and substats (in any order) is almost always the same disc saved
    // twice — easy to do with screenshot import. Ask once; "Save anyway" goes through.
    const nk = this.nearKey(disc);
    const twin = this.state.discs.find(d => this.nearKey(d) === nk);
    if(twin && this._dupOk !== nk){
      this.setState({dupPending: {key: nk, id: twin.id,
        label: twin.set + " · " + this.constructor.SLOT_LABEL[twin.slot] + " · +" + (((st.upgrades[twin.id] || {ticks: []}).ticks.length) * 3)
          + (twin.to ? " · on " + twin.to : "")}});
      return;
    }
    this._dupOk = null;
    if(this.state.dupPending) this.setState({dupPending: null});
    this.setState(s => {
      const discs = s.discs.concat([disc]);
      this.persistDiscs(discs);
      const out = {discs: discs};
      if(lv.ticks.length){
        const u = Object.assign({}, s.upgrades); u[disc.id] = {ticks: lv.ticks.slice()};
        this.persistUpgrades(u); out.upgrades = u;
      }
      return out;
    });
    this.flash(lv.T ? "Saved to Loadouts at +" + lv.level + "." : "Saved to Loadouts.");
  }
  // A disc is a physical object — it can only sit in one agent's slot at a time. Equipping
// records the owner on the disc itself so it survives reload, and the same disc still lists
// under every other agent who wants it (dimmed) rather than vanishing from their card.
  equipDisc(id, agentName){
    const before = this.state.discs.find(d => d.id === id);
    const unequipping = !!before && before.to === agentName;
    // An agent has exactly one of each slot, so equipping into an occupied slot swaps rather than
    // stacking — whatever was in that slot is freed in the same action.
    const bumped = unequipping ? null : this.state.discs.find(d =>
      d.id !== id && d.to === agentName && before && d.slot === before.slot);
    if(before) this.snapUndo(unequipping ? "Unequipped from " + agentName
      : before.to && before.to !== agentName ? "Moved from " + before.to + " to " + agentName
      : bumped ? "Equipped to " + agentName + ", " + bumped.set + " came off"
      : "Equipped to " + agentName);
    this.setState(s => {
      const discs = s.discs.map(d => {
        if(d.id === id) return Object.assign({}, d, {to: unequipping ? "" : agentName});
        if(bumped && d.id === bumped.id) return Object.assign({}, d, {to: ""});
        return d;
      });
      this.persistDiscs(discs);
      return {discs: discs};
    });
    if(!unequipping && before) this.playSlotInsert(agentName, before.slot);
  }
  // Expanded rows are keyed by disc AND agent: the same disc lists under every agent who wants
// it, and opening it on Alice's card shouldn't open it on Burnice's too.
  toggleDiscDetail(key){
    this.setState(s => {
      const open = Object.assign({}, s.discDetail);
      if(open[key]) delete open[key]; else open[key] = true;
      return {discDetail: open};
    });
  }
  // Grades as a comparable rank so the delete guard can reason about them. The "-" suffix on an
// alternate 2pc doesn't change the tier it belongs to.
  gradeRank(g){ return {S:5, A:4, B:3, C:2, D:1, F:0}[String(g || "").charAt(0)] ?? -1; }
  floorRankOf(f){ return f === "all" ? -99 : this.gradeRank(f); }
  // Delete and equip happen straight away; a toast offers Undo for a few seconds instead of a
  // confirm step people click through without reading.
  snapUndo(label){
    const st = this.state;
    this._undoSnap = {discs: st.discs, upgrades: st.upgrades, discFav: st.discFav};
    clearTimeout(this._undoT);
    this.setState({undoLabel: label});
    this._undoT = setTimeout(() => this.setState({undoLabel: ""}), 7000);
  }
  undoLast(){
    const snap = this._undoSnap;
    clearTimeout(this._undoT);
    this._undoSnap = null;
    if(!snap){ this.setState({undoLabel: ""}); return; }
    this.persistDiscs(snap.discs);
    this.persistUpgrades(snap.upgrades);
    this.setState({discs: snap.discs, upgrades: snap.upgrades, discFav: snap.discFav, undoLabel: ""});
  }
  askDelete(info){ this.removeDisc(info.id); }
  static TOUR = [
    {key:"set", title:"Pick the disc set", text:"Start with the set your new disc belongs to. We've filled in an example so you can see how it works."},
    {key:"slot", title:"Choose the slot", text:"Which of the six slots is it? Slots 1–3 always have the same main stat; 4–6 can roll different ones."},
    {key:"main", title:"Set the main stat", text:"For slots 4–6, pick the main stat the disc rolled. The wrong main stat can make a great disc useless for an agent."},
    {key:"subs", title:"Tap its substats", text:"Tap each substat on the disc. If it's already levelled, set the level and how many times each line rolled."},
    {key:"result", title:"Read the verdict", text:"Every agent who can use it, with a grade from S to F. B and up is worth keeping. From here you can save, equip or track upgrades."}
  ];
  startTour(){
    // fill an example disc so every step has something real to point at
    this.setState(s => ({tab: "check", tourStep: 1, setupOpen: false,
      setName: "Fanged Metal", slot: "s4", mainStat: "Anomaly Proficiency",
      subsBySlot: Object.assign({}, s.subsBySlot, {s4: ["ATK%", "PEN", "CRIT Rate", ""]}),
      levelBySlot: Object.assign({}, s.levelBySlot, {s4: 0})}));
  }
  endTour(){
    try { localStorage.setItem("discTriage_tourDone", "1"); } catch(e){}
    this.setState({tourStep: 0});
  }
  tourScroll(){
    const step = this.constructor.TOUR[this.state.tourStep - 1];
    if(!step) return;
    setTimeout(() => {
      const el = document.querySelector('[data-tour="' + step.key + '"]');
      if(!el) return;
      const r = el.getBoundingClientRect();
      if(r.top >= 70 && r.bottom <= innerHeight - 180) return;
      const y = r.top + (window.pageYOffset || 0) - 90;
      try { window.scrollTo({top: Math.max(0, y), behavior: "smooth"}); } catch(e){ window.scrollTo(0, Math.max(0, y)); }
    }, 30);
  }
  // Taking a disc off another agent is allowed, but it silently breaks a loadout you already
  // built — so it asks first rather than being blocked or being free.
  // Same insert the check tab plays: the disc face slides in from off-screen left inside its
  // well, then hands back to the idle spin. Keyed off a data attribute so it can be replayed
  // after the render that actually mounts the disc.
  playSlotInsert(agentName, slotKey){
    const key = String(agentName).replace(/"/g, "") + "|" + slotKey;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.querySelectorAll('[data-rigslot="' + key + '"]').forEach(el => {
        el.style.animation = "none";
        void el.offsetWidth;
        const face = el.querySelector('[data-setdisc="1"]');
        if(face){ face.style.animation = "none"; face.style.transform = ""; }
        el.style.animation = "discEnter .45s cubic-bezier(.22,.7,.32,1) both";
        clearTimeout(el._pdTimer);
        el._pdTimer = setTimeout(() => {
          el.style.animation = "";
          // clear rather than pin discSpin, so the CSS rule owns the idle spin again
          if(face) face.style.animation = "";
        }, 470);
      });
    }));
  }
  enterFocus(name, slot, discId){
    this.setState({focusAgent: name, selSlot: slot || "", discSel: discId || "", bayAll: false});
    requestAnimationFrame(() => {
      const el = document.querySelector('[data-pd="main"]');
      if(!el || !el.getBoundingClientRect) return;
      const y = el.getBoundingClientRect().top + (window.pageYOffset || 0) - 12;
      try { window.scrollTo({top: Math.max(0, y), behavior: "smooth"}); }
      catch(e){ window.scrollTo(0, Math.max(0, y)); }
    });
  }
  askMove(info){ this.equipDisc(info.id, info.to); }
  cancelMove(){ this.setState({pendingMove: null}); }
  confirmMove(){
    const m = this.state.pendingMove;
    this.setState({pendingMove: null});
    if(m) this.equipDisc(m.id, m.to);
  }
  cancelDelete(){ this.setState({pendingDelete: null}); }
  removeDisc(id){
    if(this.state.discFav[id]){ this.flash("Favourited — unstar it first."); return; }
    const gone = this.state.discs.find(d => d.id === id);
    this.snapUndo((gone ? gone.set : "Disc") + " deleted");
    this.setState(s => {
      const discs = s.discs.filter(d => d.id !== id);
      this.persistDiscs(discs);
      const u = Object.assign({}, s.upgrades);
      if(u[id]){ delete u[id]; this.persistUpgrades(u); }
      // clear every selection that pointed at this disc, or its panel stays open on nothing
      return {discs: discs, upgrades: u, pendingDelete: null,
        upSel: s.upSel === id ? "" : s.upSel,
        mineSel: s.mineSel === id ? "" : s.mineSel,
        discSel: s.discSel === id ? "" : s.discSel,
        cmpSel: s.cmpSel === id ? "" : s.cmpSel};
    });
  }
  flash(msg){
    this.setState({flashMsg: msg});
    clearTimeout(this._flash);
    this._flash = setTimeout(() => this.setState({flashMsg: ""}), 2600);
  }
  // Hand a disc over to the deep scan, pre-aimed at whoever wants it most.
  // Hand a disc to the upgrade tracker. A disc described on Scrap or stash isn't saved yet, so it
  // gets saved on the way through — the tracker keeps per-disc history and needs a stable id.
  sendToScan(disc, agentName, ticks){
    let id = disc.id;
    if(!id || id === "tmp"){
      const key = this.discKey(disc);
      const found = this.state.discs.find(d => this.discKey(d) === key);
      if(found) id = found.id;
      else {
        id = "d" + Date.now();
        const saved = {id: id, set: disc.set, slot: disc.slot, main: disc.main, subs: (disc.subs || []).slice()};
        const discs = this.state.discs.concat([saved]);
        this.persistDiscs(discs);
        this.setState({discs: discs});
      }
    }
    if(ticks && ticks.length && !(this.state.upgrades[id] && this.state.upgrades[id].ticks.length)){
      const u = Object.assign({}, this.state.upgrades); u[id] = {ticks: ticks.slice()};
      this.persistUpgrades(u); this.setState({upgrades: u});
    }
    this.setState({tab: "score", upSel: id});
    this.flash("Tracking upgrades — delete it here if you don't want to keep it.");
  }
  // A levelled disc entered as it looks in-game: its four lines, the level, and the +N marker on
  // each line. Every 3 levels is one upgrade. A disc that started with four lines shows one marker
  // per upgrade; one that started with three spent its first upgrade adding the fourth line, which
  // shows no marker — so the markers add up to one fewer. The game lists that late line last, so
  // it's taken as the fourth entered. Which line came when doesn't change the grade.
  formLevelled(st){
    const slot = st.slot;
    const lines = ((st.subsBySlot || {})[slot] || []).filter(Boolean);
    const level = ((st.levelBySlot || {})[slot]) || 0;
    const T = Math.round(level / 3);
    const raw = ((st.rollsBySlot || {})[slot]) || [];
    const rolls = lines.map((_, i) => raw[i] || 0);
    const placed = rolls.reduce((a, b) => a + b, 0);
    const expand = from => { const t = []; lines.forEach((n, i) => { if(i >= from) for(let k = 0; k < rolls[i]; k++) t.push(n); }); return t; };
    const base = {level: level, T: T, lines: lines, rolls: rolls, placed: placed};
    if(!T) return Object.assign(base, {ok: true, subs: lines, ticks: [], msg: "", tone: ""});
    if(lines.length < 4) return Object.assign(base, {ok: false, subs: lines, ticks: [], tone: "warn",
      msg: "A +" + level + " disc always has four substats — add the fourth."});
    if(placed === T) return Object.assign(base, {ok: true, started: 4, subs: lines, ticks: expand(0), tone: "ok",
      msg: "Started with 4 substats · " + T + " of " + T + " upgrades placed."});
    if(placed === T - 1){
      // the fourth line is the upgrade that created it, then its own markers
      const t = [lines[3]];
      lines.forEach((n, i) => { for(let k = 0; k < rolls[i]; k++) t.push(n); });
      return Object.assign(base, {ok: true, started: 3, subs: lines.slice(0, 3), ticks: t, tone: "ok",
        msg: "Started with 3 substats — " + lines[3] + " was added at +3."});
    }
    if(placed > T) return Object.assign(base, {ok: false, subs: lines, ticks: [], tone: "warn",
      msg: "Too many — a +" + level + " disc has " + T + " upgrade" + (T === 1 ? "" : "s") + "."});
    return Object.assign(base, {ok: false, subs: lines, ticks: [], tone: "info",
      msg: "Copy the +1 / +2 markers from your disc: " + placed + " of " + T + " placed."});
  }
  artOk(file){
    this._art = this._art || {};
    if(!(file in this._art)){
      this._art[file] = false;
      const im = new Image();
      im.onload = () => { this._art[file] = true; this.forceUpdate(); };
      im.src = "backgrounds/" + file + ".webp";
    }
    return this._art[file];
  }
  hoverArtOk(n){ return this.artOk(n + "-hover"); }
  // ---------- import from screenshot ----------
  // Reads the disc's detail panel with Tesseract, entirely in the browser — the screenshot never
  // leaves the device. Only the reader itself is downloaded (once, from jsDelivr) the first time
  // someone uses it. The result is fuzzy-matched against the app's own set and stat names, then
  // dropped into the form for the user to check.
  loadOcr(){
    if(window.Tesseract) return Promise.resolve(window.Tesseract);
    if(this._ocrLoad) return this._ocrLoad;
    this._ocrLoad = new Promise((res, rej) => {
      const sc = document.createElement("script");
      sc.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
      sc.onload = () => window.Tesseract ? res(window.Tesseract) : rej(new Error("reader missing"));
      sc.onerror = () => { this._ocrLoad = null; rej(new Error("Couldn't download the text reader. Check your connection.")); };
      document.head.appendChild(sc);
    });
    return this._ocrLoad;
  }
  // light text on dark UI reads far better inverted, greyscale and enlarged
  // fromX (0-1) crops off everything left of the detail panel on a full-screen shot
  ocrPrep(blob, fromX){
    return new Promise((res, rej) => {
      const url = URL.createObjectURL(blob);
      const im = new Image();
      im.onload = () => {
        const sx = Math.round((fromX || 0) * im.width), sw = im.width - sx;
        const k = sw < 1600 ? 2 : 1;
        const c = document.createElement("canvas");
        c.width = sw * k; c.height = im.height * k;
        const x = c.getContext("2d");
        x.imageSmoothingQuality = "high";
        x.drawImage(im, sx, 0, sw, im.height, 0, 0, c.width, c.height);
        const d = x.getImageData(0, 0, c.width, c.height), p = d.data;
        for(let i = 0; i < p.length; i += 4){
          const l = .299 * p[i] + .587 * p[i + 1] + .114 * p[i + 2];
          const v = 255 - Math.max(0, Math.min(255, (l - 40) * 1.5));
          p[i] = p[i + 1] = p[i + 2] = v;
        }
        x.putImageData(d, 0, 0);
        URL.revokeObjectURL(url);
        res(c);
      };
      im.onerror = () => { URL.revokeObjectURL(url); rej(new Error("That file isn't an image the browser can open.")); };
      im.src = url;
    });
  }
  fuzzyPick(text, names, slack){
    const norm = t => String(t).toLowerCase().replace(/[^a-z0-9]/g, "");
    const lev = (a, b) => {
      const m = a.length, n = b.length; if(!m) return n; if(!n) return m;
      let prev = Array.from({length: n + 1}, (_, j) => j);
      for(let i = 1; i <= m; i++){
        const cur = [i];
        for(let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        prev = cur;
      }
      return prev[n];
    };
    const t = norm(text);
    if(!t) return null;
    let best = null, bestD = Infinity;
    names.forEach(nm => {
      const w = norm(nm);
      // compare against every window of the text the same length, so extra words don't hurt
      let d = lev(w, t);
      if(t.length > w.length) for(let i = 0; i + w.length <= t.length; i++) d = Math.min(d, lev(w, t.slice(i, i + w.length)));
      if(d < bestD || (d === bestD && best && w.length > norm(best).length)){ bestD = d; best = nm; }
    });
    return best && bestD <= Math.max(1, Math.floor(norm(best).length * (slack || .3))) ? best : null;
  }
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
  }
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
  }
  async importScreenshot(blob){
    const A = this.constructor;
    if(!blob || !/^image\//.test(blob.type || "")){ this.setState({ocrState: "err", ocrMsg: "That isn't an image. Use a screenshot (PNG or JPG)."}); return; }
    this.setState({ocrState: "busy", ocrMsg: "Loading the text reader…", ocrNotes: []});
    try {
      const T = await this.loadOcr();
      const img = await this.ocrPrep(blob);
      this.setState({ocrMsg: "Reading your screenshot…"});
      const log = m => { if(m.status === "recognizing text") this.setState({ocrMsg: "Reading your screenshot… " + Math.round((m.progress || 0) * 100) + "%"}); };
      let res = await T.recognize(img, "eng", {logger: log});
      // On a full-screen shot the disc grid bleeds into the panel's lines, so find the panel's
      // "Main Stat" label and read again with just that column.
      const words = (res.data && res.data.words) || [];
      const anchor = words.find(w => /^ma[il1]n$/i.test((w.text || "").trim()));
      if(anchor && anchor.bbox.x0 > img.width * .3){
        this.setState({ocrMsg: "Found the disc panel, reading it…"});
        res = await T.recognize(await this.ocrPrep(blob, Math.max(0, anchor.bbox.x0 / img.width - .04)), "eng", {logger: log});
      }
      const r = this.parseDiscText(res.data || {});
      const notes = [];
      if(!r.set) notes.push("the disc set");
      if(!r.slot) notes.push("the slot number");
      const slot = r.slot || this.state.slot || "";
      const fixed = A.FIXED_MAIN[slot];
      if(!fixed && !r.main) notes.push("the main stat");
      if(r.subs.length < 3) notes.push(r.subs.length ? "some substats" : "the substats");
      if(!r.set && !r.slot && !r.subs.length){
        this.setState({ocrState: "err", ocrMsg: "Couldn't find a disc in that image. Try a screenshot of the disc's detail panel, cropped if you can.", ocrNotes: []});
        return;
      }
      const names = r.subs.map(x => x.name); while(names.length < 4) names.push("");
      const rolls = r.subs.map(x => x.rolls); while(rolls.length < 4) rolls.push(0);
      this.setState(s => {
        const n = {setName: r.set || s.setName, ocrState: "ok", ocrNotes: notes,
          ocrMsg: "Filled in from your screenshot. Check it matches the game."};
        if(slot){
          n.slot = slot;
          n.mainStat = fixed || (r.main && r.main !== fixed ? r.main : this.defaultMain(r.set || s.setName, slot));
          n.subsBySlot = Object.assign({}, s.subsBySlot, {[slot]: names.filter(x => x !== n.mainStat).concat([""]).slice(0, 4)});
          n.rollsBySlot = Object.assign({}, s.rollsBySlot, {[slot]: rolls});
          n.levelBySlot = Object.assign({}, s.levelBySlot, {[slot]: r.level || 0});
        }
        return n;
      });
    } catch(e){
      this.setState({ocrState: "err", ocrMsg: (e && e.message) || "Something went wrong reading the screenshot.", ocrNotes: []});
    }
  }
  // Agent art loads only once its card is near the screen. Until then the card shows its plain
  // background, and nothing is downloaded or probed for that agent.
  artSeen(name){ return !!(this._artSeen && this._artSeen.has(name)); }
  observeArt(){
    this._artSeen = this._artSeen || new Set();
    const els = document.querySelectorAll('[data-artname]');
    if(typeof IntersectionObserver === "undefined"){
      let added = false;
      els.forEach(el => { const n = el.getAttribute("data-artname"); if(n && !this._artSeen.has(n)){ this._artSeen.add(n); added = true; } });
      if(added) this.forceUpdate();
      return;
    }
    if(!this._artIO){
      this._artIO = new IntersectionObserver(entries => {
        let added = false;
        entries.forEach(e => {
          if(!e.isIntersecting) return;
          const n = e.target.getAttribute("data-artname");
          if(n && !this._artSeen.has(n)){ this._artSeen.add(n); added = true; }
          this._artIO.unobserve(e.target);
        });
        if(added){ clearTimeout(this._artT); this._artT = setTimeout(() => this.forceUpdate(), 40); }
      }, {rootMargin: "500px 0px"});
    }
    els.forEach(el => {
      if(el._pdArt === el.getAttribute("data-artname")) return;
      el._pdArt = el.getAttribute("data-artname");
      if(!this._artSeen.has(el._pdArt)) this._artIO.observe(el);
    });
  }
  setSlot(k){
    this.setState(s => ({slot: k, mainStat: this.defaultMain(s.setName, k)}));
  }

  // ---------- matching ----------
  // Shared by Scrap or stash and Loadouts: who, if anyone, wants this exact disc.
  // Walks BOTH variant axes (set-variant × stat-variant) through the same matcher Scrap or stash
  // uses, so an alternative 4pc, a lower-priority 2pc alternate, or a CRIT/Anomaly stat variant all
  // count. Scrap or stash lists every matching variant as its own row; here each agent appears once
  // per disc, so this keeps that agent's BEST matching variant and carries it along — every
  // consumer then reads the ladders of the variant that actually matched, not the flat fields.
  candidatesFor(setName, slot, stat, types){
    this._memoFresh();
    const key = setName + "|" + slot + "|" + (stat || "") + "|" + (types || []).join(",");
    if(!this._cMemo.has(key)) this._cMemo.set(key, this._candidatesForRaw(setName, slot, stat, types));
    return this._cMemo.get(key).slice();
  }
  _candidatesForRaw(setName, slot, stat, types){
    const A = this.constructor;
    const threshold = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
    const active = types.length >= threshold;
    const isFixed = !!A.FIXED_MAIN[slot];
    const cands = [];
    A.AGENTS.forEach(a => {
      const data = this.getActiveBuilds(a);
      const all = this.matchesForCheck(data.sets, data.stats, setName, slot, stat, types, isFixed);
      if(!all.length) return;
      const best = this.scoredMatchesForCheck(all, active)[0];
      const parts = [];
      if(best.setIdx > 0) parts.push(best.setVar.label);
      if(best.statIdx > 0) parts.push(best.statVar.label);
      cands.push(Object.assign({}, best, {
        a: a,
        // kept for callers that still think in 0-based "how far down the list" terms
        mainIdx: isFixed ? -1 : best.mainRank - 1,
        pScore: best.quality,
        buildLabel: parts.join(" · "),
        variantCount: all.length
      }));
    });
    cands.sort((x, y) => y.tier - x.tier
      || (x.isPrimary === y.isPrimary ? 0 : x.isPrimary ? -1 : 1)
      || y.pScore - x.pScore || x.a.n.localeCompare(y.a.n));
    return cands;
  }

  // ---------- tab 1 result ----------
  toggleOthersOpen(){ this.setState(s => ({othersOpen: !s.othersOpen})); }

  checkResult(){
    const A = this.constructor, st = this.state;
    const threshold = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
    const stat = st.mainStat, setName = st.setName, slot = st.slot;
    // Nothing to score yet — the red "insert disc" state on the left has no set or slot chosen,
    // so skip straight to a clean placeholder instead of feeding empty strings through scoring.
    if(!setName || !slot){
      const body = !setName ? "Pick a disc set and a slot to see who wants it."
        : "Now pick a slot to see who wants it.";
      return {
        verdict: {tone:"dim", tag:"NO DISC", crumb:"", body: body},
        mineCount: "", mineRows: [], mineEmpty: true, mineEmptyText: "Insert a disc, Proxy. Whoever on your roster wants it shows up here.",
        othersOpen: st.othersOpen, onToggleOthers: () => this.toggleOthersOpen(),
        othersChevron: st.othersOpen ? "▾" : "▸", othersCount: "", hasOthers: false, othersRows: [],
        othersEmptyText: "Insert a disc to see who else could use it.",
        primaryToggle: Object.assign({label:"SHOW ALTERNATIVE BUILDS", onClick: () => {}}, this.filterSwitch(false)),
        pieceToggle: Object.assign({label:"SHOW ALTERNATIVE 2-PC", onClick: () => {}}, this.filterSwitch(false)),
        mainStatToggle: Object.assign({label:"SHOW SECONDARY MAIN STATS", onClick: () => {}}, this.filterSwitch(false)),
        sortHeaders: {
          agent: {label:"AGENT", style:{}, onClick: () => {}}, build: {label:"BUILD", style:{}, onClick: () => {}},
          set: {label:"SET", style:{}, onClick: () => {}}, main: {label:"MAIN STAT", style:{}, onClick: () => {}},
          substats: {label:"SUBSTATS", style:{}, onClick: () => {}}, rating: {label:"RATING", style:{}, onClick: () => {}}
        }
      };
    }
    const types = (st.subsBySlot[slot] || []).filter(Boolean);
    const lvl = this.formLevelled(st);
    const known = types.length;
    const active = known >= threshold;
    const isFixed = !!A.FIXED_MAIN[slot];

    let cands = A.AGENTS.flatMap(a => {
      const data = this.getActiveBuilds(a);
      const all = this.matchesForCheck(data.sets, data.stats, setName, slot, stat, types, isFixed);
      return this.scoredMatchesForCheck(all, active).map(m => Object.assign({agent: a}, m));
    });
    // Rating is computed once here, up front, and reused both for sorting and by each row's
    // display later — rather than a second, redundant computation per visible row.
    cands.forEach(m => {
      // buildMatches carries mainRank/mainOf but not the stat's name, which ratingFor needs to
      // exclude it from the reachable substat set.
      const r = this.ratingFor(Object.assign({mainName: stat}, m));
      m.ratingGrade = r.grade; m.ratingColor = r.color; m.ratingScore = r.score;
      if(lvl.ok && lvl.T > 0){
        const vg = this.verticalGrade({set: setName, slot: slot, main: isFixed ? A.FIXED_MAIN[slot] : stat, subs: lvl.subs},
          m, lvl.ticks, r.score);
        if(vg && !vg.pending){ m.ratingGrade = vg.band.grade; m.ratingColor = vg.band.color; m.ratingScore = vg.score; }
      }
    });
    // The column headers are clickable and drive this ordering directly — "rating" (best overall
    // fit) is the default. Every column but AGENT shares one "higher number = better" scale so a
    // single asc/desc toggle means the same thing everywhere; AGENT sorts A-Z / Z-A instead.
    const sortBy = st.sortBy || "rating";
    const sortDir = st.sortDir || "desc";
    const rowValue = m => {
      if(sortBy === "build") return m.isPrimary ? 1 : 0;
      if(sortBy === "set") return m.piece === "4pc" ? 1 : this.fitQuality(m.pieceRank, m.pieceOf);
      if(sortBy === "main") return m.isFixed ? 1 : this.fitQuality(m.mainRank, m.mainOf);
      if(sortBy === "substats") return m.matchCount === null ? -1 : m.matchCount;
      return m.ratingScore;
    };
    if(sortBy === "agent"){
      cands.sort((x, y) => {
        const cmp = x.agent.n.localeCompare(y.agent.n);
        return sortDir === "desc" ? -cmp : cmp;
      });
    } else {
      // Keep a multi-build agent's rows adjacent — grouped by their OWN best value for whichever
      // column is active, ordered primary-first within the group — instead of scattering their
      // alternates wherever the raw per-row value happens to land.
      const dirMul = sortDir === "asc" ? -1 : 1;
      const bestByAgent = new Map();
      cands.forEach(m => {
        const v = rowValue(m);
        const cur = bestByAgent.get(m.agent.n);
        if(cur === undefined || v > cur) bestByAgent.set(m.agent.n, v);
      });
      cands.sort((x, y) => {
        const bx = bestByAgent.get(x.agent.n), by = bestByAgent.get(y.agent.n);
        if(bx !== by) return dirMul * (by - bx);
        if(x.agent.n !== y.agent.n) return x.agent.n.localeCompare(y.agent.n);
        return (x.isPrimary === y.isPrimary ? 0 : x.isPrimary ? -1 : 1) || (rowValue(y) - rowValue(x));
      });
    }
    // A popular set can match a dozen-plus agents — cap any headline name list so the verdict
    // stays a quick glance; the full breakdown always lives in the rows underneath regardless.
    // Every call site alphabetizes its names before capping — with more ties than the cap allows,
    // "which 4" made the list would otherwise depend on the table's current column sort, and the
    // verdict must read identically no matter how the rows underneath happen to be ordered.
    const capList = (list, n) => list.length <= n ? list.join(", ") : list.slice(0, n).join(", ") + " +" + (list.length - n) + " more";

    const isMine = n => st.shown.indexOf(n) >= 0;
    const mine = cands.filter(m => isMine(m.agent.n));
    const others = cands.filter(m => !isMine(m.agent.n));
    let verdict;

    if(cands.length === 0){
      const setRole = A.SET_ROLES[setName];
      const roles = this.mainStatRoles(stat);
      const compatible = !setRole || roles.indexOf("Any") >= 0 || roles.indexOf(setRole) >= 0;
      if(compatible){
        verdict = {tone:"maybe", tag:"MAYBE", crumb:"NOBODY YET",
          body: "No released agent wants " + setName + " with " + stat + " in " + A.SLOT_LABEL[slot] + " — worth a hold only if you're banking on a future " + (setRole || "matching") + " agent."};
      } else {
        verdict = {tone:"recycle", tag:"RECYCLE", crumb:"INCOHERENT",
          body: setName + " is a " + setRole + " set, and " + stat + " doesn't fit that role — nobody current or future is likely to want this."};
      }
    } else if(mine.length === 0){
      verdict = {tone:"recycle", tag:"RECYCLE", crumb:"NOT YOUR ROSTER",
        body: "None of your tracked agents want this, though " + capList(Array.from(new Set(others.map(m => m.agent.n))).sort((a, b) => a.localeCompare(b)), 3) + " would."};
    } else if(!active){
      // Not enough substats entered yet to score fairly. Everything left in `mine` here already
      // has a genuinely matching set AND main stat — matchesForCheck already filtered out any
      // main-stat miss — so say that plainly instead of jumping straight to a premature KEEP off
      // the main stat alone, which used to happen on any "your pick" slot with no substats yet.
      // Found independently of `mine`'s current array order — that order now follows whatever
      // column the player has sorted the table by, not necessarily tier.
      const bestTier = Math.max(...mine.map(m => m.tier));
      const names = capList(Array.from(new Set(mine.filter(m => m.tier === bestTier).map(m => m.agent.n))).sort((a, b) => a.localeCompare(b)), 4);
      verdict = isFixed
        ? {tone:"dim", tag:"NEED SUBSTATS", crumb: A.SLOT_LABEL[slot].toUpperCase() + " IS FIXED",
            body: A.SLOT_LABEL[slot] + " always rolls " + A.FIXED_MAIN[slot] + " — enter at least " + threshold + " substats for a real verdict."}
        : {tone:"dim", tag:"NEED SUBSTATS", crumb:"MAIN STAT CHECKS OUT",
            body: stat + " is a real pick for " + names + " — enter at least " + threshold + " substats for a full, fair verdict."};
    } else {
      // The verdict comes from the odds of how this disc finishes, not a count of matching lines:
      // for each tracked agent every way its remaining upgrades can land is scored, and the agent it
      // has the best odds for decides. A C with an unrolled 4th line can be a far better bet than
      // its current grade says, and a B that can't climb is worse than it looks.
      const disc = {set: setName, slot: slot, main: isFixed ? A.FIXED_MAIN[slot] : stat, subs: lvl.subs};
      const scored = lvl.ok ? mine.map(m => ({m: m, o: this.outlook(disc, m, lvl.ticks)})).filter(x => x.o) : [];
      if(!lvl.ok){
        verdict = {tone:"dim", tag:"PLACE UPGRADES", crumb:"+" + lvl.level, body: lvl.msg};
      } else if(!scored.length || !scored.some(x => x.o.ceil >= .60 || x.o.pGood > 0) && Math.max(...mine.map(m => m.tier)) === 0){
        const names = capList(Array.from(new Set(mine.map(m => m.agent.n))).sort((a, b) => a.localeCompare(b)), 4);
        verdict = {tone:"recycle", tag:"RECYCLE", crumb:"SUBSTATS SINK IT",
          body: "The set" + (isFixed ? "" : " and main stat") + " line up for " + names + ", but the substats don't."};
      } else {
        scored.sort((x, y) => y.o.pGood - x.o.pGood || y.o.expected - x.o.expected);
        const top = scored[0];
        const near = scored.filter(x => x.o.pGood >= top.o.pGood - .02 && x.o.ceil >= top.o.ceil - .02);
        const names = capList(Array.from(new Set(near.map(x => x.m.agent.n))).sort((a, b) => a.localeCompare(b)), 3);
        const optional = !near.some(x => x.m.isPrimary) ? " · OPTIONAL BUILD" : "";
        const o = top.o;
        const nowScore = top.m.ratingScore != null ? top.m.ratingScore : -1;
        const swings = o.open ? o.swing.filter(x => x.good >= .5).map(x => x.name) : [];
        const swingList = swings.length > 3 ? swings.slice(0, 3).join(", ") + " or similar"
          : swings.length > 1 ? swings.slice(0, -1).join(", ") + " or " + swings[swings.length - 1] : swings[0] || "";
        const ceilG = o.luckyBand.grade;
        if(lvl.T >= A.UP_TICKS){
          // Fully levelled: nothing left to roll, so the call is on the finished grade alone.
          verdict = nowScore >= .72 ? {tone:"keep", tag:"KEEP", crumb:"FINISHED · STRONG" + optional,
              body: "Fully levelled and a strong fit for " + names + "."}
            : nowScore >= .60 ? {tone:"keep", tag:"KEEP", crumb:"FINISHED · SOLID" + optional,
              body: "Does the job for " + names + " — worth a slot until something better turns up."}
            : nowScore >= .40 ? {tone:"maybe", tag:"MAYBE", crumb:"FINISHED · FILLER" + optional,
              body: "Usable for " + names + " while you farm a better one, but nothing to hold on to."}
            : {tone:"recycle", tag:"RECYCLE", crumb:"FINISHED · WEAK",
              body: "The upgrades didn't land for anyone you track. Best it does is " + this.gradeBand(Math.max(0, nowScore)).grade + " for " + names + "."};
        } else if(o.ceil < .60){
          verdict = {tone:"recycle", tag:"RECYCLE", crumb:"NO PATH TO B",
            body: "Even if every upgrade lands perfectly, this tops out at " + o.ceilBand.grade + " for " + names + "."};
        } else if(nowScore >= .72 && o.pGood >= .5){
          verdict = {tone:"keep", tag:"KEEP", crumb:(lvl.T ? "+" + lvl.level + " · GOING WELL" : "STRONG START") + optional,
            body: "Already a strong fit for " + names + ", and it can reach " + ceilG + " if the upgrades land."};
        } else if(o.pGood >= .6){
          verdict = {tone:"keep", tag:"KEEP", crumb:"GOOD ODDS" + optional,
            body: "Most ways this levels out, it finishes at B or better for " + names + " — and it can reach " + ceilG + "."};
        } else if(swings.length){
          verdict = {tone:"maybe", tag:"TRY IT", crumb:"4TH LINE STILL OPEN" + optional,
            body: "Its fourth substat hasn't rolled yet. If the first upgrade brings " + swingList
              + ", it's on track to be a good disc for " + names + " (up to " + this.gradeBand(Math.max.apply(null, o.swing.filter(x => x.good >= .5).map(x => x.lucky))).grade + "), and that first level is the cheap one. If it misses, recycle it."};
        } else if(o.pGood >= .3){
          verdict = {tone:"maybe", tag:"MAYBE", crumb:"COULD GO EITHER WAY" + optional,
            body: "It can reach " + ceilG + " for " + names + ", but it needs a few good upgrades to get past B. Level it and watch the first two."};
        } else {
          verdict = {tone:"recycle", tag:"RECYCLE", crumb:"LONG SHOT",
            body: "It can only get past B for " + names + " with very lucky upgrades — it usually finishes around " + o.expBand.grade + "."};
        }
        if(lvl.T < A.UP_TICKS){ verdict.ceil = ceilG; verdict.ceilColor = o.luckyBand.color; }
      }
    }

    const rowOf = m => {
      const a = m.agent;
      const equippedHere = this.checkEquippedTo(a.n);
      // An agent can now supply more than one row (Primary plus alternates), so the expand state
      // and DOM id both need the build variant folded in — sharing a.n alone would make two of
      // an agent's rows toggle together and collide on the same element id.
      const key = a.n + "|" + m.setIdx + "|" + m.statIdx;
      const open = !!st.expanded[key];
      const hitSet = new Set(m.subs.filter(s => s.hit).map(s => s.name));
      const buildParts = [];
      if(m.setIdx !== 0) buildParts.push(m.setVar.label);
      if(m.statIdx !== 0) buildParts.push(m.statVar.label);
      const buildLabel = m.isPrimary ? "PRIMARY" : buildParts.join(" · ").toUpperCase();
      const buildColor = m.isPrimary ? "#6cc6ff" : "#b98cff";
      // A separate RECOMMENDED column (✓/—) turned out to read as disconnected from SET — two
      // cells the eye has to link across a gap. Back to one column, distinguished by brightness
      // instead: reuses the same bright-vs-muted language BUILD and MAIN STAT already use, so
      // there's nothing new to learn. Only the Recommended 2pc (rank 1) reads bright — every
      // other option is equally "not the top pick," so the exact rank number stays in the
      // tooltip only. A 4pc is always THE piece to use — no ranking ambiguity — so it reads
      // bright the same as a Recommended (#1) 2pc, keeping both cases visually alike.
      const isRecommendedPiece = m.piece === "4pc" || m.pieceRank === 1;
      const setColor = isRecommendedPiece ? "#ecefe6" : "#6c7079";
      const setLabel = m.piece === "4pc" ? "4PC" : "2PC";
      const mainColor = m.isFixed ? "#8a9099" : this.depthTone(m.mainRank);
      const mainLabel = m.isFixed ? "FIXED" : m.mainRank === 1 ? "BEST" : this.ordinal(m.mainRank).toUpperCase();
      const skyline = m.subs.map(s => ({height: this.skylineHeight(s.hit, s.rank) + "px", color: s.hit ? this.depthTone(s.rank) : "#2e333b"}));
      const countColor = m.matchCount ? this.depthTone(m.topHit) : "#5f656e";
      const countLabel = m.matchCount === null ? "—" : m.matchCount + "/" + types.length;
      const caveat = (m.setIdx > 0 && m.setVar.note) || (m.statIdx > 0 && m.statVar.note) || "";
      // Against what this agent wears in the slot right now. The rating itself is unchanged —
      // this only answers "would swapping be an improvement", which a low grade can still be.
      const eq = (() => {
        const newOk = this.isGraded({grade: m.ratingGrade, score: m.ratingScore});
        if(!newOk) return {show: false};
        const inc = this.incumbentFor({slot: slot, id: null}, a.n);
        if(inc.empty){
          const geared = this.state.discs.some(x => x.to === a.n);
          return geared ? {show: true, better: true, label: "▲ EMPTY SLOT", color: "#6cc6ff",
            title: a.n + " has nothing in " + A.SLOT_LABEL[slot] + " yet, so this would fill it."} : {show: false};
        }
        if(!inc.graded || !((m.ratingScore || 0) > (inc.score || 0) + 1e-9)) return {show: false};
        return {show: true, better: true, label: "▲ BEATS EQUIPPED " + inc.grade, color: "#4ade80",
          incGrade: inc.grade, incColor: inc.color, incSet: inc.set,
          title: a.n + " is wearing " + inc.set + " at +" + inc.lvl + " in " + A.SLOT_LABEL[slot]
            + ", graded " + inc.grade + " for them. This disc grades " + m.ratingGrade
            + ", so swapping would be an improvement even if it isn't a keeper on its own."};
      })();
      return {
        eqBetter: !!eq.better, eqSlot: A.SLOT_LABEL[slot], eqInc: eq.incGrade || "", eqNew: m.ratingGrade,
        eqIncColor: eq.incColor || "#8a9099", eqNewColor: m.ratingColor || "#ecefe6",
        hasEqCmp: !!eq.show, eqCmpLabel: eq.label || "", eqCmpTitle: eq.title || "",
        eqCmpStyle: {font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".08em", padding:"5px 7px",
          whiteSpace:"nowrap", color: eq.color || "#8a9099", background: (eq.color || "#8a9099") + "14",
          border:"1px solid " + (eq.color || "#8a9099") + "55", cursor:"help", flex:"0 0 auto"},
        name: a.n, initial: a.n.charAt(0),
        // The Primary row keeps the plain agent-slug id — same one the Agent-index portrait uses,
        // so a dropped portrait still shows up here — while an alternate-build row for the same
        // agent gets a suffixed id, since two rows for one agent can now be on screen at once and
        // duplicate DOM ids aren't valid.
        iconId: "agent-" + a.n.toLowerCase().replace(/[^a-z0-9]+/g, "-") + (m.isPrimary ? "" : "-" + m.setIdx + "-" + m.statIdx),
        iconSrc: this.agentIconPath(a.n),
        isSkipped: this.rosterOf(a.n) === "off",
        buildLabel: buildLabel, buildTitle: m.isPrimary ? (a.n + "'s meta build.") : "Optional build: " + buildLabel,
        buildStyle: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", color: buildColor},
        setLabel: setLabel,
        setTitle: m.piece === "4pc" ? "The 4-piece of this build." : isRecommendedPiece
          ? "Recommended 2-piece (1 of " + m.pieceOf + ")."
          : "2-piece option " + m.pieceRank + " of " + m.pieceOf + " — not the top pick.",
        setStyle: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", color: setColor},
        hasMain: true, mainLabel: mainLabel,
        mainTitle: m.isFixed ? "This slot's main stat is fixed." : stat + " is their " + this.ordinal(m.mainRank) + " choice of " + m.mainOf + " for " + A.SLOT_LABEL[slot] + ".",
        mainStyle: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", color: mainColor},
        hasSkyline: m.matchCount !== null, skyline: skyline,
        skylineTitle: m.matchCount === null ? "Enter " + threshold + " substats to score these." : m.matchCount + " of " + types.length + " substats are on their list; bar height is how high.",
        countLabel: countLabel, countStyle: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em", whiteSpace:"nowrap", color: countColor, marginLeft:"5px"},
        ratingLabel: m.ratingGrade,
        ratingTitle: "Fit rating: how well this exact piece placement, main stat and substats line up — independent of which build it's for.",
        ratingStyle: {font:"800 19px/1 'Chakra Petch',sans-serif", letterSpacing:".02em", color: m.ratingColor, textAlign:"center"},
        edge: m.tier >= 3 ? "#4ade80" : m.tier === 0 ? "#ff4d5e" : "#ffa02e",
        mark: open ? "–" : "+", markStyle: {font:"500 17px/1 'JetBrains Mono',monospace", color:"#8a9099", width:"14px", flex:"0 0 14px", textAlign:"center"},
        open: open,
        // Same icon+text treatment as the Agent-index card's own role/element line, rather than
        // the plain text this used to be — a rank number alone doesn't need a glyph, but role
        // and element read faster with their icon than as bare uppercase words.
        rankLabel: a.r + " RANK",
        roleIconStyle: this.iconStyle(this.roleIconPath(a.role), 13), roleLabel: a.role.toUpperCase(),
        hasElement: !!a.el, elIconStyle: this.iconStyle(this.elementIconPath(a.el), 13), elLabel: (a.el || "").toUpperCase(),
        noAffinity: !a.el,
        hasCaveat: !!caveat, caveat: caveat ? "* " + caveat : "",
        // The exact matched stat variant, not the flat mirror — so the ladder always reflects
        // whichever build this row is actually talking about, with the disc's rolled subs marked.
        ladder: this.checkLadder(m.statVar.sub, m.statVar.subNotes, hitSet, stat),
        mainLadder: this.checkMainLadder((m.statVar.mains || {})[slot], m.isFixed, A.FIXED_MAIN[slot], stat),
        // Jumps to Agent Index pinned to exactly this one agent's card (not the search box's
        // substring match — "Billy" would also surface "Starlight - Billy") on the SAME build
        // variant this row was showing, not whatever that agent's card last happened to have
        // selected. Every other filter there is cleared too, so none of them can hide the card.
        // sendToScan saves the disc if it isn't saved yet (tracking needs a stable id) and opens
        // the Upgrades tab on it; passing the agent pins the grade to the row you came from.
        onUpgrade: () => this.sendToScan({
          id: "tmp", set: st.setName, slot: st.slot, main: st.mainStat,
          subs: (st.subsBySlot[st.slot] || ["","","",""]).slice()
        }, a.n),
        upgradeBtnStyle: {background:"#171a1f", color:"#e8ff45", border:"1px solid #e8ff4555",
          padding:"9px 13px", font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          textTransform:"uppercase", cursor:"pointer"},
        onShowBuild: () => this.setState(s => ({
          tab: "agents", pinnedAgent: a.n, q: a.n, fRank: "all", fRole: "all", fMark: "all",
          selectedSet: Object.assign({}, s.selectedSet, {[a.n]: m.setIdx}),
          selectedStat: Object.assign({}, s.selectedStat, {[a.n]: m.statIdx})
        })),
        showBuildBtnStyle: {background:"#171a1f", color:"#ecefe6", border:"1px solid #2e333b",
          padding:"9px 13px", font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          textTransform:"uppercase", cursor:"pointer", marginLeft:"auto"},
        onToggle: () => this.setState(s => ({expanded: Object.assign({}, s.expanded, {[key]: !s.expanded[key]})})),
        // Switch, not an action button — it reports current state, so the label never flips
        // out from under the cursor the instant it's clicked.
        // Equipping, not tracking: from here the useful action is committing this disc to the
        // agent you're looking at. Tracking still lives on the Agent index.
        rosterBtnStyle: {display:"flex", alignItems:"center", gap:"9px", padding:"5px 10px 5px 5px", cursor:"pointer",
          background:"transparent", border:"1px solid " + (equippedHere ? "#e8ff4555" : "#2e333b")},
        rosterTrackStyle: {position:"relative", width:"34px", height:"18px", flex:"0 0 34px", borderRadius:"9px",
          background: equippedHere ? "#e8ff45" : "#2e333b", transition:"background .12s ease"},
        rosterThumbStyle: {position:"absolute", top:"2px", left: equippedHere ? "18px" : "2px",
          width:"14px", height:"14px", borderRadius:"50%", background:"#0b0c0e", transition:"left .12s ease"},
        rosterLabelStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          minWidth:"78px", color: equippedHere ? "#e8ff45" : "#8a9099"},
        rosterStateLabel: equippedHere ? "EQUIPPED" : "EQUIP",
        rosterHint: equippedHere
          ? "Saved to Loadouts and worn by " + a.n + "."
          : "Save this disc and put it on " + a.n + ".",
        onRoster: e => this.equipFromCheck(a.n, e)
      };
    };

    // Row filters are a browsing aid only — they narrow what's LISTED, never what the headline
    // verdict above is talking about, so toggling one can't flip KEEP into RECYCLE by hiding the
    // one match that earned it. Sorting the SET / MAIN STAT columns tells you WHICH row is
    // recommended/best, but not the same as being able to hide the rest of a long alternates
    // list — these three hide/show toggles cover that instead. A 4pc always passes the piece
    // filter (never "one of several" 2pc options) and a fixed main always passes the main-stat
    // filter (never "one of several" ranked options) — neither one has an alternative to hide.
    const passesFilters = m => {
      if(st.primaryFilter === "primary" && !m.isPrimary) return false;
      if(st.pieceFilter === "recommended" && !(m.piece === "4pc" || m.pieceRank === 1)) return false;
      if(st.mainFilter === "best" && !m.isFixed && m.mainRank !== 1) return false;
      return true;
    };
    const visibleMine = mine.filter(passesFilters);
    const visibleOthers = others.filter(passesFilters);
    const mineRows = visibleMine.map(rowOf), otherRows = visibleOthers.map(rowOf);
    // "Can use it" / the others count are agent counts, not row counts — an agent with two builds
    // showing as two rows should still read as one agent who wants this, not two.
    const mineAgentCount = new Set(visibleMine.map(m => m.agent.n)).size;
    const othersAgentCount = new Set(visibleOthers.map(m => m.agent.n)).size;
    const filtersActive = st.primaryFilter !== "primary" || st.pieceFilter !== "recommended" || st.mainFilter !== "best";
    // One header builder shared by every sortable column — AGENT included. Clicking a column
    // that isn't already active starts it at that column's own "natural" direction (A-Z for the
    // agent name, best-first for every numeric column); clicking the active column again flips it.
    const sortHeader = (key, label, extra) => {
      const isActive = sortBy === key;
      const arrow = isActive ? (sortDir === "asc" ? " ▴" : " ▾") : "";
      return {
        label: label + arrow,
        style: Object.assign({font:"700 14px/1 'JetBrains Mono',monospace", letterSpacing:".11em",
          color: isActive ? "#e8ff45" : "#5f656e", cursor:"pointer", userSelect:"none"}, extra || {}),
        onClick: () => this.setState(s => ({
          sortBy: key,
          sortDir: (s.sortBy || "rating") === key ? ((s.sortDir || "desc") === "asc" ? "desc" : "asc")
            : (key === "agent" ? "asc" : "desc")
        }))
      };
    };
    return {
      verdict: verdict,
      mineCount: mineAgentCount + " can use it", mineRows: mineRows, mineEmpty: visibleMine.length === 0,
      mineEmptyText: mine.length && filtersActive
        ? "Nobody matches these filters — try widening them."
        : "Nobody you track can use this disc in any of their builds.",
      othersOpen: st.othersOpen, onToggleOthers: () => this.toggleOthersOpen(),
      othersChevron: st.othersOpen ? "▾" : "▸", othersCount: othersAgentCount + " agent" + (othersAgentCount === 1 ? "" : "s"),
      hasOthers: visibleOthers.length > 0, othersRows: st.othersOpen ? otherRows : [],
      othersEmptyText: others.length && filtersActive
        ? "Nobody matches these filters — try widening them."
        : "Nobody else in the reference list wants this right now.",
      primaryToggle: Object.assign({label:"SHOW ALTERNATIVE BUILDS",
        onClick: () => this.setState({primaryFilter: st.primaryFilter === "all" ? "primary" : "all"})},
        this.filterSwitch(st.primaryFilter === "all")),
      pieceToggle: Object.assign({label:"SHOW ALTERNATIVE 2-PC",
        onClick: () => this.setState({pieceFilter: st.pieceFilter === "all" ? "recommended" : "all"})},
        this.filterSwitch(st.pieceFilter === "all")),
      mainStatToggle: Object.assign({label:"SHOW SECONDARY MAIN STATS",
        onClick: () => this.setState({mainFilter: st.mainFilter === "all" ? "best" : "all"})},
        this.filterSwitch(st.mainFilter === "all")),
      sortHeaders: {
        agent: sortHeader("agent", "AGENT", {flex:"1 1 190px", minWidth:"180px"}),
        build: sortHeader("build", "BUILD"),
        set: sortHeader("set", "SET"),
        main: sortHeader("main", "MAIN STAT"),
        substats: sortHeader("substats", "SUBSTATS"),
        rating: sortHeader("rating", "RATING", {textAlign:"center"})
      }
    };
  }

  // ---------- tab 3 ----------
  runScan(){
    const A = this.constructor, st = this.state;
    const threshold = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
    const agent = A.AGENTS.find(a => a.n === st.sAgent);
    const setName = st.sSet, slot = st.sSlot, mainStat = st.sMain;
    const level = parseInt(st.sLevel, 10);
    const lines = st.sSubs.filter(l => l.t).map(l => ({stat: l.t, rolls: parseInt(l.r, 10) || 1}));
    const types = lines.map(l => l.stat);
    const known = types.length;
    const active = known >= threshold;
    const pendingFourth = known === 3;
    const piece = this.pieceFor(agent, setName);

    if(!piece){
      this.setState({sResult: {
        tone:"recycle", headline:"RECYCLE", crumb: agent.n.toUpperCase() + " · " + setName.toUpperCase(),
        mainVerdict: setName + " isn't a set " + agent.n + " runs at all — their sets are " + (agent.p4 || "not confirmed") + " (4pc)" + (agent.p2 ? " / " + agent.p2 + " (2pc)" : "") + ".",
        notes: ["Main stat and substats don't matter when the set itself is wrong."],
        hasChecks: false, checks: [], subSummary: "", hasRoll: false, rollLines: [], rollTag: ""
      }});
      return;
    }

    const isFixedSlot = !!A.FIXED_MAIN[slot];
    const mIdx = isFixedSlot ? -1 : this.prioIndex(agent, slot, mainStat);
    const mainTier = isFixedSlot ? 3 : (mIdx === 0 ? 3 : mIdx === 1 ? 2 : mIdx > 1 ? 1 : 0);
    let mainVerdict;
    if(isFixedSlot) mainVerdict = A.SLOT_LABEL[slot] + "'s main stat is always " + A.FIXED_MAIN[slot] + " — nothing to judge there, so this comes down to the set and the substats.";
    else if(mIdx === 0) mainVerdict = mainStat + " is the top main stat for " + agent.n + " in " + A.SLOT_LABEL[slot] + ".";
    else if(mIdx === 1) mainVerdict = mainStat + " is a solid alternate main stat for " + agent.n + " in " + A.SLOT_LABEL[slot] + ".";
    else if(mIdx > 1) mainVerdict = mainStat + " is situational for " + agent.n + " — usually not the first choice.";
    else mainVerdict = mainStat + " isn't on " + agent.n + "'s recommended list for " + A.SLOT_LABEL[slot] + " at all.";

    const mc = active ? this.matchCount(agent, types) : null;
    const tier = this.combineTier(mainTier, mc);
    const tone = tier === 0 ? "recycle" : tier >= 3 ? "keep" : "maybe";
    const headline = tier === 0 ? "RECYCLE" : tier >= 3 ? "KEEP" : "MAYBE";

    const checks = types.map(t => {
      const i = agent.sub.indexOf(t);
      const hit = i >= 0, c = this.tone(hit ? "keep" : "recycle");
      return {stat: t, edge: c, icon: hit ? "✓" : "✕",
        iconStyle: {font:"700 17px/1 'JetBrains Mono',monospace", color: c, width:"14px", textAlign:"center"},
        rank: hit ? "#" + (i + 1) + " priority" : "not on their list"};
    });

    const notes = [];
    if(tone === "maybe"){
      notes.push("Usable, not ideal — " + agent.n + " can run it, but each level-up picks a line at random and this disc has fewer good ones to hit. Feed it three levels at a time: if two or three rolls in a row land on stats " + agent.n + " doesn't want, cut it loose rather than sinking more into it.");
    }
    if(active && known < 4){
      const bestPossible = Math.min(mc + (4 - known), 4);
      if(bestPossible > mc){
        notes.push((pendingFourth ? "4th substat hasn't rolled yet" : "Only " + known + " of 4 substats entered") + " — best case " + this.countLabel(bestPossible) + " (" + bestPossible + "/4), worst case it stays " + this.countLabel(mc) + " (" + mc + "/4).");
      }
    }
    const subSummary = known
      ? (active
        ? mc + "/" + known + " substats match " + agent.n + "'s priority list (" + agent.sub.join(" > ") + ") — " + this.countLabel(mc) + "."
        : "Pick at least " + threshold + " substats for them to factor into the verdict (" + known + "/4 so far).")
      : "";

    // Roll quality — deliberately separate from the verdict, never feeds into it.
    const rollLines = [];
    let rollTag = "";
    if(lines.length && this.props.showRollQuality !== false){
      rollTag = "S-RANK · +" + level;
      const meta = lines.map(l => ({stat: l.stat, rolls: l.rolls, value: (A.SUBSTAT_BASE_S[l.stat] || 0) * l.rolls, weight: this.weightFor(agent, l.stat)}));
      const stagesUsed = level / 3;
      const stagesLeft = Math.max(0, A.STAGES - stagesUsed);
      const revealNeeded = Math.max(0, 4 - lines.length);
      const upgradesLeft = Math.max(0, stagesLeft - revealNeeded);
      const upgradesSoFar = meta.reduce((s, l) => s + (l.rolls - 1), 0);
      const sorted = meta.slice().sort((a, b) => b.weight - a.weight);
      if(upgradesSoFar === 0){
        rollLines.push("No upgrade rolls have landed yet — what you've got is just the starting values.");
      } else if(sorted[0].weight === sorted[sorted.length - 1].weight){
        rollLines.push("Of " + upgradesSoFar + " upgrade roll" + (upgradesSoFar > 1 ? "s" : "") + " so far, they're spread across lines that matter about equally to " + agent.n + " — no real waste either way.");
      } else {
        const best = sorted[0], worst = sorted[sorted.length - 1];
        rollLines.push("Of " + upgradesSoFar + " upgrade roll" + (upgradesSoFar > 1 ? "s" : "") + " so far, " + (worst.rolls - 1) + " landed on " + worst.stat + " — " + agent.n + "'s weakest line here — versus " + (best.rolls - 1) + " on " + best.stat + ", their best.");
      }
      if(stagesLeft === 0){
        rollLines.push("Already at +15 — no more rolls coming.");
      } else {
        const bl = sorted[0];
        const bestCase = bl.value + upgradesLeft * (A.SUBSTAT_BASE_S[bl.stat] || 0);
        const head = stagesLeft + " roll" + (stagesLeft > 1 ? "s" : "") + " left before +15" + (revealNeeded > 0 ? " (1 still has to reveal the 4th substat, leaving " + upgradesLeft + " that can upgrade something)" : "") + ".";
        if(upgradesLeft === 0){
          rollLines.push(head + " None of them can upgrade an existing line, so the values you have are the values you get.");
        } else {
          rollLines.push(head + (upgradesLeft === 1 ? " Best case that one lands on " : " Best case all " + upgradesLeft + " land on ") + bl.stat + ", taking it from " + this.fmtStat(bl.stat, bl.value) + " to " + this.fmtStat(bl.stat, bestCase) + ". Worst case none do.");
        }
      }
    }

    this.setState({sResult: {
      tone: tone, headline: headline, crumb: agent.n.toUpperCase() + " · " + piece.toUpperCase() + " " + setName.toUpperCase() + " · " + A.SLOT_LABEL[slot].toUpperCase(),
      mainVerdict: mainVerdict, notes: notes,
      hasChecks: checks.length > 0, checks: checks, subSummary: subSummary,
      hasRoll: rollLines.length > 0, rollLines: rollLines, rollTag: rollTag
    }});
  }

  renderValsInner(){
    const A = this.constructor, st = this.state;
    const threshold = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
    const deepScanReady = this.props.deepScanEnabled === true;
    const setOptions = Object.keys(A.SETS).sort();
    const substatOptions = [{v:"", t:"— empty —"}].concat(A.SUBSTAT_ORDER.map(s => ({v:s, t:s})));
    const res = this.checkResult();
    const fixed = !!A.FIXED_MAIN[st.slot];
    const discReady = !!(st.setName && st.slot);

    // "Commonly desired on this disc" — shows the moment a set is picked (main stat needs a
    // slot 4-6 chosen too, since slots 1-3 have nothing to judge there). Independent of whatever
    // main stat/substats are actually dialed in on the disc below.
    const desireSlotKey = (st.slot === "s4" || st.slot === "s5" || st.slot === "s6") ? st.slot : null;
    const desire = st.setName ? this.setDesireSummary(st.setName, desireSlotKey) : {count:0, subs:[], mains:[]};
    // Same tile-ladder look as an agent's own "Their substat ladder" — a quick glance at what's
    // common, ranked by color, not a chart. No count, no percentage: how many there are matters
    // far less than which handful lead the list.
    const desireNames = list => list.map((x, i) => ({
      label: x.name,
      barStyle: {height:"5px", background: this.depthTone(i + 1), marginBottom:"8px"},
      textStyle: {font:"600 14px/1.3 'JetBrains Mono',monospace", color:"#ecefe6"}
    }));
    const hasDesire = !!(st.setName && desire.count > 0 && desire.subs.length);
    const hasDesireMains = !!(desireSlotKey && desire.mains.length);

    const tabStyle = (on, util) => ({
      display:"flex", alignItems:"center", gap:"8px", cursor:"pointer", whiteSpace:"nowrap",
      font: util ? "700 13px/1 'JetBrains Mono',monospace" : "700 17px/1 'Chakra Petch',sans-serif",
      letterSpacing: util ? ".12em" : ".05em", textTransform:"uppercase",
      padding: util ? "15px 12px 14px" : "15px 16px 14px",
      background: on ? "linear-gradient(180deg,rgba(232,255,69,0) 40%,rgba(232,255,69,.08))" : "transparent",
      border:"none", color: on ? "#ecefe6" : "#8a9099",
      boxShadow: on ? "inset 0 -3px 0 #e8ff45" : "none",
      transition:"color .15s ease, box-shadow .15s ease"
    });

    const slots = ["s1","s2","s3","s4","s5","s6"].map(k => {
      const on = st.slot === k;
      return {
        label: A.SLOT_LABEL[k].replace("Slot ", "SLOT "),
        sub: A.FIXED_MAIN[k] ? A.FIXED_MAIN[k] + " fixed" : "your pick",
        active: on,
        style: {padding:"11px 10px", textAlign:"left", cursor:"pointer",
          border:"1px solid " + (on ? "#e8ff45" : "#2e333b"),
          background: on ? "#e8ff45" : "#0f1114", color: on ? "#0b0c0e" : "#8a9099"},
        subStyle: {display:"block", font:"400 13px/1.3 'JetBrains Mono',monospace", letterSpacing:".06em",
          marginTop:"3px", color: on ? "#0b0c0e" : "#5f656e", opacity: on ? .75 : 1},
        onClick: () => this.setSlot(k)
      };
    });

    // A disc can't roll the same substat twice, so once a stat is picked on one line it's dropped
    // from every OTHER line's options entirely — not just disabled — so there's no way to even
    // attempt the impossible combination. Its own line still offers it (that's the whole point of
    // "elsewhere": every index but this one), and the empty placeholder is never filtered out.
    const curSlotSubs = st.subsBySlot[st.slot] || ["","","",""];
    const subLines = curSlotSubs.map((v, i) => {
      const usedElsewhere = new Set(curSlotSubs.filter((sv, si) => si !== i && sv));
      const options = substatOptions.filter(o => o.v === "" || o.v === v || (!usedElsewhere.has(o.v) && o.v !== st.mainStat));
      return {
        num: "0" + (i + 1), value: v, options: options,
        numStyle: {font:"500 15px/1 'JetBrains Mono',monospace", color: v ? "#e8ff45" : "#4d535c", width:"20px", flex:"0 0 20px"},
        onChange: e => { const val = e.target.value; this.setState(s => { const slotSubs = (s.subsBySlot[s.slot] || ["","","",""]).slice(); slotSubs[i] = val; return {subsBySlot: Object.assign({}, s.subsBySlot, {[s.slot]: slotSubs})}; }); }
      };
    });

    const known = curSlotSubs.filter(Boolean).length;
    const subsHint = known >= threshold
      ? known + " of 4 entered — factored into the verdict."
      : "Pick at least " + threshold + " to count.";

    // ----- tab 2 -----
    let list = A.AGENTS.slice();
    if(st.pinnedAgent){
      // Exact name match, not the substring search below — "Billy" pinned must never also
      // surface "Starlight - Billy" the way a normal text search legitimately would.
      list = list.filter(a => a.n === st.pinnedAgent);
    } else {
      if(st.fRank !== "all") list = list.filter(a => a.r === st.fRank);
      if(st.fRole !== "all") list = list.filter(a => a.role === st.fRole);
      if(st.fMark !== "all") list = list.filter(a => this.rosterOf(a.n) === st.fMark);
      if(st.q) list = list.filter(a => a.n.toLowerCase().indexOf(st.q.toLowerCase()) >= 0);
    }
    list.sort((a, b) => a.n.localeCompare(b.n));

    // Disc-set tile names only — shrink to fit the tile on one line rather than wrapping,
    // since a combined "A / B" name from a split tile can run well past what 13px allows.
    const tileFontSize = name => name.length > 24 ? "14px" : name.length > 19 ? "15px" : "17px";
    // Set effect blurbs live in A.SETS but were only ever read for their keys (the dropdown
    // options) — this pulls the actual p2/p4 sentence onto the tile itself. "—" means "no
    // meaningful effect at this piece count," same as no name at all: nothing to show.
    const effectFor = (name, piece) => {
      const info = name ? A.SETS[name] : null;
      const text = info ? info[piece] : "";
      return text && text !== "—" ? text : "";
    };
    const setTile = (name, pc) => {
      const pieceLabel = pc === "4pc" ? "4-piece bonus" : "2-piece bonus";
      const effect = effectFor(name, pc === "4pc" ? "p4" : "p2");
      if(!name) return {pieceLabel: pieceLabel, iconSrc: "", iconId: "", isSplit: false, isNotSplit: true, iconSrcA: "", iconSrcB: "", iconIdA: "", iconIdB: "",
        hub: this.hubPair(null, 70).ring, hole: this.hubPair(null, 70).hole,
        name: "Not confirmed", nameColor: "#8a9099", nameFontSize: tileFontSize("Not confirmed"), hasAlts: false, effect: "", hasEffect: false};
      return {pieceLabel: pieceLabel, iconSrc: this.discIconPath(name), iconId: this.discIconId(name), isSplit: false, isNotSplit: true, iconSrcA: "", iconSrcB: "", iconIdA: "", iconIdB: "",
        hub: this.hubPair(name, 70).ring, hole: this.hubPair(name, 70).hole,
        name: name, nameColor: "#ecefe6", nameFontSize: tileFontSize(name), hasAlts: false, effect: effect, hasEffect: !!effect};
    };
    // 2pc's recommended slot can be a tied pair (identical effect either way) instead of a
    // single name — the tile then splits its disc art in half, one set's icon per side, and
    // shows both names joined. Everything after slot 0 is a genuine alternative. Each half still
    // spins on hover, same as a normal disc — see the markup: the clip mask that keeps a half on
    // its own side is a separate, non-rotating wrapper around the part that actually spins.
    const build2pcTile = (p2List) => {
      const pieceLabel = "2-piece bonus";
      const primary = p2List[0];
      if(!primary) return {pieceLabel: pieceLabel, iconSrc: "", iconId: "", isSplit: false, isNotSplit: true, iconSrcA: "", iconSrcB: "", iconIdA: "", iconIdB: "",
        hub: this.hubPair(null, 70).ring, hole: this.hubPair(null, 70).hole,
        name: "Not confirmed", nameColor: "#8a9099", nameFontSize: tileFontSize("Not confirmed"), hasAlts: false, effect: "", hasEffect: false};
      const isSplit = Array.isArray(primary);
      const alts = p2List.slice(1);
      const name = isSplit ? primary.join(" / ") : primary;
      // Tied split picks share the tile, so their effect lines join too — both are equally "the"
      // recommendation here, not one over the other.
      const effect = isSplit
        ? Array.from(new Set(primary.map(n => effectFor(n, "p2")).filter(Boolean))).join(" ")
        : effectFor(primary, "p2");
      return {
        pieceLabel: pieceLabel,
        isSplit: isSplit, isNotSplit: !isSplit,
        iconSrc: isSplit ? "" : this.discIconPath(primary),
        iconId: isSplit ? "" : this.discIconId(primary),
        // First-listed set reads on the left, second on the right — matching the name text's own
        // left-to-right order ("Freedom Blues / Chaos Jazz") — fixed regardless of rotation.
        iconSrcA: isSplit ? this.discIconPath(primary[0]) : "",
        iconSrcB: isSplit ? this.discIconPath(primary[1]) : "",
        iconIdA: isSplit ? this.discIconId(primary[0]) : "",
        iconIdB: isSplit ? this.discIconId(primary[1]) : "",
        hub: this.hubPair(isSplit ? primary[0] : primary, 70).ring,
        hole: this.hubPair(isSplit ? primary[0] : primary, 70).hole,
        // Split names stay at the standard, unshrunk tile-name size — no auto-shrinking to fit.
        name: name,
        nameColor: "#ecefe6", nameFontSize: isSplit ? "17px" : tileFontSize(name),
        effect: effect, hasEffect: !!effect,
        hasAlts: alts.length > 0,
        altChipLabel: "+" + alts.length,
        altList: p2List.map((n, i) => ({
          name: Array.isArray(n) ? n.join(" / ") : n,
          iconStyle: this.iconStyle(this.discIconPath(Array.isArray(n) ? n[0] : n), 22),
          color: "#ecefe6", weight: i === 0 ? "600" : "400",
          isFirst: i === 0, isRest: i > 0,
          starStyle: i === 0 ? {marginLeft:"4px"} : {display:"none"}
        }))
      };
    };
    // One chip per ranked option, every tier (not just first-vs-rest) — a flat entry is a tier of
    // one, a nested array is a tier of several tied for that same rank. Rank is carried three ways
    // at once: left-to-right order, the bar colour (depthTone), and a fill/weight split — the top
    // pick gets a tinted background, a tone-tinted border and 600-weight ink, so it can never read
    // as just another fallback; lower ranks share one flat "transparent bg, grey border" look.
    // Two chips can legitimately share the SAME depth tone and the SAME filled treatment — that's
    // a tie, meant to read as two interchangeable picks rather than one compound stat.
    const mainRow = (slotNum, chain) => {
      const tiers = (chain || []).map(x => Array.isArray(x) ? x : [x]);
      const options = [];
      tiers.forEach((names, ti) => {
        const tone = this.depthTone(ti + 1), top = ti === 0;
        names.forEach(name => {
          options.push({
            name: name,
            style: {display:"flex", alignItems:"center", gap:"6px", padding:"4px 8px 4px 4px",
              whiteSpace:"nowrap", flex:"0 1 auto", minWidth:"0",
              background: top ? tone + "14" : "transparent",
              border: "1px solid " + (top ? tone + "55" : "#2e333b")},
            barStyle: {display:"block", width:"3px", height:"15px", flex:"0 0 3px",
              background: tone, opacity: top ? 1 : .8},
            nameStyle: {font: (top ? "600" : "400") + " 14px/1.2 Barlow,sans-serif",
              color: top ? "#ecefe6" : "#9aa0a8", whiteSpace:"nowrap",
              overflow:"hidden", textOverflow:"ellipsis", minWidth:"0"}
          });
        });
      });
      if(!options.length){
        options.push({
          name: "not documented",
          style: {display:"flex", alignItems:"center", gap:"6px", padding:"4px 8px 4px 4px",
            whiteSpace:"nowrap", flex:"0 1 auto", minWidth:"0",
            background:"transparent", border:"1px dashed #2e333b"},
          barStyle: {display:"block", width:"3px", height:"15px", flex:"0 0 3px", background:"#3f454e"},
          nameStyle: {font:"400 14px/1.2 Barlow,sans-serif", color:"#5f656e", whiteSpace:"nowrap",
            overflow:"hidden", textOverflow:"ellipsis", minWidth:"0"}
        });
      }
      return {slotNum: slotNum, options: options};
    };
    // tier (disc set) tabs run yellow, axis (stat) tabs run blue — otherwise identical. Active
    // bleeds 1px over the section's baseline rule so the tab visually fuses with the line it sits on.
    // Disabled overrides on/off entirely — greyed, sunk below the line instead of bleeding onto
    // it, no accent color regardless of kind or selection state.
    const buildTabStyle = (on, kind, disabled) => {
      const c = kind === "axis" ? "#6cc6ff" : "#e8ff45";
      if(disabled) return {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".06em", padding:"6px 11px 7px", cursor:"pointer",
        whiteSpace:"nowrap", flex:"0 0 auto", marginBottom:"0", transform:"translateY(2px)", textTransform:"uppercase",
        clipPath:"polygon(5px 0,100% 0,100% 100%,0 100%)", background:"#0f1114", color:"#4d535c", border:"1px solid #1e2228", opacity:.55};
      return on
        ? {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".06em", padding:"6px 11px 7px", cursor:"pointer",
            whiteSpace:"nowrap", flex:"0 0 auto", marginBottom:"-1px", textTransform:"uppercase",
            clipPath:"polygon(5px 0,100% 0,100% 100%,0 100%)", background:c, color:"#0b0c0e", border:"1px solid " + c}
        : {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".06em", padding:"6px 11px 7px", cursor:"pointer",
            whiteSpace:"nowrap", flex:"0 0 auto", marginBottom:"-1px", textTransform:"uppercase",
            clipPath:"polygon(5px 0,100% 0,100% 100%,0 100%)", background:"#0f1114", color:"#8a9099", border:"1px solid #262a31"};
    };
    // Only a real, non-empty note earns the "*" and a visible caveat line — most alternates won't
    // have one. idx 0 never gets a note treatment even if data set one; it's always the default pick.
    // Holding a tab ~1s toggles it (toggleBuildDisabled) without switching to it — buildHoldRef
    // times the press, and the onClick wrapper below swallows the click that a hold's mouseup
    // still fires. Same gesture disables and re-enables; a disc-set tab also gets an Activate
    // button in the overlay over the frozen discs once it's the active, disabled one.
    const buildTabList = (entries, selectedIdx, kind, onSelect, agentName) => entries.map((b, i) => {
      const hasNote = i > 0 && !!b.note;
      const disabled = this.isBuildDisabled(agentName, kind, i);
      const title = disabled ? "Disabled — hold ~1s to re-enable."
        : hasNote ? ("* " + b.note)
        : i === 0 ? (kind === "axis" ? "Recommended stat priority." : "Primary is the one to aim for.")
        : (kind === "axis" ? "Alternative stat priority." : "Alternative disc set.");
      return {
        label: b.label + (hasNote ? " *" : ""),
        title: title,
        style: buildTabStyle(i === selectedIdx, kind, disabled),
        holdRef: this.buildHoldRef(agentName, kind, i),
        onClick: () => {
          const key = agentName + "|" + kind + "|" + i;
          if(this._holdFired[key]){ this._holdFired[key] = false; return; }
          onSelect(i);
        }
      };
    });

    // 4pc/2pc tile split — the single source of truth for both the flex ratio and the "+"
    // divider badge's position, so tuning the ratio can never leave the badge sitting off-seam.
    const P4_WEIGHT = 50, P2_WEIGHT = 50, TILE_GAP_PX = 12;
    const p4Frac = P4_WEIGHT / (P4_WEIGHT + P2_WEIGHT);
    const dividerOffsetPx = TILE_GAP_PX * (0.5 - p4Frac);
    const pairDividerLeft = "calc(" + (p4Frac * 100) + "% " + (dividerOffsetPx >= 0 ? "+ " : "- ") + Math.abs(dividerOffsetPx) + "px)";

    const buildAgentCard = a => {
      const data = this.getAgentBuilds(a);
      const bgName = a.n.replace(/ /g, "_");
      // Ignored agents switch to Name-ignored.webp when it exists, and don't swap art on hover.
      const ignored = this.rosterOf(a.n) === "off";
      const seen = this.artSeen(a.n);
      const baseFile = ignored && seen && this.artOk(bgName + "-ignored") ? bgName + "-ignored" : bgName;
      const heroArt = {
        artName: a.n,
        updatedLabel: "Updated " + (this.constructor.BUILD_UPDATED[a.n] || this.constructor.BUILD_UPDATED_DEFAULT),
        updatedTitle: "Build last checked " + (this.constructor.BUILD_UPDATED[a.n] || this.constructor.BUILD_UPDATED_DEFAULT)
          + ", based on " + this.constructor.BUILD_SOURCE + ".",
        heroArtStyle: {position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage: seen ? 'url("backgrounds/' + baseFile + '.webp")' : "none", backgroundRepeat:"no-repeat",
          backgroundSize: this.artFrame(bgName).size, backgroundPosition: this.artFrame(bgName).pos, transform: this.artFrame(bgName).transform, maskImage: this.artFrame(bgName).mask, WebkitMaskImage: this.artFrame(bgName).mask, transition:"opacity .35s ease"},
        heroHasHover: seen && !ignored && st.showMindscape && this.hoverWanted(a.n) && this.hoverArtOk(bgName) ? "1" : "0",
        heroArtHoverStyle: {position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage: seen && !ignored && st.showMindscape && this.hoverWanted(a.n) ? 'url("backgrounds/' + bgName + '-hover.webp")' : "none",
          backgroundRepeat:"no-repeat", backgroundSize: this.artFrame(bgName).size, backgroundPosition: this.artFrame(bgName).pos, transform: this.artFrame(bgName).transform, maskImage: this.artFrame(bgName).mask, WebkitMaskImage: this.artFrame(bgName).mask,
          opacity:0, transition:"opacity .35s ease"}
      };
      const setIdx = Math.min(st.selectedSet[a.n] || 0, data.sets.length - 1);
      const statIdx = Math.min(st.selectedStat[a.n] || 0, data.stats.length - 1);
      const setBuild = data.sets[setIdx];
      const statBuild = data.stats[statIdx];
      const p2List = setBuild.p2 || [];
      const p2Tile = build2pcTile(p2List);
      // A softer halo instead of a crisp ring — the glow lives on THIS outer box (no clipping),
      // while the inner box below does the actual circular crop, same split used for the disc
      // preview elsewhere. S leans warm amber now rather than the app's cooler lime-yellow accent,
      // so an S-rank card reads as its own "premium" tone instead of just reusing the UI's accent.
      const rankColor = a.r === "S" ? "#f5a623" : "#b98cff";
      return {
        ...heroArt,
        name: a.n,
        // Dialed back from the first pass: a near-solid ring (like the original) plus just one
        // modest soft halo around it, instead of a thin translucent ring with a heavy double glow.
        portraitOuterStyle: {position:"relative", width:"84px", height:"84px", flex:"0 0 84px", borderRadius:"50%",
          boxShadow:"0 0 9px 2px " + rankColor + "40"},
        portraitInnerStyle: {position:"absolute", inset:"0", borderRadius:"50%", overflow:"hidden",
          border:"2px solid " + rankColor + "d9"},
        rankIconStyle: this.iconStyle(this.rankIconPath(a.r), 15),
        roleIconStyle: this.iconStyle(this.roleIconPath(a.role), 13),
        roleText: a.role.toUpperCase(),
        hasElement: !!a.el, elIconStyle: this.iconStyle(this.elementIconPath(a.el), 13), elText: a.el.toUpperCase(),
        noAffinity: !a.el,
        // Same idea as the stat-tab row: a real choice (2+ builds) earns tabs; a single build
        // just gets a plain "Disc sets" label instead of a lone, un-switchable "Primary" tag.
        showSetTabs: data.sets.length > 1,
        showSetLabel: data.sets.length <= 1,
        setTabs: buildTabList(data.sets, setIdx, "tier", i => this.selectSet(a.n, i), a.n),
        hasSetNote: setIdx > 0 && !!setBuild.note, setNote: setIdx > 0 ? setBuild.note : "",
        // Tabs earn their keep with a real choice to make (2+ variants) — Astra Yao/Caesar/
        // Pulchra/Sunna/Yuzuha all genuinely have two (Anomaly/CRIT Build, etc); only a real
        // single-variant agent gets the plain "Main stat by slot" label instead.
        showStatTabs: data.stats.length > 1,
        showStatLabel: data.stats.length <= 1,
        statTabs: buildTabList(data.stats, statIdx, "axis", i => this.selectStat(a.n, i), a.n),
        hasStatNote: statIdx > 0 && !!statBuild.note, statNote: statIdx > 0 ? statBuild.note : "",
        mains: [
          mainRow("04", statBuild.mains.s4),
          mainRow("05", statBuild.mains.s5),
          mainRow("06", statBuild.mains.s6)
        ],
        sets: [setTile(setBuild.p4, "4pc"), p2Tile].map((s, ti) => {
          // A split tile spins two independent halves, so it needs two visual refs instead of
          // one — both land in the same visualEls slot array, indexed by half.
          const setVisualEl = (halfIdx) => (el) => {
            this._buildDiscRefs[a.n] = this._buildDiscRefs[a.n] || [];
            const prev = this._buildDiscRefs[a.n][ti] || {};
            const visualEls = (prev.visualEls || []).slice();
            visualEls[halfIdx] = el;
            this._buildDiscRefs[a.n][ti] = Object.assign({}, prev, {visualEls: visualEls});
          };
          return Object.assign(s, {
            // The 4pc is the piece that actually matters most, so it gets the larger half of the
            // row (P4_WEIGHT/P2_WEIGHT) instead of splitting evenly with the 2pc.
            tileFlex: ti === 0 ? P4_WEIGHT + " 1 0" : P2_WEIGHT + " 1 0",
            // Both tiles share the same active set build, so they share its disabled state — a
            // held-disabled disc set goes flat grey and stops spinning even on hover.
            disabledFlag: this.isBuildDisabled(a.n, "tier", setIdx) ? "1" : "0",
            slideRef: (el) => {
              this._buildDiscRefs[a.n] = this._buildDiscRefs[a.n] || [];
              this._buildDiscRefs[a.n][ti] = Object.assign({}, this._buildDiscRefs[a.n][ti], {slideEl: el});
            },
            visualRef: setVisualEl(0),
            visualRefA: setVisualEl(0),
            visualRefB: setVisualEl(1)
          });
        }),
        // The "+" divider badge sits at the seam between the two tiles, not at a flat 50% —
        // derived from the same P4_WEIGHT/P2_WEIGHT split as tileFlex above so it tracks
        // wherever that ratio ends up instead of drifting off-seam whenever it's tuned.
        pairDividerLeft: pairDividerLeft,
        hasBothSets: !!(setBuild.p4 && p2List[0]),
        activeSetDisabled: this.isBuildDisabled(a.n, "tier", setIdx),
        activateSet: () => this.toggleBuildDisabled(a.n, "tier", setIdx),
        // Hold-the-tab still works, but it isn't discoverable — nothing on screen says a tab can be
        // held. These name the action outright at the end of each tab row.
        showSetIgnore: data.sets.length > 1,
        setIgnoreLabel: this.isBuildDisabled(a.n, "tier", setIdx) ? "IGNORED" : "IGNORE",
        setIgnoreTitle: this.isBuildDisabled(a.n, "tier", setIdx)
          ? "This disc set build is ignored — discs for it won't match " + a.n + " anywhere. Click to use it again."
          : "Stop matching discs against this disc set build for " + a.n + ".",
        setIgnoreStyle: this.ignoreBtnStyle(this.isBuildDisabled(a.n, "tier", setIdx)),
        activeStatDisabled: this.isBuildDisabled(a.n, "stat", statIdx),
        showStatIgnore: data.stats.length > 1,
        statIgnoreLabel: this.isBuildDisabled(a.n, "stat", statIdx) ? "IGNORED" : "IGNORE",
        statIgnoreTitle: this.isBuildDisabled(a.n, "stat", statIdx)
          ? "This stat build is ignored — " + a.n + "'s grades won't be scored against it. Click to use it again."
          : "Stop scoring " + a.n + "'s grades against this stat build.",
        statIgnoreStyle: this.ignoreBtnStyle(this.isBuildDisabled(a.n, "stat", statIdx)),
        activateStat: () => this.toggleBuildDisabled(a.n, "stat", statIdx),
        subs: this.priorityLadder({sub: statBuild.sub, subNotes: statBuild.subNotes}),
        portraitId: "agent-" + a.n.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        portraitHint: a.n + " portrait",
        portraitSrc: this.agentIconPath(a.n),
        rosterLabel: this.rosterMeta(this.rosterOf(a.n)).label,
        rosterStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          color: this.rosterOf(a.n) === "shown" ? "#4ade80" : "#8a9099"},
        rosterToggle: this.rosterToggle(a.n),
        cardIgnoredFlag: this.rosterOf(a.n) === "off" ? "1" : "0",
        isNew: this.constructor.NEW_AGENTS.indexOf(a.n) >= 0,
        isIgnored: this.rosterOf(a.n) === "off"
      };
    };
    const agentCards = list.map(buildAgentCard);
    // the Loadouts build guide reuses the exact Agent-index card, unfiltered
    const guideAgent = st.focusAgent ? A.AGENTS.find(x => x.n === st.focusAgent) : null;
    const guideCard = guideAgent ? buildAgentCard(guideAgent) : null;

    // Picking any of these Agent-index filter chips also clears a "Show build" pin — otherwise
    // the pin's exact-name match would keep overriding the chip and the click would look inert.
    const chipGroup = (key, items, caption) => ({
      caption: caption || "",
      chips: items.map(it => ({label: it.l, style: this.segBtn(st[key] === it.v), onClick: () => this.setState({[key]: it.v, pinnedAgent: null}),
        hasIcon: !!it.role, iconStyle: it.role ? this.iconStyle(this.roleIconPath(it.role), 13) : null}))
    });

    // ----- tab 3 -----
    const agentNames = A.AGENTS.map(a => ({v: a.n, t: a.n + " (" + a.r + ")"})).sort((x, y) => x.v.localeCompare(y.v));
    const scoreFields = [
      {label:"Agent", value: st.sAgent, options: agentNames, onChange: e => this.setState({sAgent: e.target.value})},
      {label:"Disc set", value: st.sSet, options: setOptions.map(s => ({v:s, t:s})), onChange: e => this.setState({sSet: e.target.value})},
      {label:"Slot", value: st.sSlot, options: ["s1","s2","s3","s4","s5","s6"].map(k => ({v:k, t:A.SLOT_LABEL[k] + (A.FIXED_MAIN[k] ? " · " + A.FIXED_MAIN[k] : "")})),
        onChange: e => { const k = e.target.value; this.setState({sSlot: k, sMain: this.defaultMain(st.sSet, k)}); }},
      {label:"Main stat", value: st.sMain, options: this.slotOptions(st.sSlot).map(o => ({v:o, t:o})), onChange: e => this.setState({sMain: e.target.value})},
      {label:"Disc level", value: st.sLevel, options: ["0","3","6","9","12","15"].map(v => ({v:v, t:"+" + v})), onChange: e => this.setState({sLevel: e.target.value})}
    ];
    const scoreSubLines = st.sSubs.map((l, i) => ({
      num: "0" + (i + 1), value: l.t, rolls: l.r, disabled: !l.t,
      numStyle: {font:"500 13px/1 'JetBrains Mono',monospace", color: l.t ? "#e8ff45" : "#4d535c", width:"16px", flex:"0 0 16px"},
      rollStyle: {appearance:"none", width:"100%", background:"#0f1114", color: l.t ? "#ecefe6" : "#4d535c",
        border:"1px solid #2e333b", padding:"9px 8px", font:"500 17px/1.2 'JetBrains Mono',monospace",
        textAlign:"center", cursor: l.t ? "pointer" : "not-allowed", opacity: l.t ? 1 : .45},
      onChange: e => { const v = e.target.value; this.setState(s => { const n = s.sSubs.map(x => ({t:x.t, r:x.r})); n[i].t = v; if(!v) n[i].r = "1"; return {sSubs: n}; }); },
      onRolls: e => { const v = e.target.value; this.setState(s => { const n = s.sSubs.map(x => ({t:x.t, r:x.r})); n[i].r = v; return {sSubs: n}; }); }
    }));

    const scoreCard = st.sResult ? Object.assign({}, st.sResult, {
      cardStyle: {background:"#131519", border:"1px solid " + this.tone(st.sResult.tone) + "55",
        borderLeft:"5px solid " + this.tone(st.sResult.tone), padding:"20px 22px"},
      headlineStyle: {font:"700 48px/1 'Chakra Petch',sans-serif", letterSpacing:".01em",
        textTransform:"uppercase", color: this.tone(st.sResult.tone)}
    }) : {};

    // ----- loadouts -----
    const openMap = st.discDetail || {};
    const hiddenOpen = st.hiddenOpen || {};
    const floorRank = this.floorRankOf(st.gradeFloor);
    const savedDiscs = st.discs.map(d => {
      const types = d.subs.filter(Boolean);
      const cands = this.candidatesFor(d.set, d.slot, d.main, types);
      return {d: d, types: types, cands: cands, roster: cands.filter(c => this.rosterOf(c.a.n) !== "off")};
    });
    const tierTone = t => t >= 3 ? "keep" : t === 0 ? "recycle" : "maybe";
    // candidatesFor now hands over the full match shape for the variant that actually matched,
    // so the grade is the same computation Scrap or stash runs — including the real 2pc pieceRank,
    // which is what produces the "-" suffix on an alternate.
    // The vertical grade IS the grade. Once a disc has recorded upgrades, what matters is the value
    // of every allocation it has made — not just which lines it happens to hold — so that score
    // replaces the fit grade everywhere the disc appears. An untracked disc has no allocations
    // beyond its starting lines, and the vertical grade defers to the fit score there, so this
    // degrades to the old behaviour with no special-casing.
    const gradeFor = (entry, c) => {
      if(!c) return {grade:"—", color:"#5f656e"};
      const fit = this.ratingFor(Object.assign({mainName: entry.d.main}, c));
      const ticks = entry.d && entry.d.id ? (st.upgrades[entry.d.id] || {ticks: []}).ticks : [];
      if(!ticks.length) return fit;
      const v = this.verticalGrade(entry.d, c, ticks, fit.score);
      if(!v || v.pending) return fit;
      return {score: v.score, grade: v.band.grade, color: v.band.color,
        tone: fit.tone, blurb: fit.blurb, vertical: true, lvl: ticks.length * 3};
    };
    const discRow = (entry, ctx, gradeAs, offBuild) => {
      const d = entry.d;
      // Main stat and substats use the EXACT encodings from the Scrap-or-stash match rows:
      // a mono BEST/2ND/FIXED label tinted by depthTone, and a skyline whose bar height and
      // colour both carry priority rank. Same glyphs, same scale, same tooltips.
      // A tracked disc's real line-up includes anything its upgrades rolled, and how many times
      // each line has been hit is the useful part — so both are read off the resolved state
      // rather than the saved base lines.
      const upTicks = d.id ? (st.upgrades[d.id] || {ticks: []}).ticks : [];
      const upRes = this.upResolve(d, upTicks);
      const rollOf = nm => upRes.rolls[nm] || 0;
      const liveTypes = upTicks.length ? upRes.types : entry.types;
      // ctx.subs is ranked against the matched stat variant, but built from the disc's SAVED
      // lines — a tracked disc has to be described as it stands now, so re-rank the resolved ones.
      const ranked = !ctx ? []
        : (upTicks.length
            ? upRes.types.map(t => ctx.subs.find(x => x.name === t)
                || Object.assign({name: t}, this.rankIn(ctx.statVar ? ctx.statVar.sub : [], t)))
                .sort((a, b) => (a.hit === b.hit) ? (a.rank || 99) - (b.rank || 99) : (a.hit ? -1 : 1))
            : ctx.subs);
      const subHits = ranked.filter(x => x.hit);
      const skyline = ranked.map(x => ({
        height: this.skylineHeight(x.hit, x.rank) + "px",
        color: x.hit ? this.depthTone(x.rank) : "#2e333b"
      }));
      // The grade context: the row's own agent when it has one, else whoever the caller names
      // (the bay names the focused agent), else the best on the roster.
      const gCtx = ctx || gradeAs || entry.roster[0] || null;
      const homes = (entry.cands || [])
        .filter(c => this.rosterOf(c.a.n) !== "off" && !st.discHidden[this.hideKey(d.id, c.a.n)])
        .map(c => ({c: c, g: gradeFor(entry, c)}))
        .sort((x, y) => (y.g.score || 0) - (x.g.score || 0));
      const bestHome = homes[0] || null;
      const ownerHome = d.to ? homes.find(x => x.c.a.n === d.to) : null;
      // Only worth flagging when it's a different agent AND a real improvement — a tie is not a
      // reason to move a disc that's already doing its job.
      let betterElsewhere = !!(bestHome && d.to && bestHome.c.a.n !== d.to
        && this.isGraded(bestHome.g) && this.isGraded(ownerHome && ownerHome.g)
        && (bestHome.g.score || 0) > (ownerHome.g.score || 0) + 1e-9);
      // The grade says move it; the set bonuses may say otherwise. Losing a 4-piece for a one-band
      // gain is usually a bad trade, so the suggestion stands down and just notes the option.
      const moveCost = bestHome ? this.swapCost(d, bestHome.c.a.n)
        : {safe: true, breaks: [], note: ""};
      const costsBonus = betterElsewhere && !moveCost.safe;
      if(costsBonus) betterElsewhere = false;
      const freeCostsBonus = !d.to && !!bestHome && !moveCost.safe;
      const rTone = gCtx ? tierTone(gCtx.tier) : "dim";
      const grade = gradeFor(entry, gCtx);
      const dk = d.id + "|" + (ctx ? ctx.a.n : "*");
      const hitSet = new Set(entry.types);
      const offBar = {height:"5px", background:"#3f454e", opacity:.35, marginBottom:"8px"};
      const offText = {font:"400 14px/1.3 'JetBrains Mono',monospace", color:"#5f656e"};
      let plainMain = [{label: d.main || "Not recorded",
        barStyle: {height:"5px", background:"#3f454e", marginBottom:"8px"},
        textStyle: {font:"400 14px/1.3 'JetBrains Mono',monospace", color: d.main ? "#9aa0a8" : "#8a9099"}}];
      let detailSubs;
      if(ctx){
        const vSub = ctx.statVar.sub;
        detailSubs = this.checkLadder(vSub, null, hitSet, d.main);
        const onLadder = new Set(this.flattenSubLadder(vSub).map(x => x.name));
        liveTypes.filter(t => !onLadder.has(t)).forEach(t => {
          detailSubs.push({label: "✓ " + t, barStyle: offBar, textStyle: offText});
        });
      } else {
        const slotKey = (d.slot === "s4" || d.slot === "s5" || d.slot === "s6") ? d.slot : null;
        const des = this.setDesireSummary(d.set, slotKey);
        // rank -> same depth scale as "Commonly desired"; off-profile lines get a flat grey rule
        const demandRow = (name, list) => {
          const i = list.findIndex(x => x.name === name);
          const on = i >= 0;
          const n = rollOf(name);
          return {
            label: name,
            barStyle: {width:"4px", flex:"0 0 4px", height:"26px",
              background: on ? this.depthTone(i + 1) : "#3f454e", opacity: on ? 1 : .5},
            textStyle: {font:"600 14px/1.3 'JetBrains Mono',monospace",
              color: on ? "#ecefe6" : "#8a9099", minWidth:0, overflowWrap:"anywhere"},
            hasRolls: n > 0, rolls: "+" + n,
            rollStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".06em",
              marginLeft:"auto", flex:"0 0 auto", color: on ? "#4ade80" : "#8a9099"},
            rowTitle: (on ? name + " is #" + (i + 1) + " most wanted from this set."
              : name + " isn't commonly wanted from this set.")
              + (n ? " " + n + (n === 1 ? " upgrade has" : " upgrades have") + " landed on it." : "")
          };
        };
        // Ranked top-to-bottom, not in recorded order — the left-hand rule only reads as a scale
        // if the rows descend. Off-profile lines sink to the bottom.
        const demandIdx = t => { const i = des.subs.findIndex(x => x.name === t); return i < 0 ? 99 : i; };
        detailSubs = liveTypes.slice()
          .sort((a, b) => demandIdx(a) - demandIdx(b) || a.localeCompare(b))
          .map(t => demandRow(t, des.subs));
        plainMain = d.main
          ? [demandRow(d.main, slotKey ? des.mains : [])]
          : [{label:"Not recorded", rowTitle:"No main stat was recorded when this disc was saved.",
              barStyle:{width:"4px", flex:"0 0 4px", height:"26px", background:"#3f454e", opacity:.5},
              textStyle:{font:"400 14px/1.3 'JetBrains Mono',monospace", color:"#8a9099"}}];
      }
      let detailMains;
      if(ctx){
        const vMains = (ctx.statVar.mains || {})[d.slot];
        detailMains = this.checkMainLadder(vMains, ctx.isFixed, this.constructor.FIXED_MAIN[d.slot], d.main);
        const mainOn = new Set(this.flattenSubLadder(vMains || []).map(x => x.name));
        if(d.main && !ctx.isFixed && !mainOn.has(d.main)){
          detailMains.push({label: "✓ " + d.main, barStyle: offBar, textStyle: offText});
        }
      } else detailMains = plainMain;
      const owner = d.to || "";
      const mineHere = !!(ctx && owner === ctx.a.n);
      const elsewhere = !!(owner && (!ctx || owner !== ctx.a.n));
      const isHiddenHere = !!(ctx && st.discHidden[this.hideKey(d.id, ctx.a.n)]);
      const isResvHere = !!(ctx && st.discAssign[d.id] === ctx.a.n);
      // In the bay, a disc is placeable when the chosen slot is its slot and the focused agent
      // can actually use it — the second step of pick-slot-then-pick-disc.
      const bayTarget = !ctx && !!st.focusAgent && st.selSlot === d.slot
        && !!entry.cands.find(x => x.a.n === st.focusAgent);
      // Worn by someone else: shown a shade back so you can see it's committed, but selectable —
      // moving it is allowed, behind a confirm on the equip button.
      const bayLocked = !ctx && !!owner && owner !== st.focusAgent;
      const bayHiddenHere = !ctx && !!st.focusAgent && owner !== st.focusAgent
        && (!!st.discHidden[this.hideKey(d.id, st.focusAgent)]
          || (!!st.discAssign[d.id] && st.discAssign[d.id] !== st.focusAgent));
      const mainRank = ctx && !ctx.isFixed ? ctx.mainRank : 0;
      const mainOf = ctx && !ctx.isFixed ? ctx.mainOf : 0;
      // The ladder can hold ties and gap markers, so it's flattened rather than joined raw.
      const vLadder = ctx ? this.flattenSubLadder(ctx.statVar.sub).map(x => x.name).join(" > ") : "";
      return {
        title: this.discLabel(d),
        setName: d.set,
        hasBuildTag: !!(ctx && ctx.buildLabel),
        buildTag: ctx ? ctx.buildLabel : "",
        buildTagTitle: ctx && ctx.buildLabel
          ? "Matches " + ctx.a.n + "'s " + ctx.buildLabel + " build, not their primary one."
          : "",
        buildTagStyle: {font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".1em",
          textTransform:"uppercase", color:"#e8ff45", border:"1px solid #e8ff4555",
          padding:"3px 6px", whiteSpace:"nowrap", cursor:"help"},
        slotLabel: this.constructor.SLOT_LABEL[d.slot],
        mainStat: d.main || "—",
        iconSrc: this.discIconPath(d.set),
        iconId: this.discIconId(d.set),
        subs: entry.types.length ? entry.types.join(" · ") : "No substats recorded",
        hasSkyline: !!(ctx && ctx.matchCount !== null && ranked.length),
        skyline: skyline,
        skylineTitle: !entry.types.length ? "This disc was saved without any substats recorded."
          : !ctx ? "Nobody tracked wants this disc, so there is no priority list to score its substats against: " + entry.types.join(" · ")
          : ctx.matchCount === null ? "Only " + entry.types.length + " of 4 substats recorded — too few to score against " + ctx.a.n + "'s list (" + vLadder + ")."
          : subHits.length + " of " + ranked.length + " substats are on " + ctx.a.n + "'s " + (ctx.buildLabel || "Primary") + " list (" + vLadder + "); bar height is how high.",
        noSubs: !entry.types.length,
        subNote: !entry.types.length ? "No substats recorded" : entry.types.join(" · "),
        subNoteStyle: {font:"400 14px/1.3 Barlow,sans-serif", color:"#5f656e", overflow:"hidden",
          textOverflow:"ellipsis", whiteSpace:"nowrap"},
        subCountLabel: subHits.length + "/" + ranked.length,
        subCountStyle: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em", whiteSpace:"nowrap",
          color: subHits.length ? this.depthTone(subHits[0].rank) : "#5f656e", marginLeft:"5px"},
        // Per-agent context: the piece it fills, how far down their main-stat list, and the
        // substat hit count. Without context (All discs) it's roster reach instead.
        cap1: ctx ? "Piece" : "Roster",
        val1Label: ctx ? (ctx.piece === "4pc" ? "4PC" : "2PC") : String(entry.roster.length),
        val1Style: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em", whiteSpace:"nowrap",
          color: ctx ? "#ecefe6" : "#8a9099"},
        cap2: ctx ? "Main stat" : "Wanted by",
        val2Label: ctx ? (ctx.isFixed ? "FIXED" : mainRank === 1 ? "BEST" : this.ordinal(mainRank).toUpperCase())
          : String(entry.cands.length),
        cell2Title: ctx
          ? (ctx.isFixed ? "This slot's main stat is fixed."
            : d.main + " is their " + this.ordinal(mainRank) + " choice of " + mainOf + " for " + this.constructor.SLOT_LABEL[d.slot] + ".")
          : entry.cands.length + (entry.cands.length === 1 ? " agent" : " agents") + " could use this disc, none of them tracked.",
        val2Style: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em", whiteSpace:"nowrap",
          color: !ctx ? "#8a9099" : ctx.isFixed ? "#8a9099" : this.depthTone(mainRank)},
        mainStyle: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em", whiteSpace:"nowrap",
          color: ctx && ctx.isFixed ? "#8a9099" : this.depthTone(mainRank)},
        reachLabel: entry.roster.length + " on roster",
        reachStyle: this.badge(entry.roster.length ? "keep" : "recycle"),
        totalLabel: entry.cands.length + (entry.cands.length === 1 ? " agent total" : " agents total"),
        wantedBy: entry.roster.length
          ? "Roster: " + entry.roster.slice(0, 4).map(c => c.a.n).join(", ") + (entry.roster.length > 4 ? " +" + (entry.roster.length - 4) + " more" : "")
          : "Nobody on your roster wants this one.",
        edge: this.tone(rTone),
        ratingLabel: offBuild ? "F" : grade.grade,
        // The 0-100 score behind the letter, so two discs on the same grade can still be told apart.
        scoreNum: (offBuild || !(grade.score >= 0)) ? "" : String(Math.round(grade.score * 100)),
        scoreSmallStyle: {font:"600 11px/1 'JetBrains Mono',monospace", letterSpacing:".02em",
          color:"#9aa0a8", marginLeft:"4px"},
        ratingStyle: {font:"800 21px/1 'Chakra Petch',sans-serif", letterSpacing:".02em",
          color: offBuild ? "#ff4d5e" : grade.color},
        // A levelled disc's grade is a different claim from an unlevelled one's — it accounts for
        // rolls already spent — so the level is shown beside it rather than left implicit.
        isFav: !!st.discFav[d.id],
        favMark: st.discFav[d.id] ? "★" : "☆",
        favTitle: st.discFav[d.id]
          ? "Favourited. Unstar it to allow deleting."
          : "Favourite this disc — it can't be deleted while starred.",
        favStyle: {background:"none", border:"none", padding:"2px 4px", lineHeight:1,
          font:"400 19px/1 Barlow,sans-serif", cursor:"pointer",
          color: st.discFav[d.id] ? "#e8ff45" : "#4d535c", flex:"0 0 auto"},
        onFav: e => this.toggleFavDisc(d.id, e),
        isLevelled: !!grade.vertical,
        // Level reads as its own column rather than a badge on the grade — beside a letter that
        // can already carry a +/- modifier, "+6" was ambiguous.
        lvlCell: "+" + (upTicks.length * 3),
        lvlCellStyle: {font:"700 14px/1.2 'JetBrains Mono',monospace", letterSpacing:".06em",
          whiteSpace:"nowrap",
          color: upTicks.length >= A.UP_TICKS ? "#4ade80" : upTicks.length ? "#ecefe6" : "#5f656e"},
        lvlTitle: upTicks.length >= A.UP_TICKS
          ? "Fully levelled — all " + A.UP_TICKS + " upgrades recorded."
          : upTicks.length
            ? upTicks.length + " of " + A.UP_TICKS + " upgrades recorded. Open Upgrades to add the next one."
            : "No upgrades recorded yet.",
        levelLabel: upTicks.length ? "CONTINUE UPGRADING" : "UPGRADE",
        levelTitle: upTicks.length >= A.UP_TICKS
          ? "Review this disc's upgrade history."
          : "Record this disc's next upgrade in the Upgrades tab.",
        ratingTitle: ctx
          ? (grade.vertical
              ? "Grade for " + ctx.a.n + " at +" + grade.lvl + ": the value of every stat allocation this disc has made, weighted by how high each sits on their list."
              : "Fit rating for " + ctx.a.n + ": how well this piece placement, main stat and substats line up — independent of which build it's for.")
          : entry.roster.length ? (grade.vertical
              ? "Grade at +" + grade.lvl + " for " + entry.roster[0].a.n + ", the best match on your roster."
              : "Fit rating for " + entry.roster[0].a.n + ", the best match on your roster.")
          : "Nobody tracked can use this disc, so there's nothing to grade it against.",
        // Equipped-elsewhere rows stay listed but fade back, so a card still shows everything
        // that agent COULD use without pretending the disc is available.
        rowFade: elsewhere ? ".45" : "1",
        canEquip: !!ctx && !elsewhere,
        equipLabel: mineHere ? "EQUIPPED" : "EQUIP",
        equipTitle: ctx ? (mineHere ? "Click to free this disc up again." : "Mark this disc as equipped to " + ctx.a.n + ".") : "",
        equipPillStyle: {display:"flex", alignItems:"center", gap:"8px", padding:"7px 11px",
          background: mineHere ? "#e8ff450a" : "#0f1114",
          border:"1px solid " + (mineHere ? "#e8ff4540" : "#1e2228"),
          cursor: (!!ctx && !elsewhere) ? "pointer" : "default", userSelect:"none"},
        equipSwitchStyle: {position:"relative", display:"block", width:"34px", height:"18px",
          borderRadius:"9px", border:"1px solid " + (mineHere ? "#e8ff45" : "#2e333b"),
          background: mineHere ? "#e8ff45" : "#171a1f", flex:"0 0 34px", pointerEvents:"none"},
        equipTrackColor: mineHere ? "#e8ff45" : "#171a1f",
        equipThumbLeft: mineHere ? "17px" : "1px",
        equipLabelStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          whiteSpace:"nowrap", minWidth:"74px", color: mineHere ? "#e8ff45" : "#8a9099"},
        onEquip: e => { if(e) e.stopPropagation(); if(ctx) this.equipDisc(d.id, ctx.a.n); },
        // Compact form for the slot picker: the whole row equips, star and hide stay reachable.
        pickRowStyle: {display:"flex", alignItems:"center", gap:"9px", padding:"8px 10px",
          background: mineHere ? "#e8ff450f" : "#0f1114",
          border:"1px solid " + (mineHere ? "#e8ff4555" : "#1e2228"),
          cursor: elsewhere ? "not-allowed" : "pointer", width:"100%", textAlign:"left",
          opacity: elsewhere ? .6 : 1},
        pickAction: mineHere ? "EQUIPPED" : elsewhere ? "ON " + owner.toUpperCase() : "EQUIP",
        pickActionStyle: {font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          whiteSpace:"nowrap", flex:"0 0 auto", marginLeft:"auto",
          color: mineHere ? "#e8ff45" : elsewhere ? "#8a9099" : "#5f656e"},
        onPickRow: () => { if(ctx && !elsewhere) this.equipDisc(d.id, ctx.a.n); },
        thumbTitle: d.set + " · " + this.constructor.SLOT_LABEL[d.slot]
          + (d.main ? " · " + d.main : "") + " — grade " + grade.grade
          + (owner ? ", worn by " + owner + "." : ".")
          + (bayHiddenHere
              ? (st.discAssign[d.id] ? " Reserved for " + st.discAssign[d.id] + "."
                 : " Hidden for " + st.focusAgent + ".")
              : "")
          + " Click to see its lines.",
        thumbStyle: {position:"relative", display:"block", width:"100%", padding:"9px 4px 10px",
          background: st.discSel === d.id ? "#e8ff4514" : "#0f1114",
          border:"1px solid " + (st.discSel === d.id ? "#e8ff45" : "#1e2228"),
          cursor:"pointer", textAlign:"center", opacity: bayHiddenHere ? .4 : bayLocked ? .7 : 1},
        // A bay click places the disc when a slot is waiting for one; otherwise it just selects
        // it so its lines can be read.
        bayPlaces: bayTarget,
        // Selecting is not equipping: the bay only ever loads a disc into the stat panel, and
        // the EQUIP button there commits it.
        onSelThumb: () => this.setState(s2 => ({discSel: s2.discSel === d.id ? "" : d.id})),
        hasThumbOwner: !!owner,
        thumbOwnerId: owner ? "agent-" + owner.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "",
        thumbOwnerSrc: owner ? this.agentIconPath(owner) : "",
        thumbRingStyle: {display:"block", position:"relative", width:"70px", height:"70px",
          borderRadius:"50%", overflow:"hidden", background:"#171a1f", margin:"0 auto",
          boxShadow:"inset 0 0 0 1px rgba(255,255,255,.14), inset 0 0 10px rgba(0,0,0,.55)",
          outline:"2px solid " + grade.color + "99", outlineOffset:"2px"},
        thumbPiece: gCtx ? (gCtx.piece === "4pc" ? "4PC" : "2PC") : "",
        hasThumbPiece: !!gCtx,
        thumbPieceStyle: {position:"absolute", bottom:"8px", left:"7px",
          font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".06em",
          color: gCtx && gCtx.piece === "4pc" ? "#e8ff45" : "#5f656e"},
        thumbSlot: this.constructor.SLOT_LABEL[d.slot].replace(/[^0-9]/g, ""),
        thumbSlotStyle: {display:"block", font:"700 12px/1 'JetBrains Mono',monospace",
          letterSpacing:".1em", color:"#8a9099", marginBottom:"8px"},
        thumbGradeStyle: {position:"absolute", bottom:"7px", right:"7px", display:"flex", alignItems:"baseline",
          font:"800 17px/1 'Chakra Petch',sans-serif", color: offBuild ? "#ff4d5e" : grade.color},
        thumbLvlStyle: {display:"block", marginTop:"9px",
          font:"700 15px/1 'JetBrains Mono',monospace", letterSpacing:".04em",
          color: mineHere ? "#e8ff45" : "#9aa0a8"},
        thumbFavStyle: {position:"absolute", top:"5px", left:"6px",
          font:"400 15px/1 Barlow,sans-serif", color:"#e8ff45",
          display: st.discFav[d.id] ? "block" : "none"},
        hideBtnLabel: isHiddenHere ? "SHOWN" : "HIDE",
        hideBtnStyle: {background:"none", flex:"0 0 auto",
          border:"1px solid " + (isHiddenHere ? "#e8ff4540" : "#2e333b"),
          color: isHiddenHere ? "#e8ff45" : "#5f656e",
          padding:"4px 6px", font:"700 10px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          cursor: (mineHere || isResvHere) ? "not-allowed" : "pointer",
          opacity: (mineHere || isResvHere) ? .5 : 1},
        isOpen: !!openMap[dk],
        onToggleDetail: () => this.toggleDiscDetail(dk),
        detailTitle: (openMap[dk] ? "Hide" : "Show") + " this disc's stat lines",
        detailMains: detailMains,
        detailMainsCap: ctx
          ? (ctx.isFixed ? "Main stat — fixed for this slot" : "Main stat priority — ✓ is on this disc")
          : "Main stat on this disc",
        detailSubs: detailSubs, hasDetailSubs: detailSubs.length > 0,
        detailSubsCap: ctx ? "Substat priority — ✓ is on this disc" : "Substats on this disc",
        detailEmptyNote: "No substats were recorded when this disc was saved.",
        canHide: !!ctx,
        hideDisabled: mineHere || isResvHere,
        isHidden: isHiddenHere,
        hideLabel: !ctx ? "HIDE" : (isHiddenHere ? "HIDDEN FOR " : "HIDE FOR ") + ctx.a.n.toUpperCase(),
        hideTitle: !ctx ? "" : isResvHere
          ? "Reserved for " + ctx.a.n + " — turn that off before hiding it from them."
          : mineHere
          ? ctx.a.n + " is wearing this one — unequip it first to hide it."
          : st.discHidden[this.hideKey(d.id, ctx.a.n)]
          ? "Show this disc under " + ctx.a.n + " again."
          : "Hide this disc under " + ctx.a.n + " only — it stays saved and still shows for every other agent.",
        hideTrackColor: isHiddenHere ? "#e8ff45" : "#171a1f",
        hideThumbLeft: isHiddenHere ? "17px" : "1px",
        hidePillStyle: {display:"flex", alignItems:"center", gap:"8px", padding:"7px 11px",
          background: isHiddenHere ? "#e8ff450a" : "#0f1114",
          border:"1px solid " + (isHiddenHere ? "#e8ff4540" : "#1e2228"),
          cursor: (mineHere || isResvHere) ? "not-allowed" : "pointer", userSelect:"none",
          opacity: (mineHere || isResvHere) ? .55 : 1},
        hideSwitchStyle: {position:"relative", display:"block", width:"34px", height:"18px",
          borderRadius:"9px", border:"1px solid " + (isHiddenHere ? "#e8ff45" : "#2e333b"),
          background: isHiddenHere ? "#e8ff45" : "#171a1f", padding:0, flex:"0 0 34px",
          pointerEvents:"none"},
        hideLabelStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          whiteSpace:"nowrap", minWidth: ctx ? (10 + ctx.a.n.length * 9) + "px" : "62px",
          color: mineHere ? "#4d535c" : isHiddenHere ? "#e8ff45" : "#8a9099"},
        onHide: e => { if(e) e.stopPropagation(); if(ctx && !mineHere && !isResvHere) this.toggleHideDisc(d.id, ctx.a.n); },
        onHidePill: e => { if(e) e.stopPropagation(); if(ctx && !mineHere && !isResvHere) this.toggleHideDisc(d.id, ctx.a.n); },
        // Reserve: the inverse of hide. Mutually exclusive with hiding it here, since reserving a
        // disc for the agent you've just hidden it from is a contradiction.
        canAssign: !!ctx,
        isAssigned: isResvHere,
        assignLabel: !ctx ? "ONLY" : "ONLY FOR " + ctx.a.n.toUpperCase(),
        assignTitle: !ctx ? "" : isResvHere
          ? "Reserved for " + ctx.a.n + ". Turn off to let every agent who wants it see it again."
          : isHiddenHere
            ? "Unhide it for " + ctx.a.n + " first — you can't reserve a disc for an agent it's hidden from."
            : "Reserve this disc for " + ctx.a.n + " — it stays saved but disappears from every other agent.",
        assignPillStyle: {display:"flex", alignItems:"center", gap:"8px", padding:"7px 11px",
          background: isResvHere ? "#6cc6ff0a" : "#0f1114",
          border:"1px solid " + (isResvHere ? "#6cc6ff40" : "#1e2228"),
          cursor: isHiddenHere ? "not-allowed" : "pointer", userSelect:"none",
          opacity: isHiddenHere ? .55 : 1},
        assignSwitchStyle: {position:"relative", display:"block", width:"34px", height:"18px",
          borderRadius:"9px", flex:"0 0 34px", pointerEvents:"none",
          border:"1px solid " + (isResvHere ? "#6cc6ff" : "#2e333b"),
          background: isResvHere ? "#6cc6ff" : "#171a1f"},
        assignThumbLeft: isResvHere ? "17px" : "1px",
        assignLabelStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          whiteSpace:"nowrap", minWidth: ctx ? (14 + ctx.a.n.length * 9) + "px" : "62px",
          color: isHiddenHere ? "#4d535c"
            : isResvHere ? "#6cc6ff" : "#8a9099"},
        onAssignPill: e => { if(e) e.stopPropagation(); if(ctx && !isHiddenHere) this.toggleAssignDisc(d.id, ctx.a.n); },
        onEquipPill: e => { if(e) e.stopPropagation(); if(ctx && !elsewhere) this.equipDisc(d.id, ctx.a.n); },
        removeDisabled: !!owner || !!st.discFav[d.id],
        removeTitle: st.discFav[d.id]
          ? "Favourited — unstar it first to delete it."
          : owner
          ? "Equipped to " + owner + " — unequip it first to delete it."
          : "Delete this disc from Loadouts.",
        // Destructive, so it reads red and asks first. Equipped and favourited discs stay gated.
        removeStyle: (delOff => ({background: delOff ? "#171a1f" : "#ff4d5e0f",
          color: delOff ? "#4d535c" : "#ff4d5e",
          border: "1px solid " + (delOff ? "#23272e" : "#ff4d5e55"),
          padding:"8px 11px", font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          cursor: delOff ? "not-allowed" : "pointer", whiteSpace:"nowrap",
          opacity: delOff ? .55 : 1}))(!!owner || !!st.discFav[d.id]),
        onArmDelete: e => {
          if(e) e.stopPropagation();
          // The guard keys off the grade this row actually DISPLAYS, never off whether an agent
          // context happens to exist — otherwise the same disc deletes in one click in All discs
          // and asks for confirmation under an agent's card. Instant delete happens only when the
          // visible grade is literally D or F: those are judgements the app has made and shown.
          const shownRank = this.gradeRank(grade.grade);
          const shownFor = ctx ? ctx.a.n : (entry.roster[0] ? entry.roster[0].a.n : "");
          let best = null;
          entry.roster.forEach(c => {
            if(c.a.n === shownFor) return;
            const g = gradeFor(entry, c);
            const r = this.gradeRank(g.grade);
            if(!best || r > best.rank) best = {name: c.a.n, grade: g.grade, color: g.color, rank: r};
          });
          const shownGuard = shownRank < 0 || shownRank >= 2;
          const otherGuard = !!best && best.rank >= 3;
          if(!shownGuard && !otherGuard) { this.removeDisc(d.id); return; }
          const known = entry.types.length;
          const thr = this.props.substatThreshold != null ? this.props.substatThreshold : 3;
          const reasons = [];
          if(shownRank < 0){
            reasons.push(known < thr
              ? "It hasn't been graded yet — only " + known + " of 4 substats are recorded, so the app can't tell you whether it's worth keeping."
              : "Nothing on your roster can use this set, so there's no build to grade it against.");
          } else if(shownRank >= 2){
            reasons.push("It grades " + grade.grade + " for " + shownFor + ".");
          }
          if(otherGuard) reasons.push("It grades " + best.grade + " for " + best.name + ", who also wants it.");
          this.askDelete({
            id: d.id,
            label: d.set + " · " + this.constructor.SLOT_LABEL[d.slot] + " · " + (d.main || "no main stat"),
            reason: reasons.join(" "),
            grade: grade.grade,
            gradeColor: grade.color
          });
        },
        hasEquipSlot: !!ctx,
        isElsewhere: elsewhere,
        elsewhereLabel: "ON " + owner.toUpperCase(),
        elsewhereTitle: "Already equipped to " + owner + ". Unequip it there to free it up.",
        elsewhereStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
          color:"#8a9099", border:"1px dashed #2e333b", padding:"8px 9px", whiteSpace:"nowrap",
          cursor:"help", flex:"1 1 auto", minWidth:0, overflow:"hidden", textOverflow:"ellipsis",
          textAlign:"center"},
        onScan: e => { if(e) e.stopPropagation(); this.sendToScan(d, ctx ? ctx.a.n : null); },
        // My discs: the card is the master row of a master/detail pair, so clicking it opens the
        // full roster readout beside the list.
        onSelectMine: () => this.setState({mineSel: d.id, mineOthersOpen: false}),
        selectMineTitle: "See every agent who can use this disc.",
        // compact master row: disc, name, slot·main, grade over level, and the wearer's face if
        // it's on someone — everything you'd scan a rack for, at 40px
        mineRowStyle: {display:"flex", alignItems:"center", gap:"10px", width:"100%",
          padding:"10px 12px", textAlign:"left", cursor:"pointer",
          background: st.mineSel === d.id ? "#e8ff450f" : "#0f1114",
          border:"1px solid " + (st.mineSel === d.id ? "#e8ff4555" : "#1e2228")},
        rowIconId: this.discIconId(d.set) + "-minerow",
        // grid tile: big disc, grade-coloured ring, everything else in a corner
        tileStyle: {position:"relative", display:"flex", flexDirection:"column", alignItems:"center",
          gap:"8px", padding:"14px 10px 12px", minWidth:0, cursor:"pointer", textAlign:"center",
          background: st.mineSel === d.id
            ? "linear-gradient(180deg," + grade.color + "1f," + grade.color + "05)," + "#0f1114"
            : "#0f1114",
          border:"1px solid " + (st.mineSel === d.id ? grade.color + "aa" : "#1e2228"),
          boxShadow: st.mineSel === d.id ? "0 0 0 1px " + grade.color + "55" : "none"},
        tileRing: {position:"relative", display:"block", width:"96px", height:"96px", borderRadius:"50%",
          padding:"3px", boxSizing:"border-box",
          background: grade.color === "#5f656e" ? "#262a31" : grade.color + "66"},
        tileHub: this.hubPair(d.set, 90).ring,
        tileHole: this.hubPair(d.set, 90).hole,
        tileIconId: this.discIconId(d.set) + "-minetile",
        tileGradeStyle: {position:"absolute", top:"9px", right:"10px", display:"flex", alignItems:"baseline", font:"800 22px/1 'Chakra Petch',sans-serif", color: grade.color},
        tileLvlStyle: {position:"absolute", top:"12px", left:"10px", font:"700 13px/1 'JetBrains Mono',monospace",
          letterSpacing:".04em", color: upTicks.length >= 5 ? "#4ade80" : upTicks.length ? "#e8ff45" : "#8a9099"},
        rowHub: this.hubPair(d.set, 34).ring,
        rowHole: this.hubPair(d.set, 34).hole,
        isFav: !!st.discFav[d.id],
        rowGrade: grade.grade,
        rowGradeStyle: {font:"800 19px/1 'Chakra Petch',sans-serif", color: grade.color},
        rowLvl: "+" + (upTicks.length * 3),
        rowLvlStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".06em",
          color: upTicks.length >= 5 ? "#4ade80" : upTicks.length ? "#e8ff45" : "#8a9099"},
        rowOwned: !!owner,
        rowOwnerTitle: owner ? "Equipped to " + owner + "." : "",
        // the list-level answer: where this disc belongs, and whether that's where it is
        hasHint: !!bestHome && (betterElsewhere || costsBonus || !d.to),
        hintLabel: !bestHome ? ""
          : betterElsewhere ? "↑ Better on " + bestHome.c.a.n
          : costsBonus ? "Better on " + bestHome.c.a.n + ", but breaks a set"
          : freeCostsBonus ? "Best fit: " + bestHome.c.a.n + " — but breaks a set"
          : "Best fit: " + bestHome.c.a.n,
        hintStyle: {display:"block", marginTop:"5px",
          font:"500 12px/1.3 'JetBrains Mono',monospace", letterSpacing:".04em",
          whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
          color: betterElsewhere ? "#e8ff45" : (costsBonus || freeCostsBonus) ? "#8a9099" : "#6cc6ff"},
        hintTitle: !bestHome ? ""
          : costsBonus
            ? bestHome.c.a.n + " grades " + bestHome.g.grade + " for this disc, but moving it "
              + moveCost.note + " — usually not worth it. Open the comparison to decide."
          : betterElsewhere
            ? bestHome.c.a.n + " grades " + bestHome.g.grade + " for this disc"
              + (ownerHome ? ", against " + ownerHome.g.grade + " on " + d.to : "")
              + " — worth moving, and every set bonus stays intact."
            : "Nothing is wearing this disc. " + bestHome.c.a.n + " grades highest for it at "
              + bestHome.g.grade + "."
              + (freeCostsBonus ? " Equipping it " + moveCost.note + ", though." : ""),
        bestHomeName: bestHome ? bestHome.c.a.n : "",
        hasBestHome: !!bestHome,
        betterElsewhere: betterElsewhere,
        onEquipBest: e => { if(e) e.stopPropagation(); if(bestHome) this.equipDisc(d.id, bestHome.c.a.n); },
        mineCardStyle: {minWidth:0, cursor:"pointer",
          background: st.mineSel === d.id ? "#e8ff450a" : "#131519",
          border:"1px solid " + (st.mineSel === d.id ? "#e8ff4566" : "#262a31"),
          padding:"16px",
          clipPath:"polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)"},
        onRemove: e => { if(e) e.stopPropagation(); this.removeDisc(d.id); }
      };
    };
    // My discs: newest first, narrowed by set, slot and the two state toggles.
    const mineTicks = e => (st.upgrades[e.d.id] || {ticks: []}).ticks.length;
    const filteredDiscs = savedDiscs.slice().reverse().filter(e =>
      (!st.discSetFilter || e.d.set === st.discSetFilter) &&
      (!st.discSlotFilter || e.d.slot === st.discSlotFilter) &&
      (!st.mineUneq || !e.d.to) &&
      (!st.mineUnlev || mineTicks(e) < A.UP_TICKS));
    // ----- upgrades -----
    // Only built when the tab is actually open. Every entry here runs candidatesFor — a full walk
    // over each agent x set-variant x stat-variant — and then grades every candidate it returns, so
    // computing it for six discs on every render of every other tab locks the main thread.
    const onUpTab = st.tab === "score";
    let upList = [], up = null, upMaxed = 0;
    if(onUpTab){
      // The grade is judged against the agent this disc is genuinely best for: score the grades
      // rather than trusting the coarse tier sort, skip anyone it's hidden for, and prefer whoever
      // has it equipped. `preCands` is savedDiscs' own candidate list, reused whenever the disc's
      // lines haven't changed — which is every disc with no ticks recorded.
      const upGradeOf = (disc, subsNow, preCands, ticksOverride) => {
        const types = subsNow.filter(Boolean);
        const all = preCands || this.candidatesFor(disc.set, disc.slot, disc.main, types);
        if(!all.length) return {grade: {grade:"—", color:"#5f656e", score:-1}, cand: null};
        const scored = all.map(c => ({c: c, g: gradeFor({d: disc, types: types}, c, ticksOverride)}));
        const eligible = scored.filter(x => this.rosterOf(x.c.a.n) !== "off"
          && !st.discHidden[this.hideKey(disc.id, x.c.a.n)]);
        const picked = st.upAgent ? scored.find(x => x.c.a.n === st.upAgent) : null;
        const owner = disc.to ? scored.find(x => x.c.a.n === disc.to) : null;
        const best = picked || owner
          || eligible.slice().sort((x, y) => (y.g.score || 0) - (x.g.score || 0))[0];
        if(!best) return {grade: {grade:"—", color:"#5f656e", score:-1}, cand: null, options: []};
        const offer = eligible.slice();
        [picked, owner].forEach(x => { if(x && offer.indexOf(x) < 0) offer.push(x); });
        return {grade: best.g, cand: best.c, isOwner: !picked && !!owner, isPicked: !!picked,
          options: offer.map(x => ({name: x.c.a.n, grade: x.g.grade}))};
      };
      const sameLines = (a1, a2) => a1.filter(Boolean).join("|") === a2.filter(Boolean).join("|");

      const upAll = savedDiscs.map(e => ({
        e: e, ticks: (st.upgrades[e.d.id] || {ticks: []}).ticks
      }));
      upMaxed = upAll.filter(x => x.ticks.length >= A.UP_TICKS).length;
      // A collection fills up with finished discs that need nothing from you, so they fold away;
      // the set filter mirrors the one in Loadouts' All discs.
      upList = upAll.filter(x => x.e.d.id === st.upSel || (
        (!st.upSetFilter || x.e.d.set === st.upSetFilter) &&
        (!st.upSlotFilter || x.e.d.slot === st.upSlotFilter) &&
        (!st.upHideMaxed || x.ticks.length < A.UP_TICKS)
      )).map(x => x.e).map(e => {
        const ticks = (st.upgrades[e.d.id] || {ticks: []}).ticks;
        const r = this.upResolve(e.d, ticks);
        const pre = sameLines(r.subs, e.d.subs || []) ? e.cands : null;
        const g = upGradeOf(e.d, r.subs, pre).grade;
        const on = st.upSel === e.d.id;
        return {
          id: e.d.id, setName: e.d.set, slotLabel: A.SLOT_LABEL[e.d.slot],
          lvl: "+" + (ticks.length * 3), grade: g.grade,
          gradeStyle: {font:"800 19px/1 'Chakra Petch',sans-serif", color: g.color, flex:"0 0 auto"},
          iconSrc: this.discIconPath(e.d.set), iconId: this.discIconId(e.d.set) + "-up",
          hasOwner: !!e.d.to,
          ownerId: e.d.to ? "agent-" + e.d.to.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "",
          ownerSrc: e.d.to ? this.agentIconPath(e.d.to) : "",
          ownerTitle: e.d.to ? "Equipped to " + e.d.to + "." : "",
          rowStyle: {display:"flex", alignItems:"center", gap:"10px", padding:"10px 12px",
            background: on ? "#e8ff450f" : "#0f1114",
            border:"1px solid " + (on ? "#e8ff4555" : "#1e2228"),
            cursor:"pointer", textAlign:"left", width:"100%"},
          lvlStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".06em",
            color: ticks.length >= A.UP_TICKS ? "#4ade80" : "#8a9099", flex:"0 0 auto"},
          onClick: () => this.setState({upSel: e.d.id, upAgent: ""})
        };
      });

      const upEntry = savedDiscs.find(e => e.d.id === st.upSel) || null;
      if(upEntry){
        const disc = upEntry.d;
        const ticks = (st.upgrades[disc.id] || {ticks: []}).ticks;
        const r = this.upResolve(disc, ticks);
        const now = upGradeOf(disc, r.subs, sameLines(r.subs, disc.subs || []) ? upEntry.cands : null);
        const cand = now.cand;
        const start = upGradeOf(disc, (disc.subs || []).slice(), upEntry.cands, []);
        const wanted = cand && cand.statVar ? this.flattenSubLadder(cand.statVar.sub) : [];
        const wantedNames = wanted.map(x => x.name).filter(n => n !== disc.main);
        const hitTicks = ticks.filter(t => wantedNames.indexOf(t) >= 0).length;
        const left = A.UP_TICKS - ticks.length;
        const ungraded = (now.grade.score == null ? now.grade.grade === "—" : now.grade.score < 0);
        const needSubs = (this.props.substatThreshold != null ? this.props.substatThreshold : 3) - r.types.length;
        const vg = this.verticalGrade(disc, cand, ticks, now.grade.score);
        // Levelling cost climbs steeply: a wasted roll at +12 costs far more than one at +3, so the
        // early ticks are the cheap information you get before the expensive commitment starts.
        const earlyN = Math.min(3, ticks.length);
        const earlyMiss = ticks.slice(0, earlyN).filter(t => wantedNames.indexOf(t) < 0).length;
        // Once even a flawless run of remaining rolls can't clear the B band, the disc has no path
        // to being worth a slot — that's a discard, not a "maybe".
        const ceilDead = !!(vg && !vg.pending && vg.ceil < .60);
        const self = this;
        const advice = (function(){
          if(ungraded && cand) return {tone:"info", head:"NEEDS MORE INFO",
            body:"Only " + r.types.length + " substat" + (r.types.length === 1 ? " is" : "s are") + " recorded, which isn't enough to grade this disc. Its next upgrade fills another line — record that and a grade appears."};
          if(!cand) return {tone:"info", head:"NO ONE TO JUDGE IT BY",
            body:"Nobody tracked wants this disc, so there's no list to score its rolls against."};
          if(vg && !vg.pending && vg.floor >= .90) return {tone:"go", head:"ALREADY BANKED",
            body:"Even if every remaining roll misses, this disc stays " + vg.floorBand.grade
              + " for " + cand.a.n + ". Nothing left to risk — anything more is upside."};
          if(vg && !vg.pending && vg.floor >= .72) return {tone:"go", head:"SECURED",
            body:"The worst this can finish is " + vg.floorBand.grade + ", so it's already worth a slot"
              + (vg.ceilBand.grade !== vg.floorBand.grade ? " — and still reaches " + vg.ceilBand.grade + " if the rolls land." : ".")};
          if(ceilDead) return {tone:"stop", head:"DISCARD IT",
            body:"Even if every remaining roll lands perfectly this finishes at " + vg.ceilBand.grade
              + ". There's no path to a disc worth a slot, and levelling only gets more expensive from here — feed the materials to something else."};
          if(!ticks.length) return {tone:"info", head:"READY TO TRACK",
            body:"Nothing rolled yet. Record each upgrade as it lands and both grades move with it."};
          if(!left) return {tone: hitTicks >= 3 ? "go" : hitTicks ? "info" : "stop",
            head:"FINISHED", body: hitTicks + " of " + A.UP_TICKS + " upgrades landed on a line " + cand.a.n + " wants. It is what it is now."};
          // Mid-levelling advice follows the odds of how it finishes from here, not a raw hit count —
          // a hit on the agent's 5th line isn't worth the same as one on their 1st, and a slow start
          // on a disc with plenty of room left isn't a reason to quit.
          const ol = self.outlook(disc, cand, ticks);
          if(ol){
            const ceilG = ol.ceilBand.grade;
            const cheapMissed = earlyN >= 2 && earlyMiss === earlyN;
            if(ol.pGood < .15 || (cheapMissed && ol.pGood < .3)) return {tone:"stop", head:"CUT IT LOOSE",
              body: (cheapMissed ? "The first " + earlyN + " upgrades missed, and those were the cheap ones. " : "")
                + "Finishing at B or better now needs very lucky rolls, and every level from here costs more than the last."};
            if(cheapMissed) return {tone:"warn", head:"GOING BADLY",
              body:"The first " + earlyN + " upgrades missed, and those were the cheap ones. With luck it still reaches "
                + ol.luckyBand.grade + ", but only keep going if you're happy paying full price for the same chance."};
            if(ol.pGood < .4) return {tone:"warn", head:"GOING BADLY",
              body:"With good luck it still reaches " + ol.luckyBand.grade + ", but most ways the remaining " + left + (left === 1 ? " upgrade goes" : " upgrades go")
                + " leave it below B. Only keep going if you're happy paying for a long shot."};
            if(ol.pGood >= .7) return {tone:"go", head:"ON TRACK",
              body:"Most ways the remaining " + left + (left === 1 ? " upgrade goes" : " upgrades go") + ", this finishes at B or better for " + cand.a.n + ". Keep going."};
            if(hitTicks === 0) return {tone:"warn", head:"FIRST ONE MISSED",
              body:"The opening upgrade didn't land on a line " + cand.a.n + " wants. It's still cheap at this level, so one more is a fair gamble — but two misses in a row is the point to walk away."};
            return {tone:"info", head:"COULD GO EITHER WAY",
              body: hitTicks + " of " + ticks.length + (ticks.length === 1 ? " has" : " have")
                + " landed well so far. If the next ones go well it reaches " + ol.luckyBand.grade + ", and the next upgrade or two decide it."};
          }
          if(hitTicks === ticks.length) return {tone:"go", head:"KEEP GOING",
            body:"Every upgrade has landed on a line " + cand.a.n + " wants."};
          return {tone:"info", head:"MIXED",
            body: hitTicks + " of " + ticks.length + (ticks.length === 1 ? " has" : " have")
              + " landed well. Worth continuing while the good lines keep coming."};
        })();
        const adviceTone = {stop:"#ff4d5e", warn:"#e8ff45", go:"#4ade80", info:"#8a9099"}[advice.tone];
        // Lines the next tick could land on: the four it already has, plus — while a slot is still
        // empty — every substat the disc could still roll (never its own main stat).
        const openSlot = r.subs.indexOf("") >= 0;
        const pool = openSlot
          ? A.SUBSTAT_ORDER.filter(n => n !== disc.main && r.subs.indexOf(n) < 0)
          : r.subs.filter(Boolean);
        up = {
          setName: disc.set, slotLabel: A.SLOT_LABEL[disc.slot], mainStat: disc.main || "—",
          iconSrc: this.discIconPath(disc.set), iconId: this.discIconId(disc.set) + "-upmain",
          grade: now.grade.grade,
          gradeStyle: {font:"800 52px/1 'Chakra Petch',sans-serif", color: now.grade.color},
          startGrade: start.grade.grade,
          movedLabel: ungraded
            ? "needs " + (needSubs > 0 ? needSubs : 1) + " more substat" + ((needSubs > 1) ? "s" : "")
            : start.grade.grade === now.grade.grade ? "unchanged from " + start.grade.grade
            : start.grade.grade + " → " + now.grade.grade,
          lvl: "+" + (ticks.length * 3), lvlNum: ticks.length * 3,
          agentName: cand ? cand.a.n : "",
          hasAgent: !!cand,
          agentLine: cand ? cand.a.n + " · " + (cand.buildLabel || "Primary") : "",
          agentOptions: (now.options || []).map(o => ({
            v: o.name, t: o.name + " · " + o.grade
          })),
          hasAgentChoice: (now.options || []).length > 1,
          agentValue: cand ? cand.a.n : "",
          canEquip: !!cand,
          equipOn: !!cand && disc.to === cand.a.n,
          equipLabel: !cand ? "" : (disc.to === cand.a.n ? "EQUIPPED" : "EQUIP"),
          equipTitle: !cand ? "" : disc.to === cand.a.n
            ? cand.a.n + " is wearing this disc. Switch off to take it back out."
            : disc.to
              ? "Move this disc to " + cand.a.n + " — it comes off " + disc.to
                + ", and anything already in their " + A.SLOT_LABEL[disc.slot] + " comes off too."
              : "Equip this disc on " + cand.a.n + ". Anything already in their "
                + A.SLOT_LABEL[disc.slot] + " comes off.",
          equipPillStyle: {display:"flex", alignItems:"center", gap:"7px", padding:"4px 9px",
            background: (!!cand && disc.to === cand.a.n) ? "#e8ff450a" : "#0f1114",
            border:"1px solid " + ((!!cand && disc.to === cand.a.n) ? "#e8ff4540" : "#2e333b"),
            cursor:"pointer", userSelect:"none"},
          equipSwitchStyle: {position:"relative", display:"block", width:"28px", height:"15px",
            borderRadius:"8px", flex:"0 0 28px", pointerEvents:"none",
            border:"1px solid " + ((!!cand && disc.to === cand.a.n) ? "#e8ff45" : "#2e333b"),
            background: (!!cand && disc.to === cand.a.n) ? "#e8ff45" : "#171a1f"},
          equipThumbLeft: (!!cand && disc.to === cand.a.n) ? "14px" : "1px",
          equipLabelStyle: {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".07em",
            whiteSpace:"nowrap", minWidth:"66px",
            color: (!!cand && disc.to === cand.a.n) ? "#e8ff45" : "#8a9099"},
          onEquip: () => cand && this.equipDisc(disc.id, cand.a.n),
          onAgentChange: e => this.setState({upAgent: e.target.value}),
          agentSelectStyle: {appearance:"none", background:"#0f1114",
            color: now.isPicked ? "#e8ff45" : "#8a9099",
            border:"1px solid " + (now.isPicked ? "#e8ff4555" : "#2e333b"),
            padding:"5px 24px 5px 8px", font:"500 14px/1.2 'JetBrains Mono',monospace",
            letterSpacing:".04em", cursor:"pointer", maxWidth:"220px", minWidth:0},
          agentWhy: !cand ? "" : now.isPicked
            ? "You picked " + cand.a.n + " yourself. Switch back to see whoever this disc suits best."
            : now.isOwner
            ? "This disc is equipped to " + cand.a.n + ", so it's graded against that build."
            : ungraded
              ? "Not enough substats recorded to grade this disc yet, so this is just the agent it fits best on paper."
              : "Of everyone tracked who can use this disc, " + cand.a.n + " grades highest for it.",
          portraitId: cand ? "agent-" + cand.a.n.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "",
          portraitSrc: cand ? this.agentIconPath(cand.a.n) : "",
          // level track: one pip per tick, filled as they land
          pips: [0,1,2,3,4].map(i => {
            const done = i < ticks.length;
            const stat = done ? ticks[i] : "";
            const good = done && wantedNames.indexOf(stat) >= 0;
            return {
              label: "+" + ((i + 1) * 3),
              stat: done ? stat : "—",
              title: done ? "Level +" + ((i+1)*3) + ": " + stat + (good ? " — on their list." : " — not a line they want.")
                : "Level +" + ((i+1)*3) + " hasn't been rolled yet.",
              cellStyle: {flex:"1 1 0", minWidth:0, padding:"9px 8px", textAlign:"center",
                background: done ? (good ? "#4ade8014" : "#ff4d5e10") : "transparent",
                border:"1px " + (done ? "solid " + (good ? "#4ade8055" : "#ff4d5e44") : "dashed #262a31"),
                cursor:"help"},
              capStyle: {display:"block", font:"700 9px/1 'JetBrains Mono',monospace",
                letterSpacing:".1em", color:"#5f656e"},
              statStyle: {display:"block", marginTop:"5px", font:"600 13px/1.2 Barlow,sans-serif",
                color: done ? (good ? "#4ade80" : "#8a9099") : "#3f454e",
                overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}
            };
          }),
          // the disc's current lines, with how many ticks each has taken
          ...(() => {
            const base = (disc.subs || []).filter(Boolean);
            const needFourth = base.length === 3;
            const fourth = needFourth ? (r.subs[3] || "") : "";
            const taken = base.concat(fourth ? [fourth] : []);
            return {
              hasFourthPick: needFourth && !fourth,
              fourthOptions: A.SUBSTAT_ORDER.filter(n => n !== disc.main && base.indexOf(n) < 0),
              fourthValue: fourth,
              onFourth: e => this.upSetFourth(disc.id, base, e.target.value),
              fourthNote: needFourth && !fourth
                ? "This disc started with 3 substats. Its first upgrade at +3 adds the fourth — pick it to start counting rolls."
                : "",
              stepHint: needFourth && !fourth ? "" : "Copy the +1 / +2 markers from your disc",
              lineSteppers: taken.map((name, li) => {
                const rank = this.rankIn(cand ? cand.statVar.sub : [], name);
                const on = cand && rank.hit && name !== disc.main;
                const n = r.rolls[name] || 0;
                const canInc = left > 0 && !(needFourth && !fourth);
                const btn = ok => ({width:"32px", height:"30px", flex:"0 0 32px", padding:0,
                  font:"700 16px/1 'JetBrains Mono',monospace", cursor: ok ? "pointer" : "not-allowed",
                  background:"#171a1f", color: ok ? "#ecefe6" : "#3f454e",
                  border:"1px solid " + (ok ? "#2e333b" : "#1e2228")});
                return {
                  name: name,
                  isFourth: needFourth && li === 3,
                  isPlain: !(needFourth && li === 3),
                  fourthTag: needFourth && li === 3 ? "added at +3" : "",
                  count: "+" + n,
                  countStyle: {width:"34px", textAlign:"center", flex:"0 0 34px",
                    font:"700 15px/1 'JetBrains Mono',monospace",
                    color: n ? (on ? "#4ade80" : "#ecefe6") : "#5f656e"},
                  barStyle: {width:"4px", flex:"0 0 4px", height:"28px",
                    background: on ? this.depthTone(rank.rank) : "#3f454e", opacity: on ? 1 : .5},
                  nameStyle: {font:"600 15px/1.3 Barlow,sans-serif", flex:"1", minWidth:0,
                    color: on ? "#ecefe6" : "#8a9099"},
                  title: !cand ? name : on ? name + " is #" + rank.rank + " on " + cand.a.n + "'s list."
                    : name + " isn't on " + cand.a.n + "'s list.",
                  decStyle: btn(n > 0), incStyle: btn(canInc),
                  decDisabled: n <= 0, incDisabled: !canInc,
                  onDec: () => { if(n > 0) this.upDec(disc.id, name); },
                  onInc: () => { if(canInc) this.upRecord(disc.id, name); }
                };
              })
            };
          })(),
          lines: r.subs.filter(Boolean).map(name => {
            const rank = this.rankIn(cand ? cand.statVar.sub : [], name);
            const on = cand && rank.hit && name !== disc.main;
            const n = r.rolls[name] || 0;
            return {
              name: name, rolls: n ? "+" + n : "",
              barStyle: {width:"4px", flex:"0 0 4px", height:"28px",
                background: on ? this.depthTone(rank.rank) : "#3f454e", opacity: on ? 1 : .5},
              nameStyle: {font:"600 15px/1.3 Barlow,sans-serif", flex:"1", minWidth:0,
                color: on ? "#ecefe6" : "#8a9099"},
              rollStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".06em",
                color: n ? (on ? "#4ade80" : "#8a9099") : "#3f454e", flex:"0 0 auto"},
              title: !cand ? name : on ? name + " is #" + rank.rank + " on " + cand.a.n + "'s list."
                : name + " isn't on " + cand.a.n + "'s list.",
              // tap the line the upgrade landed on — only once all four lines exist
              canRollHere: left > 0 && !openSlot,
              rollBtnStyle: {flex:"0 0 auto", height:"30px", padding:"0 12px", cursor:"pointer", whiteSpace:"nowrap",
                font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
                background: on ? "#4ade8014" : "#171a1f", color: on ? "#4ade80" : "#9aa0a8",
                border:"1px solid " + (on ? "#4ade8055" : "#2e333b")},
              onRoll: () => this.upRecord(disc.id, name)
            };
          }),
          openPool: left > 0 && openSlot,
          heroHubRing: this.hubPair(disc.set, 92).ring,
          heroHubHole: this.hubPair(disc.set, 92).hole,
          // one button per line the next tick could land on
          canRoll: left > 0,
          rollPrompt: openSlot
            ? "This disc still has a line to fill, so this upgrade rolls its fourth substat. Which one came up?"
            : "Which line did it land on?",
          rollButtons: pool.map(name => {
            const rank = this.rankIn(cand ? cand.statVar.sub : [], name);
            const on = cand && rank.hit && name !== disc.main;
            const isNew = r.subs.indexOf(name) < 0;
            return {
              label: name + (isNew ? " ＋" : ""),
              title: isNew ? "Roll " + name + " as this disc's fourth line."
                : "Record this upgrade landing on " + name + ".",
              style: {padding:"9px 11px", textAlign:"left",
                background: on ? "#4ade8010" : "#171a1f",
                border:"1px solid " + (on ? "#4ade8044" : "#2e333b"),
                color: on ? "#4ade80" : "#9aa0a8",
                font:"600 14px/1.2 Barlow,sans-serif", cursor:"pointer"},
              onClick: () => this.upRecord(disc.id, name)
            };
          }),
          left: left,
          leftLabel: left ? left + (left === 1 ? " upgrade left" : " upgrades left") : "Fully levelled",
          // the honest read: how the rolls are landing, and whether to keep spending on it
            tallyLabel: !ticks.length ? "no upgrades yet"
            : hitTicks + " of " + ticks.length + (ticks.length === 1 ? " upgrade" : " upgrades") + " landed well",
          verdict: advice.body,
          adviceHead: advice.head,
          adviceHeadStyle: {font:"700 17px/1 'Chakra Petch',sans-serif", letterSpacing:".05em",
            textTransform:"uppercase", color: adviceTone, whiteSpace:"nowrap"},
          adviceBarStyle: {width:"4px", flex:"0 0 4px", alignSelf:"stretch", background: adviceTone},
          isStop: advice.tone === "stop",
          verdictStyle: {font:"400 17px/1.5 Barlow,sans-serif", color:"#9aa0a8", margin:"0"},
          // vertical grade — the value of every allocation, not just which lines are present
          vert: (function(self){
            const v = self.verticalGrade(disc, cand, ticks, now.grade.score);
            if(!v) return {has: false};
            // Same abstention the fit grade makes: below the substat threshold there is nothing
            // honest to grade, so the panel states the blocker instead of computing a harsh letter
            // off incomplete data entry.
            if(v.pending) return {
              has: true, isPending: true, isGraded: false,
              grade: "—",
              gradeStyle: {font:"800 44px/1 'Chakra Petch',sans-serif", color:"#5f656e"},
              pct: "",
              forLabel: "for " + cand.a.n,
              spentLabel: v.spent + "/" + v.maxAlloc + " allocated",
              note: "Only " + v.spent + " line" + (v.spent === 1 ? " is" : "s are")
                + " recorded, so there's nothing to score yet. Fill in "
                + v.need + " more, or record the next upgrade, and this grade appears.",
              title: "Scores every stat allocation this disc makes, weighted by how high each sits"
                + " on " + cand.a.n + "'s list. It needs at least "
                + (v.spent + v.need) + " known lines before that means anything."
            };
            const pct = Math.round(v.score * 100);
            return {
              has: true, isPending: false, isGraded: true,
              grade: v.band.grade,
              gradeStyle: {font:"800 44px/1 'Chakra Petch',sans-serif", color: v.band.color},
              pct: pct + "%",
              barFill: {height:"100%", width: Math.max(2, Math.round(v.banked * 100)) + "%",
                background: v.band.color, transition:"width .25s ease"},
              ceilFill: {position:"absolute", top:0, bottom:0,
                left: Math.max(2, Math.round(v.banked * 100)) + "%",
                width: Math.max(0, Math.round((v.ceil - v.banked) * 100)) + "%",
                background: v.ceilBand.color, opacity:.22},
              spentLabel: v.spent + "/" + v.maxAlloc + " allocated",
            forLabel: "for " + cand.a.n,
              hitsLabel: v.hits + " of " + v.spent + (v.spent === 1 ? " allocation" : " allocations") + " landed well · " + v.targetHits + " is a full share",
              ceilLabel: v.remaining ? "Ceiling " + v.ceilBand.grade : "Final",
              ceilStyle: {font:"700 15px/1 'Chakra Petch',sans-serif", color: v.ceilBand.color},
              floorLabel: v.remaining ? "Floor " + v.floorBand.grade : "",
              floorStyle: {font:"700 15px/1 'Chakra Petch',sans-serif", color: v.floorBand.color},
              hasRange: v.remaining > 0,
              note: v.remaining === 0
                ? "Every allocation is spent. This is the disc's final vertical grade."
                : v.ceilBand.grade === v.floorBand.grade
                  ? "The band is settled at " + v.floorBand.grade + " — the last "
                    + v.remaining + (v.remaining === 1 ? " roll" : " rolls") + " can only move it within that."
                  : "If every remaining roll lands perfectly it finishes " + v.ceilBand.grade + "; if they all miss, " + v.floorBand.grade + ".",
              title: "Scores every stat allocation this disc makes — its "
                + (disc.subs || []).filter(Boolean).length + " starting lines plus " + A.UP_TICKS
                + " upgrades — weighted by how high each sits on " + cand.a.n + "'s list. A well-geared"
                + " agent needs roughly " + (v.targetHits * 5) + "-" + (v.targetHits * 6)
                + " good rolls across six discs, so about " + v.targetHits
                + " on this one is a full share and earns an S."
            };
          })(this),
          undoStyle: {background:"#171a1f", color: ticks.length ? "#9aa0a8" : "#4d535c",
            border:"1px solid " + (ticks.length ? "#2e333b" : "#23272e"),
            height:"34px", padding:"0 13px", whiteSpace:"nowrap", font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
            cursor: ticks.length ? "pointer" : "not-allowed", opacity: ticks.length ? 1 : .55},
          undoTitle: ticks.length ? "Remove the last upgrade you recorded." : "Nothing recorded yet.",
          // Scrap-or-stash saves a disc on its way here so the tracker has a stable id to hang
          // history on, which makes it easy to accumulate discs you only meant to look at. This is
          // the fast way back out. The confirm keys off the CEILING, not the current grade — a
          // fresh disc grades low but may still be headed somewhere — so it only deletes outright
          // when the app has already told you to bin it AND nothing better is reachable.
          onDelete: () => {
            const ceilRank = vg && !vg.pending ? this.gradeRank(vg.ceilBand.grade) : -1;
            if(advice.tone === "stop" && ceilRank >= 0 && ceilRank <= 2){ this.removeDisc(disc.id); return; }
            const reasons = [];
            if(ceilRank < 0) reasons.push("It hasn't been graded yet, so the app can't tell you whether it's worth keeping.");
            else if(ceilRank > 2) reasons.push("It can still finish " + vg.ceilBand.grade
              + " for " + cand.a.n + (left ? " with its remaining " + left + (left === 1 ? " roll." : " rolls.") : "."));
            if(advice.tone !== "stop") reasons.push("Nothing so far says to give up on it.");
            if(ticks.length) reasons.push(ticks.length + (ticks.length === 1 ? " upgrade is" : " upgrades are") + " recorded against it — that history goes too.");
            this.askDelete({
              id: disc.id,
              label: disc.set + " · " + A.SLOT_LABEL[disc.slot] + (disc.main ? " · " + disc.main : ""),
              reason: reasons.join(" "),
              grade: now.grade.grade, gradeColor: now.grade.color
            });
          },
          deleteDisabled: !!st.discFav[disc.id],
          deleteStyle: (off => ({background: off ? "#171a1f" : "#ff4d5e14",
            color: off ? "#4d535c" : "#ff4d5e",
            border: "1px solid " + (off ? "#23272e" : "#ff4d5e55"),
            height:"34px", padding:"0 13px", font:"700 12px/1 'JetBrains Mono',monospace",
            letterSpacing:".08em", whiteSpace:"nowrap",
            cursor: off ? "not-allowed" : "pointer", opacity: off ? .55 : 1}))(!!st.discFav[disc.id]),
          deleteTitle: st.discFav[disc.id]
            ? "Favourited — unstar it in Loadouts first."
            : "Delete this disc and its upgrade history.",
          onUndo: () => this.upUndo(disc.id),
          onReset: () => this.upReset(disc.id),
          canUndo: ticks.length > 0
        };
        }
      }
    // The bay is the page-level selector: every saved disc, optionally narrowed to one slot.
    // It is built once rather than per agent, which is the point — it isn't part of any one rig.
    // The floor is measured against the grade this disc earns for the agent you're fitting, not
    // its best grade anywhere — that's the number the bay is showing you.
    const bayFloorRank = this.floorRankOf(st.bayFloor);
    const focusCand = e => (st.focusAgent ? e.cands.find(x => x.a.n === st.focusAgent) : null) || null;
    const bayGradeFor = e => this.gradeRank(gradeFor(e, focusCand(e) || e.roster[0] || e.cands[0]).grade);
    // Hidden here, or reserved for someone else — out of the bay unless the agent's own
    // "Show hidden discs" switch is on. A disc they're already wearing always stays visible.
    const bayBuried = e => !!st.focusAgent && e.d.to !== st.focusAgent
      && (!!st.discHidden[this.hideKey(e.d.id, st.focusAgent)]
        || (!!st.discAssign[e.d.id] && st.discAssign[e.d.id] !== st.focusAgent));
    const bayList = savedDiscs
      .filter(e => (st.bayAll && st.selSlot) || !st.focusAgent || e.d.to === st.focusAgent || this.fitsSettings(e, st.focusAgent))
      .filter(e => (st.bayAll && st.selSlot) || hiddenOpen[st.focusAgent] || !bayBuried(e))
      .filter(e => !st.selSlot || e.d.slot === st.selSlot)
      .filter(e => st.bayShowWorn || !st.focusAgent || !e.d.to || e.d.to === st.focusAgent)
      .filter(e => st.bayFloor === "all" || bayGradeFor(e) >= bayFloorRank)
      .slice()
      // best grade first, then most levelled, then slot / set for a stable order
      .map(e => ({e: e, g: bayGradeFor(e), l: ((st.upgrades[e.d.id] || {ticks: []}).ticks.length)}))
      .sort((x, y) => (y.g - x.g) || (y.l - x.l) || x.e.d.slot.localeCompare(y.e.d.slot)
        || x.e.d.set.localeCompare(y.e.d.set) || String(x.e.d.id).localeCompare(String(y.e.d.id)))
      .map(x => discRow(x.e, null, focusCand(x.e), !!st.focusAgent && !focusCand(x.e)));
    const selEntry = st.discSel ? savedDiscs.find(e => e.d.id === st.discSel) : null;
    const selDisc = selEntry ? (function(self){
      const d = selEntry.d;
      const row = discRow(selEntry, null, focusCand(selEntry), !!st.focusAgent && !focusCand(selEntry));
      const ticks = (st.upgrades[d.id] || {ticks: []}).ticks;
      // Who it's graded against: its wearer if it has one, else the tracked agent it suits best.
      const allScored = selEntry.cands.map(c => ({c: c, g: gradeFor(selEntry, c)}));
      const scored = allScored.filter(x => self.rosterOf(x.c.a.n) !== "off"
        && !st.discHidden[self.hideKey(d.id, x.c.a.n)]);
      // In focus mode the panel speaks about the agent you're fitting, so it leads with them
      // rather than the disc's owner or its best match elsewhere. Both are explicit choices, so
      // they're looked up across every candidate rather than the filtered set.
      const inFocus = st.focusAgent ? allScored.find(x => x.c.a.n === st.focusAgent) : null;
      const owner = d.to ? allScored.find(x => x.c.a.n === d.to) : null;
      const offBuild = !!st.focusAgent && !inFocus;
      const best = inFocus || (offBuild ? null : owner) || (offBuild ? null
        : scored.slice().sort((x, y) => (y.g.score || 0) - (x.g.score || 0))[0]);
      // Stat context: the matched build when there is one, otherwise the focused agent's own
      // primary stat variant — which exists independently of any disc set.
      const offAgent = offBuild ? A.AGENTS.find(x => x.n === st.focusAgent) : null;
      const offVar = offAgent ? (self.getActiveBuilds(offAgent).stats || [])[0] : null;
      const statCtx = best ? best.c
        : offAgent ? {a: offAgent, statVar: offVar || {sub: []},
            isFixed: !!A.FIXED_MAIN[d.slot],
            mains: (offVar && offVar.mains) || null}
        : null;
      const wanted = statCtx && statCtx.statVar ? self.flattenSubLadder(statCtx.statVar.sub || []) : [];
      const res = self.upResolve(d, ticks);
      const line = (name, isMain) => {
        const hit = wanted.find(w => w.name === name);
        const on = !!hit && !isMain;
        const rolls = isMain ? 0 : (res.rolls[name] || 0);
        const mainList = !statCtx ? []
          : ((statCtx.mains && statCtx.mains[d.slot])
            || (statCtx.statVar && statCtx.statVar.mains && statCtx.statVar.mains[d.slot])
            || statCtx.a[d.slot] || []);
        const setNote = offBuild ? " " + st.focusAgent + " has no build using this set, so the disc still grades F for them." : "";
        const rankNote = !statCtx ? "" : isMain
          ? (statCtx.isFixed ? name + " is fixed for this slot." + setNote
            : (r => (r.hit ? (r.rank === 1 ? name + " is their best main stat here." : name + " is their " + self.ordinal(r.rank) + " of " + r.of + " for this slot.") : name + " isn't a main stat they want here.") + setNote)(self.rankIn(mainList, name)))
          : (on ? name + " is #" + hit.rank + " on their substat list." : name + " isn't on their substat list.") + setNote;
        return {
          name: name,
          rolls: rolls ? "+" + rolls : "",
          rollStyle: {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
            marginLeft:"auto", whiteSpace:"nowrap", flex:"0 0 auto",
            color: rolls ? (on ? "#4ade80" : "#8a9099") : "transparent"},
          rowTitle: rankNote + (rolls ? " Levelling has hit it " + rolls + (rolls === 1 ? " time." : " times.") : ""),
          barStyle: {width:"4px", flex:"0 0 4px", height:"26px",
            background: isMain
              ? (statCtx && statCtx.isFixed ? "#8a9099"
                : (r => r.hit ? self.depthTone(r.rank) : "#3f454e")(self.rankIn(mainList, name)))
              : on ? self.depthTone(hit.rank) : "#3f454e",
            opacity: (isMain ? (statCtx && (statCtx.isFixed || self.rankIn(mainList, name).hit)) : on) ? 1 : .5},
          nameStyle: {font:"600 15px/1.3 Barlow,sans-serif", flex:"1", minWidth:0,
            color: (isMain ? (statCtx && (statCtx.isFixed || self.rankIn(mainList, name).hit)) : on) ? "#ecefe6" : "#8a9099"}
        };
      };
      return Object.assign({}, row, {
        lvl: "+" + (ticks.length * 3),
        forLabel: offBuild ? "No build for " + st.focusAgent
          : !best ? "Nobody tracked wants it"
          : inFocus ? (d.to === best.c.a.n ? "Worn by " + best.c.a.n : "Graded for " + best.c.a.n)
          : owner ? "Worn by " + best.c.a.n
          : (best.g.score == null || best.g.score < 0)
            ? "Not enough substats to grade — best fit on paper is " + best.c.a.n
            : "Best for " + best.c.a.n,
        mainLine: d.main ? [line(d.main, true)] : [],
        hasMain: !!d.main,
        subLines: res.types.map(t => line(t, false)),
        hasSubs: res.types.length > 0,
        canSelEquip: !!st.focusAgent,
        selEquipLabel: d.to === st.focusAgent ? "UNEQUIP"
          : (d.to ? "MOVE FROM " + String(d.to).toUpperCase() : "EQUIP TO " + String(st.focusAgent || "").toUpperCase()),
        selEquipTitle: !st.focusAgent ? ""
          : d.to === st.focusAgent ? "Take this disc off " + st.focusAgent + "."
          : d.to ? "Take it off " + d.to + " and give it to " + st.focusAgent + ". You'll be asked to confirm."
          : "Put this disc in " + st.focusAgent + "'s " + A.SLOT_LABEL[d.slot] + "."
            + (inFocus ? "" : " " + st.focusAgent + " has no build that uses this set, so it won't be graded for them."),
        selEquipStyle: (mine => ({width:"100%", marginTop:"14px", minHeight:"40px",
          padding:"11px 14px", cursor:"pointer",
          font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".1em",
          background: mine ? "#171a1f" : "#e8ff45",
          border:"1px solid #e8ff45" + (mine ? "55" : ""),
          color: mine ? "#e8ff45" : "#0b0c0e"}))(d.to === st.focusAgent),
        selEquipDisabled: !st.focusAgent,
        onSelEquip: () => {
          if(!st.focusAgent) return;
          if(d.to && d.to !== st.focusAgent){
            self.askMove({id: d.id, to: st.focusAgent, from: d.to,
              label: d.set + " · " + A.SLOT_LABEL[d.slot] + (d.main ? " · " + d.main : ""),
              grade: best ? best.g.grade : "—", gradeColor: best ? best.g.color : "#5f656e"});
            return;
          }
          self.equipDisc(d.id, st.focusAgent);
        },
        onTrackUp: () => self.sendToScan(d, st.focusAgent || d.to || null),
        trackUpLabel: "TRACK UPGRADES",
        trackUpTitle: "Open this disc in Upgrades to record its levels.",
        trackUpStyle: {width:"100%", marginTop:"7px", minHeight:"38px", padding:"10px 14px",
          cursor:"pointer", font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".1em",
          background:"#171a1f", color:"#ecefe6", border:"1px solid #2e333b"},
        placeHint: d.to && d.to !== st.focusAgent
          ? (inFocus
              ? d.to + " is wearing this one. Moving it here takes it off them."
              : d.to + " is wearing this one.")
          : st.focusAgent
          ? (d.to === st.focusAgent
              ? "In " + st.focusAgent + "'s " + A.SLOT_LABEL[d.slot] + ". Unequip it with the button above."
              : inFocus
                ? "Equip it to " + st.focusAgent + "'s " + A.SLOT_LABEL[d.slot] + " with the button above."
                : "Not a set " + st.focusAgent + " has a build for, but you can still equip it with the button above.")
          : d.to
          ? "Worn by " + d.to + " in " + A.SLOT_LABEL[d.slot] + "."
          : "Pick " + A.SLOT_LABEL[d.slot] + " on the rig, then click this disc to equip it.",
        // Per-agent actions moved here from the old row: this panel is the one place that knows
        // which disc you mean, so hide and reserve hang off the list of agents who want it.
        selAgents: scored.map(x => {
          const n2 = x.c.a.n;
          const isOwner = d.to === n2;
          const isHid = !!st.discHidden[self.hideKey(d.id, n2)];
          const isResv = st.discAssign[d.id] === n2;
          return {
            name: n2,
            portraitId: "sel-" + d.id + "-" + n2.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            portraitSrc: self.agentIconPath(n2),
            grade: x.g.grade,
            gradeStyle: {font:"800 17px/1 'Chakra Petch',sans-serif", color: x.g.color, flex:"0 0 auto"},
            rowStyle: {display:"flex", alignItems:"center", gap:"8px", padding:"7px 9px",
              background: isOwner ? "#e8ff450f" : "#0f1114",
              border:"1px solid " + (isOwner ? "#e8ff4555" : "#1e2228"),
              opacity: isHid ? .55 : 1},
            nameStyle: {font:"600 14px/1.2 Barlow,sans-serif", flex:"1", minWidth:0,
              overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
              color: isHid ? "#8a9099" : "#ecefe6"},
            equipLabel: isOwner ? "UNEQUIP" : (d.to ? "MOVE" : "EQUIP"),
            equipStyle: {font:"700 10px/1 'JetBrains Mono',monospace", letterSpacing:".07em",
              padding:"5px 7px", whiteSpace:"nowrap", flex:"0 0 auto", cursor:"pointer",
              background: isOwner ? "#e8ff4514" : "none",
              border:"1px solid " + (isOwner ? "#e8ff4555" : "#2e333b"),
              color: isOwner ? "#e8ff45" : "#8a9099"},
            equipLocked: false,
            equipTitle: isOwner ? "Take this disc off " + n2 + "."
              : d.to ? "Take it off " + d.to + " and give it to " + n2 + ". You'll be asked to confirm."
              : "Equip this disc to " + n2 + ".",
            onEquip: () => {
              if(d.to && !isOwner){
                self.askMove({id: d.id, to: n2, from: d.to,
                  label: d.set + " · " + A.SLOT_LABEL[d.slot] + (d.main ? " · " + d.main : ""),
                  grade: x.g.grade, gradeColor: x.g.color});
                return;
              }
              self.equipDisc(d.id, n2);
            },
            hideLabel: isHid ? "SHOW" : "HIDE",
            hideLocked: isOwner || isResv,
            hideStyle: {font:"700 10px/1 'JetBrains Mono',monospace", letterSpacing:".07em",
              padding:"5px 7px", whiteSpace:"nowrap", flex:"0 0 auto", background:"none",
              border:"1px solid " + (isHid ? "#e8ff4540" : "#2e333b"),
              color: isHid ? "#e8ff45" : "#5f656e",
              cursor: (isOwner || isResv) ? "not-allowed" : "pointer",
              opacity: (isOwner || isResv) ? .5 : 1},
            hideTitle: isOwner ? n2 + " is wearing it — take it off first."
              : isResv ? "Reserved for " + n2 + " — turn that off first."
              : isHid ? "Show this disc under " + n2 + " again."
              : "Hide this disc from " + n2 + " only.",
            onHide: () => { if(!isOwner && !isResv) self.toggleHideDisc(d.id, n2); },
            resvLabel: "ONLY",
            resvLocked: isHid,
            resvStyle: {font:"700 10px/1 'JetBrains Mono',monospace", letterSpacing:".07em",
              padding:"5px 7px", whiteSpace:"nowrap", flex:"0 0 auto",
              background: isResv ? "#6cc6ff14" : "none",
              border:"1px solid " + (isResv ? "#6cc6ff55" : "#2e333b"),
              color: isResv ? "#6cc6ff" : "#5f656e",
              cursor: isHid ? "not-allowed" : "pointer", opacity: isHid ? .5 : 1},
            resvTitle: isResv ? "Reserved for " + n2 + ". Turn off to let everyone see it again."
              : isHid ? "Hidden from " + n2 + " — unhide it first."
              : "Reserve this disc for " + n2 + ", hiding it from every other agent.",
            onResv: () => { if(!isHid) self.toggleAssignDisc(d.id, n2); }
          };
        }),
        ...(function(){
          const fa = st.focusAgent;
          if(!fa || d.to === fa) return {hasCmp: false};
          const curE = savedDiscs.find(e => e.d.to === fa && e.d.slot === d.slot && e.d.id !== d.id);
          if(!curE) return {hasCmp: true, cmpHasCur: false,
            cmpEmptyNote: fa + "'s " + A.SLOT_LABEL[d.slot] + " is empty, so this would be a straight gain."};
          const cc = focusCand(curE);
          const cg = cc ? gradeFor(curE, cc) : {grade:"F", color:"#ff4d5e", score: 0};
          const mg = offBuild ? {grade:"F", color:"#ff4d5e", score: 0} : (best ? best.g : {grade:"—", color:"#5f656e", score:-1});
          const num = g => g.score >= 0 ? Math.round(g.score * 100) : null;
          const a1 = num(mg), a2 = num(cg);
          const diff = (a1 != null && a2 != null) ? a1 - a2 : null;
          const curRes = self.upResolve(curE.d, (st.upgrades[curE.d.id] || {ticks: []}).ticks);
          const lad = wanted;
          const cell = (has, rolls, rank, isMainHere) => {
            if(isMainHere) return {t: "main", c: "#5f656e"};
            if(!has) return {t: "—", c: "#3f454e"};
            return {t: rolls ? "+" + rolls : "✓", c: self.depthTone(rank)};
          };
          const rows = lad.map(w => {
            const mine = res.types.indexOf(w.name) >= 0, cur = curRes.types.indexOf(w.name) >= 0;
            if(!mine && !cur) return null;
            const x = cell(mine, res.rolls[w.name] || 0, w.rank, d.main === w.name);
            const y = cell(cur, curRes.rolls[w.name] || 0, w.rank, curE.d.main === w.name);
            return {name: w.name,
              nameStyle: {flex:1, minWidth:0, font:"500 14px/1.2 Barlow,sans-serif", color:"#ecefe6",
                whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"},
              barStyle: {width:"3px", flex:"0 0 3px", height:"18px", background: self.depthTone(w.rank)},
              a: x.t, aStyle: {width:"52px", flex:"0 0 52px", textAlign:"center", font:"700 13px/1 'JetBrains Mono',monospace", color: x.c},
              b: y.t, bStyle: {width:"52px", flex:"0 0 52px", textAlign:"center", font:"700 13px/1 'JetBrains Mono',monospace", color: y.c}};
          }).filter(Boolean);
          const lvlOf = e => "+" + ((st.upgrades[e.d.id] || {ticks: []}).ticks.length * 3);
          return {hasCmp: true, cmpHasCur: true,
            cmpCurName: curE.d.set, cmpCurLvl: lvlOf(curE), cmpThisLvl: lvlOf(selEntry),
            cmpCurIconSrc: self.discIconPath(curE.d.set), cmpCurIconId: self.discIconId(curE.d.set) + "-cmp",
            cmpThisGrade: mg.grade, cmpThisGradeStyle: {font:"800 22px/1 'Chakra Petch',sans-serif", color: mg.color},
            cmpCurGrade: cg.grade, cmpCurGradeStyle: {font:"800 22px/1 'Chakra Petch',sans-serif", color: cg.color},
            cmpThisScore: a1 == null ? "—" : String(a1), cmpCurScore: a2 == null ? "—" : String(a2),
            cmpThisMain: d.main || "—", cmpCurMain: curE.d.main || "—",
            cmpDelta: diff == null ? "Can't compare yet" : diff === 0 ? "Even" : (diff > 0 ? "+" : "−") + Math.abs(diff) + " pts",
            cmpDeltaStyle: {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".06em", padding:"5px 8px",
              whiteSpace:"nowrap",
              color: diff == null || diff === 0 ? "#9aa0a8" : diff > 0 ? "#4ade80" : "#ff4d5e",
              border:"1px solid " + (diff == null || diff === 0 ? "#2e333b" : diff > 0 ? "#4ade8055" : "#ff4d5e55")},
            cmpDeltaTitle: diff == null ? "One of these discs doesn't have enough substats recorded to score yet."
              : "This disc scores " + a1 + " for " + fa + ", against " + a2 + " for the " + curE.d.set + " they're wearing.",
            cmpRows: rows, cmpHasRows: rows.length > 0};
        })(),
        hasSelAgents: scored.length > 0,
        whoOpen: !!st.selWhoOpen,
        whoLabel: "Who wants it (" + scored.length + ")",
        whoGlyph: st.selWhoOpen ? "▾" : "▸",
        whoBtnStyle: {display:"flex", alignItems:"center", gap:"7px", width:"100%",
          background:"none", border:"none", padding:"0", cursor:"pointer", margin:"14px 0 6px",
          font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".13em",
          textTransform:"uppercase", color: st.selWhoOpen ? "#ecefe6" : "#8a9099"},
        whoBtnTitle: "Every tracked agent who can use this disc, with their own grade for it.",
        onToggleWho: () => self.setState(s2 => ({selWhoOpen: !s2.selWhoOpen})),
        onClearSel: () => self.setState({discSel: ""})
      });
    })(this) : null;
    const discAgentGroups = [];
    A.AGENTS.forEach(a => {
      if(this.rosterOf(a.n) === "off") return;
      const pairs = [];
      savedDiscs.forEach(entry => {
        const c = entry.cands.find(x => x.a.n === a.n);
        if(c) pairs.push({entry: entry, c: c});
      });
      pairs.sort((x, y) => y.c.tier - x.c.tier || y.c.pScore - x.c.pScore);
      const shown = [], below = [], hidden = [];
      pairs.forEach(p => {
        const resv = st.discAssign[p.entry.d.id];
        if(p.entry.d.to !== a.n && (st.discHidden[this.hideKey(p.entry.d.id, a.n)]
          || (resv && resv !== a.n))){ hidden.push(p); return; }
        const g = gradeFor(p.entry, p.c);
        const r = this.gradeRank(g.grade);
        (p.entry.d.to === a.n || r < 0 || r >= floorRank ? shown : below).push(p);
      });
      // how many of each set this agent is actually wearing
      const setCount = {};
      pairs.forEach(x => { if(x.entry.d.to === a.n) setCount[x.entry.d.set] = (setCount[x.entry.d.set] || 0) + 1; });
      let rigBanked = 0, rigHits = 0, rigScored = 0, rigUnscored = 0, rigMainBest = 0, rigMainOf = 0,
        rigLvl = 0, rigMaxed = 0, rigUnlevelled = 0, rigOffBuild = 0;
      const rig = ["s1","s2","s3","s4","s5","s6"].map(k => {
        const eqEntry = savedDiscs.find(e => e.d.to === a.n && e.d.slot === k);
        const eqCand = eqEntry ? (eqEntry.cands.find(c => c.a.n === a.n) || null) : null;
        const eq = eqEntry ? {entry: eqEntry, c: eqCand} : null;
        const g = (eq && eq.c) ? gradeFor(eq.entry, eq.c) : null;
        const col = g ? g.color : "#2e333b";
        const gradeReal = !!g && g.grade !== "—" && !(g.score != null && g.score < 0);
        const open = st.selSlot === k;
        const opts = shown.concat(hiddenOpen[a.n] ? hidden : [])
          .filter(p => p.entry.d.slot === k && (!p.entry.d.to || p.entry.d.to === a.n) && this.fitsSettings(p.entry, a.n)).length;
        const lvl = eq ? ((st.upgrades[eq.entry.d.id] || {ticks: []}).ticks.length * 3) : 0;
        const maxed = !!eq && lvl >= 15;
        if(eq){
          // An off-build disc has no ladder to score against, so it counts as occupying the slot
          // and levelled but contributes no banked value — it can't inflate or deflate the grade.
          const vg = eq.c ? this.verticalGrade(eq.entry.d, eq.c,
            (st.upgrades[eq.entry.d.id] || {ticks: []}).ticks, g ? g.score : 0) : null;
          if(vg && !vg.pending){ rigBanked += vg.banked; rigHits += vg.hits; rigScored++; }
          else rigUnscored++;
          if(eq.c && !eq.c.isFixed){ rigMainOf++; if(eq.c.mainRank === 1) rigMainBest++; }
          else if(!eq.c && !A.FIXED_MAIN[k]){ rigMainOf++; rigOffBuild++; }
          rigLvl += lvl; if(lvl >= 15) rigMaxed++; else rigUnlevelled++;
        }
        return {
          key: k, rigKey: a.n + "|" + k, num: k.slice(1), label: A.SLOT_LABEL[k],
          hubRingStyle: (() => {
            const pc = eq ? (this.setColor(eq.entry.d.set) || "#3a4049") : "#1b1e23";
            return {position:"absolute", top:"50%", left:"50%", width:"26px", height:"26px",
              borderRadius:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none",
              background:"radial-gradient(circle," + this.shadeMix(pc, "#000000", .35) + ","
                + this.shadeMix(pc, "#000000", .62) + ")",
              boxShadow:"inset 0 0 0 1px rgba(255,255,255,.14)"};
          })(),
          hubStyle: {position:"absolute", top:"50%", left:"50%", width:"11px", height:"11px",
            borderRadius:"50%", transform:"translate(-50%,-50%)",
            background:"#0b0c0e", boxShadow:"0 0 0 2px rgba(11,12,14,.8)"},
          has: !!eq, iconSrc: eq ? this.discIconPath(eq.entry.d.set) : "",
          iconId: eq ? this.discIconId(eq.entry.d.set) + "-rig-" + a.n.toLowerCase().replace(/[^a-z0-9]+/g, "") : "",
          setName: eq ? eq.entry.d.set : "",
          grade: eq ? (g ? g.grade : "F") : "",
          hasOptions: !eq && opts > 0,
          // browse-mode strip: compact tile, grade + a five-step level meter instead of text
          stripStyle: {display:"flex", flexDirection:"column", alignItems:"center", gap:"8px",
            padding:"12px 4px 11px", minWidth:0, border:"none", cursor:"pointer", textAlign:"center",
            background: eq ? "#0f1114" : "#0c0d10"},
          stripDiscStyle: {position:"relative", display:"block", width:"min(60px, 100%)", aspectRatio:"1",
            borderRadius:"50%", overflow:"hidden", flex:"0 0 auto",
            background: eq ? "#000" : "#15181c",
            boxShadow: eq ? (g ? "0 0 0 2px " + g.color + "55" : "0 0 0 2px #ff4d5e")
              : (opts > 0 ? "inset 0 0 0 1px #3a4049, 0 0 0 2px #e8ff4533, 0 0 12px 1px rgba(232,255,69,.22)"
                : "inset 0 0 0 1px #262a31")},
          stripGrade: eq ? (g ? g.grade : "F") : "—",
          hexGradeStyle: {font:"800 15px/1 'Chakra Petch',sans-serif",
            color: eq ? (g ? g.color : "#ff4d5e") : "#4d535c"},
          stripGradeStyle: {display:"block", height:"20px", font:"800 19px/1 'Chakra Petch',sans-serif",
            color: eq ? (g ? g.color : "#ff4d5e") : "#3a4049"},
          pips: [1,2,3,4,5].map(n => ({style: {flex:"1 1 0", height:"4px",
            background: eq && lvl >= n * 3 ? (lvl >= 15 ? "#4ade80" : "#e8ff45") : "#23272e"}})),
          lvlLabel: eq ? "+" + lvl : "",
          title: open
            ? A.SLOT_LABEL[k] + " is selected — pick a disc from the bay to put in it."
            : eq
            ? A.SLOT_LABEL[k] + ": " + eq.entry.d.set + " · " + (eq.entry.d.main || "no main stat")
              + " at +" + lvl + (g ? ", grade " + g.grade + "." : ", grade F — " + a.n + " has no build that uses this set.")
              + (maxed ? " Fully levelled."
                : (setCount[eq.entry.d.set] || 0) >= 4 ? " 4-piece bonus active."
                : (setCount[eq.entry.d.set] || 0) >= 2 ? " 2-piece bonus active." : "")
              + " Click to change it."
            : opts ? A.SLOT_LABEL[k] + " is empty — " + opts + (opts === 1 ? " disc fits" : " discs fit") + " it. Click to choose one."
            : A.SLOT_LABEL[k] + " is empty, and nothing saved fits it yet.",
          rimWrapStyle: {position:"relative", display:"block", width:"min(88px, 100%)", aspectRatio:"1",
            borderRadius:"50%", margin:"0 auto"},
          ringStyle: {display:"block", position:"absolute", inset:0, zIndex:1,
            borderRadius:"50%", overflow:"hidden", background:"#000",
            boxShadow: (eq && !g && !open)
              ? "inset 0 0 14px rgba(0,0,0,.85), 0 0 0 2px #ff4d5e, 0 0 12px 2px rgba(255,77,94,.35)"
              : open
              ? "inset 0 0 14px rgba(0,0,0,.85), 0 0 0 3px #e8ff45, 0 0 16px 3px rgba(232,255,69,.45)"
              : "inset 0 0 14px rgba(0,0,0,.85)"},
          // the lit platter under the disc: shades of this slot's colour, spinning with the face
          faceStyle: (() => {
            if(!eq) return {position:"absolute", inset:0, display:"block", borderRadius:"50%",
              background:"radial-gradient(circle,#3a1418,#1a0a0c)"};
            const pc = this.setColor(eq.entry.d.set) || "#3a4049";
            return {position:"absolute", inset:0, display:"block", borderRadius:"50%",
              background:"conic-gradient(from 90deg," + pc + "," + this.shadeMix(pc, "#ffffff", .55) + ","
                + this.shadeMix(pc, "#000000", .45) + "," + pc + ")"};
          })(),
          emptyFaceStyle: {position:"absolute", inset:0, display:"block", borderRadius:"50%",
            background: opts ? "radial-gradient(circle,#2a2f36,#161a1f)" : "radial-gradient(circle,#23272d,#131519)",
            // a fitting free disc is waiting: soft glow instead of a text count
            boxShadow: opts ? "inset 0 0 0 2px #6cc6ff88, 0 0 12px 2px rgba(108,198,255,.35)" : "inset 0 0 0 3px #2e333b"},
          tileStyle: {display:"block", width:"100%", padding:"7px 2px 8px", background:"none",
            border:"none", cursor:"pointer", textAlign:"center"},
          gradeStyle: Object.assign({display:"block", width:"fit-content", maxWidth:"100%", marginLeft:"auto",
            marginRight:"auto", marginTop:"8px", height:"23px", boxSizing:"border-box",
            whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
            // an off-build F gets the same type as every other grade, just red
            font: (g || eq) ? "800 17px/1 'Chakra Petch',sans-serif" : "700 12px/1.6 'JetBrains Mono',monospace",
            letterSpacing: (g || eq) ? "0" : ".05em",
            color: g ? col : eq ? "#ff4d5e" : (open ? "#e8ff45" : opts ? "#9aa0a8" : "#ff4d5e")},
            (eq && gradeReal && !maxed) ? {borderBottom:"2px dotted " + col, paddingBottom:"2px"} : {}),
          gradeTitle: !eq ? "" : !g ? "F — " + a.n + " has no build that uses this set, so none of this disc's lines count for them."
            : !gradeReal
            ? "Not enough substats recorded on this disc to grade it yet."
            : maxed ? "Final grade — every roll on this disc is spent."
            : "Provisional: " + g.grade + " is what it has earned so far, but it's only at +"
              + lvl + " with " + ((15 - lvl) / 3) + " roll" + (((15 - lvl) / 3) === 1 ? "" : "s")
              + " left. The dotted line means the grade can still move.",
          lvlStyle: {display:"block", marginTop:"4px", height:"14px", whiteSpace:"nowrap", overflow:"hidden",
            font:"700 14px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
            color: maxed ? "#4ade80" : "#e8ff45"},
          capStyle: {display:"block", font:"700 12px/1 'JetBrains Mono',monospace",
            letterSpacing:".12em", color: open ? "#e8ff45" : "#8a9099", marginBottom:"7px"},
          onClick: e => {
            if(e) e.stopPropagation();
            if(st.focusAgent !== a.n){ this.enterFocus(a.n, k, eq ? eq.entry.d.id : ""); return; }
            if(st.selSlot === k) return;
            this.setState({selSlot: k, discSel: eq ? eq.entry.d.id : "", bayAll: false});
          }
        };
      });
      // Slots that are empty but have a fitting free disc waiting — "needs attention".
      const waiting = rig.filter(t => t.hasOptions).length;
      // Set bonuses actually active on this agent right now.
      const setLine = (() => {
        const sets = Object.keys(setCount).map(n => [n, setCount[n]]).sort((x, y) => y[1] - x[1]);
        const four = sets.find(x => x[1] >= 4);
        const two = sets.find(x => x !== four && x[1] >= 2);
        const on = "#4ade80", off = "#8a9099";
        const bits = [];
        bits.push(four ? {t: "4pc " + four[0], c: on, ok: true}
          : {t: sets[0] ? "4pc " + sets[0][0] + " " + sets[0][1] + "/4" : "4pc —", c: off, ok: false});
        bits.push(two ? {t: "2pc " + two[0], c: on, ok: true} : {t: "2pc —", c: off, ok: false});
        return bits.map(b => ({label: (b.ok ? "✓ " : "") + b.t,
          style: {font:"500 12px/1.2 'JetBrains Mono',monospace", letterSpacing:".03em", color: b.c,
            whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", minWidth:0}}));
      })();
      // Optimiser inputs, only for the agent being edited: every disc that could sit in each slot —
      // what's there now plus every free fitting disc — each with its fit score. The search itself
      // runs on click, so browsing the grid never pays for it.
      const optSlots = st.focusAgent !== a.n ? null : ["s1","s2","s3","s4","s5","s6"].map(k => {
        const cur = savedDiscs.find(e => e.d.to === a.n && e.d.slot === k) || null;
        const scoreOf = (entry, c) => {
          if(!c) return 0;
          const g = gradeFor(entry, c);
          return this.gradeRank(g.grade) >= 0 ? Math.max(0, g.score || 0) : .15;
        };
        const gradeOf = (entry, c) => c ? gradeFor(entry, c) : {grade:"F", color:"#ff4d5e"};
        const list = [];
        if(cur){
          const c = cur.cands.find(x => x.a.n === a.n) || null;
          list.push({id: cur.d.id, set: cur.d.set, score: scoreOf(cur, c), cur: true, g: gradeOf(cur, c)});
        }
        shown.forEach(p => {
          const d = p.entry.d;
          if(d.slot !== k || d.to) return;
          if(!this.fitsSettings(p.entry, a.n)) return;
          list.push({id: d.id, set: d.set, score: scoreOf(p.entry, p.c), cur: false, g: gradeOf(p.entry, p.c)});
        });
        return {slot: k, cur: cur ? cur.d.id : null, curSet: cur ? cur.d.set : "", list: list};
      });
      const heroBand = (rigScored + rigUnscored) ? this.gradeBand(rigBanked / 6) : {grade:"–", color:"#5f656e"};
      const bgName = a.n.replace(/ /g, "_");
      discAgentGroups.push({
        // Per-agent backdrop, lightly blurred: backgrounds/<Name>.webp at rest and
        // backgrounds/<Name>-hover.webp on hover, spaces as underscores (Ye_Shunguang.webp /
        // Ye_Shunguang-hover.webp). A missing file just leaves the layer underneath showing.
        artName: a.n,
        heroArtStyle: {position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage: this.artSeen(a.n) ? 'url("backgrounds/' + bgName + '.webp")' : "none", backgroundRepeat:"no-repeat",
          backgroundSize: this.artFrame(bgName).size, backgroundPosition: this.artFrame(bgName).pos, transform: this.artFrame(bgName).transform, maskImage: this.artFrame(bgName).mask, WebkitMaskImage: this.artFrame(bgName).mask,
          transition:"opacity .35s ease"},
        heroHasHover: this.artSeen(a.n) && st.showMindscape && this.hoverWanted(a.n) && this.hoverArtOk(bgName) ? "1" : "0",
        heroArtHoverStyle: {position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage: this.artSeen(a.n) && st.showMindscape && this.hoverWanted(a.n) ? 'url("backgrounds/' + bgName + '-hover.webp")' : "none", backgroundRepeat:"no-repeat",
          backgroundSize: this.artFrame(bgName).size, backgroundPosition: this.artFrame(bgName).pos, transform: this.artFrame(bgName).transform, maskImage: this.artFrame(bgName).mask, WebkitMaskImage: this.artFrame(bgName).mask,
          opacity:0, transition:"opacity .35s ease"},
        heroTintStyle: {position:"absolute", inset:0, zIndex:1, pointerEvents:"none",
          background: "linear-gradient(100deg," + heroBand.color + "26," + heroBand.color + "08 45%,rgba(0,0,0,0) 100%)"},
        sortWaiting: waiting, sortScore: rigBanked / 6,
        setLine: setLine,
        optSlots: optSlots,
        name: a.n, rank: a.r, rankStyle: this.badge(a.r === "S" ? "srank" : "rare"),
        initial: a.n.charAt(0),
        portraitId: "agent-" + a.n.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        portraitSrc: this.agentIconPath(a.n),
        rankIconStyle: this.iconStyle(this.rankIconPath(a.r), 15),
        roleIconStyle: this.iconStyle(this.roleIconPath(a.role), 13),
        roleLabel: a.role.toUpperCase(),
        hasElement: !!a.el,
        elIconStyle: this.iconStyle(this.elementIconPath(a.el), 13),
        elLabel: (a.el || "").toUpperCase(),
        noAffinity: !a.el,
        meta: a.role.toUpperCase() + (a.el ? " · " + a.el.toUpperCase() : ""),
        rosterLabel: this.rosterMeta(this.rosterOf(a.n)).label,
        rosterStyle: {font:"500 13px/1 'JetBrains Mono',monospace", letterSpacing:".08em", color:"#4ade80"},
        rosterToggle: this.rosterToggle(a.n),
        onOpenFace: e => {
          if(e) e.stopPropagation();
          if(st.focusAgent === a.n) return;
          this.enterFocus(a.n, "", "");
        },
        faceCursor: st.focusAgent === a.n ? "default" : "pointer",
        // In browse mode the whole card opens the agent; in focus mode it must not, or every
        // click inside the workspace would toggle back out of it.
        onOpenCard: () => { if(st.focusAgent !== a.n) this.enterFocus(a.n, "", ""); },
        cardTitle: st.focusAgent === a.n ? "" : "Open " + a.n + "'s loadout.",
        cardStyle: {minWidth:0, overflow:"hidden",
          background: (() => {
            const eqp = pairs.filter(x => x.entry.d.to === a.n);
            if(!eqp.length) return "radial-gradient(120% 78% at 50% 64%,rgba(255,255,255,.05),rgba(255,255,255,0) 62%),"
              + "radial-gradient(rgba(255,255,255,.045) .9px,transparent 1.3px) 0 0/5px 5px,#131519";
            const ranks = eqp.map(x => this.gradeRank(gradeFor(x.entry, x.c).grade)).filter(r => r >= 0);
            if(!ranks.length) return "radial-gradient(120% 78% at 50% 64%,rgba(255,255,255,.05),rgba(255,255,255,0) 62%),"
              + "radial-gradient(rgba(255,255,255,.045) .9px,transparent 1.3px) 0 0/5px 5px,#131519";
            const avg = ranks.reduce((x, y) => x + y, 0) / ranks.length;
            const scale = ["#ff4d5e","#8a9099","#4ade80","#6cc6ff","#b98cff","#e8ff45"];
            const lo = Math.floor(avg), hi = Math.min(5, lo + 1);
            const tint = this.shadeMix(scale[lo], scale[hi], avg - lo);
            // a part-built rack tints proportionally to how much of it is filled
            const str = .1 * (eqp.length / 6) + .035;
            return "radial-gradient(118% 82% at 50% 58%," + tint + Math.round(str * 255).toString(16).padStart(2, "0")
              + "," + tint + "00 68%),"
              + "radial-gradient(120% 78% at 50% 64%,rgba(255,255,255,.05),rgba(255,255,255,0) 62%),"
              + "radial-gradient(rgba(255,255,255,.045) .9px,transparent 1.3px) 0 0/5px 5px,#131519";
          })(),
          border:"1px solid #262a31", padding:"14px",
          cursor: st.focusAgent === a.n ? "default" : "pointer",
          clipPath:"polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)"},
        rosterStopClick: e => { if(e) e.stopPropagation(); this.rosterToggle(a.n).onClick(); },
        faceTitle: st.focusAgent === a.n ? "" : "Open " + a.n + "'s loadout.",
        rigFaceStyle: {position:"absolute", inset:"0", borderRadius:"50%",
          boxShadow:"0 0 9px 2px " + (a.r === "S" ? "#f5a623" : "#b98cff") + "40"},
        rigFaceInnerStyle: {position:"absolute", inset:"0", borderRadius:"50%",
          overflow:"hidden", border:"2px solid " + (a.r === "S" ? "#f5a623" : "#b98cff") + "d9",
          background:"#0f1114", display:"flex", alignItems:"center", justifyContent:"center"},
        count: shown.length + (shown.length === 1 ? " disc" : " discs"),
        discCount: shown.length,
        // With everything hidden there are no rows, so the divider would label an empty section
        // and its count would restate the emptiness the hidden switch already explains.
        hasShown: shown.length > 0,
        // The rig: the agent's six slots laid out like the in-game drive panel, two columns of
        // three around the portrait. Each tile is the disc actually equipped there, so a card
        // answers "what is this agent wearing and where are the holes" without reading a list.
        // Clicking a tile opens that slot's candidates underneath.
        rig: rig, rigL: rig.slice(0, 3), rigR: rig.slice(3).reverse(),
        // Averaged over all six slots, not just the filled ones — a single S disc shouldn't read
        // as a finished build, and an empty slot genuinely is zero banked value.
        rigAvg: (() => {
          const o = (() => {
          const score = rigBanked / 6;
          const none = rigScored + rigUnscored === 0;
          const band = none ? {grade:"–", color:"#5f656e"} : this.gradeBand(score);
          const empties = 6 - rigScored - rigUnscored;
          return {
            has: true,
            ready: rigMaxed === 6,
            none: none,
            rowStyle: {display:"flex", alignItems:"center", gap:"11px", margin:"13px 0 3px",
              padding:"9px 11px", background:"#0f1114", border:"1px solid #1e2228", cursor:"help",
              boxSizing:"border-box", height:"50px"},
            provisional: rigMaxed < 6 && !none,
            heroGradeStyle: {font:"800 44px/1 'Chakra Petch',sans-serif", color: band.color, textShadow:"0 2px 14px rgba(0,0,0,.55)"},
            hexGradeStyle: {font:"800 16px/1 'Chakra Petch',sans-serif", color: band.color},
            grade: band.grade,
            gradeStyle: Object.assign(
              {font:"800 26px/1 'Chakra Petch',sans-serif", color: band.color},
              (rigMaxed === 6 || none) ? {} : {borderBottom:"2px dotted " + band.color, paddingBottom:"2px"}),
            pct: Math.round(score * 100) + "%",
            barFill: {position:"absolute", top:0, bottom:0, left:0,
              width: Math.max(1, Math.round(score * 100)) + "%",
              background: band.color, transition:"width .25s ease"},
            hitsLabel: Math.round(rigBanked / 6 * 100) + "/100",
            hitsStyle: {font:"500 12px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
              whiteSpace:"nowrap", cursor:"help",
              color: none ? "#8a9099" : band.color},
            hitsTitle: "Build score, not a substat count: every roll is worth full marks at the top "
              + "of " + a.n + "'s list and a fraction further down, so 100 needs six flawless discs. "
              + rigHits + " roll" + (rigHits === 1 ? " has" : "s have") + " landed on a line they want, "
              + "scoring " + Math.round(rigBanked / 6 * 100) + ".",
            // Out of 90: six discs at +15 each. Unlike the substat count this denominator is
            // fixed and real, so it's worth showing.
            lvlLabel: rigLvl + "/90 lvl",
            lvlStyle: {font:"500 12px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
              whiteSpace:"nowrap",
              color: rigMaxed === 6 ? "#4ade80" : rigLvl === 0 ? "#8a9099" : "#e8ff45"},
            hasMains: rigMainOf > 0,
            hasNotice: rigUnlevelled > 0,
            noticeLabel: rigUnlevelled + (rigUnlevelled === 1 ? " disc" : " discs") + " not fully levelled",
            noticeTitle: "Grades on partly levelled discs are provisional — shown with a dotted "
              + "underline. Each has rolls left, so this build's score can still climb without you "
              + "finding a single new disc.",
            mainsLabel: rigMainBest + "/" + rigMainOf + " main",
            mainsStyle: {font:"500 12px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
              whiteSpace:"nowrap",
              color: rigOffBuild ? "#ff4d5e" : rigMainBest === rigMainOf ? "#4ade80" : "#8a9099"},
            title: none ? a.n + " has nothing equipped yet, so there is no build to grade. Put a disc in any slot and a grade appears."
              : (rigOffBuild ? rigOffBuild + (rigOffBuild === 1 ? " slot holds a disc " : " slots hold discs ")
                + a.n + " has no build for, so " + (rigOffBuild === 1 ? "its main stat counts" : "their main stats count")
                + " against the total. " : "")
              + "Averaged across all six slots, weighted by how high each roll sits on " + a.n
              + "'s priority list — so a handful of top-line rolls beats a pile of weak ones. "
              + rigHits + " substat " + (rigHits === 1 ? "roll has" : "rolls have") + " landed on a line they want"
              + (rigMainOf ? ", and " + rigMainBest + " of " + rigMainOf
                 + " free main stats " + (rigMainBest === 1 ? "is" : "are") + " their best pick" : "")
              + (empties ? ". " + empties + (empties === 1 ? " slot is" : " slots are") + " still empty, counting as zero." : ".")
              + " Levelling: " + rigMaxed + " of 6 discs " + (rigMaxed === 1 ? "is" : "are") + " at +15"
              + (rigMaxed === 6 ? " — fully levelled." : ", so there is still score to gain from rolls you haven't taken.")
              + (rigUnscored ? " " + rigUnscored + (rigUnscored === 1 ? " disc needs" : " discs need")
                 + " more substats recorded before it can be scored." : "")
          };
          })();
          // The row explains whichever state it is in: how the grade was reached, or why there
          // isn't one yet.
          if(!o.hitsTitle) o.hitsTitle = o.title;
          o.rowTitle = o.title + (o.provisional
            ? " The dotted underline means this is provisional: not every disc has spent its "
              + "rolls, so the grade can still climb without you finding a new disc."
            : "");
          return o;
        })(),
        // Only the open slot's candidates are built — the old view built every row for every
        // agent up front, which is what made this tab heavy as a collection grows.
        hasHidden: hidden.length > 0,
        hiddenOpen: !!hiddenOpen[a.n],
        hiddenLabel: "Show hidden discs",
        onToggleHiddenStop: e => {
          if(e) e.stopPropagation();
          this.setState(st2 => {
            const o = Object.assign({}, st2.hiddenOpen);
            if(o[a.n]) delete o[a.n]; else o[a.n] = true;
            return {hiddenOpen: o};
          });
        },
        hiddenTitleText: hidden.length
          ? "Bring the " + hidden.length + (hidden.length === 1 ? " disc" : " discs") + " hidden or reserved away from " + a.n + " back into the bay."
          : "Nothing is hidden for " + a.n + " right now. Hide a disc and this brings it back.",
        hiddenTrackColor: hiddenOpen[a.n] ? "#e8ff45" : "#171a1f",
        hiddenThumbLeft: hiddenOpen[a.n] ? "17px" : "1px",
        hiddenRowStyle: {display:"flex", alignItems:"center", gap:"10px",
          border:"1px dashed #262a31", padding:"10px 14px"},
        hiddenLabelStyle: {font:"500 13px/1 'JetBrains Mono',monospace", letterSpacing:".07em",
          color: hiddenOpen[a.n] ? "#ecefe6" : "#8a9099"},
        onToggleHidden: () => this.setState(st2 => {
          const o = Object.assign({}, st2.hiddenOpen);
          if(o[a.n]) delete o[a.n]; else o[a.n] = true;
          return {hiddenOpen: o};
        }),
      });
    });
    discAgentGroups.sort((x, y) =>
      st.loSort === "name" ? x.name.localeCompare(y.name)
      : st.loSort === "score" ? (y.sortScore - x.sortScore) || x.name.localeCompare(y.name)
      : (y.sortWaiting - x.sortWaiting) || (y.discCount - x.discCount) || x.name.localeCompare(y.name));
    // prev / next in the editor follow the same order as the grid
    const navOrder = discAgentGroups.map(g => g.name);
    const navIdx = st.focusAgent ? navOrder.indexOf(st.focusAgent) : -1;
    const agentQ = (st.discAgentQuery || "").trim().toLowerCase();
    this._groups = discAgentGroups;
    const visibleGroups = st.focusAgent && discAgentGroups.some(g => g.name === st.focusAgent)
      ? discAgentGroups.filter(g => g.name === st.focusAgent)
      : agentQ
      ? discAgentGroups.filter(g => g.name.toLowerCase().includes(agentQ))
      : discAgentGroups;
    const orphans = savedDiscs.filter(e => e.roster.length === 0);

    // Built before the return object so the counts and empty-state copy can read it.
    const mineAgentsList = (() => {
      const q = (st.mineAgentQ || "").trim().toLowerCase();
      const pool = filteredDiscs;
      const out = [];
      A.AGENTS.forEach(a => {
        if(this.rosterOf(a.n) === "off") return;
        if(q && a.n.toLowerCase().indexOf(q) < 0) return;
        // Every filtered disc this agent could use, minus the ones hidden for them or
        // reserved for somebody else — the same eligibility the rest of the tab honours.
        const rows = [];
        pool.forEach(e => {
          const c = e.cands.find(x => x.a.n === a.n);
          if(!c) return;
          const resv = st.discAssign[e.d.id];
          if(resv && resv !== a.n) return;
          if(e.d.to !== a.n && st.discHidden[this.hideKey(e.d.id, a.n)]) return;
          const g = gradeFor(e, c);
          const ticks = (st.upgrades[e.d.id] || {ticks: []}).ticks;
          rows.push({
            id: e.d.id, slot: e.d.slot, score: g.score || 0, worn: e.d.to === a.n,
            wornElse: !!e.d.to && e.d.to !== a.n, owner: e.d.to || "",
            setName: e.d.set, slotLabel: A.SLOT_LABEL[e.d.slot],
            grade: g.grade, lvlNum: ticks.length * 3,
            isPrimary: !!c.isPrimary, buildLabel: c.isPrimary ? "PRIMARY" : (c.buildLabel || "ALT").toUpperCase(),
            gradeStyle: {font:"800 19px/1 'Chakra Petch',sans-serif", color: g.color, flex:"0 0 auto"},
            iconSrc: this.discIconPath(e.d.set), iconId: this.discIconId(e.d.set) + "-ma-" + a.n.toLowerCase().replace(/[^a-z0-9]+/g,"-"),
            hub: this.hubPair(e.d.set, 34).ring, hole: this.hubPair(e.d.set, 34).hole,
            fav: !!st.discFav[e.d.id]
          });
        });
        if(!rows.length) return;
        rows.sort((x, y) => (y.worn ? 1 : 0) - (x.worn ? 1 : 0)
          || x.slot.localeCompare(y.slot) || y.score - x.score || x.setName.localeCompare(y.setName));
        out.push({
          name: a.n, initial: a.n.charAt(0),
          portraitId: "ma-" + a.n.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          portraitSrc: this.agentIconPath(a.n),
          portraitOuterStyle: {position:"relative", width:"52px", height:"52px", flex:"0 0 52px",
            borderRadius:"50%", boxShadow:"0 0 7px 1px " + this.tone(a.r === "S" ? "srank" : "rare") + "40"},
          portraitInnerStyle: {position:"absolute", inset:"0", borderRadius:"50%", overflow:"hidden",
            border:"2px solid " + this.tone(a.r === "S" ? "srank" : "rare") + "d9", background:"#0f1114"},
          rankIconStyle: this.iconStyle(this.rankIconPath(a.r), 15),
          roleIconStyle: this.iconStyle(this.roleIconPath(a.role), 13),
          roleLabel: a.role.toUpperCase(),
          hasElement: !!a.el,
          elIconStyle: this.iconStyle(this.elementIconPath(a.el), 13),
          elLabel: (a.el || "").toUpperCase(),
          count: rows.length + (rows.length === 1 ? " disc fits" : " discs fit"),
          wornCount: rows.filter(r => r.worn).length,
          rows: rows.map(r => ({
            id: r.id, setName: r.setName, slotLabel: r.slotLabel,
            grade: r.grade, gradeStyle: r.gradeStyle,
            lvl: "+" + r.lvlNum,
            lvlStyle: {font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".06em",
              color: r.lvlNum >= 15 ? "#4ade80" : r.lvlNum ? "#e8ff45" : "#8a9099", flex:"0 0 auto"},
            buildLabel: r.buildLabel,
            buildStyle: {display:"block", marginTop:"3px",
              font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".11em",
              whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
              color: r.isPrimary ? "#6cc6ff" : "#b98cff"},
            iconSrc: r.iconSrc, iconId: r.iconId, hub: r.hub, hole: r.hole,
            fav: r.fav, worn: r.worn, wornElse: r.wornElse,
            stateLabel: r.worn ? "WORN" : r.wornElse ? "ON " + r.owner.toUpperCase() : "",
            stateStyle: {font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".08em",
              whiteSpace:"nowrap", flex:"0 0 auto",
              color: r.worn ? "#4ade80" : "#8a9099"},
            rowStyle: {display:"flex", alignItems:"center", gap:"10px", width:"100%",
              padding:"9px 11px", textAlign:"left", cursor:"pointer",
              background: r.worn ? "#4ade800a" : "#0f1114",
              border:"1px solid " + (r.worn ? "#4ade8033" : "#1e2228")},
            title: "Grades " + r.grade + " for " + a.n + " in " + r.slotLabel
              + (r.worn ? " — they're wearing it." : r.wornElse ? " — currently on " + r.owner + "." : " — free to assign.")
              + " Opens the full readout.",
            // Selecting jumps to the by-disc readout, which is where the detail lives —
            // no need to duplicate roster rows, actions and ladders inside every card.
            onClick: () => this.setState({mineView: "disc", mineSel: r.id})
          }))
        });
      });
      out.sort((x, y) => y.rows.length - x.rows.length || x.name.localeCompare(y.name));
      return out;
      })();

    return {
      discs: (() => {
        const rows = filteredDiscs.map(e => discRow(e, null));
        if(st.mineSort === "grade") rows.sort((x, y) =>
          this.gradeRank(y.rowGrade) - this.gradeRank(x.rowGrade)
          || x.setName.localeCompare(y.setName));
        else if(st.mineSort === "level") rows.sort((x, y) =>
          parseInt(y.rowLvl, 10) - parseInt(x.rowLvl, 10)
          || this.gradeRank(y.rowGrade) - this.gradeRank(x.rowGrade));
        else if(st.mineSort === "set") rows.sort((x, y) =>
          x.setName.localeCompare(y.setName) || x.slotLabel.localeCompare(y.slotLabel));
        return rows;
      })(),
      discAgentGroups: visibleGroups,
      orphanDiscs: orphans.map(e => discRow(e, null)),
      hasOrphans: orphans.length > 0 && !st.focusAgent,
      noDiscs: savedDiscs.length === 0,
      hasDiscs: savedDiscs.length > 0,
      discCount: savedDiscs.length + (savedDiscs.length === 1 ? " disc saved" : " discs saved"),
      // By agent IS Loadouts. The full inventory is a drawer under it rather than an equal tab,
      // because it is a reference list, not the thing you come here to do.
      byAgent: savedDiscs.length > 0,
      isMine: st.tab === "mine",
      // Master/detail: the list stays browsable while one disc's full readout sits beside it, so
      // the roster table gets the width it needs without collapsing the browse view.
      mineSel: st.mineSel,
      mineHasSel: !!st.mineSel,
      mineNoSel: !st.mineSel,
      // Side-by-side comparison: the candidate disc against whatever that agent is already wearing
      // in the same slot, so the decision is made on the actual lines rather than two letters.
      onModalStop: e => { if(e) e.stopPropagation(); },
      mineSort: st.mineSort,
      onMineSort: e => this.setState({mineSort: e.target.value}),
      mineSortStyle: {appearance:"none", minWidth:"150px", background:"#0f1114",
        color: st.mineSort === "saved" ? "#8a9099" : "#ecefe6",
        border:"1px solid " + (st.mineSort === "saved" ? "#2e333b" : "#e8ff45"),
        padding:"9px 30px 9px 11px", font:"500 15px/1.2 Barlow,sans-serif", cursor:"pointer"},
      // Two state toggles: what isn't on anyone, and what still has rolls left. Both are the
      // questions you open this tab with — "what can I still use" and "what needs work".
      mineUneq: st.mineUneq,
      mineUneqCount: savedDiscs.filter(e => !e.d.to).length,
      mineUneqSwitch: {position:"relative", display:"block", width:"34px", height:"18px",
        borderRadius:"9px", flex:"0 0 34px", pointerEvents:"none",
        border:"1px solid " + (st.mineUneq ? "#e8ff45" : "#2e333b"),
        background: st.mineUneq ? "#e8ff45" : "#171a1f"},
      mineUneqThumb: st.mineUneq ? "17px" : "1px",
      mineUneqTextStyle: {font:"500 13px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
        whiteSpace:"nowrap", color: st.mineUneq ? "#e8ff45" : "#8a9099"},
      onMineUneq: () => this.setState(s2 => ({mineUneq: !s2.mineUneq})),
      mineUnlev: st.mineUnlev,
      mineUnlevCount: savedDiscs.filter(e => ((st.upgrades[e.d.id] || {ticks: []}).ticks.length) < A.UP_TICKS).length,
      mineUnlevSwitch: {position:"relative", display:"block", width:"34px", height:"18px",
        borderRadius:"9px", flex:"0 0 34px", pointerEvents:"none",
        border:"1px solid " + (st.mineUnlev ? "#e8ff45" : "#2e333b"),
        background: st.mineUnlev ? "#e8ff45" : "#171a1f"},
      mineUnlevThumb: st.mineUnlev ? "17px" : "1px",
      mineUnlevTextStyle: {font:"500 13px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
        whiteSpace:"nowrap", color: st.mineUnlev ? "#e8ff45" : "#8a9099"},
      onMineUnlev: () => this.setState(s2 => ({mineUnlev: !s2.mineUnlev})),
      mineDetail: (() => {
        const sel = savedDiscs.find(e => e.d.id === st.mineSel);
        if(!sel) return {has: false};
        const d = sel.d;
        const rost = this.discRoster(d, st.mineExpanded);
        const row = discRow(sel, null);
        return {
          has: true,
          setName: d.set, slotLabel: A.SLOT_LABEL[d.slot], mainStat: d.main || "—",
          iconSrc: this.discIconPath(d.set), iconId: this.discIconId(d.set) + "-mine",
          hub: this.hubPair(d.set, 78).ring, hole: this.hubPair(d.set, 78).hole,
          lvl: "+" + ((st.upgrades[d.id] || {ticks: []}).ticks.length * 3),
          grade: row.ratingLabel, gradeStyle: row.ratingStyle, gradeTitle: row.ratingTitle,
          detailMains: row.detailMains, detailSubs: row.detailSubs, hasDetailSubs: row.hasDetailSubs,
          hasHint: row.hasHint,
          hintLabel: (() => {
            const inc = row.bestHomeName ? this.incumbentFor(d, row.bestHomeName) : {empty: true};
            const who = row.bestHomeName;
            const head = row.betterElsewhere
              ? who + " grades higher for this disc than whoever is wearing it."
              : who + " grades highest for this disc, and nobody is wearing it.";
            if(inc.empty) return head + " Their " + A.SLOT_LABEL[d.slot] + " is empty.";
            if(!inc.graded) return head + " They're wearing " + inc.set + " at +" + inc.lvl
              + " there, which doesn't have enough substats recorded to grade yet.";
            return head + " They're wearing " + inc.set + " at +" + inc.lvl
              + " there, which grades " + inc.grade + ".";
          })(),
          hintTitle: row.hintTitle,
          hintAction: "EQUIP ON " + (row.bestHomeName || "").toUpperCase(),
          onEquipBest: row.onEquipBest,
          hintBoxStyle: {display:"flex", alignItems:"center", gap:"11px", flexWrap:"wrap",
            margin:"0 0 14px", padding:"10px 12px",
            background: row.betterElsewhere ? "#e8ff450a" : "#6cc6ff0a",
            border:"1px solid " + (row.betterElsewhere ? "#e8ff4544" : "#6cc6ff33")},
          hintTextStyle: {font:"400 15px/1.4 Barlow,sans-serif", flex:"1 1 200px", minWidth:0,
            color: row.betterElsewhere ? "#d6c27a" : "#9fc9e8"},
          mineRows: rost.mine, hasMine: rost.mine.length > 0,
          mineLabel: rost.mine.length + (rost.mine.length === 1 ? " build" : " builds") + " on your roster",
          weakRows: rost.weak, hasWeak: rost.weak.length > 0,
          weakLabel: rost.weak.length + (rost.weak.length === 1 ? " build" : " builds") + " on your roster can use it",
          weakOpen: !!st.mineWeakOpen,
          weakGlyph: st.mineWeakOpen ? "▾" : "▸",
          onToggleWeak: () => this.setState(s2 => ({mineWeakOpen: !s2.mineWeakOpen})),
          otherRows: rost.others, hasOthers: rost.others.length > 0,
          othersLabel: rost.others.length + (rost.others.length === 1 ? " build" : " builds") + " off your roster",
          othersOpen: !!st.mineOthersOpen,
          othersGlyph: st.mineOthersOpen ? "▾" : "▸",
          onToggleOthers: () => this.setState(s2 => ({mineOthersOpen: !s2.mineOthersOpen})),
          hasNone: rost.mine.length === 0 && rost.weak.length === 0,
          noneLabel: rost.others.length
            ? "Nobody you track can use this disc — but " + rost.others.length + " untracked "
              + (rost.others.length === 1 ? "build" : "builds") + " could."
            : "No agent in the index can use this disc in any build.",
          thin: !rost.active,
          thinLabel: "Only " + rost.known + " of 4 substats recorded — ratings stay provisional until "
            + rost.threshold + " are in.",
          onClose: () => this.setState({mineSel: ""}),
          onLevel: row.onScan, onDelete: row.onArmDelete,
          favMark: row.favMark, favStyle: row.favStyle, onFav: row.onFav, favTitle: row.favTitle
        };
      })(),
      // ----- My discs / by agent -----
      // The inverse of the by-disc readout: instead of one disc and everyone who wants it, every
      // tracked agent and the saved discs that could go on them. Same candidate data, pivoted —
      // so a free disc's possible homes are all visible at once without selecting anything.
      mineView: st.mineView,
      mineViewChips: [
        {l:"By disc", v:"disc", t:"Pick one disc and see every build that can use it."},
        {l:"By agent", v:"agent", t:"Every agent you track, with the saved discs that fit them."}
      ].map(it => {
        const on = st.mineView === it.v;

    return {label: it.l, title: it.t,
          style: {font:"700 16px/1 'Chakra Petch',sans-serif", letterSpacing:".05em",
            textTransform:"uppercase", padding:"11px 17px", cursor:"pointer", minHeight:"42px",
            border:"1px solid " + (on ? "#e8ff45" : "#2e333b"),
            background: on ? "#e8ff45" : "#131519", color: on ? "#0b0c0e" : "#8a9099",
            clipPath:"polygon(7px 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%,0 7px)"},
          onClick: () => this.setState({mineView: it.v})};
      }),
      mineAgentQ: st.mineAgentQ,
      onMineAgentQ: e => this.setState({mineAgentQ: e.target.value}),
      mineAgentSearchStyle: {appearance:"none", width:"100%", minWidth:0, background:"#0f1114",
        color:"#ecefe6", border:"1px solid " + (st.mineAgentQ ? "#e8ff45" : "#2e333b"),
        padding:"10px 12px", font:"500 16px/1.2 Barlow,sans-serif"},
      mineAgents: mineAgentsList,
      byDisc: st.mineView === "disc" && savedDiscs.length > 0 && filteredDiscs.length > 0,
      byAgentMine: st.mineView === "agent" && savedDiscs.length > 0 && filteredDiscs.length > 0,
      mineAgentCount: (() => {
        const n = mineAgentsList.length;
        return n + (n === 1 ? " agent" : " agents");
      })(),
      mineNoAgentMatch: mineAgentsList.length === 0,
      mineNoAgentLabel: (st.mineAgentQ || "").trim()
        ? "No tracked agent matches \u201c" + st.mineAgentQ.trim() + "\u201d."
        : "None of your tracked agents can use the discs in this filter.",
      mineShowNoMatch: savedDiscs.length > 0 && filteredDiscs.length === 0,
      mineEmptyLabel: (() => {
        const parts = [];
        if(st.discSetFilter) parts.push(st.discSetFilter);
        if(st.discSlotFilter) parts.push(A.SLOT_LABEL[st.discSlotFilter]);
        if(st.mineUneq) parts.push("unequipped");
        if(st.mineUnlev) parts.push("below +15");
        return parts.length
          ? "Nothing saved in " + parts.join(" · ") + "."
          : "No saved discs match the current filters.";
      })(),
      showMineFilters: savedDiscs.length > 0,
      mineCountLine: (st.discSetFilter || st.discSlotFilter || st.mineUneq || st.mineUnlev)
        ? filteredDiscs.length + " of " + savedDiscs.length + " shown"
        : savedDiscs.length + (savedDiscs.length === 1 ? " disc saved" : " discs saved"),

      noRosterGroups: discAgentGroups.length === 0,
      noAgentMatch: discAgentGroups.length > 0 && visibleGroups.length === 0,
      noAgentMatchLine: 'No tracked agent matches "' + (st.discAgentQuery || "") + '".',
      discCountLine: agentQ
        ? visibleGroups.length + " of " + discAgentGroups.length + " agents shown"
        : savedDiscs.length + (savedDiscs.length === 1 ? " disc saved" : " discs saved"),
      showAgentSearch: savedDiscs.length > 0 && !st.focusAgent,
      discAgentQuery: st.discAgentQuery,
      onDiscAgentQuery: e => this.setState({discAgentQuery: e.target.value}),
      discSearchStyle: {width:"190px", background:"#0f1114", color:"#ecefe6",
        border:"1px solid " + (st.discAgentQuery ? "#e8ff45" : "#2e333b"),
        padding:"9px 11px", font:"500 16px/1.2 Barlow,sans-serif"},
      hasAgentQuery: !!st.discAgentQuery,
      onClearAgentQuery: () => this.setState({discAgentQuery: ""}),
      showDiscFilters: false,
      discSetFilter: st.discSetFilter,
      // only sets actually present among saved discs — an empty option is a dead end
      discSetOptions: [...new Set(savedDiscs.map(e => e.d.set))].sort(),
      onDiscSetFilter: e => this.setState({discSetFilter: e.target.value}),
      discFilterSelectStyle: {appearance:"none", minWidth:"200px", background:"#0f1114",
        color: st.discSetFilter ? "#ecefe6" : "#8a9099", border:"1px solid " + (st.discSetFilter ? "#e8ff45" : "#2e333b"),
        padding:"9px 30px 9px 11px", font:"500 16px/1.2 Barlow,sans-serif", cursor:"pointer"},
      discSlotButtons: ["s1","s2","s3","s4","s5","s6"].map(k => {
        const on = st.discSlotFilter === k;
        const n = savedDiscs.filter(e => e.d.slot === k).length;
        return {
          label: k.slice(1), active: on, count: n,
          title: n ? A.SLOT_LABEL[k] + " — " + n + (n === 1 ? " disc" : " discs") : A.SLOT_LABEL[k] + " — nothing saved",
          style: {padding:"8px 0", width:"40px", flex:"0 0 40px", textAlign:"center",
            font:"700 15px/1 'Chakra Petch',sans-serif", cursor: n ? "pointer" : "not-allowed",
            border:"1px solid " + (on ? "#e8ff45" : "#2e333b"),
            background: on ? "#e8ff45" : "#0f1114",
            color: on ? "#0b0c0e" : n ? "#ecefe6" : "#4d535c", opacity: n ? 1 : .5},
          onClick: () => n && this.setState({discSlotFilter: on ? "" : k})
        };
      }),
      hasDiscFilter: !!(st.discSetFilter || st.discSlotFilter || st.mineUneq || st.mineUnlev),
      onClearDiscFilters: () => this.setState({discSetFilter: "", discSlotFilter: "", mineUneq: false, mineUnlev: false}),
      floorChips: [{l:"A+", v:"A"}, {l:"B+", v:"B"}, {l:"C+", v:"C"}, {l:"All", v:"all"}].map(it => ({
        label: it.l, style: this.chip(st.gradeFloor === it.v),
        title: it.v === "all" ? "Show every disc each agent can use."
          : "Only list discs grading " + it.v + " or better — equipped discs always show.",
        onClick: () => this.setState({gradeFloor: it.v})
      })),
      onSaveDisc: () => this.saveDisc(),
      // Saving needs a set and a slot — the same bar the rest of the form's actions use. Main
      // stat and substats are optional, so a disc can be parked here before it's fully described.
      saveDiscDisabled: !discReady,
      saveDiscTitle: discReady ? "Save this disc to Loadouts." : "Pick a disc set and slot first.",
      saveDiscBtnStyle: {flex:"1 1 200px", minWidth:0, whiteSpace:"nowrap",
        background: discReady ? "#e8ff45" : "#171a1f",
        color: discReady ? "#0b0c0e" : "#4d535c",
        border: discReady ? "1px solid #e8ff45" : "1px solid #2e333b",
        padding:"11px 15px", font:"700 15px/1 'JetBrains Mono',monospace",
        letterSpacing:".08em", textTransform:"uppercase",
        cursor: discReady ? "pointer" : "not-allowed",
        opacity: discReady ? 1 : .6},
      sendScanBtnStyle: {background:"#171a1f",
        color: discReady ? "#ecefe6" : "#4d535c",
        border:"1px solid " + (discReady ? "#2e333b" : "#23272e"),
        padding:"11px 15px", font:"700 15px/1 'JetBrains Mono',monospace",
        letterSpacing:".08em", textTransform:"uppercase", whiteSpace:"nowrap",
        cursor: discReady ? "pointer" : "not-allowed", flex:"1 1 120px", minWidth:0,
        opacity: discReady ? 1 : .6},
      sendScanTitle: discReady
        ? "Save this disc and open it in Upgrades to track its rolls."
        : "Pick a disc set and slot first.",
      onSendScan: () => {
        const lv = this.formLevelled(st);
        if(!lv.ok){ this.flash(lv.msg); return; }
        const subs = lv.subs.slice(); while(subs.length < 4) subs.push("");
        this.sendToScan({set: st.setName, slot: st.slot, main: st.mainStat, subs: subs, id: "tmp"}, null, lv.ticks);
      },
      flashMsg: st.flashMsg, hasFlash: !!st.flashMsg, noFlash: !st.flashMsg,
      // Delete guard modal — backdrop click and KEEP IT both cancel; the panel swallows its own
      // clicks so hitting it doesn't dismiss.
      deletePending: !!st.pendingDelete,
      deleteLabel: st.pendingDelete ? st.pendingDelete.label : "",
      deleteReason: st.pendingDelete ? st.pendingDelete.reason : "",
      deleteGrade: st.pendingDelete ? st.pendingDelete.grade : "",
      deleteGradeStyle: {font:"800 26px/1 'Chakra Petch',sans-serif", letterSpacing:".02em",
        flex:"0 0 auto", color: st.pendingDelete ? st.pendingDelete.gradeColor : "#5f656e"},
      onCancelDelete: () => this.cancelDelete(),
      onConfirmDelete: () => { if(st.pendingDelete) this.removeDisc(st.pendingDelete.id); },
      movePending: !!st.pendingMove,
      moveLabel: st.pendingMove ? st.pendingMove.label : "",
      moveFrom: st.pendingMove ? st.pendingMove.from : "",
      moveTo: st.pendingMove ? st.pendingMove.to : "",
      moveGrade: st.pendingMove ? st.pendingMove.grade : "",
      moveGradeStyle: {font:"800 26px/1 'Chakra Petch',sans-serif",
        color: st.pendingMove ? st.pendingMove.gradeColor : "#5f656e", flex:"0 0 auto"},
      moveQuestion: st.pendingMove ? "Take it off " + st.pendingMove.from + "?" : "",
      moveBody: st.pendingMove
        ? st.pendingMove.from + " is wearing this disc. Moving it leaves that slot empty until you fill it again."
        : "",
      moveConfirmLabel: st.pendingMove ? "MOVE TO " + String(st.pendingMove.to).toUpperCase() : "",
      onCancelMove: () => this.cancelMove(),
      // Typing the word is the guard — this is the one action in the app with nothing behind it.
      wipeArmed: !!st.wipeArmed,
      wipeConfirm: st.wipeConfirm || "",
      wipeReady: String(st.wipeConfirm || "").trim().toUpperCase() === "DELETE",
      onArmWipe: () => this.setState({wipeArmed: true, wipeConfirm: ""}),
      onCancelWipe: () => this.setState({wipeArmed: false, wipeConfirm: ""}),
      onWipeInput: e => this.setState({wipeConfirm: e.target.value}),
      onWipeAll: () => { if(String(this.state.wipeConfirm || "").trim().toUpperCase() === "DELETE") this.wipeAll(); },
      wipeBtnStyle: (ready => ({padding:"11px 15px", minHeight:"44px", cursor: ready ? "pointer" : "not-allowed",
        font:"700 14px/1 'JetBrains Mono',monospace", letterSpacing:".1em",
        background: ready ? "#ff4d5e" : "#171a1f", color: ready ? "#0b0c0e" : "#4d535c",
        border:"1px solid " + (ready ? "#ff4d5e" : "#23272e"), opacity: ready ? 1 : .55}))(
        String(st.wipeConfirm || "").trim().toUpperCase() === "DELETE"),
      onConfirmMove: () => this.confirmMove(),
      // Backup tab: whether the browser has promised not to evict the data, the install button
      // (only once the browser has offered it), and the Safari warning. Safari deletes a site's
      // storage after 7 days without a visit unless it was added to the Home Screen.
      storageLabel: st.storagePersisted ? "Protected" : st.storagePersisted === false ? "Not protected yet" : "Unknown",
      storageColor: st.storagePersisted ? "#4ade80" : "#ffa02e",
      storageCanAsk: st.storagePersisted === false && !!(navigator.storage && navigator.storage.persist),
      onPersistStorage: () => this.persistStorage(true),
      canInstall: !!window.__pdInstallPrompt, onInstallApp: () => this.installApp(),
      showSafariNote: (() => {
        const ua = navigator.userAgent || "";
        const webkitOnly = /safari/i.test(ua) && !/chrome|chromium|crios|fxios|edg|android/i.test(ua);
        const homeScreen = navigator.standalone || (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
        return webkitOnly && !homeScreen;
      })(),

      portraitToggle: {
        onClick: () => this.setPortraitMode(st.portraitMode === "avatar" ? "icon" : "avatar"),
        trackColor: st.portraitMode === "avatar" ? "#e8ff45" : "#171a1f",
        thumbLeft: st.portraitMode === "avatar" ? "17px" : "1px",
        iconLabelColor: st.portraitMode === "icon" ? "#ecefe6" : "#5f656e",
        avatarLabelColor: st.portraitMode === "avatar" ? "#ecefe6" : "#5f656e"
      },

      // Header readout: live session state, not a restatement of the app's purpose — both plain
      // strings, no abbreviation, so the header surfaces Loadouts' contents before it's ever opened.
      trackedCount: st.shown.length + "/" + A.AGENTS.length,
      savedDiscsCount: String(st.discs.length),

      tabs: A.TABS.map(t => {
          // Loadouts is live. The farming planner is still a coming-soon placeholder, and Deep
          // scan unlocks on readiness as before.
          const soon = false;
          const util = t.kind === "util";
          return {id: t.id, n: t.n, label: t.label, short: t.short, desc: t.desc, kind: t.kind, soon: soon, util: util,
            onFlag: st.tab === t.id ? "1" : "0", current: st.tab === t.id ? "page" : "false",
            style: Object.assign(soon
              ? Object.assign(tabStyle(false, true), {cursor:"not-allowed", color:"#5f656e"})
              : tabStyle(st.tab === t.id, util), t.id === "backup" ? {marginLeft:"auto"} : {}),

            onClick: soon ? (e => { if(e) e.preventDefault(); }) : (() => this.setState({tab: t.id, moreOpen: false}))};
        }),
      // "More" collects whichever tabs don't fit the nav at the current width: the four utility
      // tabs below 1100px, plus Agent index and Area patrol in the phone's bottom bar. The CSS
      // decides which items show; the flags say whether the active tab is hiding in here.
      moreOpen: !!st.moreOpen, moreExpanded: st.moreOpen ? "true" : "false",
      moreActUtil: (A.TABS.find(t => t.id === st.tab) || {}).kind === "util" ? "1" : "0",
      moreActMore: (A.TABS.find(t => t.id === st.tab) || {}).kind === "more" ? "1" : "0",
      moreTabStyle: Object.assign(tabStyle(false, true), {marginLeft:"auto"}),
      onToggleMore: () => this.setState(s => ({moreOpen: !s.moreOpen})),
      onCloseMore: () => this.setState({moreOpen: false}),
      moreItems: A.TABS.filter(t => t.kind !== "main").map(t => ({id: t.id, n: t.n, label: t.label, desc: t.desc, kind: t.kind,
        onFlag: st.tab === t.id ? "1" : "0", current: st.tab === t.id ? "page" : "false",
        onClick: () => this.setState({tab: t.id, moreOpen: false})})),
      tabCaption: (t => ({n: t.n, label: t.label, desc: t.desc}))(A.TABS.find(t => t.id === st.tab) || A.TABS[0]),
      upList: upList, hasUpList: upList.length > 0,
      upSetOptions: [...new Set(savedDiscs.map(e => e.d.set))].sort(),
      upSetFilter: st.upSetFilter,
      onUpSetFilter: e => this.setState({upSetFilter: e.target.value}),
      upSetSelectStyle: {appearance:"none", width:"100%", background:"#0f1114",
        color: st.upSetFilter ? "#ecefe6" : "#8a9099",
        border:"1px solid " + (st.upSetFilter ? "#e8ff45" : "#2e333b"),
        padding:"9px 30px 9px 11px", font:"500 15px/1.2 Barlow,sans-serif", cursor:"pointer"},
      upSlotButtons: ["s1","s2","s3","s4","s5","s6"].map(k => {
        const on = st.upSlotFilter === k;
        const n = savedDiscs.filter(e => e.d.slot === k).length;
        return {
          label: k.slice(1),
          title: n ? A.SLOT_LABEL[k] + " — " + n + (n === 1 ? " disc" : " discs")
            : A.SLOT_LABEL[k] + " — nothing saved",
          style: {padding:"8px 0", flex:"1 1 0", minWidth:0, textAlign:"center",
            font:"700 15px/1 'Chakra Petch',sans-serif", cursor: n ? "pointer" : "not-allowed",
            border:"1px solid " + (on ? "#e8ff45" : "#2e333b"),
            background: on ? "#e8ff45" : "#0f1114",
            color: on ? "#0b0c0e" : n ? "#ecefe6" : "#4d535c", opacity: n ? 1 : .5},
          onClick: () => n && this.setState({upSlotFilter: on ? "" : k})
        };
      }),
      upHasMaxed: upMaxed > 0,
      upHideMaxed: st.upHideMaxed,
      upMaxedLabel: "Hide " + upMaxed + " at +15",
      upMaxedTitle: upMaxed + (upMaxed === 1 ? " disc is" : " discs are")
        + " fully levelled with nothing left to roll. Hide them to see only what still has decisions in it.",
      upMaxedSwitchStyle: {position:"relative", display:"block", width:"34px", height:"18px",
        borderRadius:"9px", flex:"0 0 34px", pointerEvents:"none",
        border:"1px solid " + (st.upHideMaxed ? "#e8ff45" : "#2e333b"),
        background: st.upHideMaxed ? "#e8ff45" : "#171a1f"},
      upMaxedThumb: st.upHideMaxed ? "17px" : "1px",
      upMaxedTextStyle: {font:"500 13px/1 'JetBrains Mono',monospace", letterSpacing:".05em",
        whiteSpace:"nowrap", color: st.upHideMaxed ? "#e8ff45" : "#8a9099"},
      onUpHideMaxed: () => this.setState(s2 => ({upHideMaxed: !s2.upHideMaxed})),
      hasSaved: savedDiscs.length > 0,
      upShowEmpty: savedDiscs.length === 0,
      upShowNoMatch: savedDiscs.length > 0 && upList.length === 0,
      // When the filters exclude the disc being tracked, its row is kept anyway — this says why,
      // so a row that shouldn't match doesn't look like the filter misfiring.
      upPinNote: (() => {
        if(!st.upSel || !(st.upSetFilter || st.upSlotFilter || st.upHideMaxed)) return "";
        const sel = savedDiscs.find(e => e.d.id === st.upSel);
        if(!sel) return "";
        const ticks = (st.upgrades[st.upSel] || {ticks: []}).ticks;
        const excluded = (st.upSetFilter && sel.d.set !== st.upSetFilter)
          || (st.upSlotFilter && sel.d.slot !== st.upSlotFilter)
          || (st.upHideMaxed && ticks.length >= A.UP_TICKS);
        return excluded ? "Still showing " + sel.d.set + " — it's the one you're tracking." : "";
      })(),
      upEmptyLabel: (() => {
        const parts = [];
        if(st.upSetFilter) parts.push(st.upSetFilter);
        if(st.upSlotFilter) parts.push(A.SLOT_LABEL[st.upSlotFilter]);
        const what = parts.length ? parts.join(" · ") : "";
        if(st.upHideMaxed) return what ? "Nothing in " + what + " left to level."
          : "Every saved disc is already at +15.";
        return "Nothing saved in " + what + " yet.";
      })(),
      onUpClearFilters: () => this.setState({upSetFilter: "", upSlotFilter: "", upHideMaxed: false}),
      up: up || {vert: {has: false}}, hasUp: !!up, noUp: !up,
      isCheck: st.tab === "check", isAgents: st.tab === "agents",
      isScore: st.tab === "score", isDiscs: st.tab === "discs", isBackup: st.tab === "backup",
      // The bay only appears once an agent is in focus — the landing state is the roster of rigs,
      // which is the question "who needs what", not "where does this disc go".
      focusOn: !!st.focusAgent && discAgentGroups.some(g2 => g2.name === st.focusAgent),
      focusName: st.focusAgent,
      gridMode: (!!st.focusAgent && discAgentGroups.some(g2 => g2.name === st.focusAgent)) ? "rigone" : "riggrid",
      onClearFocus: () => this.setState({focusAgent: "", discSel: "", selSlot: "", autoPlan: null}),
      // Build guide for the agent being edited: the primary build from the Agent index, checked
      // against what they're wearing, so you know what to look for without leaving the editor.
      hasGuideCard: !!guideCard, guideCards: guideCard ? [guideCard] : [],
      guideOpen: st.guideOpen,
      guideChevron: st.guideOpen ? "▾" : "▸",
      guideToggleLabel: st.guideOpen ? "Hide" : "Show",
      onToggleGuide: () => this.setState(s2 => {
        const v = !s2.guideOpen;
        try { localStorage.setItem("discTriage_guideOpen", v ? "1" : "0"); } catch(e){}
        return {guideOpen: v};
      }),
      guide: (() => {
        const ag = st.focusAgent ? A.AGENTS.find(x => x.n === st.focusAgent) : null;
        if(!ag) return {has: false};
        const b = this.getAgentBuilds(ag);
        const set = b.sets[0], stat = b.stats[0];
        const worn = savedDiscs.filter(e => e.d.to === ag.n).map(e => e.d);
        const cnt = n => worn.filter(d => d.set === n).length;
        const ok = "#4ade80", mid = "#e8ff45", off = "#8a9099";
        const status = (have, need) => have >= need
          ? {label: "✓ " + have + "/" + need, color: ok}
          : {label: have + "/" + need, color: have ? mid : off};
        // p2 entries can be a tied group (["A","B"]) rather than one name; flatten so every
        // consumer gets plain set names
        const p4Name = Array.isArray(set.p4) ? set.p4[0] : set.p4;
        const four = status(cnt(p4Name), 4);
        const p2 = [].concat.apply([], (set.p2 || []).map(x => Array.isArray(x) ? x : [x])).filter(Boolean);
        const p2Best = p2.reduce((m, n) => Math.max(m, cnt(n)), 0);
        const two = status(p2Best, 2);
        const slotRow = k => {
          const list = (stat.mains && stat.mains[k]) || [];
          const cur = worn.find(d => d.slot === k);
          const r = cur ? list.indexOf(cur.main) : -1;
          const st2 = !cur ? {label: "empty", color: off}
            : r === 0 ? {label: "✓ " + cur.main, color: ok}
            : r > 0 ? {label: cur.main + " · alt", color: mid}
            : {label: cur.main + " · off-build", color: "#ff4d5e"};
          const on = st.selSlot === k;
          return {num: k.slice(1), want: list.length ? list.join(" › ") : "—",
            statusLabel: st2.label,
            statusStyle: {font:"500 12px/1.2 'JetBrains Mono',monospace", color: st2.color, whiteSpace:"nowrap",
              overflow:"hidden", textOverflow:"ellipsis", minWidth:0, maxWidth:"45%", textAlign:"right"},
            rowStyle: {display:"flex", alignItems:"center", gap:"10px", padding:"8px 10px",
              background: on ? "#e8ff450d" : "#0f1114", border:"1px solid " + (on ? "#e8ff4566" : "#1e2228")},
            numStyle: {font:"700 13px/1 'JetBrains Mono',monospace", color: on ? "#e8ff45" : "#8a9099", flex:"0 0 22px"}};
        };
        // substat ladder: tied entries share a rank and a colour
        let rank = 0;
        const ladder = (stat.sub || []).map(entry => {
          rank++;
          const names = Array.isArray(entry) ? entry : [entry];
          const c = this.depthTone(rank);
          return {label: names.join(" / "),
            style: {font:"600 13px/1.2 Barlow,sans-serif", padding:"6px 9px", whiteSpace:"nowrap",
              border:"1px solid " + c + "88", color:"#ecefe6", background: c + "14"}};
        });
        return {has: true,
          altNote: (b.sets.length > 1 || b.stats.length > 1)
            ? "Primary build shown — alternatives are in the Agent index." : "",
          hasAlt: b.sets.length > 1 || b.stats.length > 1,
          p4: p4Name || "—", p4Src: p4Name ? this.discIconPath(p4Name) : "", p4Id: p4Name ? this.discIconId(p4Name) + "-guide4" : "g4",
          fourLabel: four.label, fourStyle: {font:"700 12px/1 'JetBrains Mono',monospace", color: four.color, whiteSpace:"nowrap"},
          p2First: p2[0] || "—", p2Src: p2[0] ? this.discIconPath(p2[0]) : "", p2Id: p2[0] ? this.discIconId(p2[0]) + "-guide2" : "g2",
          p2More: p2.length > 1 ? "or " + p2.slice(1).join(", ") : "", hasP2More: p2.length > 1,
          twoLabel: two.label, twoStyle: {font:"700 12px/1 'JetBrains Mono',monospace", color: two.color, whiteSpace:"nowrap"},
          mains: ["s4","s5","s6"].map(slotRow),
          ladder: ladder};
      })(),
      loSortChips: [["score","Build score"],["attention","Needs attention"],["name","Name"]].map(([v, l]) => ({
        label: l, style: this.segBtn(st.loSort === v),
        title: v === "attention" ? "Agents with empty slots that already have a fitting free disc come first."
          : v === "score" ? "Highest build score first." : "Alphabetical.",
        onClick: () => this.setState({loSort: v})})),
      hasPrevAgent: navIdx > 0, hasNextAgent: navIdx >= 0 && navIdx < navOrder.length - 1,
      prevAgentName: navIdx > 0 ? navOrder[navIdx - 1] : "",
      nextAgentName: navIdx >= 0 && navIdx < navOrder.length - 1 ? navOrder[navIdx + 1] : "",
      onPrevAgent: () => { if(navIdx > 0) this.enterFocus(navOrder[navIdx - 1], "", ""); this.setState({autoPlan: null}); },
      onNextAgent: () => { if(navIdx >= 0 && navIdx < navOrder.length - 1) this.enterFocus(navOrder[navIdx + 1], "", ""); this.setState({autoPlan: null}); },
      navPosLabel: navIdx >= 0 ? (navIdx + 1) + " / " + navOrder.length : "",
      prevAgentStyle: (() => { const ok = navIdx > 0; return {background:"#171a1f", border:"none", width:"34px", height:"32px",
        font:"700 14px/1 sans-serif", color: ok ? "#ecefe6" : "#4d535c", cursor: ok ? "pointer" : "not-allowed", opacity: ok ? 1 : .55}; })(),
      nextAgentStyle: (() => { const ok = navIdx >= 0 && navIdx < navOrder.length - 1; return {background:"#171a1f", border:"none", width:"34px", height:"32px",
        font:"700 14px/1 sans-serif", color: ok ? "#ecefe6" : "#4d535c", cursor: ok ? "pointer" : "not-allowed", opacity: ok ? 1 : .55}; })(),
      ...(() => {
        const g = st.focusAgent ? discAgentGroups.find(x => x.name === st.focusAgent) : null;
        const reviewing = !!(st.autoPlan && st.autoPlan.agent === st.focusAgent);
        // Best whole build from the discs you own. Objective: sum of each slot's fit score, plus a
        // bonus for completing the agent's 4pc set and one for any recommended 2pc beside it — so a
        // slightly weaker piece that finishes a 4pc can beat a better loose one. Each slot keeps its
        // top three by score plus the best piece of every set the build wants, which keeps the search
        // exact over the combinations that matter while staying a few thousand evaluations.
        const optimise = () => {
          if(!g || !g.optSlots) return [];
          const ag = A.AGENTS.find(x => x.n === g.name);
          const bld = this.getAgentBuilds(ag).sets[0] || {};
          const p4 = (Array.isArray(bld.p4) ? bld.p4[0] : bld.p4) || "";
          const p2 = [].concat.apply([], (bld.p2 || []).map(x => Array.isArray(x) ? x : [x])).filter(n => n && n !== p4);
          const want = new Set([p4].concat(p2).filter(Boolean));
          const slots = g.optSlots.map(sl => {
            const byScore = sl.list.slice().sort((x, y) => y.score - x.score);
            const keep = byScore.slice(0, 3);
            want.forEach(set => {
              const best = byScore.find(x => x.set === set);
              if(best && keep.indexOf(best) < 0) keep.push(best);
            });
            const cur = sl.list.find(x => x.cur);
            if(cur && keep.indexOf(cur) < 0) keep.push(cur);
            return {slot: sl.slot, cur: sl.cur, curSet: sl.curSet, opts: keep.length ? keep : [null]};
          });
          const B4 = 1.2, B2 = .6;
          let best = null, bestVal = -Infinity;
          const pick = [], cnt = {};
          const walk = i => {
            if(i === slots.length){
              let v = 0;
              pick.forEach(x => { if(x) v += x.score + (x.cur ? 1e-6 : 0); });
              if(p4 && (cnt[p4] || 0) >= 4) v += B4;
              if(p2.some(n => (cnt[n] || 0) >= 2)) v += B2;
              if(v > bestVal){ bestVal = v; best = pick.slice(); }
              return;
            }
            slots[i].opts.forEach(o => {
              pick.push(o); if(o) cnt[o.set] = (cnt[o.set] || 0) + 1;
              walk(i + 1);
              pick.pop(); if(o) cnt[o.set]--;
            });
          };
          walk(0);
          if(!best) return [];
          return slots.map((sl, i) => ({sl: sl, o: best[i]}))
            .filter(x => x.o && x.o.id !== x.sl.cur)
            .map(x => ({slot: x.sl.slot, id: x.o.id, replaces: x.sl.cur,
              label: A.SLOT_LABEL[x.sl.slot] + " · " + (x.sl.curSet ? x.sl.curSet + " → " : "") + x.o.set,
              grade: x.o.g.grade,
              gradeStyle: {font:"800 15px/1 'Chakra Petch',sans-serif", color: x.o.g.color, flex:"0 0 auto"}}));
        };
        return {
          canAutoFill: !!(g && g.optSlots) && !reviewing,
          autoFillLabel: "Optimise build",
          onAutoFill: () => {
            const items = optimise();
            if(!items.length){ this.flash("This is already the best build your saved discs allow."); return; }
            this.setState({autoPlan: {agent: st.focusAgent, items: items}});
          },
          autoReviewing: reviewing,
          autoItems: reviewing ? st.autoPlan.items : [],
          onAutoApply: () => {
            const items = (this.state.autoPlan && this.state.autoPlan.items) || [];
            const agent = this.state.autoPlan && this.state.autoPlan.agent;
            this.setState(s2 => {
              const out = new Set(items.map(it => it.replaces).filter(Boolean));
              const discs = s2.discs.map(d => items.some(it => it.id === d.id) ? Object.assign({}, d, {to: agent})
                : out.has(d.id) ? Object.assign({}, d, {to: ""}) : d);
              this.persistDiscs(discs);
              return {discs: discs, autoPlan: null};
            });
            this.flash("Updated " + items.length + (items.length === 1 ? " slot" : " slots") + " on " + agent + ".");
          },
          onAutoCancel: () => this.setState({autoPlan: null})
        };
      })(),
      // ----- the shared disc bay beside the rigs -----
      bayDiscs: bayList, hasBay: bayList.length > 0,
      ...(() => {
        const n = !st.focusAgent ? 0 : savedDiscs.filter(e => e.d.to && e.d.to !== st.focusAgent
          && (!st.selSlot || e.d.slot === st.selSlot)
          && ((st.bayAll && st.selSlot) || this.fitsSettings(e, st.focusAgent))
          && ((st.bayAll && st.selSlot) || hiddenOpen[st.focusAgent] || !bayBuried(e))
          && (st.bayFloor === "all" || bayGradeFor(e) >= bayFloorRank)).length;
        const on = !!st.bayShowWorn;
        return {
          hasWornToggle: !!st.focusAgent && n > 0,
          wornLabel: "Show worn by others (" + n + ")",
          wornTitle: on ? "Hide discs other agents are wearing." : "Also show discs other agents are already wearing.",
          wornTrack: on ? "#e8ff45" : "#171a1f",
          wornThumb: on ? "17px" : "1px",
          wornLabelColor: on ? "#e8ff45" : "#8a9099",
          onToggleWorn: () => this.setState(x => ({bayShowWorn: !x.bayShowWorn}))
        };
      })(),
      bayCount: bayList.length + (bayList.length === 1 ? " disc" : " discs"),
      bayHead: st.selSlot ? "Fitting " + A.SLOT_LABEL[st.selSlot] : "Disc bay",
      bayHeadStyle: {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".13em",
        textTransform:"uppercase", whiteSpace:"nowrap",
        color: st.selSlot ? "#e8ff45" : "#8a9099"},
      bayFloorChips: [{l:"ALL", v:"all"}, {l:"D+", v:"D"}, {l:"C+", v:"C"}, {l:"B+", v:"B"}, {l:"A+", v:"A"}, {l:"S", v:"S"}].map(it => ({
        label: it.l, style: this.chip(st.bayFloor === it.v),
        title: it.v === "all" ? "Every disc that fits, whatever it grades."
          : "Only discs grading " + it.v + " or better for this agent.",
        onClick: () => this.setState({bayFloor: it.v})
      })),
      bayFloorOn: st.bayFloor !== "all",
      baySlotOn: !!st.selSlot,
      bayAllAgentLabel: st.focusAgent ? "← All discs for " + st.focusAgent : "",
      hasBayAllAgent: !!st.selSlot && !!st.focusAgent,
      onBayAllAgent: () => this.setState({selSlot: "", discSel: "", bayAll: false}),
      bayAllLinkLabel: st.bayAll ? "ONLY FITTING" : "SHOW ALL",
      bayAllLinkColor: st.bayAll ? "#6cc6ff" : "#8a9099",
      baySlotTitle: st.bayAll
        ? "Showing every saved disc for this slot, including ones this agent has no build for. Back to just the ones that fit."
        : "Show every saved disc for this slot, including ones this agent has no build for and any you've hidden or reserved.",
      onClearBaySlot: () => this.setState(s2 => ({bayAll: !s2.bayAll})),
      bayEmptyNote: st.bayFloor !== "all"
        ? "Nothing here grades " + st.bayFloor + " or better" + (st.selSlot ? " for " + A.SLOT_LABEL[st.selSlot] : "") + ". Lower the floor to see the rest."
        : st.selSlot
        ? "Nothing saved for " + A.SLOT_LABEL[st.selSlot] + " yet."
        : "Your disc bag is empty, Proxy. Describe one on Scrap or stash and hit Save to Loadouts.",
      bayEmpty: !bayList.length,
      bayAllTitle: st.bayAll
        ? "Showing every saved disc, including ones this agent has no build for. Switch off to see only the discs that suit them."
        : "Only discs this agent has a build for. Switch on to show every saved disc — the game lets you equip anything, even a main stat they don't want.",
      bayAllPillStyle: {display:"flex", alignItems:"center", gap:"7px", padding:"5px 8px",
        background: st.bayAll ? "#6cc6ff0a" : "#0f1114",
        border:"1px solid " + (st.bayAll ? "#6cc6ff40" : "#1e2228"),
        cursor:"pointer", userSelect:"none"},
      bayAllSwitchStyle: {position:"relative", display:"block", width:"26px", height:"14px",
        borderRadius:"7px", flex:"0 0 26px", pointerEvents:"none",
        border:"1px solid " + (st.bayAll ? "#6cc6ff" : "#2e333b"),
        background: st.bayAll ? "#6cc6ff" : "#171a1f"},
      bayAllThumbLeft: st.bayAll ? "13px" : "1px",
      bayAllLabelStyle: {font:"700 11px/1 'JetBrains Mono',monospace", letterSpacing:".07em",
        whiteSpace:"nowrap", color: st.bayAll ? "#6cc6ff" : "#8a9099"},
      onToggleBayAll: () => this.setState({bayAll: !this.state.bayAll}),
      sel: selDisc || {}, hasSel: !!selDisc && !st.bayAdd, noSel: !selDisc && !st.bayAdd,
      // ----- add a new disc straight from the bay -----
      ...(() => {
        const nd = st.bayAdd;
        const on = !!nd;
        const slot = on ? nd.slot : "";
        const fixed = !!(slot && A.FIXED_MAIN[slot]);
        const subs = on ? nd.subs : [];
        const main = on ? (fixed ? A.FIXED_MAIN[slot] : nd.main) : "";
        const ready = !!(on && nd.set && slot);
        const who = st.focusAgent;
        const upd = patch => this.setState(s2 => ({bayAdd: Object.assign({}, s2.bayAdd, patch)}));
        const save = equip => {
          if(!ready) return;
          const id = "d" + Date.now();
          const disc = {id: id, set: nd.set, slot: slot, main: main,
            subs: subs.concat(["","","",""]).slice(0, 4), to: equip && who ? who : ""};
          this.setState(s2 => {
            const discs = s2.discs.map(d => (equip && who && d.to === who && d.slot === slot)
              ? Object.assign({}, d, {to: ""}) : d).concat([disc]);
            this.persistDiscs(discs);
            return {discs: discs, bayAdd: null, discSel: id};
          });
          this.flash(equip && who ? "Saved and equipped on " + who + "." : "Saved to your discs.");
        };
        return {
          bayAddOn: on,
          bayAddTileStyle: {display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between",
            gap:"8px", padding:"12px 6px 14px", minWidth:0, cursor:"pointer",
            background: on ? "#e8ff450a" : "transparent",
            border:"1px dashed " + (on ? "#e8ff45" : "#2e333b")},
          onBayAdd: () => this.setState({discSel: "", bayAdd: {set: "", slot: st.selSlot || "",
            main: st.selSlot ? this.defaultMain("", st.selSlot) : "", subs: []}}),
          onAddCancel: () => this.setState({bayAdd: null}),
          addSet: on ? nd.set : "",
          onAddSet: e => upd({set: e.target.value}),
          addSlotButtons: ["s1","s2","s3","s4","s5","s6"].map(k => {
            const act = slot === k;
            return {label: k.slice(1), title: A.SLOT_LABEL[k] + (A.FIXED_MAIN[k] ? " · " + A.FIXED_MAIN[k] + " fixed" : ""),
              style: {padding:"8px 0", flex:"1 1 0", minWidth:0, textAlign:"center",
                font:"700 15px/1 'Chakra Petch',sans-serif", cursor:"pointer",
                border:"1px solid " + (act ? "#e8ff45" : "#2e333b"),
                background: act ? "#e8ff45" : "#0f1114", color: act ? "#0b0c0e" : "#ecefe6"},
              onClick: () => upd({slot: k, main: this.defaultMain(nd.set, k),
                subs: subs.filter(x => x !== (A.FIXED_MAIN[k] || this.defaultMain(nd.set, k)))})};
          }),
          addNeedSlot: on && !slot,
          addHasSlot: on && !!slot,
          addMain: main, addMainFixed: fixed,
          addMainOptions: slot ? this.slotOptions(slot) : [],
          onAddMain: e => { const v = e.target.value; upd({main: v, subs: subs.filter(x => x !== v)}); },
          addMainStyle: {appearance:"none", width:"100%", background:"#0f1114", color: fixed ? "#8a9099" : "#ecefe6",
            border:"1px solid #2e333b", padding:"9px 30px 9px 11px", font:"500 16px/1.2 Barlow,sans-serif",
            cursor: fixed ? "not-allowed" : "pointer", opacity: fixed ? .6 : 1},
          addSubChips: A.SUBSTAT_ORDER.map(name => {
            const idx = subs.indexOf(name), picked = idx >= 0, isMain = name === main;
            const full = subs.length >= 4, dead = isMain || (!picked && full);
            return {label: name, num: picked ? String(idx + 1) : "", hasNum: picked,
              style: {display:"flex", alignItems:"center", justifyContent:"center", gap:"6px",
                padding:"8px 6px", minWidth:0, font:"600 14px/1.2 Barlow,sans-serif",
                cursor: dead ? "not-allowed" : "pointer",
                background: picked ? "#e8ff45" : "#0f1114",
                border:"1px solid " + (picked ? "#e8ff45" : "#2e333b"),
                color: picked ? "#0b0c0e" : dead ? "#4d535c" : "#ecefe6",
                opacity: isMain ? .45 : (!picked && full) ? .6 : 1,
                textDecoration: isMain ? "line-through" : "none"},
              numStyle: {font:"700 10px/1 'JetBrains Mono',monospace", width:"15px", height:"15px",
                borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
                background:"#0b0c0e", color:"#e8ff45", flex:"0 0 15px"},
              onClick: () => {
                if(isMain && !picked) return;
                if(picked) upd({subs: subs.filter(x => x !== name)});
                else if(!full) upd({subs: subs.concat([name])});
              }};
          }),
          addReady: ready,
          addHasAgent: !!who,
          addEquipLabel: who ? "Save & equip on " + who : "",
          addSaveStyle: {flex:"1 1 auto", background: ready ? "#171a1f" : "#131519", color: ready ? "#ecefe6" : "#4d535c",
            border:"1px solid " + (ready ? "#2e333b" : "#23272e"), padding:"10px 12px",
            font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".09em", textTransform:"uppercase",
            cursor: ready ? "pointer" : "not-allowed", opacity: ready ? 1 : .6},
          addEquipStyle: {flex:"1 1 auto", background: ready ? "#e8ff45" : "#131519", color: ready ? "#0b0c0e" : "#4d535c",
            border:"1px solid " + (ready ? "#e8ff45" : "#23272e"), padding:"10px 12px",
            font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".09em", textTransform:"uppercase",
            cursor: ready ? "pointer" : "not-allowed", opacity: ready ? 1 : .6},
          onAddSave: () => save(false),
          onAddSaveEquip: () => save(true)
        };
      })(), isHelp: st.tab === "help", isSettings: st.tab === "settings",
      ...(() => {
        const dp = st.dupPending;
        const cur = st.setName && st.slot ? this.nearKey({set: st.setName, slot: st.slot, main: st.mainStat, subs: (st.subsBySlot || {})[st.slot] || []}) : "";
        const on = !!dp && dp.key === cur && st.tab === "check";
        return {dupOn: on, dupLabel: on ? dp.label : "",
          onDupSave: () => { this._dupOk = dp.key; this.setState({dupPending: null}); this.saveDisc(); },
          onDupShow: () => this.setState({tab: "mine", mineView: "disc", mineSel: dp.id, dupPending: null}),
          onDupCancel: () => this.setState({dupPending: null})};
      })(),
      onShareBuild: () => this.shareBuild(st.focusAgent),
      ocrBusy: st.ocrState === "busy", ocrHasMsg: !!st.ocrState && st.ocrState !== "busy", ocrMsg: st.ocrMsg || "",
      ocrMsgStyle: {font:"500 14px/1.4 Barlow,sans-serif", color: st.ocrState === "err" ? "#ff8a95" : "#ecefe6"},
      ocrBoxStyle: {marginTop:"9px", padding:"9px 11px", border:"1px solid " + (st.ocrState === "err" ? "#5e2226" : "#2e5a3e"),
        background: st.ocrState === "err" ? "#1f0e10" : "#0e1a13", display:"flex", gap:"10px", alignItems:"flex-start"},
      ocrHasNotes: (st.ocrNotes || []).length > 0,
      ocrNotesLine: (st.ocrNotes || []).length ? "Couldn't read " + st.ocrNotes.join(", ").replace(/, ([^,]*)$/, " or $1") + " — fill that in below." : "",
      onOcrPick: () => { const el = document.querySelector('[data-pd="ocrfile"]'); if(el){ el.value = ""; el.click(); } },
      onOcrFile: e => { const f = e.target.files && e.target.files[0]; if(f) this.importScreenshot(f); },
      onOcrDrop: e => { e.preventDefault(); const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if(f) this.importScreenshot(f); },
      onOcrDragOver: e => e.preventDefault(),
      onOcrDismiss: () => this.setState({ocrState: "", ocrMsg: "", ocrNotes: []}),
      ...(() => {
        const T = this.constructor.TOUR;
        const i = st.tab === "check" ? st.tourStep : 0;
        const step = i ? T[i - 1] : null;
        return {
          tourOn: !!step, tourStepKey: step ? step.key : "",
          showTryExample: st.tab === "check" && !st.setName && !st.tourStep,
          tourSide: step && step.key === "result" ? "left:18px" : "right:18px",
          tourTitle: step ? step.title : "", tourText: step ? step.text : "",
          tourCount: step ? "Step " + i + " of " + T.length : "",
          tourHasBack: i > 1, tourNextLabel: i === T.length ? "Got it" : "Next",
          tourDots: T.map((x, k) => ({style: {width:"7px", height:"7px", borderRadius:"50%",
            background: k + 1 === i ? "#e8ff45" : k + 1 < i ? "#8a7a3c" : "#2e333b"}})),
          onTourNext: () => { if(i >= T.length) this.endTour(); else this.setState({tourStep: i + 1}); },
          onTourBack: () => { if(i > 1) this.setState({tourStep: i - 1}); },
          onTourSkip: () => this.endTour(),
          onStartTour: () => this.startTour(),
          undoOn: !!st.undoLabel, undoLabel: st.undoLabel || "", undoBottom: step ? "240px" : "18px",
          onUndo: () => this.undoLast(),
          onUndoClose: () => { clearTimeout(this._undoT); this.setState({undoLabel: ""}); }
        };
      })(),
      ...(() => {
        // a fresh set of jokes on each visit, and a different one whenever the tab changes
        if(this._adSeed == null) this._adSeed = Math.floor(Math.random() * 1000);
        const t = ["check","discs","mine","score","agents","farming","backup","help","settings"].indexOf(st.tab);
        const b = this._adSeed + Math.max(0, t) * 3;
        return {adsOn: !!st.adsOn, onCloseAds: e => this.closeAds(e),
          jokeBox: this.jokeAd(b + 1), jokeBox2: this.jokeAd(b + 1), jokeBot: this.jokeAd(b + 2)};
      })(),
      isFarming: st.tab === "farming",
      ...(() => {
        if(st.tab !== "farming") return {};
        const A = this.constructor;
        const G = {S:"#f5a623", A:"#b98cff", B:"#6cc6ff", C:"#4ade80", D:"#8a9099", F:"#ff4d5e"};
        const tracked = A.AGENTS.filter(a => this.rosterOf(a.n) !== "off").sort((x, y) => x.n.localeCompare(y.n));
        const skip = st.patrolSkip || [];
        const focus = tracked.filter(a => skip.indexOf(a.n) < 0);
        const plan = this.patrolPlan(focus);
        const anyMission = A.MISSIONS.some(m => m.sets.filter(Boolean).length === 2);
        const view = st.patrolView || (anyMission ? "missions" : "sets");
        const maxSet = plan.sets.length ? plan.sets[0].total : 1;
        const disc = (n, px) => ({position:"relative", display:"block", flex:"0 0 " + px + "px", width: px + "px", height: px + "px",
          borderRadius:"50%", backgroundColor:"#000", backgroundSize:"cover", backgroundPosition:"center",
          backgroundImage: n ? 'url("' + this.discIconPath(n) + '")' : "none",
          boxShadow: n ? "0 0 0 1px rgba(255,255,255,.16)" : "inset 0 0 0 2px #2e333b"});
        const hole = px => ({position:"absolute", top:"50%", left:"50%", width: Math.round(px * .14) + "px", height: Math.round(px * .14) + "px",
          borderRadius:"50%", transform:"translate(-50%,-50%)", background:"#0b0c0e"});
        const whoChips = (who, max) => who.slice(0, max).map(w => {
          const c = w.piece === "4pc" ? "#e8ff45" : "#6cc6ff";
          return {label: w.agent.n, tag: w.piece.toUpperCase(), faceStyle: this.faceStyle(w.agent.n, 20),
            title: w.agent.n + " — " + w.piece + " · " + w.weak + (w.weak === 1 ? " slot" : " slots") + " that could use it",
            style: {display:"inline-flex", alignItems:"center", gap:"6px", padding:"4px 8px 4px 4px", background:"#0f1114",
              border:"1px solid #262a31", font:"600 14px/1 Barlow,sans-serif", color:"#ecefe6", whiteSpace:"nowrap"},
            tagStyle: {font:"700 10px/1 'JetBrains Mono',monospace", letterSpacing:".08em", color: c}};
        });
        const setRows = (st.patrolAllSets ? plan.sets : plan.sets.slice(0, 10)).map((x, i) => ({
          rank: String(i + 1).padStart(2, "0"), set: x.set,
          discStyle: disc(x.set, 50), holeStyle: hole(50),
          value: (Math.round(x.total * 10) / 10).toFixed(1),
          barStyle: {position:"absolute", inset:"0 auto 0 0", width: Math.max(3, Math.round(x.total / maxSet * 100)) + "%",
            background: i === 0 ? "#e8ff45" : i < 3 ? "#e5d64a" : "#6cc6ff"},
          rankStyle: {font:"700 15px/1 'JetBrains Mono',monospace", color: i === 0 ? "#e8ff45" : "#8a9099", width:"26px", flex:"0 0 26px"},
          who: whoChips(x.who, 5), more: x.who.length > 5 ? "+" + (x.who.length - 5) : "",
          title: x.who.length + (x.who.length === 1 ? " agent" : " agents") + " would gain from this set."
        }));
        const maxMission = Math.max(.001, ...plan.missions.map(x => x.total));
        const missionCards = plan.missions.map((x, i) => {
          const slug = x.m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
          const sets = x.m.sets.map(n => {
            const f = n ? plan.sets.find(y => y.set === n) : null;
            return {name: n || "Set TBA", has: !!n, discStyle: disc(n, 44), holeStyle: hole(44),
              nameStyle: {font:"600 14px/1.2 Barlow,sans-serif", color: n ? "#ecefe6" : "#5f656e", minWidth:0,
                whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"},
              val: f ? (Math.round(f.total * 10) / 10).toFixed(1) : (n ? "0.0" : "")};
          });
          const who = {};
          x.m.sets.filter(Boolean).forEach(n => { const f = plan.sets.find(y => y.set === n); if(f) f.who.forEach(w => {
            if(!who[w.agent.n] || w.val > who[w.agent.n].val) who[w.agent.n] = w; }); });
          const whoList = Object.keys(who).map(k => who[k]).sort((p, q) => q.val - p.val);
          const best = x.known && i === 0 && x.total > 0;
          return {
            name: x.m.name, known: x.known, unknown: !x.known, best: best,
            enemies: [1, 2].map(k => {
              const p = "enemies/" + slug + "-" + k + ".webp", ok = this.enemyOk(p);
              return {ok: ok, missing: !ok, style: {position:"absolute", inset:"0", backgroundImage: ok ? 'url("' + p + '")' : "none",
                backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}};
            }),
            sets: sets,
            value: x.known ? (Math.round(x.total * 10) / 10).toFixed(1) : "—",
            barStyle: {position:"absolute", inset:"0 auto 0 0", width: x.known ? Math.max(3, Math.round(x.total / maxMission * 100)) + "%" : "0%",
              background: best ? "#e8ff45" : "#6cc6ff"},
            who: whoChips(whoList, 6), more: whoList.length > 6 ? "+" + (whoList.length - 6) : "",
            cardStyle: {background:"radial-gradient(rgba(255,255,255,.045) .9px,transparent 1.3px) 0 0/5px 5px,#131519",
              border:"1px solid " + (best ? "#e8ff45" : "#262a31"), boxShadow: best ? "0 0 0 1px #e8ff4533" : "none",
              padding:"14px", display:"grid", gap:"12px", minWidth:0,
              clipPath:"polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)"}
          };
        });
        return {
          patrolIsMissions: view === "missions", patrolIsSets: view === "sets",
          patrolViewChips: [["missions","Cleanup missions"],["sets","Best sets"]].map(([v, l]) => ({
            label: l, style: {font:"700 15px/1 'Chakra Petch',sans-serif", letterSpacing:".05em", textTransform:"uppercase",
              padding:"10px 15px", cursor:"pointer", minHeight:"40px", whiteSpace:"nowrap",
              border:"1px solid " + (view === v ? "#e8ff45" : "#2e333b"),
              background: view === v ? "#e8ff45" : "#131519", color: view === v ? "#0b0c0e" : "#8a9099",
              clipPath:"polygon(7px 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%,0 7px)"},
            onClick: () => this.setState({patrolView: v})})),
          patrolFocusLabel: focus.length === tracked.length ? "All " + tracked.length + " tracked agents"
            : focus.length + " of " + tracked.length + " tracked agents",
          patrolPickOpen: !!st.patrolPickOpen,
          onTogglePatrolPick: () => this.setState(s2 => ({patrolPickOpen: !s2.patrolPickOpen})),
          patrolPickChevron: st.patrolPickOpen ? "▲" : "▼",
          patrolAgents: tracked.map(a => {
            const on = skip.indexOf(a.n) < 0, rc = a.r === "S" ? "#f5a623" : "#b98cff";
            return {name: a.n, faceStyle: this.faceStyle(a.n, 24, !on), title: on ? "Counted — click to leave out." : "Left out — click to count.",
              style: {display:"flex", alignItems:"center", gap:"7px", padding:"8px 10px", cursor:"pointer", minWidth:0, textAlign:"left",
                background: on ? "#131519" : "#0b0c0e", border:"1px solid " + (on ? "#2e333b" : "#1e2228"),
                borderLeft:"3px solid " + (on ? rc : "#262a31")},
              nameStyle: {flex:1, minWidth:0, font:"600 14px/1.2 Barlow,sans-serif", color: on ? "#ecefe6" : "#5f656e",
                whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", textDecoration: on ? "none" : "line-through"},
              mark: on ? "✓" : "",
              onClick: () => this.setPatrolSkip(on ? skip.concat([a.n]) : skip.filter(n => n !== a.n))};
          }),
          onPatrolAll: () => this.setPatrolSkip([]),
          onPatrolNone: () => this.setPatrolSkip(tracked.map(a => a.n)),
          patrolNoFocus: focus.length === 0,
          patrolSetRows: setRows, patrolHasSets: setRows.length > 0, patrolNoSets: focus.length > 0 && setRows.length === 0,
          patrolHasMoreSets: !st.patrolAllSets && plan.sets.length > 10,
          patrolMoreLabel: "Show all " + plan.sets.length + " sets",
          onPatrolMoreSets: () => this.setState({patrolAllSets: true}),
          patrolMissions: missionCards,
          patrolMissionsPending: !anyMission
        };
      })(), isContact: st.tab === "contact",
      onBackToBay: () => { const el = document.querySelector('[data-pd="bay"]');
        if(el) window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 12, behavior: "smooth"}); },
      footLinks: [["help","Help"],["contact","Contact"],["settings","Settings"],["backup","Backup"]].map(([id, l]) => ({
        label: l,
        onClick: e => { if(e && e.preventDefault) e.preventDefault(); this.setState({tab: id}); window.scrollTo({top: 0, behavior: "smooth"}); }})),
      mineDrawerOpen: st.tab === "mine" && st.mineView === "disc" && !!st.mineSel && st.discs.some(d => d.id === st.mineSel),
      ...(() => {
        const A = this.constructor;
        const prefSegs = {
          portraitSeg: (() => {
            const ex = this.exampleAgent();
            const ag = A.AGENTS.find(a => a.n === ex);
            const ring = ag ? (ag.r === "S" ? "#f5a623" : "#b98cff") : "#f5a623";
            return this.seg([
              {v:"icon", l:"Icons", s:"The small in-game agent icons.", img: this.picFor(ex, "icon"), initial: ex[0], ring: ring},
              {v:"avatar", l:"Portraits", s:"Full character art in a circle.", img: this.picFor(ex, "avatar"), initial: ex[0], ring: ring}
            ], st.portraitMode === "avatar" ? "avatar" : "icon", v => this.setPortraitMode(v));
          })(),
          mindscapeSeg: (() => {
            const ex = this.exampleArtAgent(), f = ex.replace(/ /g, "_");
            return this.seg([
              {v:"on", l:"Show full mindscape art", s:"Hovering a Loadouts card reveals the agent's full mindscape art."},
              {v:"off", l:"Only show partial art", s:"Cards keep their partial art on hover."}
            ], st.showMindscape ? "on" : "off", v => this.setState({showMindscape: v === "on"}));
          })(),
          adsSeg: this.seg([
            {v:"on", l:"Show joke ads", s:"The parody ads. They don't link anywhere."},
            {v:"off", l:"Hide them", s:"No ads anywhere in the tool."}
          ], st.adsOn ? "on" : "off", v => {
            try { if(v === "on") localStorage.removeItem("discTriage_adsOff"); else localStorage.setItem("discTriage_adsOff", "1"); } catch(e){}
            this.setState({adsOn: v === "on"});
          }),
          buildSeg: this.seg([
            {v:"primary", l:"Main build only", s:"Each agent's recommended build."},
            {v:"all", l:"Include alternatives", s:"Also grade discs for their optional builds."}
          ], st.primaryFilter, v => this.setState({primaryFilter: v})),
          pieceSeg: this.seg([
            {v:"recommended", l:"Recommended 2pc", s:"Only the best 2pc set per build."},
            {v:"all", l:"Every 2pc option", s:"Any 2pc set a build can use."}
          ], st.pieceFilter, v => this.setState({pieceFilter: v})),
          mainSeg: this.seg([
            {v:"best", l:"Best main stat", s:"Only the top main stat for slots 4–6."},
            {v:"all", l:"Any wanted main stat", s:"Lower-priority main stats count too."}
          ], st.mainFilter, v => this.setState({mainFilter: v}))
        };
        const q = (st.setupQ || "").trim().toLowerCase();
        const on = n => st.shown.indexOf(n) >= 0;
        const all = A.AGENTS.slice().sort((x, y) => x.n.localeCompare(y.n));
        return Object.assign(prefSegs, {
          setupOpen: !!st.setupOpen,
          setupQ: st.setupQ || "",
          onSetupQ: e => this.setState({setupQ: e.target.value}),
          setupTracked: st.shown.length + " of " + A.AGENTS.length + " tracked",
          setupAgents: all.filter(a => !q || a.n.toLowerCase().indexOf(q) >= 0).map(a => {
            const t = on(a.n), rc = a.r === "S" ? "#f5a623" : "#b98cff";
            return {name: a.n, title: t ? "Tracked — click to ignore." : "Ignored — click to track.",
              style: {display:"flex", alignItems:"center", gap:"8px", padding:"9px 11px", cursor:"pointer",
                textAlign:"left", minWidth:0,
                background: t ? "#131519" : "#0b0c0e",
                border:"1px solid " + (t ? "#2e333b" : "#1e2228"), borderLeft:"3px solid " + (t ? rc : "#262a31")},
              nameStyle: {flex:1, minWidth:0, font:"600 15px/1.2 Barlow,sans-serif",
                color: t ? "#ecefe6" : "#8a9099", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
                textDecoration: t ? "none" : "line-through"},
              mark: t ? "✓" : "",
              initial: a.n[0],
              // follows the Portraits / Icons choice live
              picStyle: {position:"relative", flex:"0 0 30px", width:"30px", height:"30px", borderRadius:"50%",
                overflow:"hidden", background:"#0f1114", border:"1.5px solid " + (t ? rc : "#2e333b"),
                display:"flex", alignItems:"center", justifyContent:"center", opacity: t ? 1 : .5},
              picInner: {position:"absolute", inset:0, backgroundSize:"cover", backgroundPosition:"center",
                backgroundImage:'url("' + this.picFor(a.n, st.portraitMode === "icon" ? "icon" : "avatar") + '")'},
              onClick: () => this.setTracked(t ? st.shown.filter(x => x !== a.n) : st.shown.concat([a.n]))};
          }),
          onTrackAll: () => this.setTracked(A.AGENTS.map(a => a.n)),
          onTrackNone: () => this.setTracked([]),
          onFinishSetup: () => this.finishSetup(),
          onOpenSetup: () => this.setState({setupOpen: true}),
          showSetupBanner: !!st.setupPending && !st.setupOpen,
          onDismissSetup: () => this.finishSetup()
        });
      })(),
      bkPaste: st.bkPaste, bkCode: st.bkCode, hasBkCode: !!st.bkCode,
      hasBkStatus: !!st.bkStatus, bkStatus: st.bkStatus,
      bkStatusStyle: {margin:"12px 0 0", font:"400 16px/1.45 Barlow,sans-serif",
        color: st.bkTone === "bad" ? "#ff4d5e" : "#4ade80"},
      // Counts are what make a backup trustworthy — you can see it caught everything before you
      // rely on it.
      bkCounts: [
        {label:"Tracked agents", value: String(st.shown.length)},
        {label:"Saved discs", value: String(st.discs.length)},
        {label:"Upgrade histories", value: String(Object.keys(st.upgrades).filter(k => (st.upgrades[k].ticks || []).length).length)},
        {label:"Favourites", value: String(Object.keys(st.discFav).filter(k => st.discFav[k]).length)},
        {label:"Hidden pairings", value: String(Object.keys(st.discHidden).filter(k => st.discHidden[k]).length)},
        {label:"Ignored builds", value: String(Object.keys(st.disabledBuilds).filter(k => st.disabledBuilds[k]).length)}
      ],
      onCopyBackup: () => this.copyBackupCode(),
      onDownloadBackup: () => this.downloadBackup(),
      onRestoreBackup: () => this.restoreBackup(),
      onBkPaste: e => this.setState({bkPaste: e.target.value}),
      onBkFile: e => this.readBackupFile(e),
      onClearBk: () => this.setState({bkPaste: "", bkStatus: "", bkCode: ""}),
      deepScanReady: deepScanReady,

      setName: st.setName, setOptions: setOptions,
      // "Ready" means BOTH a set and a slot are picked — matches checkResult()'s own gate, so
      // the left preview and the right results panel always agree on whether there's a real
      // disc to talk about yet, rather than the light going green the moment only one is chosen.
      // The preview reacts to the disc SET alone, same as before this feature existed — it's
      // "insert a disc," not "finish the whole form." discReady (needs a slot too) stays a
      // separate, stricter gate for the parts that genuinely can't work without one.
      hasSetName: !!st.setName,
      discTitleText: st.setName || "NO DISC",
      discTitleStyle: {font:"700 23px/1.15 'Chakra Petch',sans-serif", textTransform:"uppercase",
        overflow:"hidden", textOverflow:"ellipsis", color: st.setName ? "#ecefe6" : "#ff4d5e"},
      discIconSrc: st.setName ? this.discIconPath(st.setName) : "",
      discIconId: st.setName ? this.discIconId(st.setName) : "",
      previewHub: this.hubPair(st.setName, 78).ring,
      previewHole: this.hubPair(st.setName, 78).hole,
      previewOuterStyle: {flex:"0 0 auto", width:"84px", height:"84px", borderRadius:"50%", background:"#000",
        border:"3px solid " + (st.setName ? "#34343f" : "#5e2226"), display:"flex", alignItems:"center",
        justifyContent:"center", overflow:"hidden", boxShadow:"inset 0 0 14px rgba(0,0,0,.85)"},
      // No disc yet: a plain dark-red glow standing in for the usual rainbow conic-gradient —
      // literally a "red light," not just an absent image.
      previewInnerStyle: {position:"relative", width:"100%", height:"100%", borderRadius:"50%", overflow:"hidden",
        background: st.setName ? "conic-gradient(from 90deg,#f7d417,#33e6ff,#ff4d9e,#f7d417)" : "radial-gradient(circle,#3a1418,#1a0a0c)"},
      nowLabel: !st.setName ? "Please insert disc" : (st.nowPlaying ? "Now playing" : "Loading..."),
      nowLabelColor: !st.setName ? "#ff4d5e" : "#8a9099",
      nowDotStyle: {width:"8px", height:"8px", borderRadius:"50%",
        background: !st.setName ? "#ff4d5e" : (st.nowPlaying ? "#4ade80" : "#e8ff45"),
        boxShadow: "0 0 7px " + (!st.setName ? "#ff4d5e" : (st.nowPlaying ? "#4ade80" : "#e8ff45")),
        animation:"pulseDot 1.6s ease-in-out infinite"},
      discReady: discReady,
      hasDesire: hasDesire, hasDesireMains: hasDesireMains,
      desireSlotLabel: desireSlotKey ? A.SLOT_LABEL[desireSlotKey] : "",
      desireSubs: desireNames(desire.subs), desireMains: hasDesireMains ? desireNames(desire.mains) : [],
      setRoleLabel: (A.SET_LABELS[st.setName] || A.SET_ROLES[st.setName] || "Flexible") + " set",
      onSet: e => { this.setState({setName: e.target.value}); this.playDisc(); },
      setPickOpen: st.setPickOpen,
      setQuery: st.setQuery,
      onToggleSetPick: () => {
        const opening = !st.setPickOpen;
        this.setState({setPickOpen: opening, setQuery: ""});
        if(opening) setTimeout(() => {
          const el = document.querySelector('[data-pd="setsearch"]');
          if(el) el.focus();
        }, 0);
      },
      onSetQuery: e => this.setState({setQuery: e.target.value}),
      onSetQueryKey: e => {
        if(e.key === "Escape") this.setState({setPickOpen: false, setQuery: ""});
        if(e.key === "Enter"){
          const q = (st.setQuery || "").trim().toLowerCase();
          const hit = setOptions.find(n => n.toLowerCase().indexOf(q) >= 0);
          if(hit){ this.setState({setName: hit, setPickOpen: false, setQuery: ""}); this.playDisc(); }
        }
      },
      setPickTiles: setOptions
        .filter(n => !st.setQuery || n.toLowerCase().indexOf(st.setQuery.trim().toLowerCase()) >= 0)
        .map(n => {
          const on = st.setName === n;
          return {
            name: n, iconSrc: this.discIconPath(n), iconId: this.discIconId(n) + "-pick",
            style: {display:"flex", flexDirection:"column", alignItems:"center", gap:"6px",
              padding:"9px 4px 8px", cursor:"pointer", textAlign:"center", minWidth:0,
              background: on ? "#e8ff450f" : "#0f1114",
              border:"1px solid " + (on ? "#e8ff45" : "#1e2228")},
            labelStyle: {font:"500 12px/1.2 Barlow,sans-serif", color: on ? "#e8ff45" : "#9aa0a8",
              overflow:"hidden", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical",
              minHeight:"29px"},
            onClick: () => { this.setState({setName: n, setPickOpen: false, setQuery: ""}); this.playDisc(); }
          };
        }),
      setPickEmpty: setOptions.filter(n => !st.setQuery || n.toLowerCase().indexOf(st.setQuery.trim().toLowerCase()) >= 0).length === 0,
      setPickIconSrc: st.setName ? this.discIconPath(st.setName) : "",
      setPickIconId: st.setName ? this.discIconId(st.setName) + "-pickcur" : "pickcur",
      hasSetName: !!st.setName,
      setPickLabel: st.setName || "Choose a disc set",
      setPickLabelStyle: {flex:1, minWidth:0, textAlign:"left", font:"500 18px/1.2 Barlow,sans-serif",
        color: st.setName ? "#ecefe6" : "#8a9099", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"},
      setPickBtnStyle: {display:"flex", alignItems:"center", gap:"10px", width:"100%", cursor:"pointer",
        background:"#0f1114", border:"1px solid " + (st.setPickOpen ? "#e8ff45" : "#2e333b"),
        padding: st.setName ? "7px 12px 7px 8px" : "11px 12px"},
      setPickChevron: st.setPickOpen ? "▲" : "▼",
      setPickExpanded: st.setPickOpen ? "true" : "false",
      subChips: A.SUBSTAT_ORDER.map(name => {
        const idx = curSlotSubs.indexOf(name);
        const on = idx >= 0;
        const isMain = name === st.mainStat;
        const full = curSlotSubs.filter(Boolean).length >= 4;
        const dead = isMain || (!on && full);
        const dRank = hasDesire ? desire.subs.findIndex(x => x.name === name) : -1;
        const dColor = dRank >= 0 ? this.depthTone(dRank + 1) : null;
        return {
          label: name, num: on ? String(idx + 1) : "", hasNum: on,
          hasDemand: !!dColor && !isMain,
          demandStyle: {width:"7px", height:"7px", borderRadius:"50%", flex:"0 0 7px",
            background: dColor || "transparent", boxShadow: dColor ? "0 0 6px " + dColor + "88" : "none"},
          title: (isMain ? name + " is this disc's main stat, so it can't also be a substat."
            : on ? "Tap to remove " + name + "."
            : full ? "A disc has at most four substats — remove one first."
            : "Add " + name + " as substat " + (curSlotSubs.filter(Boolean).length + 1) + ".")
            + (dColor ? " Commonly wanted from " + st.setName + "." : ""),
          style: {position:"relative", display:"flex", alignItems:"center", justifyContent:"center",

            gap:"7px", padding:"10px 8px", minWidth:0, textAlign:"center",
            font:"600 15px/1.2 Barlow,sans-serif", cursor: dead ? "not-allowed" : "pointer",
            background: on ? "#e8ff45" : "#0f1114",
            border: on ? "1px solid #e8ff45"
              : (dColor && !isMain ? "1px solid " + dColor + "b3" : "1px solid #2e333b"),
            color: on ? "#0b0c0e" : dead ? "#4d535c" : "#ecefe6",
            opacity: isMain ? .45 : (!on && full) ? .6 : 1,
            textDecoration: isMain ? "line-through" : "none"},
          numStyle: {font:"700 11px/1 'JetBrains Mono',monospace", width:"17px", height:"17px",
            borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
            background:"#0b0c0e", color:"#e8ff45", flex:"0 0 17px"},
          onClick: () => {
            if(isMain && !on) return;
            this.setState(s2 => {
              const cur = (s2.subsBySlot[s2.slot] || ["","","",""]).filter(Boolean);
              const rl = ((s2.rollsBySlot || {})[s2.slot] || []).slice(0, cur.length);
              while(rl.length < cur.length) rl.push(0);
              const i2 = cur.indexOf(name);
              if(i2 >= 0){ cur.splice(i2, 1); rl.splice(i2, 1); }
              else if(cur.length < 4){ cur.push(name); rl.push(0); }
              else return null;
              while(cur.length < 4) cur.push("");
              return {subsBySlot: Object.assign({}, s2.subsBySlot, {[s2.slot]: cur}),
                rollsBySlot: Object.assign({}, s2.rollsBySlot, {[s2.slot]: rl})};
            });
          }
        };
      }),
      subsNeedSlot: !st.slot,
      ...(() => {
        const lv = this.formLevelled(st);
        const setLevel = v => this.setState(s2 => ({levelBySlot: Object.assign({}, s2.levelBySlot, {[s2.slot]: v})}));
        const step = (i, d) => this.setState(s2 => {
          const cur = ((s2.subsBySlot[s2.slot]) || []).filter(Boolean);
          const rl = ((s2.rollsBySlot || {})[s2.slot] || []).slice(0, cur.length);
          while(rl.length < cur.length) rl.push(0);
          const T = Math.round((((s2.levelBySlot || {})[s2.slot]) || 0) / 3);
          const total = rl.reduce((a, b) => a + b, 0);
          if(d > 0 && total >= T) return null;
          rl[i] = Math.max(0, Math.min(5, (rl[i] || 0) + d));
          return {rollsBySlot: Object.assign({}, s2.rollsBySlot, {[s2.slot]: rl})};
        });
        const toneColor = {ok:"#4ade80", warn:"#e8ff45", info:"#8a9099"}[lv.tone] || "#8a9099";
        return {
          levelChips: [0,3,6,9,12,15].map(v => ({label: "+" + v,
            title: v ? "The disc is at level " + v + " — " + (v / 3) + " upgrade" + (v === 3 ? "" : "s") + " spent." : "A fresh disc, no upgrades yet.",
            style: {flex:"1 1 0", minWidth:0, padding:"9px 0", textAlign:"center", cursor:"pointer",
              font:"700 14px/1 'JetBrains Mono',monospace", letterSpacing:".04em",
              background: lv.level === v ? "#e8ff45" : "#0f1114", color: lv.level === v ? "#0b0c0e" : "#ecefe6",
              border:"1px solid " + (lv.level === v ? "#e8ff45" : "#2e333b")},
            onClick: () => setLevel(v)})),
          isLevelled: lv.level > 0,
          rollRows: lv.lines.map((name, i) => {
            const late = lv.started === 3 && i === 3;
            return {name: name, count: lv.rolls[i] ? "+" + lv.rolls[i] : "—",
              countStyle: {font:"700 15px/1 'JetBrains Mono',monospace", width:"34px", textAlign:"center",
                color: lv.rolls[i] ? "#e8ff45" : "#5f656e"},
              note: late ? "added at +3" : "",
              canDec: lv.rolls[i] > 0, canInc: lv.placed < lv.T,
              onDec: () => step(i, -1), onInc: () => step(i, 1)};
          }),
          rollStatus: lv.msg,
          rollStatusStyle: {font:"500 13px/1.35 'JetBrains Mono',monospace", letterSpacing:".03em",
            color: toneColor, marginTop:"8px"},
          rollPips: Array.from({length: lv.T}, (_, i) => ({style: {flex:"1 1 0", height:"5px",
            background: i < lv.placed ? "#e8ff45" : "#262a31"}}))
        };
      })(),
      showDemandKey: hasDesire && !!st.slot,
      canNextDisc: !!(st.setName && (st.slot || st.mainStat || curSlotSubs.some(Boolean))),
      ...(() => {
        const ready = !!(st.setName && st.slot);
        const next = !!(st.setName && (st.slot || st.mainStat || curSlotSubs.some(Boolean)));
        const t = (ok, accent) => ({
          style: {display:"flex", alignItems:"center", justifyContent:"center", gap:"7px",
            padding:"10px 6px", background:"#0f1114", border:"none", minWidth:0,
            font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".1em", textTransform:"uppercase",
            color: ok ? (accent || "#ecefe6") : "#4d535c", cursor: ok ? "pointer" : "not-allowed"},
          iconStyle: {font:"700 14px/1 sans-serif", color: ok ? (accent || "#e8ff45") : "#3f454e"}
        });
        return {tSave: t(ready, "#e8ff45"), tUp: t(ready), tNext: t(next)};
      })(),
      nextDiscBtnStyle: (() => {
        const ok = !!(st.setName && (st.slot || st.mainStat || curSlotSubs.some(Boolean)));
        return {gridColumn:"1 / -1", background:"#171a1f", color: ok ? "#ecefe6" : "#4d535c",
          border:"1px dashed " + (ok ? "#3a4049" : "#23272e"), padding:"10px 12px",
          font:"700 13px/1 'JetBrains Mono',monospace", letterSpacing:".09em", textTransform:"uppercase",
          cursor: ok ? "pointer" : "not-allowed", opacity: ok ? 1 : .6};
      })(),
      onNextDisc: () => {
        this.setState(s2 => ({slot: "", mainStat: "",
          subsBySlot: Object.assign({}, s2.subsBySlot, {[s2.slot]: ["","","",""]}),
          rollsBySlot: Object.assign({}, s2.rollsBySlot, {[s2.slot]: []}),
          levelBySlot: Object.assign({}, s2.levelBySlot, {[s2.slot]: 0})}));
        this.flash("Ready for the next " + st.setName + " disc.");
      },
      slideRef: this.slideRef, visualRef: this.visualRef,
      slots: slots, mainStat: st.mainStat, mainOptions: this.slotOptions(st.slot), mainFixed: fixed,
      needsSlotFirst: !st.slot,
      mainDemand: (() => {
        if(!hasDesireMains || !st.mainStat || fixed) return {has: false};
        const r = desire.mains.findIndex(x => x.name === st.mainStat);
        const color = r >= 0 ? this.depthTone(r + 1) : "#8a9099";
        return {has: true,
          label: r === 0 ? "Most wanted main stat for this set" : r > 0 ? "Often wanted for this set" : "Rarely wanted for this set",
          style: {display:"flex", alignItems:"center", gap:"7px", margin:"-12px 0 16px",
            font:"500 13px/1.3 'JetBrains Mono',monospace", letterSpacing:".04em", color: color},
          dotStyle: {width:"8px", height:"8px", borderRadius:"50%", background: color, flex:"0 0 8px"}};
      })(),
      mainSelectStyle: {appearance:"none", width:"100%", background:"#0f1114", color: fixed ? "#8a9099" : "#ecefe6",
        border:"1px solid #2e333b", padding:"11px 32px 11px 12px", font:"500 18px/1.2 Barlow,sans-serif",
        cursor: fixed ? "not-allowed" : "pointer", opacity: fixed ? .6 : 1},
      onMain: e => {
        const v = e.target.value;
        this.setState(s2 => {
          const cur = (s2.subsBySlot[s2.slot] || ["","","",""]).filter(x => x && x !== v);
          while(cur.length < 4) cur.push("");
          return {mainStat: v, subsBySlot: Object.assign({}, s2.subsBySlot, {[s2.slot]: cur})};
        });
      },
      subLines: subLines, substatOptions: substatOptions, subsHint: subsHint,
      onResetSubs: () => this.setState(s => ({subsBySlot: Object.assign({}, s.subsBySlot, {[s.slot]: ["","","",""]}),
        rollsBySlot: Object.assign({}, s.rollsBySlot, {[s.slot]: []}), levelBySlot: Object.assign({}, s.levelBySlot, {[s.slot]: 0})})),
      verdict: res.verdict,
      verdictGrade: (() => {
        const rows = (res.mineRows || []).filter(r => this.gradeRank(r.ratingLabel) >= 0);
        if(!rows.length) return {has: false};
        const topRank = Math.max.apply(null, rows.map(r => this.gradeRank(r.ratingLabel)));
        const top = rows.filter(r => this.gradeRank(r.ratingLabel) === topRank);
        const names = [...new Set(top.map(r => r.name))];
        const color = (top[0].ratingStyle && top[0].ratingStyle.color) || "#ecefe6";
        return {has: true, grade: top[0].ratingLabel,
          style: {font:"800 46px/1 'Chakra Petch',sans-serif", color: color, flex:"0 0 auto", minWidth:"38px", textAlign:"center"},
          who: names.length > 2 ? names.slice(0, 2).join(", ") + " +" + (names.length - 2) : names.join(" & "),
          whoStyle: {font:"600 12px/1.25 'JetBrains Mono',monospace", letterSpacing:".06em",
            textTransform:"uppercase", color: color, marginTop:"6px", textAlign:"center", maxWidth:"96px"},
          hasCeil: !!(res.verdict && res.verdict.ceil),
          ceilLabel: res.verdict && res.verdict.ceil ? "UP TO " + res.verdict.ceil : "",
          ceilTitle: "Where this finishes if the upgrades go well — the best 1 in 10 outcomes.",
          ceilStyle: {font:"700 12px/1 'JetBrains Mono',monospace", letterSpacing:".08em", marginTop:"8px",
            paddingTop:"7px", borderTop:"1px solid #262a31", textAlign:"center",
            color: (res.verdict && res.verdict.ceilColor) || "#8a9099"}};
      })(),
      ...(() => {
        // Agents for whom this disc would replace something worse, even if the verdict says recycle.
        const seen = {}, ups = [];
        (res.mineRows || []).forEach(r => { if(r.eqBetter && !seen[r.name]){ seen[r.name] = 1; ups.push(r); } });
        const shown = ups.slice(0, 3);
        const g = c => ({font:"800 15px/1 'Chakra Petch',sans-serif", color: c});
        return {
          hasEqUp: ups.length > 0,
          eqUpParts: shown.map((r, i) => ({
            name: r.name, hasInc: !!r.eqInc, isEmpty: !r.eqInc,
            inc: r.eqInc, incStyle: g(r.eqIncColor), nw: r.eqNew, newStyle: g(r.eqNewColor),
            sep: i < shown.length - 1 ? "," : ""})),
          eqUpMore: ups.length > 3 ? "+" + (ups.length - 3) + " more" : "",
          eqUpTitle: "Compared with what each agent is wearing in this slot right now. The grade above doesn't change — this just tells you a swap would still be an improvement."
        };
      })(),
      mineCount: res.mineCount, mineRows: res.mineRows, mineEmpty: res.mineEmpty, mineEmptyText: res.mineEmptyText,
      othersOpen: res.othersOpen, onToggleOthers: res.onToggleOthers, othersChevron: res.othersChevron,
      othersCount: res.othersCount, hasOthers: res.hasOthers, othersRows: res.othersRows, othersEmptyText: res.othersEmptyText,
      primaryToggle: res.primaryToggle, pieceToggle: res.pieceToggle, mainStatToggle: res.mainStatToggle, sortHeaders: res.sortHeaders,
      verdictStyle: {background:"radial-gradient(rgba(255,255,255,.045) .9px,transparent 1.3px) 0 0/5px 5px,#131519", border:"1px solid " + this.tone(res.verdict.tone) + "55",
        borderLeft:"5px solid " + this.tone(res.verdict.tone), padding:"18px 20px", marginBottom:"24px",
        clipPath:"polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px)"},
      // A decisive call lands as a tilted sticker, like the rank stamp on a ZZZ results screen; the
      // in-between states (no disc, need substats) stay plain text. The animation is named after
      // the tone so the stamp slams down again whenever the call changes.
      verdictTagStyle: ["keep", "maybe", "recycle"].indexOf(res.verdict.tone) >= 0
        ? {display:"inline-block", font:"700 40px/1 'Chakra Petch',sans-serif", letterSpacing:".02em",
          textTransform:"uppercase", color:"#0b0c0e", background: this.tone(res.verdict.tone), padding:"7px 16px 5px",
          margin:"4px 8px 6px 4px", transform:"rotate(-3deg) skewX(-8deg)",
          boxShadow:"0 0 0 2px #0b0c0e, 0 0 0 4px " + this.tone(res.verdict.tone) + ", 5px 6px 0 4px #000",
          animation:"stamp-" + res.verdict.tone + " .34s cubic-bezier(.2,1.5,.4,1) both"}
        : {font:"700 44px/1 'Chakra Petch',sans-serif", letterSpacing:".01em",
          textTransform:"uppercase", color: this.tone(res.verdict.tone)},
      canShareDisc: !!(st.setName && st.slot), onShareDisc: () => this.shareDisc(),
      shareDiscLabel: navigator.share && window.matchMedia && window.matchMedia("(pointer:coarse)").matches ? "Share this disc" : "Copy link to this disc",
      verdictCrumbStyle: {font:"700 13px/1.3 'JetBrains Mono',monospace", letterSpacing:".12em", color:"#8a9099"},

      q: st.q, onSearch: e => this.setState({q: e.target.value, pinnedAgent: null}),
      filterGroups: [
        chipGroup("fRank", [{l:"All", v:"all"}, {l:"S", v:"S"}, {l:"A", v:"A"}], "Rank"),
        chipGroup("fMark", [{l:"All", v:"all"}, {l:"Tracked", v:"shown"}, {l:"Ignored", v:"off"}], "Show"),
        chipGroup("fRole", [{l:"All", v:"all"}, {l:"Attack", v:"Attack", role:"Attack"}, {l:"Stun", v:"Stun", role:"Stun"}, {l:"Anomaly", v:"Anomaly", role:"Anomaly"}, {l:"Support", v:"Support", role:"Support"}, {l:"Armorer", v:"Armorer", role:"Armorer"}, {l:"Defense", v:"Defense", role:"Defense"}, {l:"Rupture", v:"Rupture", role:"Rupture"}], "Role")
      ],
      agentCards: agentCards, noAgents: agentCards.length === 0,
      agentCount: agentCards.length + " / " + A.AGENTS.length + " agents",

      scoreFields: scoreFields, scoreSubLines: scoreSubLines,
      rollOptions: [1,2,3,4,5,6].map(n => ({v: String(n), t: "×" + n})),
      onResetScoreSubs: () => this.setState({sSubs: [{t:"",r:"1"},{t:"",r:"1"},{t:"",r:"1"},{t:"",r:"1"}]}),
      onRunScan: () => this.runScan(),
      hasScore: !!st.sResult, noScore: !st.sResult, score: scoreCard
    };
  }
}
