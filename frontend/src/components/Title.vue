<template>
  <div class="wrapper__title">
    <lottie-player
      class="lottie"
      src="https://assets4.lottiefiles.com/packages/lf20_Q2blbQ.json"
      background="transparent"
      speed="1"
      autoplay
    ></lottie-player>
    <h2 class="fadeIn">LAUNDROMAT<br />COMPANY</h2>
    <p class="mymove">
      <span>For machine - washable wool</span>
      <br />
      Loads should be under 8 pounds. It is recommended using a neutral
      detergent to prevent damage to the cloth and to improve the washing
      results
    </p>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style>
@import "../assets/styles/Title.css";
</style>
