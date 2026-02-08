<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

defineProps({
  images: {
    type: Array,
    required: true
  },
  deletable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['delete'])

const { smAndDown } = useDisplay()
const dialogVisible = ref(false)
const imgForDialog = ref(null)
const dialogWidth = ref(0)

const dialogClass = computed(() =>
  smAndDown.value ? 'dialog-small' : 'dialog-big'
)

function showDialog(image) {
  imgForDialog.value = image.url
  dialogVisible.value = true

  const preload = new Image()
  preload.src = image.url
  preload.onload = () => {
    dialogWidth.value = Math.min(preload.width, window.innerWidth * 0.8)
  }
}
</script>

<template>
  <v-row dense>
    <v-col
      v-for="image in images"
      :key="image.public_id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card>
        <v-img
          class="cursor-pointer"
          :src="`${image.url.replace('/upload/', '/upload/f_auto,q_auto/')}`"
          aspect-ratio="1"
          cover
          @click="showDialog(image)"
        />

        <v-card-actions v-if="deletable">
          <v-spacer />
          <v-btn
            icon="mdi-delete"
            color="red"
            @click.stop="$emit('delete', image)"
          />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <v-dialog v-model="dialogVisible" :class="dialogClass">
    <v-img
      height="90vh"
      :src="imgForDialog"
      contain
      @click="dialogVisible = false"
      class="rounded-lg"
    />
  </v-dialog>
</template>

<style scoped>
.dialog-big {
  max-width: 60%;
}

.dialog-small {
  max-width: 95%;
}

.shrink {
  margin: 0 auto;
  width: 35%;
  min-width: 250px;
}

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