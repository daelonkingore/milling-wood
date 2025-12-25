<script setup>
    // images at bottom
    import bugCube from '@/assets/wood-slabs/bug_cube.jpg'
    import bigWood from '@/assets/people/milling-big-wood.jpg'
    import slabsOnMill from '@/assets/wood-slabs/slabs_on_mill.jpg'
    
    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });
</script>

<template>
    <div>
        <h2 :class="mobile ? 'pt-6' : 'loud-header'">Let's Talk!</h2>
        <div class="p-container p-text" :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'" >
            <p>
                Text or email to set an appointment, ask a question,
                or to visit my location and see what I have to offer! 
                <br>I am based in <b>Ozark, Missouri</b>, so if you live in Southern Missouri or Northern Arkansas, you're in luck!
            </p>
            <br>
            <p class="bordered-text">
                Text us: <b>(417)360-2260</b>
                <br>Email: <b>millingbydarrell@gmail.com</b>
            </p>
            <p>
                <br>Don't forget, 
                <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank" rel="noopener noreferrer">
                    <b>Visit My Marketplace Listings</b>
                </a> 
                to see my most recent stock of wood slabs and rounds. 
                <br><br><a href="https://www.facebook.com/p/Milling-By-Darrell-61576174751276/" target="_blank" rel="noopener noreferrer">
                    <b>Visit My Facebook</b>
                </a>
                for timelapses of my work, and more!
                <br>
            </p>
        </div>
    </div>
    <v-row class="contacts-pics-row">
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" :src=bugCube />
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center">
                <v-img cover rounded class="working-img" :src=bigWood />
            </v-col>
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" :src=slabsOnMill />
            </v-col>
        </v-row>
</template>

<style scoped>
.bordered-text {
    border: rgb(255, 255, 255) solid 2px;
    border-radius: 15px;
    display: inline-block;
    padding: 10px;
}

.contacts-pics-row {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    max-width: 90%;
    margin: 0 auto;
}
</style>