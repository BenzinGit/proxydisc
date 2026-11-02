// Zenless Zone Zero: the game's content. Read by engine/app.js as Component.<NAME>; the full
// list of names a game has to define is at the top of that file.
const GAME = {};

GAME.AGENTS = [
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

GAME.SETS = {
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
GAME.BUILDS = {
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

GAME.SET_ROLES = {
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
GAME.SET_LABELS = {
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

GAME.MAIN_STAT_ROLES = {
  "CRIT Rate":["Attack","Stun"],"CRIT DMG":["Attack","Stun"],
  "Anomaly Proficiency":["Anomaly"],"Anomaly Mastery":["Anomaly"],
  "Impact":["Stun"],"Energy Regen":["Support"],
  "PEN Ratio":["Attack","Anomaly"],
  "ATK%":["Attack","Support","Anomaly","Stun"],"ATK":["Attack","Support","Anomaly","Stun"],
  "HP%":["Support","Defense"],"HP":["Support","Defense"],
  "DEF%":["Defense"],"DEF":["Defense"]
};

GAME.SUBSTAT_ORDER = ["CRIT Rate","CRIT DMG","ATK%","ATK","HP%","HP","DEF%","DEF","Anomaly Proficiency","PEN"];

GAME.SUBSTAT_BASE_S = {"HP":112,"ATK":19,"DEF":15,"HP%":3,"ATK%":3,"DEF%":4.8,"CRIT Rate":2.4,"CRIT DMG":4.8,"PEN":9,"Anomaly Proficiency":9};

GAME.MAIN_ORDER = ["HP%","ATK%","DEF%","CRIT Rate","CRIT DMG","Anomaly Proficiency","Anomaly Mastery","PEN Ratio","Impact","Energy Regen","Physical DMG","Fire DMG","Ice DMG","Electric DMG","Ether DMG","Lumiflux DMG"];

GAME.FIXED_MAIN = {s1:"HP", s2:"ATK", s3:"DEF"};

GAME.SLOT_LABEL = {s1:"Slot 1",s2:"Slot 2",s3:"Slot 3",s4:"Slot 4",s5:"Slot 5",s6:"Slot 6"};

GAME.STAGES = 5;

GAME.PERCENT = ["HP%","ATK%","DEF%","CRIT Rate","CRIT DMG"];

// An S-rank disc gains one substat tick every 3 levels: 5 ticks over 0 -> 15. A disc that starts
// with only 3 lines spends its first tick rolling the 4th line instead of upgrading one, which is
// why a tick records a stat NAME rather than an index — the same record covers both cases.
GAME.UP_TICKS = 5;

// Possible main stats for a random drop in slots 4-6. Every option is treated as equally
// likely, so each one's chance is simply 1 / (number of options in that slot). Slots 1-3 have a
// fixed main stat, so their odds are 1.
GAME.MAIN_POOL = {
  s4: ["HP%","ATK%","DEF%","CRIT Rate","CRIT DMG","Anomaly Proficiency"],
  s5: ["HP%","ATK%","DEF%","PEN Ratio","Physical DMG","Fire DMG","Ice DMG","Electric DMG","Ether DMG","Wind DMG"],
  s6: ["HP%","ATK%","DEF%","Anomaly Mastery","Impact","Energy Regen"]
};

GAME.MAIN_ODDS = Object.fromEntries(Object.entries(GAME.MAIN_POOL)
  .map(([k, list]) => [k, Object.fromEntries(list.map(n => [n, 1 / list.length]))]));

// Dominant colour of a disc icon: the average of its most saturated, mid-bright pixels, which
// tracks the artwork's identity colour rather than its dark background or white label text.
// Every disc's identity colour, sampled from its own artwork at build time: the weighted
// average of the most saturated mid-bright pixels on the playing surface, ignoring the hub, the
// outer edge, the black ground and the white print. Baked rather than measured in the browser —
// runtime sampling had to reach into the slot component's shadow DOM at just the right moment,
// and any miss fell back to a flat grey.
GAME.SET_COLOR = {
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

// Per-agent art framing. Each picture is cropped differently, so any agent can override the
// default. zoom: % of the box height the picture is drawn at. x / y: where it sits, 0-100%.
// Example: "Jane Doe": {zoom: 150, x: 80, y: 60}
// flip: true mirrors the picture; x is mirrored with it so the art stays on the right.
// fade: "left" or "right" softens that edge of the picture into the card.
GAME.ART_FRAMES = {
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

// agents/Avatar_<Name, spaces to underscores>.webp. Icon mode prefers the circle-cropped
// asset; a few agents (NO_CIRCLE_ICON) don't have one yet, so those fall back to the square
// Icon file rather than showing a broken/placeholder portrait until art is added.
GAME.NO_CIRCLE_ICON = new Set([]);

// Agents shown with a NEW tag in the Agent index. Remove a name once she's no longer new.
GAME.NEW_AGENTS = ["Phoenix"];

// When each agent's build data was last checked, and where it comes from. Agents without an
// entry use BUILD_UPDATED_DEFAULT.
GAME.BUILD_UPDATED_DEFAULT = "Oct 2026";

GAME.BUILD_UPDATED = {"Phoenix": "Oct 2026", "Roxy": "Oct 2026"};

GAME.BUILD_SOURCE = "Prydwen and community guides";

// Cleanup missions. Each drops two disc sets; a mission is scored as the sum of both. Enemy art loads from
// enemies/<slug>-1.webp and -2.webp (or can be dropped onto the slot).
GAME.MISSIONS = [
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

// Parody ads in the spots real ones would sit. They don't link anywhere; clicking just
// owns up to the joke.
// Parody ads where real ones would sit. Each has its own look. Art comes from misc/Name.webp
// (same naming as backgrounds/); a missing file just leaves the art area empty.
GAME.JOKE_ADS = [
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
