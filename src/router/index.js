import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import ListSetupView from "../views/ListSetupView.vue";

const routes = [
  {
    path: "/",
    name: "customer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CustomerView.vue"),
  },
  {
    path: "/setup",
    name: "Setup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListSetupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
