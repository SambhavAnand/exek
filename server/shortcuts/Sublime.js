const sublimeShortcuts = [
    //Editing
//Editing
{
    text: 'Cut line',
    command: 'keystroke "X" using {command down}',
    shortcut: "⌘ + X"
},
{
    text: 'Insert line after',
    command: 'keystroke "return" using {command down}',
    shortcut: "⌘ + ↩"
},
{
    text: 'Insert line before',
    command: 'keystroke "return" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + ↩"
},
{
    text: 'Move line/selection up',
    command: 'keycode "126" using {command down, control down}',
    shortcut: "⌘ + ⌃ + ↑"
},
{
    text: 'Move line/selection down',
    command: 'keycode "126" using {command down, control down}',
    shortcut: "⌘ + ⌃ + ↓"
},
{
    text: 'Select line - Repeat to select next lines',
    command: 'keystroke "L" using {command down}',
    shortcut: "⌘ + L"
},
{
    text: 'Select word - Repeat to select next occurrence',
    command: 'keystroke "D" using {command down}',
    shortcut: "⌘ + D"
},
{
    text: 'Select all occurrences of current selection',
    command: 'keystroke "G" using {command down, control down}',
    shortcut: "⌃ + ⌘ + G"
},
{
    text: 'Extra cursor on the line above',
    command: 'keycode "126" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + ↑"
},
{
    text: 'Extra cursor on the line below',
    command: 'keycode "126" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + ↓"
},
{
    text: 'Jump to closing parentheses Repeat to jump to opening parentheses',
    command: 'keystroke "M" using {control down}',
    shortcut: "⌃ + M"
},
{
    text: 'Select all contents of the current parentheses',
    command: 'keystroke "M" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + M"
},
{
    text: 'Move to beginning of line',
    command: 'keystroke "A" using {control down}',
    shortcut: "⌃ + A"
},
{
    text: 'Move to beginning of text on line',
    command: 'keystroke "L" "e" "f" "t" using {command down}',
    shortcut: "⌘ + Left"
},
{
    text: 'Move to end of line',
    command: 'keystroke "E" "R" "i" "g" "h" "t" using {command down, control down}',
    shortcut: "⌃ + E, ⌘ + Right"
},
{
    text: 'Delete from cursor to end of line',
    command: 'keystroke "K" "K" using {command down}',
    shortcut: "⌘ + K, ⌘ + K"
},
{
    text: 'Delete from cursor to start of line',
    command: 'keystroke "K" using {command down}',
    shortcut: "⌘ + K + ⌫"
},
{
    text: 'Indent current line(s)',
    command: 'keystroke using {command down}',
    shortcut: "⌘ + ]"
},
{
    text: 'Un-indent current line(s)',
    command: 'keystroke using {command down}',
    shortcut: "⌘ + ["
},
{
    text: 'Duplicate line(s)',
    command: 'keystroke "D" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + D"
},
{
    text: 'Join line below to the end of the current line',
    command: 'keystroke "J" using {command down}',
    shortcut: "⌘ + J"
},
{
    text: 'Comment/un-comment current line',
    command: 'keystroke using {command down}',
    shortcut: "⌘ + /"
},
{
    text: 'Block comment current selection',
    command: 'keystroke using {command down, option down}',
    shortcut: "⌘ + ⌥ + /"
},
{
    text: 'Redo, or repeat last keyboard shortcut command',
    command: 'keystroke "Y" using {command down}',
    shortcut: "⌘ + Y"
},
{
    text: 'Paste and indent correctly',
    command: 'keystroke "V" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + V"
},
{
    text: 'Select next auto-complete suggestion',
    command: 'keystroke "S" "p" "a" "c" "e" using {control down}',
    shortcut: "⌃ + Space"
},
{
    text: 'Soft undo; jumps to your last change before undoing change when repeated',
    command: 'keystroke "U" using {control down}',
    shortcut: "⌃ + U"
},
{
    text: 'Column selection up',
    command: 'keystroke "U" "p" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + Up"
},
{
    text: 'Column selection down',
    command: 'keystroke "D" "o" "w" "n" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + Down"
},
{
    text: 'Wrap Selection in html tag',
    command: 'keystroke "W" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + W"
},
{
    text: 'Delete current line of cursor',
    command: 'keystroke "K" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + K"
},
//Navigation/Goto Anywhere
{
    text: 'Quick-open files by name',
    command: 'keystroke "P" "o" "r" "T" using {command down}',
    shortcut: "⌘ + P or ⌘ + T"
},
{
    text: 'Goto symbol',
    command: 'keystroke "R" using {command down}',
    shortcut: "⌘ + R"
},
{
    text: 'Goto word in current file',
    command: 'keystroke using}',
    shortcut: ""
},
{
    text: 'Goto line in current file',
    command: 'keystroke "G" using {control down}',
    shortcut: "⌃ + G"
},
//General
{
    text: 'Command Palette',
    command: 'keystroke "P" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + P"
},
{
    text: 'Show/hide Console',
    command: 'keystroke using {control down}',
    shortcut: "⌃ + `"
},
{
    text: 'Toggle fullscreen mode',
    command: 'keystroke "F" using {command down, control down}',
    shortcut: "⌃ + ⌘ + F"
},
{
    text: 'Toggle distraction-free mode',
    command: 'keystroke "F" using {command down, control down, shift down}',
    shortcut: "⌃ + ⇧ + ⌘ + F"
},
{
    text: 'Toggle side bar',
    command: 'keystroke "K" "B" using {command down}',
    shortcut: "⌘ + K, ⌘ + B"
},
{
    text: 'Show scope in status bar',
    command: 'keystroke "P" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + P"
},
//Find/Replace
{
    text: 'Find',
    command: 'keystroke "F" using {command down}',
    shortcut: "⌘ + F"
},
{
    text: 'Replace',
    command: 'keystroke "F" using {command down, option down}',
    shortcut: "⌘ + ⌥ + F"
},
{
    text: 'Find in files',
    command: 'keystroke "F" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + F"
},
//Scrolling
{
    text: 'Scroll down one page',
    command: 'keystroke "V" using {control down}',
    shortcut: "⌃ + V"
},
{
    text: 'Center current line vertically in page',
    command: 'keystroke "L" using {control down}',
    shortcut: "⌃ + L"
},
{
    text: 'Scroll to end of file',
    command: 'keystroke "D" "o" "w" "n" using {command down}',
    shortcut: "⌘ + Down"
},
{
    text: 'Scroll to start of file',
    command: 'keystroke "U" "p" using {command down}',
    shortcut: "⌘ + Up"
},
//Tabs
{
    text: 'Open last closed tab',
    command: 'keystroke "t" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + t"
},
{
    text: 'Jump to tab in current group where num is 1-9',
    command: 'keystroke "N" "U" "M" using {command down}',
    shortcut: "⌘ + [NUM]"
},
{
    text: 'Jump to 10th tab in current group',
    command: 'keystroke "0" using {command down}',
    shortcut: "⌘ + 0"
},
{
    text: 'Cycle left through tabs',
    command: 'keystroke using {command down, shift down}',
    shortcut: "⌘ + ⇧ + ["
},
{
    text: 'Cycle right through tabs',
    command: 'keystroke using {command down, shift down}',
    shortcut: "⌘ + ⇧ + ]"
},
{
    text: 'Cycle up through recent tabs',
    command: 'keystroke "T" "a" "b" using}',
    shortcut: "^ + Tab"
},
{
    text: 'Cycle down through recent tabs',
    command: 'keystroke "T" "a" "b" using {shift down}',
    shortcut: "⇧ + ^ + Tab"
},
//Split window
{
    text: 'Revert view to single column',
    command: 'keystroke "1" using {command down, option down}',
    shortcut: "⌘ + ⌥ + 1"
},
{
    text: 'Split view into two columns',
    command: 'keystroke "2" using {command down, option down}',
    shortcut: "⌘ + ⌥ + 2"
},
{
    text: 'Split view into three columns',
    command: 'keystroke "3" using {command down, option down}',
    shortcut: "⌘ + ⌥ + 3"
},
{
    text: 'Split view into four columns',
    command: 'keystroke "4" using {command down, option down}',
    shortcut: "⌘ + ⌥ + 4"
},
{
    text: 'Set view to grid (4 groups)',
    command: 'keystroke "5" using {command down, option down}',
    shortcut: "⌘ + ⌥ + 5"
},
{
    text: 'Jump to group where num is 1-4',
    command: 'keystroke "N" "U" "M" using {control down}',
    shortcut: "⌃ + [NUM]"
},
{
    text: 'Move file to specified group where num is 1-4',
    command: 'keystroke "N" "U" "M" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + [NUM]"
},
//Bookmarks
{
    text: 'Toggle bookmark',
    command: 'keystroke "F" "2" using {command down}',
    shortcut: "⌘ + F2"
},
{
    text: 'Next bookmark',
    command: 'keystroke "F" "2" using}',
    shortcut: "F2"
},
{
    text: 'Previous bookmark',
    command: 'keystroke "F" "2" using {shift down}',
    shortcut: "⇧ + F2"
},
{
    text: 'Clear bookmarks',
    command: 'keystroke "F" "2" using {command down, shift down}',
    shortcut: "⇧ + ⌘ + F2"
},
//Text manipulation
{
    text: 'Transform to Uppercase',
    command: 'keystroke "K" "U" using {command down}',
    shortcut: "⌘ + K, ⌘ + U"
},
{
    text: 'Transform to Lowercase',
    command: 'keystroke "K" "L" using {command down}',
    shortcut: "⌘ + K, ⌘ + L"
},
{
    text: 'Clip text upwards / downwards',
    command: 'keystroke "u" "p" "d" "o" "w" "n" using {command down, control down}',
    shortcut: "⌘ + ⌃ + up, ⌘ + ⌃ + down"
},
]

module.exports = {
    atomShortcuts
}