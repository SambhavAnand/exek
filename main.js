const { app, BrowserWindow, globalShortcut, Menu, MenuItem, ipcMain } = require('electron')
const { verify, execCommand, generateShortcuts } = require('./scripts/lib')
const {chromeShortcuts} = require('./scripts/shortcuts/GoogleChrome')
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
    //mb.window.webContents.toggleDevTools();
    globalShortcut.register(
        'CommandOrControl+ Shift + k',
        toggleWindow
    );
});

mb.on('show', async () => {
    
    //Will Send a blocking message to the renderer channel
    mb.window.webContents.send("initialize", null);
    
    verify.isValidWindow()
    .then(async appName => { 
        mb.window.webContents.send("appShortcuts", appName)
    })
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
