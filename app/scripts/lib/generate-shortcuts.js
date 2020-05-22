const applescript = require('applescript')


const appToShortcutGenerator = {
    "Google Chrome": function(allShortcuts) {
        const activeChromeQstr = `tell application "Google Chrome" to return URL of active tab of front window`;
        return new Promise(function (resolve, reject) {
            applescript.execString(activeChromeQstr, function (err, url) {
                let res = allShortcuts["Google Chrome"]['appShortcuts'].map(shortcut => ({...shortcut, app_name: "Google Chrome"}))
                Object.keys(allShortcuts["Google Chrome"]["inAppShortcuts"]).forEach(key => {
                    if (url.includes(key)) {
                        let shortcutWithHeaders = {}
                        shortcutWithHeaders[key] = allShortcuts["Google Chrome"]["inAppShortcuts"][key].map(
                            shortcut => ({...shortcut, app_name: "Google Chrome"}))
                        shortcutWithHeaders["Google Chrome"] = res
                        resolve(shortcutWithHeaders)
                    }
                })
                resolve({"Google Chrome": res})
            })
        })
    },
    "Safari": function(allShortcuts) {
        const activeSafariString = `tell application "Safari" to return URL of front document`
        return new Promise(function (resolve, reject) {
            applescript.execString(activeSafariString, function(err, url) {
                Object.keys(allShortcuts["Safari"]["inAppShortcuts"]).forEach(key => {
                    if(url.includes(key)) {
                        let shortcutWithHeaders = {}
                        shortcutWithHeaders[key] = allShortcuts["Safari"]["inAppShortcuts"][key].map(
                            shortcut => ({...shortcut, app_name: "Safari"}))
                        resolve(shortcutWithHeaders)
                    }
                })
                resolve({"Safari":[]})
            })
        })
    }
}

function generateShortcuts(allShortcuts, appName) {
    if(appName in appToShortcutGenerator)
        return appToShortcutGenerator[appName](allShortcuts)
    else 
        return new Promise(function (resolve) {
            let res = {}
            res[appName] = allShortcuts[appName].map(shortcut => ({...shortcut, app_name: appName}))
            resolve(res)
        })
}

module.exports = generateShortcuts
