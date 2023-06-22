<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container>
    <v-carousel
      cycle
      :height="smAndDown ? 300 : 220"
      hide-delimiters
      show-arrows="hover"
    >
      <v-carousel-item v-for="(event, i) in events" :key="i">
        <v-sheet height="100%" color="cyan-darken-2" class="pa-3">
          <v-row>
            <v-col cols="12" md="9">
              <h3>{{ event.name }}</h3>
              <div>{{ date.format(event.start, 'fullDateWithWeekday') }}</div>
              <div class="event-description" v-html="event.description"></div>
            </v-col>
            <v-col style="position: relative">
              <v-btn
                :href="`https://calendar.iedsa.org/#/event/${event.uid[0]}`"
                class="full-centered py-2 px-3 bg-white text-red-darken-2"
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
import { useDisplay } from 'vuetify'

const date = useDate()
const config = useAppConfig()
const { smAndDown } = useDisplay()

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
