'use strict';

/**
 * Table: Reading_status
 * Columns:
 *  - status_id (PK)
 *  - book_id (NN, FK -> Books.book_id, UNIQUE para 1:1)
 *  - status (NN)
 *  - date_started
 *  - date_finished
 *  - rating
 *  - notes
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reading_status', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      Book_id: {
      type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Books',
          key: 'book_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
       },

      date_started: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      date_finished: {
        type: Sequelize.DATEONLY,
        allowNull: true,
     },

      rating: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    });

    await queryInterface.addConstraint('Reading_status', {
      fields: ['book_id'],
      type: 'unique',
      name: 'uq_reading_status_book_id',
    });

    await queryInterface.addIndex('Reading_status', ['book_id'], {
      name: 'idx_reading_status_book_id',
    });

    await queryInterface.addConstraint('Reading_status', {
      fields: ['rating'],
      type: 'check',
      name: 'ck_reading_status_rating_range',
      where: {
        rating: {
          [Sequelize.Op.and]: [
            { [Sequelize.Op.gte]: 0 },
            { [Sequelize.Op.lte]: 5 },
          ],
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('Reading_status', 'ck_reading_status_rating_range');
    await queryInterface.removeIndex('Reading_status', 'idx_reading_status_book_id');
    await queryInterface.removeConstraint('Reading_status', 'uq_reading_status_book_id');
    await queryInterface.dropTable('Reading_status');
  },
};