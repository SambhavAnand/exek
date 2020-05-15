const {websiteShortcutMapping} = require('./website-shortcuts')

const chromeShortcuts = {
    appShortcuts: [
        {
            text: "Open a new window",
            command: `keystroke "n" using {command down}`,
            shortcut: "⌘ + n"
        },
        {
            text: "Open a new window in incognito mode",
            command: `keystroke "n" using {command down, shift down}`,
            shortcut: "⌘ + Shift + n"
        }
    ],
    inAppShortcuts: websiteShortcutMapping,
}

module.exports = {
    chromeShortcuts
}