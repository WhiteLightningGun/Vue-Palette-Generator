<template>
  <div>
    <p>How to win: {{ crabB }}</p>
    <p>Giant Enemy Crab: {{ crab }}</p>
    <button @click="generateCrab">Generate Crab</button>
  </div>
</template>

<script>
export default {
  name: "CrabBattle",
  props: {
    crabB: String,
  },
  data() {
    return {
      crab: "default crab 1",
    };
  },
  methods: {
    generateCrab() {
      const crabs = ["Behemoth", "Ripper", "Crusher", "Knasher", "Snippy"]; // replace with your own crab strings
      this.crab = crabs[Math.floor(Math.random() * crabs.length)];
    },
  },
};
</script>
