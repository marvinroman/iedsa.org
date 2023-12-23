<template>
  <v-col class="articles">
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="elevation-6 fill-height" tile v-bind="props">
        <v-img
          height="200px"
          lazy-src="https://dummyimage.com/640x360/fff/aaa"
          :src="article.image"
          cover
        >
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-block transition-fast-in-fast-out bg-primary v-card--reveal text-h2 pt-14 mx-auto text-center"
              style="height: 100%"
            >
              <NuxtLink
                :to="article._path"
                class="text-white text-decoration-none"
                >Read More</NuxtLink
              >
            </div>
          </v-expand-transition>
        </v-img>
        <NuxtLink :to="article._path" class="text-decoration-none">
          <v-card-title class="ma-1 pa-0 ml-3">
            {{ article.title }}
          </v-card-title>
        </NuxtLink>

        <v-card-subtitle>
          {{ article.author }}&nbsp;
          <v-icon x-small>mdi-typewriter</v-icon>
        </v-card-subtitle>

        <v-card-text>
          <div class="text--primary">
            <v-slide-group show-arrows>
              <v-slide-group-item v-for="tag in article.tags" :key="tag.id">
                <NuxtLink :to="'/tag/' + tag" class="text-decoration-none">
                  <v-icon class="ml-2" color="secondary" small>
                    mdi-tag
                  </v-icon>
                  {{ tag }}
                </NuxtLink>
              </v-slide-group-item>
            </v-slide-group>
            <div v-if="article.date">
              {{ date.format(article.date, 'normalDateWithWeekday') }}
            </div>
            <div
              v-if="typeof article.excerpt === 'string'"
              class="content"
              v-html="article.excerpt"
            ></div>
            <ContentRenderer
              v-if="typeof article.excerpt === 'object'"
              :value="article.excerpt"
            >
              <ContentRendererMarkdown
                class="content"
                :value="article.excerpt"
              />
            </ContentRenderer>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <NuxtLink
            :to="article._path"
            class="v-btn text-info v-btn--density-default v-btn--size-default v-btn--variant-text"
            >Read More</NuxtLink
          >
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script setup>
// Using the `useDate` function to create a `date` reactive reference
import { useDate } from 'vuetify/labs/date'
const date = useDate()

defineProps({
  article: {
    type: Object,
    default: null,
  },
})
</script>
