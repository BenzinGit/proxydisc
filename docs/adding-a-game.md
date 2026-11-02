# Adding a game

Every game is its own site on its own domain, built from the shared `engine/` plus one folder in `games/`. ZZZ (`games/zzz/`) is the reference: copy it and change what is different.

## How a site is put together

`node build.mjs <game>` builds `dist/<game>/`:

1. `engine/public/` is copied in, then `games/<game>/public/` on top of it. A game file with the same path as an engine file replaces it (the build prints which), which is how a game can bring its own `assets/fonts.css`, for example.
2. `index.html` is made from `engine/shell.html`. It pulls in the game's `head.html` and `static.html`, then, inside the app script, the game's `data.js`, the game's `rules.js` and finally `engine/app.js`.
3. Every other page gets fresh `?v=` stamps, and `sw.js` is generated with the list of files to keep offline.

Inside the app, `data.js` defines `GAME` (read by `engine/app.js` as `Component.AGENTS`, `Component.SETS`, …) and `rules.js` defines `GAME_RULES` (mixed into the app, so they are ordinary methods and `this` is the app).

## Steps

1. **Copy** everything from `games/zzz/` into the game's folder. `games/hsr/` and `games/genshin/` are already there as placeholders; for any other game, make `games/<id>/`. Delete the ZZZ images and agent pages from the copy's `public/`. The build skips a game folder until it has a `data.js`.
2. **`head.html` and `static.html`**: the new site's title, description, social tags and the plain-text intro for search engines.
3. **`data.js`**: replace every `GAME.<NAME>`. The list of names a game must define is at the top of `engine/app.js`; the comments in `games/zzz/data.js` say what each one is.
4. **`rules.js`**: rewrite the methods for the new game's conventions. A game must provide all of them: `slotOptions`, `defaultMain`, `elementFromMain`, `discIconPath`, `rankIconPath`, `roleIconPath`, `elementIconPath`, `statIconPath`, `agentIconPath`, `parseStatLine`, `parseDiscText`.
5. **`public/`**:
   - `manifest.webmanifest` (name, colours, shortcuts), `robots.txt` and `sitemap.xml` (the new domain)
   - `about.html`, `guide.html`, `privacy.html`, and the character pages
   - app icons in `public/assets/app-icons/`: `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`
   - the game images, in the folders `rules.js` points at
6. **Build and check**: `node build.mjs <id>`, then `python -m http.server 8000 -d dist/<id>`.
7. **Publish**: make a new Cloudflare Pages project, connect the game's domain, and upload the contents of `dist/<id>/`.

## What the engine still assumes about ZZZ

The split so far moved ZZZ's data and its clearly game-specific rules out of the engine, with the site left exactly as it was. Some ZZZ assumptions are still in `engine/`. Fix each one when the second game needs it: move it into `data.js` or `rules.js`, give ZZZ its current value, and check ZZZ still looks the same.

| Assumption | Where | Star Rail | Genshin |
|---|---|---|---|
| Six slots, `s1` to `s6` | `app.js`, about 19 places | 6 pieces: fits | 5 pieces: needs work |
| 3 levels per upgrade (`ticks.length * 3`) | `app.js`, 5 places | same | 4 levels |
| A set counts from any slot (2pc / 4pc) | `pieceFor`, `setBonusDelta`, build data | relic sets on 4 pieces, planar sets on the other 2 | fits |
| Roles Attack / Stun / Anomaly / Support / Defense | role filter chips and `MAIN_STAT_ROLES` | Paths instead | no roles |
| Wording: "disc", "agent", "Proxy", tab names, the tour, help text | `template.html`, `app.js` (`TABS`, `TOUR`) | relic, character | artifact, character |
| The ZZZ yellow `#e8ff45` and other colours, written out | about 250 places in `app.js`, `template.html`, `styles.css`, `shell.html` | own colours: turn these into CSS variables a game sets | same |
| The "Try an example disc" disc | `app.js` | own example | own example |

What carries over as it is: the grading. It works from which substat lines a piece has and which line each upgrade went to, not from the values. All three games have 4 substat lines and 5 upgrades on a max-rarity piece, and a piece that starts with 3 lines spends its first upgrade on the 4th. What differs is how a piece gets into the app. ZZZ shows each line's roll count, so it can be read straight from the screen. Star Rail (3 roll sizes) and Genshin (4) only show values, so their `parseStatLine` has to work out the roll count from the value.

Saved data uses `localStorage` keys starting with `discTriage_`. That is fine because every game is on its own domain, so the games can't see each other's data.
