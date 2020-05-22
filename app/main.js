const { app, BrowserWindow, globalShortcut, Menu, Tray, ipcMain, screen } = require('electron')
const path = require('path')

const { verify } = require('./scripts/lib')
const { menubar } = require('menubar')
const { ShortcutsStore, Store } = require('./scripts/util')

const iconPath = app.isPackaged ? path.join(process.resourcesPath, "resources/iconTemplate.png") : "./assets/iconTemplate.png";

//write function with min/max limits so that the size of the window is always resonable
//Local Shortcut shortcutsStore
const shortcutsStore = new ShortcutsStore()
const userOptionsStore = new Store({settingName: 'useroptions', default: {firstStartup: true}})

const firstStartup = userOptionsStore.get('firstStartup')

let win; 
function toggleWindow() {
    if (win.isVisible()) {
        win.hide()
    }
    else {
        win.setVisibleOnAllWorkspaces(true)
        win.show()
        win.setVisibleOnAllWorkspaces(false)
    }
}



const getCurrentOpenAtLoginVal = () => app.getLoginItemSettings().openAtLogin

app.on("ready", () => {
    
    if(firstStartup) {
        app.setLoginItemSettings({ openAtLogin: true })
        userOptionsStore.put([{key: 'firstStartup', val: false}, {key: 'openAtLogin', val: true}])
    }
    else {
        userOptionsStore.put([{key: 'openAtLogin', val: getCurrentOpenAtLoginVal()}])
    }

    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({ 
        width: 550, 
        height: 380,
        frame:false, 
        resizable: false,
        transparent: true,
        webPreferences:{
            nodeIntegration: true
        },
        show: false
    });
    
    win.loadURL(`file://${__dirname}/index.html`)
    
    win.on('ready-to-show', () => {
        shortcutsStore.getShortcuts()
        .then(data => win.webContents.send('updateData', data))
        .catch(error => console.log(error))
    })

    const ret = globalShortcut.register('Ctrl+k', () => {
        toggleWindow()
        if (!ret) {
            console.log('registration failed')
          }  
    });

    //DEV TOOLS TOGGLE SHORT CUT - Remove for shipping 
    // const ret2 = globalShortcut.register('Ctrl+x', () => {
    //     win.webContents.toggleDevTools()
    //     win.setResizable(true);
    //     if (!ret2) {
    //         console.log('registration for dev tools failed')
    //       }  
    // });
    
    const tray = new Tray(iconPath);
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
        },
        {
            label: "Open at startup",
            checked: getCurrentOpenAtLoginVal(),
            type: 'checkbox',
            click: () => {
                let currentVal = getCurrentOpenAtLoginVal();
                app.setLoginItemSettings({openAtLogin: !currentVal})
                userOptionsStore.put([{key: 'openAtLogin', val: !currentVal}])
            }
        }
    ]);
    tray.setContextMenu(contextMenu);
    app.dock.hide()
    const mb = menubar({
        tray,
    });
});



shortcutsStore.on('newDataAvailable', (newData) => {
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