const { chromeShortcuts } = require('./GoogleChrome')
const { wordShortcuts } = require('./MicrosoftWord')
const { macShortcuts } = require('./MacOS')
const { notionShortcuts } = require('./Notion')
const { calendarShortcuts } = require('./Calendar')

const allShortcuts = {
    "MacOS": macShortcuts,
    "Google Chrome": chromeShortcuts,
    "Microsoft Word": wordShortcuts,
    "Notion": notionShortcuts,
    "Calendar": calendarShortcuts
}

module.exports = {
    allShortcuts
}