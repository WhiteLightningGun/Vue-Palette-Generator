<template>
  <HeaderTop />
  <BodyTemplate />
  <FooterBottom />
</template>

<script>
import HeaderTop from "./components/header-top.vue";
import BodyTemplate from "./components/BodyTemplate.vue";
import FooterBottom from "./components/FooterBottom.vue";

export default {
  name: "App",
  components: {
    HeaderTop,
    BodyTemplate,
    FooterBottom,
  },
};
</script>

<style></style>
