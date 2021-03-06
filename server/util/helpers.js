const moment = require('moment')

const { db } = require('./db')
const { allShortcuts } = require('../shortcuts')


function buildLevelDbStore() {
    const commands = [
        { type: 'del', key: 'lastUpdated'},
        { type: 'put', key: 'lastUpdated', value: moment().utc()}
    ]
    return new Promise(function (resolve, reject) {
        db.batch(commands, function(error) {
            if(error)
                reject(error)
            else
                resolve()
        })
    })
}

function generateUpdates(lastUpdateTime) {
    return new Promise(function (resolve, reject) {
        db.get('lastUpdated')
        .then(lastUpdated => {
            const parsedTime = moment(lastUpdated).utc()
            console.log(parsedTime, lastUpdateTime)
            if(!lastUpdateTime)
                resolve({type: 'FIRST_LOAD', shortcuts: allShortcuts, newUpdatedTime: parsedTime})
            else if(parsedTime.isAfter(lastUpdateTime))
                resolve({type: 'NEW_DATA_AVAILABLE', newUpdatedTime: parsedTime, shortcuts: allShortcuts})
            else if(parsedTime.isBefore(lastUpdateTime))
                resolve({type: 'BAD_ARGUMENT', shortcuts: allShortcuts})
            else 
                resolve({type: 'NO_NEW_DATA'})
        })
        .catch(error => reject(error))
    })
}

function logError(errorMsg) {
    if(errorMsg) {
        db.get('errors', function (err, values) {
            if(err) {
                db.put('errors', [errorMsg], function (err) {
                    if (err)
                        console.log("Error with level db")
                })
            }
            else {
                const newErrors = [...values, errorMsg]
                db.put('errors', newErrors, function (err) {
                    if (err)
                        console.log("An error occurred working with level db")
                })
            }
        })
    }
}

function getErrors() {
    return new Promise(function (resolve, reject) {
        db.get('errors', function(err, values) {
            if (err)
                reject("No Errors logged yet")
            else
                resolve(values)
        })
    })
}

buildLevelDbStore().then(()=>db.get('lastUpdated')).then(data => console.log(data))

module.exports = {
    generateUpdates, 
    buildLevelDbStore,
    logError,
    getErrors
}

