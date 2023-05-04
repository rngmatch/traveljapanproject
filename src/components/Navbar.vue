<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/cities">Cities</router-link></li>
      <li><router-link to="/attractions">Attractions</router-link></li>
      <li><router-link to="/accommodations">Accommodations</router-link></li>
      <li><router-link to="/reviews">Reviews</router-link></li>
      <li><router-link to="/profile">Profile </router-link></li>
      <li><router-link to="/Itinerary">Itinerary</router-link></li>
      <li><router-link to="/favorites">Favorites</router-link></li>
      <li v-if="isAuthenticated">
        <a href="#" @click.prevent="logout">Logout</a>
      </li>
      <li v-else><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

export default {
  name: 'NavBar',
  components: {
    RouterLink,
  },
  setup() {
    const { isAuthenticated, logout } = useAuth()

    return {
      isAuthenticated,
      logout,
    }
  },
}
</script>

<style>
nav {
  background-color: #333;
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  display: flex;
}

li {
  margin: 0 1rem;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

a:hover {
  color: #ccc;
}
</style>
