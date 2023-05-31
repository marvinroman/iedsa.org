<template>
  <v-container class="mt-0 pt-0 mx-auto">
    <v-container class="v-window__container mt-2">
      <div class="v-window__controls">
        <NuxtLink
          v-if="prev"
          :to="prev._path"
          class="prev-btn v-btn v-btn--flat v-btn--icon v-theme--light v-btn--density-default v-btn--size-x-larg v-btn--variant-elevated mx-4 gradient-border"
        >
          <v-tooltip activator="parent" location="end">
            {{ prev.title }}
          </v-tooltip>
          <v-icon size="x-large">mdi-chevron-left</v-icon>
        </NuxtLink>
        <div v-else></div>
        <NuxtLink
          v-if="next"
          :to="next._path"
          class="next-btn v-btn v-btn--flat v-btn--icon v-theme--light v-btn--density-default v-btn--size-x-larg v-btn--variant-elevated mx-4 gradient-border"
        >
          <v-tooltip activator="parent" location="start">
            {{ next.title }}
          </v-tooltip>
          <v-icon size="x-large">mdi-chevron-right</v-icon>
        </NuxtLink>
        <div v-else></div>
      </div>
    </v-container>
    <v-card class="ma-0 pa-0" flat>
      <v-card-title class="mt-4">
        <h1>
          {{ statement.title }}
        </h1>
      </v-card-title>

      <v-card-text>
        <div class="tags-container my-4">
          <v-chip
            v-for="tag in statement.tags"
            :key="tag.id"
            outlined
            class="mr-2"
          >
            <NuxtLink :to="'/tag/' + tag" class="text-decoration-none">
              <v-icon class="ml-2" color="secondary" small> mdi-tag </v-icon>
              {{ tag }}
            </NuxtLink>
          </v-chip>
        </div>

        <div class="px-xs-5 my-1">
          Date: {{ date.format(statement.date, 'fullDateWithWeekday') }}
        </div>
      </v-card-text>
    </v-card>
    <v-sheet class="pa-8 bg-grey-lighten-5 post-body">
      <ContentRenderer :value="statement" />
    </v-sheet>
  </v-container>
</template>

<script setup>
import { useDate } from 'vuetify/labs/date'

// Using the `useDate` function to create a `date` reactive reference
const date = useDate()

// Getting the path from the current route
const { path } = useRoute()

// Getting the content for the current markdown content from the path
const statement = await queryContent()
  .where({
    _path: path.replace(/\/$/, ''), // important for when it's a static site on GitHub it will add a trailing slash for the directory which will change the query
  })
  .findOne()

// Applying the frontmatter from the markdown file to the meta head
useContentHead(statement)

// Querying the content for previous and next statements around the current statement
const [prev, next] = await queryContent('statement')
  .only(['_path', 'title'])
  .where({ draft: { $not: true } })
  .where({ published: true })
  .sort({ date: -1 })
  .findSurround(path.replace(/\/$/, '')) // important for when it's a static site on GitHub it will add a trailing slash for the directory which will change the query
</script>

<style scoped lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.v-container.v-window__container {
  min-height: 3rem;
}
</style>
