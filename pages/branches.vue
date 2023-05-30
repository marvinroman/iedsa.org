<template>
  <v-container>
    <ContentDoc path="/branches" />
  </v-container>
</template>

<script setup>
const { path } = useRoute()
const page = queryContent().where({ _path: path })

useContentHead(page)
</script>
