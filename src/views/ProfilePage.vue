<template>
  <div v-if="isAuth" class="profile-page">
    <h1>Your Profile</h1>
    <ProfileUpdateForm />
    <TravelHistory />
  </div>
  <div v-else>Please log in to access this page.</div>
</template>

<script>
import { useAuth } from '@/composables/useAuth'
import ProfileUpdateForm from '@/components/ProfileUpdateForm'
import TravelHistory from '@/components/TravelHistory'
import { computed } from 'vue'

export default {
  name: 'ProfilePage',
  components: {
    ProfileUpdateForm,
    TravelHistory,
  },
  setup() {
    const { isAuthenticated } = useAuth()

    const isAuth = computed(() => {
      return isAuthenticated.value
    })

    return { isAuth }
  },
}
</script>

<style lang="postcss" scoped>
.profile-page {
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
