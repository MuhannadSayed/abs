<template>
  <div id="app">
    <h1>Frånvaroanmälningar</h1>
    <Wrapper>
      <Card />
      <AddAbs />
    </Wrapper>
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import AddAbs from "./components/AddAbs.vue";
import Card from "./components/Card.vue";
import Wrapper from "./components/Wrapper.vue";
import { absences } from "./data.js";

export default {
  name: "App",
  components: {
    /*  HelloWorld, */
    Wrapper,
    Card,
    AddAbs,
  },
  data() {
    return {
      absences,
    };
  },

  mounted() {
    console.log("hi new");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 24px;
}
</style>
