<script setup>
    import Gallery from './Gallery.vue'
    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });
</script>

<template>
    <v-container>
        <h2 :class="mobile ? 'pt-2' : 'loud-header'">HAVE YOU SEEN MY WOOD?</h2>
        <v-card flat color="transparent">
            <v-card-text class="p-container p-text" :class="mobile ? 'p-text-size-sm' : 'p-text-size-lg'">
                    I always have a variety of wood slabs and rounds available. 
                    <br>Contact me for more information, and visit 
                    <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank" rel="noopener noreferrer"> <!-- https://www.facebook.com/p/Milling-By-Darrell-61576174751276/ -->
                        <b>Visit My Marketplace Listings</b>
                    </a>
                    to see some current stock.
            </v-card-text>
        </v-card>
    </v-container>
    <Gallery></Gallery>
</template>

<style scoped>
.loud-header {
    margin-bottom: 0;
}
</style>