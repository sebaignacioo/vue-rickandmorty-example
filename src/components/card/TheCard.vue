<template>
  <div class="card shadow-sm">
    <div class="bd-placeholder-img card-img-top">
      <img
        :src="personaje.image"
        class="card-img-top"
        width="100%"
        height="225"
        :alt="personaje.name"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <div class="d-flex">
          <div class="flex-grow-1">{{ personaje.name }}</div>
          <div class="flex-shrink-0">
            <CardGender :gender="personaje.gender" />
          </div>
        </div>
      </h5>
      <h6 class="card-subtitle mb-3 text-muted">{{ personaje.species }}</h6>
      <CardDetails
        :origin="personaje.origin"
        :location="personaje.location"
        :status="personaje.status"
      />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    personaje: {
      type: Object,
      required: true,
    },
  },
  components: {
    CardGender: defineAsyncComponent(() => import("./CardGender.vue")),
    CardDetails: defineAsyncComponent(() => import("./CardDetails.vue")),
  },
};
</script>
<style lang="scss">
.details {
  font-size: 0.65rem;
  a {
    font-size: 0.65rem;
  }
}
</style>
