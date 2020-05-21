const macShortcuts = [
    {
        text: "Make the app full screen",
        command: `keystroke "f" using {command down, control down}`,
        shortcut: '⌘ + control + f'
    },
    {
        text: "Switch to the next most recently used app",
        command: `key code "48" using {command down}`,
        shortcut: "⌘ + tab"
    },
    {
        text: "Screenshot/Screen Recording",
        command: `key code "23" using {command down, shift down}`,
        shortcut: "⌘ + shift + 5"
    },
    {
        text: "Lock your Mac's screen",
        command: `keystroke "q" using {control down, command down}`,
        shortcut: "⌘ + control + q"
    },
    {
        text: "Log out of your Mac",
        control: `keystroke "q" using {command down, shift down}`,
        shortcut: "⌘ + shift + q"
    },
  {
    text: "Print",
    command: `keystroke "p" using {command down}`,
    shortcut: "⌘ + p",
  },
  {
    text: "Undo the previous action",
    command: `keystroke "z" using {command down}`,
    shortcut: "⌘ + z",
  },
  {
    text: "Redo the previous action",
    command: `keystroke "z" using {command down. shift down}`,
    shortcut: "⌘ + Shift + z",
  },
  {
    text: "Copy",
    command: `keystroke "c" using {command down}`,
    shortcut: "⌘ + c",
  },
  {
    text: "Cut",
    command: `keystroke "x using {command down}`,
    shortcut: "⌘ + x",
  },
  {
    text: "Paste",
    comamnd: `keystroke "v" using {command down}`,
    shortcut: "⌘ + v",
  },
  {
    text: "Select all",
    command: `keystroke "a" using {command down}`,
    shortcut: "⌘ + a",
  },

  {
    text: "Paste without formatting",
    command: `keystroke "v" using {command down, shift down}`,
    shortcut: "⌘ + Shift + v",
  },
  {
    text: "Minimize the window",
    command: `keystroke "m" using {command down}`,
    shortcut: "⌘ + m",
  },
  {
    text: "Hide current window",
    command: `keystroke "h" using {command down}`,
    shortcut: "⌘ + h",
  },
  {
    text: "Quit current window",
    command: `keystroke "q" using {command down}`,
    shortcut: "⌘ + q",
  },
  {
    text: "Open file",
    command: `keystroke "o" using {command down}`,
    shortcut: "⌘ + o",
  },
  {
    text: "Hide all but the current app",
    command: `keystroke "h" using {command down, option down}`,
    shortcut: "Option-Command-H",
  },
];

module.exports = {
  macShortcuts,
};
