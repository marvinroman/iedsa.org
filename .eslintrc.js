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
  ignorePatterns: ['/.output/**', '/dist/**'],
  rules: {
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/multi-word-component-names': 'off',
  },
}
