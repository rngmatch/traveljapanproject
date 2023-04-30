<template>
  <div class="accommodations">
    <h1>6 Accommodations to stay at in Japan</h1>
    <ul>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="" alt="Accommodation Image" />
          </div>
          <div class="accommodation-info">
            <h2>Accommodation Name1</h2>
            <p>Location</p>
            <p>Price per night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="" alt="Accommodation Image" />
          </div>
          <div class="accommodation-info">
            <h2>Accommodation Name2</h2>
            <p>Location</p>
            <p>Price per night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="" alt="Accommodation Image" />
          </div>
          <div class="accommodation-info">
            <h2>Accommodation Name3</h2>
            <p>Location</p>
            <p>Price per night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="" alt="Accommodation Image" />
          </div>
          <div class="accommodation-info">
            <h2>Accommodation Name4</h2>
            <p>Location</p>
            <p>Price per night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="" alt="Accommodation Image" />
          </div>
          <div class="accommodation-info">
            <h2>Accommodation Name5</h2>
            <p>Location</p>
            <p>Price per night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="" alt="Accommodation Image" />
          </div>
          <div class="accommodation-info">
            <h2>Accommodation Name6</h2>
            <p>Location</p>
            <p>Price per night</p>
          </div>
        </div>
      </li>
      <!-- Repeat the above code block for each accommodation -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AccommodationsPage',
}
</script>

<style lang="postcss" scoped>
.accommodations {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #617be1;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.accommodation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.accommodation-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.accommodation-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.accommodation-info {
  padding: 1rem;
  text-align: center;
}
</style>
