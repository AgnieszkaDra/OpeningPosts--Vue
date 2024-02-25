import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../components/layout/HomeView.vue'
import PostSimple from '../components/PostSimple.vue'; // Import the Post component

const routes = [
  { path: '/', component: HomeView },
  { path: '/post', component: PostSimple }, // Define the route for the Post component
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
