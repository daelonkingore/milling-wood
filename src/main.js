
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  //theme: false,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        light: false,
        colors: {
        },
      },
    },
    dark: true,
  },
})

// mount app
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './style.css'

createApp(App)
.use(vuetify)
.use(router).mount('#app')
