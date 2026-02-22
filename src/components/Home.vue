<script setup>
    import { useDisplay } from 'vuetify';
    import { ref } from 'vue';
    import HeroCarousel  from './HeroCarousel.vue';
    import ImageWithText  from './ImageWithText.vue';
    import slabsOnMill from '@/assets/wood-slabs/slabs_on_mill.jpg'
    
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });

    const heroSlides = [
  {
    imageUrl: slabsOnMill,
    title: "Let's Mill Some Wood",
    subtitle: "Milling across Southern Missouri",
    buttonText: "Milling Services",
    to: "/services",
  },
  {
    imageUrl: "https://res.cloudinary.com/dubulxjtb/image/upload/v1770526421/silverMaple_harnyr.jpg",
    title: "Wood Slabs or Rounds",
    subtitle: "Get ready for your next project",
    buttonText: "Check Out My Wood",
    to: "/wood",
  },
  {
    imageUrl: "https://res.cloudinary.com/dubulxjtb/image/upload/v1770529906/wood-rounds/gcxyhe8tgp1ni7egvzoj.jpg",
    title: "Contact Me",
    subtitle: "Send me a message to learn more",
    buttonText: "Contact",
    to: "/contacts",
  },
]
</script>

<template>
    <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color">MILLING BY DARRELL</h1>
    <v-container fill-height fluid :class="mobile ? 'v-text-small' : 'easy-to-see'">
        <v-row justify-center align-center>
            <HeroCarousel :heroes="heroSlides" />
        </v-row>
        <ImageWithText style="margin-top: 15px;"
            imageUrl="https://res.cloudinary.com/dubulxjtb/image/upload/v1770526415/wood_slabs2_i7vfqf.jpg"
            :imageLeft="true"
        >
            Milling By Darrell is a small scale milling business in the Christian County area.
            <br><br>
            What started as a passionate hobby quickly turned into a passionate business. 
            Fueled by a love of chainsaws and the smell of fresh cut wood, Darrell is dedicated to his craft.
            <br><br>
                Here you can find information on 
            <router-link to='/services' >
                Milling Services, 
            </router-link>
            or see some examples of 
            <router-link to='/wood' >
                wood slabs and rounds 
            </router-link>
            for your next woodworking project! 
            <br><br>
            <a href='https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh' target='_blank' rel='noopener noreferrer'>
                <b>Visit Marketplace Listings</b>
            </a>
            to see more what I have to offer.
        </ImageWithText>
        <ImageWithText
            imageUrl="https://res.cloudinary.com/dubulxjtb/image/upload/v1770526388/slabs-against-house_vrnvte.jpg"
            :imageLeft="false"
        >
            If you need a slab of wood, wood round, mantelpiece, or post, I will cut it.
            <br><br>
            If you need a fallen tree removed, I will take it.
            <br><br>
            If you need a log milled to size, I will mill it.
        </ImageWithText>
    </v-container>
</template>

<style scoped>
    .header-color {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    .p-card {
        background-color: rgba(104, 63, 22, 0.6);
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 10px;
        border-radius: 15px;
    }

    .p-card-lg {
        width: 85%;
    }

    .p-card-sm {
        width: 100%;
    }

    .v-container {
        margin-bottom: 5px;
        padding-top: 12px;
    }
    .v-btn {
        background-color: transparent;
    }

    .p-text {
        padding-top: 15px;
        width: 85%;
        margin-bottom: 0px;
        margin-top:15px;
    }

    .p-text-size-sm {
        width: 100%;
    }

    /* MOBILE */
    @media (max-width: 960px) {
        .main-header-small {
            letter-spacing: 3px;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
</style>