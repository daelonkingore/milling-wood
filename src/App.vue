<script setup>
import {ref} from 'vue'
import CButton from './components/CButton.vue'
import Navigation from './components/Navigation.vue'
import Carousel from './components/Carousel.vue'
import Description from './components/Description.vue'
import Wood from './components/Wood.vue'
import Services from './components/Services.vue'

const count = ref(0)
const countUp = () => {
  count.value++;
}
</script>

<template>
  <div>
    <Navigation></Navigation>
    <h1>Milling By Darrell</h1>
    <Carousel></Carousel>
    <Description></Description>
    <Wood></Wood>
    <Services></Services>
  </div>
</template>

<style scoped>
</style>
