<template>
  <v-col class="statements">
    <v-card class="elevation-6 fill-height" tile>
      <v-badge
        :model-value="statement.priority > 0"
        icon="mdi-star"
        color="primary"
        rounded="circle"
        offset-x="-8"
        floating
        location="right"
      >
        <NuxtLink :to="statement._path" class="text-decoration-none">
          <v-card-title class="ma-1 pa-0 ml-3">
            {{ statement.title }}
          </v-card-title>
        </NuxtLink>
      </v-badge>

      <v-card-text>
        <div class="text--primary">
          <div class="mb-1 tags">
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
          <div>
            {{ date.format(statement.date, 'normalDateWithWeekday') }}
          </div>
          <div class="content">{{ statement.excerpt }}</div>
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

<script>
import { useDate } from 'vuetify/labs/date'

export default {
  props: {
    statement: {
      type: Object,
      default: null,
    },
  },
  setup() {
    const date = useDate()

    return { date }
  },
}
</script>
