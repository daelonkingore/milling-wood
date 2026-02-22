<script setup>
import ButtonWithImgOverlay from "@/components/ButtonWithImgOverlay.vue"

defineProps({
  heroes: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <v-carousel
    height="70vh"
    hide-delimiter-background
    show-arrows="hover"
    :interval="8000"
    cycle
  >
    <v-carousel-item
      v-for="(hero, index) in heroes"
      :key="index"
    >
      <ButtonWithImgOverlay
        :imageUrl="hero.imageUrl"
        :title="hero.title"
        :subtitle="hero.subtitle"
        :buttonText="hero.buttonText"
        :to="hero.to"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
:deep(.v-carousel) {
  width: 100vw;
}

.v-carousel {
    box-shadow: 0 4px 6px rgba(0, 0, 0, .2);
}
</style>