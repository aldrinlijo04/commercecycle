const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Demand = sequelize.define("Demand", {
  demand_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  business_id: DataTypes.INTEGER,
  product_id: DataTypes.INTEGER,
  quantity_needed: DataTypes.DECIMAL(10,2),
  unit: DataTypes.STRING,
  needed_by: DataTypes.DATE
}, {
  tableName: "demand",
  timestamps: false
});

module.exports = Demand;
