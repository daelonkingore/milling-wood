<script setup>
import { ref, onMounted, watch } from 'vue'

const selectedFolder = ref(null)

const allowedFolders = [
  'wood-slabs',
  'wood-rounds',
  'submitted',
  'working',
  'people',
]

const folderLabels = {
  'wood-slabs': 'Wood Slabs',
  'wood-rounds': 'Wood Rounds',
  submitted: 'Customer Creations',
  working: 'Milling in Action',
  people: 'The People Behind It',
}

const folders = ref([...allowedFolders])
const emit = defineEmits(['update:folder'])

onMounted(() => {
  // default to first folder in whitelist
  selectedFolder.value = folders.value[0]
})

watch(selectedFolder, (folderKey) => {
  if (!folderKey) return
  emit('update:folder', folderKey)
})
</script>

<template>
  <v-select
    v-model="selectedFolder"
    :items="folders"
    :item-title="f => folderLabels[f] ?? f"
    :item-value="f => f"
    label="Choose a Collection"
  />
</template>
