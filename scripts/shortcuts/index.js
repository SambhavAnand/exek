const { chromeShortcuts } = require('./GoogleChrome')
const { wordShortcuts } = require('./MicrosoftWord')

const allShortcuts = {
    "Google Chrome": chromeShortcuts,
    "Microsoft Word": wordShortcuts
}

module.exports = {
    allShortcuts
}