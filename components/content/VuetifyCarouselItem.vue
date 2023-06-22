<template>
  <v-carousel-item
    :alt="alt"
    :aspect-ratio="aspectRatio"
    :color="color"
    :content-class="contentClass"
    :cover="String(cover) === 'true'"
    :disabled="String(disabled) === 'true'"
    :eager="String(eager) === 'true'"
    :gradient="gradient"
    :height="height"
    :inline="String(inline) === 'true'"
    :lazy-src="lazySrc"
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
  ></v-carousel-item>
</template>

<script setup>
defineProps({
  alt: {
    type: [String],
    default: undefined,
  },
  aspectRatio: {
    type: [String, Number],
    default: undefined,
  },
  contentClass: {
    type: [String],
    default: undefined,
  },
  cover: {
    type: [String, Boolean],
    default: false,
  },
  disabled: {
    type: [String, Boolean],
    default: false,
  },
  eager: {
    type: [String, Boolean],
    default: false,
  },
  gradient: {
    type: [String],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
  inline: {
    type: [String, Boolean],
    default: false,
  },
  lazySrc: {
    type: [String],
    default: undefined,
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
