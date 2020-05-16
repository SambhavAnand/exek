const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron')
const { verify, generateShortcuts } = require('./scripts/lib')
// const objc = require('objc')
const { menubar } = require('menubar')

// app.whenReady().then(() => {
//     let win = new BrowserWindow({width:400, height:200});
//     win.loadURL(`file://${__dirname}/index.html`)
//     globalShortcut.register('CommandOrControl+ Shift + k', ()=> {
//         win.show()
//         // win.once('ready-to-show', () => {
//         //     win.show()
//         // })
//     })
    
// }) 

const mb = menubar({
    width: 300,
    height: 400,
    resizable: false,
    showDockIcon: false,
    preloadWindow: true
});
function toggleWindow() {
    if (mb.window.isVisible()) {
        mb.hideWindow()
        console.log("Hide window called")
    }
    else {
        console.log("calld")
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
    console.log("Show cxalled")
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