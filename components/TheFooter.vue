<template>
  <v-footer elevation="4">
    <v-card
      flat
      class="white--text text-center align-self-md-stretch"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="(social, index) in socials"
          :key="index"
          :href="social.link"
          class="mx-4 white--text"
          target="_blank"
          rel="noopener noreferrer"
          icon
          link
        >
          <v-icon size="24px">{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <v-icon>mdi-copy-left</v-icon>&nbsp;{{ new Date().getFullYear() }} —
        <strong>{{ $config.organization.long_name }}</strong>
      </v-card-text>
    </v-card>
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
