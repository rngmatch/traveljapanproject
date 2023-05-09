<template>
  <div class="attractions">
    <h1>6 Attractions to see in Japan</h1>
    <ul>
      <li>
        <div class="attractions">
          <div class="attractions-image">
            <img src="@/assets/Att01.jpg" alt="Tokyo SkyTree" />
          </div>
          <div class="attractions-info">
            <h2>Tokyo SkyTree</h2>
            <p>Location: Tokyo</p>
            <p>~Pending~</p>
          </div>
        </div>
      </li>
      <li>
        <div class="attractions">
          <div class="attractions-image">
            <img src="@/assets/Att02.jpg" alt="Tokyo Big Sight" />
          </div>
          <div class="attractions-info">
            <h2>Tokyo Big Sight</h2>
            <p>Location: Odaiba, Tokyo</p>
            <p>~Pending~</p>
          </div>
        </div>
      </li>
      <li>
        <div class="attractions">
          <div class="attractions-image">
            <img src="@/assets/Att03.jpg" alt="Cosmo World" />
          </div>
          <div class="attractions-info">
            <h2>Cosmo World</h2>
            <p>Location: Yokohama</p>
            <p>~Pending~</p>
          </div>
        </div>
      </li>
      <li>
        <div class="attractions">
          <div class="attractions-image">
            <img src="@/assets/Att04.jpg" alt="RX-0 Unicorn Gundam" />
          </div>
          <div class="attractions-info">
            <h2>RX-0 Unicorn Gundam</h2>
            <p>Location: Odaiba, Tokyo</p>
            <p>~Pending~</p>
          </div>
        </div>
      </li>
      <li>
        <div class="attractions">
          <div class="attractions-image">
            <img src="@/assets/Att05.jpg" alt="Fushimi Inari Shrine" />
          </div>
          <div class="attractions-info">
            <h2>Fushimi Inari Shrine</h2>
            <p>Location: Kyoto</p>
            <p>~Pending~</p>
          </div>
        </div>
      </li>
      <li>
        <div class="attractions">
          <div class="attractions-image">
            <img src="@/assets/Att06.jpg" alt="Rainbow Bridge" />
          </div>
          <div class="attractions-info">
            <h2>Rainbow Bridge</h2>
            <p>Location: Odaiba, Tokyo</p>
            <p>~Pending~</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AttractionsPage',
}
</script>

<style lang="postcss" scoped>
.attractions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #61e1b0;
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
