'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // const currentDate = new Date();
    // await queryInterface.bulkInsert('Airports', [
    //   { name: 'Airport1', address: 'Address1', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    //   { name: 'Airport2', address: 'Address2', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    //   { name: 'Airport3', address: 'Address3', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    //   { name: 'Airport4', address: 'Address4', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    //   { name: 'Airport5', address: 'Address5', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    //   { name: 'Airport6', address: 'Address6', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    //   { name: 'Airport7', address: 'Address7', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    //   { name: 'Airport8', address: 'Address8', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    //   { name: 'Airport9', address: 'Address9', cityId: 13,createdAt: currentDate, updatedAt: currentDate },
    // ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Airports', null, {});
  }
};
