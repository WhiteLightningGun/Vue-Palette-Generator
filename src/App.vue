<template>
  <HeaderTop />
  <router-view></router-view>
  <FooterBottom />
</template>

<script>
import HeaderTop from "./components/header-top.vue";
import FooterBottom from "./components/FooterBottom.vue";

export default {
  name: "App",
  components: {
    HeaderTop,
    FooterBottom,
  },
};
</script>

<style></style>
