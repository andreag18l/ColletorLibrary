'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Authors', key: 'author_id' },
    },
    genre: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    publication_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    page_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'Books',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  });

  Book.associate = (models) => {
    Book.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'author',
    });

    Book.hasOne(models.ReadingStatus, {
      foreignKey: 'book_id',
      as: 'reading_status',
    });
  };

  return Book;
};