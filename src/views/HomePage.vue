<template>
  <div class="home-page">
    <header>
      <!-- Add header content here -->
    </header>
    <main>
      <img src="@/assets/japan.jpg" alt="Travel in Japan" class="hero-image" />
      <h1 class="title">{{ greeting }}</h1>
      <p class="subtitle">{{ description }}</p>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Travel Japan',
    }
  },
  computed: {
    greeting() {
      return `Welcome to ${this.name}`
    },
    description() {
      return 'Discover the beauty and culture of Japan.'
    },
  },
}
</script>

<style lang="postcss" scoped>
.home-page {
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

  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
}

.subtitle {
  font-size: 2rem;
  margin-bottom: 2rem;
  @apply text-yellow-400;

  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
}
</style>
