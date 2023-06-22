<template>
  <v-container class="my-8">
    <h2>Working Groups you can join:</h2>
    <ContentList v-slot="{ list }" path="/_workinggroups">
      <v-card v-for="group in list" :key="group.slug" rounded="0" class="mt-2">
        <template #title>
          <v-icon :color="group.icon_color" :icon="group.icon"></v-icon>
          {{ group.title }}
        </template>
        <v-card-text>
          <ContentRenderer :value="group" />
        </v-card-text>
      </v-card>
    </ContentList>
  </v-container>
</template>
