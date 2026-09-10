# Reigneth Company Limited — Website

Official website source for **Reigneth Company Limited**, a Ghana-based
Cash-In-Transit (CIT) solutions provider, general merchant, and office
equipment supplier — specializing in shrink wrap machines, banknote
banding machines, and related maintenance services for banks and
businesses across Ghana.

## Stack

Plain HTML, CSS, and JavaScript — no build step. This keeps the site
easy to host on GitHub Pages and easy to hand-edit without tooling
overhead. (Open to revisiting this if the site's needs grow.)

## Project structure

```
reigneth-site/
├── index.html          # Home page (added in Phase 2)
├── services.html        # Services page (added in Phase 2)
├── about.html            # About / Team page (added in Phase 2)
├── contact.html          # Contact page (added in Phase 2)
├── downloads.html      # Public downloads page (added in Phase 3, if approved)
├── css/                       # Stylesheets
├── js/                          # Scripts
├── assets/
│   ├── images/
│   │   ├── logo/          # RCL brand logo
│   │   └── products/  # Equipment photos
│   └── docs/               # Publicly downloadable PDFs (Phase 3)
├── ROADMAP.md
└── README.md
```

## How updates work

This project is being built incrementally, phase by phase — see
`ROADMAP.md` for the current plan and progress. Each update will be
delivered as a zip you can drag-and-drop into this repo folder to
merge in the new/changed files.

## Local preview

No build step needed — just open `index.html` directly in a browser,
or serve the folder locally:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Planned: GitHub Pages, served from this repo (see ROADMAP.md, Phase 5).
