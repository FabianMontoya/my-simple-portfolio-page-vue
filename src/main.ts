import { createApp } from 'vue';
import { Vue3Mq } from 'vue3-mq';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faGripLines, faGrip, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
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

  library.add(faGrip, faGripLines, faMagnifyingGlass, faBars, faXmark);
  app.component('font-awesome-icon', FontAwesomeIcon);

  app.mount('#app');
}
