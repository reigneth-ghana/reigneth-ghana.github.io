# Phase 5 — Deployment

## Starting point

The build pipeline was already in place going into this phase — a
`.github/workflows/build-docs.yml` workflow that runs `astro build` (with
`outDir: "./docs"`) and commits the result to `docs/` on every push to
`main`, with GitHub Pages configured to serve from that folder. That part
wasn't done here; it just needed the custom domain connected on top of it.

## Custom domain — reigneth.org

The domain is purchased and confirmed, so:

- Added `public/CNAME` containing `reigneth.org` — Astro copies everything
  in `public/` into the build output as-is, so this lands at `docs/CNAME`
  on every build, which is what tells GitHub Pages which domain to serve.
- Updated `astro.config.mjs` — `site` now points at `https://reigneth.org`
  instead of the placeholder `reigneth-ghana.github.io`. This feeds the
  sitemap URLs, canonical links, and Open Graph/Twitter `url`/`image` tags
  in `BaseLayout.astro`, so all of those now resolve to the real domain.
- Updated `public/robots.txt`'s `Sitemap:` line to match.
- Rebuilt and verified: `docs/CNAME` is present, `sitemap-index.xml` and
  every page's canonical/OG tags now say `reigneth.org`, and there are no
  leftover references to the old placeholder domain anywhere in the build
  output.

## What's still needed outside the repo

None of this can be done from the codebase — it needs the registrar and
GitHub's settings UI:

**1. DNS records** (at whoever `reigneth.org` is registered/managed
through):

For the apex domain (`reigneth.org`), add four `A` records, all pointing
at GitHub Pages:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

Optional but recommended — `AAAA` records for IPv6:

```
AAAA    @    2606:50c0:8000::153
AAAA    @    2606:50c0:8001::153
AAAA    @    2606:50c0:8002::153
AAAA    @    2606:50c0:8003::153
```

If `www.reigneth.org` should also work (recommended — GitHub will
redirect it to the apex automatically once both are set up):

```
CNAME    www    reigneth-ghana.github.io.
```

**2. GitHub repo settings** — Settings → Pages → Custom domain → enter
`reigneth.org` → Save. GitHub will detect the `CNAME` file/DNS and verify
it (can take a few minutes to a few hours after DNS propagates). Once the
"Enforce HTTPS" checkbox becomes available (GitHub provisions the
certificate automatically after verification), turn it on.

**3. Propagation** — DNS changes can take anywhere from a few minutes to
~48 hours to fully propagate, so the domain may not resolve immediately
even once everything above is done correctly.

## Favicons

Found that the site's favicon was still Astro's default starter icon (the
purple/pink "A" mark) — never actually replaced with the RCL brand since
Phase 0. Fixed:

- The full logo (with "RCL" text) reads fine down to about 48px, but
  turns into an illegible smudge at 16–32px — the sizes that actually show
  up in a browser tab. So the tiny sizes now use a simplified vector mark
  (just the red hexagon ring, no text) instead of trying to cram the full
  logo into a handful of pixels.
- Replaced `public/favicon.svg` with that vector hexagon mark (scales
  crisply at any size, brand red `#9A0000`).
- Regenerated `public/favicon.ico` as a proper multi-resolution icon
  (16/32/48px) from the same mark, replacing the old Astro-default one.
- Added `public/favicon-16x16.png` and `public/favicon-32x32.png` for
  browsers that prefer explicit PNG favicons over `.ico`.
- Left `apple-touch-icon.png` (180×180, added in Phase 4) as-is — the full
  logo with "RCL" text is legible at that size, so no change needed there.
- Added the two new PNG `<link>` tags to `BaseLayout.astro` alongside the
  existing svg/ico/apple-touch-icon links.

## Changed / added files

- `public/CNAME` — new. Contains `reigneth.org`.
- `astro.config.mjs` — `site` updated to `https://reigneth.org`.
- `public/robots.txt` — sitemap URL updated to match.
- `public/favicon.svg` — replaced with a vector hexagon mark (was Astro's
  default icon).
- `public/favicon.ico` — replaced with a proper multi-size (16/32/48px)
  brand icon (was Astro's default icon).
- `public/favicon-16x16.png`, `public/favicon-32x32.png` — new.
- `src/layouts/BaseLayout.astro` — added the two new PNG favicon links.

## Open items carried to later phases

- Real contact details still placeholders on `contact.astro` (carried over
  from Phase 2).
- Full service profile PDF and remaining Downloads categories (carried
  over from Phase 3).
- Manual Safari/Firefox/Edge QA before go-live (carried over from Phase 4).
- The DNS records and GitHub Pages settings above — once those are done
  and DNS has propagated, do a final smoke test on `https://reigneth.org`
  (all 5 pages, the contact form's `mailto:` link, the downloads PDF, and
  that the OG image renders when the link is shared) and confirm
  "Enforce HTTPS" is on.
