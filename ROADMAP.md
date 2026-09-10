# Roadmap

Tracking the build-out of the Reigneth Company Limited website,
phase by phase. Each phase is delivered as a drag-and-drop zip update.

## Phase 0 — Repo & foundation ✅ (this update)

- [x] GitHub org confirmed: `reigneth-ghana`
- [x] Stack confirmed: Astro (Node), static output
- [x] Astro project scaffolded, builds clean (`npm run build`)
- [x] Base layout (`src/layouts/BaseLayout.astro`) and global styles wired up
- [x] Folder structure in place (`src/pages`, `src/layouts`, `src/components`, `src/styles`, `public/images`, `public/docs`)
- [x] Brand assets copied in (logo, initial product photos)

## Phase 1 — Brand & design system

- [ ] Color palette locked in (from the RCL logo: deep red/maroon + black/white)
- [ ] Typography chosen (headline + body)
- [ ] Design tokens finalized in `src/styles/global.css` (replacing current placeholders)
- [ ] Shared header/nav and footer components

## Phase 2 — Core pages

- [ ] Home — hero, what Reigneth does, why choose them, quick links to services
- [ ] Services — Shrink Wrap Machines, Bank Note Banding Machines, Coin Counting Machines
      (content sourced from the service profile document)
- [ ] About / Team — leadership (CEO, MD, COO, Director of Finance) and technicians
      (Southern Zone / Northern Zone), nationwide coverage messaging
- [ ] Contact — contact details / form (need: phone, email, physical address, social links)

## Phase 3 — Downloads / Resources

- [ ] Decide which materials go public (e.g. service profile PDF, spec sheets)
- [ ] Downloads page with a simple card/list layout
- [ ] Confirm file hosting approach (in-repo `public/docs` vs. external)

## Phase 4 — Polish & QA

- [ ] Mobile/responsive pass
- [ ] Accessibility pass (contrast, focus states, alt text)
- [ ] SEO basics: meta tags, favicon, Open Graph image, sitemap
- [ ] Cross-browser check

## Phase 5 — Deployment

- [ ] GitHub Actions workflow: build with Astro, deploy to GitHub Pages
- [ ] Custom domain (if/when available) pointed at Pages
- [ ] Final smoke test on live URL

---

### Open questions to resolve as we go

- Contact details for the Contact page
- Whether the service profile PDF (and any other docs) should be public
- Any additional product photos/logo variants beyond what's been uploaded so far
