import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import HomePage from '@/views/HomePage.vue'
import CitiesPage from '@/views/CitiesPage.vue'
import AttractionsPage from '@/views/AttractionsPage.vue'
import AccommodationsPage from '@/views/AccommodationsPage.vue'
import ReviewsPage from '@/views/ReviewsPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import ItineraryPage from '@/views/ItineraryPage.vue'
import FavoritesPage from '@/views/FavoritesPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegistrationPage from '@/views/RegistrationPage.vue'

const { isAuthenticated } = useAuth()

const requireAuth = (to, from, next) => {
  if (isAuthenticated.value) {
    next()
  } else {
    next({ name: 'LoginPage', query: { redirect: to.fullPath } })
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/cities',
    name: 'CitiesPage',
    component: CitiesPage,
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
    meta: { requiresAuth: true },
  },
  {
    path: '/itinerary',
    name: 'ItineraryPage',
    component: ItineraryPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/favorites',
    name: 'FavoritesPage',
    component: FavoritesPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    requireAuth(to, from, next)
  } else {
    next()
  }
})

export default router
