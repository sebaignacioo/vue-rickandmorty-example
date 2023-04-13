<template>
  <v-icon
    :name="
      gender === 'Male'
        ? 'fa-mars'
        : gender === 'Female'
        ? 'fa-venus'
        : 'fa-genderless'
    "
    :fill="
      gender === 'Male'
        ? '#01A6EA'
        : gender === 'Female'
        ? '#FFB1CB'
        : '#FFCC10'
    "
  ></v-icon>
</template>
<script>
export default {
  props: {
    gender: {
      type: String,
      required: true,
    },
  },
};
</script>
