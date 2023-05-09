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
            <img src="" alt="cities Image" />
          </div>
          <div class="cities-info">
            <h2>Accommodation Name4</h2>
            <p>Location</p>
            <p>Price per night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="cities">
          <div class="cities-image">
            <img src="" alt="cities Image" />
          </div>
          <div class="cities-info">
            <h2>Accommodation Name5</h2>
            <p>Location</p>
            <p>Price per night</p>
          </div>
        </div>
      </li>
      <li>
        <div class="cities">
          <div class="cities-image">
            <img src="" alt="cities Image" />
          </div>
          <div class="cities-info">
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
