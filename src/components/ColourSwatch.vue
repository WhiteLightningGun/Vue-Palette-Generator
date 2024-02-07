<template>
  <h4 class="my-5 px-1">
    <span
      class="colour-result rounded"
      :style="{ 'background-color': colour }"
      id="console"
    >
      <span class="colour-console" v-bind:class="textcolour">
        {{ colour.toUpperCase() }}</span
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
    colour: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      textcolour: "text-white",
    };
  },
  watch: {
    colour(newcolour) {
      let newcolourHSL = hexToHSL(newcolour);
      if (newcolourHSL[2] > 50) {
        this.textcolour = "text-black";
      } else {
        this.textcolour = "text-white";
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
