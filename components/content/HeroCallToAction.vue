<template>
  <v-card
    :color="color"
    min-height="360"
    dark
    flat
    tile
    rounded="0"
    width="100%"
  >
    <v-card-title>
      <p class="text-h4 font-weight-thin mb-4 text-center mt-16 mx-auto">
        <slot />
      </p>
    </v-card-title>
    <v-card-actions class="text-center mt-6">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: undefined,
  },
})
</script>
