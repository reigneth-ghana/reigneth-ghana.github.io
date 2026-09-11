# Phase 11, Task 1 — Mobile UX audit

## Why

Task 1 of Phase 11 (Mobile UX pass): audit the current mobile
experience end-to-end before touching any layout code — nav, hero,
product grids, tables/specs, forms, tap targets, and image scaling —
so Tasks 2–4 fix real, specific issues instead of guessing.

## What changed

- **`ROADMAP.md`** — Task 1 checked off with the full findings written
  in as sub-bullets (same style as the Phase 10 verification notes),
  and Task 2's checklist line expanded with a priority order for the
  fixes based on what the audit actually found.
- No page, component, or style files touched this update — audit only,
  no code changes yet.

## Method

No physical device or emulator is available in this build environment
(same constraint noted back in Phase 4/5 for cross-browser testing),
so this was a code-level audit: read every page (`index`, `products`,
`services`, `about`, `contact`, `downloads`), `Header.astro`,
`Footer.astro`, `BaseLayout.astro`, and `global.css`, and worked out
actual rendered sizes (padding + line-height + border math for tap
targets, grid column steps against real phone widths — 320/360/375/
390/414/430px — for layout).

## Findings summary

- **Tap targets** — the main gap. Four controls compute under (or
  right at) the 44×44px minimum: the header hamburger button (40×40px),
  both lightbox nav buttons and the lightbox close button (40px/36px),
  the contact form's inputs/select/textarea (borderline), and the
  footer nav links (no block padding, ~30px effective target). Full
  detail and exact values are in `ROADMAP.md`.
- **Text sizing** — no responsive type scale exists; `h1`/`h2` use
  fixed 48px/36px at every viewport width. Likely the main source of
  anything that reads as "cramped" on a phone.
- **Nav, hero, tables/specs, forms (layout), image scaling** — all
  checked out with no issues found; existing Phase 4 responsive work
  holds up.
- **One inconsistency** — `.model-card img` (multi-model product grid)
  stays a fixed 128px tall at every breakpoint while the nearby
  `.product img` grows to 160px under 720px, so photos look
  comparatively small once the model grid stacks to 1 column on a
  phone.
- **One item flagged for the Task 4 device spot-check rather than
  fixed blind** — the lightbox close button's negative top offset can
  land outside the visible viewport on a short screen (phone in
  landscape, or with browser chrome visible).

## Not changed

All page files, components, and `global.css` — untouched this update;
this was audit-only. `docs/` (the built output) isn't included in this
drag-and-drop update — GitHub Actions rebuilds it automatically on
push.

## Next

Task 2: fix the issues above, in the priority order now listed in
`ROADMAP.md` — tap targets first, then the responsive type scale, then
the `.model-card img` height inconsistency.
