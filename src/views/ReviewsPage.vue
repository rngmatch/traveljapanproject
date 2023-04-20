<template>
  <div class="reviews-page">
    <h1>Customer Reviews</h1>
    <div class="reviews-container">
      <div class="review">
        <h2>Review Title</h2>
        <p>Enter review here.</p>
        <p class="reviewer-name">- Reviewer Name</p>
      </div>
      <div class="review">
        <h2>Another Review Title</h2>
        <p>Enter review here.</p>
        <p class="reviewer-name">- Another Reviewer Name</p>
      </div>
      <div class="review">
        <h2>Yet Another Review Title</h2>
        <p>Enter review here.</p>
        <p class="reviewer-name">- Yet Another Reviewer Name</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsPage",
};
</script>

<style lang="postcss" scoped>
.reviews-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #5ad1cf;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.reviews-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  width: 100%;
}

.review {
  margin: 2rem;
  padding: 2rem;
  background-color: #2e81c5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.review h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.review p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.reviewer-name {
  font-style: italic;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>