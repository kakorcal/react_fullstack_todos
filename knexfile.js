const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: {
      database: 'react_todos_app'
    },
    migrations: {
      directory: path.resolve('server/db/migrations')
    },
    seeds: {
      directory: path.resolve('server/db/seeds')
    }
  }
}