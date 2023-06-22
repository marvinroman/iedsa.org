import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '~/assets/css/main.scss'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 4,
        darken: 4,
      },
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#EC1F27',
            secondary: '#F04C53', // "#424242"
            accent: '#FBD2D4', // "#82B1FF"
            error: '#a0050b', // "#FF5252"
            info: '#0d6aa0', // "#2196F3"
            success: '#00a02a', // "#4CAF50"
            warning: '#efeb37', // "#FFC107"
            anchor: '#0678b9',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#EC1F27',
            secondary: '#F04C53', // "#424242"
            accent: '#3C3434', // "#82B1FF"
            error: '#a0050b', // "#FF5252"
            info: '#0d6aa0', // "#2196F3"
            success: '#00a02a', // "#4CAF50"
            warning: '#efeb37', // "#FFC107"
            anchor: '#0678b9',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
