<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'LoginPage',
  setup() {
    const email = ref('')
    const password = ref('')

    const router = useRouter()
    const route = useRoute()

    const logUserIn = async () => {
      const auth = getAuth()
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        if (route.query?.redirect) {
          router.push(route.query.redirect)
        } else {
          router.push({ name: 'Home' })
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    return {
      email,
      password,
      logUserIn,
    }
  },
}
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="bg-green-500 px-4 py-2">Log in</button>
    <router-link :to="{ name: 'RegistrationPage' }">Registration</router-link>
  </form>
</template>

<style lang="postcss" scoped>
.login-form {
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
  @apply text-yellow-600 rounded-md text-xl shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl font-bold ring-1 ring-slate-300;
  }
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>
