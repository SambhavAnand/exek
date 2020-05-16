const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron')
const { verify, generateShortcuts } = require('./scripts/lib')


app.whenReady().then(() => {
    let win = new BrowserWindow({width:400, height:200});
    win.loadURL(`file://${__dirname}/index.html`)
    globalShortcut.register('CommandOrControl+ Shift + k', ()=> {
        win.show()
        // win.once('ready-to-show', () => {
        //     win.show()
        // })
    })
    
}) 

//on 'Enter' Hide window