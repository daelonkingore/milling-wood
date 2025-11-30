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

function showDialog(event) {
  imgForDialog = event.originalTarget.src;
  dialogVisible.value = true;

  // Pre-load image to get dimensions
  const img = new Image();
  img.src = imageUrl;
  img.onload = () => {
    const maxWidth = window.innerWidth * 0.8;
    this.dialogWidth = Math.min(img.width, maxWidth);
  };
}
</script>

<template>
  <v-select class="red"
    label="Choose a Collection"
    :items="collections"
    item-title="collectionTitle"
    v-model="selectedCollection"
  ></v-select>
  <v-container fluid class="bg-surface-variant transCon">
    <v-row dense>
      <v-col
        v-for="(image, index) in collections.find(e => e.collectionTitle === selectedCollection).collectionValue" :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
          <v-img rounded d-flex :src="image" :aspect-ratio="1" alt="Collection Image" class="thumbnail-image ma-2 pa-2 d-flex justify-center align-center" cover v-on:click="showDialog($event)"/>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="dialogVisible" class="justify-center align-center rounded-lg" max-width="60%">
      <v-img height="90vh" :src="imgForDialog" contain @click="dialogVisible = false;" class="rounded-lg"></v-img>
  </v-dialog>
</template>

<style scoped>
.transCon {
  background-color: transparent !important;
}

#imgSelect {
  color: pink;
  background-color: blue !important;
}

.maxImgHeight {
  max-height: 100%;
}

img {
  border-radius: 8px;
  display: block;
}

.thumbnail-image {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.3s ease-in-out;
  object-fit: cover;
  width: 100%;
}

.thumbnail-image.is-active,
.thumbnail-image:hover {
  opacity: 1;
  border: 1px solid #20532b;
}
</style>