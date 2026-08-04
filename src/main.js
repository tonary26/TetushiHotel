import { createApp } from 'vue';
import App from './app/App.vue';
import { revealDirective } from './app/directives/reveal';
import { router } from './app/router';
import './app/styles/main.css';

createApp(App).use(router).directive('reveal', revealDirective).mount('#app');
