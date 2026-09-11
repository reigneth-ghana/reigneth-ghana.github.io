# Phase 7 — Product line breakdowns

## Why

Ladypack, Adpak/Smipack, and Akebono each turned out to cover several
distinct models Reigneth actually stocks, rather than one machine — the
service profile document's photos and the notes on this update named
them individually. The single card per brand on `/products` didn't leave
room to tell them apart, and there was no listing at all for the
Chinese-manufactured DFM5540/FM5540 banding machines Reigneth also
supplies alongside the genuine Mabas SBM-90.

## What changed

- **`src/pages/products.astro`** — restructured the Shrink Wrap Machines
  and Bank Note Banding Machines sections around a new "family" pattern:
  a brand-level intro paragraph followed by a grid of individual model
  cards (photo + short spec list each), instead of one card per brand.
  - **Ladypack** now lists three models: Ladypack 45, Ladypack 65
    (previously the only Ladypack shown), and Ladypack 110 — photos for
    the 45 and 110 were cropped from the two smaller machines shown on
    page 1 of the service profile document (identified from the model
    numbers stencilled on their legs); the 65 keeps its existing photo.
  - **Adpak / Smipack SL series** now lists three models: SL45 (existing
    photo), S560N, and S560NA — photos for the latter two were cropped
    from page 2 of the service profile document.
  - **Akebono OB series** now lists OB-360 (existing specs/photo),
    OB-460, and OB-560 as three arch sizes of the same banding
    mechanism. No distinct photos exist yet for the 460/560, so all
    three currently share the OB-360 photo; specs for the 460/560 are
    described qualitatively (larger arch, higher throughput) rather than
    with invented numbers, since exact figures weren't available.
  - **New "Alternative / Budget-Line Banding Machines" listing** — the
    DFM5540 and FM5540, described as a separate Chinese-manufactured
    line at a lower price point than the genuine Mabas SBM-90, with an
    advisory note clarifying they're independently manufactured and that
    parts/firmware aren't interchangeable with the Mabas. No photos are
    available for these yet, so this listing is text-only.
- **New images** — `ladypack-45.jpg`, `ladypack-110.jpg`,
  `smipack-s560n.jpg`, and `smipack-s560na.jpg`, all cropped and
  padded from the photos in the service profile PDF (the same source
  the existing Ladypack 65, SL45, Akebono, and Mabas photos came from).
- **New styles** — `.family`, `.family__intro`, `.model-grid`,
  `.model-card`, and `.advisory` added to `products.astro`'s scoped
  styles, sitting alongside the existing `.product-grid`/`.product`
  styles used for the single-model Mabas and Coin 100/120 listings
  (left untouched).

## Not changed

- `services.astro`, `about.astro`, `contact.astro`, `downloads.astro`,
  `index.astro` — untouched. The equipment-spec content on `/downloads`
  still covers the same machines at brand level; it can be updated to
  list individual models in a later pass if wanted.
- `Header.astro`, `Footer.astro` — no nav changes needed, same anchor
  ids (`#shrink-wrap`, `#banknote-banding`, `#coin-counting`) still work.

## Placeholder photos

The OB-460, OB-560, DFM5540, and FM5540 don't have real photos yet, so
rather than reusing the OB-360 photo for models it doesn't actually show
(which was the original, misleading approach), each of those four now
renders a dashed-border "Photo coming soon" placeholder box in place of
an `<img>`, captioned with the exact file path the real photo should be
dropped in at:

- `public/images/products/akebono-ob460.jpg`
- `public/images/products/akebono-ob560.jpg`
- `public/images/products/dfm5540.jpg`
- `public/images/products/fm5540.jpg`

This is driven by each model's `img` field in `products.astro` — `img:
null` plus a `placeholderPath` renders the placeholder; setting `img` to
the real path (once the photo is dropped in at the path above) switches
it back to a normal photo automatically, no other markup changes needed.

## Two follow-up fixes (same phase)

- **Image letterboxing was gray, not white** — `.model-card img`,
  `.product img`, and `.note__img` all used `background:
  var(--color-paper)` (`#efefed`, the same warm-gray used for page
  backgrounds) to fill the space around a `contain`-fit photo. On
  product photos with white backgrounds, that showed up as a visible
  gray band around the image. Switched all three to `background:
  var(--color-surface)` (`#ffffff`) so the letterboxing disappears
  against the white photos. Left the "Photo coming soon" placeholder
  boxes on `--color-paper` deliberately — that gray fill is what makes
  them read as placeholders rather than photos.
- **No vertical gap between families (e.g. Ladypack and Adpak/Smipack
  butting up against each other)** — `.family { margin-bottom:
  var(--space-5); }` referenced a token that doesn't exist in this
  project's spacing scale (`--space-1` through `--space-4`, then
  `--space-6`, `--space-8`, `--space-12` — there is no `--space-5`), so
  the browser silently ignored it and the margin collapsed to zero.
  Changed to `var(--space-6)` (3rem), a real token, which restores the
  section-like spacing between each brand's block.

## Open items

- Real photos for the Akebono OB-460, OB-560, DFM5540, and FM5540 —
  drop them in at the file paths listed above and flip the matching
  `img: null` to the real path in `products.astro`.
- Exact arch-size/speed specs for the Akebono OB-460 and OB-560, if
  Reigneth has manufacturer figures for them — the current copy is
  intentionally qualitative rather than guessing numbers.
- Whether the DFM5540/FM5540 should also get their own anchor id and a
  footer/nav link, if Reigneth wants them easier to link to directly.

---

# Phase 6 — Products / Services split

## Why

The service profile document mixed actual equipment (machines, specs,
photos) in with the company's service offering (installation, repairs,
maintenance) under one "Services" page. Asked for a separate Products tab
so equipment and services read as two distinct things.

## What changed

- **New `src/pages/products.astro`** — the equipment catalog moved here
  wholesale from the old `services.astro`: Ladypack, Adpak/Smipack SL
  Series, Akebono OB-360, Mabas SBM-90, Coin 100/120, plus the shrink-film
  note and a new banding bands/tape note. Same anchor ids (`#shrink-wrap`,
  `#banknote-banding`, `#coin-counting`) as before, just on `/products` now.
- **Rewrote `src/pages/services.astro`** — now about the service work
  itself: three "Specialized Services" cards (still using the
  `#shrink-wrap` / `#banknote-banding` / `#coin-counting` ids, but on this
  page they describe install/repair/maintenance, not specs) each linking
  over to the matching `/products` section, plus a "How we work" strip
  (Supply → Installation → Repairs & Maintenance → Nationwide Support).
- **`src/components/Header.astro`** — added "Products" to the primary nav
  (Home, Products, Services, Downloads, About, Contact). Widened the
  mobile-menu breakpoint from 960px to 1060px since a 6th link needs more
  room than the 5-link layout the previous breakpoint was tuned for.
- **`src/components/Footer.astro`** — added a "Products" nav column
  (linking to the `/products` anchors) and pointed the existing "Services"
  column at the `/services` anchors instead. Footer grid widened from 5 to
  6 columns, with the collapse breakpoint bumped from 940px to 1080px to
  match.
- **`src/pages/index.astro`** — the "What we do" cards and the hero's
  secondary button now point at `/products` (they're equipment tiles), with
  a line in the section intro linking over to `/services` for the
  maintenance offering.

## Not changed

- `downloads.astro` and the public equipment spec sheet — untouched, still
  covers all the same equipment either way.
- `about.astro`, `contact.astro` — untouched.

---

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
