<script setup>
  import { ref, watch } from 'vue'

  const drawer = ref(false)
  const group = ref(null)
  const tab = ref(null)

  watch(group, () => {
    drawer.value = false
  })

  const navItems = [
    {
      title: 'Milling By Darrell',
      link: '/',
    },
    {
      title: 'Services',
      link: '/services',
    },
    {
      title: 'About Us',
      link: '/desc',
    },
    {
      title: 'Wood',
      link: '/wood',
    },
    {
      title: 'Contact',
      link: '/contacts',
    },
    {
      title: 'Gallery',
      link: '/gallery',
    },
  ]
</script>

<template>
    <v-app>
        <v-app-bar color="teal-darken-4">
            <v-app-bar-nav-icon v-if="$vuetify.display.mobile" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-tabs v-else v-model="tab">
                <v-tab v-for="(item, i) in navItems" :key="i" :to="item.link" :value="i">{{ item.title }}</v-tab>
            </v-tabs>

            <v-toolbar-title><span  class="float-left"></span></v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-if="$vuetify.display.mobile"
            v-model="drawer"
            :location="$vuetify.display.mobile ? 'top' : undefined"
            temporary
        >
            <v-list>
              <v-list-item v-for="(item, i) in navItems" :key="i" :to="item.link" link :title="item.title"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main id="background">
            <router-view />
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