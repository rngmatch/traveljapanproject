<template>
  <div v-if="isAuthenticated" class="favorites-page">
    <h1>Your Favorites</h1>
    <!-- Add favorites form and/or saved favorites view here -->
  </div>
  <div v-else>Please log in to access this page.</div>
</template>

<script>
import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

export default {
  name: 'ProtectedPage',
  computed: {
    isAuthenticated() {
      return isAuthenticated.value
    },
  },
}
</script>

<style lang="postcss" scoped>
.favorites-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    #5b73d6,
    #3f339a,
    #0e094e,
    #250e52
  );
  @apply text-yellow-600;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>