<script setup>
    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });
</script>

<template>
    <div>
        <h2 :class="mobile ? '' : 'loud-header'">LET US MILL FOR YOU</h2>
        <v-row class="services-pics-row">
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" src="src/assets/working/milling1.jpg" alt="Example Image" />
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center">
                <v-img cover rounded class="working-img" src="src/assets/working/milling3.jpg" alt="Example Image" />
            </v-col>
            <v-col v-if="!mobile" cols="12" md="4" class="d-flex justify-center">
                <v-img rounded class="working-img" src="src/assets/working/milling2.jpg" alt="Example Image" />
            </v-col>
        </v-row>

        <div class="p-container">
            <p :class="mobile ? 'p-text-size-sm' : 'p-text-size-lg'" class="p-text">
                Have a downed tree you don't know what to do with?
                <br>Need custom milling for your project?
                <br><br>We can take care of it for you!<br><br>
                Bring your wood to us or let us come to your wood, either way, that log doesn't stand a chance against our saws!
            </p>
        </div>

        <div>
            <h1 class="pb-12">What can we do for you?</h1>
        </div>

        <v-container>
            <v-row>
                <v-col cols="12" md="6" class="flex-and-center" order="1">
                    <v-card variant="outlined" class="background-img-card" id="wood1"
                        title="Milling">
                        <v-card-text class="overflow-card">
                            <div>
                                Slabs or rounds, whatever you need, we can cut it. We offer custom milling at our location or yours.
                                <br><br><b>Dimensions</b>
                                <br>We have saws that can handle logs up to <b>51"</b> wide!
                                <br><br><b>Pricing</b>
                                <br><b>$75</b> an hour for logs <b>25 inches or less</b>
                                <br><b>$100</b> an hour for logs <b>greater than 25 inches</b>
                                <br>2 hour minimum.
                                <br></br><b>$100</b> for blade replacement if needed
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="2">
                    <v-img class="services-img" id="services-img1" src="src/assets/people/men-working3.png" rounded="lg" />
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="4" order-md="3" rounded="lg">
                    <v-img rounded class="services-img" id="services-img2" src="src/assets/wood-slabs/slabs_on_trailer_chainsaw.jpg" />
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="3" order-md="4">
                    <v-card variant="outlined" class="background-img-card" id="wood2"
                        title="Our Travel Limits">
                        <v-card-text class="overflow-card" >
                            <div>
                                We will travel to you, but we can only reach so far
                                <br><br><b>If the job is outside of the Springfield, Ozark, or Nixa MO area</b>:
                                <br>Travel expenses are added based on gas and time taken
                                <br><br><b>If travel time is longer than 2 hours</b>:
                                <br>We likely won't make the trip, but feel free to ask
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="5">
                    <v-card variant="outlined" id="disclaimer" class="background-img-card"
                        title="Frequently Asked Questions">
                        <v-card-text>
                            <b>Will you cut the tree down before milling it?</b>
                            <br>Our passions is in milling, so <b>we do not offer tree felling services.</b>
                            <br><br><b>Do you sand or treat the wood?</b>
                            <br>We only offer raw lumber and milling services. We do not sand, stain, or treat our wood in any way.
                            Part of the fun is doing it yourself!

                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="6" rounded="lg">
                    <v-img class="services-img" id="services-img3" src="src/assets/wood-slabs/slabs-stack.jpg" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
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
  max-width: 320px;
}

.background-img-card {
  position: relative;
  background-color: rgba(0, 0, 0, 0.6); /* Adjust opacity as needed */
}

.background-img-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-position: center;
  opacity: .7;
  z-index: -1;
  background-size: cover;
}

#wood1::before {
  background-image: url('src/assets/background-imgs/woodRound1-2.png');
}

#wood2::before {
  background-image: url('src/assets/background-imgs/woodRound2-2.png');
}

#wood3::before {
  background-image: url('src/assets/background-imgs/woodRound5.png');
}

#disclaimer::before {
    background-image: url('src/assets/background-imgs/woodRound4.png');
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
    height: 400px;
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