<template>
  <div class="bg-light">
    <TheNavbar />
    <slot>
      <h2>Default content</h2>
    </slot>
  </div>
</template>
<script>
import TheNavbar from "@/components/navbar/TheNavbar.vue";

export default {
  name: "MainLayout",
  components: { TheNavbar },
};
</script>
<style lang="scss"></style>
