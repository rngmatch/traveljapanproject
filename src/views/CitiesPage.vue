<template>
  <div class="cities">
    <h1>6 Cities to visit in Japan</h1>
    <ul>
      <li>
        <div class="cities">
          <div class="cities-image">
            <img src="@/assets/Tokyo.jpg" alt="Tokyo" />
          </div>
          <div class="cities-info">
            <h2>Location: Tokyo</h2>
            <p>
              Tokyo is the capital of Japan and one of the most populous cities
              in the world. It is known for its bustling streets, vibrant
              nightlife, and delicious cuisine.
            </p>
            <p>
              Some of the top attractions in Tokyo include the Tokyo Tower,
              Sensoji Temple, and the Shibuya Crossing. Visitors can also enjoy
              shopping in the city's many department stores and boutiques, or
              exploring the beautiful parks and gardens.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="cities">
          <div class="cities-image">
            <img src="@/assets/Odaiba.jpg" alt="Odaiba" />
          </div>
          <div class="cities-info">
            <h2>Location: Odaiba</h2>
            <p>
              Odaiba is a man-made island located in Tokyo Bay, Japan. It was
              originally built in the 1850s for defensive purposes, but has
              since been redeveloped into a popular shopping and entertainment
              district. Visitors can enjoy attractions such as the Fuji TV
              Building, the Odaiba Gundam Statue, and the Palette Town Ferris
              Wheel. Odaiba is also home to a number of museums, including the
              National Museum of Emerging Science and Innovation and the
              Miraikan, a museum focused on the latest scientific discoveries
              and technology.
            </p>
            <p>
              For those interested in shopping, Odaiba has a number of malls,
              including the Aqua City Odaiba, the Decks Tokyo Beach, and the
              Venus Fort. The area is also home to a number of restaurants and
              cafes, as well as the Oedo Onsen Monogatari, a hot springs theme
              park.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="cities">
          <div class="cities-image">
            <img src="@/assets/Akihabara.jpg" alt="Akihabara" />
          </div>
          <div class="cities-info">
            <h2>Location: Akihabara</h2>
            <p>
              Akihabara, also known as "Electric Town", is a district in central
              Tokyo that is famous for its many electronics shops and
              anime/manga merchandise stores. It's a popular destination for
              tech enthusiasts, gamers, and otaku (people who are obsessed with
              anime, manga, and video games).
            </p>
            <p>
              Aside from the shopping, Akihabara is also home to many arcades,
              maid cafes, and other unique attractions that cater to the
              interests of its visitors. If you're into tech or anime/manga
              culture, Akihabara is definitely worth a visit!
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="cities">
          <div class="cities-image">
            <img src="@/assets/Kyoto.jpg" alt="Kyoto" />
          </div>
          <div class="cities-info">
            <h2>Location: Kyoto</h2>
            <p>
              Kyoto is a city located in the central part of the island of
              Honshu in Japan. It has a rich history and was the capital of
              Japan for more than a thousand years. It is known for its
              beautiful temples, gardens, and traditional architecture.
            </p>
            <p>
              Some of the must-see attractions in Kyoto include the Fushimi
              Inari Shrine, Kinkaku-ji (the Golden Pavilion), Kiyomizu-dera
              Temple, and the Arashiyama Bamboo Grove. Kyoto is also famous for
              its food, including kaiseki (traditional multi-course meals),
              tofu, and matcha (powdered green tea).
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="cities">
          <div class="cities-image">
            <img src="@/assets/Nara.jpg" alt="Nara" />
          </div>
          <div class="cities-info">
            <h2>Location: Nara</h2>
            <p>
              Nara is famous for its stunning temples, shrines, and gardens.
              It's also home to the famous Todai-ji Temple, which houses a
              massive bronze Buddha statue.
            </p>
            <p>
              Visitors can also explore Nara Park, which is home to hundreds of
              wild deer that roam freely throughout the area. The park is a
              great place to relax, take a picnic, and enjoy the natural beauty
              of Japan.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="cities">
          <div class="cities-image">
            <img src="@/assets/Yokohama.jpg" alt="Yokohama" />
          </div>
          <div class="cities-info">
            <h2>Location: Yokohama</h2>
            <p>
              Yokohama is Japan's second largest city, located south of Tokyo on
              the east coast of the island of Honshu. It is a bustling port city
              with a rich history and many attractions, including the Yokohama
              Landmark Tower, the Yokohama Chinatown, and the Yamashita Park.
            </p>
            <p>
              Some popular things to do in Yokohama include visiting the
              Yokohama Museum of Art, exploring the historic district of
              Motomachi, and taking a stroll along the waterfront at Minato
              Mirai.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CitiesPage',
}
</script>

<style lang="postcss" scoped>
.cities {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #096df0;
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
