const as = require('applescript')
const {
    siteCommandMap
} = require('./mapping.js')

const script = `tell application "Google Chrome"
    repeat with w in windows
		set i to 1
		repeat with t in tabs of w
			if URL of t starts with "https://mail.google.com/" then
				tell application "Google Chrome" to activate
				set active tab index of w to i
                set index of w to 1
                tell application "System Events" to ${siteCommandMap['mail.google.com'][10].command}
                return
			end if
			set i to i + 1
		end repeat
	end repeat
end tell`;

const active = `tell application "Google Chrome" to return URL of active tab of front window`;

const getForeMost = `tell application "System Events"
    set activeApp to name of first application process whose frontmost is true
    if "Google Chrome" is in activeApp then
        display dialog ("test")
    else
        display dialog ("test2")
    end if
end tell`;

async function run() {
    as.execString(active, function (err, ret) {
        if (err) {
            console.log('error occurred')
        }
        console.log(ret)
        as.execString(script, function (errAct, newRet) {
            if (errAct) {
                console.log(errAct)
            } else {
                console.log(newRet)
            }
        })
    })
}

run()