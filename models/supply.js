const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Supply = sequelize.define("Supply", {
  supply_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // 🔥 This is the key line!
      allowNull: false
  },
  business_id: DataTypes.INTEGER,
  product_id: DataTypes.INTEGER,
  quantity: DataTypes.DECIMAL(10, 2),
  unit: DataTypes.STRING,
  available_from: DataTypes.DATE,
  available_to: DataTypes.DATE
}, {
  tableName: "supply",
  timestamps: false
});

module.exports = Supply;
