const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Business = sequelize.define("Business", {
  business_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email_id: {
    type: DataTypes.STRING,
    unique: true
  },
  phone_no: DataTypes.STRING,
  location_id: DataTypes.INTEGER,
  registration_date: DataTypes.DATE
}, {
  tableName: "businesses",
  timestamps: false
});

module.exports = Business;
