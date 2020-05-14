const siteCommandMap = {
    'https://mail.google.com': [
        {
            text: "Numbered list",
            command: `keystroke "7" using {command down, shift down}`
        },
        {
            text: "Previous message in an open conversation",
            command: `keystroke "p"`,
            shortcut: "n"
        },
        {
            text: "Next message in an open conversation ",
            command: `keystroke "n"`,
            shortcut: "n"
        },
        {
            text: "Advance to the next chat or compose",
            command: `keystroke "." using {control down}`,
            shortcut: "Ctrl + ."

        },
        {
            text: "Advance to previous chat or compose",
            command: `keystroke "," using {control down}`,
            shortcut: "Ctrl + ,"
        },
        {
            text: "Send",
            command: `key code "36" using {command down}`,
            shortcut: "⌘ + Enter"
        },
        {
            text: "Add cc recipients ",
            command: `keystroke "c" using {command down, shift down}`,
            shortcut: "⌘ + Shift + c"
        },
        {
            text: "Add bcc recipients ",
            command: `keystroke "b" using {command down, shift down}`,
            shortcut: "⌘ + Shift + b"
        },
        {
            text: "Access custom from",
            command: `keystroke "f" using {command down, shift down}`,
            shortcut: "⌘ + Shift + f"
        },
        {
            text: "Insert a link",
            command: `keystroke "k" using {command down}`,
            shortcut: "⌘ + k"
        },
        {
            text: "Go to next misspelled word (Mac only) ",
            command: `keystroke ";" using {command down}`,
            shortcut: "⌘ + ;"
        },
        {
            text: "Open spelling suggestions",
            command: `keystroke "m" using {command down}`,
            shortcut: "⌘ + m"
        }
    ]
}

module.exports = {
    siteCommandMap
}