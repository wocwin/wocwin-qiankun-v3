# wocwin-qiankun-V3

## 最终效果

<img src="./public/wocwin-qiankun-v3.gif">

## 介绍

> 基于 Vue3.3 + TypeScript + Pinia + Vite4 + Element-Plus + 微前端(qiankun) 技术栈实现的前端微应用架构，实现了主子应用切换（因为没有调用接口，vue2子应用的路由都是静态的，vue3是动态请求的路由），若想实现主子应用之间通信[可以参考这一篇博客](https://blog.csdn.net/cwin8951/article/details/128498395)，并做了简单的自动化脚本命令，可用一行命令所有子应用的依赖安装、启动以及打包部署。

### 1、主应用介绍

> #### 技术栈 Vue3.3 + TypeScript + Pinia + Vite4 + Element-Plus + 微前端(qiankun)

### 2、wocwin-vue2 子应用介绍

> #### 技术栈 [Vue-cli4](https://cli.vuejs.org/zh/)+[Vue2](https://v2.cn.vuejs.org/)+[Element-Ui](http://element.eleme.io/#/zh-CN)+[qiankun](https://qiankun.umijs.org/zh)

### 3、wocwin-admin 子应用介绍

> #### 技术栈 Vue3.2 + TypeScript + Pinia + Vite4 + Element-Plus + 微前端(qiankun)

## 项目运行

1. 项目克隆

```js
// GitHub
git clone https://github.com/wocwin/wocwin-qiankun-v3.git

 // Gitee
git clone https://gitee.com/wocwin/wocwin-qiankun-v3.git
```

2. 依赖安装

   ```bash
   pnpm install
   ```

3. 项目启动

   ```bash
   npm run start
   ```

4. 本地运行

```js
// 1、运行完 npm run start
// 2、打开http://localhost:8100/ 进入主应用
// 3、逐个进入子应用（点击子应用左侧菜单栏logo可以回到主应用）
// 4、主应用的系统管理是所有应用的公共模板（用户、角色、菜单、部门、微前端、字典等）
```
5. 若进入主应用点击无法进入子应用（先登录主应用，在浏览器新开页签单独进入各个子应用）

6. 本地部署到服务器需要配置 NG（可以参考：nginx.conf 文件）

