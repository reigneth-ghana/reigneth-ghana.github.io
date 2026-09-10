// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  build: {
    // 3. FIX THE 404: Rename the asset folder from '_astro' to 'assets'
    // This stops GitHub Pages from blocking your files!
    assets: "assets",
  },
});
