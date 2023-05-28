<template>
  <v-container>
    <v-container>
      <v-row>
        <v-col v-for="article in articles" :key="article.id" class="articles">
          <v-hover v-slot="{ hover }">
            <v-card class="elevation-6 fill-height" :href="article._path" tile>
              <v-img height="200px" :src="article.preview_image" cover>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-block transition-fast-in-fast-out primary lighten-1 v-card--reveal text-h2 white--text text-center pt-12"
                    style="height: 100%"
                  >
                    Read More
                  </div>
                </v-expand-transition>
              </v-img>
              <v-badge
                :icon="icons.star"
                color="primary"
                :value="article.priority"
                overlap
                left
              >
                <v-card-title class="ma-1 pa-0 ml-3">
                  {{ article.title }}
                </v-card-title>
              </v-badge>
              <v-card-subtitle>
                {{ article.author }}&nbsp;
                <v-icon x-small>
                  {{ icons.author }}
                </v-icon>
              </v-card-subtitle>

              <v-card-text>
                <div class="text--primary">
                  <div class="mb-1 tags">
                    <v-chip
                      v-for="tag in article.tags"
                      :key="tag.id"
                      outlined
                      :href="tag._path"
                      class="mr-2"
                    >
                      {{ tag.title }}
                      <v-icon class="ml-2" color="accent" small>
                        {{ icons.tag }}
                      </v-icon>
                    </v-chip>
                  </div>
                  <div>{{ article.date }}</div>
                  <div class="content">{{ article.excerpt }}</div>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :href="article._path" text color="info">Read More</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  async setup() {
    const config = useAppConfig()
    const articles = await queryContent('articles').find()
    // eslint-disable-next-line no-console
    console.debug({ articles })

    useHead({
      title: `Articles - ${config.short_title}`,
    })
    return { articles }
  },
  data() {
    return {
      icons: {
        author: 'mdi-raw-pen',
        star: 'mdi-star',
        tag: 'mdi-tag',
      },
    }
  },
  methods: {
    changePage(page) {
      const path = [0, 1].includes(page) ? '/articles' : `/articles/${page}`
      this.$router.push({ path })
    },
  },
}
</script>

<style lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.v-badge__badge {
  font-size: 10px;
}
</style>
