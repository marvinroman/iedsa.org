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
          {{ article.title }}
        </h1>
      </v-card-title>

      <v-card-text>
        <div class="tags-container my-4">
          <v-chip
            v-for="tag in article.tags"
            :key="tag.id"
            outlined
            class="mr-2"
          >
            <NuxtLink :to="'/tag/' + tag" class="text-decoration-none">
              <v-icon class="ml-2" color="accent" small> mdi-tag </v-icon>
              {{ tag }}
            </NuxtLink>
          </v-chip>
        </div>

        <div class="px-xs-5 my-1">
          Date: {{ date.format(article.date, 'fullDateWithWeekday') }}
        </div>
      </v-card-text>
    </v-card>
    <v-divider></v-divider>

    <v-sheet class="pa-8 bg-grey-lighten-5">
      <ContentRenderer :value="article" />
    </v-sheet>
  </v-container>
</template>

<script setup>
import { useDate } from 'vuetify/labs/date'
const date = useDate()
const { path } = useRoute()
const article = await queryContent('statement')
  .where({
    _path: path,
  })
  .findOne()

useContentHead(article)

const [prev, next] = await queryContent('statement')
  .only(['_path', 'title'])
  .sort({ date: 1 })
  .findSurround(path)
</script>

<style scoped lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.v-container.v-window__container {
  min-height: 3rem;
}
</style>
