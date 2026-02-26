'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
     static associate(models) {
    Books.belongsTo(models.Autores, {
      foreignKey: 'author_id'
    });
    Books.hasOne(models.Reading_statuses, {
      foreignKey: 'book_id'
    });
  }
   
  }
 

  Books.init({
    title: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    publication_year: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    page_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};