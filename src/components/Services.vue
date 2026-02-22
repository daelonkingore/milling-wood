<script setup>
    // images at top showing milling
    import ImageWithText  from './ImageWithText.vue';

    import milling1 from '@/assets/working/milling1.jpg'
    import milling2 from '@/assets/working/milling2.jpg'
    import milling3 from '@/assets/working/milling3.jpg'

    // textbox background images
    import backgroundImg1 from '@/assets/background-imgs/woodRound1-2.png'
    import backgroundImg2 from '@/assets/background-imgs/woodRound2-2.png'
    import backgroundImg3 from '@/assets/background-imgs/woodRound4.png'

    // images next to text boxes
    import menWorking3 from '@/assets/people/men-working3.jpg'
    import woodSlabsTrailer from '@/assets/wood-slabs/slabs_on_trailer_chainsaw.jpg'
    import slabsOnMill from '@/assets/wood-slabs/slabs-on-mill.jpg'

    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });
</script>

<template>
    <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color mb-8">LET ME MILL FOR YOU</h1>
    <div>
        <v-row class="services-pics-row">
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" :src=milling1 eager />
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center">
                <v-img cover rounded class="working-img" :src=milling3 eager />
            </v-col>
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" :src=milling2 eager />
            </v-col>
        </v-row>

        <div class="p-container">
            <p :class="mobile ? 'p-text-size-sm' : 'p-text-size-lg'" class="p-text">
                Have a downed tree you don't know what to do with?
                <br>Need custom milling for your project?
                <br><br>Slabs, rounds, whatever you need, I can cut it!<br><br>
                Bring your wood to me or let me come to you, either way, that log doesn't stand a chance against my saws!
            </p>
        </div>

        <div>
            <h1 :class="mobile ? 'h2-subheading pb-4' : 'pb-12'">What can I do for you?</h1>
        </div>

        <v-container :class="mobile ? 'v-text-small' : 'easy-to-see'">
            <ImageWithText
                :imageUrl=slabsOnMill
                :imageLeft="false"
            >
                <b>Milling</b>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                                <b>Pricing</b> - Based on log width
                        </v-col>
                        <v-col cols="4" md="4">
                            25" or less<br><b>$75</b>
                        </v-col>
                        <v-col cols="4" md="4">
                            Between 25"-45"<br><b>$100</b>
                        </v-col>
                        <v-col cols="4" md="4">
                            45" or more<br><b>$125</b>
                        </v-col>
                        <v-col cols="12">
                            <b>2 hour</b> minimum. <b>$100</b> blade replacement for the chainsaw and <b>$30</b> for the at home stationary saw blade.
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                                <b>Dimensions</b>
                        </v-col>
                        <v-col cols="12">
                            My stationary mill can handle logs up to <b>36"</b> wide, and my portable saws handle up to <b>51"</b> wide!
                        </v-col>
                    </v-row>
                </v-container>
            </ImageWithText>

            <ImageWithText
                :imageUrl=woodSlabsTrailer
                :imageLeft="true"
            >
                <b>My Travel Limits</b>
                <v-container>
                    I will travel to you, but I can only reach so far.
                    <br><br><b>If the job is outside of the Springfield, Ozark, or Nixa MO area</b>:
                    <br>Travel expenses are added based on gas and time taken.
                    <br><br><b>If travel time is longer than 2 hours</b>:
                    <br>I likely won't make the trip, but feel free to ask!
                </v-container>
            </ImageWithText>

            <ImageWithText
                :imageUrl=menWorking3
                :imageLeft="false"
            >
                <b>Frequently Asked Questions</b>
                <v-container>
                    <b>Will you cut the tree down before milling it?</b>
                    <br>My passion is in milling, so <b>we do not offer tree felling services.</b>
                    <br><br><b>Do you sand or treat the wood?</b>
                    <br>I only offer raw lumber and milling services. I do not sand, stain, or treat my wood in any way.
                    Part of the fun is doing it yourself!
                </v-container>
            </ImageWithText>
        </v-container>
    </div>
</template>

<style scoped>
.h2-subheading {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
}

.pricing-border {
    border: black 1px solid;
}

.services-img {
  border-radius: 15px;
  overflow: hidden;
  max-width: 600px;
}

.flex-and-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-container {
    max-width: 1400px;
}

.v-card {
    border-radius: 15px;
    background-color: rgba(87, 109, 87, 0.3); /* rgba(116, 111, 111, 0.3); */
    height: 435px;
    width: 100%;
    max-width: 600px;
}

.v-card-text {
    height: 90%;
    overflow-y: auto;
}

.services-pics-row {
    padding-right: 20px;
    padding-left: 20px;
}

.working-img {
    max-height: 400px;
}
</style>