<template>
  <v-sheet class="full-height" style="position: relative">
    <div class="full-centered text-center">
      <v-img src="/images/404-image.svg" />
      <h1>Path to Seizing the Means of Production Under Construction</h1>
      <p>
        Help us develop it! Join the journey towards economic equality and
        collective ownership. Together, let's shape a stronger future!
      </p>
      <NuxtLink
        :to="path ? path : '/'"
        class="v-btn v-theme--light v-btn--density-default v-btn--size-large v-btn--variant-text gradient-border"
      >
        {{ buttonLabel ? buttonLabel : 'Return to Developed Theory' }}
      </NuxtLink>
    </div>
  </v-sheet>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    default: undefined,
  },
  buttonLabel: {
    type: String,
    default: undefined,
  },
})
</script>
