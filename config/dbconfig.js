import dotenv from 'dotenv';
dotenv.config();

import Sequelize from 'sequelize';

const config = {
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

const db = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'postgres',
  freezeTableName: true,
});

export default db;
