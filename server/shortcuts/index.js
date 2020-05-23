const { chromeShortcuts } = require('./GoogleChrome')
const { wordShortcuts } = require('./MicrosoftWord')
const { macShortcuts } = require('./MacOS')
const { notionShortcuts } = require('./Notion')
const { calendarShortcuts } = require('./Calendar')
const { atomShortcuts } = require('./Atom')
const { finderShortcuts } = require('./Finder')
const { safariShortcuts } = require('./Safari')
const { sublimeShortcuts } = require('./Sublime')
const { excelShortcuts } = require('./MicrosoftExcel')
const { mailShortcuts } = require('./Mail')

const allShortcuts = {
    "MacOS": macShortcuts,
    "Google Chrome": chromeShortcuts,
    "Microsoft Word": wordShortcuts,
    "Notion": notionShortcuts,
    "Calendar": calendarShortcuts,
    "Atom": atomShortcuts,
    "Finder": finderShortcuts,
    "Safari": safariShortcuts,
    "Sublime Text": sublimeShortcuts,
    "Microsoft Excel": excelShortcuts,
    "Mail": mailShortcuts
}

module.exports = {
    allShortcuts
}