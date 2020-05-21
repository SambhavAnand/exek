// const wordShortcuts = [
//   {
//     text: "Find",
//     command: `keystroke "f" using {command down}`,
//     shortcut: "⌘ + f",
//     tags: "search",
//   },
//   {
//     text: "Find next",
//     command: `keystroke "g" using {command down}`,
//     shortcut: "⌘ + g",
//     tags: "search",
//   },
//   {
//     text: "Find previous",
//     command: `keystroke "g" using {command down, shift down}`,
//     shortcut: "⌘ + Shift + g",
//     tags: "search",
//   },
//   {
//     text: "Display the Go To dialog",
//     command: `keystroke "g" using {command down, option down}`,
//     shortcut: "⌘ + Option + g",
//   },
//   {
//     text: "Display the Spelling and Grammar Dialog",
//     command: `keystroke "l" using {command down, option down}`,
//     shortcut: "⌘ + Option + l",
//   },
//   {
//     text: "Switch to Next Window",
//     command: `key code "50" using {command down}`,
//     shortcut: "⌘ + `",
//   },
//   {
//     text: "Switch to the Previous Window",
//     command: `key code "50" using {command down, shift down}`,
//     shortcut: "⌘ + shift + `",
//   },
//   {
//     text: "Display the Save As dialog",
//     command: `keystroke "s" using {shift down, command down}`,
//     shortcut: "⌘ + shift + s",
//   },
//   {
//     text: "Display the Find and Replace pane",
//     command: `keystroke "h" using {control down}`,
//     shortcut: "control + h",
//     tags: "search",
//   },
//   {
//     text: "Search for selected text in your web browser",
//     command: `keystroke "l" using {command down, shift down}`,
//     shortcut: "⌘ + shift + l",
//   },
//   {
//     text: "Move the cursor to the end of the current line",
//     command: `key code "124" using {command down}`,
//     shortcut: "⌘ + right arrow",
//     tags: "last",
//   },
//   {
//     text: "Move the cursor to beginning of the current line",
//     command: `key code "123" using {command down}`,
//     shortcut: "⌘ + left arrow",
//     tags: "start,first",
//   },
// ];

const wordShortcuts = [
  {
    text: "Display the shortcut menu for the selected item. *",
    shortcut: "Shift + F10",
    command: 'key code "109" using {shift down}',
  },
  {
    text: "Display the shortcut menu for the selected item. *",
    shortcut: "Shift + F10",
    command: 'key code "109" using {shift down}',
  },
  {
    text: "Display the Go To dialog.",
    shortcut: "⌘ + Option + G",
    command: 'keystroke "g" using {command down, option down}',
  },
  {
    text: "Display the Spelling and Grammar dialog.",
    shortcut: "⌘ + Option + L",
    command: 'keystroke "l" using {command down, option down}',
  },
  {
    text: "Switch to the next window.",
    shortcut: "⌘ + Grave accent ( ` )",
    command: 'key code "50" using {command down}',
  },
  {
    text: "Switch to the previous window.",
    shortcut: "⌘ + Shift + Grave accent ( ` )",
    command: 'key code "50" using {command down, shift down}',
  },
  {
    text: "Display the Save As dialog.",
    shortcut: "⌘ + Shift + S",
    command: 'keystroke "s" using {command down, shift down}',
  },
  {
    text: "Find text (move focus to the Search in Document box).",
    shortcut: "⌘ + F",
    command: 'keystroke "f" using {command down}',
  },
  {
    text: "Display the Find and Replace pane.",
    shortcut: "Control + H",
    command: 'keystroke "h" using {control down}',
  },
  {
    text: "Display the Print dialog.",
    shortcut: "⌘ + P",
    command: 'keystroke "p" using {command down}',
  },
  {
    text: "Close the current document.",
    shortcut: "⌘ + F4",
    command: 'key code "131" using {command down}',
  },
  {
    text: "Close the current document.",
    shortcut: "⌘ + F4",
    command: 'key code "131" using {command down}',
  },
  {
    text: "Expand or minimize the ribbon",
    shortcut: "⌘ + Option + R",
    command: 'keystroke "r" using {command down, option down}',
  },
  {
    text:
      "Find the next spelling or grammatical error. The Check spelling as you type feature must be enabled.",
    shortcut: "Option + F7",
    command: 'key code "98" using {option down}',
  },
  {
    text:
      "Find the next spelling or grammatical error. The Check spelling as you type feature must be enabled.",
    shortcut: "Option + F7",
    command: 'key code "98" using {option down}',
  },
  {
    text: "Search for the selected text in your web browser.",
    shortcut: "⌘ + Shift + L",
    command: 'keystroke "l" using {command down, shift down}',
  },
  {
    text: "Search for the selected text using the Smart Lookup task pane.",
    shortcut: "⌘ + Control + Option + L",
    command: 'keystroke "l" using {command down, control down, option down}',
  },
  {
    text: "Open the Dictionary.",
    shortcut: "Option + Shift + F7",
    command: 'key code "98" using {option down, shift down}',
  },
  {
    text: "Open the Dictionary.",
    shortcut: "Option + Shift + F7",
    command: 'key code "98" using {option down, shift down}',
  },
  {
    text: "Move the cursor one word to the left.",
    shortcut: "Option + Left arrow",
    command: 'key code "123" using {option down}',
  },
  {
    text: "Move the cursor one word to the right.",
    shortcut: "Option + Right arrow ",
    command: 'key code "124" using {option down}',
  },
  {
    text: "Move the cursor up by one paragraph.",
    shortcut: "⌘ + Up arrow ",
    command: 'key code "126" using {command down}',
  },
  {
    text: "Move the cursor down by one paragraph.",
    shortcut: "⌘ + Down arrow ",
    command: 'key code "125" using {command down}',
  },
  {
    text: "Move the cursor to the beginning of the current line.",
    shortcut: "⌘ + Left arrow",
    command: 'key code "123" using {command down}',
  },
  {
    text: "Move the cursor to the end of the current line.",
    shortcut: "⌘ + Right arrow ",
    command: 'key code "124" using {command down}',
  },
  {
    text: "Move the cursor to the top of the previous page.",
    shortcut: "⌘ + Page up",
    command: 'key code "116" using {command down}',
  },
  {
    text: "Move the cursor to the top of the next page.",
    shortcut: "⌘ + Page down",
    command: 'key code "121" using {command down}',
  },
  {
    text: "Move the cursor to the beginning of the document.",
    shortcut: "⌘ + Home",
    command: 'key code "115" using {command down}',
  },
  {
    text: "Move the cursor to the end of the document.",
    shortcut: "⌘ + End",
    command: 'key code "119" using {command down}',
  },
  {
    text: "Move the cursor to the previous insertion point.",
    shortcut: "Shift + F5",
    command: 'key code "96" using {shift down}',
  },
  {
    text: "Move the cursor to the previous insertion point.",
    shortcut: "Shift + F5",
    command: 'key code "96" using {shift down}',
  },
  {
    text: "Move the cursor by scrolling the document view up by one screen.",
    shortcut: "Page up",
    command: 'key code "116" using {}',
  },
  {
    text: "Move the cursor by scrolling the document view down by one screen.",
    shortcut: "Page down",
    command: 'key code "121" using {}',
  },
  {
    text: "Select the word to the left.",
    shortcut: "Shift + Option + Left arrow",
    command: 'key code "123" using {shift down, option down}',
  },
  {
    text: "Select the word to the right.",
    shortcut: "Shift + Option + Right arrow ",
    command: 'key code "124" using {shift down, option down}',
  },
  {
    text:
      "Select from the current position to the beginning of the current line.",
    shortcut: "⌘ + Shift + Left arrow",
    command: 'key code "123" using {command down, shift down}',
  },
  {
    text: "Select from the current position to the end of the current line.",
    shortcut: "⌘ + Shift + Right arrow ",
    command: 'key code "124" using {command down, shift down}',
  },
  {
    text:
      "Select from the current position to the beginning of the current paragraph.",
    shortcut: "⌘ + Shift + Up arrow ",
    command: 'key code "126" using {command down, shift down}',
  },
  {
    text:
      "Select from the current position  to the end of the current paragraph.",
    shortcut: "⌘ + Shift + Down arrow ",
    command: 'key code "125" using {command down, shift down}',
  },
  {
    text: "Select from the current position to the top of the screen.",
    shortcut: "Shift + Page up",
    command: 'key code "116" using {shift down}',
  },
  {
    text: "Select from the current position to the bottom of the screen.",
    shortcut: "Shift + Page down",
    command: 'key code "121" using {shift down}',
  },
  {
    text: "Select from the current position to the beginning of the document.",
    shortcut: "⌘ + Shift + Home",
    command: 'key code "115" using {command down, shift down}',
  },
  {
    text: "Select from the current position to the end of the  document.",
    shortcut: "⌘ + Shift + End",
    command: 'key code "119" using {command down, shift down}',
  },
  {
    text: "Select from the current position to the bottom of the window.",
    shortcut: "⌘ + Shift + Option + Page down",
    command: 'key code "121" using {command down, shift down, option down}',
  },
  {
    text: "Select all document content.",
    shortcut: "⌘ + A",
    command: 'keystroke "a" using {command down}',
  },
  {
    text: "Reduce the selection. *",
    shortcut: "Shift + F8",
    command: 'key code "100" using {shift down}',
  },
  {
    text: "Reduce the selection. *",
    shortcut: "Shift + F8",
    command: 'key code "100" using {shift down}',
  },
  {
    text: "Cut the selected content to the Clipboard.",
    shortcut: "⌘ + X",
    command: 'keystroke "x" using {command down}',
  },
  {
    text: "Copy  the selected content to the Clipboard.",
    shortcut: "⌘ + C",
    command: 'keystroke "c" using {command down}',
  },
  {
    text: "Paste the contents of the Clipboard.",
    shortcut: "⌘ + V",
    command: 'keystroke "v" using {command down}',
  },
  {
    text:
      "Paste the Clipboard contents and match the formatting of the surrounding text.",
    shortcut: "⌘ + Option + Shift + V",
    command: 'keystroke "v" using {command down, option down, shift down}',
  },
  {
    text: "Display the Paste Special dialog.",
    shortcut: "⌘ + Control + V",
    command: 'keystroke "v" using {command down, control down}',
  },
  {
    text: "Cut  the selected content to the Spike.",
    shortcut: "⌘ + F3",
    command: 'key code "160" using {command down}',
  },
  {
    text: "Cut  the selected content to the Spike.",
    shortcut: "⌘ + F3",
    command: 'key code "160" using {command down}',
  },
  {
    text: "Paste the contents of the Spike.",
    shortcut: "⌘ + Shift + F3",
    command: 'key code "160" using {command down, shift down}',
  },
  {
    text: "Paste the contents of the Spike.",
    shortcut: "⌘ + Shift + F3",
    command: 'key code "160" using {command down, shift down}',
  },
  {
    text: "Copy the selected formatting.",
    shortcut: "⌘ + Shift + C",
    command: 'keystroke "c" using {command down, shift down}',
  },
  {
    text: "Paste the copied formatting.",
    shortcut: "⌘ + Shift + V",
    command: 'keystroke "v" using {command down, shift down}',
  },
  {
    text: "Copy the selected content to  the Scrapbook.",
    shortcut: "Control + Option + C",
    command: 'keystroke "c" using {control down, option down}',
  },
  {
    text: "Paste the selected content from the Scrapbook.",
    shortcut: "Control + Option + V",
    command: 'keystroke "v" using {control down, option down}',
  },
  {
    text: "Insert graphics using the Media Browser.",
    shortcut: "Control + M",
    command: 'keystroke "m" using {control down}',
  },
  {
    text: "Create an AutoText entry.",
    shortcut: "Option + F3",
    command: 'key code "160" using {option down}',
  },
  {
    text: "Create an AutoText entry.",
    shortcut: "Option + F3",
    command: 'key code "160" using {option down}',
  },
  {
    text: "Insert an AutoText entry.",
    shortcut: "⌘ + Option + Shift + V",
    command: 'keystroke "v" using {command down, option down, shift down}',
  },
  {
    text: "Center the paragraph.",
    shortcut: "⌘ + E",
    command: 'keystroke "e" using {command down}',
  },
  {
    text: "Justify the paragraph.",
    shortcut: "⌘ + J",
    command: 'keystroke "j" using {command down}',
  },
  {
    text: "Align the paragraph to the left.",
    shortcut: "⌘ + L",
    command: 'keystroke "l" using {command down}',
  },
  {
    text: "Align the paragraph to the right.",
    shortcut: "⌘ + R",
    command: 'keystroke "r" using {command down}',
  },
  {
    text: "Indent the paragraph.",
    shortcut: "Control + Shift + M",
    command: 'keystroke "m" using {control down, shift down}',
  },
  {
    text: "Remove a paragraph indent.",
    shortcut: "⌘ + Shift + M",
    command: 'keystroke "m" using {command down, shift down}',
  },
  {
    text: "Create a hanging indent.",
    shortcut: "⌘ + T",
    command: 'keystroke "t" using {command down}',
  },
  {
    text: "Remove a hanging indent.",
    shortcut: "⌘ + Shift + T",
    command: 'keystroke "t" using {command down, shift down}',
  },
  {
    text: "Apply single-spacing to the paragraph.",
    shortcut: "⌘ + 1",
    command: 'keystroke "1" using {command down}',
  },
  {
    text: "Apply double-spacing to the paragraph.",
    shortcut: "⌘ + 2",
    command: 'keystroke "2" using {command down}',
  },
  {
    text: "Apply 1.5-line spacing to the paragraph.",
    shortcut: "⌘ + 5",
    command: 'keystroke "5" using {command down}',
  },
  {
    text: "Add or remove space before the paragraph.",
    shortcut: "⌘ + 0",
    command: 'keystroke "0" using {command down}',
  },
  {
    text: "Enable AutoFormat.",
    shortcut: "⌘ + Option + K",
    command: 'keystroke "k" using {command down, option down}',
  },
  {
    text: "Apply the Normal style.",
    shortcut: "⌘ + Shift + N",
    command: 'keystroke "n" using {command down, shift down}',
  },
  {
    text: "Apply the Heading 1 style.",
    shortcut: "⌘ + Option + 1",
    command: 'keystroke "1" using {command down, option down}',
  },
  {
    text: "Apply the Heading 2 style.",
    shortcut: "⌘ + Option + 2",
    command: 'keystroke "2" using {command down, option down}',
  },
  {
    text: "Apply the Heading 3 style.",
    shortcut: "⌘ + Option + 3",
    command: 'keystroke "3" using {command down, option down}',
  },
  {
    text: "Apply the List style.",
    shortcut: "⌘ + Shift + L",
    command: 'keystroke "l" using {command down, shift down}',
  },
  {
    text: "Insert a nonbreaking space.",
    shortcut: "Option + Spacebar",
    command: 'key code "49" using {option down}',
  },
  {
    text: "Change the font.",
    shortcut: "⌘ + Shift + F",
    command: 'keystroke "f" using {command down, shift down}',
  },
  {
    text: "Increase the font size.",
    shortcut: "⌘ + Shift + >",
    command: 'key code "47" using {command down, shift down}',
  },
  {
    text: "Decrease the font size.",
    shortcut: "⌘ + Shift + <",
    command: 'key code "43" using {command down, shift down}',
  },
  {
    text: "Increase the font size by 1 point.",
    shortcut: "⌘ + ]",
    command: 'key code "30" using {command down}',
  },
  {
    text: "Decrease the font size by 1 point.",
    shortcut: "⌘ + [",
    command: 'key code "33" using {command down}',
  },
  {
    text: "Display the Font dialog.",
    shortcut: "⌘ + D",
    command: 'keystroke "d" using {command down}',
  },
  {
    text: "Switch the text between upper case, lower case, and title case.",
    shortcut: "Shift + F3",
    command: 'key code "160" using {shift down}',
  },
  {
    text: "Switch the text between upper case, lower case, and title case.",
    shortcut: "Shift + F3",
    command: 'key code "160" using {shift down}',
  },
  {
    text: "Change the text to all upper case.",
    shortcut: "⌘ + Shift + A",
    command: 'keystroke "a" using {command down, shift down}',
  },
  {
    text: "Apply bold formatting.",
    shortcut: "⌘ + B",
    command: 'keystroke "b" using {command down}',
  },
  {
    text: "Apply underline formatting.",
    shortcut: "⌘ + U",
    command: 'keystroke "u" using {command down}',
  },
  {
    text: "Apply underline formatting to the words, but not the spaces.",
    shortcut: "⌘ + Shift + W",
    command: 'keystroke "w" using {command down, shift down}',
  },
  {
    text: "Apply double-underline formatting.",
    shortcut: "⌘ + Shift + D",
    command: 'keystroke "d" using {command down, shift down}',
  },
  {
    text: "Apply italics formatting.",
    shortcut: "⌘ + I",
    command: 'keystroke "i" using {command down}',
  },
  {
    text: "Apply small caps formatting.",
    shortcut: "⌘ + Shift + K",
    command: 'keystroke "k" using {command down, shift down}',
  },
  {
    text: "Apply subscript formatting.",
    shortcut: "⌘ + =",
    command: 'key code "24" using {command down}',
  },
  {
    text: "Apply superscript formatting.",
    shortcut: "⌘ + Shift + Plus",
    command: 'key code "24" using {command down, shift down}',
  },
  {
    text: "Apply strike-through formatting.",
    shortcut: "⌘ + Shift + X",
    command: 'keystroke "x" using {command down, shift down}',
  },
  {
    text: "Remove manual character formatting.",
    shortcut: "⌘ + Shift + Z",
    command: 'keystroke "z" using {command down, shift down}',
  },
  {
    text: "Insert an empty field.",
    shortcut: "⌘ + F9",
    command: 'key code "101" using {command down}',
  },
  {
    text: "Insert an empty field.",
    shortcut: "⌘ + F9",
    command: 'key code "101" using {command down}',
  },
  {
    text: "Insert a line break.",
    shortcut: "Shift + Return",
    command: 'key code "36" using {shift down}',
  },
  {
    text: "Insert a page break.",
    shortcut: "⌘ + Return",
    command: 'key code "36" using {command down}',
  },
  {
    text: "Insert a column break.",
    shortcut: "⌘ + Shift + Return",
    command: 'key code "36" using {command down, shift down}',
  },
  {
    text: "Insert a nonbreaking hyphen.",
    shortcut: "⌘ + Shift + Hyphen",
    command: 'key code "27" using {command down, shift down}',
  },
  {
    text: "Insert a copyright symbol (©).",
    shortcut: "Option + G",
    command: 'keystroke "g" using {option down}',
  },
  {
    text: "Insert a registered trademark symbol (®).",
    shortcut: "Option + R",
    command: 'keystroke "r" using {option down}',
  },
  {
    text: "Insert a trademark symbol (™).",
    shortcut: "Option + 2",
    command: 'keystroke "2" using {option down}',
  },
  {
    text: "Insert an ellipsis (…)",
    shortcut: "Option + Semicolon",
    command: 'key code "41" using {option down}',
  },
  {
    text: "Move to the previous cell and select its content.",
    shortcut: "Shift + Tab",
    command: 'key code "48" using {shift down}',
  },
  {
    text: "Move to the first cell in the row.",
    shortcut: "Control + Home",
    command: 'key code "115" using {control down}',
  },
  {
    text: "Move to the last cell in the row.",
    shortcut: "Control + End",
    command: 'key code "119" using {control down}',
  },
  {
    text: "Move to the first cell in the column.",
    shortcut: "Control + Page up",
    command: 'key code "116" using {control down}',
  },
  {
    text: "Move to the last cell in the column.",
    shortcut: "Control + Page down",
    command: 'key code "121" using {control down}',
  },
  {
    text: "Insert a row.",
    shortcut: "⌘ + Control + I",
    command: 'keystroke "i" using {command down, control down}',
  },
  {
    text: "Select the content in the previous cell.",
    shortcut: "Shift + Tab",
    command: 'key code "48" using {shift down}',
  },
  {
    text: "Insert a Tab character in a cell.",
    shortcut: "Option + Tab",
    command: 'key code "48" using {option down}',
  },
  {
    text: "Toggle drawing mode.",
    shortcut: "⌘ + Control + Z",
    command: 'keystroke "z" using {command down, control down}',
  },
  {
    text: "Insert a DATE field.",
    shortcut: "Control + Shift + D",
    command: 'keystroke "d" using {control down, shift down}',
  },
  {
    text: "Insert a LISTNUM field.",
    shortcut: "⌘ + Option + Shift + L",
    command: 'keystroke "l" using {command down, option down, shift down}',
  },
  {
    text: "Insert a PAGE field.",
    shortcut: "Control + Shift + P",
    command: 'keystroke "p" using {control down, shift down}',
  },
  {
    text: "Insert a TIME field.",
    shortcut: "Control + Shift + T",
    command: 'keystroke "t" using {control down, shift down}',
  },
  {
    text: "Insert an empty field.",
    shortcut: "⌘ + F9",
    command: 'key code "101" using {command down}',
  },
  {
    text: "Insert an empty field.",
    shortcut: "⌘ + F9",
    command: 'key code "101" using {command down}',
  },
  {
    text: "Unlink a field.",
    shortcut: "⌘ + Shift + F9",
    command: 'key code "101" using {command down, shift down}',
  },
  {
    text: "Unlink a field.",
    shortcut: "⌘ + Shift + F9",
    command: 'key code "101" using {command down, shift down}',
  },
  {
    text: "Switch between a field code and its result. *",
    shortcut: "Shift + F9",
    command: 'key code "101" using {shift down}',
  },
  {
    text: "Switch between a field code and its result. *",
    shortcut: "Shift + F9",
    command: 'key code "101" using {shift down}',
  },
  {
    text: "Switch between all field codes and their results.",
    shortcut: "Option + F9",
    command: 'key code "101" using {option down}',
  },
  {
    text: "Switch between all field codes and their results.",
    shortcut: "Option + F9",
    command: 'key code "101" using {option down}',
  },
  {
    text:
      "Run GOTOBUTTON or MACROBUTTON from a field displaying field results.",
    shortcut: "Option + Shift + F9",
    command: 'key code "101" using {option down, shift down}',
  },
  {
    text:
      "Run GOTOBUTTON or MACROBUTTON from a field displaying field results.",
    shortcut: "Option + Shift + F9",
    command: 'key code "101" using {option down, shift down}',
  },
  {
    text: "Go to the previous field.",
    shortcut: "Shift + F11",
    command: 'key code "103" using {shift down}',
  },
  {
    text: "Go to the previous field.",
    shortcut: "Shift + F11",
    command: 'key code "103" using {shift down}',
  },
  {
    text: "Lock a field.",
    shortcut: "⌘ + F11",
    command: 'key code "103" using {command down}',
  },
  {
    text: "Lock a field.",
    shortcut: "⌘ + F11",
    command: 'key code "103" using {command down}',
  },
  {
    text: "Unlock a field.",
    shortcut: "⌘ + Shift + F11",
    command: 'key code "103" using {command down, shift down}',
  },
  {
    text: "Unlock a field.",
    shortcut: "⌘ + Shift + F11",
    command: 'key code "103" using {command down, shift down}',
  },
  {
    text: "Promote a paragraph.",
    shortcut: "Control + Shift + Left arrow",
    command: 'key code "123" using {control down, shift down}',
  },
  {
    text: "Demote a paragraph.",
    shortcut: "Control + Shift + Right arrow ",
    command: 'key code "124" using {control down, shift down}',
  },
  {
    text: "Demote the paragraph to body text.",
    shortcut: "⌘ + Shift + N",
    command: 'keystroke "n" using {command down, shift down}',
  },
  {
    text: "Move the selected paragraphs up. *",
    shortcut: "Control + Shift + Up arrow ",
    command: 'key code "126" using {control down, shift down}',
  },
  {
    text: "Move the selected paragraphs down. *",
    shortcut: "Control + Shift + Down arrow ",
    command: 'key code "125" using {control down, shift down}',
  },
  {
    text: "Expand  the text under a heading.",
    shortcut: "Control + Shift + Plus",
    command: 'key code "24" using {control down, shift down}',
  },
  {
    text: "Collapse text under a heading. *",
    shortcut: "Control + Shift + Minus",
    command: 'key code "27" using {control down, shift down}',
  },
  {
    text: "Expand all body text and headings, or collapse all body text.",
    shortcut: "Control + Shift + A",
    command: 'keystroke "a" using {control down, shift down}',
  },
  {
    text:
      "Switch between showing the first line of body text and showing all body text.",
    shortcut: "Control + Shift + L",
    command: 'keystroke "l" using {control down, shift down}',
  },
  {
    text: "Insert a comment.",
    shortcut: "⌘ + Option + A",
    command: 'keystroke "a" using {command down, option down}',
  },
  {
    text: "Turn change tracking on or off.",
    shortcut: "⌘ + Shift + E",
    command: 'keystroke "e" using {command down, shift down}',
  },
  {
    text: "Move to the beginning of the list of comments.",
    shortcut: "⌘ + Home",
    command: 'key code "115" using {command down}',
  },
  {
    text: "Move to the end of the list of comments.",
    shortcut: "⌘ + End",
    command: 'key code "119" using {command down}',
  },
  {
    text: "Insert a footnote.",
    shortcut: "⌘ + Option + F",
    command: 'keystroke "f" using {command down, option down}',
  },
  {
    text: "Insert an endnote.",
    shortcut: "⌘ + Option + E",
    command: 'keystroke "e" using {command down, option down}',
  },
  {
    text: "Switch the writing direction to right-to-left.",
    shortcut: "⌘ + Control + Left arrow",
    command: 'key code "123" using {command down, control down}',
  },
  {
    text: "Switch the writing direction to left-to-right.",
    shortcut: "⌘ + Control + Right arrow",
    command: 'key code "124" using {command down, control down}',
  },
];

module.exports = {
  wordShortcuts,
};
