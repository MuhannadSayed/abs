<template>
  <div id="app">
    <h1>Frånvaroanmälningar</h1>
    <Wrapper>
      <Card
        v-for="(absence, index) in absList"
        :key="index"
        :name="`${absence.absName}`"
        :formatedDate="`${
          isBigScreen ? absence.fullFormated : absence.shortFormated
        }`"
        :reason="`${absence.reason}`"
      />
      <AddAbs @click="addNewAbs()" :isDisabled="disableAddBtn" />
    </Wrapper>
  </div>
</template>

<script>
import AddAbs from "./components/AddAbs.vue";
import Card from "./components/Card.vue";
import Wrapper from "./components/Wrapper.vue";
import { absences } from "./data.js";
import { refactorAnAbs, detectScreenWidth } from "./models/DataModel";
import { EventBus } from "./utils/event-bus";

export default {
  name: "App",
  components: {
    Wrapper,
    Card,
    AddAbs,
  },
  data() {
    return {
      absences,
      absList: [],
      refactoredData: [],
      isBigScreen: false,
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
    disableAddBtn() {
      return this.refactoredData.length == 0;
    },
  },

  mounted() {
    absences.forEach((e) => this.refactoredData.push(refactorAnAbs(e)));
    detectScreenWidth();
    EventBus.$on("screen-width-change", (bigScreen) => {
      this.isBigScreen = bigScreen;
    });
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
