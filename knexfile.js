const path = require('path')

module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    tableName: 'migrations',
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
}
