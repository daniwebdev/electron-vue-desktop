"use strict";

import path from "path";
import { app, protocol, BrowserWindow, ipcMain, net, dialog } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
import fs from "fs";
import MainWindow from "./background_window";

const isDevelopment = process.env.NODE_ENV !== "production";
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

var _mainWindow = undefined;

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
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
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    // mainWindow.loadURL("app://./index.html");
    mainWindow.loadURL("app://./index.html#");
  }

  mainWindow.maximize();
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }

  _mainWindow = MainWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

ipcMain.on("close-window", (event, args) => {
  app.quit();
});

ipcMain.on("minimize-window", (event, args) => {
  _mainWindow.minimize();
});

ipcMain.on("maximize-window", (event, args) => {
  if (_mainWindow.isMaximized()) {
    _mainWindow.unmaximize();
  } else {
    _mainWindow.maximize();
  }
});

ipcMain.on("net-check", (event, args) => {
  //
  event.reply("net-status", net.online ? "online" : "offline");
});

ipcMain.on("setTitle", (event, title) => {
  title = "CONET.ID - " + title;
  _mainWindow.setTitle(title);
  event.reply("titleChanged", title);
});

/* Open File Dialog MainWindow */
ipcMain.on("openDialog", (event, extentions = ["png", "jpg"]) => {
  dialog
    .showOpenDialog(_mainWindow, {
      buttonLabel: "Upload",
      defaultPath: app.getPath("home"),
      filters: [{ name: "Images", extensions: extentions }],
      properties: ["openFile"],
    })
    .then(async (file) => {
      if (file.filePaths) {
        let file1 = file.filePaths[0];
        let ext = path.extname(file1).replace(/\./g, "");
        let dataURL =
          "data:image/" + ext + ";base64," + fs.readFileSync(file1, "base64");
        event.reply("openDialog-reply", dataURL);
      }
    });
});

/* Open External Link From FronEnd */
ipcMain.on("onLinkExtenal", (event, url) => {
  require("electron").shell.openExternal(url);
});
