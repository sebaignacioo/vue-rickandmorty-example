<template>
  <main class="home d-flex flex-row align-items-center">
    <section class="col">
      <div class="d-flex flex-column">
        <section class="col py-5 text-center">
          <div class="row py-lg-5 justify-content-center">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light display-2">
                <v-icon name="bi-house-door-fill" />Inicio
              </h1>
              <p class="lead fs-2 text-muted">
                Sitio web de personajes y episodios de Rick And Morty.
              </p>
              <div class="d-flex gap-3 flex-row justify-content-center">
                <TheButton
                  btnClass="mr-3 px-4 py-2"
                  btnType="primary"
                  text="Personajes"
                  :to="{ name: 'personajes' }"
                />
                <TheButton
                  btnClass="ml-3 px-4 py-2"
                  btnType="secondary"
                  text="Episodios"
                  :to="{ name: 'episodios' }"
                />
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="d-flex flex-col">
              <div class="col-12 col-md-6 pt-5 mx-auto">
                <p class="creditos">
                  Sitio web creado por
                  <a
                    href="https://sgarciad.me/"
                    target="_blank"
                    rel="noreferrer"
                    >Sebastián García Delgadillo</a
                  >, utilizando <v-icon name="si-vuedotjs" /> Vue.js. Desplegado
                  con <v-icon name="si-github" /> GitHub Pages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import TheButton from "@/components/TheButton.vue";

export default {
  name: "HomeView",
  components: {
    TheButton,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  > svg {
    width: 4rem;
    height: 4rem;
    margin-right: 0.5rem;
  }
}
.home {
  height: calc(100vh - 66px);
  overflow-x: hidden;
}

.creditos {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 0.65rem;
  color: #888;
  a {
    color: #24325f;
    &:hover {
      color: #000;
    }
  }

  svg {
    width: 0.65rem;
    height: 0.65rem;
  }
}
</style>
