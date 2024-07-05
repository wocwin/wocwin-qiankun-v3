import { createRouter, createWebHistory } from "vue-router";
import NProgress from "@/config/nprogress";
export const constantRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      rootPage: true,
      noCache: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
    meta: {
      rootPage: true,
      noCache: true
    }
  },
  // {
  //   path: '/redirect',
  //   name: 'redirect',
  //   component: () => import("@/layout/index.vue"),
  //   children: [
  //     {
  //       path: ':path(.*)',
  //       name: 'redirectPage',
  //       component: redirect,
  //       meta: {
  //         noCache: true
  //       }
  //     },
  //   ]
  // },
  {
    path: "/404",
    component: () => import("@/views/error/404.vue"),
    // hidden: true,
    meta: {
      title: "404页面"
    }
  },
  {
    path: "/401",
    component: () => import("@/views/error/401.vue"),
    hidden: true,
    meta: {
      title: "401页面"
    }
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/500.vue"),
    meta: {
      title: "500页面"
    }
  }
  // Resolve refresh page, route warnings
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: () => import("@/views/error/404.vue")
  // }
];

const base = createWebHistory(import.meta.env.VITE_APP_ENV === "production" ? "/wocwin-qiankun-v3/" : "/");
const router = createRouter({
  history: base,
  routes: [...constantRoutes],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
  NProgress.done();
  console.warn("路由错误", error.message);
});

export default router;
