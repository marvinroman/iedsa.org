<template>
  <v-icon
    :color="color"
    :end="Boolean(end)"
    :icon="icon"
    :size="size"
    :start="Boolean(start)"
    :tag="tag"
    :theme="theme"
  ></v-icon>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: undefined,
  },
  end: {
    type: [String, Boolean],
    default: false,
  },
  icon: {
    type: String,
    default: undefined,
  },
  size: {
    type: String,
    default: 'default',
  },
  start: {
    type: [String, Boolean],
    default: false,
  },
  tag: {
    type: String,
    default: 'i',
  },
  theme: {
    type: String,
    default: undefined,
  },
})
</script>
