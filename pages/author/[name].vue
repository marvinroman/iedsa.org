<template>
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
</template>

<script setup>
const {
  params: { name },
} = useRoute()

const authorsQuery = await queryContent().only(['author']).find()
const mappedAuthors = authorsQuery
  .map((author) => author.author)
  .filter((author) => Boolean(author))
const uniqueAuthors = new Set(mappedAuthors)
const allAuthors = [...uniqueAuthors].sort()

// eslint-disable-next-line no-console
console.debug({ uniqueAuthors })

const articles = await queryContent('article')
  .where({ author: name })
  .sort({ date: 1 })
  .find()
</script>