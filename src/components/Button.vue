<template>
  <button @click="clicking()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    clicking() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
</style>    
