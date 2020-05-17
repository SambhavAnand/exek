const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron')
const { verify, generateShortcuts } = require('./scripts/lib')
const { menubar } = require('menubar')

const mb = menubar({
    width: 500,
    height: 800,
    resizable: false,
    showDockIcon: false,
    preloadWindow: true,
    browserWindow: {
        webPreferences: {
            nodeIntegration: true
        }
    }
});
function toggleWindow() {
    if (mb.window.isVisible()) {
        mb.hideWindow()
    }
    else {
        mb.showWindow()
    }
}
  
mb.on("ready", function ready() {
    mb.window.webContents.toggleDevTools();
    globalShortcut.register(
        'CommandOrControl+ Shift + k',
        toggleWindow
    );
});

mb.on('show', () => {
    verify.isValidWindow()
    .then(appName => mb.window.webContents.send("appShortcuts", appName))
    .catch(error => mb.window.webContents.send("noAppShortcuts", error))
})

mb.on("hide", () => {
    Menu.sendActionToFirstResponder("hide:");
});

mb.on('after-show', () => {
    //Seems to be a bug in the menubar project as the bool value isn't set to true upon a call of showWindow
    mb._isVisible = true;
})
  
mb.app.on("will-quit", () => {
    globalShortcut.unregisterAll();
    mb.app.quit();
});
//on 'Enter' Hide window