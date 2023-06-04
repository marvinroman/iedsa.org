<template>
  <v-expansion-panel
    :bg-color="bgColor"
    :collapse-icon="collapseIcon"
    :color="color"
    :disabled="Boolean(disabled)"
    :eager="Boolean(eager)"
    :elevation="elevation"
    :expand-icon="expandIcon"
    :hide-actions="Boolean(hideActions)"
    :readonly="Boolean(readonly)"
    :ripple="Boolean(ripple)"
    :rounded="rounded"
    :selected-class="selectedClass"
    :tag="tag"
    :title="title"
    :value="value"
  >
    <v-expansion-panel-title v-if="$slots.title">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <slot />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    default: undefined,
  },
  collapseIcon: {
    type: String,
    default: 'mdi-chevron-up',
  },
  color: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: [String, Boolean],
    default: false,
  },
  eager: {
    type: [String, Boolean],
    default: false,
  },
  elevation: {
    type: [String, Number],
    default: undefined,
  },
  expandIcon: {
    type: String,
    default: 'mdi-chevron-down',
  },
  hideActions: {
    type: [String, Boolean],
    default: false,
  },
  readonly: {
    type: [String, Boolean],
    default: false,
  },
  ripple: {
    type: [String, Boolean],
    default: false,
  },
  rounded: {
    type: [String, Boolean, Number],
    default: false,
  },
  selectedClass: {
    type: String,
    default: undefined,
  },
  tag: {
    type: String,
    default: 'div',
  },
  title: {
    type: String,
    default: undefined,
  },
  value: {
    type: [String, Boolean],
    default: undefined,
  },
})
</script>
