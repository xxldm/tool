import type { UpdateInfo } from "@/entity/UpdateInfo";
import { useUpdateStore } from "@/stores/update";
import { useSettingsStore } from "@/stores/settings";

export const isElectron =
  typeof navigator === "object" && navigator.userAgent.indexOf("Electron") >= 0;

let store: { get: Function; set: Function } = { get: () => {}, set: () => {} };

let win: {
  setFocusable: Function;
  setAlwaysOnTop: Function;
  setDark: Function;
  getDark: Function;
} = {
  setFocusable: () => {},
  setAlwaysOnTop: () => {},
  setDark: () => {},
  getDark: () => {},
};

let updateStore = <any>undefined;
let settingsStore = <any>undefined;

let app: { checkUpdate: Function; setOpenAtLogin: Function; quit: Function } = {
  checkUpdate: () => {},
  setOpenAtLogin: () => {},
  quit: () => {},
};

if (isElectron) {
  const { ipcRenderer } = require("electron");
  store.get = (key: string, defaultValue: any) =>
    ipcRenderer.sendSync("electronStoreGet", [key, defaultValue]);
  store.set = (key: string, value: any) => {
    console.log(key, value);
    ipcRenderer.send("electronStoreSet", [key, value]);
  };

  win.setFocusable = (focusable: boolean) =>
    ipcRenderer.send("setFocusable", focusable);
  win.setAlwaysOnTop = (alwaysOnTop: boolean) =>
    ipcRenderer.send("setAlwaysOnTop", alwaysOnTop);
  win.setDark = (dark?: boolean) => ipcRenderer.send("setDark", dark);
  win.getDark = () => ipcRenderer.sendSync("getDark");
  ipcRenderer.on("nativeThemeUpdated", (event, args) => {
    if (settingsStore === undefined) {
      settingsStore = useSettingsStore();
    }
    settingsStore.dark = args;
  });

  app.checkUpdate = () => ipcRenderer.sendSync("checkUpdate");

  app.setOpenAtLogin = (openAtLogin: boolean) =>
    ipcRenderer.send("openAtLogin", openAtLogin);
  app.quit = () => ipcRenderer.send("quit", true);
} else {
  store.get = (key: string, defaultValue: any) => {
    let value = window.localStorage.getItem(key);
    if (value !== undefined && value !== null) {
      let val = JSON.parse(value);
      switch (val.type) {
        case "boolean":
          return val.val === "true";
        case "number":
          return Number(val.val);
        case "object":
          return JSON.parse(val.val);
        case "string":
          return val.val;
        default:
          throw new Error(
            "不支持的类型！应该为boolean、number、object、string"
          );
      }
    }
    return defaultValue;
  };
  store.set = (key: string, value: any) => {
    if (value === undefined) {
      return;
    }
    let val;
    switch (typeof value) {
      case "boolean":
        val = {
          val: String(value),
          type: "boolean",
        };
        break;
      case "number":
        val = {
          val: String(value),
          type: "number",
        };
        break;
      case "object":
        val = {
          val: JSON.stringify(value),
          type: "object",
        };
        break;
      case "string":
        val = {
          val: String(value),
          type: "string",
        };
        break;
      default:
        throw new Error("不支持的类型！应该为boolean、number、object、string");
    }
    window.localStorage.setItem(key, JSON.stringify(val));
  };
}
export const config = store;
export const elWin = win;
export const elApp = app;
