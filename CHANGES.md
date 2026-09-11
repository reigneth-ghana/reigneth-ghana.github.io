# Contact fix

## Why

`+233 24 206 2091` and `+233 26 363 7875` were mistakenly attached to
Mr. Khanti Bandeme's technician entry on `/about`. They're general
office numbers, not his personal line, and don't belong tied to a
named technician.

## What changed

- **`src/pages/about.astro`** — removed the `contact` array from
  Mr. Khanti Bandeme's entry. He now renders the same as the other
  Assistant Technicians (name + role, no phone numbers).
- **`src/pages/contact.astro`** — `phone` (single string) became
  `phones` (array of three numbers: the existing main line plus the
  two removed from Khanti's entry). The "Phone" row in the info list
  now renders one `tel:` link per number, stacked vertically. Added
  `.info-list__multi` (flex column, small gap) to keep them tidy.

## Not changed

Everything else — `Header.astro`, `Footer.astro`, `products.astro`,
`services.astro`, `downloads.astro`, `index.astro` — untouched.

## Open item — Ladypack model images

Couldn't action the Ladypack image request this round:

- No PDF was actually attached to the request (only `website.zip`
  came through) — if there's a spec sheet or photos to crop from,
  please attach it directly.
- The four names given (45/A2, 45N, Klok 550, "table top") don't
  match the three Ladypack models currently on `/products`
  (Ladypack 45, 65, 110) — need to know whether these four _replace_
  that lineup or map onto it somehow before restructuring
  `products.astro`.
- This environment can't fetch arbitrary images from the open web
  into the repo (network is locked to package registries), and the
  images turned up by search are third-party marketplace/reseller
  photos (Exapro, etc.) — not something to republish on a commercial
  site without rights to them. Real photos (Reigneth's own, or
  manufacturer-licensed) are needed here, same as the existing
  "Photo coming soon" placeholder pattern used for OB-460/OB-560/
  DFM5540/FM5540 in Phase 7.
