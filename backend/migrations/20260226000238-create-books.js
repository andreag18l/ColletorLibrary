'use strict';

/**
 * Table: Books
 * Columns:
 *  - book_id (PK)
 *  - title (NN)
 *  - author_id (NN, FK -> Authors.author_id)
 *  - genre
 *  - publication_year
 *  - isbn
 *  - page_count
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Primary key for Books',
      },

      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'Book title',
      },

      author_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'FK to Authors.author_id',
        references: {
          model: 'Authors',
          key: 'author_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },

      genre: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: 'Book genre (optional)',
      },

      publication_year: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'Publication year (optional)',
      },

      isbn: {
        type: Sequelize.STRING(20),
        allowNull: true,
        comment: 'ISBN (optional)',
      },

      page_count: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'Number of pages (optional)',
      },
    });

    await queryInterface.addIndex('Books', ['author_id'], {
      name: 'idx_books_author_id',
    });

    await queryInterface.addIndex('Books', ['title'], {
      name: 'idx_books_title',
    });

    await queryInterface.addConstraint('Books', {
      fields: ['isbn'],
      type: 'unique',
      name: 'uq_books_isbn',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('Books', 'idx_books_author_id');
    await queryInterface.removeIndex('Books', 'idx_books_title');
    await queryInterface.dropTable('Books');
  },
};