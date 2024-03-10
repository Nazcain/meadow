import { defineConfig } from "astro/config"

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
      langs: [],
      wrap: true,
      transformers: [],
    },
  },
  output: "hybrid",
  adapter: netlify(),
})
