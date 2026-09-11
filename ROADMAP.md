# Roadmap

Tracking the build-out of the Reigneth Company Limited website,
phase by phase. Each phase is delivered as a drag-and-drop zip update.

## Phase 0 — Repo & foundation ✅ (this update)

- [x] GitHub org confirmed: `reigneth-ghana`
- [x] Stack confirmed: Astro (Node), static output
- [x] Astro project scaffolded, builds clean (`npm run build`)
- [x] Base layout (`src/layouts/BaseLayout.astro`) and global styles wired up
- [x] Folder structure in place (`src/pages`, `src/layouts`, `src/components`, `src/styles`, `public/images`, `public/docs`)
- [x] Brand assets copied in (logo, initial product photos)

## Phase 1 — Brand & design system ✅ (this update)

- [x] Color palette locked in (from the RCL logo: brand red `#9A0000`, ink `#1C1A1A`, ink-soft `#4A4744`, paper `#EFEFED`, surface white, brass `#B08D3E` secondary accent)
- [x] Typography chosen — Archivo (headings) + IBM Plex Sans (body) + IBM Plex Mono (specs/technical labels)
- [x] Design tokens finalized in `src/styles/global.css` (colors, type scale, spacing scale, buttons)
- [x] Shared header/nav (`src/components/Header.astro`) and footer (`src/components/Footer.astro`), wired into `BaseLayout.astro`
- [x] Recurring "band" motif (a solid red bar, referencing banknote banding straps) used under the header and atop the footer

## Phase 2 — Core pages ✅ (this update)

- [x] Home — hero, what Reigneth does, why choose them, quick links to services
- [x] Services — Shrink Wrap Machines, Bank Note Banding Machines, Coin Counting Machines
      (content sourced from the service profile document)
- [x] About / Team — leadership (CEO, MD, COO, Director of Finance) and technicians
      (Southern Zone / Northern Zone), nationwide coverage messaging
- [x] Contact — form + info layout in place; phone/email/address are still
      placeholders (see open questions)

## Phase 3 — Downloads / Resources ✅ (this update)

- [x] Decide which materials go public — the full service profile PDF stays
      internal for now; a public equipment spec sheet (specs only, no
      team/leadership info) was created and published instead
- [x] Downloads page (`/downloads`) with a simple card/list layout, wired
      into header nav and footer
- [x] File hosting approach confirmed: in-repo `public/docs`
- [ ] Full service profile PDF as a public download (deferred — see open questions)
- [ ] Additional categories as they're ready: banding machine parts, coin
      counters, scanners

## Phase 4 — Polish & QA ✅ (this update)

- [x] Mobile/responsive pass — fixed a real overflow bug where the header's
      brand name overlapped the nav around 721–950px widths; replaced the
      old wrap-everything mobile nav with an accessible hamburger menu
      (<960px), verified 320px–1440px
- [x] Accessibility pass — darkened the brass accent for text use
      (`--color-brass-text`) so role labels, category tags, etc. pass WCAG
      AA contrast (previously ~2.7–3.1:1 on light backgrounds, now ~5–6:1);
      added a "Skip to main content" link; added footer `<nav>` landmarks
- [x] SEO basics — Open Graph/Twitter meta tags, canonical URLs, favicon
      fallback + apple-touch-icon, a generated branded OG image
      (`public/images/og/og-image.jpg`), and an XML sitemap via
      `@astrojs/sitemap` (see open questions re: the placeholder domain)
- [x] Cross-browser check — reviewed for non-standard CSS/JS (none found)
      and visually verified in Chromium across breakpoints; no Safari/
      Firefox/Edge test environment available here, so a manual pass in
      those browsers before go-live is still recommended

## Phase 5 — Deployment

- [ ] GitHub Actions workflow: build with Astro, deploy to GitHub Pages
- [ ] Custom domain (if/when available) pointed at Pages
- [ ] Final smoke test on live URL

---

### Open questions to resolve as we go

- Contact details for the Contact page
- Whether/when the full service profile PDF (with team & company info) goes public
- Any additional product photos/logo variants beyond what's been uploaded so far
- Content and files for the remaining Downloads categories (banding machine
  parts, coin counters, scanners) as they're developed
- `astro.config.mjs` `site` is set to the planned GitHub Pages URL
  (`https://reigneth-ghana.github.io`) so the sitemap/canonical/OG tags have
  somewhere to point — update this to the real domain once one is confirmed
  (see Phase 5)
- Manual QA in Safari/Firefox/Edge before launch (only Chromium was
  available to test against in this environment)
