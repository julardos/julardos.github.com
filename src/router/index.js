import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: () => import("../views/Hobbies.vue")
  },
  {
    path: "/contact",
    name: "Contact"
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: () => import("../views/Experiences")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects")
  },
  {
    path: "/skill",
    name: "skill"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
