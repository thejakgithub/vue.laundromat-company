<template>
  <div>
    <Title />
    <div class="washingMachine__container">
      <WashingMachine :number="1" />
      <WashingMachine :number="2" />
      <WashingMachine :number="3" />
    </div>
  </div>
</template>

<script>
import WashingMachine from "./components/WashingMachine";
import Title from "./components/Title";

export default {
  name: "App",
  components: {
    WashingMachine,
    Title,
  },
};
</script>

<style lang="scss">
@import "./App.css";
</style>
