const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron')
const { verify, generateShortcuts } = require('./scripts/lib')
const { menubar } = require('menubar')

const mb = menubar({
    width: 300,
    height: 400,
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
    // mb.window.webContents.toggleDevTools();
    globalShortcut.register(
        'CommandOrControl+ Shift + k',
        toggleWindow
    );
});

mb.on('show', () => {
    mb.window.webContents.send("appShortcuts", "Google Chrome");
})


mb.on("hide", () => {
    Menu.sendActionToFirstResponder("hide:");
});
  
mb.app.on("will-quit", () => {
    globalShortcut.unregisterAll();
    mb.app.quit();
});
//on 'Enter' Hide window