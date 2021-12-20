<template>
  <div class="wrapper__title lg:block flex flex-col">
    <lottie-player
      class="lottie"
      src="https://assets4.lottiefiles.com/packages/lf20_Q2blbQ.json"
      background="transparent"
      speed="1"
      autoplay
    ></lottie-player>
    <div>
      <h2 class="fadeIn">LAUNDROMAT COMPANY</h2>
    </div>
    <div class="lg:block flex lg:mb-0">
      <img
        src="../assets/img/qrcodeline.jpg"
        alt="qrcodeline"
        width="200"
        height="200"
        class="lg:absolute static top-0 right-0 mt-4 mr-4"
      />
      <p class="mymove">
        <span>For machine - washable wool</span>
        <br />
        Loads should be under 8 pounds. It is recommended using a neutral
        detergent to prevent damage to the cloth and to improve the washing
        results
      </p>
    </div>
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
