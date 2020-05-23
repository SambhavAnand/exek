const mailShortcuts = [
  {
    text: `Start a new email`,
    shortcut: `Command-N`,
    command: `keystroke "n" using {command down}`,
  },
  {
    text: `Open a new Mail viewer window`,
    shortcut: `Option-Command-N`,           
    command: `keystroke "n" using {option down, command down}`,
  },
  {
    text: `Attach files to your email`,
    shortcut: `Shift-Command-A`,
    command: `keystroke "a" using {shift down, command down}`,
  },
  {
    text: `Paste text into your email as a quotation`,
    shortcut: `Shift-Command-V`,
    command: `keystroke "v" using {shift down, command down}`,
  },
  {
    text: `Append selected emails to your email`,
    shortcut: `Option-Command-I`,
    command: `keystroke "i" using {option down, command down}`,
  },
  {
    text: `Show the BCC address field in your email`,
    shortcut: `Option-Command-B`,
    command: `keystroke "b" using {option down, command down}`,
  },
  {
    text: `Show the Reply-To address field in your email`,
    shortcut: `Option-Command-R`,
    command: `keystroke "r" using {option down, command down}`,
  },
  {
    text: `Get new emails`,
    shortcut: `Shift-Command-N`,
    command: `keystroke "n" using {shift down, command down}`,
  },
  {
    text: `Erase junk mail`,
    shortcut: `Option-Command-J`,
    command: `keystroke "j" using {option down, command down}`,
  },
  {
    text: `Send emails`,
    shortcut: `Shift-Command-D`,
    command: `keystroke "d" using {shift down, command down}`,
  },
  {
    text: `Reply to the selected email`,
    shortcut: `Command-R`,
    command: `keystroke "r" using {command down}`,
  },
  {
    text: `Reply All to the selected email`,
    shortcut: `Shift-Command-R`,
    command: `keystroke "r" using {shift down, command down}`,
  },
  {
    text: `Forward the selected email`,
    shortcut: `Shift-Command-F`,
    command: `keystroke "f" using {shift down, command down}`,
  },
  {
    text: `Redirect the selected email`,
    shortcut: `Shift-Command-E`,
    command: `keystroke "e" using {shift down, command down}`,
  },
  {
    text: `Mark the selected emails as read`,
    shortcut: `Shift-Command-U`,
    command: `keystroke "u" using {shift down, command down}`,
  },
  {
    text: `Move the selected emails to the Junk mailbox`,
    shortcut: `Shift-Command-J`,
    command: `keystroke "j" using {shift down, command down}`,
  },
  {
    text: `Archive the selected emails`,
    shortcut: `Control-Command-A`,
    command: `keystroke "a" using {control down, command down}`,
  },
  {
    text: `Apply active Mail rules`,
    shortcut: `Control-Command-L`,
    command: `keystroke "l" using {control down, command down}`,
  },
  {
    text: `Format the current email as Plain Text or Rich Format`,
    shortcut: `Shift-Command-T`,
    command: `keystroke "t" using {shift down, command down}`,
  },
  {
    text: `Show the Mail viewer window`,
    shortcut: `Command-0`,
    command: `keystroke "0" using {command down}`,
  },
  {
    text: `Show the Mail Activity window`,
    shortcut: `Control-Command-0`,
    command: `keystroke "0" using {control down, command down}`,
  },
]

module.exports = {
    mailShortcuts
}
