const { app, BrowserWindow, globalShortcut, Menu, Tray, ipcMain, screen } = require('electron')

const { verify } = require('./scripts/lib')
const { menubar } = require('menubar')

const {ShortcutsStore} = require('./scripts/util')


//write function with min/max limits so that the size of the window is always resonable
//Local Shortcut store
const store = new ShortcutsStore()

let win; 
function toggleWindow() {
    if (win.isVisible()) {
        win.hide()
    }
    else {
        win.show()
    }
}


app.on("ready", () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({ 
        width: .3*width, 
        height: .4*height,
        frame:false, 
        transparent: true,
        webPreferences:{
            nodeIntegration: true
        },
        show: false
    });
    
    win.loadURL(`file://${__dirname}/index.html`)
    
    win.webContents.toggleDevTools()
    win.on('ready-to-show', () => {
        store.getShortcuts()
        .then(data => win.webContents.send('updateData', data))
        .catch(error => console.log(error))
    })

    const ret = globalShortcut.register('Ctrl+k', () => {
        toggleWindow()
        if (!ret) {
            console.log('registration failed')
          }  
    });
    const tray = new Tray('./iconTemplate.png');
    const contextMenu = Menu.buildFromTemplate([
        {
            label: "Show/Hide Search Bar",
            click: () => {
                toggleWindow()
            }
        },
        {
            label: "Quit", click: ()=> {
                app.quit()
            }
        }
    ]);
    tray.setContextMenu(contextMenu);
    tray.on('click', () => console.log("clicked"))
    const mb = menubar({
        tray,
    });
    

});

store.on('newDataAvailable', (newData) => {
    //New Data is available
    if(win)
        win.webContents.send('updateData', newData)
})

app.on('browser-window-focus', () => {
    win.webContents.send("initialize", null);
    verify.getAppName()
    .then(async appName => { 
        win.webContents.send("appShortcuts", appName)
    })
    .catch(error => win.webContents.send("error", error))
});

//Required to hide the search bar when a click outside the bar is made
app.on('browser-window-blur', () => {
    win.hide()
});

app.on("will-quit", () => {
    globalShortcut.unregisterAll();
});