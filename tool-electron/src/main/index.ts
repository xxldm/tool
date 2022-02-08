/**
 * electron 主文件
 */
import {join} from "path";
import {app, BrowserWindow, ipcMain, Menu, screen, Tray,} from "electron";
import dotenv from "dotenv-flow";
import minimist, {ParsedArgs} from "minimist";
import ElectronStore from "electron-store";
import log from "electron-log";
import {autoUpdater} from "electron-updater";

// 存储操作对象
let store: ElectronStore;
// 参数对象
let argv: ParsedArgs;
// 应用根目录
let baseUrl: string;
// 托盘栏图标目录
let iconPath: string;
// 窗口对象
let win: BrowserWindow;
// 托盘图标对象
let tray: Tray;

init();

app.whenReady().then(ready);

/**
 * 初始化
 */
function init() {
  // 开启自动更新
  log.transports.file.level = "debug"
  autoUpdater.logger = log
  autoUpdater.checkForUpdatesAndNotify()
  // 创建electron-store
  store = new ElectronStore();
  // 获取参数
  argv = minimist(process.argv.slice(2));
  // 获取应用根目录
  baseUrl = app.isPackaged
      ? app.getAppPath()
      : join(app.getAppPath(), "../../");
  // 获取托盘栏图标目录
  iconPath = app.isPackaged
      ? join(baseUrl, "../app/src/public/favicon.png")
      : join(baseUrl, "src/public/favicon.png");
  // 读取配置文件
  dotenv.config({path: baseUrl, node_env: argv.env});
  initConfig();
  initIpc();
}

/**
 * 应用准备就绪
 */
function ready() {
  // 获取用户文件（配置文件、等）存放目录
  console.log(app.getPath("userData"));
  createWin();
  createTray();
  createMenu();
}

/**
 * 初始化ipc监听
 */
function initIpc() {
  // 开机启动开关
  ipcMain.on("openAtLogin", async (event, args) => {
    app.setLoginItemSettings({
      openAtLogin: args,
    });
    store.set("openAtLogin", args);
  });
  // 退出程序
  ipcMain.on("quit", () => app.quit());
  // 对窗口的操作
  ipcMain.on("setFocusable", (event, isFocusable: boolean) =>
      win.setFocusable(isFocusable)
  );
  ipcMain.on("setAlwaysOnTop", (event, isAlwaysOnTop: boolean) =>
      win.setAlwaysOnTop(isAlwaysOnTop)
  );
  // 配置文件读取
  ipcMain.on("electronStoreGet", (event, arg) => {
    event.returnValue = store.get(arg[0], arg[1]);
  });
  // 配置文件写入
  ipcMain.on("electronStoreSet", (event, arg) => {
    store.set(arg[0], arg[1]);
  });
}

/**
 * 初始化部分配置文件
 */
function initConfig() {
  // 以防从其余地方干掉了注册表，但设置项没有重置，每次打开读取注册表，重置设置项
  const {openAtLogin} = app.getLoginItemSettings();
  store.set("openAtLogin", openAtLogin);
}

/**
 * 创建窗口
 */
function createWin() {
  /*// 获取主屏幕
  let primaryDisplay = screen.getPrimaryDisplay();
  // 获取所有屏幕
  let displays = screen.getAllDisplays();
  // 取第二屏幕
  let externalDisplay = displays.find(
      (display) => display.id !== primaryDisplay.id
  );
  // 如果有第二屏幕
  if (externalDisplay) {
    // 创建浏览器窗口
    win = new BrowserWindow({
      x: externalDisplay.bounds.x,
      y: externalDisplay.bounds.y,
      width: externalDisplay.bounds.width,
      height: externalDisplay.bounds.height,
      // 改变大小
      resizable: false,
      // 移动位置
      movable: false,
      // 最小化
      minimizable: false,
      // 最大化
      maximizable: false,
      // 无边框
      frame: false,
      // 关闭任务栏中显示程序
      skipTaskbar: true,
      // 禁止F11这种系统全屏
      fullscreenable: false,
      // 可以获取焦点
      focusable: store.get("isFocusable", true),
      // 置顶
      alwaysOnTop: store.get("isAlwaysOnTop", false),
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });*/
  win = new BrowserWindow();
    // 获取主体页面地址
    const URL = app.isPackaged
        ? `file://${join(baseUrl, "dist/index.html")}` // vite 构建后的静态文件地址
        : `http://localhost:80`; // vite 启动的服务器地址

    // 加载主体页面
    win?.loadURL(URL);
  /*} else {
    app.quit();
  }*/
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
          click: function (item, focusedWindow) {
            if (focusedWindow) {
              focusedWindow.webContents.toggleDevTools();
            }
          },
        },
      ])
  );
}
