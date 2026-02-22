<template>
  <v-img
    :src="imageUrl"
    cover
    class="hero-img"
  >
    <!-- Optional dark overlay for text readability -->
    <div class="overlay-bg"></div>

    <div class="overlay-content">
      <div class="text-wrapper">
        <h1 class="hero-title">
          {{ title }}
        </h1>

        <p class="hero-subtitle">
          {{ subtitle }}
        </p>

        <v-btn
          :to="to"
          router
          size="x-large"
          rounded="xl"
          class="services-btn"
        >
          {{ buttonText }}
        </v-btn>
      </div>
    </div>
  </v-img>
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  to: {
    type: [String, Object],
    required: true,
  },
  title: {
    type: String,
    default: "Our Services",
  },
  subtitle: {
    type: String,
    default: "Discover how we help businesses grow with tailored solutions designed for real impact.",
  },
  buttonText: {
    type: String,
    default: "Services",
  },
})
</script>

<style scoped>
.hero-img {
  height: 70vh;
  width: 100vw;
  position: relative;
}

/* Dark gradient overlay */
.overlay-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0.55)
  );
}

/* Center content */
.overlay-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}

.text-wrapper {
  max-width: 800px;
  color: white;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 32px;
  line-height: 1.6;
}

.services-btn {
  background-color: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(6px);
  color: white;
  font-size: 1.25rem;
}
</style>