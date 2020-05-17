const {
    websiteShortcutMapping
} = require('./website-shortcuts')

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
        },
        {
            text: "Open a new window",
            command: `keystroke "n" using {command down}`,
            shortcut: "⌘ + n",
        },
        {
            text: "Open a new window in Incognito mode",
            command: `keystroke "n" using {command down, shift down}`,
            shortcut: "⌘ + Shift + n",
        },
        {
            text: "Open a new tab, and jump to it",
            command: `keystroke "t" using {command down}`,
            shortcut: "⌘ + t",
        },
        {
            text: "Reopen previously closed tabs in the order they were closed",
            command: `keystroke "t" using {command down, shift down}`,
            shortcut: "⌘ + Shift + t",
        },
        {
            text: "Jump to the next open tab",
            command: `keystroke "" using {command down}`
        },
        {
            text: "Jump to the last tab",
            command: `keystroke "9" using {command down}`,
            shortcut: "⌘ + 9",
        },
        {
            text: "Open the previous page in your browsing history for the current tab",
            command: `keystroke "[" using {command down}`,
            shortcut: "⌘ + [",
        },
        {
            text: "Open the next page in your browsing history for the current tab",
            command: `keystroke "]" using {command down}`,
            shortcut: "⌘ + ]",
        },
        {
            text: "Close the current tab or pop-up",
            command: `keystroke "w" using {command down}`,
            shortcut: "⌘ + w",
        },
        {
            text: "Close the current window",
            command: `keystroke "w" using {commad down, shift down}`,
            shortcut: "⌘ + Shift + w",
        },
        {
            text: "Minimize the window",
            command: `keystroke "m" using {command down}`,
            shortcut: "⌘ + m",
        },
        {
            text: "Hide Google Chrome",
            command: `keystroke "h" using {command down}`,
            shortcut: "⌘ + h",
        },
        {
            text: "Quit Google Chrome",
            command: `keystroke "q" using {command down}`,
            shortcut: "⌘ + q",
        }
    ],
    inAppShortcuts: websiteShortcutMapping,
}

module.exports = {
    chromeShortcuts
}