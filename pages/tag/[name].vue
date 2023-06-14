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
    <v-sheet v-if="articles.length > 0">
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
    <v-divider
      v-if="statements.length > 0 && articles.length > 0"
      class="my-6"
    ></v-divider>
    <v-sheet v-if="statements.length > 0">
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
// pull the name parameter from the url which will be '/tag/:name'
const {
  params: { name },
} = useRoute()

// find all tags that are contained within the content
const tagsQuery = await queryContent()
  .only(['tags'])
  .where({ tags: { $exists: true } })
  .where({ draft: { $not: true } })
  .find()

// sort and return unique tags
const mappedTags = tagsQuery
  .map((tag) => tag.tags)
  .filter((tag) => Boolean(tag))
const allTags = [...new Set(mappedTags.flat())].sort()

// find all articles tagged with the same tag
const articles = await queryContent('article')
  .where({ tags: { $contains: name } })
  .where({ draft: { $not: true } })
  .sort({ date: -1 })
  .find()

// find all statements tagged with the same tag
const statements = await queryContent('statement')
  .where({ tags: { $contains: name } })
  .where({ draft: { $not: true } })
  .sort({ date: -1 })
  .find()

// pull the app config to help set page title
const config = useAppConfig()

// dynamically set the page title
useHead({ title: `Tag - ${name} - ${config.short_title}` })
</script>
