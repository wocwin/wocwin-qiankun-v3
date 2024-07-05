import { defineStore } from "pinia";
import { Permission } from "@/store/interface";
import { rebuildRouter, filterAsyncRouter, getShowMenuList } from "@/utils";
import { getRouters, getPermBtm, getUserPermBtm } from "@/api/modules/login";
import { useUserStore } from "@/store/modules/user";
import { removeToken } from "@/utils/cookies";
import { ElMessage } from "element-plus";
import { constantRoutes } from "@/router";
export const useAuthStore = defineStore({
  id: "wocwin-auth",
  state: (): Permission => ({
    addRoutes: [],
    routes: [],
    authButtonList: []
  }),
  getters: {
    // 按钮权限列表
    authButtonListGet: state => state.authButtonList,
    // // 菜单权限列表 ==> 这里的菜单没有经过任何处理
    // authMenuListGet: state => state.authMenuList,
    // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 hidden == true
    showMenuListGet: state => getShowMenuList(state.addRoutes),
    // // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
    // flatMenuListGet: state => getFlatMenuList(state.authMenuList),
    // // 递归处理后的所有面包屑导航列表
    // breadcrumbListGet: state => getAllBreadcrumbList(state.authMenuList),
    addRoutesGet: state => state.addRoutes,
    routesGet: state => state.routes
  },
  actions: {
    // Get AuthButtonList
    async getAuthButtonList() {
      const useApi = useUserStore().loginName === "user" ? getUserPermBtm() : getPermBtm();
      const res = await useApi;
      if (res.success && res.data.length > 0) {
        const permCode = res.data.map((item: { perms: any }) => item.perms || null);
        this.authButtonList = permCode;
      }
    },
    // // Get AuthMenuList
    // getAuthMenuList() {
    //   // console.log("useUserStore--", useUserStore().loginName);
    //   return new Promise((resolve, reject) => {
    //     getRouters()
    //       .then((res: any) => {
    //         this.authMenuList = res.data;
    //         resolve(res.data);
    //       })
    //       .catch((error: any) => {
    //         reject(error);
    //       });
    //   });
    // },
    // 生成系统路由和系统按钮权限
    GenerateRoutes() {
      return new Promise(async resolve => {
        // 获取路由数据
        const routerRes = await getRouters();
        console.log("routerRes", routerRes?.data);
        rebuildRouter(routerRes?.data);
        const newRouter = filterAsyncRouter(routerRes.data && routerRes.data[0].children, 1);
        // console.log('走了嘛生成系统路由', newRouter)
        // newRouter.length === 0 && Message.warning('您没有该系统的访问权限，请联系管理员')
        if (routerRes.data == null || newRouter.length === 0) {
          ElMessage.warning("您没有该系统的访问权限，请联系管理员");
          removeToken();
          return;
        }
        this.addRoutes = newRouter;
        this.routes = constantRoutes.concat(newRouter);
        // console.log("99999---newRouter", newRouter);
        resolve(newRouter);
        // 动态添加路由
      });
    }
  }
});
