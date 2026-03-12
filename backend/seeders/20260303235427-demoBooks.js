'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        id: 1,
        title: 'The Templar Legacy',
        author_id: 1, 
        genre: 'sci-fiction',
        publication_year: 2003,
        isbn: '978-0451205766', 
        page_count: 240,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'La casa de los espíritus',
        author_id: 2,
        genre: 'novel',
        publication_year: 1982,
        isbn: '978-0061148525', 
        page_count: 448,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  },
};