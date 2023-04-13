<template>
  <div
    class="
      d-flex
      flex-col
      align-items-center
      justify-content-center
      card-text
      mb-4
      details
    "
  >
    <div class="col">
      <div class="row">
        <p class="m-0"><strong>Origin: </strong> {{ origin.name }}</p>
      </div>
      <div class="row">
        <p class="m-0"><strong>Location: </strong> {{ location.name }}</p>
      </div>
      <div class="row">
        <p class="m-0">
          <strong>Status: </strong>
          <span
            v-if="show"
            :class="`${
              status === 'Alive'
                ? 'alive'
                : status === 'Dead'
                ? 'dead'
                : 'unknown'
            }`"
          >
            {{ status }}
          </span>
          <a
            v-else
            class="btn btn-link text-muted p-0"
            :onClick="setShowStatus"
          >
            [show]
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    origin: {
      type: Object,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  methods: {
    setShowStatus() {
      this.show = true;
    },
  },
  created() {
    console.log(this.show);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.alive {
  color: darken($color: $ram_success, $amount: 25);
}

.dead {
  color: $ram_danger;
}

.unknown {
  color: $ram_warning;
}
</style>
