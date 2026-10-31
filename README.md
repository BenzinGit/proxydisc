# ProxyDisc

A drive disc rating tool for **Zenless Zone Zero**. Live at **[proxydisc.com](https://proxydisc.com)**.

Describe a disc (set, slot, main stat, substats) and ProxyDisc grades it from S to F for every agent who can use it, with a clear keep / maybe / recycle call, so levelling materials only go to discs that are worth it.

**Who it's for:** Zenless Zone Zero players who want a quick, honest answer on whether a disc is worth levelling, and which agent should wear it.

## Features

- **Scrap or stash**: rates a disc at any level and says when it beats what an agent is wearing. Discs can also be imported from a screenshot.
- **Loadouts**: what each agent is wearing, with a build score out of 100.
- **My discs**: a library of owned discs and who each one suits.
- **Upgrades**: tracks each roll while levelling and shows the best and worst finish still possible.
- **Agent index**: recommended 4-piece and 2-piece sets, main stats and substat priority for every agent, plus a static build page per agent (`agents/`).
- **Area patrol**: ranks cleanup missions and disc sets by how much they would improve the agents being geared.

No account needed. Everything a user saves stays in their own browser (`localStorage`).

## Built with

- HTML, CSS and JavaScript, with React for the main app
- Prototyped in Claude Design, which exports the app as a single bundled `index.html`
- Hosted on Cloudflare Pages, with no backend: all user data stays in the browser's `localStorage`

## Running it locally

No build step or install is needed. From the project folder, start any static file server, for example:

```
python -m http.server 8000
```

Then open http://localhost:8000. The app runs without the game images (they are not in the repo), so portraits and icons show as blank.

## Repository layout

```
index.html        Exported, bundled build that runs the live site (generated, not edited by hand)
src/              Readable source of the main app, extracted from the build
  app.js          App logic: agent data, grading, scoring, upgrades, scan, state
  template.html   Page markup
  styles.css      Page styles
  head.html       Page metadata (title, description, social tags)
agents/           Static build page for each agent
about.html, guide.html, privacy.html
robots.txt, sitemap.xml
```

The app was prototyped in Claude Design, which exports the whole page as one self-unpacking `index.html`. The `src/` folder holds the readable code from that export.

## Not included

Game images (agent portraits, disc icons, backgrounds, enemies) are not in this repo. They belong to HoYoverse and are ignored via `.gitignore`.

## Data and privacy

- No accounts, no ads, no analytics, and no server-side storage of user data. Saved discs and loadouts live in the user's browser.
- Contact is by email: contact@proxydisc.com. See [privacy.html](privacy.html).

## Roadmap

1. Port the app from the Claude Design export into a standalone web project, so `src/` is the source of truth and `index.html` is built from it.
2. Split the agent data and grading rules out of `app.js` into their own modules.
3. Make the grading engine game-agnostic.
4. Add **Genshin Impact** (artifacts) and **Honkai: Star Rail** (relics).

## License

The code in this repository is released under the [MIT License](LICENSE).

The bundled `index.html` also contains third-party code that keeps its own license: React (MIT), the Claude Design runtime, and web fonts (SIL Open Font License). Game names, data and images belong to HoYoverse.

## Disclaimer

An unofficial fan project, not affiliated with or endorsed by HoYoverse.
