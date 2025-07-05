<script setup>
import Navigation from './components/Navigation.vue'
import CarouselElem from './components/CarouselElem.vue'
import Description from './components/Description.vue'
import Wood from './components/Wood.vue'
import Services from './components/Services.vue'
import Contacts from './components/Contacts.vue'
</script>

<template>
  <div>
    <Navigation></Navigation>

    <h1>Milling By Darrell</h1>

    <div class="bottom-spacing">
      <CarouselElem></CarouselElem>
    </div>

    <div class="bottom-spacing">
    <Services></Services>
    </div>
    
    <div class="bottom-spacing">
      <Wood></Wood>
    </div>
    
    <div class="bottom-spacing">
    <Description></Description>
    </div>

    <div class="bottom-spacing">
      <Contacts></Contacts>
    </div>
  </div>
</template>

<style scoped>
.bottom-spacing {
  margin-bottom: 100px;
}
</style>
