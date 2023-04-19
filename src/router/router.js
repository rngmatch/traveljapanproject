import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CitiesPage from '@/views/CitiesPage.vue'
import AttractionsPage from '@/views/AttractionsPage.vue'
import AccommodationsPage from '@/views/AccommodationsPage.vue'
import ReviewsPage from '@/views/ReviewsPage.vue'

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
  {
    path: '/attractions',
    name: 'AttractionsPage',
    component: AttractionsPage,
  },
  {
  path: '/accommodations',
  name: 'AccommodationsPage',
  component: AccommodationsPage,
},
{
  path: '/reviews',
  name: 'ReviewsPage',
  component: ReviewsPage,
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;