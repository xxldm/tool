import { createI18n } from "vue-i18n";
import myZhCn from "@/locales/zh-cn.yml";
import elZhCn from "@/i18n/module-locales/zh-cn";
import { useElementSettingsStore } from "@/stores/elementSettings";

const i18n = createI18n({
  // vue3 Composition API 中使用 i18n 必须为false
  legacy: false,
  locale: elZhCn.name,
  messages: {
    // 默认加载中文，确保最少有一个可用语言
    [elZhCn.name]: Object.assign({}, { el: elZhCn.el }, myZhCn),
  },
  // 找不到翻译返回的默认翻译
  fallbackLocale: elZhCn.name,
});

// 加载语言文件
async function loading(locale: string): Promise<void> {
  return Promise.all([
    import(`../locales/${locale}.yml`),
    import(`./module-locales/${locale}.ts`),
  ]).then(([myLocale, elLocale]) => {
    useElementSettingsStore().locale = elLocale.default;
    i18n.global.setLocaleMessage(locale, myLocale.default);
  });
}

// 修改语言
export function setLocale(locale: string): Promise<void> {
  return loading(locale).then(() => {
    axios.defaults.headers.common["Accept-Language"] = locale;
    document.querySelector("html")?.setAttribute("lang", locale);
    i18n.global.locale.value = locale;
  });
}

export const getTranslation = i18n.global.t;

export default i18n;
