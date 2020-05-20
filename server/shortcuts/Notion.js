const notionShortcuts = [
    {
        text: "Bold",
        command: `keystroke "b" using {command down}`,
        shortcut: "Command + b"
      },
      {
        text: "Italics",
        command: `keystroke "i" using {command down}`,
        shortcut: "Command + i"
      },
      {
          text: "Comment",
          command: `keystroke "m" using {command down, shift down}`,
          shortcut: "Command + Shift + M"
      },
      {
          text: "Strikethrough",
          command: `keystroke "s" using {command down, shift down}`,
          shortcut: "Command + Shift + s"
      },
      {
          text: "Make selected text inlined code",
          command: `keystroke "e" using {command down}`,
          shortcut: "Command + E"
      },
      {
          text: "Add a link",
          command: `keystroke "k" using {command down}`,
          shortcut: "Command + k"
      },
      {
          text: "Indent",
          command: `key code "48"`,
          shortcut: "Tab"
      },
      {
        text: "Un-indent",
        command: `key code "48" using {shift down}`,
        shortcut: "Shift - Tab"
    },
    {
        text: "Add text",
        command: `keystroke "0" using {command down, option down}`,
        shortcut: "Command + Option + 0"
    },
    {
        text: "Heading 1",
        command: `keystroke "1" using {command down, option down}`,
        shortcut: "Command + Option + 1",
        tags: "h1"
    },
    {
        text: "Heading 2",
        command: `keystroke "2" using {command down, option down}`,
        shortcut: "Command + Option + 2",
        tags: "h2"
    },
    {
        text: "Heading 3",
        command: `keystroke "3" using {command down, option down}`,
        shortcut: "Command + Option + 3",
        tags: "h3"
    },
    {
        text: "To-do checkbox",
        command: `keystroke "4" using {command down, option down}`,
        shortcut: "Command + Option + 4",
        tags: "list"
    },
    {
        text: "Bulleted list",
        command: `keystroke "5" using {command down, option down}`,
        shortcut: "Command + Option + 5"
    },
    {
        text: "Numbered list",
        command: `keystroke "6" using {command down, option down}`,
        shortcut: "Command + Option + 6"
    },
    {
        text: "Toggle list",
        command: `keystroke "7" using {command down, option down}`,
        shortcut: "Command + Option + 7"
    },
    {
        text: "Code block",
        command: `keystroke "8" using {command down, option down}`,
        shortcut: "Command + Option + 8",
        tags: "html,css,python,java,javascript,c++,ruby,go,node,react"
    },
    {
        text: "Create a new page",
        command: `keystroke "9" using {command down, option down}`,
        shortcut: "Command + Option + 9"
    },
    {
        text: "Bullet new",
        command: `keystroke "/bullet"`,
        shortcut: "/bullet" 
    }
    
    module.exports = {
        notionShortcuts
    }