const wordShortcuts = [
    {
        text: "Display the Go To dialog",
        command: `keystroke "g" using {command down, option down}`,
        shortcut: "⌘ + Option + g"
    },
    {
        text: "Display the Spelling and Grammar Dialog",
        command: `keystroke "l" using {command down, option down}`,
        shortcut: "⌘ + Option + l"
    },
    {
        text: "Switch to Next Window",
        command: `key code "50" using {command down}`,
        shortcut: "⌘ + `"
    },
    {
        text: "Switch to the Previous Window",
        command: `key code "50" using {command down, shift down}`,
        shortcut: "⌘ + shift + `"
    },
    {
        text: "Display the Save As dialog",
        command: `keystroke "s" using {shift down, command down}`,
        shortcut: "⌘ + shift + s"
    },
    {
        text: "Display the Find and Replace pane",
        command: `keystroke "h" using {control down}`,
        shortcut: "control + h",
        tags: "search"
    },
    {
        text: "Search for selected text in your web browser",
        command: `keystroke "l" using {command down, shift down}`,
        shortcut: "⌘ + shift + l"
    },
    {
        text: "Move the cursor to the end of the current line",
        command: `key code "124" using {command down}`,
        shortcut: "⌘ + right arrow",
        tags: "last"
    },
    {
        text: "Move the cursor to beginning of the current line",
        command: `key code "123" using {command down}`,
        shortcut: "⌘ + left arrow",
        tags: "start,first"
    }
]

module.exports = {
    wordShortcuts
}