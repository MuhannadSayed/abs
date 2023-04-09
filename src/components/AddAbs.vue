<template>
  <button @click="addAbs">
    <img src="../assets/plus.svg" />
  </button>
</template>

<script>
export default {
  name: "AddAbs",
  /* data() {
    return {
      count: 0,
    };
  }, */
  methods: {
    addAbs(event) {
      this.$emit("click", event);
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
