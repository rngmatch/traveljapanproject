<template>
  <div v-if="isAuthenticated" class="itinerary-page">
    <h1>Your Itinerary</h1>
    <form @submit.prevent="saveItinerary">
      <label for="destination">Destination:</label>
      <input id="destination" v-model="destination" type="text" />
      <label for="startDate">Start Date:</label>
      <input id="startDate" v-model="startDate" type="date" />
      <label for="endDate">End Date:</label>
      <input id="endDate" v-model="endDate" type="date" />
      <label for="activities">Activities:</label>
      <textarea id="activities" v-model="activities"></textarea>
      <button type="submit">Save Itinerary</button>
    </form>
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
      startDate: '',
      endDate: '',
      activities: '',
    })

    function saveItinerary() {
      // Code to save itinerary goes here
      console.log(
        state.destination,
        state.startDate,
        state.endDate,
        state.activities
      )
    }

    return { state, saveItinerary }
  },
  computed: {
    isAuthenticated() {
      return isAuthenticated.value
    },
  },
}
</script>

<style lang="postcss" scoped>
.itinerary-page {
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
input[type='date'],
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

button[type='submit']:hover {
  background-color: #34495e;
}
</style>
