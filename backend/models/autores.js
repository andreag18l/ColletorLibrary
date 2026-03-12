'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    birthYear: {
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
    timestamps: true,
  });

  Author.associate = (models) => {
    Author.hasMany(models.Book, {
      foreignKey: 'author_id',
      as: 'books',
    });
  };

  return Author;
};