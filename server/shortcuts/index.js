const { chromeShortcuts } = require('./GoogleChrome')
const { wordShortcuts } = require('./MicrosoftWord')
const { macShortcuts } = require('./MacOS')
const { notionShortcuts } = require('./Notion')
const { calendarShortcuts } = require('./Calendar')
const { atomShortcuts } = require('./Atom')
const { finderShortcuts } = require('./Finder')
const { safariShortcuts } = require('./Safari')
<<<<<<< HEAD
const { sublimeShortcuts } = require('./Sublime')
=======
const { excelShortcuts } = require('./MicrosoftExcel')
>>>>>>> 62bcb4cb57e5368826599c9b3f4c6f9afdb12ec2

const allShortcuts = {
    "MacOS": macShortcuts,
    "Google Chrome": chromeShortcuts,
    "Microsoft Word": wordShortcuts,
    "Notion": notionShortcuts,
    "Calendar": calendarShortcuts,
    "Atom": atomShortcuts,
    "Finder": finderShortcuts,
    "Safari": safariShortcuts,
<<<<<<< HEAD
    "Sublime Text": sublimeShortcuts
=======
    "Microsoft Excel": excelShortcuts
>>>>>>> 62bcb4cb57e5368826599c9b3f4c6f9afdb12ec2
}

module.exports = {
    allShortcuts
}