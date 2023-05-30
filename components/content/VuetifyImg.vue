<template>
  <v-img :src="src" :contain="Boolean(contain)"></v-img>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: undefined,
  },
  contain: {
    type: String,
    default: undefined,
  },
})
</script>
