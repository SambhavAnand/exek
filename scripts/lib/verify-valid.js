const applescript = require('applescript')

const errors = require('../errors')
const {siteCommandMap} = require('./mappings.js')

function isValidChromeWebsite () {
    const activeChromeQstr = `tell application "Google Chrome" to return URL of active tab of front window`;
    return new Promise(function (resolve, reject) {
        applescript.execString(activeChromeQstr, function (err, url) {
            if(err)
                reject(errors['APPLESCRIPT'])
            Object.keys(siteCommandMap).forEach(key => {
                if (url.includes(key))
                    resolve(siteCommandMap[key])
            })
            reject(errors['UNSUPPORTED_WEBSITE'])
        })
    })
}

module.exports = {
    isValidChromeWebsite
}