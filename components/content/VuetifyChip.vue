<template>
  <v-chip
    :active-class="activeClass"
    :append-avatar="appendAvatar"
    :append-icon="appendIcon"
    :border="border"
    :closable="Boolean(closable)"
    :close-icon="closeIcon"
    :close-label="closeLabel"
    :color="color"
    :density="density"
    :disabled="Boolean(disabled)"
    :draggable="Boolean(draggable)"
    :elevation="elevation"
    :exact="Boolean(exact)"
    :filter="Boolean(filter)"
    :filter-icon="filterIcon"
    :href="href"
    :label="Boolean(label)"
    :link="Boolean(link)"
    :model-value="Boolean(modelValue)"
    :pill="Boolean(pill)"
    :prepend-avatar="prependAvatar"
    :prepend-icon="prependIcon"
    :replace="Boolean(replace)"
    :ripple="Boolean(ripple)"
    :rounded="rounded"
    :selected-class="selectedClass"
    :size="size"
    :tag="tag"
    :text="text"
    :theme="theme"
    :title="title"
    :to="to"
    :value="value"
    :variant="variant"
  >
    <slot />
  </v-chip>
</template>

<script setup>
defineProps({
  activeClass: {
    type: String,
    default: undefined,
  },
  appendAvatar: {
    type: String,
    default: undefined,
  },
  appendIcon: {
    type: String,
    default: undefined,
  },
  border: {
    type: [String, Number, Boolean],
    default: false,
  },
  closable: {
    type: [String, Boolean],
    default: false,
  },
  closeIcon: {
    type: String,
    default: 'mdi-close',
  },
  closeLabel: {
    type: String,
    default: 'Close',
  },
  color: {
    type: String,
    default: undefined,
  },
  density: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: [String, Boolean],
    default: false,
  },
  draggable: {
    type: [String, Boolean],
    default: false,
  },
  elevation: {
    type: [String, Number],
    default: undefined,
  },
  exact: {
    type: [String, Boolean],
    default: false,
  },
  filter: {
    type: [String, Boolean],
    default: false,
  },
  filterIcon: {
    type: String,
    default: 'mdi-check',
  },
  href: {
    type: String,
    default: undefined,
  },
  label: {
    type: [String, Boolean],
    default: false,
  },
  link: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: [String, Boolean],
    default: true,
  },
  pill: {
    type: [String, Boolean],
    default: false,
  },
  prependAvatar: {
    type: String,
    default: undefined,
  },
  prependIcon: {
    type: String,
    default: undefined,
  },
  replace: {
    type: [String, Boolean],
    default: false,
  },
  ripple: {
    type: [String, Boolean],
    default: true,
  },
  rounded: {
    type: [String, Number, Boolean],
    default: false,
  },
  selectedClass: {
    type: String,
    default: undefined,
  },
  size: {
    type: [String, Number],
    default: 'default',
  },
  tag: {
    type: String,
    default: 'span',
  },
  text: {
    type: String,
    default: undefined,
  },
  theme: {
    type: String,
    default: undefined,
  },
  title: {
    type: String,
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
  value: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: 'tonal',
  },
})
</script>
