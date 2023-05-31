<template>
  <v-btn
    :active="Boolean(active)"
    :append-icon="appendIcon"
    :block="Boolean(block)"
    :border="border"
    :color="color"
    :density="density"
    :disabled="Boolean(disabled)"
    :elevation="elevation"
    :exact="Boolean(exact)"
    :flat="Boolean(flat)"
    :height="height"
    :href="href"
    :icon="icon"
    :loading="loading"
    :location="location"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :position="position"
    :prepend-icon="prependIcon"
    :replace="Boolean(replace)"
    :ripple="Boolean(ripple)"
    :rounded="rounded"
    :selected-class="selectedClass"
    :size="size"
    :stacked="stacked"
    :tag="tag"
    :text="text"
    :theme="theme"
    :to="to"
    :variant="variant"
    :width="width"
    :target="blank ? '_blank' : undefined"
    :rel="blank ? 'noopener noreferrer' : undefined"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </v-btn>
</template>

<script setup>
defineProps({
  active: {
    type: [String, Boolean],
    default: undefined,
  },
  appendIcon: {
    type: String,
    default: undefined,
  },
  blank: {
    type: String,
    default: undefined,
  },
  block: {
    type: [String, Boolean],
    default: undefined,
  },
  border: {
    type: [String, Number, Boolean],
    default: false,
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
    default: undefined,
  },
  elevation: {
    type: [String, Number],
    default: undefined,
  },
  exact: {
    type: [String, Boolean],
    default: undefined,
  },
  flat: {
    type: [String, Boolean],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  icon: {
    type: [String, Boolean],
    default: false,
  },
  loading: {
    type: [String, Boolean],
    default: false,
  },
  location: {
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
  position: {
    type: String,
    default: undefined,
  },
  prependIcon: {
    type: String,
    default: undefined,
  },
  replace: {
    type: [String, Boolean],
    default: undefined,
  },
  ripple: {
    type: [String, Boolean],
    default: undefined,
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
  stacked: {
    type: [String, Boolean],
    default: undefined,
  },
  tag: {
    type: String,
    default: 'button',
  },
  text: {
    type: String,
    default: undefined,
  },
  theme: {
    type: String,
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: 'elevated',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
})
</script>
