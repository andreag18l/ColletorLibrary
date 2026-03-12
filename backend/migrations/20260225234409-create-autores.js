'use strict';

/**
 * Table: Authors
 * Columns:
 *  - author_id (PK)
 *  - first_name (NN)
 *  - last_name (NN)
 *  - birth_year
 *  - nationality
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Authors', {
      autor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Primary key for Authors',
      },

      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'Author first name',
      },

      last_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'Author last name',
      },

      birth_year: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'Year of birth (optional)',
      },

      nationality: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: 'Nationality (optional)',
      },
    });

    await queryInterface.addIndex('Authors', ['last_name'], {
      name: 'idx_authors_last_name',
    });

    await queryInterface.addIndex('Authors', ['first_name', 'last_name'], {
      name: 'idx_authors_full_name',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('Authors', 'idx_authors_last_name');
    await queryInterface.removeIndex('Authors', 'idx_authors_full_name');
    await queryInterface.dropTable('Authors');
  },
};