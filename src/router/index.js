import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../components/layout/HomeView.vue'
import PostSimple from '../components/PostSimple.vue'; 

const routes = [
  { path: '/', component: HomeView },
  { path: '/post', component: PostSimple }, 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
