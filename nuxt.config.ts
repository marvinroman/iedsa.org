// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    shim: false,
  },

  publicRuntimeConfig: {
    organization: {
      long_name: 'Inland Empire Democratic Socialists of America',
      medium_name: 'Inland Empire Democratic Socialists',
      short_name: 'Inland Empire DSA',
    },
  },
})
