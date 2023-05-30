<template>
  <v-divider :vertical="Boolean(vertical)"></v-divider>
</template>

<script setup>
defineProps({
  vertical: {
    type: String,
    default: undefined,
  },
})
</script>
