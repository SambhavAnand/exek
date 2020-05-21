const calendarShortcuts = [
    {
        text: "Next week/month/year",
        command: `key code "124" using {command down}`,
        shortcut: "Command - Right Arrow"
    },
    {
        text: "Previous Week",
        command: `key code "123" using {command down}`,
        shortcut: "Command - Left Arrow"
    },
    {
        text: "Go to today",
        command: `keystroke "t" using {command down}`,
        shortcut: "Command - T"
    },
    {
        text: "Go to specific date",
        command: `keystroke "t" using {command down, shift down}`,
        shortcut: "Command - Shift - T"
    },
    {
        text: "Day view",
        command: `keystroke "1" using {command down}`,
        shortcut: "Command - 1",
        tags: "Switch"
    },
    {
        text: "Week view",
        command: `keystroke "2" using {command down}`,
        shortcut: "Command - 2",
        tags: "Switch"
    },
    {
        text: "Month view",
        command: `keystroke "3" using {command down}`,
        shortcut: "Command - 3",
        tags: "Switch"
    },
    {
        text: "Year view",
        command: `keystroke "4" using {command down}`,
        shortcut: "Command - 4",
        tags: "Switch"
    },
    {
        text: "Full-screen view",
        command: `keystroke "f" using {command down, control down}`,
        shortcut: "Command - Control - F"
    },
    {
        text: "Exit full-screen view",
        command: `key code "53"`,
        shortcut: "Escape"
    },
    {
        text: "Add event",
        command: `keystroke "n" using {command down}`,
        shortcut: "Command - N",
    },
    {
        text: "Edit selected event",
        command: `keystroke "e" using {command down}`,
        shortcut: "Command - E",
    },
    {
        text: "Show information",
        command: `keystroke "i" using {command down}`,
        shortcut: "Command - I",
    }
]

module.exports = {
    calendarShortcuts
}