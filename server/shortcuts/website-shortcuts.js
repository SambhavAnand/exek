const websiteShortcutMapping = {
  'mail.google.com': [{
      text: "Previous message in an open conversation",
      command: `keystroke "p"`,
      shortcut: "p",
    },
    {
      text: "Next message in an open conversation ",
      command: `keystroke "n"`,
      shortcut: "n"
    },
    {
      text: "Next chat",
      command: `keystroke "." using {control down}`,
      shortcut: "Ctrl + .",
      tags: "advance,"

    },
    {
      text: "Previous chat",
      command: `keystroke "," using {control down}`,
      shortcut: "Ctrl + ,",
      tags: "advance"
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
    // {
    //     text: "Access custom from",
    //     command: `keystroke "f" using {command down, shift down}`,
    //     shortcut: "⌘ + Shift + f"
    // },
    {
      text: "Insert a link",
      command: `keystroke "k" using {command down}`,
      shortcut: "⌘ + k",
      tags: "add,url"
    },
    {
      text: "Go to next misspelled word",
      command: `keystroke ";" using {command down}`,
      shortcut: "⌘ + ;",
      tags: "spelling"
    },
    {
      text: "Open spelling suggestions",
      command: `keystroke "m" using {command down}`,
      shortcut: "⌘ + m"
    },
    {
      text: "Previous font",
      command: `keystroke "5" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + 5"
    },
    {
      text: "Next font",
      command: `keystroke "6" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + 6"
    },
    {
      text: "Decrease text size",
      command: `keystroke "-" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + -"
    },
    {
      text: "Increase text size",
      command: `keystroke "+" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift and +"
    },
    {
      text: "Bold",
      command: `keystroke "b" using {command down}`,
      shortcut: "⌘/Ctrl + b"
    },
    {
      text: "Italics",
      command: `keystroke "i" using {command down}`,
      shortcut: "⌘/Ctrl + i"
    },
    {
      text: "Underline",
      command: `keystroke "u" using {command down}`,
      shortcut: "⌘/Ctrl + u"
    },
    {
      text: "Numbered list",
      command: `keystroke "7" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + 7"
    },
    {
      text: "Bulleted list",
      command: `keystroke "8" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + 8"
    },
    {
      text: "Quote",
      command: `keystroke "9" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + 9"
    },
    {
      text: "Indent less",
      command: `keystroke "[" using {command down}`,
      shortcut: "⌘/Ctrl + ["
    },
    {
      text: "Indent more",
      command: `keystroke "]" using {command down}`,
      shortcut: "⌘/Ctrl + ]"
    },
    {
      text: "Align left",
      command: `keystroke "l" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + l"
    },
    {
      text: "Align center",
      command: `keystroke "e" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + e"
    },
    {
      text: "Align right",
      command: `keystroke "r" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + r"
    },
    {
      text: "Remove formatting",
      command: `keystroke "\" using {command down}`,
      shortcut: "⌘/Ctrl + \\"
    },
  ],
  'docs.google.com': [
    //The following are general shortcuts
    {
      text: "Find and replace",
      command: `keystroke "h" using {command down, shift down}`,
      shortcut: "⌘ + Shift + h",
      tags: "search"
    },
    {
      text: "Insert or edit link",
      command: `keystroke "k" using {command down}`,
      shortcut: "⌘ + k",
    },
    {
      text: "Insert page break",
      command: `key code '36' using {command down}`,
      shortcut: "⌘ + Enter",
    },
    {
      text: "Search the menus",
      command: `keystroke "/" using {option down}`,
      shortcut: "Option + /",
    },
    //The following are text formatting shortcuts
    {
      text: "Bold",
      command: `keystroke "b" using {command down}`,
      shortcut: "⌘/Ctrl + b"
    },
    {
      text: "Italics",
      command: `keystroke "i" using {command down}`,
      shortcut: "⌘ + i"
    },
    {
      text: "Underline",
      command: `keystroke "u" using {command down}`,
      shortcut: "⌘ + u"
    },
    {
      text: "Strikethrough",
      command: `keystroke "x" using {command down, shift down}`,
      shortcut: "⌘ + shift + x"
    },
    {
      text: "Superscript",
      command: `keystroke "." using {command down}`,
      shortcut: "⌘ + ."
    },
    {
      text: "Subscript",
      command: `keystroke "," using {command down}`,
      shortcut: "⌘ + ,"
    },
    {
      text: "Copy text formatting",
      command: `keystroke "c" using {command down, option down}`,
      shortcut: "⌘ + Option + c"
    },
    {
      text: "Paste text formatting",
      command: `keystroke "v" using {command down, option}`,
      shortcut: "⌘ + Option + v"
    },
    {
      text: "Clear text formatting",
      command: `key code "42" using {command down}`,
      shortcut: "⌘ + \\"
    },
    {
      text: "Increase font size",
      command: `key code "124" using {command down, shift down}`,
      shortcut: "⌘ + shift + right arrow"
    },
    {
      text: "Decrease font size",
      command: `key code "123" using {command down, shift down}`,
      shortcut: "⌘ + shift + left arrow"
    },
    //The following are paragraph formatting shortcuts
    {
      text: "Numbered list",
      command: `keystroke "7" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + 7"
    },
    {
      text: "Bulleted list",
      command: `keystroke "8" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + 8"
    },
    {
      text: "Align left",
      command: `keystroke "l" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + l"
    },
    {
      text: "Align center",
      command: `keystroke "e" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + e"
    },
    {
      text: "Align right",
      command: `keystroke "r" using {command down, shift down}`,
      shortcut: "⌘/Ctrl + Shift + r"
    },
    {
      text: "Indent less",
      command: `keystroke "[" using {command down}`,
      shortcut: "⌘/Ctrl + [",
      tags: "decrease"
    },
    {
      text: "Indent more",
      command: `keystroke "]" using {command down}`,
      shortcut: "⌘ + ]",
      tags: "increase"
    },
    {
      text: "Normal text style",
      command: `keystroke "0" using {command down, option down}`,
      shortcut: "⌘ + Option + 0",
      tags: "default"
    },
    {
      text: "Header style 1",
      command: `keystroke "1" using {command down, option down}`,
      shortcut: "⌘ + Option + 1",
      tags: "h1" 
    },
    {
      text: "Header style 2",
      command: `keystroke "2" using {command down, option down}`,
      shortcut: "⌘ + Option + 2",
      tags: "h2" 
    },
    {
      text: "Header style 3",
      command: `keystroke "3" using {command down, option down}`,
      shortcut: "⌘ + Option + 3",
      tags: "h3" 
    },
    {
      text: "Header style 4",
      command: `keystroke "4" using {command down, option down}`,
      shortcut: "⌘ + Option + 4",
      tags: "h4" 
    },
    {
      text: "Header style 5",
      command: `keystroke "5" using {command down, option down}`,
      shortcut: "⌘ + Option + 5",
      tags: "h5" 
    },
    {
      text: "Header style 6",
      command: `keystroke "6" using {command down, option down}`,
      shortcut: "⌘ + Option + 6",
      tags: "h6" 
    },
    {
      text: "Justify",
      command: `keystroke "j" using {command down, shift down}`,
      shortcut: "⌘ + Shift + j"
    },
    {
      text: "Move Paragraph up",
      command: `key code "126" using {control down, shift down}`,
      shortcut: "control + shift + up arrow"
    },
    {
      text: "Move Paragraph down",
      command: `key code "125" using {control down, shift down}`,
      shortcut: "control + shift + down arrow"
    },
    //The following shortcuts are for images
    {
      text: "Alt text (img)",
      command: `keystroke "y" using {command down, option down}`,
      shortcut: "⌘ + Option + y",
      tags: "image"
    },
    {
      text: "Resize larger (img)",
      command: `keystroke "k" using {command down, control down}`,
      shortcut: "⌘ + Control + k",
      tags: "image"
    },
    {
      text: "Resize larger horizontally (img)",
      command: `keystroke "b" using {command down, control down}`,
      shortcut: "⌘ + Control + b",
      tags: "image"
    },
    {
      text: "Resize larger vertically (img)",
      command: `keystroke "i" using {command down, control down}`,
      shortcut: "⌘ + Control + i",
      tags: "image"
    },
    {
      text: "Resize smaller (img)",
      command: `keystroke "j" using {command down, control down}`,
      shortcut: "⌘ + Control + j",
      tags: "image"
    },
    {
      text: "Resize smaller horizontally (img)",
      command: `keystroke "w" using {command down, control down}`,
      shortcut: "⌘ + Control + w",
      tags: "image"
    },
    {
      text: "Resize smaller vertically (img)",
      command: `keystroke "q" using {command down, control down}`,
      shortcut: "⌘ + Control + q",
      tags: "image"
    },
    {
      text: "Rotate clockwise by 15° (img)",
      command: `key code "124" using {option down}`,
      shortcut: "Option + Right Arrow",
      tags: "image"
    },
    {
      text: "Rotate counterclockwise by 15° (img)",
      command: `key code "123" using {option down}`,
      shortcut: "Option + Left Arrow",
      tags: "image"
    },
    {
      text: "Rotate counterclockwise by 1° (img)",
      command: `key code "123" using {option down, shift down}`,
      shortcut: "Option + Shift + Left Arrow",
      tags: "image"
    },
    {
      text: "Rotate clockwise by 1° (img)",
      command: `key code "124" using {option down, shift down}`,
      shortcut: "Option + Shift + Right Arrow",
      tags: "image"
    },
    //The following are comment shortcuts
    {
      text: "Insert comment",
      command: `keystroke "m" using {option down, command down}`,
      shortcut: "⌘ + Option + m",
      tags: "add"
    },
    {
      text: "Open discussion thread",
      command: `keystroke "a" using {option down, command down, shift down}`,
      shortcut: "⌘ + Option + Shift + a",
    },
    {
      text: "Enter current commend",
      command: `key code "36" using {control down}`,
      shortcut: "Ctrl + Enter"
    },
    {
      text: "Insert footnote",
      command: `keystroke "f" using {command down, option down}`,
      shortcut: "⌘ + Option + f",
      tags: "add"
    },
    {
      text: "Move to current footnote",
      command: `keystroke "e" using {command down, control down}
      keystroke "f" using {command down, control down}`,
      //command: `keystroke "e" keystroke "f" using {command down, control down}`,
      shortcut: "Ctrl + ⌘ + e + f"
    },
    {
      text: "Move to next footnote",
      command: `keystroke "n" using {command down, control down}
      keystroke "f" using {command down, control down}`,
      shortcut: "Ctrl + ⌘ + n + f"
    },
    {
      text: "Move to previous footnote",
      command: `keystroke "p" using {command down, control down}
      keystroke "f" using {command down, control down}`,
      shortcut: "Ctrl + ⌘ + p + f"
    },
    //Menu Shortcuts
    {
      text: "Context (right-click) menu",
      command: `key code "42" using {shift down, command down}`,
      shortcut: "⌘ + Shift + \\"
    },
    {
      text: "File Menu",
      command: `keystroke "f" using {control down, option down}`,
      shortcut: "Ctrl + Option + f"
    },
    {
      text: "Edit Menu",
      command: `keystroke "e" using {control down, option down}`,
      shortcut: "Ctrl + Option + e"
    },
    {
      text: "View Menu",
      command: `keystroke "v" using {control down, option down}`,
      shortcut: "Ctrl + Option + v"
    },
    {
      text: "Insert Menu",
      command: `keystroke "i" using {control down, option down}`,
      shortcut: "Ctrl + Option + i"
    },
    {
      text: "Format Menu",
      command: `keystroke "o" using {control down, option down}`,
      shortcut: "Ctrl + Option + o"
    },
    {
      text: "Tools Menu",
      command: `keystroke "t" using {control down, option down}`,
      shortcut: "Ctrl + Option + t"
    },
    {
      text: "Help Menu",
      command: `keystroke "h" using {control down, option down}`,
      shortcut: "Ctrl + Option + h"
    },
    //Text Selection With Keyboard Options
    {
      text: "Extend selection one character",
      command: `key code "124" using {shift down}`,
      shortcut: "Shift + right arrow",
      tags: "increase"
    },
    {
      text: "Decrease selection one character",
      command: `key code "123" using {shift down}`,
      shortcut: "Shift + left arrow"
    },
    {
      text: "Extend selection one line",
      command: `key code "125" using {shift down}`,
      shortcut: "Shift + down arrow",
      tags: "increase"
    },
    {
      text: "Decrease selection one line",
      command: `key code "126" using {shift down}`,
      shortcut: "Shift + up arrow"
    },
    {
      text: "Extend selection one paragraph down",
      command: `key code "125" using {option down, shift down}`,
      shortcut: "Option + Shift + down arrow"
    },
    {
      text: "Extend selection one paragraph up",
      command: `key code "126" using {option down, shift down}`,
      shortcut: "Option + Shift + up arrow"
    },
    {
      text: "Extend selection to the beginning of the line",
      command: `key code "123" using {shift down, control down}`,
      shortcut: "Shift + Fn + left arrow"
    },
    {
      text: "Extend selection to the end of the line",
      command: `key code "124" using {shift down, control down}`,
      shortcut: "Shift + Fn + right arrow"
    },
    {
      text: "Extend selection to the beginning of the document",
      command: `key code "126" using {shift down, command down}`,
      shortcut: "⌘ + Shift + up arrow"
    },
    {
      text: "Extend selection to the end of the document",
      command: `key code "125" using {shift down, command down}`,
      shortcut: "⌘ + Shift + down arrow"
    },
    {
      text: "Select current list item",
      command: `keystroke "e" using {control down, shift down, command down}
      keystroke "i" using {control down, shift down, command down}`,
      shortcut: "Ctrl + ⌘ + Shift + e + i"
    },
    {
      text: "Select all list items at the current level",
      command: `keystroke "e" using {control down, shift down, command down}
      keystroke "o" using {control down, shift down, command down}`,
      shortcut: "Ctrl + ⌘ + Shift + e + o"
    },
    //The following are all for document outline
  ],
  'youtube.com': [
    {
      text: "Play/Pause",
      command: `key code "49"`,
      shortcut: "space"
    },
    {
      text: "Seek forward 5 seconds",
      command: `key code "124"`,
      shortcut: "Right Arrow"
    },
    {
      text: "Seek backward 5 seconds",
      command: `key code "123"`,
      shortcut: "Left Arrow"
    },
    {
      text: "Seek backward 10 seconds",
      command: `keystroke "j"`,
      shortcut: "j"
    },
    {
      text: "Seek forward 10 seconds",
      command: `keystroke "l"`,
      shortcut: "l"
    }
  ]
}

module.exports = {
  websiteShortcutMapping
}