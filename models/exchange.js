const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Exchange = sequelize.define("Exchange", {
  exchange_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  supply_id: DataTypes.INTEGER,
  demand_id: DataTypes.INTEGER,
  exchange_date: DataTypes.DATE,
  status: DataTypes.STRING
}, {
  tableName: "exchanges",
  timestamps: false
});

module.exports = Exchange;
