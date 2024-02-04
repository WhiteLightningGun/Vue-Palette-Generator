<template>
  <div class="container d-flex justify-content-center">
    <h4 class="mt-5">
      <span
        class="color-holder rounded"
        :style="{ 'background-color': color }"
        v-bind:class="textColor"
        ref="colorPicker"
        @click="openColorPicker"
      >
        <span class="colour-console" id="current-colour"> {{ color }}</span>
      </span>
    </h4>
  </div>
</template>

<script>
import { hexToHSL } from "@/tools/ColourCalculators";
export default {
  name: "ColourPicker",
  data() {
    return {
      color: "", // Gets new random color
      textColor: "text-white",
    };
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.colorPicker = new jscolor(this.$refs.colorPicker, {
      onInput: this.updateColor,
      onChange: this.updateColorState,
      width: 250,
      height: 200,
      borderColor: "#000",
      controlBorderColor: "#FFF",
      backgroundColor: "#FFF",
      shadow: true,
      smartPosition: true,
      zIndex: 1000,
    });
    this.colorPicker.fromString(this.color);
  },
  created() {
    this.color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()}`;
    this.updateColorState(); //inform the parent of the initial color
    this.checkTextColor(this.color); //check the initial color for text color
  },
  methods: {
    openColorPicker() {
      this.colorPicker.show();
    },
    updateColor() {
      this.color = this.colorPicker.toHEXString();
      // this.$emit("color-changed", this.color);
    },
    updateColorState() {
      this.$emit("color-changed", this.color);
    },
    checkTextColor(col) {
      let newColorHSL = hexToHSL(col);
      if (newColorHSL[2] > 50) {
        this.textColor = "text-black";
      } else {
        this.textColor = "text-white";
      }
    },
  },
  watch: {
    color(newColor) {
      this.colorPicker.fromString(newColor);
      this.checkTextColor(newColor);
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
