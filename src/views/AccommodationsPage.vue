<template>
  <div class="accommodations">
    <h1>6 Accommodations to stay at in Japan</h1>
    <ul>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="@/assets/Acc01.jpg" alt="Appartment in Tokyo" />
          </div>
          <div class="accommodation-info">
            <h2>Appartment in Tokyo</h2>
            <p>Location: Tokyo</p>
            <p>Price per night: $120 a night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="@/assets/Acc02.jpg" alt="Samurai House" />
          </div>
          <div class="accommodation-info">
            <h2>"Samurai House"</h2>
            <p>Location: Kyoto</p>
            <p>Price per night: $120 a night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="@/assets/Acc03.jpg" alt="Hilton Tokyo Odaiba" />
          </div>
          <div class="accommodation-info">
            <h2>Hilton Tokyo Odaiba</h2>
            <p>Location: Odaiba, Tokyo</p>
            <p>Price per night: $358 a night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="@/assets/Acc04.jpg" alt="Mimaru" />
          </div>
          <div class="accommodation-info">
            <h2>Mimaru</h2>
            <p>Location: Kyoto</p>
            <p>Price per night: $212 a night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img
              src="@/assets/Acc05.jpg"
              alt="Onyado Nono Namba Natural Hot Spring"
            />
          </div>
          <div class="accommodation-info">
            <h2>Onyado Nono Namba Natural Hot Spring</h2>
            <p>Location</p>
            <p>Price per night: $235 a night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="accommodation">
          <div class="accommodation-image">
            <img src="@/assets/Acc06.jpg" alt="The Gate Hotel Tokyo" />
          </div>
          <div class="accommodation-info">
            <h2>The Gate Hotel Tokyo</h2>
            <p>Location: Tokyo</p>
            <p>Price per night: $250 a night</p>
          </div>
        </div>
      </li>
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
