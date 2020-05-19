const level = require('level')

const db = level('shortcuts-db')

module.exports = {
    db
}