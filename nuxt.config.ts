// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  // nitro: {
  //   preset: 'service-worker',
  // },
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

    documentDriven: {
      // Will fetch navigation, page and surround.
      navigation: true,
      page: true,
      surround: true,
      // Will fetch `content/_theme.yml` and put it in `globals.theme` if present.
      // globals: {
      //   theme: {
      //     where: {
      //       _id: 'content:_theme.yml',
      //     },
      //     without: ['_'],
      //   },
      // },
      // Will use `theme` global to search for a fallback `layout` key.
      // layoutFallbacks: ['theme'],
      // Will inject `[...slug].vue` as the root page.
      injectPage: true,
    },
  },

  modules: ['@nuxt/content'],

  runtimeConfig: {
    public: {},
  },

  typescript: {
    shim: false,
  },
})
