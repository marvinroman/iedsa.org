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

<script>
export default {
  async setup() {
    const config = useAppConfig()

    const priorityStatements = await queryContent('statement')
      .where({ priority: { $gt: 0 } })
      .sort({ priority: 1, $numeric: true })
      .sort({ date: -1 })
      .find()

    const statements = await queryContent('statement')
      .where({ priority: { $not: { $gt: 0 } } })
      .sort({ date: -1 })
      .find()

    useHead({
      title: `Statements - ${config.short_title}`,
    })
    return { priorityStatements, statements }
  },
}
</script>

<style lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.v-badge__badge {
  font-size: 10px;
}
</style>
