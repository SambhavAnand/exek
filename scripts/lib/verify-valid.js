const applescript = require('applescript')

const errors = require('../errors')
const { allShortcuts } = require('../shortcuts')


function isValidWindow() {
    const activeWindowQstr = `tell application "System Events"
    set frontmostProcess to first process where it is frontmost
    set visible of frontmostProcess to false
    repeat while (frontmostProcess is frontmost)
        delay 0.2
    end repeat
    set secondFrontmost to name of first process where it is frontmost
    set frontmost of frontmostProcess to true
    end tell
    
    tell application (path to frontmost application as text)
    return secondFrontmost
    end tell`
    return new Promise(function (resolve, reject) {
        applescript.execString(activeWindowQstr, function (err, app) {
            console.log(app)
            if (err)
                reject(errors['APPLESCRIPT'])
            else if (app in allShortcuts)
                resolve(app)
            else
                reject(errors['UNSUPPORTED_APP'])
        })
    })
}


module.exports = {
    isValidWindow
}