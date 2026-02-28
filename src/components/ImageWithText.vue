<script setup>
  import { useDisplay } from 'vuetify';
  const { mobile } = useDisplay({ mobileBreakpoint: 960 });
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

<template>
  <div class="section">
    <div class="wrapper" :class="{ reverse: imageLeft }">

      <!-- TEXT -->
      <div class="text-box" :class="mobile ? 'p-text-size-s' : 'p-text-size-l'">
        <slot></slot>
      </div>

      <!-- IMAGE -->
      <div class="image-box">
        <v-img
          :src="imageUrl"
          cover
          eager
          class="image"
        />
      </div>

    </div>
  </div>
</template>

<style scoped>
.section {
  max-width: 1600px;
  margin: 0 auto 30px auto;
  padding: 0px;
}

.p-text-size-l {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: .9px;
}

.p-text-size-s {
  font-size: .9rem;
  letter-spacing: .9px;
  line-height: 1.3;
}

.wrapper {
  display: flex;
  align-items: stretch;
}

.wrapper.reverse {
  flex-direction: row-reverse;
}

.image-box,
.text-box {
  flex: 1;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 0 14px 14px 0;
}

.wrapper.reverse .image {
  border-radius: 14px 0 0 14px;
}

.text-box {
  background: rgba(40, 40, 40, 0.7);
  color: white;
  padding: 32px 10px;
  border-radius: 12px 0 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.wrapper.reverse .text-box {
  border-radius: 0 12px 12px 0;
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