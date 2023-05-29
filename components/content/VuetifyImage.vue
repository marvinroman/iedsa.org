<template>
  <v-img :src="src"></v-img>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: 'primary',
  },
})
</script>
