<template>
  <v-container>
    <v-row>
      <ContentList :query="query">
        <template #default="{ list }">
          <StatementList
            v-for="statement in list"
            :key="statement.id"
            :statement="statement"
          />
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
  path: '/statement',
  where: [{ draft: { $not: true } }],
  sort: [{ date: -1 }],
}

// pull the app config to help set page title
const config = useAppConfig()

// dynamically set the page title
useHead({ title: `Statements - ${config.short_title}` })
</script>

<style lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.v-badge__badge {
  font-size: 10px;
}
</style>
