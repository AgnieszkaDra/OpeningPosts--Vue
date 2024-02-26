import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../components/layout/HomeView.vue'
import PostSimple from '../components/PostSimple'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/Wilk', name: 'Wilk', component: PostSimple },
  { path: '/Leśne zwierzęta', name: 'Leśne zwierzęta', component: PostSimple },
  { path: '/Fiolet', name: 'Fiolet', component: PostSimple },
  { path: '/Sukienka', name: 'Sukienka', component: PostSimple },
  { path: '/Wieloryby', name: 'Wieloryby', component: PostSimple },
  { path: '/Czereśnie', name: 'Czereśnie', component: PostSimple },
  { path: '/Na Walentynki', name: 'Na Walentynki', component: PostSimple },
  { path: '/Zima', name: 'Zima', component: PostSimple },
  { path: '/Opaski', name: 'Opaski', component: PostSimple },
  { path: '/Czapki', name: 'Czapki', component: PostSimple },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
