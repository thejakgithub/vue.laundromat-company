<template>
  <span>
    <span>0{{ minutes }} : </span>
    <span v-if="seconds < 10">0</span>
    <span>{{ seconds }}</span>
  </span>
</template>

<script>
import axios from "axios";
export default {
  name: "Timer",
  props: ["initialMinute", "initialSeconds", "onFinishedHandler", "number"],
  data() {
    return {
      minutes: this.initialMinute,
      seconds: this.initialSeconds,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.seconds > 0 && this.minutes >= 0) {
        this.seconds--;
        if (this.seconds === 0 && this.minutes > 0) {
          this.lineNotify();
          this.minutes--;
          this.seconds = 59;
        } else if (this.seconds === 0 && this.minutes == 0) {
          this.onFinishedHandler();
        }
      }
    }, 1000);
  },
  methods: {
    lineNotify() {
      axios
        .post("https://laundromat-company.herokuapp.com", {
          number: this.number,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
