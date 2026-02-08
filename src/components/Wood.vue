<script setup>
    import Gallery from './Gallery.vue'
    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });
</script>

<template>
    <v-container>
        <h2 :class="mobile ? 'pt-2' : 'loud-header'">HAVE YOU SEEN MY WOOD?</h2>
        <v-card flat color="transparent">
            <v-card-text class="p-container p-text" :class="mobile ? 'p-text-size-sm p-text-bigger-width' : 'p-text-size-lg'">
                    I always have a variety of wood slabs and rounds available. 
                    <br>
                    <router-link to="/contacts" >
                        Contact me 
                    </router-link>
                    for more information, and 
                    <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank" rel="noopener noreferrer"> <!-- https://www.facebook.com/p/Milling-By-Darrell-61576174751276/ -->
                        <b>Visit My Marketplace Listings</b>
                    </a>
                    to see some current stock.
                    <div :class="mobile ? 'even-smaller-text' : 'smaller-text'">
                        <br>Choose <b>"Customer Creations"</b> from the dropdown below to see what customers have done with our wood!
                        <br>If you want your creations to be included, simply take a good picture and 
                        <router-link to="/contacts" >
                            text or email 
                        </router-link> it to us.
                    </div>
            </v-card-text>
        </v-card>
    </v-container>
    <Gallery :can-delete="false"></Gallery>
</template>

<style scoped>
.smaller-text {
    font-size: 18px;
}

.even-smaller-text {
  font-size: 14px;
}

.loud-header {
    margin-bottom: 0;
}

.p-text-bigger-width {
    width: 100%;
}
</style>