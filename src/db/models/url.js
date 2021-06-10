/* eslint-disable require-jsdoc */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    static associate(models) {
    }
  };
  Url.init({
    longUrl: DataTypes.STRING,
    shortUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'url',
    timestamps: false
  });
  return Url;
};