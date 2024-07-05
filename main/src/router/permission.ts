import router from "./index";
import { getToken } from "@/utils/cookies";
import { useAuthStore } from "@/store/modules/auth";
import { useUserStore } from "@/store/modules/user";
import { LOGIN_URL, ROUTER_WHITE_LIST } from "@/config";
import NProgress from "@/config/nprogress";

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to: any, from: any, next: any) => {
  const authStore = useAuthStore();
  const userStore = useUserStore();

  // 1.NProgress 开始
  NProgress.start();
  if (getToken()) {
    // 2.动态设置标题
    const title = "Wocwin-Qiankun-Vue3主应用";
    document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;
    // 获取用户信息
    if (!userStore.userInfo?.userId) {
      // console.log("3333333", userStore.userInfo?.userId);
      userStore.GetInfo();
    }
    // 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页
    if (to.path.toLocaleLowerCase() === LOGIN_URL) {
      if (getToken()) return next(from.fullPath);
      resetRouter();
      return next();
    }

    if (!authStore.addRoutesGet.length) {
      await authStore.GenerateRoutes();
      // 动态添加可访问路由表
      authStore.addRoutesGet.forEach(route => {
        router.addRoute(route);
      });
      // router.addRoute(authStore.addRoutesGet)
      return next({ ...to, replace: true });
      // next({ ...to, replace: true });
    }
    // console.log("主项目的next", to, authStore.authMenuListGet);
    next();
  } else {
    // 4.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
    if (ROUTER_WHITE_LIST.includes(to.path)) {
      next();
    } else {
      // 5.判断是否有 Token，没有重定向到 login 页面
      next({ path: LOGIN_URL, replace: true });
    }
  }
});

/**
 * @description 重置路由
 * */
export const resetRouter = () => {
  const authStore = useAuthStore();
  authStore.addRoutesGet.forEach(route => {
    const { name } = route;
    if (name && router.hasRoute(name)) router.removeRoute(name);
  });
};

/**
 * @description 路由跳转错误
 * */
router.onError((error: { message: any }) => {
  NProgress.done();
  console.warn("路由错误", error.message);
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
  NProgress.done();
});
