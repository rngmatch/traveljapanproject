<template>
  <form class="registration-form" @submit.prevent="registerUser">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="bg-green-500 px-4 py-2">Register</button>
  </form>
</template>

<script>
//import { ref } from 'vue'
//import { useRouter } from 'vue-router'
//import { useAuth } from '@/composables/useAuth'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    registerUser() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // User registered successfully
          this.$router.push({
            name: 'LoginPage',
            query: { redirect: '/profile' },
          })
        })
        .catch((error) => {
          // Handle errors here, e.g. display an error message
          console.log(error.message)
        })
    },
  },
}
</script>

<style lang="postcss" scoped>
.registration-form {
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
