<script setup>
    // images at bottom
    import bugCube from '@/assets/wood-slabs/bug_cube.jpg'
    import bigWood from '@/assets/people/milling-big-wood.jpg'
    import slabsOnMill from '@/assets/wood-slabs/slabs_on_mill.jpg'
    
    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });
</script>

<template>
    <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color">LET'S TALK WOOD</h1>
    <div>
        <div class="p-container p-text" :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'" >
            <p>
                Text or email to set an appointment, ask a question, or to visit my location and see what I have to offer. 
                I usually have my current stock of wood slabs and rounds available on Facebook.
            </p>
            <p class="bordered-text">
                Text: <b>(417)360-2260</b>
                <br>Email: <b>millingbydarrell@gmail.com</b>
                <br>
                <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank" rel="noopener noreferrer">
                    <b>Visit My Marketplace Listings</b>
                </a> 
            </p>
            <p>
                I am based in <b>Ozark, Missouri</b>, so if you live in Southern Missouri or Northern Arkansas and need wood milled, a fallen tree gone, or want to buy
                a wood slab at an affordable price, I'm your guy! 
                <br><br>I mainly operate in the towns surrounding Ozark, including Sparta, Nixa, Springfield, Republic, Branson, Willard, and more.
            </p>
            <br>
            <p>
                <br>Check out my  
                <a href="https://www.youtube.com/@Millingbydarrell" target="_blank" rel="noopener noreferrer">
                    <b>Youtube</b>
                </a> 
                to see me in action, and 
                <br><a href="https://www.facebook.com/p/Milling-By-Darrell-61576174751276/" target="_blank" rel="noopener noreferrer">
                    <b>Visit My Facebook</b>
                </a>
                for timelapses of my work, and more!
                <br>
            </p>
        </div>
    </div>
    <v-row class="contacts-pics-row">
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" :src=bugCube eager />
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center">
                <v-img cover rounded class="working-img" :src=bigWood eager />
            </v-col>
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" :src=slabsOnMill eager />
            </v-col>
        </v-row>
</template>

<style scoped>
.bordered-text {
    border: rgb(187, 187, 187) solid 2px;
    border-radius: 15px;
    display: inline-block;
    padding: 15px;
    margin: 10px;
}

.contacts-pics-row {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    max-width: 90%;
    margin: 0 auto;
}
</style>