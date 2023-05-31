<template>
  <v-container class="mt-0 pt-0 mx-auto">
    <v-container class="v-window__container mt-0 pt-0">
      <v-parallax
        v-if="article.image"
        :src="article.image"
        height="600"
        cover
      ></v-parallax>
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
    <v-sheet>
      <v-card class="ma-0 pa-0" flat>
        <v-card-title class="mt-4">
          <h1>
            {{ article.title }}
          </h1>
        </v-card-title>

        <v-card-subtitle class="mt-2">
          By:
          <NuxtLink
            :to="'/author/' + article.author"
            class="text-decoration-none"
          >
            {{ article.author }}
          </NuxtLink>
        </v-card-subtitle>

        <v-card-text>
          <div class="tags-container my-4">
            <v-chip
              v-for="tag in article.tags"
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
            Date: {{ date.format(article.date, 'fullDateWithWeekday') }}
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>

    <v-row no-gutters>
      <v-col cols="9">
        <v-sheet class="post-body">
          <ContentRenderer
            :value="article"
            class="bg-grey-lighten-3 py-8 px-4"
          />
        </v-sheet>
      </v-col>
      <v-col v-if="showTableOfContents" cols="3" class="d-none d-md-flex">
        <v-sheet class="table-of-contents pa-4">
          <h2>Contents</h2>
          <ul>
            <li v-for="link in article.body.toc.links" :key="link.text">
              <a :href="`#${link.id}`">
                {{ link.text }}
              </a>
              <ul v-if="link.children">
                <li v-for="sublink in link.children" :key="sublink.text">
                  <a :href="`#${sublink.id}`" class="pl-3">
                    {{ sublink.text }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDate } from 'vuetify/labs/date'
const date = useDate()
const { path } = useRoute()
const article = await queryContent()
  .where({
    _path: path.replace(/\/$/, ''),
  })
  .findOne()

useContentHead(article)

const [prev, next] = await queryContent('article')
  .only(['_path', 'title'])
  .where({ draft: { $not: true } })
  .where({ published: true })
  .sort({ date: -1 })
  .findSurround(path.replace(/\/$/, ''))

const showTableOfContents =
  article.body.toc && article.body.toc.links.length > 0
</script>
