<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
import "bootstrap";
export default {
  name: "App",
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
