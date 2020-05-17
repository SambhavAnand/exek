const applescript = require('applescript')

const errors = require('../errors')


function execChromeCommand (commandString) {
    /**
     * Executes a keyboard stroke in chrome on a specific URL
     * @param {string} commandString
     * @returns {Promise<void, Error>} 
     */
    const chromeScript = `tell application "Google Chrome"
    tell application "Google Chrome" to activate
    tell application "System Events" to ${commandString}
    end tell`
    return new Promise(function (resolve, reject) {
        applescript.execString(chromeScript, function (err) {
            if(err) {
                console.log(err)
                reject(errors['APPLESCRIPT'])
            }
            else
                resolve()
        })
    })
}

const appToCommand = {
    "Google Chrome": function (commandString) {
        /**
         * Executes a keyboard stroke in chrome on a specific URL
         * @param {string} commandString
         * @returns {Promise<void, Error>} 
         */
        const chromeScript = `tell application "Google Chrome"
        tell application "Google Chrome" to activate
        tell application "System Events" to ${commandString}
        end tell`
        return new Promise(function (resolve, reject) {
            console.log(chromeScript)
            applescript.execString(chromeScript, function (err) {
                if(err) {
                    console.log(err)
                    reject(errors['APPLESCRIPT'])
                }
                else
                    resolve()
            })
        })
    }
}

function execCommand(appName, commandString) {
    const generator = appToCommand[appName]
    return generator(commandString)
}

module.exports = {
    execCommand
}
