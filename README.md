# Reigneth Company Limited — Website

Official website source for **Reigneth Company Limited**, a Ghana-based
Cash-In-Transit (CIT) solutions provider, general merchant, and office
equipment supplier — specializing in shrink wrap machines, banknote
banding machines, and related maintenance services for banks and
businesses across Ghana.

GitHub org: [`reigneth-ghana`](https://github.com/reigneth-ghana)

## Stack

[Astro](https://astro.build) — static output, no client-side framework
needed for a marketing/company site like this. Keeps builds fast and
hosting simple (GitHub Pages).

## Getting started

```
npm install
npm run dev
```

Visit `http://localhost:4321`.

To build the production site:

```
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
reigneth-site/
├── src/
│   ├── pages/            # Routes — one .astro file per page
│   ├── layouts/          # Shared page layout(s)
│   ├── components/       # Reusable UI pieces (added as pages are built)
│   └── styles/           # Global styles / design tokens
├── public/
│   ├── images/
│   │   ├── logo/         # RCL brand logo
│   │   └── products/     # Equipment photos
│   └── docs/             # Publicly downloadable PDFs (Phase 3, if approved)
├── astro.config.mjs
├── ROADMAP.md
└── README.md
```

## How updates work

This project is being built incrementally, phase by phase — see
`ROADMAP.md` for the current plan and progress. Each update is
delivered as a zip; unzip and merge its contents into this project
folder (dependencies and build output are excluded from the zip —
run `npm install` after merging if `package.json` changed).

## Deployment

Planned: GitHub Pages via a GitHub Actions workflow that runs
`astro build` and publishes `dist/` (see ROADMAP.md, Phase 5).
