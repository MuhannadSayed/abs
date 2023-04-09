<template>
  <button @click="addAbs" :disabled="isDisabled">
    <img src="../assets/plus.svg" :style="{ opacity: imageOpacity }" />
  </button>
</template>

<script>
export default {
  name: "AddAbs",
  methods: {
    addAbs(event) {
      this.$emit("click", event);
    },
  },
  props: {
    isDisabled: Boolean,
  },
  computed: {
    imageOpacity() {
      return this.isDisabled ? 0.5 : 1;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-flow: column;
  text-align: center;
}

button {
  background: transparent;
  border: 0;
}

button:focus,
button:hover,
button:active {
  border: 1px solid black;
}

img {
  width: 64px;
  height: 64px;
  background: transparent;
  border: 0;
}
</style>
