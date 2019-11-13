import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "anchor-location",
  //   component: () => import("@/components/anchor-location/anchor-location.vue")
  // }
  {
    path: "/",
    name: "store",
    component: () => import("@/components/store")
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history", //【2】打包要换成hash模式
  base: process.env.BASE_URL,
  routes
});

export default router;
