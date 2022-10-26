import Vue from "vue";
import Router from "vue-router";

import RegisterUser from "@/views/RegisterUser";
import Login from "@/views/Login";
import Profile from "@/views/ProfileUser";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: {
        name: "login",
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterUser,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
