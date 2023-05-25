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
        <v-list-item :title="$config.organization.short_name" nav>
          <template #append>
            <v-btn
              variant="text"
              :icon="rail_icon"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
        <v-divider />
        <template v-for="nav in nav_items" :key="nav.name">
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

      <v-toolbar-title class="d-none d-lg-flex">
        {{ $config.organization.long_name }}
      </v-toolbar-title>

      <v-toolbar-title class="d-none d-sm-flex d-lg-none">
        {{ $config.organization.medium_name }}
      </v-toolbar-title>

      <v-toolbar-title class="d-flex d-sm-none">
        {{ $config.organization.short_name }}
      </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items class="d-none d-md-flex">
        <template v-for="nav in nav_items" :key="nav.name">
          <v-btn v-if="nav.path" :href="nav.path">
            {{ nav.name }}
          </v-btn>
          <v-menu v-else open-on-hover>
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
                :href="item.path"
              >
                <v-list-item-title>
                  {{ item.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    rail: false,
    nav_items: [
      {
        name: 'Home',
        icon: 'mdi-home',
        path: '/',
      },
      {
        name: 'Branches',
        icon: 'mdi-map-marker-radius-outline',
        path: '/branches',
      },
      {
        name: 'News',
        icon: 'mdi-newspaper-variant-multiple-outline',
        items: [
          {
            name: 'Articles',
            icon: 'mdi-newspaper-variant-outline',
            path: '/articles',
          },
          {
            name: 'Statements',
            icon: 'mdi-bullhorn-variant-outline',
            path: '/statements',
          },
        ],
      },
      {
        name: 'Calendar',
        icon: 'mdi-calendar-month-outline',
        path: 'https://calendar.iedsa.org',
      },
    ],
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
