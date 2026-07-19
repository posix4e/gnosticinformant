# gnosticinformant.com

Official website for Neal Sendlak — Gnostic Informant.

Static site on [Cloudflare Pages](https://pages.cloudflare.com/): no build step, no framework. `public/` is the whole site — every push to `main` deploys automatically in about a minute.

## The handover plan

Neal: I'm planning on handing this whole thing over to you — the repo, the Cloudflare account, the domains. But you have to learn how to drive it first. The good news is there's very little to learn:

1. **The site is just files.** `public/index.html` is the page, `public/styles.css` is how it looks. Change the words in the HTML, and the site changes.
2. **Editing happens on GitHub.** You can edit any file right in the browser — open the file, hit the pencil icon, make the change, click *Commit changes*.
3. **Deploys are automatic.** About a minute after a commit lands on `main`, the live site updates. Nothing else to run, ever.

Practice loop: edit `index.html` → commit → wait a minute → refresh the site. Once that feels boring, you're ready for the keys.

## Structure

- `public/` — the deployed site (HTML/CSS/JS)
- `public/assets/` — images: the Abraxas medallion, Thomas Cole's *Desolation* (1836, public domain), favicons
- `wrangler.jsonc` — Cloudflare config (only needed for local preview)

## Local preview (optional)

```sh
npm install
npx wrangler pages dev
```
