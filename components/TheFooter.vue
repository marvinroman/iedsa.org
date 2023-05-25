<template>
  <v-footer app elevation="2" class="d-flex flex-column">
    <div class="d-block w-100 text-center">
      <v-btn
        v-for="(social, index) in socials"
        :key="index"
        :href="social.link"
        class="mx-4"
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
      <strong>{{ $config.organization.long_name }}</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  components: {},
  data: () => ({
    socials: [
      {
        link: 'https://www.facebook.com/InlandEmpireDSA',
        icon: 'mdi-facebook',
      },
      { link: 'https://twitter.com/InlandEmpireDSA', icon: 'mdi-twitter' },
      {
        link: 'https://www.instagram.com/InlandEmpireDSA',
        icon: 'mdi-instagram',
      },
      { link: 'https://twitch.tv/inlandempiredsa', icon: 'mdi-twitch' },
      { link: 'mailto:inlanddsa@gmail.com', icon: 'mdi-email-outline' },
    ],
  }),
}
</script>
