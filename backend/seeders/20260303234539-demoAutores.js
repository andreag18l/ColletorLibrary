'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Autores', [
      {
        id: 1,
        firstName: 'Steven',
        lastName: 'Berry',
        birthYear: 1987,
        nationality: 'hondureña',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Isabel',
        lastName: 'Garcia',
        birthYear: 1990,
        nationality: 'mexicana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Autores', { id: [1, 2] }, {});
   },
};