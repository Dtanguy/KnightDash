import Vue from "vue";
import Router from "vue-router";

import fiche from "./views/fiche.vue";
import arsenal from "./views/arsenal.vue";
import Empty from "./views/fiche.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "fiche",
      component: fiche,
    },
    {
      path: "/fiche",
      name: "fiche",
      component: fiche,
    },
    {
      path: "/arsenal",
      name: "arsenal",
      component: arsenal,
    },
    {
      // catch all 404 - define at the very end
      path: "*",
      name: "404",
      component: Empty,
    },
  ],
});
