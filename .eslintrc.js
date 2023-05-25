module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [],
  rules: {
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-for-template-key-on-child': 'error',
  },
}
