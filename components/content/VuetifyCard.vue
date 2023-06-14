<template>
  <v-card
    :append-avatar="appendAvatar"
    :append-icon="appendIcon"
    :border="border"
    :color="color"
    :density="density"
    :disabled="Boolean(disabled)"
    :elevation="elevation"
    :exact="Boolean(exact)"
    :flat="Boolean(flat)"
    :height="height"
    :hover="Boolean(hover)"
    :href="href"
    :image="image"
    :link="Boolean(link)"
    :loading="loading"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :position="position"
    :prepend-avatar="prependAvatar"
    :prepend-icon="prependIcon"
    :replace="Boolean(replace)"
    :ripple="Boolean(ripple)"
    :rounded="rounded"
    :subtitle="subtitle"
    :tag="tag"
    :text="text"
    :theme="theme"
    :title="title"
    :to="to"
    :variant="variant"
    :width="width"
  >
    <v-card-title v-if="$slots.title">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </v-card-title>
    <v-card-subtitle v-if="$slots.subtitle">
      <ContentSlot :use="$slots.subtitle" unwrap="p" />
    </v-card-subtitle>
    <v-card-text v-if="$slots.default">
      <ContentSlot :use="$slots.default" />
    </v-card-text>
    <v-card-actions v-if="$slots.actions">
      <ContentSlot :use="$slots.actions" />
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
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
  elevation: {
    type: [String, Number],
    default: undefined,
  },
  exact: {
    type: [String, Boolean],
    default: false,
  },
  flat: {
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
  href: {
    type: String,
    default: undefined,
  },
  image: {
    type: String,
    default: undefined,
  },
  link: {
    type: [String, Boolean],
    default: false,
  },
  loading: {
    type: [String, Boolean],
    default: false,
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
  subtitle: {
    type: String,
    default: undefined,
  },
  tag: {
    type: String,
    default: 'div',
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
