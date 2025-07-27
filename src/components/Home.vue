<script setup>
import CarouselElem from './CarouselElem.vue'
import Description from './Description.vue'
import Wood from './Wood.vue'
import Services from './Services.vue'
import Contacts from './Contacts.vue'
import Gallery from './Gallery.vue'
</script>

<!-- TODO: Create a Home page and reduce size of this page, we're turning this single page applicaiton to a multi! Components will have their own Routes -->

<template>
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