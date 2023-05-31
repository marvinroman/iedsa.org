<template>
  <div :class="`my-${height}`"></div>
</template>

<script setup>
defineProps({
  height: {
    type: Number,
    default: 4,
  },
})
</script>
