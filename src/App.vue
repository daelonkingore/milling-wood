<script setup>
import Navigation from './components/Navigation.vue'
import CarouselElem from './components/CarouselElem.vue'
import Description from './components/Description.vue'
import Wood from './components/Wood.vue'
import Services from './components/Services.vue'
import Contacts from './components/Contacts.vue'
import Gallery from './components/Gallery.vue'
</script>

<template>
  <Navigation id="top">
    <div>

      <h1>Milling By Darrell</h1><br>

      <Gallery></Gallery>

      <div class="bottom-spacing">
        <CarouselElem></CarouselElem>
      </div>

      <div id="services" class="bottom-spacing">
      <Services></Services>
      </div>
      
      <div id="wood" class="bottom-spacing">
        <Wood></Wood>
      </div>
      
      <div id="desc" class="bottom-spacing">
      <Description></Description>
      </div>

      <div id="contacts" class="bottom-spacing">
        <Contacts></Contacts>
      </div>
      <a id="top-link" href="#top">Back to Top</a>
    </div>
  </Navigation>
</template>

<style scoped>
.bottom-spacing {
  margin-bottom: 100px;
}

#top-link {
  color: #ddd;
}

#top-link:hover {
  color: #ddd;
  background-color: #5b542d;
}
</style>
