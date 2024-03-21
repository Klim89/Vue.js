import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/project",
    component: () => import("@/pages/ProjectPage.vue"),
  },
  {
    path: "/project/:page",
    component: () => import("@/pages/ProjectPage.vue"),
  },
  {
    path: "/blog",
    component: () => import("@/pages/BlogPage.vue"),
  },
  {
    path: "/blog/:page",
    component: () => import("@/pages/BlogPage.vue"),
  },
  {
    path: "/project-details",
    component: () => import("@/pages/ProjectDetailsPage.vue"),
  },
  {
    path: "/blog-details",
    component: () => import("@/pages/BlogDetailsPage.vue"),
  },
  {
    path: "/404",
    component: () => import("@/pages/NotFoundPage.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
