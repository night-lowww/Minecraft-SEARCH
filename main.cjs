const { app, BrowserWindow, shell } = require("electron");

const START_URL = "https://night-lowww.github.io/";
const APP_ORIGIN = new URL(START_URL).origin;

app.setAppUserModelId("com.nightlowww.minecraftsearch");

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 900,
    minHeight: 600,
    title: "Minecraft SEARCH",
    backgroundColor: "#10130f",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    }
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    try {
      if (new URL(url).origin === APP_ORIGIN) {
        win.loadURL(url);
      } else {
        shell.openExternal(url);
      }
    } catch {
      shell.openExternal(url);
    }

    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    try {
      if (new URL(url).origin !== APP_ORIGIN) {
        event.preventDefault();
        shell.openExternal(url);
      }
    } catch {
      event.preventDefault();
    }
  });

  win.loadURL(START_URL);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
