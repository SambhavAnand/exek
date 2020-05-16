const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron')


app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+ Shift + k', ()=> {
        let win = new BrowserWindow({width:400, height:200});
        win.loadURL(`file://${__dirname}/index.html`)
    })
}) 

//on 'Enter' Hide window