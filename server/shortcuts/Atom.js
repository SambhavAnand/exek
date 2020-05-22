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
    },
    {
        text: "Next tab",
        command: `key code "124" using {command down, option down}`,
        shortcut: "Option - Command - Right Arrow",
    },
    {
        text: "Grammar Selector",
        command: `keystroke "l" using {control down, shift down}`,
        shortcut: "Control - Shift - l",
    },
    {
        text: "Markdown Preview",
        command: `keystroke "m" using {control down, shift down}`,
        shortcut: "Control - Shift - M",
    },
    {
        text: "Toggle Tree view",
        command: `keystroke "k" using {command down}`,
        shortcut: "Command - K",
        tags: "hierarchy"
    },
    {
        text: "Reload Atom",
        command: `keystroke "l" using {control down, option down, command down}`,
        shortcut: "Control - Option - Command - L",
    },
    {
        text: "Open link",
        command: `keystroke "o" using {control down, shift down}`,
        shortcut: "Control - Shift - o",
    },
    {
        text: "Toggle dev tools",
        command: `keystroke "i" using {option down, command down}`,
        shortcut: "Command - Option - I",
    },
    {
        text: "New Window",
        command: `keystroke "n" using {command down, shift down}`,
        shortcut: "Command - Shift - N",
    },
    {
        text: "Open",
        command: `keystroke "o" using {command down}`,
        shortcut: "Command - O",
    },
    {
        text: "Toggle full screen",
        command: `keystroke "f" using {command down, control down}`,
        shortcut: "Control - Command - F",
    },
    {
        text: "Duplicate the current line",
        command: `keystroke "d" using {shift down, command down}`,
        shortcut: "Command - Shift - D",
        tags: "copy"
    },
    {
        text: "Delete line",
        command: `keystroke "k" using {command down, shift down}`,
        shortcut: "Command - Shift - K",
    },
    {
        text: "Move/Swap Line up",
        command: `key code "126" using {command down, control down}`,
        shortcut: "Command - Control - Up Arrow",
    },
    {
        text: "Move/Swap Line down",
        command: `key code "125" using {command down, control down}`,
        shortcut: "Command - Control - Down Arrow",
    },
    {
        text: "Find/Replace",
        command: `keystroke "f" using {command down}`,
        shortcut: "Command - f"
    },
    {
        text: "Find in project",
        command: `keystroke "f" using {command down, shift down}`,
        shortcut: "Command - Shift - f",
    },
    {
        text: "Go to line",
        command: `keystroke "g" using {control down}`,
        shortcut: "Control - g",
        tags: "jump"
    },
    {
        text: "Go to matching bracket",
        command: `keystroke "m" using {control down}`,
        shortcut: "Control - M",
    },
    {
        text: "Select entire line",
        command: `keystroke "l" using {command down}`,
        shortcut: "Command - l",
    },
    {
        text: "Comment selected text",
        command: `key code "44" using {command down, }`,
        shortcut: "Command - /",
    },
    {
        text: "Select words matching highlighted word",
        command: `keystroke "d" using {command down}`,
        shortcut: "Command - d",
    },
    {
        text: "Fold selection of code",
        command: `key code "33" using {command down, option down}`,
        shortcut: "Option - Command - [",
    },
    {
        text: "Unfold selection of code",
        command: `key code "34" using {command down, option down}`,
        shortcut: "Option - Command - ]",
    }
]

module.exports = {
    atomShortcuts
}