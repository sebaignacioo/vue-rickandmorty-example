<template>
  <div class="p-5">
    <h1 class="display-6">Episodios</h1>
    <hr />
    <ThePagination :pag="{ current: pag, total: totalPag }" path="episodios" />
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
        v-for="(episodio, i) in episodios"
        :key="i"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">
            [{{ episodio.episode }}] - {{ episodio.name }}
          </div>
          <div class="text-muted">Estreno: {{ episodio.air_date }}</div>
        </div>
        <span class="badge bg-warning rounded-pill">
          Season {{ getEpisode(episodio.episode).season }}
        </span>
      </li>
    </ul>
    <ThePagination :pag="{ current: pag, total: totalPag }" path="episodios" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "EpisodiosView",
  components: {
    ThePagination: defineAsyncComponent(() =>
      import("@/components/ThePagination.vue")
    ),
  },
  data() {
    return {
      episodios: [],
      pag: 1,
      totalPag: 1,
    };
  },
  created() {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${this.pag}`)
      .then((res) => res.json())
      .then((data) => {
        this.episodios = data.results;
        if (this.totalPag === 1) this.totalPag = data.info.pages;
      });
  },
  methods: {
    getEpisode(episodeString) {
      return {
        season: Number.parseInt(episodeString.substring(1, 3)),
        episode: Number.parseInt(episodeString.substring(4, 6)),
      };
    },
  },
};
</script>
