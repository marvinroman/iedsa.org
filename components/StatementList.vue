<template>
  <v-col class="statements">
    <v-card class="elevation-6 fill-height" tile>
      <NuxtLink :to="statement._path" class="text-decoration-none">
        <v-card-title class="ma-1 pa-0 ml-3">
          {{ statement.title }}
        </v-card-title>
      </NuxtLink>

      <v-card-text>
        <div class="text--primary">
          <v-slide-group show-arrows>
            <v-slide-group-item v-for="tag in statement.tags" :key="tag.id">
              <NuxtLink :to="'/tag/' + tag" class="text-decoration-none">
                <v-icon class="ml-2" color="secondary" small> mdi-tag </v-icon>
                {{ tag }}
              </NuxtLink>
            </v-slide-group-item>
          </v-slide-group>
          <div>
            {{ date.format(statement.date, 'normalDateWithWeekday') }}
          </div>
          <div
            v-if="typeof statement.excerpt === 'string'"
            class="content"
            v-html="statement.excerpt"
          ></div>
          <ContentRendererMarkdown
            v-if="typeof statement.excerpt === 'object'"
            :value="statement.excerpt"
            class="content"
          />
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <NuxtLink
          :to="statement._path"
          class="v-btn text-info v-btn--density-default v-btn--size-default v-btn--variant-text"
        >
          Read More
        </NuxtLink>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
// Using the `useDate` function to create a `date` reactive reference
import { useDate } from 'vuetify/labs/date'
const date = useDate()

defineProps({
  statement: {
    type: Object,
    default: null,
  },
})
</script>
