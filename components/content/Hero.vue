<template>
  <v-card
    class="mx-auto mt-16 text-center d-none d-md-block"
    color="primary"
    min-height="360"
    dark
    flat
    tile
    width="100%"
  >
    <v-card-title>
      <h1 class="display-2 font-weight-thin mb-4 text-center mt-16 mx-auto">
        {{ heroData.hero.heroTitle }}
      </h1>
    </v-card-title>
    <v-card-subtitle>
      <h4 class="text-h6 text-center mx-auto">
        {{ heroData.hero.heroSubtitle }}
      </h4>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="accent"
        href="https://act.dsausa.org/donate/membership"
        class="mx-auto mt-6 text--primary"
        target="_blank"
        rel="noopener noreferrer"
        tile
        x-large
        >Join</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup></script>
