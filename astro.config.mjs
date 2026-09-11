// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// NOTE: no custom domain is confirmed yet (see ROADMAP.md open questions).
// Using the planned GitHub Pages URL for the `reigneth-ghana` org for now,
// purely so sitemap.xml/canonical/OG tags have somewhere to point — update
// this the moment a real domain is live.
const SITE_URL = "https://reigneth-ghana.github.io";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  outDir: "./docs",
  build: {
    // 3. FIX THE 404: Rename the asset folder from '_astro' to 'assets'
    // This stops GitHub Pages from blocking your files!
    assets: "assets",
  },
});
