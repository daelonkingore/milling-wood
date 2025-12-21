<script setup>
import 'vue3-carousel/carousel.css'

// people
const peopleImgs = Object.values(
  import.meta.glob('@/assets/people/*.{jpg,png,jpeg,gif}', {
    eager: true,
    import: 'default'
  }).sort()
);

// submitted
const submittedImgs = Object.values(
  import.meta.glob('@/assets/submitted/*.{jpg,png,jpeg,gif}', {
    eager: true,
    import: 'default'
  }).sort()
);

// working
const workingImgs = Object.values(
  import.meta.glob('@/assets/working/*.{jpg,png,jpeg,gif}', {
    eager: true,
    import: 'default'
  }).sort()
);

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

// combine and randomize
var myImages = [...peopleImgs, ...submittedImgs, ...workingImgs];
shuffle(myImages);
</script>

<template>
  <div class="center-container carousel-color">
    <v-carousel id="gallery" show-arrows="hover" cycle hide-delimiters height="80vh">
      <v-carousel-item v-for="(image, i) in myImages" :key="i" :src="image" contain rounded></v-carousel-item>
    </v-carousel>
  </div>
</template>

<style scoped>
#gallery {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 18px;
}

.center-container {
  display: flex;
  justify-content: center;
}
</style>
