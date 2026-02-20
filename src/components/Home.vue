<script setup>
    import CarouselElem from './CarouselElem.vue'
    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });
</script>

<template>
    <v-container>
        <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color">MILLING BY DARRELL</h1>
        <CarouselElem></CarouselElem>
        <v-card flat color="transparent">
            <v-card-text class="p-container p-text" :class="mobile ? 'p-text-size-sm' : 'p-text-size-lg'" >
                Welcome to Milling By Darrell's showcase site! 
                <br><br>
                Here you can find information on 
                <router-link to="/services" >
                    Milling Services, 
                </router-link>
                or see some examples of 
                <router-link to="/wood" >
                    wood slabs and rounds 
                </router-link>
                for your next woodworking project! 
                <br><br>
                <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank" rel="noopener noreferrer"> <!-- https://www.facebook.com/p/Milling-By-Darrell-61576174751276/ -->
                    <b>Visit My Marketplace Listings</b>
                </a>
                to see more recent examples of my stock.
                <br><br>Find out how to contact me
                <router-link to="/contacts" >
                    here.
                </router-link>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
    .v-btn {
        background-color: transparent;
    }

    .main-header {
        letter-spacing: 7px;
        font-size: 3.8rem;
        font-weight: 650;
    }

    .main-header-small {
        letter-spacing: 3px;
        font-size: 1.2rem;
        font-weight: 650;
    }

    .header-color {
        background-color: #5a420f;
        border-radius: 15px;
        padding: 20px;
    }

    .p-text {
        padding-top: 15px;
        width: 85%;
    }

    .p-text-size-sm {
        width: 100%;
    }
</style>