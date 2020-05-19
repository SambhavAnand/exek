const level = require('level')
const path = require('path')

const dbPath = process.env.shortcuts_db_path || path.join(__dirname, 'shortcuts-db')
const db = level(dbPath, {valueEncoding: 'json'})

module.exports = {
    db
}