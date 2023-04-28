<template>
    <div class="itinerary-page">
      <h1>Your Itinerary</h1>
      <!-- Add itinerary form and/or saved itinerary view here -->
    </div>
  </template>
  <script>
  export default {
    name: 'ItineraryPage',
  };
  </script>
  <style lang="postcss" scoped>
  .itinerary-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to bottom right, #5b73d6, #3f339a, #0e094e, #250e52);
    @apply text-yellow-600;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  </style>