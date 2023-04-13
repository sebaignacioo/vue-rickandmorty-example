import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  SiGithub,
  SiReact,
  SiVuedotjs,
  BiHouseDoorFill,
  FaUsers,
  BiTv,
  FaMars,
  FaVenus,
  FaGenderless,
} from "oh-vue-icons/icons";

addIcons(
  SiGithub,
  SiReact,
  SiVuedotjs,
  BiHouseDoorFill,
  BiTv,
  FaUsers,
  FaMars,
  FaVenus,
  FaGenderless
);

createApp(App).component("v-icon", OhVueIcon).use(router).mount("#app");
