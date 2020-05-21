const atomShortcuts = [
    {
        text: "Open settings",
        command: `key code "43" using {command down}`,
        shortcut: "Command - ,",
    },
    {
        text: "Open File (fuzzy)",
        command: `keystroke "p" using {command down}`,
        shortcut: "Command - P",
    },
    {
        text: "Browse open files",
        command: `keystroke "b" using {command down}`,
        shortcut: "Command - B",
    },
    {
        text: `Previous tab`,
        command: `key code "123" using {command down, option down}`,
        shortcut: "Option - Command - Left Arrow",
    }
]

module.exports = {
    atomShortcuts
}