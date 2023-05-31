<template>
  <v-divider
    :vertical="Boolean(vertical)"
    :inset="Boolean(inset)"
    :thickness="thickness"
  ></v-divider>
</template>

<script setup>
defineProps({
  inset: {
    type: String,
    default: undefined,
  },
  thickness: {
    type: [String, Number],
    default: '1px',
  },
  vertical: {
    type: String,
    default: undefined,
  },
})
</script>
