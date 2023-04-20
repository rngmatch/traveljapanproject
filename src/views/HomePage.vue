<template>
  <div class="home-page">
    <header>
      <!-- Add header content here -->
    </header>
    <main>
      <img src="@/assets/japan.jpg" alt="Travel in Japan" class="hero-image">
      <h1 class="title">Welcome to Travel Japan</h1>
      <p class="subtitle">Discover the beauty and culture of Japan with our expert travel guides.</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="postcss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: linear-gradient(to right, #99a3b9, #1d1a1d);
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
</style>
