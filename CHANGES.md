# Fix family spacing + reorder Ladypack models

## Why

The gap between the Ladypack and Adpak/Smipack sections (and between
every other family block on the page) had gone missing again.

## Root cause

`.family { margin-bottom: var(--space-5); }` — but `--space-5` was
never defined in the design tokens (`src/styles/global.css`'s scale
jumps `--space-4` &rarr; `--space-6`). An undefined custom property
makes the declaration invalid at computed-value time, so it falls
back to `margin-bottom`'s initial value of `0` — no visible error,
just silently no spacing. This is why the fix "keeps coming back":
the rule looks correct on read-through but references a token that
doesn't exist anywhere in the stylesheet.

## What changed

- **`src/pages/products.astro`**
  - `.family` margin-bottom changed from `var(--space-5)` (undefined
    &rarr; computes to 0) to `var(--space-6)` (3rem, an actual token) —
    restores spacing between every family block on the page (Ladypack,
    Adpak/Smipack, Akebono, Mabas, budget banding), not just
    Ladypack&rarr;Adpak.
  - Reordered the Ladypack `models` array into numeric groups: 45,
    45/A2, 45N, 65, 110, then Klok 550 and Table Top (no number to
    sort by, so listed last).

## Not changed

No specs were touched — 45/A2, 45N, Klok 550, and Table Top still
carry placeholder-level qualitative specs pending real numbers.

## Open items

- Real photos for 45/A2, 45N, Klok 550, Table Top (placeholders as
  before).
- Real specs for 45/A2, 45N, Klok 550, Table Top — send them over and
  they'll replace the placeholder bullet points.
