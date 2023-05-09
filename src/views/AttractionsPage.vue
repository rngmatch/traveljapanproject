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
            <p>
              The Tokyo SkyTree is a broadcasting and observation tower located
              in the Sumida district of Tokyo. It is the tallest tower in the
              world and the second-tallest structure in the world after the Burj
              Khalifa in Dubai. The Tokyo SkyTree offers stunning views of the
              city from its observation decks, which are located at heights of
              350 meters and 450 meters. In addition to its observation decks,
              the tower also features a restaurant, a gift shop, and other
              facilities for visitors to enjoy.
            </p>
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
            <p>
              The Tokyo Big Sight is a large convention center located in the
              Odaiba district of Tokyo, Japan. It is known for its unique
              architectural design, with four inverted pyramids forming the
              structure. The center hosts a variety of events and exhibitions
              throughout the year, including trade shows, conferences, and
              cultural events. Some of the most popular events held at Tokyo Big
              Sight include the Tokyo Motor Show, the Tokyo Game Show, and the
              AnimeJapan convention.
            </p>
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
            <p>
              Cosmo World is an amusement park located in the center of
              Yokohama's Minato Mirai district. It features a giant Ferris
              wheel, roller coasters, and other thrilling rides, as well as
              various carnival games and food stalls. With its stunning views of
              the surrounding area and fun attractions, it's a popular spot for
              visitors of all ages.
            </p>
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
            <p>Location: DiverCity Tokyo Plaza, Odaiba, Tokyo</p>
            <p>
              The RX-0 Unicorn Gundam is a full-scale statue of the popular
              mecha from the Gundam anime series. It stands at 19.7 meters tall
              and features a range of light and sound effects that are sure to
              delight fans of the franchise.
            </p>
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
            <p>
              Fushimi Inari Shrine is a famous Shinto shrine in southern Kyoto,
              known for its thousands of vermilion torii gates. The shrine sits
              at the base of Mount Inari, and visitors can hike through the
              torii gates up to the summit for a panoramic view of the city. The
              shrine is also famous for its fox statues, as foxes are believed
              to be the messengers of Inari, the god of fertility, agriculture,
              and prosperity.
            </p>
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
            <p>
              Fushimi Inari Shrine is a famous Shinto shrine located in southern
              Kyoto. The shrine is known for its thousands of bright orange
              torii gates that form a path up the mountain behind the main
              shrine. Visitors can walk through the torii gates and hike up the
              mountain for a stunning view of the city. The shrine is open
              year-round and admission is free.
            </p>
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
