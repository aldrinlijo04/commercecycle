const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define("Business", {
      business_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email_id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
      },
      phone_no: {
        type: DataTypes.STRING,
        allowNull: true
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      registration_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      timestamps: false  // Disable `createdAt` and `updatedAt`
    });
  
    return Business;
  };