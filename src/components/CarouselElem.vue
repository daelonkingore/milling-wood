<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'

const imageFiles = import.meta.glob('../assets/people/*.{jpg,png,jpeg,gif}');
const myImages = Object.keys(imageFiles).map((key) => key.replace('..', 'src'));

console.log(myImages);

const currentSlide = ref(0)

const slideTo = (nextSlide) => (currentSlide.value = nextSlide)

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade',
  mouseDrag: false,
  touchDrag: false,
  height: 600,
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
}
</script>

<template>
  <div class="carousel-container">
    <div class="center-container">
      <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
        <Slide v-for="(image, index) in myImages" :key="index">
          <img :src="image" :alt="'Gallery Image ' + (index + 1)" class="gallery-image" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
      <Slide v-for="(image, index) in myImages" :key="index">
        <template #default="{ currentIndex, isActive }">
          <div
            :class="['thumbnail', { 'is-active': isActive }]"
            @click="slideTo(currentIndex)"
          >
            <img :src="image" alt="Thumbnail Image" class="thumbnail-image" />
          </div>
        </template>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>

.center-container {
  display: flex;
  justify-content: center;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

.gallery-image {
  border-radius: 16px;
  object-fit: contain;
}

.thumbnail-image {
  object-fit: cover;
}

#thumbnails {
  margin-top: 10px;
}

.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}
</style>
