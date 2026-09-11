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

## Phase 2 — Core pages ✅

- [x] Home — hero, what Reigneth does, why choose them, quick links to services
- [x] Services — Shrink Wrap Machines, Bank Note Banding Machines, Coin Counting Machines
      (content sourced from the service profile document)
- [x] About / Team — leadership (CEO, MD, COO, Director of Finance) and technicians
      (Southern Zone / Northern Zone), nationwide coverage messaging
- [x] Contact — form + info layout in place; phone/email/address are still
      placeholders (see open questions)

## Phase 7 — Product line breakdowns ✅ (this update)

- [x] Ladypack, Adpak/Smipack SL series, and the Akebono OB series broken
      out into their individual models on `/products` instead of one card
      per brand
- [x] Ladypack: Ladypack 45, Ladypack 65, and Ladypack 110, each with its
      own photo (cropped from the service profile document) and specs
- [x] Adpak/Smipack SL series: SL45, S560N, and S560NA, each with its own
      photo (cropped from the service profile document) and specs
- [x] Akebono OB series: OB-360, OB-460, and OB-560 as three arch sizes
      of the same banding mechanism
- [x] Added a separate "Alternative / Budget-Line Banding Machines"
      listing for the DFM5540 and FM5540 (Chinese-manufactured, distinct
      from the genuine Mabas SBM-90), with an advisory note clarifying
      they're a different product line — parts/firmware aren't
      interchangeable with the genuine Mabas
- [x] New `.family` / `.model-grid` styles on `/products` to support a
      brand with several models, without disturbing the single-model
      Mabas or Coin 100/120 layout
- [x] Added a "Photo coming soon" placeholder treatment (dashed box,
      captioned with the expected file path) for the four models with
      no real photo yet — OB-460, OB-560, DFM5540, FM5540 — instead of
      reusing an unrelated photo for them
- [x] Fixed gray letterboxing around product photos (was using the page
      background color instead of white) and restored the missing
      vertical gap between brand blocks (was referencing a spacing
      token that doesn't exist in this project's scale)
- [ ] Swap in real photos for OB-460, OB-560, DFM5540, and FM5540 once
      available (see CHANGES.md for the exact file paths)

## Phase 6 — Products / Services split ✅ (this update)

- [x] Split the equipment catalog out of Services into its own `/products`
      page — Shrink Wrap Machines, Bank Note Banding Machines, Coin Counting
      Machines, plus consumables notes (films, banding bands/tape)
- [x] Rewrote `/services` to cover the actual service offering (supply,
      installation, repairs, routine maintenance, nationwide zone support)
      instead of duplicating equipment specs, with links across to the
      matching `/products` section
- [x] Added "Products" to primary nav (`Header.astro`) and footer nav
      (`Footer.astro`); widened the header's mobile-menu breakpoint
      (960px → 1060px) to keep room for the extra link; footer grid updated
      for the extra column
- [x] Updated homepage ("What we do" cards, hero secondary button) to point
      at `/products` instead of `/services` anchors, with a line linking
      over to `/services` for the maintenance offering

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

## Phase 5 — Deployment (in progress)

- [x] GitHub Actions workflow: builds with Astro (`outDir: docs`) and commits
      the output to `docs/` on every push to `main`
      (`.github/workflows/build-docs.yml`); GitHub Pages serves from the
      `main` branch `/docs` folder. `public/.nojekyll` and the renamed
      `assets/` output folder (instead of the default `_astro/`) avoid
      GitHub's Jekyll processing swallowing the build output.
- [x] Custom domain — `reigneth.org` confirmed and purchased. Added
      `public/CNAME` (copied into `docs/CNAME` on every build) and updated
      `astro.config.mjs` / `public/robots.txt` to the real domain. Still
      needed on GitHub/DNS side — see open questions below.
- [ ] Final smoke test on live URL — pending DNS propagating and the
      custom domain going live

---

### Open questions to resolve as we go

- Contact details for the Contact page
- Whether/when the full service profile PDF (with team & company info) goes public
- Any additional product photos/logo variants beyond what's been uploaded so far
- Content and files for the remaining Downloads categories (banding machine
  parts, coin counters, scanners) as they're developed
- Manual QA in Safari/Firefox/Edge before launch (only Chromium was
  available to test against in this environment)
- DNS for `reigneth.org` and the GitHub Pages "Custom domain" / "Enforce
  HTTPS" settings still need to be completed on the registrar/GitHub side
  (see CHANGES.md for the exact records) — nothing in the repo can do this
  part
