# Phase 2 — Core pages

## Root cause / starting point
Phase 1 left only a placeholder `index.astro` ("full homepage arrives in
Phase 2"). No Services, About, or Contact pages existed yet, so the header
and footer nav links (already wired up) pointed at 404s.

## Changed / added files
- `src/pages/index.astro` — rebuilt: hero, "what we do" service cards,
  "why choose Reigneth" grid, closing CTA.
- `src/pages/services.astro` — new. Three sections (Shrink Wrap, Bank Note
  Banding, Coin Counting), content and specs sourced from
  `REIGNETH_SERVICE_PROF__.pdf` (Ladypack, Adpak/Smipack SL, Akebono OB-360,
  Mabas SBM-90, Coin 100/120, shrink films note).
- `src/pages/about.astro` — new. Core objective, leadership grid (CEO, MD,
  COO, Director of Finance), Southern/Northern Zone technician listings.
- `src/pages/contact.astro` — new. Contact-info column + a `mailto:`-based
  form (no backend in this stack yet). **Phone/email/address are
  placeholders** — swap in real details.
- `public/images/products/akebono-banding.jpg`,
  `public/images/products/mabas-banding.jpg` (cropped),
  `public/images/products/coin-counter.jpg` — extracted from the service
  profile PDF; Phase 1 only shipped 3 generic shrink-wrap photos, nothing
  for banding/coin equipment.

## Open items carried to later phases
- Real contact details (phone, email, address, socials) for `contact.astro`.
- Contact form currently opens the visitor's email client (`mailto:`); a
  real submission backend is a Phase 3+ decision.
- Service profile PDF itself isn't linked/downloadable yet — that's Phase 3.
