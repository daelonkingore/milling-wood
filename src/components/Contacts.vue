<script setup>
    import EmailForm from './EmailForm.vue';
    import ImageWithText  from './ImageWithText.vue';
    import { useHead } from '@vueuse/head'

    // images at bottom
    import bugCube from '@/assets/wood-slabs/bug_cube.jpg'
    import bigWood from '@/assets/people/milling-big-wood.jpg'
    import slabsOnMill from '@/assets/wood-slabs/slabs_on_mill.jpg'
    
    import { useDisplay } from 'vuetify';
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });

    useHead({
        title: 'Contact Custom Wood Milling in Ozark, MO | Milling By Darrell',
        meta: [
            {
            name: 'description',
            content: 'Contact Milling By Darrell for quotes on custom milling, live edge wood slabs and rounds, and dimensional lumber in Ozark, Springfield, and Nixa Missouri.'
            }
        ]
    })
</script>

<template>
    <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color">LET'S TALK WOOD</h1>
    <div class="email-form">
        <EmailForm />
    </div>
    <h2 :class="mobile ? 'h2-subheading mb-9' : 'loud-header-h2 mb-10'">CONTACT INFO AND MORE</h2>
    <v-container class="pa-0">
        <v-card :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'"
            width="100%" 
            class="mx-auto pa-6 p-container p-text mt-0"
            rounded="xl"
            elevation="4"
        >
        <p>
            Send me a text or email to get started milling. 
            I usually have my current stock of wood slabs and rounds available on 
            <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank" rel="noopener noreferrer">
                <b>Facebook.</b>
            </a>
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
        <p>
            <br>Check out my  
            <a href="https://www.youtube.com/@Millingbydarrell" target="_blank" rel="noopener noreferrer">
                <b>Youtube</b>
            </a> 
            to see me in action, and 
            <a href="https://www.facebook.com/p/Milling-By-Darrell-61576174751276/" target="_blank" rel="noopener noreferrer">
                <b>Visit My Facebook</b>
            </a>
            for timelapses of my work, and more!
            <br>
        </p>
        </v-card>
    </v-container>
    <h3 :class="mobile ? 'h3-subheading mb-4' : 'loud-header-h3 mb-7'">ABOUT ME</h3>
    <ImageWithText class="pt-7 img-height"
            imageUrl="https://res.cloudinary.com/dubulxjtb/image/upload/v1772417451/smileWithEquipment_jqswfm.jpg"
            :imageLeft="true"
        >
        <div class="text-content">
            Hi. I'm Darrell, owner of Milling By Darrell, LLC. I started my passion of milling in 2024. The smell, the texture, the patterns, 
            and the colors of wood are beautiful and very appealing. 
            <br><br>
            Instead of burning it, I decided to start milling it. 
            I quickly fell in love with milling after seeing the outcome of a freshly sliced log and how beautiful it was. 
            As I continued gaining experience I found how enjoyable and rewarding milling had become. 
            <br><br>
            I want to share this passion with you. I hope you'll find this website appealing. Please feel free to review my work and the 
            creations that many of my customers have sent me in the “customer creations” area. I offer milling services and sell slabs of wood, 
            as well as complete custom milling to fit your needs. Should you still have questions, my contact information is listed in this website. 
            <br><br>
            Feel free to send me a message or give me a call. Remember, it's a great day to mill!
        </div>
    </ImageWithText>
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
.image {
  max-width: 50%;
  border-radius: 0 14px 14px 0;
}

.bordered-text {
    border: rgb(187, 187, 187) solid 2px;
    border-radius: 15px;
    display: inline-block;
    padding: 15px;
    margin: 10px;
    line-height: 28px;
}

.contacts-pics-row {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    max-width: 90%;
    margin: 0 auto;
}

/* .content-wrapper {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.portrait-image {
  flex: 0 0 300px; /* fixed width 
  max-width: 300px;
  border-radius: 16px;
}

.text-content {
  flex: 1; /* take remaining space 
}


@media (max-width: 960px) {
  .content-wrapper {
    flex-direction: column;
  }

  .portrait-image {
    max-width: 100%;
    width: 100%;
  }
} */
</style>