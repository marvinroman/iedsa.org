<template>
  <NuxtLayout>
    <v-container>
      <v-sheet class="my-4">
        <h3 class="my-2">Other Authors</h3>
        <v-chip v-for="author in allAuthors" :key="author.id" class="ml-2">
          <NuxtLink :to="'/author/' + author" class="text-decoration-none">
            {{ author }}
          </NuxtLink>
        </v-chip>
      </v-sheet>
      <v-sheet>
        <h2>
          Articles authored by:&nbsp;
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
    </v-container>
  </NuxtLayout>
</template>

<script setup>
// pull the name parameter from the url which will be '/author/:name'
const {
  params: { name },
} = useRoute()

// find all authors that are contained within the content
const authorsQuery = await queryContent()
  .only(['author'])
  .where({ draft: { $not: true } })
  .find()
// sort and return unique authors
const mappedAuthors = authorsQuery
  .map((author) => author.author)
  .filter((author) => Boolean(author))
const uniqueAuthors = new Set(mappedAuthors)
const allAuthors = [...uniqueAuthors].sort()

// find all articles tagged with the same article
const articles = await queryContent('article')
  .where({ author: name })
  .where({ draft: { $not: true } })
  .sort({ date: -1 })
  .find()

// pull the app config to help set page title
const config = useAppConfig()

// dynamically set the page title
useHead({ title: `Author - ${name} - ${config.short_title}` })
</script>
