<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      disable-route-watcher
      disable-resize-watcher
      :rail="rail"
      temporary
      class="d-flex d-md-none"
      @click="rail = false"
    >
      <v-list>
        <v-list-item :title="title" nav>
          <template #append>
            <v-btn
              variant="text"
              :icon="rail_icon"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
        <v-divider />
        <template v-for="nav in menu" :key="nav.name">
          <v-list-item
            v-if="nav.path"
            :href="nav.path"
            :prepend-icon="nav.icon"
            :title="nav.name"
          ></v-list-item>
          <v-list-group v-else :value="nav.name">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="nav.icon"
                :title="nav.name"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="item in nav.items"
              :key="item.name"
              :href="item.path"
              :prepend-icon="item.icon"
              :title="item.name"
            ></v-list-item>
          </v-list-group>
        </template>
      </v-list>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img
        src="https://iedsa.org/assets/static/iedsa_logo.92f7e5b.3ea25939b069041688a829788e1be569.svg"
        height="48"
        width="48"
        class="ml-2"
        inline
      ></v-img>

      <v-btn
        v-ripple="{ class: 'text-primary' }"
        text
        href="/"
        class="ml-2 gradient-border"
        size="large"
      >
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
      </v-btn>

      <v-spacer />
      <v-toolbar-items class="d-none d-md-flex">
        <template v-for="nav in menu" :key="nav.name">
          <v-menu v-if="nav.items" open-on-hover>
            <template #activator="{ props }">
              <v-btn v-bind="props" append-icon="mdi-chevron-down">
                {{ nav.name }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="item in nav.items"
                :key="item.name"
                :prepend-icon="item.icon"
                :to="item.path"
              >
                <v-list-item-title>
                  {{ item.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn v-else-if="nav.path" :to="nav.path">
            {{ nav.name }}
          </v-btn>
          <v-btn
            v-else-if="nav.href"
            :href="nav.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ nav.name }}
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    menu: {
      type: Array,
      default: null,
    },
  },
  data: () => ({
    drawer: false,
    rail: false,
  }),
  computed: {
    rail_icon() {
      return this.rail ? 'mdi-chevron-right' : 'mdi-chevron-left'
    },
  },
}
</script>

<style scoped>
.v-toolbar-title {
  flex: auto;
}
</style>
