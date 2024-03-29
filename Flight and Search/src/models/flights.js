'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Flights.belongsTo(models.Airplane, {
        as: 'Airplane',
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE'
      });
    }
  }
  Flights.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true

    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departureAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrivalAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    arrivalTime: DataTypes.DATE,
    departureTime: DataTypes.DATE,
    price:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardingGate: DataTypes.STRING,
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};