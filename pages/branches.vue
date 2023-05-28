<template>
  <v-container>
    <v-container class="mt-16" fill-height>
      <v-row>
        <v-col class="column-2">
          <h1>Branches &amp; Regions</h1>
          <p>
            Why the division? Covering such a large span of vibrant and distinct
            communities can lead to dissonant representation in our chapter.
            Promoting the creation of branches &amp; regions facilitates better
            outreach, encourages local participation, and establishes open lines
            of communication in our Inland Empire communities. While regions are
            a little less formal, branches, as defined by our bylaws, are a
            subgroup of IE DSA. They consist of at least five members in good
            standing and may be defined by geography or language. The chair(s)
            of branches also hold membership on our Steering Committee.
          </p>
          <h2>Branches</h2>
          <p>
            IE DSA currently only has one branch, the Desert Branch and it is
            made of the communities of Palm Springs, Cathedral City, Palm
            Desert, Indian Wells, La Quinta, Indio, Coachella, Yucca Valley
          </p>
        </v-col>
        <v-divider class="d-none d-md-flex" vertical></v-divider>
        <v-col class="column-2">
          <v-img
            class="mt-0 mt-md-4"
            src="/images/area-map.jpg"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-divider class="my-4"></v-divider>
      <h3>Regions</h3>
      <p>We have six regions.</p>
    </v-container>

    <v-container>
      <v-row>
        <v-col v-for="branch in branches" :key="branch.id" class="branches">
          <v-card class="fill-height elevation-6" tile>
            <v-card-title>{{ branch.title }}</v-card-title>
            <v-card-text>
              <ContentRenderer :value="branch" class="px-6 py-4" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <p>
        Don&apos;t see your city? Let us know by emailing us at
        <a href="mailto:inlanddsa@gmail.com">inlanddsa@gmail.com</a>. No one
        should feel like they need to be exclusive to one region. Visit
        neighboring regions or branches and find out which one suits you.
      </p>
    </v-container>
  </v-container>
</template>

<script setup>
const branches = await queryContent('branches').find()
</script>
