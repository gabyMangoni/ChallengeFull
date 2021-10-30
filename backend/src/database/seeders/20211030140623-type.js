'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let types = [
      { name: "Ingresos"},
      { name: "Egresos"}
    ]

     await queryInterface.bulkInsert('types', types, {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('types', null, {});

  }
};
