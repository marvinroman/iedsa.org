<template>
  <v-container>
    <v-sheet class="my-4">
      <h3 class="my-2">Other Tags</h3>
      <v-chip v-for="tag in allTags" :key="tag.id" class="ml-2">
        <NuxtLink :to="'/tag/' + tag" class="text-decoration-none">
          {{ tag }}
        </NuxtLink>
      </v-chip>
    </v-sheet>
    <v-sheet>
      <h2 class="mb-4">
        Articles tagged with:&nbsp;
        <span class="text-capitalize">{{ name }}</span>
      </h2>
      <v-row>
        <ArticleList
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </v-row>
    </v-sheet>
    <v-divider class="my-6"></v-divider>
    <v-sheet>
      <h2 class="mb-4">
        Statements tagged with:&nbsp;
        <span class="text-capitalize">{{ name }}</span>
      </h2>
      <v-row>
        <StatementList
          v-for="statement in statements"
          :key="statement.id"
          :statement="statement"
        />
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup>
const {
  params: { name },
} = useRoute()

const tagsQuery = await queryContent().only(['tags']).find()
const mappedTags = tagsQuery
  .map((tag) => tag.tags)
  .filter((tag) => Boolean(tag))
const uniqueTags = new Set(mappedTags)
const allTags = [...uniqueTags].sort().pop()

const articles = await queryContent('article')
  .where({ tags: { $contains: name } })
  .where({ draft: { $not: true } })
  .sort({ date: -1 })
  .find()

const statements = await queryContent('statement')
  .where({ tags: { $contains: name } })
  .where({ draft: { $not: true } })
  .sort({ date: -1 })
  .find()

const config = useAppConfig()
useHead({
  title: `Tag - ${name} - ${config.short_title}`,
})
</script>
