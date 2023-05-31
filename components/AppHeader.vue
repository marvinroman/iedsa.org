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
          <v-list-group v-if="nav.items" :value="nav.name">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="nav.icon"
                :title="nav.name"
              ></v-list-item>
            </template>
            <template v-for="item in nav.items" :key="item.name">
              <v-list-item v-if="item.path" :prepend-icon="item.icon">
                <NuxtLink
                  :to="item.path"
                  class="text-decoration-none text-grey-darken-2"
                >
                  {{ item.name }}
                </NuxtLink>
              </v-list-item>
              <v-list-item
                v-else-if="item.href"
                :href="item.href"
                :prepend-icon="item.icon"
                :title="item.name"
              ></v-list-item>
            </template>
          </v-list-group>
          <v-list-item v-else-if="nav.path" :prepend-icon="nav.icon">
            <v-list-item-title>
              <NuxtLink
                :to="nav.path"
                class="text-decoration-none text-grey-darken-2"
              >
                {{ nav.name }}
              </NuxtLink>
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            v-else-if="nav.href"
            :prepend-icon="nav.icon"
            :href="nav.href"
            :title="nav.name"
            target="_blank"
            rel="noopener noreferrer"
          ></v-list-item>
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
        src="/images/iedsa_logo.svg"
        height="48"
        width="48"
        class="ml-2"
        inline
      ></v-img>
      <v-toolbar-title>
        <NuxtLink
          data-v-a54da7ff=""
          class="v-btn v-theme--light v-btn--density-default v-btn--size-large v-btn--variant-text gradient-border"
          to="/"
        >
          <span class="v-btn__overlay"></span>
          <span class="v-btn__underlay"></span>
          <span class="v-btn__content" data-no-activator="">
            {{ title }}
          </span>
        </NuxtLink>
      </v-toolbar-title>

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
                  <NuxtLink
                    :to="item.path"
                    class="text-decoration-none text-grey-darken-2"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <NuxtLink
            v-else-if="nav.path"
            :to="nav.path"
            class="v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text"
            style="height: inherit"
          >
            <span class="v-btn__overlay"></span>
            <span class="v-btn__overlay"></span>
            <span class="v-btn__content" data-no-activator="">
              {{ nav.name }}
            </span>
          </NuxtLink>
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
    // returns icon based on whether the side menu is active as a rail (narrow)
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
