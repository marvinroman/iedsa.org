// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  content: {
    markdown: {
      mdc: true,
      toc: { depth: 4, searchDepth: 4 },
      highlight: {
        theme: {
          // Default theme (same as single string)
          default: 'github-light',
          // Theme used if `html.dark`
          dark: 'github-dark',
          // Theme used if `html.sepia`
          sepia: 'monokai',
        },
      },
    },
    // https://content.nuxtjs.org/api/configuration
  },

  modules: ['@nuxt/content'],

  runtimeConfig: {
    public: {},
  },

  typescript: {
    shim: false,
  },
})
