const express = require('express')
const moment = require('moment')

const {allShortcuts} = require('./shortcuts')
const {helpers} = require('./util')
const app = express()

const port = 3000

app.get('/getShortcuts', (req, res) => {
    res.send(allShortcuts)
})

app.get('/getUpdates', (req, res) => {
    const lastUpdatedTime = req.query['lastUpdatedTime'] ? moment(req.query['lastUpdatedTime']) : null
    helpers.generateUpdates(lastUpdatedTime)
    .then(results => res.send(results))
    .catch(error => res.send(error))
})

app.listen(port, ()=>console.log(`App is listening on PORT: ${port}`))