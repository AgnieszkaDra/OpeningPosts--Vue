import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../components/layout/HomeView.vue'
import PostSimple from '../components/PostSimple.vue'; 

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/:title', name: 'Post Simple', component: PostSimple, props: true }, 
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE__URL),
  routes,
});

export default router
