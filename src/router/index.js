import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/layout/HomeView.vue'
import PostSimple from '../components/PostSimple'

const routes = [
  { path: '/', name: 'Home', component: HomeView  },
  {
    path: '/:postTitle',
    component: PostSimple
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router

