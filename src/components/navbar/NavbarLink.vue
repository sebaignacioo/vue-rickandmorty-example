<template>
  <li>
    <router-link :to="to" class="nav-link" exact-active-class="active">
      <v-icon v-if="icon" :name="icon"></v-icon> {{ name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NavbarLink",
  props: {
    to: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>
<style lang="scss"></style>
