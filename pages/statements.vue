<template>
  <v-container>
    <v-row>
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

    const statements = await queryContent('statement')
      .sort({ priority: 1, date: 1 })
      .find()

    useHead({
      title: `Statements - ${config.short_title}`,
    })
    return { statements }
  },
}
</script>

<style lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.v-badge__badge {
  font-size: 10px;
}
</style>
