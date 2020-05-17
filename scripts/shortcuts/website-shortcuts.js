const websiteShortcutMapping = {
    'mail.google.com': [
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
        },
        {
            text:"Previous font",
            command:`keystroke "5" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + 5"
          },
          {
            text:"Next font",
            command:`keystroke "6" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + 6"
          },
          {
            text:"Decrease text size",
            command:`keystroke "-" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + -"
          },
          {
            text:"Increase text size",
            command:`keystroke "+" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift and +"
          },
          {
            text:"Bold",
            command:`keystroke "b" using {command down}`,
            shortcut:"⌘/Ctrl + b"
          },
          {
            text:"Italics",
            command:`keystroke "i" using {command down}`,
            shortcut:"⌘/Ctrl + i"
          },
          {
            text:"Underline",
            command:`keystroke "u" using {command down}`,
            shortcut:"⌘/Ctrl + u"
          },
          {
            text:"Numbered list",
            command:`keystroke "7" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + 7"
          },
          {
            text:"Bulleted list",
            command:`keystroke "8" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + 8"
          },
          {
            text:"Quote",
            command:`keystroke "9" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + 9"
          },
          {
            text:"Indent less",
            command:`keystroke "[" using {command down}`,
            shortcut:"⌘/Ctrl + ["
          },
          {
            text:"Indent more",
            command:`keystroke "]" using {command down}`,
            shortcut:"⌘/Ctrl + ]"
          },
          {
            text:"Align left",
            command:`keystroke "l" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + l"
          },
          {
            text:"Align center",
            command:`keystroke "e" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + e"
          },
          {
            text:"Align right",
            command:`keystroke "r" using {command down, shift down}`,
            shortcut:"⌘/Ctrl + Shift + r"
          },
          {
            text:"Remove formatting",
            command:`keystroke "\" using {command down}`,
            shortcut:"⌘/Ctrl + \\"
          },
    ],
    'docs.google.com': [
      {
            text:"Copy",
            command:`keystroke "c" using {command down}`,
            shortcut: "⌘ + c",
          },
          {
            text:"Cut",
            command:`keystroke "x using {command down}`,
            shortcut:"⌘ + x",
          },
          {
            text:"paste",
            comamnd:`keystroke "v" using {command down}`,
            shortcut:"⌘ + v",
          },
          {
            text:"Paste without formatting",
            command:`keystroke "v" using {command down, shift down}`,
            shortcut:"⌘ + Shift + v",
          },
          {
            text:"Undo",
            command:`keystroke "z" using {command down}`,
            shortcut:"⌘ + z",
          },
          {
            text:"Redo",
            command:`keystroke "z" using {command down. shift down}`,
            shortcut:"⌘ + Shift + z",
          },
          {
            text:"Insert or edit link",
            command:`keystroke "k" using {command down}`,
            shortcut:"⌘ + k",
          },
          {
            text:"Show common keyboard shortcuts",
            command:`keystroke "/" using {command down}`,
            shortcut:"⌘ + /",
          },
          {
            text:"Print",
            command:`keystroke "p" using {command down}`,
            shortcut:"⌘ + p",
          },
          {
            text:"Open",
            command:`keystroke "o" using {command down}`,
            shortcut:"⌘ + o",
          },
          {
            text:"Find",
            command:`keystroke "f" using {command down}`,
            shortcut:"⌘ + f",
          },
          {
            text:"Find and replace",
            command:`keystroke "h" using {command down, shift down}`,
            shortcut:"⌘ + Shift + h",
          },
          {
            text:"Find again",
            command:`keystroke "g" using {command down}`,
            shortcut:"⌘ + g",
          },
          {
            text:"Find previous",
            command:`keystroke "g" using {command down, shift down}`,
            shortcut:"⌘ + Shift + g",
          },
          {
            text:"Insert page break",
            command:`key code '36' using {command down}`,
            shortcut:"⌘ + Enter",
          }
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
        text: "Seek forward 10 seconds",
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