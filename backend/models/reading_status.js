'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reading_status extends Model {
  static associate(models) {
    Reading_status.belongsTo(models.Books, {
      foreignKey: 'book_id'
    });
  }
  
  }

  Reading_status.init({
    book_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    date_started: DataTypes.DATE,
    date_finished: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Reading_status',
  });
  return Reading_status;

  
};