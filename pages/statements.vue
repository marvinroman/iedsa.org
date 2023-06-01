<template>
  <NuxtLayout>
    <v-container>
      <v-row>
        <ContentList v-slot="{ list }" path="/statement">
          <StatementList
            v-for="statement in list"
            :key="statement.id"
            :statement="statement"
          />
        </ContentList>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
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
