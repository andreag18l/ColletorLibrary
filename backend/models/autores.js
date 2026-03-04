'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    author_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    birth_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }, {
    tableName: 'Authors',      
    freezeTableName: true,
    timestamps: false,         
    underscored: true,
  });

  Author.associate = (models) => {
    Author.hasMany(models.Book, {
      foreignKey: 'author_id',
      as: 'books',
    });
  };

  return Author;
};