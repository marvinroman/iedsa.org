<template>
  <v-sheet
    :border="border"
    :color="color"
    :elevation="elevation"
    :height="height"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :position="position"
    :rounded="rounded"
    :tag="tag"
    :theme="theme"
    :width="width"
  ></v-sheet>
</template>

<script setup>
defineProps({
  border: {
    type: [String, Number, Boolean],
    default: false,
  },
  color: {
    type: [String],
    default: undefined,
  },
  elevation: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
  maxHeight: {
    type: [String, Number],
    default: undefined,
  },
  maxWidth: {
    type: [String, Number],
    default: undefined,
  },
  minHeight: {
    type: [String, Number],
    default: undefined,
  },
  minWidth: {
    type: [String, Number],
    default: undefined,
  },
  position: {
    type: [String, Number],
    default: undefined,
  },
  rounded: {
    type: [String, Number, Boolean],
    default: false,
  },
  tag: {
    type: [String],
    default: 'div',
  },
  theme: {
    type: [String],
    default: undefined,
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
})
</script>
