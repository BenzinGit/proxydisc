# ProxyDisc

A drive disc rating tool for **Zenless Zone Zero**. Live at **[proxydisc.com](https://proxydisc.com)**.

Describe a disc (set, slot, main stat, substats) and ProxyDisc grades it from S to F for every agent who can use it, with a clear keep / maybe / recycle call, so levelling materials only go to discs that are worth it.

**Who it's for:** Zenless Zone Zero players who want a quick, honest answer on whether a disc is worth levelling, and which agent should wear it.

## Features

- **Scrap or stash**: rates a disc at any level and says when it beats what an agent is wearing. Discs can also be imported from a screenshot.
- **Loadouts**: what each agent is wearing, with a build score out of 100.
- **My discs**: a library of owned discs and who each one suits.
- **Upgrades**: tracks each roll while levelling and shows the best and worst finish still possible.
- **Agent index**: recommended 4-piece and 2-piece sets, main stats and substat priority for every agent, plus a static build page per agent (`games/zzz/public/agents/`).
- **Area patrol**: ranks cleanup missions and disc sets by how much they would improve the agents being geared.
- **Works offline** and can be installed as an app (service worker and web manifest).

No account needed. Everything a user saves stays in their own browser (`localStorage`).

## Built with

- HTML, CSS and JavaScript, with React for the main app
- A small dependency-free build script (`build.mjs`, Node.js)
- Hosted on Cloudflare Pages as static files, with no backend
- Originally prototyped in Claude Design, then moved into this standalone codebase

## Running it locally

You need [Node.js](https://nodejs.org) (any recent version). There is nothing to install.

```
node build.mjs zzz
python -m http.server 8000 -d dist/zzz
```

`node build.mjs zzz` builds the whole ZZZ site into `dist/zzz/` (`node build.mjs` on its own builds every game). Any static file server works for the second step; then open http://localhost:8000. The game images are not in the repo, so portraits and icons show as blank unless you have them locally.

## Repository layout

The code is split into an engine shared by every game and one folder per game. Each game is built into its own site, for its own domain.

```
engine/               Shared by every game (edit these for changes to all sites)
  shell.html          Page skeleton; build.mjs fills in the includes and asset hashes
  template.html       App markup
  app.js              App logic: grading, scoring, upgrades, loadouts, scan, state
  styles.css          App styles
  boot.js             Early boot script and loading screen
  touch-tips.js       Press-and-hold tooltips on touch screens
  sw.js               Service worker source (offline support)
  public/             Copied into every site as is: fonts, vendored libraries, _headers
games/
  zzz/                Zenless Zone Zero (proxydisc.com)
    data.js           Agents, sets, builds, stat names, slots, missions, art framing
    rules.js          ZZZ's own conventions: slot main stats, image file names, screenshot reading
    head.html         Page title, description and social tags
    static.html       Plain intro for search engines and visitors without JavaScript
    public/           Copied into the site as is: agent pages, about/guide/privacy, app icons,
                      manifest, robots.txt, sitemap.xml, and the game images
  hsr/                Honkai: Star Rail (placeholder, not started)
  genshin/            Genshin Impact (placeholder, not started)
build.mjs             Builds dist/<game>/ from engine/ and games/<game>/
dist/<game>/          Built site, ready to upload (generated, not in git)
docs/adding-a-game.md How to add another game
LICENSE               MIT license
```

## Deploying

Each game is its own Cloudflare Pages project with its own domain. Run `node build.mjs zzz`, then upload the **contents of `dist/zzz/`** to the ProxyDisc project (drag and drop in the dashboard, or `npx wrangler pages deploy dist/zzz`). That folder is the complete site; nothing else from the repo needs to go up.

## Not included

Game images (agent portraits, disc icons, backgrounds, enemies) are not in this repo. They belong to HoYoverse and are ignored via `.gitignore`. Locally they live in `games/zzz/public/` (`agents/`, `backgrounds/`, `discs/`, `enemies/`, `icons/`, `misc/`), and the build copies them into `dist/zzz/`.

## Data and privacy

- No accounts, no ads, no analytics, and no server-side storage of user data. Saved discs and loadouts live in the user's browser.
- Contact is by email: contact@proxydisc.com. See [privacy.html](games/zzz/public/privacy.html).

## Roadmap

1. ~~Move the app out of the Claude Design export into a standalone codebase with a build step.~~ Done.
2. ~~Split the game's data and rules out of `app.js`, and build one site per game.~~ Done (`engine/` + `games/zzz/`).
3. Add tests for the grading.
4. Add **Honkai: Star Rail** (relics), then **Genshin Impact** (artifacts). See [docs/adding-a-game.md](docs/adding-a-game.md).

## License

The code in this repository is released under the [MIT License](LICENSE).

Third-party files in `engine/public/assets/` keep their own licenses: React (MIT), the Claude Design runtime (`vendor/dc-runtime.js`, `vendor/image-slot.js`), and the web fonts (SIL Open Font License). Game names, data and images belong to HoYoverse.

## Disclaimer

An unofficial fan project, not affiliated with or endorsed by HoYoverse.
