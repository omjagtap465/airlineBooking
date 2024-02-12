'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  //   const currentDate = new Date();
  //   const airplanes = [
  //     { model_number: "Boeing 737", capacity: 200 },
  //     { model_number: "Airbus A320", capacity: 200 },
  //     { model_number: "Boeing 747", capacity: 500 },
  //     { model_number: "Airbus A380", capacity: 600 },
  //     { model_number: "Boeing 787", capacity: 200 },
  //     { model_number: "Airbus A350", capacity: 200 },
  //     { model_number: "Boeing 777", capacity: 200 },
  //     { model_number: "Airbus A330", capacity: 200 },
  //     { model_number: "Embraer E190", capacity: 200 },
  //     { model_number: "Bombardier CRJ900", capacity: 200 }
  // ];
  
  
  //     await queryInterface.bulkInsert( 'Airplanes',airplanes.map(airplane=>( {
  //       modelNumber:airplane.model_number,
  //       capacity:airplane.capacity,
  //       createdAt: currentDate,
  //       updatedAt: currentDate,
  

  //     })));
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
