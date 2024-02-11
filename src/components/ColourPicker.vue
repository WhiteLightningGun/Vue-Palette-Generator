<template>
  <div class="container d-flex justify-content-center">
    <h4 class="mt-5">
      <span
        class="rounded"
        :style="{ 'background-color': colour }"
        v-bind:class="{
          'colour-holder-small': isSmall,
          'colour-holder': !isSmall,
          [textcolour]: true,
        }"
        ref="colourPicker"
        @click="opencolourPicker"
      >
        <span class="colour-console" id="current-colour"> {{ colour }}</span>
      </span>
    </h4>
  </div>
</template>

<script>
import { hexToHSL } from "@/tools/ColourCalculators";
export default {
  name: "ColourPicker",
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      colour: "",
      textcolour: "text-white",
    };
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.colourPicker = new jscolor(this.$refs.colourPicker, {
      onInput: this.updatecolour,
      onChange: this.updatecolourState,
      width: 250,
      height: 200,
      borderColor: "#000",
      controlBorderColor: "#FFF",
      backgroundColor: "#FFF",
      shadow: true,
      smartPosition: true,
      zIndex: 1000,
    });
    this.colourPicker.fromString(this.colour);
  },
  created() {
    this.colour = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()}`;
    this.updatecolourState(); //inform the parent of the initial colour
    this.checkTextcolour(this.colour); //check the initial colour for text colour, sets black or white accordingly
  },
  methods: {
    opencolourPicker() {
      this.colourPicker.show();
    },
    updatecolour() {
      this.colour = this.colourPicker.toHEXString();
    },
    updatecolourState() {
      this.$emit("colour-changed", this.colour);
      this.checkTextcolour(this.colour);
    },
    checkTextcolour(col) {
      let newcolourHSL = hexToHSL(col);
      if (newcolourHSL[2] > 50) {
        this.textcolour = "text-black";
      } else {
        this.textcolour = "text-white";
      }
    },
  },
  watch: {
    colour(newcolour) {
      this.colourPicker.fromString(newcolour);
      //this.checkTextcolour(newcolour);
    },
  },
};
</script>

<style scoped>
.text-white {
  color: #ffffff;
}
.text-black {
  color: #000000;
}
</style>
