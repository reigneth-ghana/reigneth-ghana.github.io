# Phase 3 — Downloads / Resources

## Root cause / starting point

Phase 2 shipped Home, Services, About, and Contact, but the service profile
PDF wasn't linked anywhere, and there was no place on the site to host
spec sheets or other reference documents.

## Decision on the service profile PDF

The uploaded `REIGNETH_SERVICE_PROF__.pdf` includes internal info (team
names, titles) alongside equipment descriptions. Rather than publish it
as-is, a public-only equipment spec sheet was generated from the equipment
sections (Ladypack, Adpak/Smipack SL, Akebono OB-360, Mabas SBM-90,
Coin 100/120, shrink films) with the team/leadership content left out. The
full document can be published later if wanted.

## Changed / added files

- `src/pages/downloads.astro` — new. Card/list layout for downloadable
  resources, data-driven (`downloads` array) so more items/categories can
  be appended as they're ready.
- `public/docs/reigneth-equipment-spec-sheet.pdf` — new. Brand-styled
  equipment spec sheet (public-safe subset of the service profile content).
- `src/components/Header.astro` — added "Downloads" to primary nav.
- `src/components/Footer.astro` — added a "Resources" column linking to
  Downloads; grid adjusted from 4 to 5 columns with an extra responsive
  breakpoint.

## Open items carried to later phases

- Full service profile PDF (with team/company info) — not yet public;
  revisit if/when it should be.
- More Downloads categories as they're built out: banding machine parts,
  coin counters, scanners.
- Real contact details still placeholders on `contact.astro` (carried over
  from Phase 2).
