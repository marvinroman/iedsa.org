<template>
  <v-container>
    <v-row>
      <ArticleList
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </v-row>
  </v-container>
</template>

<script>
export default {
  async setup() {
    const config = useAppConfig()

    const articles = await queryContent('article')
      .sort({ priority: 1, date: 1 })
      .find()

    useHead({
      title: `Articles - ${config.short_title}`,
    })
    return { articles }
  },
}
</script>

<style lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.v-badge__badge {
  font-size: 10px;
}
</style>
