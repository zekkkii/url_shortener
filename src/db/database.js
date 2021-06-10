require('dotenv').config()
const path = require('path')

const config = {
  "development": {
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "sqlite",
    "storage": path.join(__dirname, 'db.sqlite')
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres"
  }
}

module.exports = config

module.exports.getConfig = function () {
  return config[process.env.NODE_ENV] || config.development
}