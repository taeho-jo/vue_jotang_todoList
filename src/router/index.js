import Vue from "vue";
import VueRouter from "vue-router";
import { Home, Daily, Login, Monthly, Weekly, Signup } from "@/views";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/daily",
      name: "daily",
      component: Daily
    },
    {
      path: "/monthly",
      name: "monthly",
      component: Monthly
    },
    {
      path: "/weekly",
      name: "weekly",
      component: Weekly
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ]
});
