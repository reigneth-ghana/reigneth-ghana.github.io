# Phase 10, Task 3 follow-up — footer link contrast fix

## Why

The Phase 10 WCAG AA audit (background/header re-tint) found one
pre-existing, unrelated failure while checking every foreground/
background pair on the site: the "Get in touch →" link in the
footer's Coverage column rendered `--color-brand-red` on
`--color-ink`, which is only 1.96:1 — well under the 4.5:1 AA
threshold for normal text. Neither color was touched by Phase 10, so
it wasn't a regression, but it needed its own fix before moving on
to Task 4.

## What changed

- **`src/components/Footer.astro`** — `.site-footer__zones a` color
  changed from `var(--color-brand-red)` to `#e05c5c`, a lightened red
  scoped to this dark footer background only (~5:1 contrast on
  `--color-ink`). The hover state moved from `#c9422e` (~3.5:1, also
  failing) to `#eb7a7a` (~6.3:1) so hovering doesn't drop back below
  AA. `--color-brand-red` itself is unchanged and still used
  everywhere else it sits on light backgrounds.

## Not changed

`--color-brand-red` and every other design token in
`src/styles/global.css`, `about.astro`, `contact.astro`,
`services.astro`, `products.astro`, `index.astro`, `Header.astro`,
`BaseLayout.astro`, all `public/images/*` and `public/docs/*` —
untouched. `docs/` (the built output) isn't included in this
drag-and-drop update — GitHub Actions rebuilds it automatically on
push.
