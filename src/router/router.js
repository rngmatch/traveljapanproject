import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CitiesPage from '../views/CitiesPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/cities',
    name: 'CitiesPage',
    component: CitiesPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;