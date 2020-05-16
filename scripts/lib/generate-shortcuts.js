const { allShortcuts } = require('../shortcuts')
const applescript = require('applescript')


const appToShortcutGenerator = {
    "Google Chrome": function() {
        const activeChromeQstr = `tell application "Google Chrome" to return URL of active tab of front window`;
        return new Promise(function (resolve, reject) {
            applescript.execString(activeChromeQstr, function (err, url) {
                let res = [...allShortcuts["Google Chrome"]['appShortcuts']]
                Object.keys(allShortcuts["Google Chrome"]["inAppShortcuts"]).forEach(key => {
                    if (url.includes(key)) {
                        let shortcutWithHeaders = {}
                        shortcutWithHeaders[key] = allShortcuts["Google Chrome"]["inAppShortcuts"][key]
                        shortcutWithHeaders["Google Chrome"] = res
                        resolve(shortcutWithHeaders)
                    }
                })
                resolve({"Google Chrome": res})
            })
        })
        
    }
}

function generateShortcuts(appName) {
    /**
     * Generates shortcuts for an app. Assumes that the app has been verifies and is supported by our system
     * @param {appName} string
     */
    const generator = appToShortcutGenerator[appName]
    return generator()
}

module.exports = generateShortcuts
