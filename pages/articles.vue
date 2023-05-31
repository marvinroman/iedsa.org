<template>
  <v-container>
    <v-row>
      <ArticleList
        v-for="article in priorityArticles"
        :key="article.id"
        :article="article"
      />
      <ArticleList
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </v-row>
  </v-container>
</template>

<script setup>
// query for all priority & active articles sort by priority first and then date both in DESC order
const priorityArticles = await queryContent('article')
  .where({ priority: { $gt: 0 } })
  .where({ draft: { $not: true } })
  .where({ published: true })
  .sort({ priority: -1, $numeric: true })
  .sort({ date: -1 })
  .find()

// query all non-priority articles and sort by date in DESC order
const articles = await queryContent('article')
  .where({ priority: { $not: { $gt: 0 } } })
  .where({ draft: { $not: true } })
  .where({ published: true })
  .sort({ date: -1 })
  .find()

// pull the app config to help set page title
const config = useAppConfig()

// dynamically set the page title
useHead({ title: `Articles - ${config.short_title}` })
</script>

<style scoped lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.v-badge__badge {
  font-size: 10px;
}
</style>
