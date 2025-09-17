<script setup>
import { ref } from 'vue';
const woodSlabsImgs = Object.keys(import.meta.glob('../assets/wood-slabs/*.{jpg,png,jpeg,gif}')).map((key) => key.replace('..', 'src'));
const woodRoundsImgs = Object.keys(import.meta.glob('../assets/wood-rounds/*.{jpg,png,jpeg,gif}')).map((key) => key.replace('..', 'src'));
const peopleImgs = Object.keys(import.meta.glob('../assets/people/*.{jpg,png,jpeg,gif}')).map((key) => key.replace('..', 'src'));
const workingImgs = Object.keys(import.meta.glob('../assets/working/*.{jpg,png,jpeg,gif}')).map((key) => key.replace('..', 'src'));

const collections = [{collectionTitle: 'Wood Slabs', collectionValue: woodSlabsImgs}, 
                     {collectionTitle: 'Wood Rounds', collectionValue: woodRoundsImgs},
                     {collectionTitle: 'Customer Creations', collectionValue: peopleImgs},
                     {collectionTitle: 'Milling in Action', collectionValue: workingImgs},];
let selectedCollection = ref('Wood Slabs');
let imgForDialog = ref(null);
let dialogVisible = ref(false);

// TODO: figure out how to resize the imgs to fit better
function showDialog(event) {
  imgForDialog = event.originalTarget.src;
  dialogVisible.value = true;
}
</script>

<template>
  <v-select
    label="Choose a Collection"
    :items="collections"
    item-title="collectionTitle"
    v-model="selectedCollection"
  ></v-select>
  <v-container fluid class="bg-surface-variant">
    <v-row no-gutters>
      <v-col class="col-width"
        v-for="(image, index) in collections.find(e => e.collectionTitle === selectedCollection).collectionValue" :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-sheet class="ma-2 pa-2 thumbnail d-flex justify-center align-center" :elevation="10" rounded>
          <v-img :src="image" :aspect-ratio="1" alt="Collection Image" class="thumbnail-image" cover v-on:click="showDialog($event)"/>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="dialogVisible" class="justify-center align-center" width="60%">
    <v-card class="ma-0 pa-0">
      <v-img :src="imgForDialog" contain height="80vh"></v-img>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialogVisible = false; console.log(dialog)">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.col-width { 
  width: 50vh;
}

.maxImgHeight {
  max-height: 100%;
}

img {
  border-radius: 8px;
  display:block;
}

.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail-image {
  object-fit: cover;
  width: 100%;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.gallery-image.is-active,
.gallery-image:hover {
  opacity: 1;
}
</style>