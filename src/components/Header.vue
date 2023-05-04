<template>
  <header class="header">
    <router-link to="/">Home</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Log in</router-link>
    <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
    <button v-if="isLoggedIn" @click="logUserOut">Log out</button>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { user, logout } from '@/composables/useAuth'

export default {
  name: 'Header',
  setup() {
    const router = useRouter()

    // Compute whether the user is currently logged in
    const isLoggedIn = computed(() => user.value !== null)

    const logUserOut = async () => {
      await logout()
      router.push({ name: 'LoginPage' })
    }

    return {
      isLoggedIn,
      logUserOut,
    }
  },
}
</script>
