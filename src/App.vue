<template>
  <div id="app">
    <h1>Frånvaroanmälningar</h1>
    <Wrapper>
      <Card
        v-for="(absence, index) in absList"
        :key="index"
        :name="`${absence.absName}`"
        :formatedDate="`${absence.absFormated}`"
        :reason="`${absence.reason}`"
      />
      <AddAbs @click="addNewAbs()" :isDisabled="disaleAddBtn" />
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
import { refactorAbs } from "./models/DataModel";

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
      absList: [],
      refactoredData: [],
    };
  },

  methods: {
    addNewAbs() {
      const index = Math.floor(Math.random() * this.refactoredData.length);
      this.absList.push(this.refactoredData[index]);
      this.refactoredData.splice(index, 1)[0];
    },
  },
  computed: {
    disaleAddBtn() {
      return this.refactoredData.length == 0 ? true : false;
    },
  },

  mounted() {
    this.refactoredData = refactorAbs(absences);
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
