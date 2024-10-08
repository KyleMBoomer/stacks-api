
require('dotenv').config()
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min:2, 
      max:5
    },
    migrations:{
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory:__dirname + '/knex/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.POSTGRES_URL,
    pool: {
      min: 2,
      max: 5
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
};
