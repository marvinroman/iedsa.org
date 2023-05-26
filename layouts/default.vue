<template>
  <v-app id="inspire" v-resize="resize">
    <TheHeader :title="title" />
    <v-main app>
      <slot />
    </v-main>
    <TheFooter :title="title" />
  </v-app>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  setup() {
    const { lgAndUp, mdAndUp } = useDisplay()
    const config = useAppConfig()
    return { lgAndUp, mdAndUp, config }
  },
  data: () => ({
    title: null,
    sizes: {},
  }),
  mounted() {
    // eslint-disable-next-line no-console
    this.resize()
  },
  methods: {
    resize() {
      this.title = this.config.short_title
      if (this.lgAndUp) {
        this.title = this.config.long_title
      } else if (this.mdAndUp) {
        this.title = this.config.medium_title
      }
    },
  },
}
</script>
