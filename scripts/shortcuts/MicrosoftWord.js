const wordShortcuts = [
    {
        text: "Undo the previous action",
        command: `keystroke "z" using {command down}`,
        shortcut: "⌘ + z"
    },
    {
        text: "Redo the previous action",
        command: `keystroke "y" using {command down}`,
        shortcut: "⌘ + y"
    },
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
        command: `keycode "50" using {command down, shift down}`,
        shortcut: "⌘ + shift + `"
    }
]

module.exports = {
    wordShortcuts
}