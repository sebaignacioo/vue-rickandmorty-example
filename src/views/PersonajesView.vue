<template>
  <main class="p-5 bg-light">
    <h1 class="display-6">Personajes</h1>
    <hr />
    <ThePagination
      :pag="{ current: pagActual, total: totalPag }"
      path="personajes"
    />
    <div class="album py-5 bg-light">
      <div class="container">
        <div
          class="
            row
            row-cols-1
            row-cols-sm-2
            row-cols-md-3
            row-cols-lg-4
            row-cols-xl-5
            g-3
          "
        >
          <div class="col" v-for="personaje in personajes" :key="personaje.id">
            <TheCard :personaje="personaje" />
          </div>
        </div>
      </div>
    </div>
    <ThePagination
      :pag="{ current: pagActual, total: totalPag }"
      path="personajes"
    />
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "PersonajesView",
  components: {
    TheCard: defineAsyncComponent(() =>
      import("@/components/card/TheCard.vue")
    ),
    ThePagination: defineAsyncComponent(() =>
      import("@/components/ThePagination.vue")
    ),
  },
  data() {
    return {
      personajes: [],
      pagActual: 1,
      totalPag: 1,
    };
  },
  created() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.pagActual}`)
      .then((res) => res.json())
      .then((data) => {
        this.personajes = data.results;
        if (this.totalPag === 1) this.totalPag = data.info.pages;
      });
  },
};
</script>
