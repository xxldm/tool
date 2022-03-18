/**
 * electron 主文件
 */
import { join } from "path";
import {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  Tray,
  dialog,
  MenuItem,
  nativeTheme,
} from "electron";
import ElectronStore from "electron-store";
import { autoUpdater, UpdateInfo } from "electron-updater";

// 存储操作对象
let store: ElectronStore;
// 托盘栏图标目录
let iconPath: string;
// 窗口对象
let win: BrowserWindow;
// 托盘图标对象
let tray: Tray;

const OPEN_AT_LOGIN_KEY = "openAtLogin";

init();

app.whenReady().then(ready);
/**
 * 初始化
 */
function init() {
  // 创建electron-store
  store = new ElectronStore();
  // 获取托盘栏图标
  iconPath = app.isPackaged
    ? join(app.getAppPath(), "dist/favicon.png")
    : join(app.getAppPath(), "../../favicon.png");
  initConfig();
  initIpc();
  // if (app.isPackaged) {
  initUpdater();
  // }
}

/**
 * 应用准备就绪
 */
function ready() {
  // 获取用户文件（配置文件、等）存放目录
  console.log("[index.ts]", app.getPath("userData"));
  createWin();
  createTray();
  createMenu();
}

/**
 * 初始化ipc监听
 */
function initIpc() {
  // 开机启动开关
  ipcMain.on(OPEN_AT_LOGIN_KEY, (event, args: any) => {
    app.setLoginItemSettings({
      openAtLogin: args,
    });
    store.set(OPEN_AT_LOGIN_KEY, args);
  });
  // 退出程序
  ipcMain.on("quit", () => app.quit());
  // 对窗口能否获取焦点
  ipcMain.on("setFocusable", (event, isFocusable: any) =>
    win.setFocusable(isFocusable)
  );
  // 窗口是否置顶
  ipcMain.on("setAlwaysOnTop", (event, isAlwaysOnTop: any) =>
    win.setAlwaysOnTop(isAlwaysOnTop)
  );
  // 网页发起对暗黑模式的修改
  ipcMain.on("setDark", (event, isDark: boolean | undefined) => {
    if (isDark === undefined) {
      // 读取系统模式
      nativeTheme.themeSource = "system";
      // 清除已保存的模式值
      store.delete("dark");
    } else if (isDark) {
      // 指定使用暗黑模式
      nativeTheme.themeSource = "dark";
      // 持久化模式值
      store.set("dark", true);
    } else {
      // 指定不使用暗黑模式
      nativeTheme.themeSource = "light";
      // 持久化模式值
      store.set("dark", false);
    }
  });
  // 系统颜色系属性发生改变
  nativeTheme.on("updated", (event) => {
    console.log(event);
    // todo 判断是否是系统暗黑模式的改变
    // 读取用户是否指定暗黑模式
    const dark = store.get("dark");
    if (dark === undefined) {
      // 用户使用系统值，返回新的系统值
      win.webContents.send(
        "nativeThemeUpdated",
        nativeTheme.shouldUseDarkColors
      );
    }
  });
  // 网页初始化发起获取暗黑模式值
  ipcMain.on("getDark", (event) => {
    const dark = store.get("dark");
    if (dark === undefined) {
      // 用户没有设置过暗黑模式，使用系统的值
      event.returnValue = nativeTheme.shouldUseDarkColors;
    } else {
      // 返回用户设置的值
      event.returnValue = dark;
    }
  });
  // 配置文件读取
  ipcMain.on("electronStoreGet", (event, arg: any) => {
    event.returnValue = store.get(arg[0], arg[1]);
  });
  // 配置文件写入
  ipcMain.on("electronStoreSet", (event, arg: any) => {
    store.set(arg[0], arg[1]);
  });
}

/**
 * 初始化部分配置文件
 */
function initConfig() {
  // 以防从其余地方干掉了注册表，但设置项没有重置，每次打开读取注册表，重置设置项
  const { openAtLogin } = app.getLoginItemSettings();
  store.set(OPEN_AT_LOGIN_KEY, openAtLogin);
}

/**
 * 初始化更新程序
 */
function initUpdater() {
  // 关闭自动下载
  autoUpdater.autoDownload = false;
  // 允许更新到预发布版本
  autoUpdater.allowPrerelease = <boolean>store.get("allowPrerelease", true);
  // 获取所有版本的更新日志
  autoUpdater.fullChangelog = true;
  // 页面调用检查更新
  ipcMain.on("checkUpdate", (event) => {
    // 检查更新
    autoUpdater.checkForUpdates().then((updateCheckResult) => {
      // 返还结果给页面
      event.returnValue = updateCheckResult.updateInfo;
    });
  });
  // 监听下载进度
  autoUpdater.on(
    "download-progress",
    (progress, bytesPerSecond, percent, total, transferred) => {
      console.log(progress);
      console.log(bytesPerSecond);
      console.log(percent);
      console.log(total);
      console.log(transferred);
    }
  );
  // 页面调用下载更新
  ipcMain.on("downloadUpdate", () => {
    // 下载更新
    autoUpdater.downloadUpdate();
  });
  // 更新出错
  autoUpdater.on("error", (error: any) => {
    dialog.showErrorBox(
      "错误: ",
      error == null ? "未知" : (error.stack || error).toString()
    );
  });
  // 立即更新，如果没有调用这个方法，应用会在手动关闭后自动更新
  ipcMain.on("quitAndInstall", () => {
    autoUpdater.quitAndInstall(true, true);
  });
}

/**
 * 创建窗口
 */
function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    // x: externalDisplay.bounds.x,
    // y: externalDisplay.bounds.y,
    // width: externalDisplay.bounds.width,
    // height: externalDisplay.bounds.height,
    // 改变大小
    // resizable: false,
    // 移动位置
    // movable: false,
    // 最小化
    // minimizable: false,
    // 最大化
    // maximizable: false,
    // 边框
    // frame: false,
    // 关闭任务栏中显示程序
    // skipTaskbar: true,
    // 禁止F11这种系统全屏
    fullscreenable: false,
    // 可以获取焦点
    focusable: <boolean>store.get("isFocusable", true),
    // 置顶
    alwaysOnTop: <boolean>store.get("isAlwaysOnTop", false),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  // 获取主体页面地址
  const URL = app.isPackaged
    ? `file://${join(app.getAppPath(), "dist/index.html")}` // vite 构建后的静态文件地址
    : `http://localhost:80`; // vite 启动的服务器地址

  // 加载主体页面
  win.loadURL(URL);
}

/**
 * 创建托盘栏图标
 */
function createTray() {
  tray = new Tray(iconPath);
  let contextMenu = Menu.buildFromTemplate([
    {
      label: "退出",
      click: function () {
        console.log("quit!");
        app.quit();
      },
    },
  ]);
  tray?.setContextMenu(contextMenu);
  tray?.setToolTip("工具箱");
}

/**
 * 创建主菜单
 */
function createMenu() {
  Menu.setApplicationMenu(
    Menu.buildFromTemplate([
      {
        label: "切换开发者工具",
        accelerator: "F12",
        click: function (
          item: MenuItem,
          focusedWindow: BrowserWindow | undefined
        ) {
          if (focusedWindow) {
            focusedWindow.webContents.openDevTools();
          }
        },
      },
    ])
  );
}
