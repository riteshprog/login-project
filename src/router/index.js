import Vue from "vue";
import Router from "vue-router";
import store from "../store";
Vue.use(Router);
import Register from "../views/RegisterPage.vue";

import Login from "../views/LoginPage.vue";
import Home from "../views/HomePage.vue";

const routes = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/home", component: Home, meta: { requiresAuth: true } },
];

const router = new Router({
  mode: "history", // Use 'hash' for hash-based routing
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.getters.getLoggedInUser) {
      next({ path: "/login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
