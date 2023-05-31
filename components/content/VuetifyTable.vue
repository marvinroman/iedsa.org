<template>
  <v-table
    :density="density"
    :fixed-footer="Boolean(fixedFooter)"
    :fixed-header="Boolean(fixedHeader)"
    :height="height"
    :hover="Boolean(hover)"
    :theme="theme"
  >
    <ContentSlot :use="$slots.default" unwrap="table" />
  </v-table>
</template>

<script setup>
defineProps({
  density: {
    type: String,
    default: 'default',
  },
  fixedFooter: {
    type: [String, Boolean],
    default: false,
  },
  fixedHeader: {
    type: [String, Boolean],
    default: false,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
  hover: {
    type: [String, Boolean],
    default: false,
  },
  tag: {
    type: String,
    default: 'div',
  },
  theme: {
    type: String,
    default: undefined,
  },
})
</script>
