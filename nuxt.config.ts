// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  content: {
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
