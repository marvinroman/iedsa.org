<template>
  <v-container>
    <v-row>
      <v-col v-for="branch in branches" :key="branch.id" class="branches">
        <v-card class="fill-height elevation-6" tile>
          <v-card-title>{{ branch.title }}</v-card-title>
          <v-card-text>
            <ContentRenderer :value="branch" class="py-4" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const branches = await queryContent('_branches').find()
</script>
