<template>
  <v-btn
    v-show="yScrolled > 800"
    icon
    size="x-large"
    class="back-to-top"
    color="primary"
    @click="toTop"
  >
    <v-icon size="x-large">mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      scrollTimeout: 0,
      yScrolled: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      if (this.scrollTimeout) return
      this.scrollTimeout = setTimeout(() => {
        this.yScrolled = window.scrollY
        clearTimeout(this.scrollTimeout)
        this.scrollTimeout = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
