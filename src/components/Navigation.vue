<script setup>
  import { ref, watch } from 'vue'
  import { useDisplay } from 'vuetify';

  const { mobile } = useDisplay({ mobileBreakpoint: 900 });

  const drawer = ref(false)
  const group = ref(null)
  const tab = ref(null)

  watch(group, () => {
    drawer.value = false
  })

  const navItems = [
    {
      title: 'Milling Services',
      link: '/services',
    },
    {
      title: 'Wood Slabs & Rounds',
      link: '/wood',
    },
    {
      title: 'Contact Us',
      link: '/contacts',
    },
  ]
</script>

<template>
    <v-app>
        <v-app-bar color="#407348" :height="mobile ? 44 : 68">
            <template v-if="mobile">
              <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              <v-app-bar-title v-if="mobile"><v-img max-width="53" src="src/assets/logo.png" contain/></v-app-bar-title>
              <v-spacer></v-spacer>
            </template>

            <v-tabs v-else v-model="tab">
                <v-tab value="one" id="logo-color" to="/">
                    <v-img class="" src="src/assets/logo.png" width="85px"/>
                </v-tab>
                <v-tab v-for="(item, i) in navItems" :key="i" :to="item.link" :value="i">{{ item.title }}</v-tab>
            </v-tabs>
        </v-app-bar>

        <v-navigation-drawer v-if="mobile"
            v-model="drawer"
            :location="mobile ? 'top' : undefined"
            temporary
        >
            <v-list>
              <v-list-item title="Milling By Darrell" link to="/"></v-list-item>
              <v-list-item v-for="(item, i) in navItems" :key="i" :to="item.link" link :title="item.title"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main id="background">
            <router-view />
        </v-main>
    </v-app>
</template>

<style scoped>
</style>