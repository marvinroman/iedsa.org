<template>
  <v-table :hover="hover" :density="density">
    <slot />
  </v-table>
</template>

<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: false,
  },
  density: {
    type: String,
    default: 'default',
  },
  theme: {
    type: String,
    default: undefined,
  },
})
</script>
