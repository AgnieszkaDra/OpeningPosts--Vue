import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../components/layout/HomeView.vue'
import PostSimple from '../components/PostSimple'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/Początek', name: 'Początek', component: PostSimple },
  { path: '/Zając', name: 'Zając', component: PostSimple },
  { path: '/Piłka', name: 'Piłka', component: PostSimple },
  { path: '/Codzienność', name: 'Codzienność', component: PostSimple },
  { path: '/Elegancja', name: 'Elegancja', component: PostSimple },
  { path: '/Zając ukryty', name: 'Zając ukryty', component: PostSimple },
  { path: '/Czapki', name: 'Czapki', component: PostSimple },
  { path: '/Slow fashion', name: 'Slow fashion', component: PostSimple },
  { path: '/Opaski', name: 'Opaski', component: PostSimple },
  { path: '/Zima', name: 'Zima', component: PostSimple },
  { path: '/Na Walentynki', name: 'Na Walentynki', component: PostSimple },
  { path: '/Czereśnie', name: 'Czereśnie', component: PostSimple },
  { path: '/Wieloryby', name: 'Wieloryby', component: PostSimple },
  { path: '/Sukienka', name: 'Sukienka', component: PostSimple },
  { path: '/Co słychać?', name: 'Co słychać?', component: PostSimple },
  { path: '/Fiolet', name: 'Fiolet', component: PostSimple },
  { path: '/Wilk', name: 'Wilk', component: PostSimple },
  { path: '/Leśne zwierzęta', name: 'Leśne zwierzęta', component: PostSimple },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
