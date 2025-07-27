// Router and Routing
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import Gallery from '../components/Gallery.vue';

const routes = [
{ path: '/', component: Home },
{ path: '/gallery', component: Gallery }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;