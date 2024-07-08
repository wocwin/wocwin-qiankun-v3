<template>
  <el-container class="home_main">
    <el-header>
      <div class="header-lf">
        <div class="logo flx-center" @click="goIndex">
          <img class="logo-img" src="@/assets/logo/logo.png" alt="logo" />
          <span class="logo-text">Wocwin-Vue3主应用</span>
        </div>
      </div>
      <div class="header-ri">
        <ToolBarRight :isShowThemeSetting="false" :isShowSearchMenu="false" />
      </div>
    </el-header>
    <el-container class="classic-content">
      <t-layout-page>
        <GithubCorner class="github-corner" />
        <div class="sys_list">
          <section v-for="(item, i) in menuList" :key="i" class="sys_wrap">
            <div :class="['sys_title', { sys: item.path == '/pms' }]">
              <SvgIcon :icon-class="item.meta.icon" class="icon" />
              <div class="title">{{ item.meta.title }}</div>
            </div>
            <div class="module_wrap">
              <div v-for="(cItem, cI) in item.children" :key="`${i}-${cI}`" class="module" @click="routeHandle(cItem)">
                <SvgIcon :icon-class="cItem.meta.icon" class="font_family" />
                <div class="module_name">{{ cItem.meta.title }}</div>
              </div>
            </div>
          </section>
        </div>
      </t-layout-page>
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="home">
import { useAuthStore } from "@/store/modules/auth";
import { useTabsStore } from "@/store/modules/tabs";
import { useKeepAliveStore } from "@/store/modules/keepAlive";
import actions from "@/utils/actions";
import GithubCorner from "./components/GithubCorner.vue";
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue";
const tabStore = useTabsStore();
const keepAliveStore = useKeepAliveStore();
const authStore = useAuthStore();
const menuList = computed(() => authStore.addRoutesGet);
const router = useRouter();
const goIndex = () => {
  window.location.href = import.meta.env.VITE_APP_ENV === "production" ? "/wocwin-qiankun-v3/" : "/";
};
const routeHandle = (curRoute: { meta: { disabled: any }; children: { path: any }[]; path: string }) => {
  if (curRoute.meta.disabled) return;
  // 点击前清除缓存
  tabStore.closeMultipleTab();
  keepAliveStore.setKeepAliveName();
  if (curRoute.path.split("/")[1] === "pms") {
    // window.history.pushState({}, "", route.path);
    router.push({
      path: curRoute.children[0].path,
      query: {}
    });
  } else {
    // 设置与子应用通信的值
    actions.setGlobalState({ publicPath: import.meta.env.VITE_APP_ENV === "production" ? "/wocwin-qiankun-v3/" : "/" });
    // console.log("route.path-----", `/${curRoute.path.split("/")[2]}/`);
    // return;
    window.history.pushState({}, "", `/${curRoute.path.split("/")[2]}/`);
  }
};
</script>

<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  :deep(.el-header) {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 0 15px 0 0;
    background-color: #191a20;
    border-bottom: 1px solid #191a20;
    .header-lf {
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      .logo {
        flex-shrink: 0;
        width: 260px;
        margin-right: 16px;
        cursor: pointer;
        .logo-img {
          width: 40px;
          height: 40px;
          margin-right: 6px;
          border-radius: 50%;
        }
        .logo-text {
          font-size: 21.5px;
          font-weight: bold;
          color: #dadada;
          white-space: nowrap;
        }
      }
    }
    .header-ri {
      .tool-bar-ri {
        .toolBar-icon,
        .username {
          color: #e5eaf3;
        }
      }
    }
  }
  .classic-content {
    display: flex;
    height: calc(100% - 50px);
    position: relative;
    .github-corner {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 99;
      border: 0;
    }
    .sys_list {
      .sys_wrap {
        position: relative;
        background: var(--el-bg-color);
        border-radius: 8px;
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        .sys_title {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 250px;
          border-radius: 8px;
          background-image: url("../../assets/logo/nav_system-bg.png"),
            linear-gradient(138.83deg, #b5d7ff 5.54%, rgba(162, 197, 238, 0.38) 98.12%);

          .icon {
            font-size: 60px;
          }

          .title {
            font-weight: 500;
            font-size: 30px;
            line-height: 42px;
            color: #04081c;
          }
        }

        .sys {
          background-image: url("../../assets/logo/nav_system-bg.png"),
            linear-gradient(138.83deg, #ffcbb5 5.54%, rgba(238, 180, 162, 0.38) 98.12%);
        }

        .module_wrap {
          display: flex;
          flex-wrap: wrap;
          padding-left: 280px;

          .module {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 194px;
            height: 154px;
            font-size: 16px;
            border-radius: 4px;
            margin: 15px;
            cursor: pointer;

            &:hover {
              background: var(--el-bg-color);
              box-shadow: 0px 8px 15px #9b59b6;
              border-radius: 26px;
            }

            .module_name {
              margin-top: 10px;
              color: var(--el-text-color-primary);
            }

            .font_family {
              font-size: 78px;
              color: #355db4;
              line-height: 1;
            }
          }
        }
      }
    }
    .classic-main {
      display: flex;
      flex-direction: column;
    }
  }
}
html.dark {
  .el-container {
    :deep(.el-header) {
      border-bottom: 1px solid var(--el-border-color-light);
    }
  }
}
</style>
