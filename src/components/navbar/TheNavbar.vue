<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <img src="../../assets/logo.svg" alt="" height="40" />
      </router-link>
      <NavbarToggler />
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <NavbarLink
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            :name="link.name"
            :icon="link.icon"
          />
        </ul>
        <div class="rlinks">
          <div class="container">
            <div class="row">
              <a
                href="https://github.com/sebaignacioo/vue-rickandmorty-example"
                target="_blank"
                rel="noreferrer"
                class="col nav-item"
              >
                <v-icon name="si-github" class="big-icon" /> Repositorio de
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineAsyncComponent } from "vue";

const links = [
  {
    to: {
      name: "home",
    },
    name: "Inicio",
    icon: "bi-house-door-fill",
  },
  {
    to: {
      name: "personajes",
    },
    name: "Personajes",
    icon: "fa-users",
  },
  {
    to: {
      name: "episodios",
    },
    name: "Episodios",
    icon: "bi-tv",
  },
];

export default {
  name: "TheNavbar",
  components: {
    NavbarLink: defineAsyncComponent(() =>
      import("@/components/navbar/NavbarLink.vue")
    ),
    NavbarToggler: defineAsyncComponent(() =>
      import("@/components/navbar/NavbarToggler.vue")
    ),
  },
  props: {
    links: {
      type: Array,
      default: () => links,
    },
  },
};
</script>

<style lang="scss" scoped>
.rlinks {
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f4f4f4;
    }

    > svg {
      margin-right: 0.25rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}

.big-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
