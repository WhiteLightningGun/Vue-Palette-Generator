<template>
  <main class="flex-shrink-0 main">
    <div class="container text-center">
      <h3 class="mt-5">How it works</h3>
      <p>
        A visual demonstration of how palettes can be generated using the HSL
        colour model.
      </p>
    </div>
    <colourPicker @colour-changed="handleColourChange" :isSmall="true" />
    <div class="container text-center">
      <h3 class="mt-5"></h3>
      <ColourWheelCanvasComponent :colour="colour" />
    </div>
  </main>
</template>

<script>
import colourPicker from "./ColourPicker.vue";
import ColourWheelCanvasComponent from "./ColourWheelCanvasComponent.vue";
export default {
  name: "AboutPage",
  // Your script code here
  components: {
    colourPicker,
    ColourWheelCanvasComponent,
  },
  data() {
    return {
      // Default settings
      colour: "#000000",
    };
  },
  methods: {
    handleColourChange(newcolour) {
      // Update the colour when the colour-changed event is emitted
      this.colour = newcolour;
    },
  },
};
</script>

<style scoped>
/* Your style code here */
h1 {
  color: rgb(255, 85, 227);
}
</style>
