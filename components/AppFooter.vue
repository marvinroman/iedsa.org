<template>
  <v-footer app elevation="2" class="d-block">
    <div class="d-block w-100 text-center">
      <v-btn
        v-for="(social, index) in socials"
        :key="index"
        v-ripple="{ class: 'text-primary' }"
        :href="social.link"
        class="mx-4 gradient-border"
        target="_blank"
        rel="noopener noreferrer"
        flat
        icon
        text
      >
        <v-icon size="24px">{{ social.icon }}</v-icon>
      </v-btn>
    </div>
    <v-divider></v-divider>
    <div class="d-block w-100 text-center py-1">
      <v-icon>mdi-copy-left</v-icon>&nbsp;{{ new Date().getFullYear() }} —
      <strong>{{ title }}</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    socials: {
      type: Array,
      default: null,
    },
  },
}
</script>
