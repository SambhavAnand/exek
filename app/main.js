const { app, BrowserWindow, globalShortcut, Menu, MenuItem, ipcMain, screen } = require('electron')
const { verify } = require('./scripts/lib')
const { menubar } = require('menubar')
const fetch = require('electron-fetch').default

//write function with min/max limits so that the size of the window is always resonable

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
    // mb.window.webContents.toggleDevTools();

});

let win; 

app.on("ready", function bar_read() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({ 
        width: 500, 
        height: 300,
        frame:false, 
        transparent: true,
        webPreferences:{
            nodeIntegration: true
        }
    });
    win.loadURL(`file://${__dirname}/index.html`)
    const ret = globalShortcut.register('Escape+;', () => {
        win.show()
        console.log('Shortcut executed')
        if (!ret) {
            console.log('registration failed')
          }  
    });
});

app.on('browser-window-focus', () => {
    win.webContents.send("initialize", null);
    verify.isValidWindow()
    .then(async appName => { 
        win.webContents.send("appShortcuts", appName)
    })
    .catch(error => win.webContents.send("error", error))
});

app.on("will-quit", () => {
    globalShortcut.unregisterAll();
});

mb.on('show', async () => {
    //Will Send a blocking message to the renderer channel
    mb.window.webContents.send("initialize", null);
    verify.isValidWindow()
    .then(async appName => { 
        mb.window.webContents.send("appShortcuts", appName)
    })
    .catch(error => mb.window.webContents.send("error", error))

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
