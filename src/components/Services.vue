<template>
    <div>
        <h2>Services</h2>
        <v-container id="services-container">
            <v-row class="services-row">
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-card variant="outlined" class="services-card"
                        title="Pricing & Dimensions">
                        <v-card-text>
                            <b>$75</b> an hour for logs 25 inches or less. <b>$100</b> an hour for logs greater than 25 inches.
                            <br><b>$100</b> for the chain.
                            <br>2 hour minimum.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="d-flex justify-center">
                    <img max-width="100%" contain class="services-img" src="../assets/people/group_pic1.jpg" alt="Example Image" />
                </v-col>
            </v-row>
            <v-row class="services-row">
                <v-col cols="12" md="6">
                    <img class="services-img" src="../assets/people/group_pic1.jpg" alt="Example Image" />
                </v-col>
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-card variant="outlined" class="services-card"
                        title="Travel">
                        <v-card-text>
                            If the job is outside of the Springfield, Ozark, or Nixa MO area, travel expenses are added based on gas and time taken.
                            <br>If travel time is longer than 2 hours, it is unlikely we will make the trip, but feel free to ask.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row class="services-row">
            <v-row>
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-card variant="outlined" class="services-card"
                        title="Wood Services">
                        <v-card-text>
                            Can mill up to [dimension-needed]
                            <br>This is a a one man milling operation, so we <b>do not offer tree felling services.</b>
                            However, if you have a tree down or logs to process, please contact us!
                            <br>We offer milling on-site, we can take your logs, or you can drop them off to mill. 
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <img class="services-img" src="../assets/people/group_pic1.jpg" alt="Example Image" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
table {
    border-collapse: separate;
    width: 50%;
    border-radius: 15px;
    border: 1px solid #ddd;
    padding: 8px;
}
th, td {
    text-align: center;
}
th { 
    border-bottom: 1px solid #ddd;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>