import Layout from "@/layout/MyLayout.vue";
import {
  createRouter,
  createWebHistory,
  RouteRecordName,
  RouteRecordRaw,
} from "vue-router";
import { getTranslation } from "@/i18n";
import { getRandomAnimationClass } from "@/utils/AnimationClassUtil";
import { useUserStore } from "@/stores/user";

const modules = import.meta.globEager("./modules/*.ts");

export const extensionRoutes: RouteRecordRaw[] = Object.values(modules)
  .map((v) => v.default)
  .flat();

const routes: RouteRecordRaw[] = [
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    name: "notFound",
    meta: { hidden: true },
  },
  {
    path: "/",
    component: Layout,
    name: "/",
    children: [
      {
        path: "/",
        name: "main",
        component: () => import("@/views/main/Main.vue"),
        meta: { showEditButton: true },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "other",
    redirect: "/404",
    meta: { hidden: true },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  setTitle(String(to.name));
  to.meta.animationClass = getRandomAnimationClass("", "absolute-important");
});

export function setTitle(key: string): void {
  // 设置页面标题
  document.title = `${getTranslation("menu." + key)} - ${getTranslation(
    "appName"
  )}`;
}

const filterRoute = (routes: RouteRecordRaw[], userRuleIds: number[]) => {
  // 过滤路由列表
  return routes.filter((route) => {
    // 有子路由
    if (route.children && route.children.length > 0) {
      // 过滤子路由
      const tempRoutes = filterRoute(route.children, userRuleIds);
      // 过滤之后依然有可访问的子路由
      if (tempRoutes.length > 0) {
        // 设置过滤后的子路由
        route.children = tempRoutes;
        // 返回该路由
        return route;
      } else {
        // 过滤之后没有子路由了，直接过滤掉该路由
        return undefined;
      }
    } else {
      // 没有子路由或本就是子路由
      if (route.meta === undefined) {
        // 路由没有meta信息，直接过滤掉
        return undefined;
      }
      if (route.meta.isPubilc) {
        // 开放路由，返回该路由
        return route;
      }
      if (route.meta.rules === undefined) {
        // 不是开放路由，并且没有权限信息，直接过滤掉
        return undefined;
      }
      // 查询用户权限列表是否包含路由权限
      const tempRules = (<number[]>route.meta.rules).filter((rule: number) =>
        userRuleIds.includes(rule)
      );
      if (tempRules.length > 0) {
        // 有权限访问，返回该路由
        return route;
      } else {
        // 如果以前有权限，现在没有，清除路由
        if (router.hasRoute(<RouteRecordName>route.name)) {
          router.removeRoute(<RouteRecordName>route.name);
        }
        // 没有权限访问，直接过滤掉该路由
        return undefined;
      }
    }
  });
};

const initUserRoute = (userRuleIds: number[]) => {
  const userStore = useUserStore();
  userStore.routes = routes;
  for (const route of filterRoute(extensionRoutes, userRuleIds)) {
    if (route) {
      userStore.routes.splice(2, 0, route);
      router.addRoute(route);
    }
  }
};

router.isReady().then(() => {
  initUserRoute([1]);
});
