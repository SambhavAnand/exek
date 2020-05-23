const applescript = require('applescript')

const errors = require('../errors')
const querystring = require('querystring')

const serverURL = process.env.serverURL || "https://exek.herokuapp.com"

function execCommand(appName, commandString) {
    /**
         * Executes a keyboard stroke in chrome on a specific URL
         * @param {string} commandString
         * @returns {Promise<void, Error>} 
         */
        const chromeScript = `tell application "${appName}"
        activate
        tell application "System Events" 
        ${commandString}
        end tell
        end tell`
        return new Promise(function (resolve, reject) {
            applescript.execString(chromeScript, function (err) {
                if(err) {
                    const qs = querystring.stringify({errorMsg: err['appleScript']})
                    window.fetch(`${serverURL}/reportError?${qs}`)
                    .then(() => console.log("Successfully logged an error"))
                    .catch(error => console.log("error occurred"))
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
