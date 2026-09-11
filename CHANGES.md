# Flagship product (Ladypack 45N/A2) + image sourcing

## Why

The two Ladypack 45/A2 and 45N placeholders never had real photos.
The owner supplied two photos of the actual flagship unit (branded
Pactur/Ladypack, "45N/A2") and asked for it to be the hero image on
the homepage and to appear in the products page zoom gallery.
Separately, asked to source missing photos for Ladypack Klok 550,
Ladypack Table Top, Akebono OB-460/OB-560, and DFM5540/FM5540.

## What changed

- **`src/pages/products.astro`**
  - Merged the "Ladypack 45/A2" and "Ladypack 45N" placeholder entries
    into one flagship model, `"Ladypack 45N/A2"`, now first in the
    Ladypack lineup, with `images: ["/images/products/ladypack-45na2-1.jpg",
"/images/products/ladypack-45na2-2.jpg"]` — both photos are already
    wired into the existing lightbox scroll-through (no lightbox code
    changes needed, it already supported N images per model).
  - Added a `flagship: true` field on that model, a `.model-card--flagship`
    class + `.flagship-badge` "Flagship" ribbon rendered when set.
  - Updated the `"Ladypack Klok 550"` `placeholderPath` extension from
    `.jpg` to `.png` (the real source file is a PNG — see links below).
- **`src/pages/index.astro`**
  - Hero image swapped from `ladypack-1.jpg` (Ladypack 65) to
    `ladypack-45na2-1.jpg` (the new flagship), with updated alt text.
  - "Browse our products" hero button now links to `/products#shrink-wrap`
    directly instead of `/products`.
- **`public/images/products/ladypack-45na2-1.jpg`,
  `ladypack-45na2-2.jpg`** — new. Cropped from the owner-supplied photos
  (removed a stray gray UI sidebar edge and a screenshot overlay icon
  that had come along in both originals).

## Research notes

- Confirmed Ladypack is manufactured by **Pactur** (Bologna, Italy,
  since 1986) — the "We ❤ Fresh Packaging" branding and heart logo in
  the supplied photos matches Pactur's own site exactly.
- **"Strapak"** (mentioned in the request) = **StraPack Corp**, the
  manufacturer behind the Akebono OB banding line — not a separate
  brand, no separate content needed.
- **Akebono OB-460 doesn't appear in StraPack's current catalog**
  (their arch-band lineup is OB-360 / OB-360N / OB-360A / OB-560N only).
  Per the owner, this is a new product on their end — they'll supply
  the photo once sourced directly from the company.
- **DFM5540/FM5540**: every independent manufacturer listing found
  (Zhejiang Dongfeng Packing Machine Co. — trademark "DF", confirming
  "Dofeng" — and others) describes these as 2-in-1 shrink film
  wrapping/packaging machines, not banknote banding machines. Flagged
  to the owner; they confirmed they use them for banding in practice
  and asked to keep the existing description as-is. No content change
  made.

## Images sourced but not yet in the repo

This sandbox's build environment can only reach package registries
(npm/pypi/GitHub), not general websites, so these could be identified
and verified but not downloaded automatically. Exact source + target
filename for each, to drop into `public/images/products/`:

| Model                                                           | Source image                                                                                   | Save as                 |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| Ladypack Klok 550                                               | https://www.pactur.com/wp-content/uploads/2023/10/KLOK550-1.png                                | `ladypack-klok550.png`  |
| Ladypack Table Top (= Pactur "Klok 35 Table Top")               | https://www.pactur.com/wp-content/uploads/2024/05/Klok-35-e1744024735936.jpg                   | `ladypack-tabletop.jpg` |
| Akebono OB-560                                                  | https://strapack.com/wp-content/uploads/2022/03/OB560-edited-scaled-e1650652660163.jpg         | `akebono-ob560.jpg`     |
| Akebono OB-460                                                  | — owner sourcing directly from the company (new product)                                       | `akebono-ob460.jpg`     |
| FM5540 (Dofeng/"DF" trademark)                                  | https://image.made-in-china.com/2f0j00OuICpKNPljre/Shrink-Wrapping-Machine-FM5540-.jpg         | `fm5540.jpg`            |
| DFM5540 (same model name, different reseller — Zhejiang Dingye) | https://image.made-in-china.com/2f0j00OfmUbKVECCkt/2-in-1-Shrink-Packaging-Machine-DFM5540.jpg | `dfm5540.jpg`           |

Once those files exist at those paths, flip each model's `images: null`

- `placeholderPath` to `images: ["/images/products/<file>"]` in
  `products.astro` to make it show and become zoomable — same pattern as
  the flagship model above.

## Not changed

`about.astro`, `contact.astro`, `services.astro`, `downloads.astro`,
`Header.astro`, `Footer.astro`, `BaseLayout.astro`, `global.css` —
untouched.
