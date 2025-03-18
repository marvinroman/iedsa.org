<template>
  <v-list
    :active-class="activeClass"
    :active-color="activeColor"
    :base-color="baseColor"
    :bg-color="bgColor"
    :border="border"
    :color="color"
    :density="density"
    :disabled="Boolean(disabled)"
    :elevation="elevation"
    :height="height"
    :href="href"
    :lines="lines"
    :link="Boolean(link)"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :nav="Boolean(nav)"
    :prepend-avatar="prependAvatar"
    :prepend-icon="prependIcon"
    :replace="Boolean(replace)"
    :ripple="Boolean(ripple)"
    :rounded="rounded"
    :slim="Boolean(slim)"
    :subtitle="subtitle"
    :tag="tag"
    :theme="theme"
    :title="title"
    :to="to"
    :value="value"
    :variant="variant"
    :width="width"
  >
    <slot />
  </v-list>
</template>

<script setup>
defineProps({
  active: {
    type: [String, Boolean],
    default: undefined,
  },
  activeClass: {
    type: String,
    default: undefined,
  },
  activeColor: {
    type: String,
    default: undefined,
  },
  appendAvatar: {
    type: String,
    default: undefined,
  },
  appendIcon: {
    type: [String, Number, Boolean],
    default: false,
  },
  baseColor: {
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
  height: {
    type: [String, Number],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  lines: {
    type: String,
    default: undefined,
  },
  link: {
    type: [String, Boolean],
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
  nav: {
    type: [String, Boolean],
    default: undefined,
  },
  prependAvatar: {
    type: String,
    default: undefined,
  },
  prependIcon: {
    type: [String, Number, Boolean],
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
  slim: {
    type: [String, Boolean],
    default: undefined,
  },
  subtitle: {
    type: [String, Number],
    default: undefined,
  },
  tag: {
    type: String,
    default: 'div',
  },
  theme: {
    type: String,
    default: undefined,
  },
  title: {
    type: [String, Number],
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
  value: {
    type: [String, Number, Boolean],
    default: 'elevated',
  },
  variant: {
    type: String,
    default: 'flat',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
})
</script>
