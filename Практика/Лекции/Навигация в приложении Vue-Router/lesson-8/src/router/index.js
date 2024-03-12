import AboutContent from "@/pages/AboutContent.vue";
import DashBoard from "@/pages/DashBoard.vue";
import NotFound from "@/pages/NotFound.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
    },
    {
      path: "/about*",
      name: "about",
      component: AboutContent,
    },
    {
      path: "/404",
      name: "notfound",
      component: NotFound,
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
