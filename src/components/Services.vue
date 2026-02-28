<script setup>
    import { useHead } from '@vueuse/head'
    // images at top showing milling
    import ImageWithText  from './ImageWithText.vue';

    import milling1 from '@/assets/working/milling1.jpg'
    import milling2 from '@/assets/working/milling2.jpg'
    import milling3 from '@/assets/working/milling3.jpg'

    // images next to text boxes
    import menWorking3 from '@/assets/people/men-working3.jpg'
    import woodSlabsTrailer from '@/assets/wood-slabs/slabs_on_trailer_chainsaw.jpg'
    import slabsOnMill from '@/assets/wood-slabs/slabs-on-mill.jpg'

    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });

    useHead({
        title: 'Services | Milling By Darrell',
        script: [
            {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Milling",
                "provider": {
                "@type": "LocalBusiness",
                "name": "Milling By Darrell"
                }
            })
            }
        ]
    })
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
            <h2 :class="mobile ? 'h2-subheading mb-4' : 'loud-header-h2 mb-7'">MILLING SERVICES</h2>
        </div>

        <v-container :class="mobile ? 'v-text-small' : 'easy-to-see'">
            <ImageWithText
                :imageUrl=slabsOnMill
                :imageLeft="false"
            >
                <span class="textbox-title">Milling</span>
                <hr>
                <v-container>
                    <div class="pricing-section ">
                        <div class="pricing-header">
                            Pricing<span class="sub"> - Based on log width</span>
                        </div>

                        <table class="pricing-table">
                            <tbody>
                            <tr>
                                <td>25" or less</td>
                                <td>$75</td>
                            </tr>
                            <tr>
                                <td>25" - 45"</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <td>45" or more</td>
                                <td>$125</td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="pricing-note">
                            <strong>2 hour minimum.</strong><br>
                            $100 blade replacement (chainsaw)  
                            <br>
                            $30 stationary saw blade replacement
                        </div>

                        <div class="dimensions">
                            <strong>Dimensions</strong><span class="sub"> - Max log width</span><br>
                            Stationary mill: up to <b>36"</b> wide  
                            <br>
                            Portable saws: up to <b>51"</b> wide
                        </div>

                        <div class="contact-info">
                            Text: <b>(417)360-2260</b><br>
                            Email: <b>millingbydarrell@gmail.com</b>
                        </div>
                    </div>
                </v-container>
            </ImageWithText>

            <ImageWithText
                :imageUrl=woodSlabsTrailer
                :imageLeft="true"
            >
                <span class="textbox-title">Travel Limits</span>
                <hr>
                <v-container class="p-text-size p-text-line-height">
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
                <span class="textbox-title">Frequently Asked Questions</span>
                <hr>
                <v-container class="p-text-size p-text-line-height">
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
.p-text-line-height {
    line-height: 1.5;
}

.pricing-section {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.pricing-header {
  font-size: 18px;
  font-weight: 600;
}

.sub {
  font-weight: 400;
  opacity: 0.8;
  font-size: 14px;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
}

.pricing-table td {
  padding: 12px 0;
}

.pricing-table td:last-child {
  text-align: left;
  font-weight: 600;
}

.pricing-table tr:not(:last-child) td {
  border-bottom: 1px solid rgba(255,255,255,0.15);
}

.pricing-note,
.dimensions,
.contact-info {
  line-height: 1.5;
  opacity: 0.9;
}


.textbox-title {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1.5px;
}

.p-text {
    max-width: 1000px;
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