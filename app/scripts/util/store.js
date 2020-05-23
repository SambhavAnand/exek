const path = require('path')
const fs = require('fs')
const { EventEmitter } = require('events')

const moment = require('moment')
const { app, remote } = require('electron')
const fetch = require('electron-fetch').default
const querystring = require('querystring')

const serverURL = process.env.serverURL || "https://exek.herokuapp.com"

function writeToFile(filePath, data, type) {
    if(type==='ASYNC') {
        fs.writeFile(filePath, JSON.stringify(data), function (err) {
            if(err)
                console.log("Error while writing to file", err)
        })
    }
    else {
        fs.writeFileSync(filePath, JSON.stringify(data))
    }
}

function readFileSync(filePath, defaultRetVal) {
    try {
        return JSON.parse(fs.readFileSync(filePath))
    }
    catch (error) {
        return defaultRetVal
    }
}

class ShortcutsStore extends EventEmitter{
    constructor(options) {
        super(options)
        const userDataPath = (app.getPath('userData') || remote.getPath('userData'))
        this.filePath = path.join(userDataPath, 'shortcuts.json')
        this.options = options
        this.data = {}
    }
    getShortcuts = () => {
        const filePath = this.filePath
        const self = this
        const emit = this.emit.bind(this);
        console.log(filePath)
        return new Promise(function (resolve, reject) {
            fs.access(filePath, fs.F_OK, function(err) {
                //File does not exist
                if(err) {
                    fetch(`${serverURL}/getUpdates`)
                    .then(res => res.json())
                    .then(data => {
                        //Parse the required data
                        const fileData = {allShortcuts: data['shortcuts'], lastUpdatedTime: data['newUpdatedTime']}
                        self.data = fileData
                        resolve(fileData['allShortcuts'])
                        //Asynchronously write the data. Think about whether this error needs to be handled
                        writeToFile(filePath, fileData, 'ASYNC')
                    })
                    .catch(error => reject(error))
                }   
                else {
                    //Data was found in the path
                    if (Object.keys(self.data).length === 0 && self.data.constructor === Object) {
                        self.data = readFileSync(filePath)
                        // data = readFileSync(filePath)
                    } 
                    const data = Object.assign({}, self.data)
                    // const data = JSON.parse(fs.readFileSync(filePath))
                    resolve(data['allShortcuts'])
                    //Check for any new updates and update the local store accordingly
                    self.checkForUpdates()
                }
            })
        })
    }

    checkForUpdates = () => {
        const lastUpdatedTime = this.data['lastUpdatedTime']
        if (!lastUpdatedTime)
            return
        const qs = querystring.stringify({lastUpdatedTime: lastUpdatedTime})

        fetch(`${serverURL}/getUpdates?${qs}`)
          .then((res) => res.json())
          .then((serverData) => {
            //New Data is available, update the local data store
            if (serverData["type"] === "NEW_DATA_AVAILABLE") {
              console.log(serverData["type"], "Updating local file store");
              const fileData = {
                allShortcuts: serverData["shortcuts"],
                lastUpdatedTime: serverData["newUpdatedTime"],
              };
              this.data = fileData
              this.emit("newDataAvailable", fileData["allShortcuts"]);
              writeToFile(this.filePath, fileData, "ASYNC");
            }
          })
          .catch((error) => console.log("Error occurred", error));
    }
}

class Store {
    constructor(options) {
        this.dataPath = (app.getPath('userData') || remote.getPath('userData'))
        this.filePath = path.join(this.dataPath, `${options.settingName}.json`)
        this.data = readFileSync(this.filePath, options.default)
    }
    get = (key) => {
        if (key in this.data) {
            return this.data[key]
        }
        else {
            return null
        }
    }
    put = (kvPairs) => {
        kvPairs.forEach(kvPair => {
            this.data[kvPair['key']] = kvPair['val']
        })
        writeToFile(this.filePath, this.data, 'SYNC')
    }
}

module.exports = {
    ShortcutsStore, 
    Store
}
