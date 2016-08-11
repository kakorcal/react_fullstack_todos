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
  },
  
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds'      
    }
  }
}