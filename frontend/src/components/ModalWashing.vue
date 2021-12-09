<template>
  <div
    v-if="toggleModal"
    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
  >
    <div
      @click="onStartHandler"
      v-if="toggleModal"
      class="absolute z-60 inset-0 opacity-25 bg-black"
    ></div>
    <div class="relative mx-auto max-w-2xl">
      <div class="bg-white w-full rounded shadow-2xl flex flex-col p-3">
        <div class="text-2xl font-bold">
          Washing Machine {{ number }}
          <div
            @click="onStartHandler"
            class="bg-transparent cursor-pointer hover:bg-gray-100 hover:opacity-80 float-right rounded-full px-2"
          >
            x
          </div>
        </div>
        <hr class="w-full" />
        <span>Put your coin for using washing machine</span>
        <div class="col-span-6 sm:col-span-3">
          <select
            v-model="selectedValue"
            class="my-6 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option disabled hidden>COIN</option>
            <option :value="30">30</option>
          </select>

          <button
            @click="
              onWashingHandler();
              clearSelect();
            "
            :disabled="selectedValue !== 30"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full cursor-pointer"
          >
            START
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWashing",
  props: ["toggleModal", "onStartHandler", "number", "onWashingHandler"],
  data() {
    return {
      selectedValue: "COIN",
    };
  },
  methods: {
    clearSelect() {
      this.selectedValue = "COIN";
    },
  },
};
</script>

<style></style>
