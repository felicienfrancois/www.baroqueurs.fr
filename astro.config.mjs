// @ts-check
import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  site: "https://www.baroqueurs.fr",
  devToolbar: { enabled: false },
  markdown: {
    gfm: true,
    remarkPlugins: [
      remarkGfm,
      remarkBreaks,
    ],
  },
});
