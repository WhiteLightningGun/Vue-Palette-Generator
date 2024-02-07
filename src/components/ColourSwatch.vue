<template>
  <h4
    class="my-5"
    :style="{
      'padding-left': `${PaddingCoefficient()}vw`,
      'padding-right': `${PaddingCoefficient()}vw`,
    }"
  >
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
    swatchCount: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      textcolour: "text-white",
    };
  },
  methods: {
    //This is intended to handle a max of 5 colour swatches
    PaddingCoefficient() {
      return 0.8 * (-this.swatchCount + 6);
    },
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

.colour-result {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  width: 17vw;
  height: 17vw;
  text-align: center;
  font-size: calc(min(max(10px, 3vw), 20px));
}
</style>
