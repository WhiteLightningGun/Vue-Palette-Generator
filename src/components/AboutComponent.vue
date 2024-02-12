<template>
  <main class="flex-shrink-0 main">
    <div class="container text-center">
      <h3 class="mt-5">How it works</h3>
      <p>
        A visual demonstration of how palettes are generated using the HSL
        colour model.
      </p>
    </div>
    <colourPicker @colour-changed="handleColourChange" :isSmall="true" />
    <div class="container text-center">
      <h5 class="mt-4">
        <i
          class="bi bi-caret-left arrow-icon"
          v-on:click="handleClick('left')"
        ></i>
        <span class="palette-text" v-bind:class="animationSetting">{{
          currentPaletteName
        }}</span>
        <i
          class="bi bi-caret-right arrow-icon"
          v-on:click="handleClick('right')"
        ></i>
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
      animationSetting: "slide-right",
    };
  },
  methods: {
    handleColourChange(newcolour) {
      // Update the colour when the colour-changed event is emitted
      this.colour = newcolour;
      this.currentPaletteName = this.colCalcs[this.paletteSetting].name;
    },
    handleClick(direction) {
      this.animationSetting = "slide-left";

      this.$nextTick(() => {
        const animatedElement = this.$el.querySelector(".palette-text");
        const onAnimationEnd = () => {
          animatedElement.removeEventListener("animationend", onAnimationEnd);

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
        };

        animatedElement.addEventListener("animationend", onAnimationEnd);
      });
    },
  },
};
</script>

<style scoped>
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-30%);
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    transform: rotateY(0deg);
    opacity: 1;
  }
}

.slide-right {
  animation: slideInFromLeft 0.2s forwards;
}

@keyframes slideOutToRight {
  0% {
    transform: translateX(0%);
    transform: rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(30%);
    transform: rotateY(90deg);
    opacity: 0;
  }
}

.slide-left {
  animation: slideOutToRight 0.2s forwards;
}
.palette-text {
  display: inline-block;
  width: 18rem;
}
</style>
