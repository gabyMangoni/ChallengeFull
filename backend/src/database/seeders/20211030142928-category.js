'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let category = [
      { name: "General", typeId: 1},
      { name: "Comida", typeId: 2},
      { name: "Transporte", typeId: 2},
      { name: "Servicios", typeId: 2},
      { name: "Social", typeId: 2},
      { name: "Varios", typeId: 2}
    ]

     await queryInterface.bulkInsert('categories', category, {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('categories', null, {});

  }
};