const sublimeShortcuts = [
//Editing
{
    text: 'Cut line',
    command: 'keystroke "x" using {command down}',
    shortcut: "⌘ + X"
},
{
    text: 'Insert line after',
    command: 'keystroke return using {command down}',
    shortcut: "⌘ + ↩"
},
{
    text: 'Insert line before',
    command: 'keystroke return using {command down, shift down}',
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
    command: 'keystroke "l" using {command down}',
    shortcut: "⌘ + L"
},
{
    text: 'Select word - Repeat to select next occurrence',
    command: 'keystroke "d" using {command down}',
    shortcut: "⌘ + D"
},
{
    text: 'Select all occurrences of current selection',
    command: 'keystroke "g" using {command down, control down}',
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
    command: 'keystroke "m" using {control down}',
    shortcut: "⌃ + M"
},
{
    text: 'Select all contents of the current parentheses',
    command: 'keystroke "m" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + M"
},
{
    text: 'Move to beginning of line',
    command: 'keystroke "a" using {control down}',
    shortcut: "⌃ + A"
},
{
    text: 'Move to beginning of text on line',
    command: 'keycode "123" using {command down}',
    shortcut: "⌘ + Left"
},
{
    text: 'Move to end of line',
    command: 'keycode "124" using {command down}',
    shortcut: "⌘ + Right"
},
{
    text: 'Delete from cursor to end of line',
    command: 'keystroke "k" using {command down}',
    shortcut: "⌘ + K"
},
//make sure this one works and the syntax isnt fucked
{
    text: 'Delete from cursor to start of line',
    command: 'keystroke "k" keycode "51" using {command down}',
    shortcut: "⌘ + K + ⌫"
},
{
    text: 'Indent current line(s)',
    command: 'keystroke "]" using {command down}',
    shortcut: "⌘ + ]"
},
{
    text: 'Un-indent current line(s)',
    command: 'keystroke "[" using {command down}',
    shortcut: "⌘ + ["
},
{
    text: 'Duplicate line(s)',
    command: 'keystroke "d" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + D"
},
{
    text: 'Join line below to the end of the current line',
    command: 'keystroke "j" using {command down}',
    shortcut: "⌘ + J"
},
{
    text: 'Comment/un-comment current line',
    command: 'keycode "44" using {command down}',
    shortcut: "⌘ + /"
},
{
    text: 'Block comment current selection',
    command: 'keycode "/" using {command down, option down}',
    shortcut: "⌘ + ⌥ + /"
},
{
    text: 'Redo, or repeat last keyboard shortcut command',
    command: 'keystroke "y" using {command down}',
    shortcut: "⌘ + Y"
},
{
    text: 'Paste and indent correctly',
    command: 'keystroke "v" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + V"
},
{
    text: 'Select next auto-complete suggestion',
    command: 'keycode "49" using {control down}',
    shortcut: "⌃ + Space"
},
{ 
    text: 'Soft undo; jumps to your last change before undoing change when repeated',
    command: 'keystroke "u" using {control down}',
    shortcut: "⌃ + U"
},
{
    text: 'Column selection up',
    command: 'keycode "126" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + Up"
},
{
    text: 'Column selection down',
    command: 'keycode "125" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + Down"
},
{
    text: 'Wrap Selection in html tag',
    command: 'keystroke "w" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + W"
},
{
    text: 'Delete current line of cursor',
    command: 'keystroke "k" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + K"
},
//Navigation/Goto Anywhere
{
    text: 'Quick-open files by name',
    command: 'keystroke "P" using {command down}',
    shortcut: "⌘ + P"
},
{
    text: 'Goto symbol',
    command: 'keystroke "r" using {command down}',
    shortcut: "⌘ + R"
},
// {
//     text: 'Goto word in current file',
//     command: 'keystroke using}',
//     shortcut: ""
// },
{
    text: 'Goto line in current file',
    command: 'keystroke "g" using {control down}',
    shortcut: "⌃ + G"
},
//General
{
    text: 'Command Palette',
    command: 'keystroke "p" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + P"
},
{
    text: 'Show/hide Console',
    command: 'keycode "50" using {control down}',
    shortcut: "⌃ + `"
},
{
    text: 'Toggle fullscreen mode',
    command: 'keystroke "f" using {command down, control down}',
    shortcut: "⌃ + ⌘ + F"
},
{
    text: 'Toggle distraction-free mode',
    command: 'keystroke "f" using {command down, control down, shift down}',
    shortcut: "⌃ + ⇧ + ⌘ + F"
},
{
    text: 'Toggle side bar',
    command: 'keystroke "K" using {command down}',
    shortcut: "⌘ + K"
},
{
    text: 'Show scope in status bar',
    command: 'keystroke "p" using {control down, shift down}',
    shortcut: "⌃ + ⇧ + P"
},
//Find/Replace
{
    text: 'Find',
    command: 'keystroke "f" using {command down}',
    shortcut: "⌘ + F"
},
{
    text: 'Replace',
    command: 'keystroke "f" using {command down, option down}',
    shortcut: "⌘ + ⌥ + F"
},
{
    text: 'Find in files',
    command: 'keystroke "f" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + F"
},
//Scrolling
{
    text: 'Scroll down one page',
    command: 'keystroke "v" using {control down}',
    shortcut: "⌃ + V"
},
{
    text: 'Center current line vertically in page',
    command: 'keystroke "l" using {control down}',
    shortcut: "⌃ + L"
},
{
    text: 'Scroll to end of file',
    command: 'keycode "125" using {command down}',
    shortcut: "⌘ + Down"
},
{
    text: 'Scroll to start of file',
    command: 'keycode "126" using {command down}',
    shortcut: "⌘ + Up"
},
//Tabs
{
    text: 'Open last closed tab',
    command: 'keystroke "t" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + t"
},
// { Need to deal with this
//     text: 'Jump to tab in current group where num is 1-9',
//     command: 'keystroke "N" "U" "M" using {command down}',
//     shortcut: "⌘ + [NUM]"
// },
// { Not working when tried in Sublime
//     text: 'Jump to 10th tab in current group',
//     command: 'keystroke "0" using {command down}',
//     shortcut: "⌘ + 0"
// },
{
    text: 'Cycle left through tabs',
    command: 'keystroke "[" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + ["
},
{
    text: 'Cycle right through tabs',
    command: 'keystroke "]" using {command down, shift down}',
    shortcut: "⌘ + ⇧ + ]"
},
{
    text: 'Cycle up through recent tabs',
    command: 'keycode "48" using {control down}}',
    shortcut: "^ + Tab"
},
{
    text: 'Cycle down through recent tabs',
    command: 'keycode "48" using {shift down}',
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

//Bookmarks
{
    text: 'Toggle bookmark',
    command: 'keycode "113" using {command down}',
    shortcut: "⌘ + F2"
},
{
    text: 'Next bookmark',
    command: 'keycode "113" using}',
    shortcut: "F2"
},
{
    text: 'Previous bookmark',
    command: 'keycode "113" using {shift down}',
    shortcut: "⇧ + F2"
},
{
    text: 'Clear bookmarks',
    command: 'keycode "113" using {command down, shift down}',
    shortcut: "⇧ + ⌘ + F2"
},
//Text manipulation
{
    text: 'Transform to Uppercase',
    command: 'keystroke "k" using {command down} keystroke "u" using {command down}',
    shortcut: "⌘ + K  ⌘ + U"
},
{
    text: 'Transform to Lowercase',
    command: 'keystroke "k" using {command down} keystroke "l" using {command down}',
    shortcut: "⌘ + K  ⌘ + L"
},
{
    text: 'Move text upwards',
    command: 'keycode "126" using {command down, control down}',
    shortcut: "⌘ + ⌃ + up"
},
{
    text: 'Move text downwards',
    command: 'keycode "125" using {command down, control down}',
    shortcut: "⌘ + ⌃ + down"
},
]

module.exports = {
    sublimeShortcuts
}