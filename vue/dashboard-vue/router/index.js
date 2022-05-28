import Vue from "vue";
import VueRouter from "vue-router";

import Grafica1 from "../src/components/pages/Grafica1";
import Progress from "../src/components/pages/Progress";
import Pages from "../src/components/pages/Pages";
import Login from "../src/components/auth/Login";
import Register from "../src/components/auth/Register";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "pages",
    component: Pages,
    children: [
      {
        path: "/grafica1",
        name: "grafica1",
        component: Grafica1,
      },
      {
        path: "/progress",
        name: "progress",
        component: Progress,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
