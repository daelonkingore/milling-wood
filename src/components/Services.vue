<script setup>
    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });
</script>

<template>
    <div>
        <h2 :class="mobile ? 'pb-8 pt-6' : 'loud-header'">LET ME MILL FOR YOU</h2>
        <v-row class="services-pics-row">
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" src="milling-wood/src/assets/working/milling1.jpg" />
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center">
                <v-img cover rounded class="working-img" src="milling-wood/src/assets/working/milling3.jpg" />
            </v-col>
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" src="milling-wood/src/assets/working/milling2.jpg" />
            </v-col>
        </v-row>

        <div class="p-container">
            <p :class="mobile ? 'p-text-size-sm' : 'p-text-size-lg'" class="p-text">
                Have a downed tree you don't know what to do with?
                <br>Need custom milling for your project?
                <br><br>I can take care of it for you!<br><br>
                Bring your wood to me or let me come to your there, either way, that log doesn't stand a chance against my saws!
            </p>
        </div>

        <div>
            <h1 class="pb-12">What can I do for you?</h1>
        </div>

        <v-container>
            <v-row>
                <v-col cols="12" md="6" class="flex-and-center" order="1">
                    <v-card variant="outlined">
                        <v-img
                            src="milling-wood/src/assets/background-imgs/woodRound1-2.png"
                            gradient="to top right, rgba(100, 115, 100, .3), rgba(50, 50, 50, .4)"
                            height="435px"
                            cover
                        >
                            <v-card-title>Milling</v-card-title>
                            <v-card-text class="overflow-card">
                                <div class="easy-to-see">
                                    Slabs, rounds, whatever you need, I can cut it. I offer custom milling at my location or yours.
                                    <br><br><b>Dimensions</b>
                                    <br>At home, my stationary saw can handle logs up to 25" wide. My portable saws can handle logs and <b>51"</b> wide!
                                    <br><br><b>Pricing</b>
                                    <br><b>$75</b> an hour for logs <b>25" wide or less.</b>
                                    <br><b>$100</b> an hour for logs <b>25" ~ 45" wide.</b>
                                    <br><b>$125</b> an hour for logs <b>45" wide or more.</b>
                                    <br><b>2 hour minimum.</b>
                                    <br></br><b>$100</b> for blade replacement for the chainsaw. <b>$30</b> for the stationary.
                                </div>
                            </v-card-text>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="2">
                    <v-img class="services-img" id="services-img1" src="milling-wood/src/assets/people/men-working3.png" rounded="lg" />
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="4" order-md="3" rounded="lg">
                    <v-img rounded class="services-img" id="services-img2" src="milling-wood/src/assets/wood-slabs/slabs_on_trailer_chainsaw.jpg" />
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="3" order-md="4">
                    <v-card variant="outlined">
                        <v-img
                            src="milling-wood/src/assets/background-imgs/woodRound2-2.png"
                            gradient="to top right, rgba(100, 115, 100, .3), rgba(50, 50, 50, .4)"
                            height="435px"
                            cover
                        >
                            <v-card-title>My Travel Limits</v-card-title>
                            <v-card-text class="overflow-card" >
                                <div class="easy-to-see">
                                    I will travel to you, but I can only reach so far.
                                    <br><br><b>If the job is outside of the Springfield, Ozark, or Nixa MO area</b>:
                                    <br>Travel expenses are added based on gas and time taken.
                                    <br><br><b>If travel time is longer than 2 hours</b>:
                                    <br>I likely won't make the trip, but feel free to ask!
                                </div>
                            </v-card-text>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="5">
                    <v-card variant="outlined">
                        <v-img
                            src="milling-wood/src/assets/background-imgs/woodRound4.png"
                            gradient="to top right, rgba(100, 115, 100, .3), rgba(50, 50, 50, .4)"
                            height="435px"
                            cover
                        >
                            <v-card-title>Frequently Asked Questions</v-card-title>
                            <v-card-text>
                                <div class="easy-to-see">
                                    <b>Will you cut the tree down before milling it?</b>
                                    <br>My passion is in milling, so <b>we do not offer tree felling services.</b>
                                    <br><br><b>Do you sand or treat the wood?</b>
                                    <br>I only offer raw lumber and milling services. I do not sand, stain, or treat my wood in any way.
                                    Part of the fun is doing it yourself!
                                </div>
                            </v-card-text>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="6" rounded="lg">
                    <v-img class="services-img" id="services-img3" src="milling-wood/src/assets/wood-slabs/slabs-stack-crop.jpg" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.easy-to-see {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  /* background-color: rgba(94, 94, 94, 0.3);
  border-radius: 15px; */
}

.services-img {
  border-radius: 15px;
  overflow: hidden;
}

#services-img1 {
    max-width: 560px;
}

#services-img2 {
    max-width: 600px;
}

#services-img3 {
  max-width: 460px;
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
    height: 80%;
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