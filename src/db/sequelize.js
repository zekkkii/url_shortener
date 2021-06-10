import { Sequelize } from "sequelize";
import { getConfig } from './database'

const config = getConfig()

export const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  freezeTableName: true,
});