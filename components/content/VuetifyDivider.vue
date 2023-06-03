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
    type: [String, Boolean],
    default: false,
  },
  thickness: {
    type: [String, Number],
    default: '1px',
  },
  vertical: {
    type: [String, Boolean],
    default: false,
  },
})
</script>
