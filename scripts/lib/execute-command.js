const applescript = require('applescript')

const errors = require('../errors')


function execCommand(appName, commandString) {
    /**
         * Executes a keyboard stroke in chrome on a specific URL
         * @param {string} commandString
         * @returns {Promise<void, Error>} 
         */
        const chromeScript = `tell application "${appName}"
        tell application "${appName}" to activate
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

module.exports = {
    execCommand
}
