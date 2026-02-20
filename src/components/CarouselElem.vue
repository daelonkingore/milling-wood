<script setup>
import { ref, onMounted } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const images = ref([])

onMounted(async () => {
  const [peopleRes, submittedRes, workingRes] = await Promise.all([
    fetch('/.netlify/functions/cloudinary-images?folder=people'),
    fetch('/.netlify/functions/cloudinary-images?folder=submitted'),
    fetch('/.netlify/functions/cloudinary-images?folder=working')
  ])

  const people = await peopleRes.json()
  const submitted = await submittedRes.json()
  const working = await workingRes.json()

  images.value = [...people, ...submitted, ...working].map(img => ({
    ...img,
    orientation: null
  }))

  images.value.forEach(img => {
    const testImg = new Image()
    testImg.src = img.url
    testImg.onload = () => {
      img.orientation =
        testImg.naturalWidth > testImg.naturalHeight
          ? 'landscape'
          : 'portrait'
    }
  })

  shuffle(images.value)

  if (images.value.length) {
    const img = new Image()
    img.src = optimize(images.value[0].url)
  }
})

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function optimize(url, width = 1200) {
  return url.replace(
    '/upload/',
    `/upload/f_auto,q_auto,w_${width}/`
  )
}

const config = {
  itemsToShow: 1.9,
  gap: 0,
  wrapAround: true,
  autoplay: 4000,
  pauseAutoplayOnHover: true,
  snapAlign: 'center',
}
</script>

<template>
  <Carousel v-bind="config" class="carousel-size">
    <Slide v-for="image in images" :key="image.url" :class="`slide-${image.orientation}`">
      <v-img
        :src="optimize(image.url)"
        :lazy-src="optimize(image.url, 50)"
        contain
        class="carousel-image"
      />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel-size {
  max-width: 850px;
  margin: 0 auto;
  margin-top: 8px;
}

.center-container {
  display: flex;
  justify-content: center;
}

.carousel__slide {
  transition: transform .5s ease-in-out, opacity 0.45s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  z-index: 1;
  transform: scale(0.76);
}

.carousel__slide--active {
  opacity: 1;
  z-index: 10;
  transform: scale(1);
}

/* Landscape active boost */
.carousel__slide--active.slide-landscape .carousel-image {
  transform: scale(1.5);
}

/* Portrait active slight boost */
.carousel__slide--active.slide-portrait .carousel-image {
  transform: scale(1);
}

/* Immediately adjacent slides */
.carousel__slide--prev,
.carousel__slide--next {
  transform: scale(0.75);
  opacity: 0.75;
  z-index: 5;
  filter: brightness(0.85);
}

.carousel-image {
  width: 100%;
  border-radius: 16px;
}

.carousel__slide:not(.carousel__slide--active):not(.carousel__slide--prev):not(.carousel__slide--next) {
  opacity: 0.4;
}

.carousel__viewport {
  overflow-x: visible !important;
  overflow-y: hidden !important;
}
</style>
