<template>
  <v-container fluid max-width="1600px">
    <v-row
      class="d-flex justify-center align-center"
      no-gutters
    >
      <v-col cols="12">
        <div
          class="wrapper"
          :class="{ 'reverse': imageLeft }"
        >
          
          <!-- TEXT BOX -->
          <div class="text-box">
            <p class="ma-0">
              <slot></slot>
            </p>
          </div>

          <!-- IMAGE -->
          <div class="image-box">
            <v-img
              :src="imageUrl"
              cover
              class="image"
              eager
            />
          </div>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageLeft: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.v-container {
  padding-left: 0px;
  padding-right: 0px;
}

.wrapper {
  display: flex;
  align-items: stretch; 
}

.image-box, .text-box {
  flex: 1;
  display: flex;
}

/* IMAGE */
.image-box {
  position: relative;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 0 12px 12px 0;
  /* position: absolute; */ /* on the fence about this look */
  inset: 0;
}

/* TEXT BOX */
.text-box {
  background: rgba(40, 40, 40, 0.65); /* slightly transparent dark grey */
  color: white;
  padding: 32px;
  border-radius: 12px 0 0 12px;
  z-index: 2;
  align-items: center;
  justify-content: center;
  display: flex;
}

/* Reverse layout when imageLeft = true */
.wrapper.reverse {
  flex-direction: row-reverse;
}

/* When reversed, adjust border radius */
.wrapper.reverse .text-box {
  border-radius: 0 12px 12px 0;
}

/* Reverse image border radius */
.wrapper.reverse .image {
  border-radius: 12px 0 0 12px;
}

/* MOBILE */
@media (max-width: 960px) {
  .wrapper,
  .wrapper.reverse {
    flex-direction: column;
  }

  .text-box {
    border-radius: 12px 12px 0 0 !important;
    max-width: 100%;
    width: 100%;
  }

  .image-box {
    width: 100%;
    height: 250px;
  }

  .image {
    border-radius: 0 0 12px 12px !important;
  }
}
</style>