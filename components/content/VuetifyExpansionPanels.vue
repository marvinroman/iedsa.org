<template>
  <v-expansion-panels
    :color="color"
    :disabled="Boolean(disabled)"
    :mandatory="Boolean(mandatory)"
    :max="max"
    :model-value="Boolean(modelValue)"
    :multiple="Boolean(multiple)"
    :readonly="Boolean(readonly)"
    :selected-class="selectedClass"
    :tag="tag"
    :theme="theme"
    :variant="variant"
  >
    <slot />
  </v-expansion-panels>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: [String, Boolean],
    default: false,
  },
  mandatory: {
    type: [String, Boolean],
    default: false,
  },
  max: {
    type: Number,
    default: undefined,
  },
  modelValue: {
    type: [String, Number, Array],
    default: undefined,
  },
  multiple: {
    type: [String, Boolean],
    default: false,
  },
  readonly: {
    type: [String, Boolean],
    default: false,
  },
  selectedClass: {
    type: String,
    default: undefined,
  },
  tag: {
    type: String,
    default: 'span',
  },
  theme: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: 'tonal',
  },
})
</script>
