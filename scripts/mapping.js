const site_command_map = {
    'mail.google.com': [
        {
            text: "Previous Message",
            command: `keystroke "7" using {command down, shift down}`
        }, 
        {
            text: "Send",
            command: `key code "36" using {command down}` 
        }
    ]
}


module.exports = {
    site_command_map
}
