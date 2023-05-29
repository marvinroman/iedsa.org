<template>
  <v-btn :color="color">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </v-btn>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})
</script>
