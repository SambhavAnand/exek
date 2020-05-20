const applescript = require('applescript')

const errors = require('../errors')

function getAppName() {
    const activeWindowQstr = `tell application "System Events"
    set activeApp to name of first application process whose frontmost is true
    return activeApp
    end tell
    `
    return new Promise(function (resolve, reject) {
        applescript.execString(activeWindowQstr, function (err, app) {
            if (err)
                reject(errors['APPLESCRIPT'])
            else
                resolve(app)
        })
    })
}

module.exports = {
    getAppName
}