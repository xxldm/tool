import { config, elApp, elWin } from "@/utils/SettingUtil";

export const useSettingStore = defineStore("setting", {
  state: () => ({
    edit: false,
    openAtLogin: config.get("openAtLogin", false),
    locale: config.get("locale", "zh-cn"),
    dark: config.get("dark", true),
    focusable: config.get("focusable", true),
    alwaysOnTop: config.get("alwaysOnTop", false),
    showShortcutButtons: config.get("showShortcutButtons", {
      dark: true,
      locale: true,
      focusLock: true,
      top: true,
      appLock: true,
      edit: true,
    }),
  }),
  getters: {
    isEdit: (state) => state.edit,
    isDark: (state) => state.dark,
    isFocusable: (state) => state.focusable,
    isAlwaysOnTop: (state) => state.alwaysOnTop,
  },
  actions: {
    setOpenAtLogin(openAtLogin: boolean) {
      this.openAtLogin = openAtLogin;
      elApp.setOpenAtLogin(openAtLogin);
    },
    setDark(dark: boolean) {
      this.dark = dark;
      config.set("dark", dark);
    },
    setFocusable(focusable: boolean) {
      this.focusable = focusable;
      config.set("focusable", focusable);
      elWin.setFocusable(focusable);
    },
    setAlwaysOnTop(alwaysOnTop: boolean) {
      this.alwaysOnTop = alwaysOnTop;
      config.set("alwaysOnTop", alwaysOnTop);
      elWin.setAlwaysOnTop(alwaysOnTop);
    },
    setShowShortcutButtons(key: string, isShow: boolean) {
      this.showShortcutButtons[key] = isShow;
      config.set("showShortcutButtons", this.showShortcutButtons);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}
