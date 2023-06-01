<template>
  <v-app id="inspire" v-resize="resize">
    <AppHeader :title="title" :menu="config.menu" />
    <v-main app>
      <v-container
        :fluid="Boolean(fluid)"
        :class="Boolean(fluid) ? 'pa-0 ma-0' : ''"
      >
        <slot />
        <BackToTopButton />
      </v-container>
    </v-main>
    <AppFooter :title="title" :socials="config.socials" />
  </v-app>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  props: {
    fluid: {
      type: [String, Boolean],
      default: false,
    },
  },
  setup() {
    const config = useAppConfig()
    const { lgAndUp, xlAndUp } = useDisplay()
    return { config, lgAndUp, xlAndUp }
  },
  data: () => ({
    title: null,
  }),
  watch: {
    lgAndUp() {
      this.resize()
    },
    xlAndUp() {
      this.resize()
    },
  },
  mounted() {
    this.resize()
  },
  methods: {
    resize() {
      this.title = this.config.short_title
      if (this.xlAndUp) {
        this.title = this.config.long_title
      } else if (this.lgAndUp) {
        this.title = this.config.medium_title
      }
    },
  },
}
</script>
