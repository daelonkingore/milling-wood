<script setup>
import { ref, watch } from 'vue'
import GallerySelect from './GallerySelect.vue'
import ImageGallery from './ImageGallery.vue'

const images = ref([])
const selectedFolder = ref(null)

watch(
  selectedFolder,
  async (folderKey) => {
    if (!folderKey) return

    const res = await fetch(
      `/.netlify/functions/cloudinary-images?folder=${folderKey}`
    )
    images.value = await res.json()
  },
  { immediate: true }
)
</script>

<template>
  <GallerySelect v-model:folder="selectedFolder" />
  <ImageGallery :images="images" />
</template>
