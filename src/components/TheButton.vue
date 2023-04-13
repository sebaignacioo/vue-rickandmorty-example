<template>
  <router-link
    :to="to"
    :class="`btn btn-${btnType ?? 'primary'} ${btnClass ?? ''}`"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: true,
    },
    btnType: String,
    btnClass: String,
    text: String,
  },
};
</script>

<style lang="scss"></style>
