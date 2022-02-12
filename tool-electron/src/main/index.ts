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
  MessageBoxReturnValue,
  MenuItem,
} from "electron";
import ElectronStore from "electron-store";
import { autoUpdater } from "electron-updater";

// 存储操作对象
let store: ElectronStore;
// 托盘栏图标目录
let iconPath: string;
// 窗口对象
let win: BrowserWindow;
// 托盘图标对象
let tray: Tray;

const OPEN_AT_LOGIN_KEY = "openAtLogin";
const UPDATE_CHANNEL_KEY = "updateChannel";

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
  if (app.isPackaged) {
    initUpdater();
    // 检查更新
    autoUpdater.checkForUpdates();
  }
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

function initUpdater() {
  autoUpdater.channel = store.get(UPDATE_CHANNEL_KEY, "beta");
  autoUpdater.autoDownload = false;

  autoUpdater.on("error", (error: any) => {
    dialog.showErrorBox(
      "错误: ",
      error == null ? "未知" : (error.stack || error).toString()
    );
  });

  autoUpdater.on("update-available", (updateInfo: any) => {
    dialog
      .showMessageBox({
        type: "info",
        title: "检查更新",
        message: `新版本[${updateInfo.version}]已发布是否更新？`,
        buttons: ["更新", "下次一定", "跳过这个版本"],
      })
      .then((buttonIndex: MessageBoxReturnValue) => {
        if (buttonIndex.response === 0) {
          autoUpdater.downloadUpdate();
        }
      });
  });

  // autoUpdater.on("update-not-available", () => {
  //   dialog.showMessageBox({
  //     title: "检查更新",
  //     message: "当前版本已是最新版本！",
  //   });
  // });

  autoUpdater.on("update-downloaded", () => {
    dialog
      .showMessageBox({
        type: "info",
        title: "检查更新",
        message: "新版本已下载完毕！",
        buttons: ["重启", "稍后手动重启"],
      })
      .then((buttonIndex: MessageBoxReturnValue) => {
        if (buttonIndex.response === 0) {
          setImmediate(() => autoUpdater.quitAndInstall(true, true));
        }
      });
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
    focusable: store.get("isFocusable", true),
    // 置顶
    alwaysOnTop: store.get("isAlwaysOnTop", false),
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
