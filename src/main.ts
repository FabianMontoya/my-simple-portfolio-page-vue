import { createApp } from 'vue';
import { Vue3Mq } from 'vue3-mq';

import App from './App.vue';
import { store, key } from '@/store';
import './assets/scss/main.scss';

let app;
if (!app) {
  app = createApp(App);

  app.use(Vue3Mq, {
    preset: 'devices'
  });
  app.use(store, key);

  app.mount('#app');
}
