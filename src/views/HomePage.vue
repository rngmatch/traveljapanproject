<template>
  <div class="home-page">
    <header>
      <!-- Add header content here -->
    </header>
    <main>
      <img src="@/assets/japan.jpg" alt="Travel in Japan" class="hero-image">
      <h1 class="title">Welcome to Travel Japan</h1>
      <p class="subtitle">Discover the beauty and culture of Japan.</p>

    </main>
  </div>
</template>


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
  @apply text-yellow-400;
}

.subtitle {
  font-size: 2rem;
  margin-bottom: 2rem;
  @apply text-yellow-400;
}
</style>
