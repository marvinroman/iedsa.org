<template>
  <v-container>
    <v-container>
      <v-row>
        <v-col class="column-2">
          <h1>
            We are the
            <span class="text-primary">Inland Empire Chapter</span> of the
            <span class="text-primary">Democratic Socialists of America</span>
          </h1>
          <p>
            We are the Inland Empire Chapter of the Democratic Socialists of
            America, covering both Riverside and San Bernardino counties.
          </p>
          <p>
            Members of Inland Empire DSA (IE DSA) strive for collective
            liberation and economic participation through shared control of the
            means and resources of production. We are focused on building a base
            of mass power through electoral activism, political education,
            awareness-raising, direct action, and mutual aid.
          </p>
        </v-col>
        <v-divider class="d-none d-md-flex" vertical />
        <v-col class="column-2">
          <v-img src="https://via.placeholder.com/640x360" />
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="workingGroups" class="my-8">
      <v-divider class="mb-4" />
      <h2>Working Groups you can join:</h2>
      <v-card
        v-for="group in workingGroups"
        :key="group.slug"
        rounded="0"
        class="mt-2"
      >
        <template #prepend>
          <v-icon :color="group.icon_color" :icon="group.icon"></v-icon>
        </template>
        <v-card-title>{{ group.title }}</v-card-title>
        <v-card-text>
          <ContentRenderer :value="group" />
        </v-card-text>
      </v-card>
    </v-container>
    <ContactForm url="https://formspree.io/f/xknvjjye" />
  </v-container>
</template>

<script setup>
const workingGroups = await queryContent('workinggroups').find()
const config = useAppConfig()

useHead({
  title: `Home - ${config.short_title}`,
})
</script>
