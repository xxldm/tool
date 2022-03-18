import App from "@/App.vue";
import { initUserRoute, router } from "@/router";
import i18n, { setLocale } from "@/i18n";
import { useSettingStore } from "@/stores/settings";
import "@/styles/index.scss";
import "github-markdown-css/github-markdown.css";
import "uno.css";

const app = createApp(App);
app.use(i18n).use(createPinia());

setLocale(useSettingStore().locale).then(() => {
  // 加载路由的时候会设置标题，需要等待国际化加载完毕
  app.use(router);

  router.isReady().then(() => {
    initUserRoute([1]);
    app.mount("#app");
  });
});
