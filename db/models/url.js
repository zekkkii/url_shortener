import {DataTypes} from 'sequelize';
import db from '../../config/dbconfig';

const url = db.define('urls',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      longUrl: {
        type: DataTypes.STRING,
      },
      shortUrl: {
        type: DataTypes.STRING,
      },
    },
    // extra config
    {
      timestamps: false,
    });

export default url;
