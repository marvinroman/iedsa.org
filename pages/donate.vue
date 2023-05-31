<template>
  <v-container class="my-6">
    <ContentDoc path="/donate" />
  </v-container>
</template>

<script setup>
// get current page path
const { path } = useRoute()

// return page content for path
const page = queryContent().where({ _path: path }).findOne()

// use content to create set head
useContentHead(page)
</script>
