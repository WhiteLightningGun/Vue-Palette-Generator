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
import CanvasColourWheel from "../tools/canvas-tools/CanvasColourWheel.js";
export default {
  name: "ColourWheelCanvasComponent",
  props: ["colour"],
  mounted() {
    this.setupCanvas();
    this.drawColourWheel();
    // Add more methods as needed
  },
  watch: {
    colour(newColour) {
      console.log(newColour);
      this.drawColourWheel();
    },
  },
  methods: {
    setupCanvas() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
    },
    drawColourWheel() {
      CanvasColourWheel(this.ctx, this.colour);
    },
    // Add more methods here as needed
  },
};
</script>

<style scoped></style>
