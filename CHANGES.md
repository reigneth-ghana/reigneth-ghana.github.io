# Downloads section expansion — 3 new public documents

## Why

The owner asked to build out the Downloads section: additional public
documents about the products/company, watermarked, with nothing
private to Reigneth included (no personnel names, no internal service
profile content — same line Phase 3 already drew for the site itself).

## What changed

- **`public/docs/reigneth-equipment-spec-sheet.pdf`** — replaced.
  Previously a condensed summary (one line per brand); now covers
  every current model by name: all six Ladypack configurations, all
  three Smipack SL models, all three Akebono OB arches (including the
  new OB-460), the Mabas SBM-90, and the DFM5540/FM5540 budget line
  with its compatibility advisory. 2 pages.
- **`public/docs/reigneth-company-profile.pdf`** — new. Public
  capability/coverage overview (what we do, how we work, why choose
  Reigneth, coverage, contact). Deliberately excludes the
  leadership/technician names that appear on the public `/about` page
  — matches the standing decision to keep personnel info out of
  anything downloadable. 1 page.
- **`public/docs/reigneth-product-catalog.pdf`** — new. Illustrated
  version of the full product lineup with real photos for every model
  we have one for; Akebono OB-460 gets the same "photo coming soon"
  placeholder treatment as the `/products` page instead of a
  fabricated image. 4 pages.
- **`public/docs/reigneth-consumables-reference.pdf`** — new. Shrink
  wrap films and banding bands/tape — material options and machine
  compatibility notes. 1 page.
- **`src/pages/downloads.astro`** — `downloads` array now lists all
  four documents (category, description, file size); trimmed the page
  lede's "coming later" list down to what's still actually missing
  (banding machine parts, scanners — coin counters are now covered by
  the catalog).

## Design / production notes

- All four PDFs were built with one shared branding setup (logo,
  brand-red header/footer band, page numbers, contact footer) so they
  read as one family and match the site's design tokens
  (`src/styles/global.css`) exactly — same red/ink/brass hex values.
- Per owner request, every page carries a subtle diagonal watermark
  reading "Reigneth Company Limited" (brand red, ~5% opacity, two
  passes per page — enough to read as a deterrent without obscuring
  the content).
- Product photos were downsized before embedding (longest side capped
  at 700px, re-encoded as JPEG) — this took the Product Catalog from
  ~5.2MB to ~650KB and the Consumables sheet from ~730KB to ~160KB,
  with no visible quality loss at the print sizes used. The site's
  own `public/images/products/*` files are untouched; the resized
  copies only exist inside the (uncommitted) PDF build step.
- Akebono OB-460 has no real photo yet anywhere in the project — the
  catalog matches `/products` in showing a labelled placeholder
  instead of substituting a different model's photo.

## Not changed

`about.astro`, `contact.astro`, `services.astro`, `products.astro`,
`index.astro`, `Header.astro`, `Footer.astro`, `BaseLayout.astro`,
`global.css`, all `public/images/*` — untouched.
