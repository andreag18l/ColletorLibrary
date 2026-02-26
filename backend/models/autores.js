'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autores extends Model {
   static associate(models) {
    Autores.hasMany(models.Books, {
      foreignKey: 'author_id'
    });
  }
  }
  

  
  Autores.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autores',
  });
  return Autores;

};