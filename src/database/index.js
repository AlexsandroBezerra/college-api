const knex = require('knex')

const connectionConfig = require('../../knexfile')

const dbConnection = knex(connectionConfig)

module.exports = { dbConnection }
