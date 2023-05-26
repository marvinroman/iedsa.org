// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  modules: ['@nuxt/content'],

  publicRuntimeConfig: {
    organization: {
      long_name: 'Inland Empire Democratic Socialists of America',
      medium_name: 'Inland Empire Democratic Socialists',
      short_name: 'Inland Empire DSA',
    },
  },

  typescript: {
    shim: false,
  },
})
