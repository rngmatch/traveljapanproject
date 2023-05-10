<template>
  <div v-if="isAuthenticated" class="favorites-page">
    <h1>Your Favorites</h1>
    <form @submit.prevent="saveFavorite">
      <label for="destination">Destination:</label>
      <input id="destination" v-model="destination" type="text" />
      <label for="notes">Notes:</label>
      <textarea id="notes" v-model="notes"></textarea>
      <button type="submit">Save Favorite</button>
    </form>
    <div v-if="favorites.length > 0">
      <h2>Saved Favorites</h2>
      <ul>
        <li v-for="favorite in favorites" :key="favorite.id">
          <h3>{{ favorite.destination }}</h3>
          <p>{{ favorite.notes }}</p>
        </li>
      </ul>
    </div>
    <div v-else>No favorites saved yet.</div>
  </div>
  <div v-else>Please log in to access this page.</div>
</template>
<script>
import { useAuth } from '@/composables/useAuth'
import { reactive } from 'vue'

const { isAuthenticated } = useAuth()

export default {
  name: 'ProtectedPage',
  setup() {
    const state = reactive({
      destination: '',
      notes: '',
    })

    const favorites = [
      {
        id: 1,
        destination: 'New York City',
        notes: 'My favorite city to visit!',
      },
      { id: 2, destination: 'Paris', notes: 'The City of Love' },
      { id: 3, destination: 'Tokyo', notes: 'The city that never sleeps' },
    ]

    function saveFavorite() {
      // Code to save favorite goes here
      console.log(state.destination, state.notes)
    }

    return { state, favorites, saveFavorite }
  },
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

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

label {
  font-size: 1.2rem;
}

input[type='text'],
textarea {
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

button[type='submit'] {
  background-color: #2c3e50;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #333;
  font-size: 1.2rem;
}

li h3 {
  margin: 0 0 0.5rem 0;
}

@media screen and (min-width: 768px) {
  form {
    max-width: 500px;
  }

  li {
    max-width: 500px;
  }
}
</style>
