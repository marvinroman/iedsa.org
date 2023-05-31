<template>
  <v-img
    :alt="alt"
    :aspect-ratio="aspectRatio"
    :content-class="contentClass"
    :cover="Boolean(cover)"
    :eager="Boolean(eager)"
    :gradient="gradient"
    :height="height"
    :inline="Boolean(inline)"
    :lazy-src="lazySrc"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="maxHeight"
    :min-width="maxWidth"
    :sizes="sizes"
    :src="src"
    :srcset="srcset"
    :transition="transition"
    :width="width"
  ></v-img>
</template>

<script setup>
defineProps({
  alt: {
    type: String,
    default: undefined,
  },
  aspectRatio: {
    type: [String, Number],
    default: undefined,
  },
  contentClass: {
    type: String,
    default: undefined,
  },
  cover: {
    type: [String, Boolean],
    default: false,
  },
  eager: {
    type: [String, Boolean],
    default: false,
  },
  gradient: {
    type: String,
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
    type: String,
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
  sizes: {
    type: String,
    default: undefined,
  },
  src: {
    type: String,
    default: 'primary',
  },
  srcset: {
    type: String,
    default: undefined,
  },
  transition: {
    type: String,
    default: 'fade-transition',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
})
</script>
