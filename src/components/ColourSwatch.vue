<template>
  <h4
    class="my-5"
    :style="{
      'padding-left': `${PaddingCoefficient()}vw`,
      'padding-right': `${PaddingCoefficient()}vw`,
    }"
  >
    <span
      :class="{
        'rounded colour-result-small': isSmall,
        'rounded colour-result': !isSmall,
      }"
      :style="{
        'background-color': colour,
      }"
      id="console"
      v-on:click="CopyColour"
    >
      <span
        class="colour-console swatch"
        v-bind:class="[textcolour, animationSetting]"
      >
        {{ swatchReadOut }}</span
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
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      textcolour: "text-white",
      animationSetting: "",
      swatchReadOut: "default",
    };
  },
  mounted() {
    this.swatchReadOut = this.colour.toUpperCase();
  },
  methods: {
    //This is intended to handle a max of 5 colour swatches
    PaddingCoefficient() {
      return 0.8 * (-this.swatchCount + 6);
    },
    CopyColour() {
      this.animationSetting = "scroll-down";

      this.$nextTick(() => {
        const animatedElement = this.$el.querySelector(".swatch");
        const onAnimationEnd = () => {
          animatedElement.removeEventListener("animationend", onAnimationEnd);
          navigator.clipboard.writeText(this.colour);
          this.swatchReadOut = "Copied!";
          this.animationSetting = "scroll-up";
          this.animationSetting = "fade-out";
          this.timeoutId = setTimeout(() => {
            this.swatchReadOut = this.colour.toUpperCase();
            this.animationSetting = "scroll-up";
          }, 2000);
        };

        animatedElement.addEventListener("animationend", onAnimationEnd);
      });
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
      this.swatchReadOut = newcolour.toUpperCase();
      //cancel any animations here and reset the swatchReadOut and cancel the setTimeout
      this.animationSetting = "";
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
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
.colour-result-small {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 17vw;
  height: 8vw;
  text-align: center;
  font-size: calc(min(max(10px, 3vw), 20px));
}

.scroll-down {
  animation: scrollDown 0.2s 1;
}

@keyframes scrollDown {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(60%);
    opacity: 0;
  }
}

.scroll-up {
  animation: scrollUp 0.2s 1;
}

@keyframes scrollUp {
  0% {
    transform: translateY(-60%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fade-out {
  animation: fade-out 2s linear forwards;
}
</style>
