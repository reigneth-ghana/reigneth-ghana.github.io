# Click-to-zoom product photos

## Why

Requested click-to-zoom on product images, with room for multiple
photos per model going forward.

## Approach

No framework/dependency added — this is a small vanilla-JS lightbox
built directly into `products.astro` (TypeScript in the `<script>`
tag, stripped at build time same as everywhere else in the project).
Kept it self-contained to this one page rather than pulling in a
library, since Astro ships zero JS by default and this only needs
~40 lines of logic.

Data model change: every model's `img: "path" | null` became
`images: string[] | null` — an array instead of a single path.
Existing single-photo models just became a one-item array
(`images: ["/images/products/ladypack-45.jpg"]`); nothing visually
changes for them today, but adding a second photo later is just
appending to that array — no other markup changes needed. Models with
no photo yet keep `images: null` + `placeholderPath`, same as before,
and aren't clickable (nothing to zoom into).

## What changed

- **`src/pages/products.astro`**
  - Data: `img` &rarr; `images: []` across `shrinkWrapFamilies`,
    `akebonoModels`, `mabasModel`; `budgetBandingModels` renamed
    `img: null` &rarr; `images: null` for consistency (still
    placeholder-only, no photos yet).
  - Every photographed product (Ladypack &times; 3, Adpak/Smipack
    &times; 3, Akebono OB-360, Mabas SBM-90, Coin 100/120 &mdash; 9
    total) now renders as a `<button>` wrapping the image with a
    small zoom-icon badge in the corner, `cursor: zoom-in`, instead
    of a plain `<img>`.
  - Added a single lightbox overlay (`#lightbox`) once near the end
    of the page: full photo, close button, prev/next arrows (only
    shown when a model has more than one photo), and a counter
    ("1 / 3") plus the model name.
  - Added the vanilla-JS lightbox logic in a `<script>` tag: click
    any photo to open it, click the backdrop/&times;/Escape to close,
    prev/next buttons or Left/Right arrow keys to page through a
    model's photos when it has more than one.
  - New CSS: `.model-card__photo`, `.product__photo`, `.zoom-badge`,
    and the `.lightbox*` rules, plus a small mobile tweak so the
    prev/next arrows sit inside the viewport instead of off-screen.

## Not changed

Placeholder ("Photo coming soon") cards aren't clickable — nothing
to zoom into yet. `about.astro`, `contact.astro`, `services.astro`,
`downloads.astro`, `index.astro` — untouched.

## Adding more photos to a model later

Just extend that model's `images` array, e.g.:

```js
images: [
  "/images/products/ladypack-45.jpg",
  "/images/products/ladypack-45-side.jpg",
],
```

The prev/next arrows and counter appear automatically once a model
has more than one image — no template changes needed.
