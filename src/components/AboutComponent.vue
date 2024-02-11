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
      <h5 class="mt-5">
        <i class="bi bi-caret-left" v-on:click="handleClick('left')"></i>
        <span class="palette-text">{{ currentPaletteName }}</span>
        <i class="bi bi-caret-right" v-on:click="handleClick('right')"></i>
      </h5>
    </div>
    <div class="container text-center">
      <h3 class="mt-5"></h3>
      <ColourWheelCanvasComponent
        :colour="colour"
        :paletteSetting="paletteSetting"
      />
    </div>
  </main>
</template>

<script>
import colourPicker from "./ColourPicker.vue";
import ColourWheelCanvasComponent from "./ColourWheelCanvasComponent.vue";
import { ColourCalculators } from "../tools/ColourCalculators.js";
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
      colour: "#FF0000",
      currentPaletteName: "Atmospheric Pentad",
      paletteSetting: 0,
      animationFinished: false,
      colCalcs: ColourCalculators,
    };
  },
  methods: {
    handleColourChange(newcolour) {
      // Update the colour when the colour-changed event is emitted
      this.colour = newcolour;
      this.currentPaletteName = this.colCalcs[this.paletteSetting].name;
    },
    handleClick(direction) {
      this.$nextTick(() => {
        if (direction === "right") {
          this.paletteSetting += 1;
          if (this.paletteSetting > this.colCalcs.length - 1) {
            this.paletteSetting = 0;
          }
        } else {
          this.paletteSetting -= 1;
          if (this.paletteSetting < 0) {
            this.paletteSetting = this.colCalcs.length - 1;
          }
        }
        this.handleColourChange(this.colour);
        this.animationSetting = "slide-right";
      });
    },
  },
};
</script>

<style scoped>
.palette-text {
  display: inline-block;
  width: 18rem;
}
</style>
