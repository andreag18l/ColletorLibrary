'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reading_statuses', [
      {
        id: 1,
        book_id: 1,
        status: 'POR_LEER',
        date_started: null,
        date_finished: null,
        rating: null,
        notes: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        book_id: 2,
        status: 'LEYENDO',
        date_started: '2026-03-01',
        date_finished: null,
        rating: 4,
        notes: 'Va bien',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reading_statuses', null, {});
  },
};