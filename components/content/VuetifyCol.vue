<template>
  <v-col :cols="cols">
    <slot />
  </v-col>
</template>

<script setup>
defineProps({
  cols: {
    type: String,
    default: undefined,
  },
})
</script>
