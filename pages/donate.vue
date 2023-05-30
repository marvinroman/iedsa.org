<template>
  <v-container class="my-6">
    <ContentDoc path="/donate" />
  </v-container>
</template>

<script setup>
const { path } = useRoute()
const page = queryContent().where({ _path: path })

useContentHead(page)
</script>
