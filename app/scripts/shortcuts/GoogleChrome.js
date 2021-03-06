const { websiteShortcutMapping } = require("./website-shortcuts");

const chromeShortcuts = {
  appShortcuts: [{
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
      text: "Jump to the last tab",
      command: `keystroke "9" using {command down}`,
      shortcut: "⌘ + 9",
      tags: "end,final"
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
      tags: "quit"
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
    },
    {
      text: "Show or hide the Bookmarks Bar",
      command: `keystroke "b" using {command down, shift down}`,
      shortcut: "⌘ + Shift + b",
    },
    {
      text: "Open the Settings page in a new tab",
      command: `keystroke ";" using {command down}`,
      shortcut: "⌘ + ,",
    },
    {
      text: "Open the History page in a new tab",
      command: `keystroke "y" using {command down}`,
      shortcut: "⌘ + y",
    },
    {
      text: "Open the Downloads page in a new tab",
      command: `keystroke "j" using {command down, shift down}`,
      shortcut: "⌘ + Shift + j",
    },
    {
      text: "Open the Find Bar to search the current page",
      command: `keystroke "f" using {command down}`,
      shortcut: "⌘ + f",
    },
    {
      text: "Jump to the next match to your Find Bar search",
      command: `keystroke "g" using {command down}`,
      shortcut: "⌘ + g",
    },
    {
      text: "Jump to the previous match to your Find Bar search",
      command: `keystroke "g" using {command down, shift down}`,
      shortcut: "⌘ + Shift + g",
    },
    {
      text: "When Find Bar is open, search for selected text",
      command: `keystroke "e" using {command down}`,
      shortcut: "⌘ + e",
    },
    {
      text: "Log in as a different user, browse as a Guest, or access payment and password info",
      command: `keystroke "m" using {command down, shift donw}`,
      shortcut: "⌘ + Shift + m",
    },
    {
      text: "Open file",
      command: `keystroke "o" using {command down}`,
      shortcut: "⌘ + o"
    },
    {
      text: "Jump to the address bar",
      command: `keystroke "l" using {command down}`,
      shortcut: "⌘ + l",
    },
    {
      text: "Open options to print the current page",
      command: `keystroke "p" using {command down}`,
      shortcut: "⌘ + p",
    },
    {
      text: "Open options to save the current page",
      command: `keystroke "s" using {command down}`,
      shortcut: "⌘ + s",
    },
    {
      text: "Reload your current page, ignoring cached content",
      command: `keystroke "r" using {command down, shift down}`,
      shortcut: "⌘ + Shift + r",
    },
    {
      text: "Save your current webpage as a bookmark",
      command: `keystroke "d" using {command down}`,
      shortcut: "⌘ + d",
    },
    {
      text: "Save all open tabs as bookmarks in a new folder",
      command: `keystroke "d" using {command down, shift down}`,
      shortcut: "⌘ + Shift + d",
    },
    {
      text: "Return everything on the page to the default size",
      command: `keystroke "0" using {command down}`,
      shortcut: "⌘ + 0",
    }
  ],
  inAppShortcuts: websiteShortcutMapping,
};


module.exports = {
  chromeShortcuts,
};
