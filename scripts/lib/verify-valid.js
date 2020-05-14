const applescript = require('applescript')

const errors = require('../errors')
const {siteCommandMap} = require('./mappings.js')

const activeTabQstr = `tell application "Google Chrome" to return URL of active tab of front window`;

function isValidWebsite () {
    return new Promise(function (resolve, reject) {
        applescript.execString(activeTabQstr, function (err, url) {
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
    isValidWebsite
}