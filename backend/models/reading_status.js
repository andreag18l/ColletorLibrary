'use strict';

module.exports = (sequelize, DataTypes) => {
  const ReadingStatus = sequelize.define('ReadingStatus', {
    status_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Books', key: 'book_id' },
      unique: true, 
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    date_started: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    date_finished: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'Reading_status',   
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  });

  ReadingStatus.associate = (models) => {
    ReadingStatus.belongsTo(models.Book, {
      foreignKey: 'book_id',
      as: 'book',
    });
  };

  return ReadingStatus;
};