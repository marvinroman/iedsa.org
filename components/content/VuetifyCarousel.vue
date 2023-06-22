<template>
  <v-carousel
    :color="color"
    :continuous="String(continuous) === 'true'"
    :cycle="String(cycle) === 'true'"
    :delimiter-icon="delimiterIcon"
    :direction="direction"
    :disabled="String(disabled) === 'true'"
    :height="height"
    :hide-delimiter-background="String(hideDelimiterBackground) === 'true'"
    :hide-delimiter="String(hideDelimiter) === 'true'"
    :interval="interval"
    :next-icon="nextIcon"
    :prev-icon="prevIcon"
    :progress="String(progress) === 'true'"
    :reverse="String(reverse) === 'true'"
    :selected-class="selectedClass"
    :show-arrows="String(showArrows) === 'true'"
    :tag="tag"
    :theme="theme"
    :touch="touch"
    :vertical-delimiters="verticalDelimiters"
  ></v-carousel>
</template>

<script setup>
defineProps({
  color: {
    type: [String],
    default: undefined,
  },
  continuous: {
    type: [String, Boolean],
    default: true,
  },
  cycle: {
    type: [String, Boolean],
    default: false,
  },
  delimiterIcon: {
    type: [String],
    default: 'mdi-circle',
  },
  direction: {
    type: [String],
    default: 'horizontal',
  },
  disabled: {
    type: [String, Boolean],
    default: false,
  },
  height: {
    type: [String, Number],
    default: 500,
  },
  hideDelimiterBackground: {
    type: [String, Boolean],
    default: false,
  },
  hideDelimiter: {
    type: [String, Boolean],
    default: false,
  },
  interval: {
    type: [String, Number],
    default: 6000,
  },
  nextIcon: {
    type: [String],
    default: 'mdi-chevron-right',
  },
  prevIcon: {
    type: [String],
    default: 'mdi-chevron-right',
  },
  progress: {
    type: [String, Boolean],
    default: false,
  },
  reverse: {
    type: [String, Boolean],
    default: false,
  },
  selectedClass: {
    type: [String],
    default: 'v-window-item--active',
  },
  showArrows: {
    type: [String, Boolean],
    default: true,
  },
  tag: {
    type: [String],
    default: 'div',
  },
  theme: {
    type: [String],
    default: undefined,
  },
  touch: {
    type: [String, Boolean],
    default: false,
  },
  verticalDelimiters: {
    type: [String, Boolean],
    default: false,
  },
})
</script>
