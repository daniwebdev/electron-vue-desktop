import { app, protocol, BrowserWindow, ipcMain, net, dialog } from "electron";
import path from "path";

function LoginWindow(callback) {}

export default function MainWindow() {
  // Create the browser window.
  var mainWindow = new BrowserWindow({
    width: 900,
    // fullscreen: true,
    height: 700,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    // mainWindow.loadURL("app://./index.html");
    mainWindow.loadURL("app://./index.html#");
  }

  mainWindow.maximize();

  return mainWindow;
}
