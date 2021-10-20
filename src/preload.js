import { contextBridge, ipcRenderer, app } from "electron";
import fs from "fs";

// Expose ipcRenderer to the client
contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel, data) => {
    let validChannels = [
      "close-window",
      "minimize-window",
      "maximize-window",
      "net-check",
      "setTitle",
      "openDialog",
      "onLinkExtenal",
    ]; // <-- Array of all ipcRenderer Channels used in the client
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    let validChannels = ["net-status", "titleChanged", "openDialog-reply"]; // <-- Array of all ipcMain Channels used in the electron
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});
contextBridge.exposeInMainWorld("fs", {
  readFile: (path, options) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, options, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  writeFile: (path, data, option) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, option, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  createDirRecursive: async (path) => {
    return new Promise((resolve, reject) => {
      try {
        fs.mkdirSync(path, { recursive: true });
      } catch (error) {
        reject(error);
      }
    });
  },
  appPath: () => {
    return app.getPath();
  },
});

console.log("preload.js loaded");
