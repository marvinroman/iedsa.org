<template>
  <v-container>
    <v-row>
      <ContentList path="/article">
        <template #default="{ list }">
          <ArticleList
            v-for="article in list"
            :key="article.id"
            :article="article"
          />
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
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
