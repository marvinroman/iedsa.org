<template>
  <ContentDoc>
    <template #default="{ doc }">
      <v-container>
        <v-container class="v-window__container mt-0 pt-0">
          <v-img v-if="doc.image" :src="doc.image" height="600"></v-img>
          <div class="v-window__controls">
            <NuxtLink
              v-if="prev"
              :to="prev._path"
              class="prev-btn v-btn v-btn--flat v-btn--icon v-theme--light v-btn--density-default v-btn--size-x-larg v-btn--variant-elevated mx-4 gradient-border"
            >
              <v-tooltip activator="parent" location="end" color="primary">
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
          <h1 class="mt-4">{{ doc.title }}</h1>
          <div class="mt-2">
            By:
            <NuxtLink
              :to="'/author/' + doc.author"
              class="text-decoration-none"
            >
              {{ doc.author }}
            </NuxtLink>
          </div>

          <div class="tags-container my-4">
            <v-chip v-for="tag in doc.tags" :key="tag.id" outlined class="mr-2">
              <NuxtLink :to="'/tag/' + tag" class="text-decoration-none">
                <v-icon class="ml-2" color="secondary" small> mdi-tag </v-icon>
                {{ tag }}
              </NuxtLink>
            </v-chip>
          </div>

          <div class="px-xs-5 my-1">
            Date: {{ date.format(doc.date, 'fullDateWithWeekday') }}
          </div>
        </v-sheet>

        <v-row no-gutters>
          <v-col cols="12" :md="doc?.body?.toc?.links?.length > 0 ? 9 : 12">
            <v-sheet class="post-body">
              <ContentRenderer
                :value="doc"
                class="bg-grey-lighten-3 py-8 px-4"
              />
            </v-sheet>
          </v-col>
          <v-col
            v-if="doc?.body?.toc?.links?.length > 0"
            cols="3"
            class="d-none d-md-flex"
          >
            <v-sheet class="table-of-contents pa-4">
              <h2>Contents</h2>
              <ul>
                <li v-for="link in doc.body.toc.links" :key="link.text">
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
    <template #not-found>
      <NotFound path="/articles" button-label="Return to Articles" />
    </template>
  </ContentDoc>
</template>

<script setup lang="ts">
// Using the `useDate` function to create a `date` reactive reference
import { useDate } from 'vuetify/labs/date'
const date = useDate()
const { path } = useRoute()

const [prev, next] = await queryContent('article')
  .only(['_path', 'title'])
  .sort({ date: -1 })
  .where({ draft: false })
  .findSurround(path.replace(/\/$/, ''))
</script>
