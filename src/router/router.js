import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CitiesPage from '@/views/CitiesPage.vue'
import AttractionsPage from '@/views/AttractionsPage.vue'
import AccommodationsPage from '@/views/AccommodationsPage.vue'
import ReviewsPage from '@/views/ReviewsPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import ItineraryPage from '@/views/ItineraryPage.vue'
import FavoritesPage from '@/views/FavoritesPage.vue'
import LoginPage from '@/views/LoginPage.vue'

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
{
  path: '/profile',
  name: 'ProfilePage',
  component: ProfilePage,
},
{
  path: '/itinerary',
  name: 'ItineraryPage',
  component: ItineraryPage,
},
{
  path: '/favorites',
  name: 'FavoritesPage',
  component: FavoritesPage,
},
{
  path: '/login',
  name: 'LoginPage',
  component: LoginPage,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;