<template>
  <div class="washing__container">
    <div
      id="washingMachine"
      :class="{
        isOpen: status.opening.isActive,
        isFilled: status.content.isActive,
        isStarting: status.starting.isActive,
        isWashing: status.washing.isActive,
      }"
    >
      <div id="controls">
        <div class="washing__number">{{ number }}</div>
        <span v-if="status.content.isActive === false">EMPTY</span>
        <span
          v-else-if="
            status.content.isActive === true && status.opening.isActive === true
          "
          >🙂</span
        >
        <span v-else-if="status.washing.isActive === false">READY</span>
        <span
          v-else-if="status.washing.isActive === true"
          class="control__timer"
          ><Timer
            :initialMinute="1"
            :initialSeconds="10"
            :onFinishedHandler="onFinishedHandler"
            :number="number"
        /></span>
      </div>
      <div id="door"></div>
      <div id="tub">
        <span class="clothes"></span>
        <span class="clothes"></span>
        <span class="clothes"></span>
      </div>
    </div>
    <div id="playground">
      <button
        id="content"
        @click="onFillHandler"
        :disabled="!status.opening.isActive"
      >
        {{ status.content.isActive ? "EMPTY" : "FILL" }}
      </button>
      <button
        id="opening"
        @click="onCloseHandler"
        :disabled="status.washing.isActive"
      >
        {{ status.opening.isActive ? "CLOSE" : "OPEN" }}
      </button>
      <button
        id="power"
        @click="onStartHandler(1)"
        :disabled="!status.power.isActive || status.washing.isActive === true"
      >
        START
      </button>
    </div>

    <ModalWashing
      :toggleModal="toggleModal"
      :onStartHandler="onStartHandler"
      :onWashingHandler="onWashingHandler"
      :number="this.number"
    />
  </div>
</template>

<script>
import ModalWashing from "./ModalWashing";
import Timer from "./Timer";

export default {
  name: "WashingMachine",
  props: ["number"],
  components: {
    ModalWashing,
    Timer,
  },

  data() {
    return {
      title: "LAUNDROMAT COMPANY",
      washSpeed: 600,
      toggleModal: false,

      status: {
        opening: {
          isActive: false,
        },
        content: {
          isActive: false,
        },
        power: {
          isActive: false,
        },
        washing: {
          isActive: false,
        },
        starting: {
          isActive: false,
        },
      },
    };
  },

  methods: {
    onCloseHandler() {
      this.status.opening.isActive = !this.status.opening.isActive;
      if (
        this.status.content.isActive === true &&
        this.status.opening.isActive === false
      ) {
        this.status.power.isActive = true;
      } else {
        this.status.power.isActive = false;
      }
    },
    onFillHandler() {
      this.status.content.isActive = !this.status.content.isActive;
      this.status.power.isActive = false;
    },
    onStartHandler() {
      this.toggleModal = !this.toggleModal;
    },
    onWashingHandler() {
      this.toggleModal = false;
      this.status.washing.isActive = true;
      this.status.starting.isActive = true;
      setTimeout(
        () => (this.status.starting.isActive = false),
        this.washSpeed * 2
      );
    },
    onFinishedHandler() {
      this.status.washing.isActive = false;
    },
  },
};
</script>

<style lang="sass">
@import "../assets/styles/WashingMachine.scss"
</style>
