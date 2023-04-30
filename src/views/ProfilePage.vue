<template>
  <div class="profile-page">
    <h1>Your Profile</h1>
    <!-- Add profile update form and/or travel history view here -->
  </div>
</template>
<script>
export default {
  name: 'ProfilePage',
}
</script>
<style lang="postcss" scoped>
.profile-page {
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
</style>
