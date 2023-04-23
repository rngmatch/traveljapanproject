<template>
  <div class="home-page">
    <header>
      <!-- Add header content here -->
    </header>
    <main>
      <img src="@/assets/japan.jpg" alt="Travel in Japan" class="hero-image">
      <h1 class="title">Welcome to Travel Japan</h1>
      <p class="subtitle">Discover the beauty and culture of Japan.</p>
      <nav>
        <ul>
          <li><router-link to="/cities">Cities</router-link></li>
          <li><router-link to="/attractions">Attractions</router-link></li>
          <li><router-link to="/accommodations">Accommodations</router-link></li>
          <li><router-link to="/reviews">Reviews</router-link></li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'HomePage',
  components: {
    RouterLink,
  },
};

</script>

<style lang="postcss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #5b73d6, #3f339a, #0e094e, #250e52);
}

.hero-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
}

.title {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 2rem;
  margin-bottom: 2rem;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 1rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #ccc;
}
</style>
