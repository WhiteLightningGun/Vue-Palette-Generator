<template>
  <h4 class="my-5 px-1">
    <span
      class="color-result rounded"
      :style="{ 'background-color': color }"
      id="console"
    >
      <span class="colour-console" v-bind:class="textColor">
        {{ color.toUpperCase() }}</span
      >
    </span>
  </h4>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { hexToHSL } from "@/tools/ColourCalculators";
export default {
  name: "ColourSwatch",
  // Your component's options go here
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      textColor: "text-white",
    };
  },
  watch: {
    color(newColor) {
      let newColorHSL = hexToHSL(newColor);
      if (newColorHSL[2] > 50) {
        this.textColor = "text-black";
      } else {
        this.textColor = "text-white";
      }
    },
  },
};
</script>

<style scoped>
/* Your component's styles go here */
.text-white {
  color: #ffffff;
}
.text-black {
  color: #000000;
}
</style>
