const { app, BrowserWindow, globalShortcut } = require('electron')


app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+ Shift + k', ()=> {
        let win = new BrowserWindow({width:800, height:600});
        win.loadURL(`file://${__dirname}/index.html`)
    })
}) 

//on 'Enter' Hide window