import { config, elApp, elWin, isElectron } from "@/utils/ElectronUtil";
import { setLocale } from "@/i18n";
import { useUpdateStore } from "@/stores/update";

export const useSettingStore = defineStore("setting", {
  state: () => ({
    electron: true,
    server: config.get("server"),
    edit: false,
    appLock: false,
    skipUpdate: config.get("skipUpdate"),
    openAtLogin: config.get("openAtLogin", false),
    locale: config.get("locale", "zh-cn"),
    dark: elWin.getDark(),
    focusable: config.get("focusable", true),
    alwaysOnTop: config.get("alwaysOnTop", false),
    showShortcutButtons: config.get("showShortcutButtons", {
      dark: false,
      locale: true,
      focusLock: true,
      top: true,
      appLock: true,
      edit: true,
    }),
  }),
  getters: {
    isElectron: (state) => state.electron,
    isServer: (state) => state.server !== undefined,
    isEdit: (state) => state.edit,
    isAppLock: (state) => state.appLock,
    isOpenAtLogin: (state) => state.openAtLogin,
    isDark: (state) => state.dark,
    isFocusable: (state) => state.focusable,
    isAlwaysOnTop: (state) => state.alwaysOnTop,
  },
  actions: {
    setOpenAtLogin(openAtLogin: boolean) {
      this.openAtLogin = openAtLogin;
      elApp.setOpenAtLogin(openAtLogin);
    },
    setDark(dark?: boolean) {
      this.dark = dark;
      elWin.setDark(dark);
    },
    manualCheckForUpdates() {
      const updateStore = useUpdateStore();
      updateStore.loading = true;
      updateStore.showDialog = true;
      updateStore.resetUpdateInfo();
      elApp.checkUpdates();
    },
    setAppLock(appLock: boolean) {
      this.appLock = appLock;
      elWin.setFocusable(appLock);
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
    setLocal(locale: string) {
      setLocale(locale).then(() => {
        this.locale = locale;
        config.set("locale", locale);
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}
