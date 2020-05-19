const path = require('path')
const fs = require('fs')
const { EventEmitter } = require('events')

const moment = require('moment')
const { app, remote } = require('electron')
const fetch = require('electron-fetch').default
const querystring = require('querystring')

const serverURL = process.env.serverURL || "https://shortcuts-search.herokuapp.com"

function writeToFileAsync(filePath, data) {
    fs.writeFile(filePath, JSON.stringify(data), function (err) {
        if(err)
            console.log("Error while writing to file", err)
    })
}

class ShortcutsStore extends EventEmitter{
    constructor(options) {
        super(options)
        const userDataPath = (app.getPath('userData') || remote.getPath('userData'))
        this.filePath = path.join(userDataPath, 'shortcuts.json')
        this.options = options
    }
    getShortcuts = () => {
        const filePath = this.filePath
        const emit = this.emit.bind(this);

        return new Promise(function (resolve, reject) {
            fs.access(filePath, fs.F_OK, function(err) {
                //File does not exist
                if(err) {
                    console.log("Data doesnt exist")
                    fetch(`${serverURL}/getUpdates`)
                    .then(res => res.json())
                    .then(data => {
                        //Parse the required data
                        const fileData = {allShortcuts: data['shortcuts'], lastUpdatedTime: data['newUpdatedTime']}
                        resolve(fileData['allShortcuts'])
                        //Asynchronously write the data. Think about whether this error needs to be handled
                        writeToFileAsync(filePath, fileData)
                    })
                    .catch(error => reject(error))
                }   
                else {
                    //Data was found in the path
                    const data = JSON.parse(fs.readFileSync(filePath))
                    resolve(data['allShortcuts'])

                    //Check for any new updates and update the local store accordingly
                    const qs = querystring.stringify({lastUpdatedTime: data['lastUpdatedTime']})

                    fetch(`${serverURL}/getUpdates?${qs}`)
                    .then(res => res.json())
                    .then(serverData => {
                        //New Data is available, update the local data store
                        if(serverData['type'] === 'NEW_DATA_AVAILABLE') {
                            console.log(serverData['type'], "Updating local file store")
                            const fileData = {allShortcuts: serverData['shortcuts'], lastUpdatedTime: serverData['newUpdatedTime']}
                            emit("newDataAvailable", fileData['allShortcuts'])
                            writeToFileAsync(filePath, fileData)
                        }
                    })
                    .catch(error => console.log('Error occurred', error))
                }
            })
        })
    }

}

module.exports = ShortcutsStore
