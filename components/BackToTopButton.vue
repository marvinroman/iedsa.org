<template>
  <v-btn
    v-show="yScrolled > 800"
    icon="mdi-chevron-up"
    size="x-large"
    class="back-to-top gradient-border"
    flat
    border
    @click="toTop"
  >
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
