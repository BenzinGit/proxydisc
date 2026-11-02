// Builds one site per game from engine/ (shared by every game) and games/<game>/. No dependencies:
//
//   node build.mjs zzz     ->  dist/zzz/
//   node build.mjs         ->  every game in games/ that is set up (has a data.js)
//
// dist/<game>/ is the whole site, ready to upload as it is:
//   engine/public/, games/<game>/public/   copied over unchanged (a game's file wins over the engine's)
//   index.html   from engine/shell.html. Inside it:
//                  <!--#include NAME-->       is replaced by the contents of engine/NAME
//                  <!--#include game/NAME-->  is replaced by the contents of games/<game>/NAME
//                  <!--#asset PATH-->         is replaced by PATH?v=<content hash>, so a changed file
//                                             gets a new URL and no browser mixes an old copy with a new page
//   sw.js        from engine/sw.js, with this build's version and the files to keep offline
//   *.html       every other page gets fresh ?v= stamps on its assets/ links
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, rmSync, mkdirSync, cpSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const ROOT = dirname(fileURLToPath(import.meta.url));
const sha = (data) => createHash("sha256").update(data).digest("hex").slice(0, 10);
const kb = (s) => (Buffer.byteLength(s) / 1024).toFixed(0) + " KB";
const walk = (dir) => !existsSync(dir) ? [] : readdirSync(dir).flatMap(f => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const posix = (p) => p.split("\\").join("/");

const allGames = readdirSync(join(ROOT, "games")).filter(g => statSync(join(ROOT, "games", g)).isDirectory());
// A game folder is only a placeholder until it has its data.js.
const isSetUp = (g) => existsSync(join(ROOT, "games", g, "data.js"));
const wanted = process.argv.slice(2);
const unknown = wanted.filter(g => !allGames.includes(g));
if (unknown.length) {
  console.error("No such game: " + unknown.join(", ") + ". Games: " + allGames.join(", "));
  process.exit(1);
}
const notSetUp = wanted.filter(g => !isSetUp(g));
if (notSetUp.length) {
  console.error("Not set up yet: " + notSetUp.join(", ") + ". See docs/adding-a-game.md.");
  process.exit(1);
}
if (!wanted.length) allGames.filter(g => !isSetUp(g)).forEach(g => console.log("== " + g + ": not set up yet, skipped"));
for (const game of wanted.length ? wanted : allGames.filter(isSetUp)) build(game);

function build(game) {
  const gameDir = join(ROOT, "games", game);
  const out = join(ROOT, "dist", game);
  const read = (p) => readFileSync(p, "utf8");
  const hash = (p) => sha(readFileSync(join(out, p)));
  console.log("== " + game + " -> " + posix(relative(ROOT, out)) + "/");

  // 1. files served as they are
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  const enginePublic = join(ROOT, "engine", "public"), gamePublic = join(gameDir, "public");
  const engineFiles = new Set(walk(enginePublic).map(p => posix(relative(enginePublic, p))));
  const overrides = walk(gamePublic).map(p => posix(relative(gamePublic, p))).filter(p => engineFiles.has(p));
  cpSync(enginePublic, out, { recursive: true });
  if (existsSync(gamePublic)) cpSync(gamePublic, out, { recursive: true });
  if (overrides.length) console.log("game files replacing engine files:", overrides.join(", "));

  // 2. the app
  const render = (name) => {
    const file = name.startsWith("game/") ? join(gameDir, name.slice(5)) : join(ROOT, "engine", name);
    if (!existsSync(file)) throw new Error(game + ": " + posix(relative(ROOT, file)) + " is missing (included as " + name + ")");
    return read(file)
      .replace(/<!--#include ([\w./-]+)-->/g, (_, inc) => render(inc).replace(/\n$/, ""))
      .replace(/<!--#asset ([\w./-]+)-->/g, (_, p) => p + "?v=" + hash(p));
  };
  const html = render("shell.html");
  writeFileSync(join(out, "index.html"), html);
  console.log("index.html", kb(html));

  // 3. other pages: refresh ?v= on every assets/ link
  const pages = walk(out).filter(p => p.endsWith(".html") && p !== join(out, "index.html"));
  for (const page of pages) {
    const src = read(page);
    const res = src.replace(/((?:\.\.\/)*)(assets\/[\w./-]+)\?v=[0-9a-f]+/g, (_, up, p) => up + p + "?v=" + hash(p));
    if (res !== src) writeFileSync(page, res);
  }
  console.log("other pages", pages.length);

  // 4. service worker: what to keep for offline use, and a version that changes with any of it
  const shellAssets = [...html.matchAll(/(?:href|src)="(assets\/[\w./-]+\?v=[0-9a-f]+)"/g)].map(m => "/" + m[1]);
  const fontFiles = [...read(join(out, "assets/fonts.css")).matchAll(/url\((fonts\/[\w.-]+)\)/g)].map(m => "/assets/" + m[1]);
  const icons = ["/assets/app-icons/icon-192.png", "/assets/app-icons/favicon-32.png"].filter(p => existsSync(join(out, p)));
  const precache = [...new Set(["/", "/manifest.webmanifest", ...shellAssets, ...fontFiles, ...icons])];
  const manifest = join(out, "manifest.webmanifest");
  const version = sha(html + read(join(ROOT, "engine/sw.js")) + (existsSync(manifest) ? read(manifest) : "") + precache.join());
  const sw = read(join(ROOT, "engine/sw.js"))
    .replace('"__VERSION__"', JSON.stringify(version))
    .replace("__PRECACHE__", JSON.stringify(precache, null, 2));
  writeFileSync(join(out, "sw.js"), "// GENERATED by build.mjs from engine/sw.js. Edit that, then run `node build.mjs`.\n" + sw);
  console.log("sw.js", version, precache.length, "files precached");
  console.log("total", walk(out).length, "files");
}
