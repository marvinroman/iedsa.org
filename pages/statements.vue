<template>
  <v-container>
    <v-row>
      <StatementList
        v-for="statement in priorityStatements"
        :key="statement.id"
        :statement="statement"
      />
      <StatementList
        v-for="statement in statements"
        :key="statement.id"
        :statement="statement"
      />
    </v-row>
  </v-container>
</template>

<script setup>
// query for all priority & active statements sort by priority first and then date both in DESC order
const priorityStatements = await queryContent('statement')
  .where({ priority: { $gt: 0 } })
  .where({ draft: { $not: true } })
  .where({ published: true })
  .sort({ priority: 1, $numeric: true })
  .sort({ date: -1 })
  .find()

// query all non-priority statements and sort by date in DESC order
const statements = await queryContent('statement')
  .where({ priority: { $not: { $gt: 0 } } })
  .where({ draft: { $not: true } })
  .where({ published: true })
  .sort({ date: -1 })
  .find()

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
