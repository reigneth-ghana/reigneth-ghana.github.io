// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Custom domain confirmed and connected (see public/CNAME + ROADMAP.md).
const SITE_URL = "https://reigneth.org";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  outDir: "./docs",
  build: {
    // Rename the asset folder from the default '_astro' to 'assets' —
    // GitHub Pages' Jekyll processing ignores underscore-prefixed folders,
    // which otherwise 404s every JS/CSS asset. (public/.nojekyll also
    // disables Jekyll processing entirely, belt-and-braces.)
    assets: "assets",
  },
});
