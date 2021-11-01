'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let operation = [
      { concept: "Sueldo", amount: 150000, date: "2021-09-30", categoryId: 1, categoryTypetId: 1},
      { concept: "Extra", amount: 10000, date: "2021-10-02", categoryId: 1, categoryTypetId: 1},
      { concept: "Almuerzo", amount: 1000, date: "2021-09-30", categoryId: 2, categoryTypetId: 2},
      { concept: "Subte", amount: 15000, date: "2021-09-30", categoryId: 3, categoryTypetId: 2},
      { concept: "Expensas", amount: 3000, date: "2021-09-15", categoryId: 4, categoryTypetId: 2},
      { concept: "Luz", amount: 1000, date: "2021-09-21", categoryId: 4, categoryTypetId: 2},
      { concept: "Gas", amount: 1000, date: "2021-09-10", categoryId: 4, categoryTypetId: 2},
      { concept: "Telefonia", amount: 2000, date: "2021-09-25", categoryId: 4, categoryTypetId: 2},
      { concept: "Wifii", amount: 2000, date: "2021-09-25", categoryId: 4, categoryTypetId: 2},
      { concept: "Finde", amount: 10000, date: "2021-09-25", categoryId: 5, categoryTypetId: 2},
      { concept: "Cumples", amount: 2000, date: "2021-09-25", categoryId: 5, categoryTypetId: 2},
      { concept: "Indumentaria", amount: 2000, date: "2021-09-25", categoryId: 6, categoryTypetId: 2},

    ]

     await queryInterface.bulkInsert('vouchers', operation, {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('vouchers', null, {});

  }
};
