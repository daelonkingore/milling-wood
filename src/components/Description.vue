<script>
export default {
  data() {
    return {
      imageSrc: `https://picsum.photos/seed/${Math.random()}/600/300`, // Replace with your dynamic image URL
      placeholder: "https://via.placeholder.com/150", // Placeholder image URL
    };
  },
  methods: {
    setPlaceholder(event) {
      event.target.src = this.placeholder;
    },
  },
};
</script>

<template>
    <div>
        <h3>Who we are</h3>
        <div>
          <img src="../assets/people/group_pic1.jpg" alt="Example Image" />
        </div>
        <span>We are a family run milling business</span>
    </div>
</template>

<style scoped>
img {
  border-radius: 8px;
  width: 75%;
}
</style>