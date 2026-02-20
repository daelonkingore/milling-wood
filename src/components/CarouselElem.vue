<script setup>
import { ref, onMounted, computed } from 'vue'

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

  images.value = [...people, ...submitted, ...working]

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

</script>

<template>
  <div class="center-container carousel-color carousel-size">
    <v-carousel
      v-if="images.length"
      :key="images.length"
      show-arrows="hover"
      cycle
      hide-delimiters
      height="60vh"
    >
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
      >
        <v-img
          :src="optimize(image.url)"
          :lazy-src="optimize(image.url, 50)"
          contain
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style scoped>
.carousel-size {
  max-width: 900px;
  margin: 0 auto;
  margin-top: 18px;
}

.center-container {
  display: flex;
  justify-content: center;
}
</style>
