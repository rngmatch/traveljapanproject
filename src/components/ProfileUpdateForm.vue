<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
}
</script>

<template>
  <div class="profile-update-form">
    <h2>Update Your Profile</h2>
    <form>
      <label for="name">Name:</label>
      <input id="name" v-model="name" type="text" />

      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" />

      <label for="password">Password:</label>
      <input id="password" v-model="password" type="password" />

      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<style scoped>
.profile-update-form {
  margin: 2rem;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
label {
  margin-bottom: 0.5rem;
}
input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
