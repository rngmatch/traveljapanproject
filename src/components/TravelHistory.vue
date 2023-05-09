<script>
export default {
  data() {
    return {
      trips: [
        {
          destination: 'Tokyo, Japan',
          date: 'June 2019',
          notes: 'Visited the Tokyo, Osaka, and Yokohama.',
        },
        {
          destination: 'Tokyo, Japan',
          date: 'June 2018',
          notes: 'Visited the Tokyo Tower, Odiaba, and Yokohama.',
        },
        {
          destination: 'Tokyo, Japan',
          date: 'June 2017',
          notes: 'Visited the Tokyo, Kyoto, Nara, and Osaka.',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="travel-history">
    <h2>Your Travel History</h2>
    <ul>
      <li v-for="(trip, index) in trips" :key="index">
        <h3>{{ trip.destination }}</h3>
        <p>{{ trip.date }}</p>
        <p>{{ trip.notes }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.travel-history {
  margin: 2rem;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
li {
  margin-bottom: 2rem;
}
h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
p {
  margin: 0;
}
</style>
