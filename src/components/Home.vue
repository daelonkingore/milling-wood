<script setup>
import CarouselElem from './CarouselElem.vue'
import Description from './Description.vue'
import Wood from './Wood.vue'
import Services from './Services.vue'
import Contacts from './Contacts.vue'
import Gallery from './Gallery.vue'
</script>

<template>
    <h1>Milling By Darrell</h1><br>

    <div class="bottom-spacing">
        <Gallery></Gallery>
    </div>

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