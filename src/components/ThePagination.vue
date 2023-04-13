<template>
  <nav class="bg-light py-3">
    <ul class="pagination justify-content-center">
      <li :class="`page-item ${pag.current === 1 ? 'disabled' : ''}`">
        <router-link class="page-link" :to="`/${path}/p/${pag.current - 1}`">
          Anterior
        </router-link>
      </li>
      <li class="page-item active">
        <a class="page-link"> {{ pag.current }}/{{ pag.total }} </a>
      </li>
      <li :class="`page-item ${pag.current === pag.total ? 'disabled' : ''}`">
        <router-link class="page-link" :to="`/${path}/p/${pag.current + 1}`">
          Siguiente
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    pag: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
