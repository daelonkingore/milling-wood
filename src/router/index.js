// Router and Routing
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Services from '../components/Services.vue';
import Description from '../components/Description.vue';
import Wood from '../components/Wood.vue';
import Contacts from '../components/Contacts.vue';
import Gallery from '../components/Gallery.vue';

const routes = [
{ path: '/', component: Home },
{ path: '/services', component: Services },
{ path: '/desc', component: Description },
{ path: '/wood', component: Wood },
{ path: '/contacts', component: Contacts },
{ path: '/gallery', component: Gallery },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;