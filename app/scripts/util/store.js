const path = require('path')
const fs = require('fs')
const { EventEmitter } = require('events')

const moment = require('moment')
const { app, remote } = require('electron')
const fetch = require('electron-fetch').default
const querystring = require('querystring')

const serverURL = process.env.serverURL || "http://localhost:3000"

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
    }
    getShortcuts = () => {
        const filePath = this.filePath
        const emit = this.emit.bind(this);
        console.log(filePath)
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
                        writeToFile(filePath, fileData, 'ASYNC')
                    })
                    .catch(error => reject(error))
                }   
                else {
                    //Data was found in the path
                    const data = readFileSync(filePath)
                    // const data = JSON.parse(fs.readFileSync(filePath))
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
                            writeToFile(filePath, fileData, 'ASYNC')
                        }
                    })
                    .catch(error => console.log('Error occurred', error))
                }
            })
        })
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
