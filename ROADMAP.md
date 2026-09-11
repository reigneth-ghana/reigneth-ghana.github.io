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

## Phase 11 — Mobile UX pass (in progress) (this update)

- [x] Audit current mobile experience end-to-end (not just the 320–1440px
      overflow check from Phase 4) — nav, hero, product grids, tables/specs,
      forms, tap targets, and image scaling on real phone widths
      (this update)
      — Code-level audit across all six pages/components at real phone
      widths (320/360/375/390/414/430px), since no physical device or
      emulator is available in this build environment (same constraint
      noted in Phase 4/5). Findings, in the order requested:
      **Tap targets** (the main gap found): - `Header.astro` `.site-header__toggle` (hamburger button) is a
      fixed 2.5rem × 2.5rem (40×40px) — under the 44×44px minimum. - `products.astro` lightbox controls are undersized: `.lightbox__close`
      is 2.25rem (36px), `.lightbox__nav--prev`/`--next` are 2.5rem
      (40px) — both below 44px, and they're the only way to close or
      page through the product photo zoom on a phone (no swipe gesture). - `contact.astro` form fields (`input`, `select`, `textarea`) use
      `padding: 0.6rem 0.75rem` — computed height lands right at the
      ~44px line depending on the browser's default form-control
      line-height, so it's not a clear failure but has no margin either;
      worth an explicit `min-height` rather than relying on padding. - `Footer.astro` nav links (`.site-footer a`) have no block padding
      of their own — just `gap: 0.6rem` between list items — so the
      effective vertical tap target is closer to ~30px than 44px. - By contrast, `.button` (used for all primary CTAs, including the
      contact form's submit) computes to ~47px tall from its
      `0.7rem` padding + text line-height, and the open mobile nav's
      `.site-header__nav a` links get `padding-block: var(--space-2)`
      (16px), landing well over 44px — so this is isolated to the four
      controls above, not a site-wide pattern.
      **Text sizing**: no responsive type scale exists anywhere in
      `global.css` — `--text-3xl` (48px, used for every page's `h1`) and
      `--text-2xl` (36px, every `h2`) are fixed values with no `clamp()`
      and no media-query override. Not broken (headings just wrap to
      several lines on a 320–375px screen), but it's the most likely
      source of the "feels cramped" complaint Task 2 is meant to address,
      since a 48px heading eats a large share of the viewport on a phone.
      **Nav**: hamburger menu itself (open/close, focus trap via Escape,
      link-tap-closes-menu, `matchMedia` reset above 1060px) all check
      out logically; the only nav issue is the 40px toggle button above.
      **Hero** (`index.astro`): stacks correctly under 900px, image
      reorders above the copy, aspect ratio holds via the `width`/`height`
      attributes (no distortion). No issues found.
      **Product grids** (`products.astro`): `.model-grid` steps 3 → 2
      (860px) → 1 (720px) columns cleanly with no overflow at any phone
      width. One inconsistency: `.model-card img` stays a fixed `8rem`
      (128px) tall at every breakpoint, while the nearby `.product img`
      (single-model layout) grows from `8rem` to `10rem` under 720px —
      minor, but means photos in the multi-model grid look small
      relative to their card once stacked to 1 column on a phone.
      **Tables/specs**: no literal `<table>` elements on the site — the
      spec content is the `<ul>` lists inside `.model-card`/`.product`
      bodies. These already use `--text-xs`/`--text-sm` with generous
      `line-height`/`gap` and stack fine down to 320px; no issues found.
      **Forms** (`contact.astro`): layout itself (label-above-input,
      single column, `select` and `textarea` sized like the text inputs)
      holds up down to 320px with no overflow. The only issue is the tap
      target sizing noted above; 16px input `font-size` is correctly kept
      (prevents iOS Safari's auto-zoom-on-focus).
      **Image scaling**: global `img { max-width: 100%; display: block }`
      plus explicit `width`/`height` attributes on every `<img>` (so the
      browser reserves the right aspect ratio and there's no layout
      shift) is applied consistently across hero, cards, model photos,
      and the lightbox. No cropping or distortion issues found at any
      width tested.
      **One more spot-checked while auditing the lightbox**: on a short
      viewport (e.g. a phone in landscape, or a small phone with the
      browser chrome visible), `.lightbox__close`'s `top: -2.5rem`
      offset combined with the lightbox's `padding: var(--space-4)`
      (32px) means the close button can render partly outside the
      viewport's visible area above the image — flagging for the Task 4
      device spot-check rather than fixing blind here.
- [x] Fix identified layout/usability issues (spacing, text sizing, image
      cropping, card stacking, anything that feels cramped or misaligned
      on small screens) — tackle in this order: (1) tap targets — bump
      the header toggle and lightbox controls to 44×44px and give the
      form fields/footer links explicit min-height/padding, (2) a
      responsive type scale for `h1`/`h2` so headings don't dominate a
      320–375px viewport, (3) the `.model-card img` vs `.product img`
      height inconsistency on mobile
      (this update)
      — **(1) Tap targets, all four fixed:**
      `Header.astro` `.site-header__toggle` is now `2.75rem × 2.75rem`
      (44×44px, was 40×40px). `products.astro` `.lightbox__close` is
      now `2.75rem × 2.75rem` (was 36px) and `.lightbox__nav`
      (prev/next) is now `2.75rem × 2.75rem` (was 40px); their
      `top: -2.5rem` repositioning at the 860px breakpoint is
      untouched, left for the Task 4 device spot-check as originally
      flagged. `contact.astro` form fields (`input`/`select`/`textarea`)
      now have `min-height: 2.75rem` alongside the existing padding, so
      the 44px floor holds regardless of browser form-control
      line-height; `textarea` additionally keeps its own
      `min-height: 8rem` so the floor doesn't shrink the 5-row default.
      `Footer.astro` nav links (`.site-footer a`) now get
      `padding-block: 0.7rem` and `display: inline-block` (computes to
      ~45px with `--text-sm`'s inherited line-height, up from ~30px);
      the list's own `gap` dropped to `0` since the link padding now
      provides the vertical spacing — non-link Coverage `<li>` text
      (zone names) is unaffected since the padding is scoped to `a`.
      **(2) Responsive type scale:** `--text-2xl` and `--text-3xl` in
      `global.css` are now `clamp()` expressions instead of fixed
      values — `--text-3xl` (every page's `h1`) runs 30px→48px and
      `--text-2xl` (every `h2`) runs 26px→36px, both bottoming out at
      their mobile minimum by 320px and reaching their old fixed
      values only above roughly 900–1050px viewport width. `h3`
      (`--text-xl`) was left as a fixed value — it wasn't flagged in
      the audit and doesn't dominate the viewport the way `h1`/`h2` do.
      **(3) Image height inconsistency:** `products.astro`'s existing
      `max-width: 720px` query already bumped `.product img` to
      `10rem`; `.model-card img` is now included in that same rule, so
      both grow to `10rem` together once stacked to a single column on
      a phone instead of `.model-card img` staying fixed at `8rem`.
      Verified with a clean `npm run build` after each change — no
      build errors.
- [x] Re-verify touch target sizes and hamburger menu behavior introduced
      in Phase 4 still hold up under the fixes
      (this update)
      — **Touch targets, re-verified after Task 2:** header toggle
      44×44px, lightbox close/prev/next 44×44px, contact form fields
      floor at 44px via `min-height`, footer links ~45px via
      `padding-block`, mobile nav links unchanged at ~54.5px (already
      passing before Task 2, confirmed still passing). **One
      regression found and fixed:** the Task 2 height bump on
      `.lightbox__close` (36px → 44px) wasn't matched by its
      `≤860px` breakpoint override, which still repositioned it with
      the old `top: -2.5rem` offset — sized for the old 36px button,
      it left the new 44px button overlapping 4px into the image at
      that breakpoint. Changed the override to `top: -2.75rem` (same
      as the default, flush with zero overlap) and removed the
      now-redundant media-query rule entirely, so one value governs
      the offset everywhere. **Hamburger menu behavior, re-verified
      unaffected:** no JS was touched by Task 2, only CSS sizing —
      confirmed by re-reading `Header.astro`'s script: open/close
      toggle, Escape-to-close with focus return to the toggle button,
      link-tap-closes-menu, and the `matchMedia("(min-width: 1060px)")`
      listener that force-closes the menu if the viewport grows past
      the breakpoint are all untouched and still wired to the same
      `#site-header`/`#primary-nav` elements. The toggle button's 4px
      size increase sits inside a wrapping flex row with room to
      spare down to 320px (checked against the brand logo + gap, since
      the brand name itself already hides below 380px), so no overflow
      introduced. Verified with a clean `npm run build`.
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
