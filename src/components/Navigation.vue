
<script setup>
  import { ref, watch } from 'vue'

  const items = [
    {
      title: 'Services',
      value: 'services',
    },
    {
      title: 'Wood',
      value: 'wood',
    },
    {
      title: 'Who We Are',
      value: 'who',
    },
    {
      title: 'Contact Us',
      value: 'contact',
    },
  ]

  const drawer = ref(false)
  const group = ref(null)

  watch(group, () => {
    drawer.value = false
  })
</script>

<template>
    <v-app>
        <v-app-bar color="teal-darken-4">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" v-if="$vuetify.display.mobile"></v-app-bar-nav-icon>

            <v-tabs v-else
                v-model="tab"
            >
                <v-tab value="one">Item One</v-tab>
                <v-tab value="two">Item Two</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </v-tabs>

            <v-toolbar-title><span  class="float-left">Milling By Darrell</span></v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-if="$vuetify.display.mobile"
            v-model="drawer"
            :location="$vuetify.display.mobile ? 'bottom' : undefined"
            temporary
        >
            <v-list
            :items="items"
            ></v-list>
        </v-navigation-drawer>

        <v-main>
            <slot></slot>
        </v-main>
    </v-app>
</template>

<style scoped>
.float-left {
    float:left;
}

#nav {
    background-color: darkgreen;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

#nav > * {
    padding: 0 15px;
    padding-top: 7px;
    color: #ddd;
    height: 100%;
    transition: background-color 0.3s ease;
}

#nav > *:hover {
    transition: background-color 0.3s ease;
    background-color: #5e462a;
}
</style>