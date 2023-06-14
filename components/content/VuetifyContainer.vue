<template>
  <v-container :fluid="Boolean(fluid)">
    <slot />
  </v-container>
</template>

<script setup>
defineProps({
  fluid: {
    type: String,
    default: undefined,
  },
})
</script>
