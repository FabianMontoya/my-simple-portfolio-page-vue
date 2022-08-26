import { createApp } from 'vue';
import App from './App.vue';
import { store, key } from '@/store';
import './assets/scss/main.scss';

let app;
if (!app) {
  app = createApp(App);
  app.use(store, key);
  app.mount('#app');
}
