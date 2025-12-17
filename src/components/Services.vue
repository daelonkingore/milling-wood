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
        <v-container class="services-container" fluid>
            <v-row class="services-row">
                <v-col cols="12" md="6" class="flex-and-center" order="1">
                    <v-card variant="outlined" class="background-img-card" id="wood1"
                        title="Pricing & Dimensions">
                        <v-card-text class="overflow-card">
                            <div>
                                We charge <b>$75</b> an hour for logs <b>25 inches or less</b>
                                <br><b>$100</b> an hour for logs greater than 25 inches.
                                <br><br></br><b>$100</b> for the chain.
                                <br><br>2 hour minimum.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center imgContainer" order="2">
                    <v-img class="services-img" src="src/assets/wood-slabs/bigwood.jpg" alt="Example Image" />
                </v-col>
                <v-col cols="12" md="6" order-md="3" order="4">
                    <v-img class="services-img" src="src/assets/logo.png" alt="Example Image" />
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order-md="4" order="3">
                    <v-card variant="outlined" class="background-img-card" id="wood2"
                        title="Travel Limits">
                        <v-card-text class="overflow-card pt-4">
                            <div>
                                <b>If the job is outside of the Springfield, Ozark, or Nixa MO area</b>:
                                <br>Travel expenses are added based on gas and time taken.
                                <br><br><b>If travel time is longer than 2 hours</b>:
                                <br>We likely won't make the trip, but feel free to ask.
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="5">
                    <v-card variant="outlined" class="background-img-card" id="wood3"
                        title="Wood Services">
                        <v-card-text class="overflow-card">
                            <b>Your Location:</b>
                            <br>We can mill logs up to 51 inches in diameter with our portable mill at your chosen location.
                            <br><br><b>Homebase:</b>
                            <br>Our big sawmill can mill up to 30 inches, but we can always use the 51 inch saw at home too!
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" order="6">
                    <v-img class="services-img" src="src/assets/people/group_pic1.jpg" alt="Example Image" />
                </v-col>
                <v-col cols="12" md="6" class="flex-and-center" order="7" order-md="8">
                    <v-card variant="outlined" id="disclaimer" class="background-img-card"
                        title="Disclaimer">
                        <v-card-text>
                            This is a a one man milling operation, so <b>we do not offer tree felling services.</b>
                            <br><br><b>We only offer raw lumber</b>. We do not sand, stain, or treat our wood in any way.
                            Part of the fun is doing it yourself!
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" order="8" order-md="7">
                    <v-img class="services-img" src="src/assets/people/group_pic1.jpg" alt="Example Image" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.imgContainer {
    height: 400px;
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
  opacity: .6;
  z-index: -1;
}

#wood1::before {
  background-image: url('src/assets/background-imgs/woodRound1.png');
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
    height: 260px;
    width: 100%;
    max-width: 600px;
}

.v-card-text {
    height: 70%;
    overflow-y: auto;
}

.services-pics-row {
    padding-right: 20px;
    padding-left: 20px;
}

.working-img {
    max-height: 400px;
}

.services-img {
  max-height: 300px;
  border-radius: 25px;
}
</style>