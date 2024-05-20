<template>
  <div>
    <canvas
      class="img-fluid"
      width="500px"
      height="500px"
      ref="canvas"
    ></canvas>
  </div>
</template>

<script>
import {
  HSLColourWheel,
  DrawPointsAndLines,
} from "../tools/canvas-tools/CanvasColourWheel.js";
import { ColourCalculators } from "../tools/ColourCalculators.js";
export default {
  name: "ColourWheelCanvasComponent",
  props: ["colour", "paletteSetting"],
  data() {
    return {
      colourArray: ["#FFFF00", "#FF0000", "#00FF00", "#0000FF", "#97C563"],
      colCalcs: ColourCalculators,
      isMounted: false,
    };
  },
  mounted() {
    this.setupCanvas();
    this.colourArray = this.colCalcs[this.paletteSetting].newSwatches(
      this.colour
    );
    this.drawColourWheel();
    this.isMounted = true;
  },
  watch: {
    colour() {
      this.colourArray = this.colCalcs[this.paletteSetting].newSwatches(
        this.colour
      );
      this.isMounted ? this.drawColourWheel() : null;
    },
    paletteSetting() {
      this.colourArray = this.colCalcs[this.paletteSetting].newSwatches(
        this.colour
      );
      this.isMounted ? this.drawColourWheel() : null;
    },
  },
  methods: {
    setupCanvas() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
    },
    drawColourWheel() {
      HSLColourWheel(this.ctx, this.colour);
      DrawPointsAndLines(this.ctx, this.colourArray);
    },
  },
};
</script>

<style scoped></style>
