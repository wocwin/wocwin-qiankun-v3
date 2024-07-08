import { createApp } from "vue";
import App from "./App.vue";

// iconfont css
import "@/assets/iconfont/iconfont.css";

import router from "@/router";
import "@/router/permission"; // permission control
// 所有业务api接口
import api from "@/api";
// 按钮权限指令
import directives from "@/directive";
/**
 * element-plus
 */
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark css
import "@/styles/theme/element-dark.scss";
// reset style sheet
import "@/styles/index.scss";
// 因element-plus默认是英文，我们指定一下默认中文
import locale from "element-plus/es/locale/lang/zh-cn";
// 图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import MarqueeText from "vue-marquee-text-component";
// vue i18n
import I18n from "@/languages/index";

// pinia代替vuex
import pinia from "@/store";
import * as echarts from "echarts";

import TuiPlus from "@wocwin/t-ui-plus";
import "@wocwin/t-ui-plus/lib/style.css";
import "virtual:svg-icons-register";

// svg渲染
import SvgIcon from "@/components/SvgIcon/index.vue";
import { registerMicroApps, start } from "qiankun";
// 获取所有子应用
import microApps from "./micro-app";
// console.log('clientType=B', res)
// 给子应用配置加上loader方法
const apps: any = microApps.map(item => {
  // console.log('app', item)
  return {
    ...item
  };
});
// console.log("app333", apps)
registerMicroApps(apps);
start({
  prefetch: false // 取消预加载
});
const instance = createApp(App);
instance.use(router);
instance.use(pinia);
instance.use(I18n);
instance.use(directives);
// 注册全局api方法
instance.config.globalProperties.$api = api;
instance.config.globalProperties.$echarts = echarts;
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  instance.component(key, component);
}
// 注册ElementPlus
instance.use(ElementPlus, {
  locale // 语言设置
  // size: Cookies.get('size') || 'medium' // 尺寸设置
});
instance.use(TuiPlus);
// Vue 文本字幕组件全局组件祖册
instance.component("MarqueeText", MarqueeText);
// SvgIcon全局组件祖册
instance.component(
  "SvgIcon",
  // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根
  SvgIcon.default || SvgIcon
);
instance?.mount("#app");
