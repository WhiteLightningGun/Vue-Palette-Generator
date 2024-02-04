<template>
  <main class="flex-shrink-0 main">
    <div class="container text-center">
      <h3 class="mt-5">All-Colours Palette Generator</h3>
      <p>
        Click the block below to select a colour and instantly generate a
        variety of swatch sets.
      </p>
    </div>
    <ColorPicker @color-changed="handleColorChange" />
    <div class="container text-center">
      <h3 class="mt-5">
        <i class="bi bi-caret-left" v-on:click="handleClick('left')"></i>
        <span class="palette-text">{{ currentPaletteName }}</span>
        <i class="bi bi-caret-right" v-on:click="handleClick('right')"></i>
      </h3>
    </div>

    <div
      class="container d-flex justify-content-center palette-holder"
      v-bind:class="animationSetting"
    >
      <div v-for="(col, index) in colorArray" :key="index">
        <ColourSwatch :color="col" />
      </div>
    </div>
  </main>
</template>

<script>
import ColorPicker from "./ColourPicker.vue";
import ColourSwatch from "./ColourSwatch.vue";
import { ColourCalculators } from "../tools/ColourCalculators.js";

export default {
  name: "BodyTemplate",
  components: {
    ColorPicker,
    ColourSwatch,
  },
  data() {
    return {
      // Default settings
      color: "#000000",
      colorArray: ["#FFFF00", "#FF0000", "#00FF00", "#0000FF", "#97C563"],
      currentPaletteName: "Atmospheric Pentad",
      paletteSetting: 0,
      animationSetting: "slide-right",
      animationFinished: false,
      colCalcs: ColourCalculators,
    };
  },
  methods: {
    handleColorChange(newColor) {
      // Update the color when the color-changed event is emitted
      this.color = newColor;
      this.currentPaletteName = this.colCalcs[this.paletteSetting].name;
      this.colorArray =
        this.colCalcs[this.paletteSetting].newSwatches(newColor);
    },
    handleClick(direction) {
      this.animationSetting = "slide-left";

      this.$nextTick(() => {
        const animatedElement = this.$el.querySelector(".palette-holder");
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

          this.handleColorChange(this.color);
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
  animation: slideInFromLeft 0.3s forwards;
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
  animation: slideOutToRight 0.3s forwards;
}

.main {
  min-height: 82.5vh;
}

.palette-text {
  display: inline-block;
  width: 20rem;
}
</style>
