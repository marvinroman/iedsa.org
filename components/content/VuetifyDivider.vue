<template>
  <v-divider :vertical="vertical"></v-divider>
</template>

<script setup>
defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
})
</script>
