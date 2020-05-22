const { chromeShortcuts } = require('./GoogleChrome')
const { wordShortcuts } = require('./MicrosoftWord')
const { macShortcuts } = require('./MacOS')
const { notionShortcuts } = require('./Notion')
const { calendarShortcuts } = require('./Calendar')
const { atomShortcuts } = require('./Atom')
const { finderShortcuts } = require('./Finder')
const { safariShortcuts } = require('./Safari')
const { excelShortcuts } = require('./MicrosoftExcel')

const allShortcuts = {
    "MacOS": macShortcuts,
    "Google Chrome": chromeShortcuts,
    "Microsoft Word": wordShortcuts,
    "Notion": notionShortcuts,
    "Calendar": calendarShortcuts,
    "Atom": atomShortcuts,
    "Finder": finderShortcuts,
    "Safari": safariShortcuts,
    "Microsoft Excel": excelShortcuts
}

module.exports = {
    allShortcuts
}