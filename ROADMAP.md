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

## Phase 11 — Mobile UX pass (planned)

- [ ] Audit current mobile experience end-to-end (not just the 320–1440px
      overflow check from Phase 4) — nav, hero, product grids, tables/specs,
      forms, tap targets, and image scaling on real phone widths
- [ ] Fix identified layout/usability issues (spacing, text sizing, image
      cropping, card stacking, anything that feels cramped or misaligned
      on small screens)
- [ ] Re-verify touch target sizes and hamburger menu behavior introduced
      in Phase 4 still hold up under the fixes
- [ ] Spot-check on at least one real device or device emulator per major
      breakpoint, not just browser dev tools

## Phase 10 — Theme: background blended with logo ✅ (this update)

- [x] Move the site background off the neutral `--color-paper` grey toward
      something that reads as drawn from the logo itself (brand red), while
      keeping body text on a light/near-white surface for readability —
      `--color-paper` is now `#F7EBEB`, an ~8% blend of `--color-brand-red`
      into white, instead of the old flat grey `#EFEFED`. Body copy still
      sits on `--color-ink`/`--color-ink-soft`, unaffected.
- [x] Explore options: a subtle red-tinted page background, a red gradient
      treatment behind the hero/header only, or a warmer paper tone mixed
      from the brand red — pick one direction and apply consistently.
      Task 1 already covered the "warmer paper tone" direction site-wide,
      so this task applied the complementary "gradient behind the header"
      option: `.site-header` in `src/components/Header.astro` now uses
      `linear-gradient(180deg, --color-surface 0%, --color-paper 100%)`
      instead of a flat white fill, so the header fades into the tinted
      page background below it (and into the mobile nav dropdown, which
      shares the same header background). Applies on every page since
      the header is one shared component.
- [x] Re-check WCAG AA contrast across all text/background combinations
      once the background changes (Phase 4 already tuned brass-on-light;
      this must not regress that) — audited every foreground/background
      pair actually used in the CSS (12 combinations) against the new
      `--color-paper` (`#F7EBEB`) and the new header gradient
      (`--color-surface` → `--color-paper`). All combinations touched by
      Phase 10 pass AA (4.5:1+): body/muted/link text on the page
      background (14.88:1 / 7.93:1 / 7.60:1), header nav text and brand-red
      nav states across the gradient (17.33:1 / 8.85:1 at the white end,
      unchanged 14.88:1 / 7.60:1 at the paper end), the paper-tone heading
      text on the dark "Why choose Reigneth?"/footer panels (14.88:1), and
      brass label text on both the page background and white cards (5.34:1
      / 6.22:1) — no regression from the Phase 4 brass-on-light tuning.
      One **pre-existing, unrelated** failure surfaced during the audit:
      `.site-footer__zones a` ("Get in touch →" in the footer's Coverage
      column) renders `--color-brand-red` on `--color-ink`, which is only
      1.96:1 — both colors are untouched by Phase 10, so this isn't a
      regression, but it was failing AA before this phase too and is
      worth its own fix (e.g. a lighter red for dark backgrounds).
      **Fixed (this update):** `.site-footer__zones a` now uses `#e05c5c`
      (a lightened red scoped to this dark-background context only —
      `--color-brand-red` itself is unchanged) for ~5:1 contrast on
      `--color-ink`; the hover state moved from `#c9422e` (~3.5:1) to
      `#eb7a7a` (~6.3:1) so it doesn't regress back below AA.
- [x] Update `src/styles/global.css` design tokens and confirm the change
      reads consistently across all five pages (home, products, services,
      about, contact, downloads)
      — `--color-paper` (`#F7EBEB`) is set once in `global.css` on `body`;
      no page (`index`, `products`, `services`, `about`, `contact`,
      `downloads`) or layout (`BaseLayout.astro`) sets its own page-level
      background, so the tint cascades identically everywhere with no
      per-page overrides to update. Confirmed with a clean `npm run
    build` and a repo-wide search for the old flat grey (`#EFEFED`) —
      no remaining references. The header gradient (Task 2) and the
      footer link fix (Task 3) are the only other places color tokens
      needed touching for this phase.

## Phase 9 — Downloads content expansion ✅ (this update)

- [x] Added three new public downloads alongside the existing spec sheet:
      a Company Profile (capabilities/coverage overview, no personnel
      names — same rule as the deferred internal service profile), an
      illustrated Product Catalog (real photos for every model we
      have one for, "photo coming soon" placeholder for OB-460), and a
      Consumables Reference Sheet (shrink films, banding bands & tape)
- [x] Expanded the Equipment Spec Sheet from a summary to the full
      current lineup — all six Ladypack models, all three Smipack SL
      models, all three Akebono arches (including OB-460), Mabas
      SBM-90, and the DFM5540/FM5540 budget line with its
      compatibility advisory
- [x] All four PDFs share one branding module (`brand.py`, not
      committed — build-time script) — logo, brand-red header/footer
      band, page numbers, and a subtle diagonal watermark reading
      "Reigneth Company Limited" per owner request
- [x] Downsized product photos before embedding (longest side capped
      at 700px, re-encoded as JPEG) — cut the Product Catalog from
      ~5.2MB to ~650KB and the Consumables sheet from ~730KB to ~160KB
      with no visible quality loss at print size
- [x] `downloads.astro` updated to list all four documents
- [x] Confirmed nothing in any of the four PDFs duplicates the
      internal-only material (leadership/technician names, full
      service profile) that Phase 3 deliberately kept off the public
      site

## Phase 8 — Flagship product & image sourcing ✅ (this update)

- [x] Merged the two empty "Ladypack 45/A2" and "Ladypack 45N" placeholder
      entries into a single flagship **Ladypack 45N/A2** model, first in the
      Ladypack lineup, with both supplied photos wired into the existing
      multi-image zoom/scroll gallery
- [x] Added a "Flagship" badge treatment (`.model-card--flagship` /
      `.flagship-badge`) for the 45N/A2 card
- [x] Homepage hero now uses the flagship 45N/A2 photo instead of the
      Ladypack 65 photo, with updated alt text
- [x] Cleaned the two supplied 45N/A2 photos (cropped a stray UI sidebar
      edge and painted out a screenshot overlay icon) before saving as
      `ladypack-45na2-1.jpg` / `ladypack-45na2-2.jpg`
- [x] Confirmed Ladypack is manufactured by Pactur (Bologna, Italy) —
      matches the branding in the supplied photos
- [x] Sourced official image URLs for Klok 550, Ladypack Table Top
      (= Pactur's "Klok 35 Table Top"), and Akebono OB-560 — see CHANGES.md
      for the exact links and filenames; not yet downloaded into the repo
      (sandboxed build environment can't fetch arbitrary external URLs)
- [x] Flagged that **Akebono OB-460 doesn't appear in the manufacturer's
      (StraPack) current catalog** — noted as a new/updated product per
      owner, image to follow once sourced from the company directly
- [x] Verified DFM5540/FM5540 (Dofeng) — description confirmed and kept
      as-is per owner; sourced candidate images, not yet downloaded
- [x] Swap in real photos for Klok 550, Ladypack Table Top, Akebono OB-460,
      OB-560, DFM5540, and FM5540 once dropped into `public/images/products/`
      (see CHANGES.md for exact source links + filenames)

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
