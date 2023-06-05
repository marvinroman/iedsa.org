<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container>
    <v-carousel cycle height="220" hide-delimiters show-arrows="hover">
      <v-carousel-item v-for="(event, i) in events" :key="i">
        <v-sheet height="100%" color="grey-lighten-2" class="pt-2 pl-2 pb-2">
          <v-row>
            <v-col cols="9">
              <h3>{{ event.name }}</h3>
              <div>{{ date.format(event.start, 'fullDateWithWeekday') }}</div>
              <div class="event-description" v-html="event.description"></div>
            </v-col>
            <v-col style="position: relative">
              <v-btn
                :href="`https://calendar.iedsa.org/#/event/${event.uid[0]}`"
                class="full-centered"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                Sign Up
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
// Using the `useDate` function to create a `date` reactive reference
import { useDate } from 'vuetify/labs/date'

const date = useDate()
const config = useAppConfig()
const data = await $fetch(config.events_feed, {
  method: 'GET',
})
data.sort((a, b) => {
  return new Date(a.start) > new Date(b.start)
})

const events = data.filter((event) => {
  return new Date(event.start) > new Date()
})

events.splice(3)
</script>
