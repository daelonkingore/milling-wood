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
                    We always have a variety of wood slabs and rounds availabe. 
                    <br>Contact us for more information, and visit our 
                    <a href="https://www.facebook.com/p/Milling-By-Darrell-61576174751276/" target="_blank" rel="noopener noreferrer">
                        Facebook 
                    </a>
                    to see some of our current stock.
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