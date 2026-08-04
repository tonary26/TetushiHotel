import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../../pages/HomePage.vue';
import RoomPage from '../../pages/RoomPage.vue';

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 86, behavior: 'smooth' };
    return { top: 0 };
  },
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/room/:slug', name: 'room', component: RoomPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});
