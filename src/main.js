import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router/index.js';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router);

app.mount('#app')