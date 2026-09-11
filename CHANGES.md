# Phase 4 — Polish & QA

## Root cause / starting point

Phases 0–3 shipped a full five-page site, but it had never been checked
against real breakpoints, contrast ratios, or search/social metadata. This
phase was a QA pass rather than new content: built the site, screenshotted
every page at mobile/tablet/desktop widths, computed actual contrast ratios
for the color palette, and fixed what came up.

## Mobile/responsive pass

Found a real bug, not just a "could be nicer": in the 721–950px range
(common tablet widths), the header's flex layout let the brand name
("Reigneth Company Limited") shrink narrower than its own text, so the
name visually overlapped the "Home" nav link. The old mobile behavior
below 720px also just wrapped the name, nav, and CTA into an increasingly
tall stack rather than collapsing cleanly.

Replaced this with a proper toggleable menu below 960px:

- Header collapses to logo + hamburger button; nav and CTA move into a
  panel that opens below the header.
- Hamburger is a real `<button>` with `aria-expanded`/`aria-controls`,
  animates to an "X" on open, closes on Escape or on clicking a nav link,
  and auto-closes if the window is resized past the desktop breakpoint.
- Verified 320px through 1440px on every page — no more overlap, no more
  multi-row nav stacking.

## Accessibility pass

- Computed actual WCAG contrast ratios for every color pairing in
  `global.css`. The brass accent (`#B08D3E`), used for role labels,
  category tags, and info labels, only reached ~2.7–3.1:1 against white/
  paper backgrounds — fails AA (needs 4.5:1 for normal text). Added a
  darker `--color-brass-text: #7A5C1C` (~5–6:1) for text use and swapped
  it in on `about.astro` (leadership/technician role labels), `contact.astro`
  (info labels), and `downloads.astro` (category tag). Left the original
  `--color-brass` as-is where it's used on the dark `ink` background
  (`index.astro` `.why__index`), where it already passes.
- Added a "Skip to main content" link (visible on keyboard focus) and
  `id="main-content"` on every page's `<main>`.
- Wrapped the footer's link columns in labeled `<nav>` landmarks (Company,
  Services, Resources) for easier screen-reader navigation.

## SEO basics

- Added Open Graph and Twitter Card meta tags, plus a canonical `<link>`,
  to `BaseLayout.astro`.
- Generated a branded 1200×630 Open Graph image
  (`public/images/og/og-image.jpg`) from the real logo and brand palette.
- Added an `apple-touch-icon.png` (cropped from the logo) and a `.ico`
  fallback link alongside the existing SVG favicon.
- Added `@astrojs/sitemap` — `sitemap-index.xml` now generates on every
  build. This requires an `site` URL in `astro.config.mjs`; set it to
  `https://reigneth-ghana.github.io` (the GitHub Pages URL implied by the
  confirmed org + planned Phase 5 deployment target) since no custom
  domain is confirmed yet. **Update this the moment a real domain goes
  live** — canonical URLs, OG tags, and the sitemap all key off it.
- Added `public/robots.txt` pointing at the sitemap.

## Cross-browser check

No Safari/Firefox/Edge test environment was available here. Reviewed the
CSS/JS for anything non-standard (none — just flexbox, grid, custom
properties, `:focus-visible`, and plain JS with no framework), and
visually verified rendering in Chromium across breakpoints. A manual pass
in Safari and Firefox before launch is still worth doing.

## Changed / added files

- `src/components/Header.astro` — mobile hamburger menu, fixed the
  brand/nav overlap bug, restructured responsive CSS.
- `src/components/Footer.astro` — link columns wrapped in labeled `<nav>`
  landmarks.
- `src/layouts/BaseLayout.astro` — skip link, OG/Twitter meta, canonical
  URL, favicon fallback, apple-touch-icon.
- `src/styles/global.css` — added `--color-brass-text` token.
- `src/pages/about.astro`, `contact.astro`, `downloads.astro` — swapped in
  `--color-brass-text` for role labels/category tags; added
  `id="main-content"`.
- `src/pages/services.astro`, `index.astro` — added `id="main-content"`.
- `astro.config.mjs` — added `site` and the `@astrojs/sitemap` integration.
- `package.json` / `package-lock.json` — added `@astrojs/sitemap`.
- `public/images/og/og-image.jpg` — new. Branded Open Graph image.
- `public/apple-touch-icon.png` — new.
- `public/robots.txt` — new.

## Open items carried to later phases

- Real contact details still placeholders on `contact.astro` (carried over
  from Phase 2).
- Full service profile PDF and remaining Downloads categories (carried
  over from Phase 3).
- `astro.config.mjs` `site` is a placeholder GitHub Pages URL — swap for
  the real domain once confirmed.
- Manual Safari/Firefox/Edge QA before go-live.
