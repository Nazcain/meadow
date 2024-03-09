import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "github-light",
      // Alternatively, provide multiple themes
      // https://shiki.style/guide/dual-themes#light-dark-dual-themes
      // experimentalThemes: {
      // light: "github-light",
      // dark: "github-dark",
      // },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
})
