import { createApp } from 'vue';
import { Vue3Mq } from 'vue3-mq';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faGripLines, faGrip, faMagnifyingGlass, faBars, faXmark, faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG, faYoutube } from '@fortawesome/free-brands-svg-icons';
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

  library.add(faGrip, faGripLines, faMagnifyingGlass, faBars, faXmark, faFacebookF, faTwitter, faBasketball, faGooglePlusG, faYoutube);
  app.component('font-awesome-icon', FontAwesomeIcon);

  app.mount('#app');
}
